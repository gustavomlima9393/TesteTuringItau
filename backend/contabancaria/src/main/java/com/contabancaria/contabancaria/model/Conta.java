package com.contabancaria.contabancaria.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_conta")
public class Conta {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name = "NUMERO_DA_CONTA", nullable = false)
	private Integer numero;
	
	 @Column(name = "AGENCIA", nullable = false)
	private Integer agencia;
	 
	 @Column(name = "TIPO_DA_CONTA", nullable = false)
	private Integer tipo;
	 
	 @Column(name = "SALDO", nullable = false)
	private Float saldo;
	 
	 @ManyToOne
	private Cliente cliente;

	public Conta(Integer numero, Integer agencia, Integer tipo, String titular, Float saldo) {
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

	public int getTipo() {
		return tipo;
	}

	public void setTipo(Integer tipo) {
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
