package com.soma.secret.service.mapper;

import com.soma.secret.model.DTO.SecretDTO;
import com.soma.secret.model.Secret;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SecretMapper {
    Secret toSecret(SecretDTO secretDTO);
    SecretDTO toSecretDTO(Secret secret);
}
