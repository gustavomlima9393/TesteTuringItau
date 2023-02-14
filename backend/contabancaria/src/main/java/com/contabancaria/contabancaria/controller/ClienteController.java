package com.contabancaria.contabancaria.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.service.ClienteService;

@RestController
@RequestMapping("/clientes")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class ClienteController {
private ClienteService clienteService;
	@PostMapping("/cadastrar")
    public ResponseEntity<Cliente> Post(@RequestBody Cliente cliente){
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(clienteService.CadastrarCliente(cliente));
	}
}
