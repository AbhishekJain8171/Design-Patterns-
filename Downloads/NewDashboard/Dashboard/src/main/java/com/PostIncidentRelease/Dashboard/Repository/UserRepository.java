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
    
    @Query(value="\r\n"
    		+ "  	SELECT JD.OutageName,\r\n"
    		+ "	CASE COUNT(DISTINCT C.ServiceID)\r\n"
    		+ "			          WHEN 1 THEN MAX(C.ServiceID) \r\n"
    		+ "			               ELSE 'MULTIPLE SERVICE' \r\n"
    		+ "			       END AS ServiceID\r\n"
    		+ "			    ,JD.Reporter_FullName,JD.Impairment_Type,JD.IncidentDateTime,JD.ReporterBy,JD.TimeToResolve,JD.TimeToFirstAnnouncement ,\r\n"
    		+ "			    R.Ticket_ID, R.Ticket_Summary, R.Ticket_Status,R.Reporter, R.Reporter_EmailID \r\n"
    		+ "			FROM CP_JIRA_Outage_Dtls JD\r\n"
    		+ "			LEFT JOIN CP_Outage_AffectedServices C ON C.OutageName= JD.OutageName  \r\n"
    		+ "			LEFT JOIN CP_Jira_Outage_Issue_Links IL ON IL.OutageName = JD.OutageName\r\n"
    		+ "			LEFT JOIN CP_Jira_CSI_Register R ON R.Ticket_ID = IL.IssueLink_TicketId\r\n"
    		+ "		    where JD.ReporterBy=:n \r\n"
    		+ "         GROUP BY JD.OutageName, JD.Reporter_FullName,JD.Impairment_Type, JD.IncidentDateTime, JD.ReporterBy, JD.TimeToResolve, JD.TimeToFirstAnnouncement, R.Ticket_ID, R.Ticket_Summary, R.Ticket_Status,R.Reporter,R.Reporter_EmailID order By JD.IncidentDateTime Desc ", nativeQuery = true)
	 List<User> findReporter(@Param("n") String ReporterBy);
		 
	 
	 
  
	 @Query(value="SELECT JD.OutageName,\r\n"
	 		+ "	CASE COUNT(DISTINCT C.ServiceID)\r\n"
	 		+ "			          WHEN 1 THEN MAX(C.ServiceID) \r\n"
	 		+ "			               ELSE 'MULTIPLE SERVICE' \r\n"
	 		+ "			       END AS ServiceID\r\n"
	 		+ "			    ,JD.Reporter_FullName,JD.Impairment_Type,JD.IncidentDateTime,JD.ReporterBy,JD.TimeToResolve,JD.TimeToFirstAnnouncement ,\r\n"
	 		+ "			    R.Ticket_ID, R.Ticket_Summary, R.Ticket_Status,R.Reporter, R.Reporter_EmailID  \r\n"
	 		+ "			FROM CP_JIRA_Outage_Dtls JD\r\n"
	 		+ "			LEFT JOIN CP_Outage_AffectedServices C ON C.OutageName= JD.OutageName  \r\n"
	 		+ "			LEFT JOIN CP_Jira_Outage_Issue_Links IL ON IL.OutageName = JD.OutageName\r\n"
	 		+ "			LEFT JOIN CP_Jira_CSI_Register R ON R.Ticket_ID = IL.IssueLink_TicketId\r\n"
	 		+ "            GROUP BY JD.OutageName, JD.Reporter_FullName,JD.Impairment_Type, JD.IncidentDateTime, JD.ReporterBy, JD.TimeToResolve, JD.TimeToFirstAnnouncement, R.Ticket_ID, R.Ticket_Summary, R.Ticket_Status,R.Reporter, R.Reporter_EmailID order By JD.IncidentDateTime Desc ",nativeQuery = true)
        List<User> findAllRecords();

	
	
	 
	 
}
