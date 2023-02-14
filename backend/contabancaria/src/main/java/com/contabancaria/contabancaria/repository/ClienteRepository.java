package com.contabancaria.contabancaria.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.contabancaria.contabancaria.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Long>{

}
