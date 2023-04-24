package com.douzone.smartlogistics.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.douzone.smartlogistics.jwt.JwtSecurityConfig;
import com.douzone.smartlogistics.jwt.TokenProvider;

import lombok.RequiredArgsConstructor;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private final TokenProvider tokenProvider;
    
    //암호화 사용 안함
    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer(){
        return (web) -> web.ignoring()
                    .antMatchers("/favicon.ico");
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                    .csrf().disable()

                    .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

                    /** HttpServletRequest를 사용하는 요청들에 대한 접근 제한 설정*/
                    .and()
                    .authorizeRequests()
                    .antMatchers("/api/sign/login","/").permitAll()
                    //모두 인증이 있어야 실행된다는 의미
                    .anyRequest().authenticated()

                    /**JwtSecurityConfig 적용 */
                    .and()
                    .apply(new JwtSecurityConfig(tokenProvider))

                    .and().build();
    }
}