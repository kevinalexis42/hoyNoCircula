package com.example.autoregistro.controller;

import com.example.autoregistro.model.Auto;
import com.example.autoregistro.service.AutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/autos")
@CrossOrigin(origins = "http://localhost:3000")
public class AutoController {

    @Autowired
    private AutoService autoService;

    @GetMapping("/")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Bienvenido a la API de registro de vehiculos");
    }

    @PostMapping
    public ResponseEntity<Auto> registrarAuto(@RequestBody Auto auto) {
        return ResponseEntity.ok(autoService.registrarAuto(auto));
    }

    @GetMapping("/circulacion")
    public ResponseEntity<Map<String, Object>> consultarCirculacion(
            @RequestParam String placa,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fecha
    ) {
        Map<String, Object> response = new HashMap<>();
        try {
            Auto auto = autoService.getAutoPorPlaca(placa);
            boolean puedeCircular = autoService.puedeCircular(placa, fecha);

            response.put("auto", auto);
            response.put("puedeCircular", puedeCircular);
            response.put("fechaConsulta", fecha);
            response.put("mensaje", puedeCircular
                    ? "El vehículo puede circular en la fecha y hora indicadas."
                    : "El vehículo NO puede circular en la fecha y hora indicadas.");

            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.badRequest().body(response);
        }
    }

    @GetMapping("/{placa}")
    public ResponseEntity<Auto> getAutoPorPlaca(@PathVariable String placa) {
        try {
            Auto auto = autoService.getAutoPorPlaca(placa);
            return ResponseEntity.ok(auto);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<Iterable<Auto>> getAllAutos() {
        return ResponseEntity.ok(autoService.getAllAutos());
    }

    @PutMapping("/{placa}")
    public ResponseEntity<Auto> updateAuto(@PathVariable String placa, @RequestBody Auto autoDetails) {
        try {
            Auto updatedAuto = autoService.updateAuto(placa, autoDetails);
            return ResponseEntity.ok(updatedAuto);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{placa}")
    public ResponseEntity<Void> deleteAuto(@PathVariable String placa) {
        try {
            autoService.deleteAuto(placa);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}