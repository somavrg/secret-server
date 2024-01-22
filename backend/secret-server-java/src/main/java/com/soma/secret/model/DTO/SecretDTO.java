package com.soma.secret.model.DTO;

import java.time.LocalDateTime;

public record SecretDTO(
        String hash,
        String secretText,
        LocalDateTime createdAt,
        LocalDateTime expiresAt,
        int remainingViews
) {
}
