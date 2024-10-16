package com.example.autoregistro.service;

import com.example.autoregistro.model.Auto;
import com.example.autoregistro.repository.AutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class AutoService {

    @Autowired
    private AutoRepository autoRepository;

    public Auto registrarAuto(Auto auto) {
        return autoRepository.save(auto);
    }

    public Auto getAutoPorPlaca(String placa) {
        return autoRepository.findByPlaca(placa)
                .orElseThrow(() -> new RuntimeException("Auto no encontrado con placa: " + placa));
    }

    public boolean puedeCircular(String placa, LocalDateTime fecha) {
        Auto auto = getAutoPorPlaca(placa);
        int ultimoDigito = Character.getNumericValue(placa.charAt(placa.length() - 1));
        DayOfWeek dia = fecha.getDayOfWeek();

        //Logica sencilla para el "Hoy No Circula"
        return switch (dia) {
            case MONDAY -> ultimoDigito != 1 && ultimoDigito != 2;
            case TUESDAY -> ultimoDigito != 3 && ultimoDigito != 4;
            case WEDNESDAY -> ultimoDigito != 5 && ultimoDigito != 6;
            case THURSDAY -> ultimoDigito != 7 && ultimoDigito != 8;
            case FRIDAY -> ultimoDigito != 9 && ultimoDigito != 0;
            case SATURDAY, SUNDAY -> true; // Fines de semana libre transito
        };
    }


    public List<Auto> getAllAutos() {
        return autoRepository.findAll();
    }


    public Auto updateAuto(String placa, Auto autoDetails) {
        Auto auto = getAutoPorPlaca(placa);
        auto.setColor(autoDetails.getColor());
        auto.setModelo(autoDetails.getModelo());
        auto.setChasis(autoDetails.getChasis());
        return autoRepository.save(auto);
    }


    public void deleteAuto(String placa) {
        Auto auto = getAutoPorPlaca(placa);
        autoRepository.delete(auto);
    }
}