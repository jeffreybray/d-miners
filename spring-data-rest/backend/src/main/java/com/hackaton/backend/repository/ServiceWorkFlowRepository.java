package com.hackaton.backend.repository;

import com.hackaton.backend.model.ServiceWorkFlow;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ServiceWorkFlowRepository extends CrudRepository<ServiceWorkFlow, Long> { }