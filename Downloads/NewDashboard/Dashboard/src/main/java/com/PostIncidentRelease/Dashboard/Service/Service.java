package com.PostIncidentRelease.Dashboard.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.PostIncidentRelease.Dashboard.Entitiy.Login_User;
import com.PostIncidentRelease.Dashboard.Entitiy.User;
import com.PostIncidentRelease.Dashboard.Repository.UserRepository;


@Component
public class Service
{
  
   @Autowired
   private UserRepository userRepository;
   
    
   public List<User> getUserByReporterId(String reporterId)
   {
	   List<User> users = null;
	   try 
	   {
	       users= userRepository.findReporter(reporterId);
	       users.forEach(e->System.out.println(e)); 
	 	   System.out.println("SERVICE REPOSITORY"); 
	   }
	   catch(Exception e)
	   {
		   e.printStackTrace();
	   }
    return users;
   }
   
   
   public List<User> getAllRecords()
   {
	   List<User> users = null;
	   try 
	   {
	       users= userRepository.findAllRecords();
	 	   //Here we are using lambda operation in order to print and see whether are getting user records in our list or not
	       //users.forEach(e->System.out.println(e)); 
	 	   //System.out.println("SERVICE REPOSITORY"); 
	   }
	   catch(Exception e)
	   {
		   e.printStackTrace();
	   }
  
	     return users;
   }
   

   
   
   
   
}
 