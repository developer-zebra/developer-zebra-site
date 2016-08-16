---
title: "EMDK XML programmer's guide"
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


##Introduction

The [ProfileManager](/emdk-for-android/5-0/api/core/ProfileManager/) API exposes a method ( processProfile ) that is used
to install and activate a static XML profile located in your projects Assets folder. The processProfile method returns an [EMDKResults](/emdk-for-android/5-0/api/core/EMDKResults) object that contains status codes and a XML string can provide feedback as to whether a submitted profile was successfully processed, or if there were errors during processing.

	:::java
	EMDKResults results = profileManager.processProfile(String profileName,
				   ProfileManager.PROFILE_FLAG profileFlag,
	 			   String[] extraData);


##Status Codes
The first step to determine if profile processing was a success or failure would be to inspect the [EMDKResults.statusCode](/emdk-for-android/5-0/api/core/EMDKResults/#statuscode) Field. This field will be of type [EMDKResults.STATUS_CODE](/emdk-for-android/5-0/api/core/EMDKResults-STATUS_CODE/).  For this Guide we will focus on the CHECK_XML Status Code.

    :::java
    EMDKResults results = profileManager.processProfile(String profileName,
				   ProfileManager.PROFILE_FLAG profileFlag,
	 			   String[] extraData);

    STATUS_CODE statusCode = results.statusCode;


##CHECK_XML Status Code

In many cases, the Status Code will be [CHECK_XML](/emdk-for-android/5-0/api/core/EMDKResults-STATUS_CODE/) regardless of whether there was a processing error or not. This status code does not clarify if a processing failure happened, only that we need to check the XML response for errors. The CHECK_XML status code should be used to determine if XML processing is necessary. 

		:::java
		STATUS_CODE statusCode = results.statusCode;
		if(results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {
			//parse the response xml to ensure there are no errors
		} else {
			// no need to parse xml
		}


##Parsing Response XML

Parsing the Response XML will require the use of a XML Parser library, in this example we will use org.xmlpull.v1.XmlPullParser. XmlPullParser will allow us to quickly iterate over each START_TAG in the XML response looking for Parm and Characteristic errors.

**Characteristic-Error** - A Characteristic-Error is an element that appears in a Result XML document that is used to indicate a failure when processing a corresponding characteristic in a Request XML document.

**Parm-Error** - A Parm-Error is an element that appears in a Result XML document that is used to indicate a failure when processing a corresponding parm in a Request XML document.


1. First import the XML parsing library

		:::java
		import org.xmlpull.v1.XmlPullParser;
		import org.xmlpull.v1.XmlPullParserException;


2. Next we will get a string representation of the XML Response, Then instantiate a new XMLPullParser object, and set its input to the the XML Response String object.
	
		:::java
		String xmlResponse = results.getStatusString();
		XmlPullParser parser = Xml.newPullParser();
		parser.setInput(new StringReader(xmlResponse));

3. Finally we will use XmlPullParser events to iterate over the XML Response nodes searching for parm and characteristic errors. In this example, I simply log the errors for later review. You will need to add custom error handling to each of the if blocks inside the START_TAG case if logging is not sufficient.

		:::java
		try {
			int event;
			try {
				event = parser.getEventType();
				while (event != XmlPullParser.END_DOCUMENT) {
					String name = parser.getName();
					switch (event) {
						case XmlPullParser.START_TAG:

							if (name.equals("parm-error")) {
								parmName = parser.getAttributeValue(null, "name");
								errorDescription = parser.getAttributeValue(null, "desc");
								Log.d(TAG," (Name: " + parmName + ", Error Description: " + errorDescription + ")");
								return;
							}
							if (name.equals("characteristic-error")) {
								errorType = parser.getAttributeValue(null, "type");
								errorDescription = parser.getAttributeValue(null, "desc");
								Log.d(TAG," (Type: " + errorType + ", Error Description: " + errorDescription + ")");
								return;
							}
							break;
						case XmlPullParser.END_TAG:

							break;
					}
					event = parser.next();
				}

				} catch (Exception e) {
					e.printStackTrace();
				}


			} catch (XmlPullParserException e) {
				e.printStackTrace();
			}
		} else {
			//Profile processed sucessfully
		}



		}


##Example XML


###XML - Without Errors
	
