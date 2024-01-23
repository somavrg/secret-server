package com.soma.secret.model.repository;

import com.soma.secret.model.Secret;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

public interface SecretRepository extends JpaRepository<Secret, String> {
    Optional<Secret> findSecretByHashAndRemainingViewsGreaterThanAndExpiresAtAfter(UUID hash,
                                                                                   int limit,
                                                                                   LocalDateTime dateTime);
}
