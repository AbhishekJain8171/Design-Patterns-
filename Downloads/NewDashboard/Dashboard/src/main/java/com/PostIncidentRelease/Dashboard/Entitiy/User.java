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
@Entity(name = "CP_JIRA_Outage_Dtls_test")
@Table(name = "CP_JIRA_Outage_Dtls_test")
public class User {
	
	@Id
	@Column(name="OutageName")
	private String OutageName;
	
	@Column(name="IncidentDateTime")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	private Date IncidentDateTime;
    
	@Column(name="OutageDesc")
	private String OutageDesc;
	
	@Column(name="Causing_Service")
	private String Causing_Service;
	
	@Column(name="Affected_Service")
	private String Affected_Service;
	
	
	@Column(name="Causing_Area_Key")
	private String Causing_Area_Key;
	
	
	@Column(name="Causing_Area")
	private String Causing_Area;
	
	@Column(name="Causing_Sub_Area_Key")
	private String Causing_Sub_Area_Key;
	
	@Column(name="Causing_Sub_Area")
    private String Causing_Sub_Area;
	
	@Column(name="Root_Cause_Key")
    private String Root_Cause_Key;
	
	@Column(name="Root_Cause_Category")
    private String Root_Cause_Category;
	
	@Column(name="Impairment_Type")
    private String Impairment_Type;
	
	@Column(name=" Status")
    private String Status;
	
	@Column(name="Resolution")
    private String Resolution;
	
	@Column(name="MIM_ID")
    private String MIM_ID;
	
	@Column(name="GCS_PR_ID")
    private String GCS_PR_ID;
	
	@Column(name=" TTR")
    private String TTR;
	
	@Column(name="Tenant_Outage_Mins")
    private String Tenant_Outage_Mins;
	
	@Column(name="Impacted_Tenants")
    private String Impacted_Tenants;
	
	@Column(name="SPC_FL")
    private int SPC_FL;
	
	@Column(name="TimeToBridgeOrEscalate")
    private String TimeToBridgeOrEscalate;
	
	@Column(name="TimeToResolve")
    private String TimeToResolve;
	
	@Column(name="TimeToFirstAnnouncement")
    private String TimeToFirstAnnouncement;
	
	@Column(name="FirstAnnouncementSentAt")
    private String FirstAnnouncementSentAt;
	
	@Column(name="TimeToDefect")
    private String TimeToDefect;
	
	@Column(name="TimeToAttemptRemediation")
    private String TimeToAttemptRemediation;
	
	@Column(name="TimeToInvolve")
    private String TimeToInvolve;
    
	
	@Column(name="FirstMonitorDownAt")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date FirstMonitorDownAt;
    
	@Column(name="BridgeCallStartedAt")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date BridgeCallStartedAt;
    
	@Column(name="DetectedByMonitoring")
    private Boolean DetectedByMonitoring;
    
	@Column(name="DetectedAt")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date DetectedAt;
    
	@Column(name="RemediationAttempted")
	 private Boolean RemediationAttempted;
	
	
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	@Column(name="RemediationAttemptedIniatedAt")
    private Date RemediationAttemptedIniatedAt;
	
    
	@Column(name="ServiceAutoRecover")
    private Boolean ServiceAutoRecover;
	
	@Column(name="TICORestoreService")
    private Boolean TICORestoreService;
    
	@Column(name="BridgeOrEscalate")
    private Boolean BridgeOrEscalate;
    
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
	@Column(name="BridgeOrEscalationAt")
    private Date BridgeOrEscalationAt;
    
    
	@Column(name=" ExpertTeamInvolved")
    private Boolean ExpertTeamInvolved;
    
	
	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="ExpertTeamInvolvedAt")
    private Date ExpertTeamInvolvedAt;
	

	@JsonFormat(pattern="yyyy-MM-dd")
	@Column(name="RestoredAt")
    private Date RestoredAt;
	
	@Column(name="ReporterBy")
    private String ReporterBy;
    
	@Column(name="CreatedAt")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date CreatedAt;
    
	@Column(name="IsDeleted")
    private Boolean IsDeleted;
	
	
	@Column(name="CommunicatedStartTime")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date CommunicatedStartTime;
    
	@Column(name="CommunicatedEndTime")
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date CommunicatedEndTime;
	
	@Column(name="LastMonitorUpAt")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Date LastMonitorUpAt;
	
	@Column(name="Occurrence")
    private Boolean Occurrence;
	
	
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    @Column(name="InRCADate")
    private Date InRCADate;
  
    
    
   @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    @Column(name="InMitigationDate")
    private Date InMitigationDate;



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



