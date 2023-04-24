package com.douzone.smartlogistics.jwt;

import java.security.Key;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Base64;
import java.util.Collection;
import java.util.Date;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.douzone.smartlogistics.service.JwtTokenService;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;

@Service
public class TokenProvider implements InitializingBean {
	@Autowired
	private JwtTokenService jwtTokenService;
	
	private final Logger LOGGER = LoggerFactory.getLogger(TokenProvider.class);

	private static final String AUTHORITIES_KEY = "jwt";

	private final String secret;
	private final long tokenValidityInMilliseconds;
	private Key key;

	public TokenProvider(@Value("${jwt.secret}") String secret,
			@Value("${jwt.token-validity-in-seconds}") long tokenValidityInMilliseconds) {
		this.secret = secret;
		this.tokenValidityInMilliseconds = tokenValidityInMilliseconds;
	}

	@Override
	public void afterPropertiesSet() throws Exception {
		byte[] keyBytes = Base64.getDecoder().decode(secret);
		this.key = Keys.hmacShaKeyFor(keyBytes);
	}

	/** token 생성 algorithm */
	public String createToken(Authentication authentication) {
		String authorities = authentication.getAuthorities().stream().map(GrantedAuthority::getAuthority)
				.collect(Collectors.joining(","));

		long now = (new Date()).getTime();
		Date validity = new Date(now + this.tokenValidityInMilliseconds);

//		DateFormat dateFomatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//		
//		System.out.println(dateFomatter.format(now));
//		System.out.println(dateFomatter.format(validity));
		
		String jwt = Jwts.builder().setSubject(authentication.getName()).claim(AUTHORITIES_KEY, authorities)
				.signWith(key, SignatureAlgorithm.HS512).setExpiration(validity).compact();
		
//		System.out.println("체크체크" + authentication);
		System.out.println("조인해서 만들어진 것" + authorities);

		
		jwtTokenService.saveToken(jwt, authorities);
		return jwt;
	}

	/** 인증 정보 조회 */
	public Authentication getAuthentication(String token) {
		Optional.ofNullable(jwtTokenService.getToken(token)).orElseThrow(()->new UsernameNotFoundException("인증정보 존재 하지 않음."));
		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();

		Collection<? extends GrantedAuthority> authorities = Arrays
				.stream(claims.get(AUTHORITIES_KEY).toString().split(",")).map(SimpleGrantedAuthority::new)
				.collect(Collectors.toList());
		User principal = new User(claims.getSubject(), "", authorities);
		return new UsernamePasswordAuthenticationToken(principal, token, authorities);
	}

	/** 토큰 정보 추출 */
	public String resolveToken(String AUTHORIZATION_HEADER,HttpServletRequest request) {
		String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7);
		}
		return null;
	}

	/** token 유효성 검증 */
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
			return true;
		} catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
			LOGGER.info("잘못된 JWT 서명입니다.");
		} catch (ExpiredJwtException e) {
			LOGGER.info("만료된 JWT 토큰입니다.");
		} catch (UnsupportedJwtException e) {
			LOGGER.info("지원하지 않는 JWT 토큰입니다.");
		} catch (IllegalArgumentException e) {
			LOGGER.info("JWT 토큰이 잘못되었습니다.");
		}
		return false;
	}
	
	/** 인증정보 삭제**/
	public boolean removeToken(String token) {
		return jwtTokenService.deleteToken(token);
	}
	
}