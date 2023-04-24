package com.douzone.smartlogistics.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.smartlogistics.annotation.Jwt;
import com.douzone.smartlogistics.dto.JsonResult;
import com.douzone.smartlogistics.jwt.JwtFilter;
import com.douzone.smartlogistics.jwt.TokenProvider;
import com.douzone.smartlogistics.service.UserService;
import com.douzone.smartlogistics.vo.UserVo;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/sign")
public class JwtController {
	
	 private final TokenProvider tokenProvider;
	    private final AuthenticationManagerBuilder authenticationManagerBuilder;
	    
	    @Autowired
	    private UserService userService;
	    
	    @PostMapping("/login")
	    public ResponseEntity<JsonResult> login(@RequestBody UserVo uservo) {
	        UsernamePasswordAuthenticationToken authenticationToken = 
	            new UsernamePasswordAuthenticationToken(uservo.getId(), uservo.getPassword());

	        //authenticationManagerBuilder가 호출되면서 CustomUserDetailService가 로드됨.
	        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

//	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        String jwt = tokenProvider.createToken(authentication);
	        
	        SecurityContextHolder.getContext().setAuthentication(authentication);
	        
	        HttpHeaders httpHeaders = new HttpHeaders();
	        httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

	        return new ResponseEntity<>(JsonResult.success(userService.findByCodeforlocalStorage(uservo.getId())), httpHeaders, HttpStatus.OK);
	    }
	    
	    @GetMapping("/logout")
	    public ResponseEntity<JsonResult> logout(@Jwt String jwt) {
	    	if(tokenProvider.removeToken(jwt)) {
	    		SecurityContextHolder.getContext().setAuthentication(null);
	    		System.out.println("redis 토큰삭제 성공");
	    		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success("ok"));
	    	}
			
			return ResponseEntity.status(HttpStatus.OK).body(JsonResult.fail("Token error"));
	    }
}