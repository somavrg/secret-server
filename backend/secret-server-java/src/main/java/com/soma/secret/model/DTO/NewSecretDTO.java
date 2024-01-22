package com.soma.secret.model.DTO;


public record NewSecretDTO(
        String secret,
        int expireAfterViews,
        int expireAfter
) {
}
