package com.soma.secret.model.DTO;


public record NewSecretDTO(
        String secretText,
        int expireAfterViews,
        int expireAfter
) {
}
