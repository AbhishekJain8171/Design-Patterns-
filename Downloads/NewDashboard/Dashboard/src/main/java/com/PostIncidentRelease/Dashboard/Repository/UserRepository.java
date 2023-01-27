package com.PostIncidentRelease.Dashboard.Repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PostIncidentRelease.Dashboard.Entitiy.Login_User;
import com.PostIncidentRelease.Dashboard.Entitiy.User;


@Repository
public interface UserRepository extends JpaRepository<User, String>{

	//Here we fetching the records form 'CP_JIRA_Outage_Dtls_test' table defined in Dragon_Incident by using JP
	 @Query("select u From CP_JIRA_Outage_Dtls_test u WHERE u.ReporterBy =:n")
	 public List<User> findReporter(@Param("n") String ReporterBy);
	
	 //Here we are check whether we have user in User Login table if yes then we can authenticate the user 
	 //Else we will inform to the application please do not authenticate the user
	 @Query("select u From PIR_Login u WHERE u.Reporter_Id =:n and u.Password =:p")
	 public List<Login_User> checkAuthentication(@Param("n") String Reporter_Id, @Param("p") String Password);
	 
	 
	 //Here we will create the query for fetching records from 'CP_JIRA_Outage_Dtls_test'where TTI or TTR records
	 //We will fetch records where TTI and TTR level reach and Ce needs to take action
	 @Query("select u From CP_JIRA_Outage_Dtls_test u WHERE u.TimeToResolve>40 or u. u.ReporterBy =:n ")
	 public List<User> findOpenRecords(@Param("n") String ReporterBy);
	
	
	 
	 
}
