package com.contabancaria.contabancaria.dto;

public class ContaBuscaRequestDTO {

	public ContaBuscaRequestDTO() {};
	
	private Integer numero;

	private Integer agencia;
		
	public int getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public int getAgencia() {
		return agencia;
	}

	public void setAgencia(Integer agencia) {
		this.agencia = agencia;
	}

}
