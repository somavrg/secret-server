package com.soma.secret.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ApiExceptionHandler {
    @ExceptionHandler(value = ExpiredSecretException.class)
    public ResponseEntity<HttpStatus> handleExpiredSecretException() {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
