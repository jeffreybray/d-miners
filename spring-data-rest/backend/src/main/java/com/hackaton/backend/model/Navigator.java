package com.hackaton.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Version;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.annotation.CreatedDate;
//import jakarta.persistence.LastModifiedDate;
import jakarta.persistence.EntityListeners;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.util.Date;
import com.hackaton.backend.model.Provider;

import lombok.AccessLevel;
import lombok.Setter;
import lombok.Getter;
import lombok.Data;
import lombok.ToString;

@Entity
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class Navigator {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
	private @Version Long version;
    private @CreatedDate Date createdDate;
	private @LastModifiedDate Date lastModifiedDate;

    private String firstName;
    private String lastName;
    private String email;
    
    @ManyToOne
    private Provider provider;

    private String username;
    //@JsonIgnore
    private String password;

}
