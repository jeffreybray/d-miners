package com.hackaton.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Version;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.rest.core.annotation.RestResource;
//import jakarta.persistence.LastModifiedDate;
import jakarta.persistence.EntityListeners;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.util.Date;
import java.util.Set;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import lombok.Data;
import lombok.ToString;

@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class ServiceRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private @Version Long version;
    private @CreatedDate Date createdDate;
	private @LastModifiedDate Date lastModifiedDate;

    @OneToOne
    //@RestResource(exported = false)
    private Provider provider;
    @OneToOne
    private Service service;
    @OneToOne
    private Navigator navigator;
    @OneToOne
    private ServiceWorkFlow serviceWorkFlow;
    private String note;
    private String attachment;
}