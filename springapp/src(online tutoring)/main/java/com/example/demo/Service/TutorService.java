package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Database.TutorRepo;
import com.example.demo.model.Tutor;
@Service
public class TutorService {
	@Autowired
	   private TutorRepo tut;
	public Tutor saveDetails(Tutor t) {

		return tut.save(t);
			
	}
	public List<Tutor> getAllDetails()
	{
		return tut.findAll();
	}
	public void deleteDepartmentById(long tut_id)
	{
		tut.deleteById(tut_id);
	}
	public Tutor update(long  tut_id,Tutor t) {
	return tut.save(t);	
	}

}



