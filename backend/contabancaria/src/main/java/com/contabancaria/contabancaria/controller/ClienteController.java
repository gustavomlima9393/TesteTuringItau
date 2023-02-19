package com.contabancaria.contabancaria.controller;

import java.util.Optional;

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

import com.contabancaria.contabancaria.dto.CadastroClienteReponseDTO;
import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.model.ClienteLogin;
import com.contabancaria.contabancaria.service.ClienteService;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;

	@PostMapping("/cadastrar")
    public ResponseEntity<CadastroClienteReponseDTO> Post(@RequestBody Cliente cliente){
        return ResponseEntity.ok(clienteService.CadastrarCliente(cliente));
	}
	
	@PostMapping("/logar")
	public ResponseEntity<ClienteLogin> Autentication(@RequestBody Optional<ClienteLogin> clienteLogin){
		return clienteService.Logar(clienteLogin).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@GetMapping("/{cpf}")
	public ResponseEntity<Cliente> GetByCpf(@PathVariable String cpf){
		return ResponseEntity.ok(clienteService.buscarClientePorCpf(cpf));
	}
}
