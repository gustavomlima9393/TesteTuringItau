package com.contabancaria.contabancaria.dto;

public class TransferenciaResponseDTO {
	
	private String mensagem;
	private String dataHoraTransacao ;
	private Float saldoEmissor;
	private Float saldoReceptor ;
	
	public TransferenciaResponseDTO(String mensagem, String dataHoraTransacao, Float saldoEmissor,
			Float saldoReceptor) {
		this.mensagem = mensagem;
		this.dataHoraTransacao = dataHoraTransacao;
		this.saldoEmissor = saldoEmissor;
		this.saldoReceptor = saldoReceptor;
	}
	
	public TransferenciaResponseDTO(String mensagem, String dataHoraTransacao) {
		super();
		this.mensagem = mensagem;
		this.dataHoraTransacao = dataHoraTransacao;
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

	public Float getSaldoEmissor() {
		return saldoEmissor;
	}

	public void setSaldoEmissor(Float saldoEmissor) {
		this.saldoEmissor = saldoEmissor;
	}

	public Float getSaldoReceptor() {
		return saldoReceptor;
	}

	public void setSaldoReceptor(Float saldoReceptor) {
		this.saldoReceptor = saldoReceptor;
	}	
	
}
