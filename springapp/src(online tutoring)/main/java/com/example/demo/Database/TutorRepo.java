package com.example.demo.Database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Tutor;

public interface TutorRepo extends JpaRepository<Tutor,Long> {

}
