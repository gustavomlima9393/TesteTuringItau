package com.contabancaria.contabancaria.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tb_conta")
public class Conta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@NotBlank(message = "Insira o número de sua Conta") 
    @Size(min = 5, max = 100, message = "O Atributo Conta deve conter no mínimo 4 números e 1 dígito")
	private Integer numero;

	@NotBlank(message = "Insira o número de sua Agência") 
    @Size(min = 5, max = 100, message = "O Atributo Agência deve conter no mínimo 4 números e 1 dígito")
	private Integer agencia;
	
	@NotBlank(message = "Insira o tipo de sua Conta")
	private String tipo;

	@NotBlank(message = "O seu saldo atual é:")
	private Float saldo;

	@ManyToOne
	private Cliente cliente;

	public Conta(Integer numero, Integer agencia, String tipo, Float saldo) {
		this.numero = numero;
		this.agencia = agencia;
		this.tipo = tipo;
		this.saldo = saldo;
	}

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

	public String getTipo() {
		return tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}

	public float getSaldo() {
		return saldo;
	}

	public void setSaldo(Float saldo) {
		this.saldo = saldo;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

}
