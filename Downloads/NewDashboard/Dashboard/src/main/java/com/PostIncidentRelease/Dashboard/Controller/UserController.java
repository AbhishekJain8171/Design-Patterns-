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

	//Here we are telling Spring Boot to provide the object of Service class
	@Autowired
	private Service service;
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/{Id}")
	public ResponseEntity<List<User>> getUser(@PathVariable("Id") String Id)
	{ 
		List<User> userList =null;
		try {
		//We are returning the records of user in json format 
		    userList=service.getUserByReporterId(Id);
		}
	    catch(Exception e)
	    {
	    	e.printStackTrace();
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
		
		//Here we are checking whether we have user Records or not 
		//if userList is empty means there is no record so we will return the status code not found 
		if(userList.size()<=0)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		
		
		//if userList is not Empty that means we have records so we can return the List
		return ResponseEntity.of(Optional.of(userList));	
	}
	
	
	@CrossOrigin(origins="http://localhost:4200")
	@GetMapping("/login/{Id}/{Password}")
	public ResponseEntity<List<Login_User>> userAuthentication(@PathVariable("Id") String Id,@PathVariable("Password") String Password)
	{ 
		List<Login_User> userList =null;
		try {
	    	    userList=service.AuthenticationCheck(Id,Password);
		    }
	    catch(Exception e)
	    {
	    	e.printStackTrace();
	    	return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	    }
		
		//Here we are checking whether we have user Records or not 
		//if userList is empty means there is no record so we will return the status code not found 
		if(userList.size()<=0) {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		//if userList is not Empty that means we have records so we can return the List
		return ResponseEntity.of(Optional.of(userList));	
	}
	
	
	

}