public String getOutageDesc() {
	return OutageDesc;
}



public void setOutageDesc(String outageDesc) {
	OutageDesc = outageDesc;
}



public String getCausing_Service() {
	return Causing_Service;
}



public void setCausing_Service(String causing_Service) {
	Causing_Service = causing_Service;
}



public String getAffected_Service() {
	return Affected_Service;
}



public void setAffected_Service(String affected_Service) {
	Affected_Service = affected_Service;
}



public String getCausing_Area_Key() {
	return Causing_Area_Key;
}



public void setCausing_Area_Key(String causing_Area_Key) {
	Causing_Area_Key = causing_Area_Key;
}



public String getCausing_Area() {
	return Causing_Area;
}



public void setCausing_Area(String causing_Area) {
	Causing_Area = causing_Area;
}



public String getCausing_Sub_Area_Key() {
	return Causing_Sub_Area_Key;
}



public void setCausing_Sub_Area_Key(String causing_Sub_Area_Key) {
	Causing_Sub_Area_Key = causing_Sub_Area_Key;
}



public String getCausing_Sub_Area() {
	return Causing_Sub_Area;
}



public void setCausing_Sub_Area(String causing_Sub_Area) {
	Causing_Sub_Area = causing_Sub_Area;
}



public String getRoot_Cause_Key() {
	return Root_Cause_Key;
}



public void setRoot_Cause_Key(String root_Cause_Key) {
	Root_Cause_Key = root_Cause_Key;
}



public String getRoot_Cause_Category() {
	return Root_Cause_Category;
}



public void setRoot_Cause_Category(String root_Cause_Category) {
	Root_Cause_Category = root_Cause_Category;
}



public String getImpairment_Type() {
	return Impairment_Type;
}



public void setImpairment_Type(String impairment_Type) {
	Impairment_Type = impairment_Type;
}



public String getStatus() {
	return Status;
}



public void setStatus(String status) {
	Status = status;
}



public String getResolution() {
	return Resolution;
}



public void setResolution(String resolution) {
	Resolution = resolution;
}



public String getMIM_ID() {
	return MIM_ID;
}



public void setMIM_ID(String mIM_ID) {
	MIM_ID = mIM_ID;
}



public String getGCS_PR_ID() {
	return GCS_PR_ID;
}



public void setGCS_PR_ID(String gCS_PR_ID) {
	GCS_PR_ID = gCS_PR_ID;
}



public String getTTR() {
	return TTR;
}



public void setTTR(String tTR) {
	TTR = tTR;
}



public String getTenant_Outage_Mins() {
	return Tenant_Outage_Mins;
}



public void setTenant_Outage_Mins(String tenant_Outage_Mins) {
	Tenant_Outage_Mins = tenant_Outage_Mins;
}



public String getImpacted_Tenants() {
	return Impacted_Tenants;
}



public void setImpacted_Tenants(String impacted_Tenants) {
	Impacted_Tenants = impacted_Tenants;
}



public int getSPC_FL() {
	return SPC_FL;
}



public void setSPC_FL(int sPC_FL) {
	SPC_FL = sPC_FL;
}



public String getTimeToBridgeOrEscalate() {
	return TimeToBridgeOrEscalate;
}



