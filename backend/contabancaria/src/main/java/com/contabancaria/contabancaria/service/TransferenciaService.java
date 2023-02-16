package com.contabancaria.contabancaria.service;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contabancaria.contabancaria.dto.TransferenciaRequestDTO;
import com.contabancaria.contabancaria.dto.TransferenciaResponseDTO;
import com.contabancaria.contabancaria.model.Conta;
import com.contabancaria.contabancaria.repository.ContaRepository;

@Service
public class TransferenciaService {
		
	@Autowired
	private ContaRepository contaRepository; 
	
	public TransferenciaResponseDTO realizarTransferencia(TransferenciaRequestDTO dto) throws Exception {
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss"); 
		Date date = new Date(); 
		if(dto.getContaOrigem().getNumero() == dto.getContaDestino().getNumero()) {
			return new TransferenciaResponseDTO("Transferência não pode ser para a mesma conta", dateFormat.format(date));
		}
		if(dto.getContaOrigem().getSaldo() < dto.getValorTransferencia()) {			
			return new TransferenciaResponseDTO("Saldo insuficiente para transação", dateFormat.format(date) );
		}
		if(dto.getTipoTransferencia().equalsIgnoreCase("PIX") && dto.getValorTransferencia() > 5000) {
			return new TransferenciaResponseDTO("Valor da transação não pode ultrapassar R$ 5000,00", dateFormat.format(date));
		}
		if(dto.getTipoTransferencia().equalsIgnoreCase("TED") && dto.getValorTransferencia() < 5000 || 
				dto.getTipoTransferencia().equalsIgnoreCase("TED") && dto.getValorTransferencia() > 10000) {
			return new TransferenciaResponseDTO("Valor da transação deve ser entre R$ 5000,00 e R$ 10000,00", dateFormat.format(date));
		}
		if(dto.getTipoTransferencia().equalsIgnoreCase("DOC") && dto.getValorTransferencia() < 10000) {
			return new TransferenciaResponseDTO("Valor da transação não pode ser inferior a R$ 10000,00", dateFormat.format(date));
		}
		
		Conta origem = contaRepository.findByAgenciaAndNumero(dto.getContaOrigem().getAgencia(), dto.getContaOrigem().getNumero());
		origem.setSaldo(dto.getContaOrigem().getSaldo() - dto.getValorTransferencia());
		
		Conta destino = contaRepository.findByAgenciaAndNumero(dto.getContaDestino().getAgencia(), dto.getContaDestino().getNumero());
		destino.setSaldo(dto.getContaDestino().getSaldo() + dto.getValorTransferencia());
		
		contaRepository.saveAll(Arrays.asList(origem, destino));
		return new TransferenciaResponseDTO("Transferência realizada com sucesso", dateFormat.format(date),origem.getSaldo(), destino.getSaldo());
	}
	
}
