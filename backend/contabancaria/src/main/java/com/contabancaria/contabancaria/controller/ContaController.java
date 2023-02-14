package com.contabancaria.contabancaria.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.repository.ContaRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/conta")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ContaController {

	@Autowired
	private ContaRepository contaRepository;

	@GetMapping
	public ResponseEntity<List<Conta>> getAll() {
		return ResponseEntity.ok(contaRepository.findAll());
	}

	@GetMapping("/{id}")
	public ResponseEntity<Conta> getById(@PathVariable Long id) {
		return contaRepository.findById(id)
				.map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	@GetMapping("/numero/{numero}")
	public ResponseEntity<List<Conta>> getByNumero(@PathVariable Integer numero) {
		return ResponseEntity.ok(contaRepository.findAllByDescricaoContainingIgnoreCase(numero));
	}

	@GetMapping("/agencia/{agencia}")
	public ResponseEntity<List<Conta>> getByAgencia(@PathVariable Integer agencia) {
		return ResponseEntity.ok(contaRepository.findAllByDescricaoContainingIgnoreCase(agencia));
	}
	
	@GetMapping("/tipo/{tipo}")
	public ResponseEntity<Conta> getById(@PathVariable Integer tipo){
		return contaRepository.findById(tipo).map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
	
	@PostMapping
	public ResponseEntity<Conta> post(@Valid @RequestBody Conta tipo) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(contaRepository.save(tipo));
	}

	@PutMapping
	public ResponseEntity<Conta> put(@Valid @RequestBody Conta conta) {
		return contaRepository.findById(conta.getNumero())
				.map(resposta -> ResponseEntity.status(HttpStatus.OK)
						.body(contaRepository.save(conta)))
				.orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}
}