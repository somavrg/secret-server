package com.soma.secret.model.repository;

import com.soma.secret.model.Secret;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface SecretRepository extends JpaRepository<Secret, String> {
    Secret findSecretByHash(UUID hash);
}
