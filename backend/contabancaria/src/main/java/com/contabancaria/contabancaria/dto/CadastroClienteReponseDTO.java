package com.contabancaria.contabancaria.dto;

public class CadastroClienteReponseDTO {

	private String mensagem;
	
	private Boolean statusValidações;
	
	public CadastroClienteReponseDTO(String mensagem, Boolean statusValidações) {
		super();
		this.mensagem = mensagem;
		this.statusValidações = statusValidações;
	}

	public String getMensagem() {
		return mensagem;
	}
	
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}


	public Boolean getStatusValidações() {
		return statusValidações;
	}

	public void setStatusValidações(Boolean statusValidações) {
		this.statusValidações = statusValidações;
	}
}
