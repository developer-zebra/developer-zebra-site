---
title: "Name Value Pair Functionality Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '9.0'
---

##Introduction

The [ProfileManager](/emdk-for-android/9-0/api) API exposes a method ( processProfile ) that is used
to install and activate a static XML profile located in your projects Assets folder. The API also exposes an overload for processProfile that allows one to submit a String Array containing Name=Value Pairs that can be used to replace Name=Value Pairs in a specified Profile before installing and activating that profile. The following guide explains the use of Name=Value Pair replacement and a utility method to help create Name=Value pairs.

##String Array ( extraData )as Name-Value Pair Array
###Method Signature

	:::java
	processProfile(String profileName,
				   ProfileManager.PROFILE_FLAG profileFlag,
	 			   String[] extraData);


###profileName
The profileName argument, can be used to specify the entire profile or a named section of XML Profile.

- To Specify the entire profile, pass the value of the "ProfileName" parm as the profileName argument.
- To Specify a section of a profile, build and pass a String containing the top level "ProfileName", the featureType of the section, and the emdk_name of the section all separated by forward slashes.
 **[profileName]/[featureType]/[feature Name]**

>For example, if my profile is called ‘EmdkSampleProfile-1’ and the name I gave to the Clock feature is 'clock1'. Passing 'profileName' as ' EmdkSampleProfile-1/Clock/clock1’ will just process this part of the profile.

###featureType

Valid FeatureTypes:

- ActivitySelection
- Barcode
- MSR
- Intent
- Keystroke
- IP
- Clock
- PowerMgr
- PersistMgr
- CertMgr
- AppMgr
- AccessMgr
- Wi-Fi
- GprsMgr

	
	
###profileFlag
The profileFlag should be ProfileManager.PROFILE_FLAG.SET.

###extraData
ExtraData should be an array of Strings. Each string element should be `<Feature_Name>.<Param_name>=<param_value>` format. For example "bc1.decoder_upce0=true". The Feature_Name can be from multiple features.

##Example Usage

	:::java
	//EMDKConfig.xml
	<?xml version="1.0" encoding="UTF-8"?><wap-provisioningdoc>
	<characteristic type="ProfileInfo">
	<parm name="created_wizard_version" value="3.0.2"/>
	</characteristic>
	<characteristic type="Profile">
	<parm name="ProfileName" value="ClockProfile-1"/>
	<parm name="ModifiedDate" value="2015-03-16 09:14:43"/>
	<characteristic type="Clock" version="4.2">
	<parm name="emdk_name" value="Clk01"/>
	<parm name="AutoTime" value="false"/>
	<parm name="TimeZone" value="GMT+05:30"/>
	<parm name="Date" value="2001-01-01"/>
	<parm name="Time" value="01:01:01"/>
	</characteristic>
	<characteristic type="Clock" version="4.2">
	<parm name="emdk_name" value="Clk02"/>
	<parm name="AutoTime" value="false"/>
	<parm name="TimeZone" value="GMT+05:30"/>
	<parm name="Date" value="2002-02-02"/>
	<parm name="Time" value="02:02:02"/>
	</characteristic>
	<characteristic type="Clock" version="4.2">
	<parm name="emdk_name" value="Clk03"/>
	<parm name="AutoTime" value="false"/>
	<parm name="TimeZone" value="GMT+05:30"/>
	<parm name="Date" value="2003-03-03"/>
	<parm name="Time" value="03:03:03"/>
	</characteristic>
	</characteristic>
	</wap-provisioningdoc>


	//example.java
	String[] extraData = new String[2];
	extraData[0] 		= "Clk01.Date=2014-10-10"
	extraData[1] 		= "Clk02.Time=10:10:10"
	profileName		= ClockProfile-1/Clock/Clk01
	EMDKResults result = mProfileManager.processProfile(
	profileName, 
	ProfileManager.PROFILE_FLAG.SET, extraData);

In above example the profileName is given as ClockProfile-1/Clock/Clk01. The ClockProfile-1 is the profileName in XML. Clock is the feature Type and Clk01 is the feature Name. The feature name also referred as emdk_name.

##Name Value Pair Utility Function

###CreateNameValuePair
CreateNameValuePair is a static function of the ProfileManager class. This function creates a name value pair string according to the format that is compatible with com.symbol.emdk.ProfileManager.processProfile(String, * PROFILE_FLAG, String[]) function. 

	:::java
	/**
	 * This function creates a name value pair string according to the format 
	 * that is compatible with 
	 * com.symbol.emdk.ProfileManager.processProfile(String, 
	 * PROFILE_FLAG, String[]) function.
	 * @param emdk_name - emdk name String  
	 * @param param_name - Parameter name String
	 * @param param_value - Parameter value String
	 * @return - Name value pair string.
	 */
	String CreateNameValuePair(String emdk_name, String param_name, String param_value)
	
	//This function returns the String in <emdk_name>.<param_name>=<param_value> format.
	//For instance, "clock1.date=2014-10-10";


