public void setTimeToBridgeOrEscalate(String timeToBridgeOrEscalate) {
	TimeToBridgeOrEscalate = timeToBridgeOrEscalate;
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



public String getFirstAnnouncementSentAt() {
	return FirstAnnouncementSentAt;
}



public void setFirstAnnouncementSentAt(String firstAnnouncementSentAt) {
	FirstAnnouncementSentAt = firstAnnouncementSentAt;
}



public String getTimeToDefect() {
	return TimeToDefect;
}



public void setTimeToDefect(String timeToDefect) {
	TimeToDefect = timeToDefect;
}



public String getTimeToAttemptRemediation() {
	return TimeToAttemptRemediation;
}



public void setTimeToAttemptRemediation(String timeToAttemptRemediation) {
	TimeToAttemptRemediation = timeToAttemptRemediation;
}



public String getTimeToInvolve() {
	return TimeToInvolve;
}



public void setTimeToInvolve(String timeToInvolve) {
	TimeToInvolve = timeToInvolve;
}



public Date getFirstMonitorDownAt() {
	return FirstMonitorDownAt;
}



public void setFirstMonitorDownAt(Date firstMonitorDownAt) {
	FirstMonitorDownAt = firstMonitorDownAt;
}



public Date getBridgeCallStartedAt() {
	return BridgeCallStartedAt;
}



public void setBridgeCallStartedAt(Date bridgeCallStartedAt) {
	BridgeCallStartedAt = bridgeCallStartedAt;
}



public Boolean getDetectedByMonitoring() {
	return DetectedByMonitoring;
}



public void setDetectedByMonitoring(Boolean detectedByMonitoring) {
	DetectedByMonitoring = detectedByMonitoring;
}



public Date getDetectedAt() {
	return DetectedAt;
}



public void setDetectedAt(Date detectedAt) {
	DetectedAt = detectedAt;
}



public Boolean getRemediationAttempted() {
	return RemediationAttempted;
}



public void setRemediationAttempted(Boolean remediationAttempted) {
	RemediationAttempted = remediationAttempted;
}



public Date getRemediationAttemptedIniatedAt() {
	return RemediationAttemptedIniatedAt;
}



public void setRemediationAttemptedIniatedAt(Date remediationAttemptedIniatedAt) {
	RemediationAttemptedIniatedAt = remediationAttemptedIniatedAt;
}



public Boolean getServiceAutoRecover() {
	return ServiceAutoRecover;
}



public void setServiceAutoRecover(Boolean serviceAutoRecover) {
	ServiceAutoRecover = serviceAutoRecover;
}



public Boolean getTICORestoreService() {
	return TICORestoreService;
}



public void setTICORestoreService(Boolean tICORestoreService) {
	TICORestoreService = tICORestoreService;
}



public Boolean getBridgeOrEscalate() {
	return BridgeOrEscalate;
}



public void setBridgeOrEscalate(Boolean bridgeOrEscalate) {
	BridgeOrEscalate = bridgeOrEscalate;
}



public Date getBridgeOrEscalationAt() {
	return BridgeOrEscalationAt;
}



public void setBridgeOrEscalationAt(Date bridgeOrEscalationAt) {
	BridgeOrEscalationAt = bridgeOrEscalationAt;
}



public Boolean getExpertTeamInvolved() {
	return ExpertTeamInvolved;
}



public void setExpertTeamInvolved(Boolean expertTeamInvolved) {
	ExpertTeamInvolved = expertTeamInvolved;
}



public Date getExpertTeamInvolvedAt() {
	return ExpertTeamInvolvedAt;
}



public void setExpertTeamInvolvedAt(Date expertTeamInvolvedAt) {
	ExpertTeamInvolvedAt = expertTeamInvolvedAt;
}



public Date getRestoredAt() {
	return RestoredAt;
}



public void setRestoredAt(Date restoredAt) {
	RestoredAt = restoredAt;
}



public String getReporterBy() {
	return ReporterBy;
}



public void setReporterBy(String reporterBy) {
	ReporterBy = reporterBy;
}



public Date getCreatedAt() {
	return CreatedAt;
}



public void setCreatedAt(Date createdAt) {
	CreatedAt = createdAt;
}



public Boolean getIsDeleted() {
	return IsDeleted;
}



public void setIsDeleted(Boolean isDeleted) {
	IsDeleted = isDeleted;
}



public Date getCommunicatedStartTime() {
	return CommunicatedStartTime;
}



public void setCommunicatedStartTime(Date communicatedStartTime) {
	CommunicatedStartTime = communicatedStartTime;
}



public Date getCommunicatedEndTime() {
	return CommunicatedEndTime;
}



public void setCommunicatedEndTime(Date communicatedEndTime) {
	CommunicatedEndTime = communicatedEndTime;
}



public Date getLastMonitorUpAt() {
	return LastMonitorUpAt;
}



public void setLastMonitorUpAt(Date lastMonitorUpAt) {
	LastMonitorUpAt = lastMonitorUpAt;
}



public Boolean getOccurrence() {
	return Occurrence;
}



public void setOccurrence(Boolean occurrence) {
	Occurrence = occurrence;
}



public Date getInRCADate() {
	return InRCADate;
}



public void setInRCADate(Date inRCADate) {
	InRCADate = inRCADate;
}



public Date getInMitigationDate() {
	return InMitigationDate;
}



public void setInMitigationDate(Date inMitigationDate) {
	InMitigationDate = inMitigationDate;
}
	
   
	

}
