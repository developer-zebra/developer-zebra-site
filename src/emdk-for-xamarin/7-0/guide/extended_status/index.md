---
title: Extended Status Information User Guide
layout: guide.html
product: EMDK For Xamarin
productversion: '7.0'
---

##Introduction 
The [EMDKResults](/emdk-for-xamarin/7-0/api/EMDKResults) class exposes an Enum ( EXTENDED_STATUS_CODE ). Inspecting that Enum after a profile has been processed could provide detailed error information that may have occured while being processed. 


### Section of EMDKConfig.xml
Name of the file “EMDKConfig.xml. It is fixed and cannot be changed.
Name of the Profile. One config file can contain one or more Profiles. But only one Profile is activated in one instance.
Feature Type
Feature Name.

####Special Test Cases

**Case 01:**

    :::xml
    //XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
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


**Parameters**

    :::java
    extraData[0] 		= "Clk01.Date=2014-10-10"
    extraData[1] 		= "Clk02.Time=10:10:10"
    profileName			= ClockProfile-1
    profileFlag			= PROFILE_FLAG.SET

**Results**

    :::xml
    extendedStatusCode	= NONE
    statusCode	        	= CHECK_XML
    xmlString           	= <?xml version="1.0" encoding="UTF-8"?><wap-provisioningdoc><characteristic type="status"><parm name="code" value="6"/><parm name="description" value="Review the XML for details"/><characteristic type="extended_status"><parm name="code" value="0"/><parm name="description" value=""/></characteristic></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2014-10-10"/><parm name="Time" value="01:01:01"/></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2002-02-02"/><parm name="Time" value="10:10:10"/></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2003-03-03"/><parm name="Time" value="03:03:03"/></characteristic></wap-provisioningdoc>

####Case 02:

    :::xml
    //XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
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

    Parameters
    extraData[0] 		= "Clk01.Date=2014-10-10"
    extraData[1] 		= "Clk02.Time=10:10:10"
    profileName			= ClockProfile-1/Clock/Clk01
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= NAMEVALUE_MISMATCH_EXTRADATA
    statusCode	        	= FAILURE


####Case 03:

    :::xml
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
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

    Parameters
    extraData[0] 		= 
    <?xml version="1.0" encoding="utf-8"?>
    <characteristic type="Profile" >
        <parm name="ProfileName" value="ClockProfile-1" />
        <characteristic type="Clock" >
            <parm name="emdk_name" value="Clk01" />
            <parm name="Date" value="2014-11-22" />
            <parm name="Time" value="11:22:33" />
        </characteristic>
        <characteristic type="Clock" >
            <parm name="emdk_name" value="Clk02" />
            <parm name="Date" value="2014-11-22" />
            <parm name="Time" value="11:22:33" />
        </characteristic>
    </characteristic>


    profileName			= ClockProfile-1
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= NONE
    statusCode	        	= CHECK_XML
    xmlString           	= <?xml version="1.0" encoding="UTF-8"?><wap-provisioningdoc><characteristic type="status"><parm name="code" 
    value="6"/><parm name="description" value="Review the XML for details"/><characteristic type="extended_status"><parm name="code" value="0"/><parm name="description" value=""/></characteristic></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2014-11-22"/><parm name="Time" value="11:22:33"/></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2014-11-22"/><parm name="Time" value="11:22:33"/></characteristic><characteristic type="Clock" version="4.3"><parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT+05:30"/><parm name="Date" value="2003-03-03"/><parm name="Time" value="03:03:03"/></characteristic></wap-provisioningdoc>

####Case 04:

    :::xml
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
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

    Parameters
    extraData[0] 		= 
    <?xml version="1.0" encoding="utf-8"?>
    <characteristic type="Profile" >
        <parm name="ProfileName" value="ClockProfile-1" />
        <characteristic type="Clock" >
            <parm name="emdk_name" value="Clk01" />
            <parm name="Date" value="2014-11-22" />
            <parm name="Time" value="11:22:33" />
        </characteristic>
        <characteristic type="Clock" >
            <parm name="emdk_name" value="Clk02" />
            <parm name="Date" value="2014-11-22" />
            <parm name="Time" value="11:22:33" />
        </characteristic>
    </characteristic>


    profileName			= ClockProfile-1/Clock/Clk01
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= FEATURE_NOT_UNIQUE_EXTRADATA
    statusCode	        	= FAILURE


####Case 05:

    :::xml
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
    <parm name="Time" value="01:01:01"/>
    </characteristic>
    <characteristic type="Clock" version="4.2">
    <parm name="emdk_name" value="Clk01"/>
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

    Parameters
    extraData[0] = "Clk01.Date=2014-10-10";
    extraData[1] = "Clk01.Time=10:10:10";

    profileName			= ClockProfile-1
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= FEATURE_NOT_UNIQUE_CONFIG
    statusCode	        	= FAILURE

####Case 06:

    :::xml
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
    <parm name="Time" value="01:01:01"/>
    </characteristic>
    <characteristic type="Clock" version="4.2">
    <parm name="emdk_name" value="Clk01"/>
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

    Parameters
    extraData[0] = "Clk01.Date=2014-10-10";
    extraData[1] = "Clk01.Time=10:10:10";

    profileName			= ClockProfile-1/Clock/Clk01
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= FEATURE_NOT_UNIQUE_CONFIG
    statusCode	        	= FAILURE
    Case 07:
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
    <parm name="Time" value="01:01:01"/>
    </characteristic>
    <characteristic type="Clock" version="4.2">
    <parm name="emdk_name" value="Clk01"/>
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

    Parameters
    extraData[0] = 
    <?xml version="1.0" encoding="utf-8"?>
    <characteristic type="Profile" >
    <parm name="ProfileName" value="ClockProfile-1" />
    <characteristic type="Clock" >
        <parm name="emdk_name" value="Clk01" />
        <parm name="Date" value="2014-11-22" />
        <parm name="Time" value="11:22:33" />
    </characteristic>
    </characteristic>



    profileName			= ClockProfile-1
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= FEATURE_NOT_UNIQUE_CONFIG
    statusCode	        	= FAILURE

####Case 08:

    :::xml
    XML (EMDKConfig.xml):
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
    <parm name="Date" value="2002-02-01"/>
    <parm name="Time" value="01:01:01"/>
    </characteristic>
    <characteristic type="Clock" version="4.2">
    <parm name="emdk_name" value="Clk01"/>
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

    Parameters
    extraData[0] = 
    <?xml version="1.0" encoding="utf-8"?>
    <characteristic type="Profile" >
    <parm name="ProfileName" value="ClockProfile-1" />
    <characteristic type="Clock" >
        <parm name="emdk_name" value="Clk01" />
        <parm name="Date" value="2014-11-22" />
        <parm name="Time" value="11:22:33" />
    </characteristic>
    </characteristic>



    profileName			= ClockProfile-1/Clock/Clk01
    profileFlag			= PROFILE_FLAG.SET

    Results

    extendedStatusCode	= FEATURE_NOT_UNIQUE_CONFIG
    statusCode	        	= FAILURE













