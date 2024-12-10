package com.example.shop.service.email;

public record CodeWithTimestamp(int code, long timestamp) {
    public CodeWithTimestamp(int code) {
        this(code, System.currentTimeMillis());
    }
}
