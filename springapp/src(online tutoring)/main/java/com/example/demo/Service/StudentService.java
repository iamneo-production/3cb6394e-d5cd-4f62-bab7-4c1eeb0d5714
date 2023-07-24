package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Database.studRepo;
import com.example.demo.model.Student;


@Service
public class StudentService {
	@Autowired
	   private studRepo rev;
	public Student saveDetails(Student s) {

		return rev.save(s);
			
	}
	public List<Student> getAllDetails()
	{
		return rev.findAll();
	}
	public void deleteDepartmentById(long stud_id)
	{
		rev.deleteById(stud_id);
	}
	public Student update(long  emp_id,Student s) {
	return rev.save(s);	
	}

}
