package com.contabancaria.contabancaria.service;

import java.nio.charset.Charset;
import java.util.Optional;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.contabancaria.contabancaria.dto.CadastroClienteReponseDTO;
import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.model.ClienteLogin;
import com.contabancaria.contabancaria.repository.ClienteRepository;

import jakarta.transaction.Transactional;

@Service
public class ClienteService {
	
	@Autowired
	private ClienteRepository clienteRepository; 
	
	@Transactional
	public CadastroClienteReponseDTO CadastrarCliente (Cliente cliente) {
		
	    Pattern pattern = Pattern.compile("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!^&+=])(?=\\S+$).{8,8}$");
		
	    Matcher matcher = pattern.matcher(cliente.getSenha());
        if (!matcher.matches()) {
          return new CadastroClienteReponseDTO("Senha inválida", false);
        }

		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

        String senhaEncoder = encoder.encode(cliente.getSenha());
        cliente.setSenha(senhaEncoder);

        clienteRepository.save(cliente);

		
        return new CadastroClienteReponseDTO("Cadastro Criado", true);
	}

	public Optional<ClienteLogin> Logar(Optional<ClienteLogin> clienteLogin) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Cliente> cliente = clienteRepository.findByCpf(clienteLogin.get().getCpf());
		
		if(cliente.isPresent()) {
			if(encoder.matches(clienteLogin.get().getSenha(), cliente.get().getSenha())) {
				
				String auth = clienteLogin.get().getCpf() + ":" + clienteLogin.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);
				
				clienteLogin.get().setToken(authHeader);
				clienteLogin.get().setNome(cliente.get().getNome());
				
				return clienteLogin;
			}
		}
		return null;
	}

	public Cliente buscarClientePorCpf(String cpf) {
		Optional<Cliente> cliente = clienteRepository.findByCpf(cpf);
		if(cliente.isPresent()) {
			return cliente.get();
		}
		return null;
	}

}
