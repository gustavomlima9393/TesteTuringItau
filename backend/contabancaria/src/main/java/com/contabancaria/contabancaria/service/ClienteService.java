package com.contabancaria.contabancaria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository; 
	
	@Transactional
	public Cliente CadastrarCliente (Cliente cliente) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String senhaEncoder = encoder.encode(cliente.getSenha());
        cliente.setSenha(senhaEncoder);

        return clienteRepository.save(cliente);
	}

}
