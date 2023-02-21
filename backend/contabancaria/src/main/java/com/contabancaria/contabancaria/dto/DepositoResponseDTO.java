package com.contabancaria.contabancaria.dto;

public class DepositoResponseDTO {

	private String mensagem;
	private String dataHoraTransacao ;
	private Float saldoAnterior;
	private Float saldoAtualizado;
	
	public DepositoResponseDTO(String mensagem, String dataHoraTransacao, Float saldoAnterior, Float saldoAtualizado) {
		super();
		this.mensagem = mensagem;
		this.dataHoraTransacao = dataHoraTransacao;
		this.saldoAnterior = saldoAnterior;
		this.saldoAtualizado = saldoAtualizado;
		
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public String getDataHoraTransacao() {
		return dataHoraTransacao;
	}
	public void setDataHoraTransacao(String dataHoraTransacao) {
		this.dataHoraTransacao = dataHoraTransacao;
	}
	public Float getSaldoAnterior() {
		return saldoAnterior;
	}
	public void setSaldoAnterior(Float saldoAnterior) {
		this.saldoAnterior = saldoAnterior;
	}
	public Float getSaldoAtualizado() {
		return saldoAtualizado;
	}
	public void setSaldoAtualizado(Float saldoAtualizado) {
		this.saldoAtualizado = saldoAtualizado;
	}
	
	
	
}
