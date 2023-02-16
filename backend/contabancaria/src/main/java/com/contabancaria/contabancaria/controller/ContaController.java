package com.contabancaria.contabancaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contabancaria.contabancaria.dto.ContaBuscaRequestDTO;
import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.service.ContaService;

@RestController
@RequestMapping("/contas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContaController {
	
	@Autowired
	private ContaService contaService;
			
	@GetMapping("/buscar")
	public ResponseEntity<Conta> get(@RequestBody ContaBuscaRequestDTO dto) {
		return ResponseEntity.ok(contaService.buscarContaPorAgenciaConta(dto));
	}
}