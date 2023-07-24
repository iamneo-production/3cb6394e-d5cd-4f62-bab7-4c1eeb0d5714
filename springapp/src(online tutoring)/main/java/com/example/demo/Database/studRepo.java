package com.example.demo.Database;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Student;

public interface studRepo extends JpaRepository<Student, Long> {

}
