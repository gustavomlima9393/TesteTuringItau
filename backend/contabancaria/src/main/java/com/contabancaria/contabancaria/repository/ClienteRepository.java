package com.contabancaria.contabancaria.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contabancaria.contabancaria.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	public Optional<Cliente> findByCliente(String cliente);

	public List<Cliente> findAllByNomeContainingIgnoreCase(String string);
}
