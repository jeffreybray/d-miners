package com.hackaton.backend.repository;

import com.hackaton.backend.model.Cabin;
import org.springframework.data.repository.CrudRepository;

public interface CabinRepository extends CrudRepository<Cabin, Long> { }