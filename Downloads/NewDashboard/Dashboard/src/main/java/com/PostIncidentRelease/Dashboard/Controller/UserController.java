package com.PostIncidentRelease.Dashboard.Controller;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.PostIncidentRelease.Dashboard.Entitiy.Login_User;
import com.PostIncidentRelease.Dashboard.Entitiy.User;
import com.PostIncidentRelease.Dashboard.Service.Service;

@RestController
public class UserController {

	@Autowired
	private Service service;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/tickets/{Id}/{Is_Admin}")
	public ResponseEntity<List<User>> getUser(@PathVariable("Id") String Id,@PathVariable("Is_Admin") String Is_Admin)
	{ 
		List<User> userList =null;
		try {
			 if(Is_Admin.equals("isAdmin"))  
			 {
				  userList=service.getAllRecords(); 
			 }
			 else
			 {
				  userList=service.getUserByReporterId(Id); 
			 }	 
		  
		}
	    catch(Exception e)
	    {
	    	e.printStackTrace();
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
		
		if(userList.size()<=0)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
		return ResponseEntity.of(Optional.of(userList));	
	}
	
	
	

}
