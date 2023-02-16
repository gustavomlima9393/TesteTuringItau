package com.contabancaria.contabancaria.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contabancaria.contabancaria.dto.ContaBuscaRequestDTO;
import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.repository.ContaRepository;

@Service
public class ContaService {

	@Autowired
	private ContaRepository contaRepository; 

	public Conta buscarContaPorAgenciaConta (ContaBuscaRequestDTO dto) {
		return contaRepository.findByAgenciaAndNumero(dto.getAgencia(), dto.getNumero());
	}
	
}