In this example, using Profile Manger, a new profile has been created and a Clock feature has been added. The parms for the clock feature ( emdk_name,AutoTime,TimeZone,Date,and Time) have been set with values. Profile Manager will error check and provide feedback as values are entered into each parm field. This ensures that the values entered are properly formatted. 

>Note: Profile Managers ability to error check parm values is restricted to form fields that have a defined schema such as the Time and Date. Free form fields can not validated.

**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
			<parm name="created_wizard_version" value="4.0.6"/>
		</characteristic>
		<characteristic type="Profile">
			<parm name="ProfileName" value="Profile1"/>
			<parm name="ModifiedDate" value="2016-08-15 13:19:04"/>
			<parm name="TargetSystemVersion" value="4.2"/>
			<characteristic type="Clock" version="4.2">
			<parm name="emdk_name" value="Clock1"/>
			<parm name="AutoTime" value="false"/>
			<parm name="TimeZone" value="GMT-6"/>
			<parm name="Date" value="2016-08-15"/>
			<parm name="Time" value="07:30:00"/>
			</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML response**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
			<characteristic type="extended_status">
				<parm name="code" value="0"/>
				<parm name="description" value=""/>
			</characteristic>
		</characteristic>
		<characteristic type="Clock" version="6.0">
			<parm name="AutoTime" value="false"/>
			<parm name="TimeZone" value="GMT-6"/>
			<parm name="Date" value="2016-08-15"/>
			<parm name="Time" value="07:30:30"/>
		</characteristic>
		</wap-provisioningdoc>



###XML parm-error
In this example, A parm error was introduced. The Time parm does not have the necessary colon characters to delimit Hours-Minutes-Seconds. 


**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
			<parm name="created_wizard_version" value="4.0.6"/>
		</characteristic>
		<characteristic type="Profile">
			<parm name="ProfileName" value="Profile1"/>
			<parm name="ModifiedDate" value="2016-08-15 13:19:04"/>
			<parm name="TargetSystemVersion" value="4.2"/>
			<characteristic type="Clock" version="4.2">
			<parm name="emdk_name" value="Clock1"/>
			<parm name="AutoTime" value="false"/>
			<parm name="TimeZone" value="GMT-6"/>
			<parm name="Date" value="2016-08-15"/>
			<parm name="Time" value="073000"/>
			</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML response** - Note the parm-error for the Time parm

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status"><parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended_status">
			<parm name="code" value="0"/>
			<parm name="description" value=""/>
		</characteristic>
		</characteristic>
			<characteristic type="Clock" version="6.0">
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-6"/>
				<parm name="Date" value="2016-08-15"/>
				<parm-error name="Time" value="073030" desc="Format Error"/>
			</characteristic>
		</wap-provisioningdoc>





###XML characteristic-error
In this example, A characteristic error was introduced. The Clock feature type has be changed from Clock to Clockx. Clockx would be an unknown feature type for the EMDK, and would result in an characteristic-error.  The error description is a bit misleading. Each Profile feature ( Clock, Wifi, Camera Manager, etc...) registers with the EMDK during device startup. In this case, the EMDK thinks that we are trying to use an unregistered profile feature.

**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
			<parm name="created_wizard_version" value="4.0.6"/>
		</characteristic>
		<characteristic type="Profile">
			<parm name="ProfileName" value="Profile1"/>
			<parm name="ModifiedDate" value="2016-08-15 13:19:04"/>
			<parm name="TargetSystemVersion" value="4.2"/>
			<characteristic type="Clockx" version="4.2">
				<parm name="emdk_name" value="Clock1"/>
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-6"/>
				<parm name="Date" value="2016-08-15"/>
				<parm name="Time" value="07:30:30"/>
			</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML response** - Note the characteristic-error for Clockx

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
			<parm name="code" value="6"/>
			<parm name="description" value="Review the XML for details"/>
			<characteristic type="extended_status">
				<parm name="code" value="0"/>
				<parm name="description" value=""/>
			</characteristic>
		</characteristic>
			<characteristic-error type="Clockx" version="4.2" desc=" has not registered with MX Framework yet">
			<parm name="AutoTime" value="false"/><parm name="TimeZone" value="GMT-6"/>
			<parm name="Date" value="2016-08-15"/><parm name="Time" value="07:30:30"/>
			</characteristic-error>
		</wap-provisioningdoc>