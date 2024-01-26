package com.soma.secret.model.DTO;


import lombok.NonNull;

public record NewSecretDTO(
        @NonNull
        String secretText,
        @NonNull
        int expireAfterViews,
        @NonNull
        int expireAfter
) {
}
