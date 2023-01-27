package com.PostIncidentRelease.Dashboard.Entitiy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity(name = "PIR_Login")
@Table(name = "PIR_Login")
public class Login_User {
	
	@Id
	@Column(name="Id")
	private int Id;
	
	@Column(name="ReporterName")
	private String ReporterName;
	
	@Column(name="Reporter_Id")
	private String Reporter_Id;
	
	@Column(name="Email_id")
	private String Email_id;

	@Column(name="Password")
	private String Password;
	
	
	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		Password = password;
	}

	public int getId() {
		return Id;
	}

	public void setId(int id) {
		Id = id;
	}

	public String getReporterName() {
		return ReporterName;
	}

	public void setReporterName(String reporterName) {
		ReporterName = reporterName;
	}

	public String getReporter_Id() {
		return Reporter_Id;
	}

	public void setReporter_Id(String reporter_Id) {
		Reporter_Id = reporter_Id;
	}

	public String getEmail_id() {
		return Email_id;
	}

	public void setEmail_id(String email_id) {
		Email_id = email_id;
	}
	
	
	
	

}
