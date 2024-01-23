package com.soma.secret.service;

import com.soma.secret.exception.ExpiredSecretException;
import com.soma.secret.model.DTO.NewSecretDTO;
import com.soma.secret.model.DTO.SecretDTO;
import com.soma.secret.model.Secret;
import com.soma.secret.model.repository.SecretRepository;
import com.soma.secret.service.mapper.SecretMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class SecretServiceImpl implements SecretService{
    private final SecretRepository secretRepository;
    private final SecretMapper secretMapper;

    @Autowired
    public SecretServiceImpl(SecretRepository secretRepository, SecretMapper secretMapper) {
        this.secretRepository = secretRepository;
        this.secretMapper = secretMapper;
    }

    @Override
    public SecretDTO addSecret(NewSecretDTO newSecretDTO) {

        Secret newSecret = Secret.builder()
                .secretText(newSecretDTO.secret())
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(newSecretDTO.expireAfter()))
                .remainingViews(newSecretDTO.expireAfterViews())
                .build();

        secretRepository.save(newSecret);

        return secretMapper.toSecretDTO(newSecret);
    }

    @Override
    public SecretDTO getSecretByHash(UUID hash) {

        Secret secret = secretRepository.findSecretByHashAndRemainingViewsGreaterThanAndExpiresAtAfter(
                hash, 0, LocalDateTime.now()).orElseThrow(ExpiredSecretException::new);

        int remainingViews = secret.getRemainingViews();

        secret.setRemainingViews(remainingViews - 1);

        secretRepository.save(secret);

        return secretMapper.toSecretDTO(secret);
    }
}
