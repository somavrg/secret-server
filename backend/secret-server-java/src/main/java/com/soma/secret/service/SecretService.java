package com.soma.secret.service;

import com.soma.secret.model.DTO.NewSecretDTO;
import com.soma.secret.model.DTO.SecretDTO;

import java.util.Optional;
import java.util.UUID;

public interface SecretService {
    SecretDTO addSecret(NewSecretDTO newSecretDTO);
    SecretDTO getSecretByHash(UUID hash);
}
