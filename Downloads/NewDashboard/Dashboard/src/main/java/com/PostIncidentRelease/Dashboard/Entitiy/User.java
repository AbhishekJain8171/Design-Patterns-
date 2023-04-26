package com.PostIncidentRelease.Dashboard.Entitiy;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.NoArgsConstructor;
import java.util.Date;


//This class is storing the structure of Table on which we are performing operation 

@NoArgsConstructor
@Entity(name = "CP_JIRA_Outage_Dtls")
@Table(name = "CP_JIRA_Outage_Dtls")
public class User {	
	@Id
	@Column(name="OutageName")
	private String OutageName;
	
	@Column(name="IncidentDateTime")
    @JsonFormat(pattern = "dd-MM-yyy ", timezone = "UTC")
	private Date IncidentDateTime;
    
	@Column(name="ServiceID")
	private String ServiceID;
	
	
	@Column(name="TimeToResolve")
    private String TimeToResolve;
	
	@Column(name="TimeToFirstAnnouncement")
    private String TimeToFirstAnnouncement;

	
	@Column(name="ReporterBy")
    private String ReporterBy;
	
	@Column(name="Ticket_ID")
    private String Ticket_ID;
	
	
	@Column(name="Reporter")
    private String  Reporter;
	
	
	
	@Column(name="Ticket_Summary")
    private String  Ticket_Summary;
	
	
	@Column(name="Reporter_EmailID")
    private String Reporter_EmailID;
	
	@Column(name="Ticket_Status")
    private String  Ticket_Status;
	
	
	@Column(name="Reporter_FullName")
    private String Reporter_FullName;
	
	@Column(name="Impairment_Type")
    private String Impairment_Type;


	public String getOutageName() {
		return OutageName;
	}


	public void setOutageName(String outageName) {
		OutageName = outageName;
	}


	public Date getIncidentDateTime() {
		return IncidentDateTime;
	}


	public void setIncidentDateTime(Date incidentDateTime) {
		IncidentDateTime = incidentDateTime;
	}


	public String getServiceID() {
		return ServiceID;
	}


	public void setServiceID(String serviceID) {
		ServiceID = serviceID;
	}


	public String getTimeToResolve() {
		return TimeToResolve;
	}


	public void setTimeToResolve(String timeToResolve) {
		TimeToResolve = timeToResolve;
	}


	public String getTimeToFirstAnnouncement() {
		return TimeToFirstAnnouncement;
	}


	public void setTimeToFirstAnnouncement(String timeToFirstAnnouncement) {
		TimeToFirstAnnouncement = timeToFirstAnnouncement;
	}


	public String getReporterBy() {
		return ReporterBy;
	}


	public void setReporterBy(String reporterBy) {
		ReporterBy = reporterBy;
	}


	public String getTicket_ID() {
		return Ticket_ID;
	}


	public void setTicket_ID(String ticket_ID) {
		Ticket_ID = ticket_ID;
	}


	public String getReporter() {
		return Reporter;
	}


	public void setReporter(String reporter) {
		Reporter = reporter;
	}


	public String getTicket_Summary() {
		return Ticket_Summary;
	}


	public void setTicket_Summary(String ticket_Summary) {
		Ticket_Summary = ticket_Summary;
	}


	public String getReporter_EmailID() {
		return Reporter_EmailID;
	}


	public void setReporter_EmailID(String reporter_EmailID) {
		Reporter_EmailID = reporter_EmailID;
	}


	public String getTicket_Status() {
		return Ticket_Status;
	}


	public void setTicket_Status(String ticket_Status) {
		Ticket_Status = ticket_Status;
	}


	public String getReporter_FullName() {
		return Reporter_FullName;
	}


	public void setReporter_FullName(String reporter_FullName) {
		Reporter_FullName = reporter_FullName;
	}


	public String getImpairment_Type() {
		return Impairment_Type;
	}


	public void setImpairment_Type(String impairment_Type) {
		Impairment_Type = impairment_Type;
	}
    



	

}
