package com.soma.secret.service;

import com.soma.secret.model.DTO.NewSecretDTO;
import com.soma.secret.model.DTO.SecretDTO;
import com.soma.secret.model.Secret;
import com.soma.secret.model.repository.SecretRepository;
import com.soma.secret.service.mapper.SecretMapper;
import com.soma.secret.service.mapper.SecretMapperImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
class SecretServiceImplTest {

    @Test
    public void testAddSecret() {
        SecretRepository mockRepository = mock(SecretRepository.class);
        SecretMapper mapper = new SecretMapperImpl();

        NewSecretDTO newSecretDTO = new NewSecretDTO("test secret", 60, 5);

        Secret newSecret = new Secret();
        newSecret.setSecretText("test secret");
        newSecret.setCreatedAt(LocalDateTime.now());
        newSecret.setExpiresAt(LocalDateTime.now().plusMinutes(5));
        newSecret.setRemainingViews(60);

        when(mockRepository.save(any(Secret.class))).thenReturn(newSecret);

        SecretService secretService = new SecretServiceImpl(mockRepository, mapper);
        SecretDTO secretDTO = secretService.addSecret(newSecretDTO);

        verify(mockRepository).save(any(Secret.class));
        assertNotNull(secretDTO);
    }

    @Test
    public void testGetSecretByHash() {
        SecretRepository mockRepository = mock(SecretRepository.class);
        SecretMapper mapper = new SecretMapperImpl();

        UUID hash = UUID.randomUUID();

        Secret secret = new Secret();
        secret.setSecretText("test secret");
        secret.setCreatedAt(LocalDateTime.now());
        secret.setExpiresAt(LocalDateTime.now().plusMinutes(5));
        secret.setRemainingViews(1);

        when(mockRepository.findSecretByHashAndRemainingViewsGreaterThanAndExpiresAtAfter(
                eq(hash), eq(0), any(LocalDateTime.class))).thenReturn(Optional.of(secret));

        SecretService secretService = new SecretServiceImpl(mockRepository, mapper);
        SecretDTO secretDTO = secretService.getSecretByHash(hash);

        verify(mockRepository).save(secret);
        assertEquals(secret.getRemainingViews(), 0);
        assertNotNull(secretDTO);
    }
}
