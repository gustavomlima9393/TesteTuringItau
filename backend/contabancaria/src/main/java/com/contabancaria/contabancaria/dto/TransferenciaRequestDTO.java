package com.contabancaria.contabancaria.dto;

import com.contabancaria.contabancaria.model.Conta;

public class TransferenciaRequestDTO {

	private Conta contaOrigem;
	private Conta contaDestino;
	private Float valorTransferencia;
	private String tipoTransferencia;

	public Conta getContaOrigem() {
		return contaOrigem;
	}
	public void setContaOrigem(Conta contaOrigem) {
		this.contaOrigem = contaOrigem;
	}
	
	public Conta getContaDestino() {
		return contaDestino;
	}
	public void setContaDestino(Conta contaDestino) {
		this.contaDestino = contaDestino;
	}
	public Float getValorTransferencia() {
		return valorTransferencia;
	}
	public void setValorTransferencia(Float valorTransferencia) {
		this.valorTransferencia = valorTransferencia;
	}
	public String getTipoTransferencia() {
		return tipoTransferencia;
	}
	public void setTipoTransferencia(String tipoTransferencia) {
		this.tipoTransferencia = tipoTransferencia;
	}

}
