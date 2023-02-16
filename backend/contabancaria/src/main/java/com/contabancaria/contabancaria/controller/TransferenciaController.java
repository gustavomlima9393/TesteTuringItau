package com.contabancaria.contabancaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contabancaria.contabancaria.dto.TransferenciaRequestDTO;
import com.contabancaria.contabancaria.dto.TransferenciaResponseDTO;
import com.contabancaria.contabancaria.service.TransferenciaService;

@RestController
@RequestMapping("/transferencias")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TransferenciaController {
	
	@Autowired
	private TransferenciaService transferenciaService;

	@PostMapping("/transferir")
    public ResponseEntity<TransferenciaResponseDTO> Post(@RequestBody TransferenciaRequestDTO dto) throws Exception{
        return ResponseEntity.status(HttpStatus.OK)
                .body(transferenciaService.realizarTransferencia(dto));
	}
}
