package com.contabancaria.contabancaria.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.contabancaria.contabancaria.model.Conta;

@Repository
public interface ContaRepository extends JpaRepository<Conta, Long> {

	public List<Conta> findAllByDescricaoContainingIgnoreCase(@Param("Número da conta") Integer numero);
	public Optional<Conta> findById(Integer tipo);

}
