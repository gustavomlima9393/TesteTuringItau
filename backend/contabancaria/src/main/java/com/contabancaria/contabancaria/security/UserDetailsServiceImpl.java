package com.contabancaria.contabancaria.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.repository.ClienteRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	
	@Autowired
	private ClienteRepository clienteRepository;

	@Override
	public UserDetails loadUserByUsername(String cpf) throws UsernameNotFoundException {

		Optional<Cliente> cliente = clienteRepository.findByCpf(cpf);

		if (cliente.isPresent())
			return new UserDetailsImpl(cliente.get());
		else
			throw new ResponseStatusException(HttpStatus.FORBIDDEN);
	}
}
