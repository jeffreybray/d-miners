package com.hackaton.backend.repository;

import com.hackaton.backend.model.ServiceRecord;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

//@RepositoryRestResource(exported = false)
public interface ServiceRecordRepository extends CrudRepository<ServiceRecord, Long> { }