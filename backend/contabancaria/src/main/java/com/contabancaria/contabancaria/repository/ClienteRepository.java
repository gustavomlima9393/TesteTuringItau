package com.contabancaria.contabancaria.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contabancaria.contabancaria.dto.ContaBuscaRequestDTO;
import com.contabancaria.contabancaria.model.Cliente;
import com.contabancaria.contabancaria.model.Conta;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	public Optional<Cliente> findByCpf(String cpf);

	public List<Cliente> findAllByNomeContainingIgnoreCase(String nome);	
}
