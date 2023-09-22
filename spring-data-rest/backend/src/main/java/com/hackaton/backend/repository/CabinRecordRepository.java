package com.hackaton.backend.repository;

import com.hackaton.backend.model.CabinRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(exported = false)
public interface CabinRecordRepository extends CrudRepository<CabinRecord, Long> { }