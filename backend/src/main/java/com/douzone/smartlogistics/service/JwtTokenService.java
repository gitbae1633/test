package com.douzone.smartlogistics.service;

import java.time.Duration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class JwtTokenService {
    @Autowired
    private RedisTemplate<String, String> jwtRedisTemplate;
    
    final private String key = "jwt:";

    public void saveToken(String token, String role) {
        jwtRedisTemplate.opsForValue().set(key+token, role, Duration.ofHours(5));
    }

    public String getToken(String token) {
        return jwtRedisTemplate.opsForValue().get(key+token);
    }

    public Boolean deleteToken(String token) {
        return jwtRedisTemplate.delete(key+token);
    }
}