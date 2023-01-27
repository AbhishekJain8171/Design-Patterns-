export class User {
    outageName:String;
    IncidentDateTime:Date;
    OutageDesc:String;
    Causing_Service:String;
    Affected_Service:String;
    Causing_Area_Key:String;
    Causing_Area:String;
    Causing_Sub_Area_Key:String;
    Causing_Sub_Area:String;
    Root_Cause_Key:String;
    Root_Cause_Category:String;
    Impairment_Type:String;
    status:String;
    Resolution:String;
    MIM_ID:String;
    GCS_PR_ID:String;
    TTR:String;
    Tenant_Outage_Mins:String;
    Impacted_Tenants:String;
    SPC_FL:Number;
    TimeToBridgeOrEscalate:String;
    timeToResolve:String;
    timeToFirstAnnouncement:String;
    FirstAnnouncementSentAt:String;
    TimeToDefect:String;
    TimeToAttemptRemediation:String;
    TimeToInvolve:String;
    FirstMonitorDownAt:Date;
    BridgeCallStartedAt:Date;
    DetectedByMonitoring:Boolean;
    DetectedAt:Date;
    RemediationAttempted:Boolean;
    RemediationAttemptedIniatedAt:Date;
    ServiceAutoRecover:Boolean;
    TICORestoreService:Boolean;
    BridgeOrEscalate:Boolean;
    BridgeOrEscalationAt:Date;
    ExpertTeamInvolved:Boolean;
    ExpertTeamInvolvedAt:Date;
    RestoredAt:Date;
    reporterBy:String;
    CreatedAt:Date;
    IsDeleted:Boolean;
    CommunicatedStartTime:Date;
    CommunicatedEndTime:Date;
    LastMonitorUpAt:Date;
    Occurrence:Boolean;
    InRCADate:Date;
    InMitigationDate:Date;

}
