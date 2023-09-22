package com.hackaton.backend.repository;

import com.hackaton.backend.model.Provider;
import org.springframework.data.repository.CrudRepository;

public interface ProviderRepository extends CrudRepository<Provider, Long> { }