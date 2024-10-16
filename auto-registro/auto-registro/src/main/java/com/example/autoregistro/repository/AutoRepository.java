package com.example.autoregistro.repository;

import com.example.autoregistro.model.Auto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AutoRepository extends JpaRepository<Auto, Long> {
    Optional<Auto> findByPlaca(String placa);
}