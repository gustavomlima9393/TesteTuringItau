package com.contabancaria.contabancaria.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contabancaria.contabancaria.dto.DepositoRequestDTO;
import com.contabancaria.contabancaria.dto.DepositoResponseDTO;
import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.repository.ContaRepository;

@Service
public class ContaService {

	@Autowired
	private ContaRepository contaRepository; 

	public Conta buscarContaPorAgenciaNumero (Integer agencia, Integer numero) {
		Conta contaDb = contaRepository.findByAgenciaAndNumero(agencia, numero);
		return contaDb;
	}
	
	public Conta buscarContaPorId (Long id) {
		 Optional<Conta> contaDb = contaRepository.findById(id);
		 if(contaDb.isPresent()) {
			 return contaDb.get();
		 }
		 return new Conta();
	}
	
	public DepositoResponseDTO realizarDeposito (DepositoRequestDTO dto) {
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		Date date = new Date();
		Conta conta = contaRepository.findByAgenciaAndNumero(dto.getAgencia(), dto.getNumeroConta());
		Float saldoAtual = conta.getSaldo();
		conta.setSaldo(saldoAtual + dto.getValor());
		contaRepository.save(conta);
		return new DepositoResponseDTO("Depósito realizado com sucesso!", dateFormat.format(date), saldoAtual, conta.getSaldo());
	}
	
}
