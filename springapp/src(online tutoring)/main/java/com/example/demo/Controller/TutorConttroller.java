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

import com.example.demo.Service.TutorService;
import com.example.demo.model.Tutor;
@CrossOrigin("*")
@RestController
@RequestMapping("/tutor")
public class TutorConttroller {
	@Autowired
	private TutorService tutservice;

	@GetMapping("/gettut")
	public List<Tutor> getDetails(){
		return tutservice.getAllDetails();
		
	}
	@PostMapping("/addtut")
	public Tutor postDetails(@RequestBody Tutor t) {
		return tutservice.saveDetails(t);
	}
	@DeleteMapping("/delete/{tut_id}")
	public String delete(@PathVariable long tut_id) {
		 tutservice.deleteDepartmentById(tut_id);
		 return "Deleted";
	}
	@PutMapping("/updatetut/{tut_id}")
	public Tutor update(@PathVariable long tut_id,@RequestBody Tutor t) {
	return tutservice.update(tut_id,t);
	}


}
