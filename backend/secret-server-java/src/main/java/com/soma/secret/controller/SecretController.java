package com.soma.secret.controller;

import com.soma.secret.model.DTO.NewSecretDTO;
import com.soma.secret.model.DTO.SecretDTO;
import com.soma.secret.service.SecretService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/secret")
public class SecretController {
    private final SecretService secretService;

    @Autowired
    public SecretController(SecretService secretService) {this.secretService = secretService;}

    @PostMapping
    public ResponseEntity<SecretDTO> addSecret(@RequestBody NewSecretDTO newSecretDTO){

        SecretDTO newSecret = secretService.addSecret(newSecretDTO);

        return new ResponseEntity<>(newSecret, HttpStatus.OK);
    }

    @GetMapping("/{hash}")
    public ResponseEntity<SecretDTO> getSecretByHash(@PathVariable UUID hash){

       SecretDTO secret = secretService.getSecretByHash(hash);

       return new ResponseEntity<>(secret, HttpStatus.OK);
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<HttpStatus> handleInvalidInput(HttpServletRequest request, Exception e) {
        return new ResponseEntity<>(HttpStatus.METHOD_NOT_ALLOWED);
    }
}
