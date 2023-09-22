package com.hackaton.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.CreatedDate;
//import jakarta.persistence.LastModifiedDate;
import jakarta.persistence.EntityListeners;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.util.Date;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import lombok.Data;
import lombok.ToString;

@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Cabin {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private @Version Long version;
    private @CreatedDate Date createdDate;
	private @LastModifiedDate Date lastModifiedDate;

    private String cabinName;
    private Long cabinNumber;
    private String cabinLocation;

}