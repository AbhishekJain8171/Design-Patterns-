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
   //Using Autowired in order to tell the Spring boot to provide the object of UserRepository class	
   @Autowired
   private UserRepository userRepository;
   
   //Here we are defining the Business logic to fetch records of User 
   public List<User> getUserByReporterId(String reporterId)
   {
	   List<User> users = null;
	   
	   //We are fetching records of Users By using there ReportedId 
	   //We are try and catch in order to handle Exception 
	   try 
	   {
	       users= userRepository.findReporter(reporterId);
	 	   //Here we are using lambda operation in order to print and see whether are getting user records in our list or not
	       //users.forEach(e->System.out.println(e)); 
	 	   //System.out.println("SERVICE REPOSITORY"); 
	   }
	   catch(Exception e)
	   {
		   e.printStackTrace();
	   }
       
	   //Returning the User List
	     return users;
   }
   
   public List<Login_User> AuthenticationCheck(String Id,String Password)
   {
	   List<Login_User> users = null;
	   //We are try and catch in order to handle Exception 
	   try 
	   {
		   //Here are we are checking there is any record of user present in database or not if yes means we will Authenticate the user
		   users= userRepository.checkAuthentication(Id,Password);
          //Here we are using lambda operation in order to print and see whether are getting user records in our list or not
//	       users.forEach(e->System.out.println(e)); 
//	 	   System.out.println("SERVICE REPOSITORY"); 
	   }
	   catch(Exception e)
	   {
		   e.printStackTrace();
	   }
       
	   //Returning the User List
	     return users;
   }
   
   
   
   
}
 