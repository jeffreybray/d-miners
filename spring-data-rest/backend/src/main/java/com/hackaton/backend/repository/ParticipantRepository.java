package com.hackaton.backend.repository;

import com.hackaton.backend.model.Participant;
import org.springframework.data.repository.CrudRepository;

public interface ParticipantRepository extends CrudRepository<Participant, Long> { }