---
title: ProfileConfig
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


Class for dealing with profile data
 
 

**Example Usage:**
	
	:::java
	
	ProfileConfig profileConfig = new ProfileConfig();
	


##Constructors

###ProfileConfig

Creates a new instance of ProfileConfig.
 
 

**Example Usage:**
	
	:::java
	
	ProfileConfig profileConfig = new ProfileConfig();
	


##Public Fields

###profileName

Gets and Sets the profile name.
 
 

**Example Usage:**
	
	:::java
	
	String profileName =  profileConfig.profileName;
	


**Type:**

java.lang.String

###modifiedDate

Gets and Sets the profiles modified date string. 
 
 

**Example Usage:**
	
	:::java
	
	String profileDate = profileConfig.modifiedDate;
	


**Type:**

java.lang.String

###dataCapture

Gets and Sets the profiles DataCapture object [ ProfileConfig.dataCapture](../ProfileConfig#datacapture). 
 
 

**Example Usage:**
	
	:::java
	
	DataCapture dataCapture = profileConfig.dataCapture;
	


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture

###activitySelection

Gets and Sets the activity selection for the profiles [ ProfileConfig.activitySelection](../ProfileConfig#activityselection). 
 If no activities are associated to profile, the profile will be associated to that application for that session.
 
 

**Example Usage:**
	
	:::java
	
	ActivitySelection activitySelection = profileConfig.activitySelection;
	


**Type:**

com.symbol.emdk.ProfileConfig.ActivitySelection









