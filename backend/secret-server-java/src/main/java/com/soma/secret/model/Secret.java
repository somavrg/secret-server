package com.soma.secret.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Secret {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID hash;

    private String secretText;

    private LocalDateTime createdAt;

    private LocalDateTime expiresAt;

    private int remainingViews;
}
