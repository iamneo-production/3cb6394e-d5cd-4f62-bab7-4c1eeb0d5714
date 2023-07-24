package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.StudentService;
import com.example.demo.model.Student;

@CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentConntroller {
	@Autowired
	private StudentService stuservice;

	@GetMapping("/getstu")
	public List<Student> getDetails(){
		return stuservice.getAllDetails();
		
	}
	@PostMapping("/addstu")
	public Student postDetails(@RequestBody Student s) {
		return stuservice.saveDetails(s);
	}
	@DeleteMapping("/delete/{stu_id}")
	public String delete(@PathVariable int stu_id) {
		 stuservice.deleteDepartmentById(stu_id);
		 return "Deleted";
	}
	@PutMapping("/updatestu/{stu_id}")
	public Student update(@PathVariable int stu_id,@RequestBody Student s) {
	return stuservice.update(stu_id,s);
	}


}
