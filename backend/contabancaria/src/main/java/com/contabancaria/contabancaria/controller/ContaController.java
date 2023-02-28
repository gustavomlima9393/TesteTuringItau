package com.contabancaria.contabancaria.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contabancaria.contabancaria.dto.DepositoRequestDTO;
import com.contabancaria.contabancaria.dto.DepositoResponseDTO;
import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.service.ContaService;

@RestController
@RequestMapping("/contas")
@CrossOrigin("*")
public class ContaController {

	@Autowired
	private ContaService contaService;

	@GetMapping("/{agencia}/{numero}")
	public ResponseEntity<Conta> get(@PathVariable Integer agencia, @PathVariable Integer numero) {
		return ResponseEntity.ok(contaService.buscarContaPorAgenciaNumero(agencia, numero));	
	}

	@PostMapping("/depositar")
	public ResponseEntity<DepositoResponseDTO> Post(@RequestBody DepositoRequestDTO dto) throws Exception {
		return ResponseEntity.status(HttpStatus.OK).body(contaService.realizarDeposito(dto));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Conta> get(@PathVariable Long id) {
		return ResponseEntity.ok(contaService.buscarContaPorId(id));	
	}
}