package com.hackaton.backend.repository;

import com.hackaton.backend.model.Service;
import org.springframework.data.repository.CrudRepository;

public interface ServiceRepository extends CrudRepository<Service, Long> { }