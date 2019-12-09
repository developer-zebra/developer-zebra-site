---
title: "EMDK Profile Manager Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---


##Introduction


This document provides the overview on getting the profile manager
instance, profile XML, applying profiles, interpreting result returned
by the Profile Manager Methods and the response XML schema for the
developer to understand and configure the device based their application
specific requirements.

##Getting ProfileManager


The EMDKManager provides two ways to get the ProfileManager instance.

1.  EMDKManager.getInstance

2.  EMDKManager.getInstanceAsync

###EMDKManager.getInstance


The EMDKManager.getInstance is synchronous method which immediately
returns profile mananger instance independent of the underlying
components such as MX Framework ready to use or not.

The Profile Manager related components will take few seconds to
initialize for it to be ready to use after the device booted. If the
application tries to use the EMDKManager.getInstance to set the profile
immediately the device boot will result in permission error because the
profile manager component such as MX Framework not ready to use.


		:::java
		public class MainActivity extends Activity implements EMDKListener

			//Declare a variable to store ProfileManager object
			private ProfileManager profileManager = null;
			//Declare a variable to store EMDKManager object
			private EMDKManager emdkManager = null;


			@Override
			protected void onCreate(Bundle savedInstanceState) {
				super.onCreate(savedInstanceState);
				setContentView(R.layout.activity_main);
				//The EMDKManager object will be created and returned in the callback.
				EMDKResults results = EMDKManager.getEMDKManager(getApplicationContext(), 
						this);
				//Check the return status of EMDKManager object creation.
				if(results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {
					//EMDKManager object creation success
				}else {
					//EMDKManager object creation failed
				}
			}

			@Override
			protected void onDestroy() {

				super.onDestroy();

				//Clean up the objects created by EMDK manager
				if (profileManager != null)
					profileManager = null;

				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}
			@Override
			public void onClosed() {

				//This callback will be issued when the EMDK closes unexpectedly.
				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}

			@Override
			public void onOpened(EMDKManager emdkManager) {

				this.emdkManager = emdkManager;

				//Get the ProfileManager object to process the profiles

			profileManager =  (ProfileManager)emdkManager.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);

			}
		}



###EMDKManager.getInstanceAsync


The EMDKManager.getInstanceAsync is an asynchronous call which returns
profile manager instance through the registered status listener callback
when the profile manger components such as such as MX Framework is
initialized and ready to use.

This async method is recommended if the application wants to set the
profile immediately after the device boot complete.

		:::java
		public class MainActivity extends Activity implements EMDKListener, EMDKManager.StatusListener{
			//Declare a variable to store ProfileManager object
			private ProfileManager profileManager = null;
			//Declare a variable to store EMDKManager object
			private EMDKManager emdkManager = null;

			@Override
			protected void onCreate(Bundle savedInstanceState) {
				super.onCreate(savedInstanceState);
				setContentView(R.layout.activity_main);
				//The EMDKManager object will be created and returned in the callback.
				EMDKResults results = 
				EMDKManager.getEMDKManager(getApplicationContext(), this);
				//Check the return status of EMDKManager object creation.
				if(results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {
					//EMDKManager object creation success
				}else {
					//EMDKManager object creation failed
				}
			}

			@Override
			protected void onDestroy() {

				super.onDestroy();

				//Clean up the objects created by EMDK manager
				if (profileManager != null)
					profileManager = null;

				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}
			@Override
			public void onClosed() {

				//This callback will be issued when the EMDK closes unexpectedly.
				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}

			@Override
			public void onOpened(EMDKManager emdkManager) {

				this.emdkManager = emdkManager;

				//Get the ProfileManager object using async to process the profiles
				try {
					emdkManager.getInstanceAsync(EMDKManager.FEATURE_TYPE.PROFILE, 
								MainActivity.this);
				} catch (EMDKException e) {
					e.printStackTrace();
				}
			}
		
			@Override
			public void onStatus(EMDKManager.StatusData statusData, EMDKBase emdkBase) 
			{
				
				if(statusData.getResult() == EMDKResults.STATUS_CODE.SUCCESS) {
					if(statusData.getFeatureType() == EMDKManager.FEATURE_TYPE.PROFILE) 
				{
						profileManager = (ProfileManager)emdkBase;
					}
				} else {
					//Error occurred
				}
			}
		}


##Profile XML


When the developer creates the profile based on their configuration
requirement in the Profile Manager wizard in IDE, selects and configures
features, the settings will be saved under the application’s assets
folder as “EMDKConfig.xml”.

The sample Profile XML (i.e. `EMDKConfig.xml`) shown below was generated by the Profile Manager Wizard using features such as RemoteScannerMgr and AppMgr:

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-07 14:15:09"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="AccessMgr" version="4.3">
		<parm name="emdk\_name" value="AccessMgr1"/>
		<parm name="OperationMode" value="2"/>
		<parm name="SystemSettings" value="1"/>
		<parm name="DeletePackagesAction" value="1"/>
		<parm name="DeletePackageNames" value="com.test.error"/>
		<parm name="AddPackagesAction" value="1"/>
		<parm name="AddPackageNames" value="com.symbol.profilesample1"/>
		<parm name="AddPackagesActionAllowXML" value="1"/>
		<parm name="AddPackageNamesAllowXML" value="com.symbol.profilesample1"/>
		<parm name="AllowSubmitXMLAction" value="2"/>
		</characteristic>
		<characteristic type="RemoteScannerMgr" version="5.2">
		<parm name="emdk\_name" value="ResetDefaultScanner"/>
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Install"/>
		<parm name="APK" value="/sdcard/test.apk"/>
		</characteristic>
		<characteristic type="PowerMgr" version="4.2">
		<parm name="emdk\_name" value="BringToSleep"/>
		<parm name="ResetAction" value="1"/>
		</characteristic>
		<characteristic type="Clock" version="6.0">
		<parm name="emdk\_name" value="SetTime1"/>
		<parm name="AutoTimeZone" value="false"/>
		<parm name="TimeZone" value="GMT-5"/>
		<parm name="AutoTime" value="false"/>
		<parm name="Date" value="2016-09-10"/>
		<parm name="Time" value="12:00:00"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

* An EMDKConfig.xml begins with node `<wap-provisioningdoc>` andends with `</wap-provisioningdoc>`

* After the `<wap-provisioningdoc>` tag, there will be a
    characteristic node with type named “ProfileInfo” that provides
    information on the Profile Manager Wizard version used to create
    the profile. This node is reserved EMDK internal use only and do not
    alter this. This info will not be set on the device and also will
    not be returned in the response XML.

		:::xml
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>

* Next would be a characteristic node with the type named Profile as
    shown below. An EMDKConfig.xml can have one or more Profile nodes
    based on the number of profiles created.

		:::xml
		<characteristic type="Profile">
			<!-- Profile contents -->
		</characteristic>.

* Each Profile node will have parm nodes which include **ProfileName**
    to identify the profile, **ModifiedDate** for for the profiles last
    modified date and **TargetSystemVersion** for the target MX version
    chosen to create profile. These parm nodes are reserved for EMDK
    internal use only and should not be manually altered. This info will
    not be set on the device and also will not be returned in the
    response XML.

* The profile name will be used to inform the ProfileManager methods
    to apply user specified profile on the device. The modified date and
    target MX version are used for profile maintenance such as editing,
    renaming and modifying profiles in the profile manager wizard.

* Each profile will have one or more characteristic feature nodes with
    parm settings specific to that feature. An example of feature node
    is shown below.

		:::xml
		<characteristic type="AppMgr" version="5.1">
			<parm name="emdk\_name" value=" DemoInstallation"/>
			<parm name="Action" value="Install"/>
			<parm name="APK" value="/sdcard/DemoApp.apk"/>
		</characteristic>

-   The characteristic node for each feature will have the attributes
    type and version.

    * The type indicates the feature

    * The version indicates the feature specification version

-   Each feature characteristic node will have one or more parm and
    characteristic nodes which define the settings for that feature. The
    parm node (emdk\_name) provides the name assigned to that feature
    which will be used by the Profile Manager API to identify feature
    node and must be a unique name within that profile. The emdk\_name
    value will not be set on the device and also will not be returned in
    the response XML.

##Applying Profiles


The [ProfileManager](/emdk-for-android/7-4/api/core/ProfileManager/) API
exposes methods such as processProfile and processProfileAsync that are
used to apply a XML profile located in the Application’s Assets folder
and/or optional profile data passed as extraData to these methods.

The ProfileManager.processProfile is blocking call which blocks the main
thread. To avoid ANRs while applying profile, a developer should call
processProfile on a worker thread or use the non blocking call
ProfileManager.processProfileAsync which returns the status through the
registered callback. The asynchronous method
ProfileManager.processProfileAsync is recommended than the
synchronous/blocking method ProfileManager.processProfile .

ProcessProfile and processProfileAsync methods return
an [EMDKResults](/emdk-for-android/7-4/api/core/EMDKResults/) object
that provides the status of the requested profile action. The below code
snippet shows how to use the ProfileManager.processProfileAsync set
profile on the device.

		:::java
		public class MyProfileActivity extends Activity implements EMDKListener, ProfileManager.DataListener {

			private EMDKManager emdkManager = null;
			@Override
			protected void onCreate(Bundle savedInstanceState) {
				super.onCreate(savedInstanceState);
				EMDKResults results =
						EMDKManager.getEMDKManager(getApplicationContext(), this);
				if(results.statusCode == EMDKResults.STATUS_CODE.SUCCESS) {
					//EMDKManager object request success
				}else {
					//EMDKManager object request failed
				}
			}
			@Override
			protected void onDestroy() {
				super.onDestroy();
				//Release EMDKManager on application exit.
				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}
			@Override
			public void onOpened(EMDKManager emdkManager) {
				//EMDK issues this callback when the EMDK is ready to use.
				this.emdkManager = emdkManager;

				//Get the ProfileManager object to apply the profiles
				ProfileManager profileManager = (ProfileManager)
						emdkManager.getInstance(EMDKManager.FEATURE_TYPE.PROFILE);

				//Register for callback to receive the processProfileAsync status
				profileManager.addDataListener(MyProfileActivity.this);
				EMDKResults results = profileManager. processProfileAsync("MyProfile1",
						ProfileManager.PROFILE_FLAG.SET,
						(String[])null);
				if(results.statusCode == EMDKResults.STATUS_CODE.PROCESSING) {
					//Applying the profile, status will be returned through
					//the registered callback
				} else {
					//Failed to initiate request to apply the profiles.
				}
			}

			@Override
			public void onClosed() {
				//This callback will be issued when the EMDK closes unexpectedly.
				if (emdkManager != null) {
					emdkManager.release();
					emdkManager = null;
				}
			}
			@Override
			public void onData(ProfileManager.ResultData resultData) {
				//processProfileAsync callback method

				EMDKResults result = resultData.getResult();
				if(result.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {
					String responseXML = result.getStatusString();
					//Parse the responseXML to know the status of profiles applied
				} else if(result.statusCode != EMDKResults.STATUS_CODE.SUCCESS) {
					//Error occurred in applying the profile.
				}
			}
		}


##Profile Response

###Interpreting EMDKResults

An [EMDKResults](/emdk-for-android/7-4/api/core/EMDKResults/) object
provides a status of whether the submitted profile was successfully
processed, or if there were errors while processing.

The first step to determine if profile processing was a success or
failure would be to inspect
the [EMDKResults.statusCode](/emdk-for-android/7-4/api/core/EMDKResults/#statuscode) field.
This field will be of type
[EMDKResults.STATUS\_CODE](/emdk-for-android/7-4/api/core/EMDKResults-STATUS_CODE/).
When an EMDKResults.statusCode is equal to STATUS\_CODE.CHECK\_XML, this
indicates that you should check the response XML in the
EMDKResults.getStatusString() to know the status of the process profile
method result. When an EMDKResults.statusCode is not equal to
STATUS\_CODE.CHECK\_XML and also not equal to STATUS\_CODE.SUCCESS, this
indicates some failure occurred and the detailed error can be obtained
from EMDKResults.extendedStatusCode.

In most of the cases, the response Status Code will
be [CHECK\_XML](/emdk-for-android/7-4/api/core/EMDKResults-STATUS_CODE/) regardless
of whether the profile was successfully applied or not.

Refer to the above code snippet within in the onData callback method for
determining profile processing result.

###Response XML

A response XML of EMDKResults.getStatusString() begins with node `<wap-provisioningdoc>` and endswith `</wap-provisioningdoc>`. After the `<wap-provisioningdoc>` tag, there will be a characteristic node with type named “status” that provides information about the status error code, extended status error with the respective description. These error codes will be same errors of [EMDKResults.statusCode](/emdk-for-android/7-4/api/core/EMDKResults/#statuscode) and EMDKResults.extendedStatusCode. This node can be ignored while parsing the XML if you already interpreted the error from EMDKResults.

		:::xml
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>

Each response will have one or more characteristic or characteristic-error feature nodes with parm settings specific to that feature. If the feature settings applied successfully, characteristic node will
		be same as input XML with emdk\_name parm node removed as shown below.

		:::xml
		<characteristic type="AppMgr" version="5.1">
		<parm name="Action" value="Install"/>
		<parm name="APK" value="/sdcard/DemoApp.apk"/>
		</characteristic>

If the feature settings failed to apply because of an incorrect value, the characteristic node will be changed to a characteristic-error node and the parm node which lead to the failure will be changed to parm-error node with description attributed added as shown below.

		:::xml
		<characteristic-error type="AppMgr" version="5.1" desc="unsupported">
		<parm-error name="Action" value="Incorrect" desc="unsupported"/>
		<parm name="APK" value="/sdcard/Test.apk"/>
		</characteristic-error>

If the feature settings failed to apply because of other reasons, the characteristic node will be changed to a characteristic-error node with description attributed added as shown below.

Example 1:

		:::xml
		<characteristic-error type="RemotePrinterMgr" version="5.2" desc="has not registered with MX Framework yet">
		<parm name="Action" value="3"/>
		</characteristic-error>
		
Example 2:

		:::xml
		<characteristic-error type="RemoteScannerMgr" version="5.2" desc="No connection">
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic-error>

DataCapture profile response is different than other features. If the profile XML submitted contains only the DataCapture profile, you will get the status of the profile setting in EMDKResults.statusCode will have errors such as success, failure and response XML with DataCapture characteristic node to describes the same info. The parm attribute “code” describes the error code and description describes error description in English text. This error information is specific to DataCapture profile only. If any parm values are invalid or not supported, it automatically picks the default supported value to create DataCapture profile for the DataWedge and therefore the errors are not seen normally in the DataCapture profiles.

If the profile submitted is a combination of both DataCapture and Non-DataCapture profile, the EMDKResults.statusCode will have the statusCode as CHECK\_XML. The application has to parse the response to interprete the response XML. The DataCapture response will be available under the characteristic node “DataCapture” as shown below.

Example 1: Success Case

		:::xml
		<characteristic type="DataCapture">
		<parm name="code" value="0"/>
		<parm name="description" value="Success"/>
		</characteristic>

Example 2: Generic Failure Case

		::xml
		<characteristic type="DataCapture">
		<parm name="code" value="1"/>
		<parm name="description" value="Failure"/>
		</characteristic>

##Sample Response XML Strings

###XML - Without Errors

In this example, using Profile Manger, a new profile has been created
and a RemoteScannerMgr and AppMgr feature has been added. Profile
Manager will error check and provide feedback as values are entered into
each parm field. This ensures that the values entered are properly
formatted.

**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?><!--This is an auto
		generated document. Changes to this document may cause incorrect
		behavior.--><wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-08 10:13:05"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="RemoteScannerMgr" version="5.2">
		<parm name="emdk\_name" value="ResetDefaultScanner"/>
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Install"/>
		<parm name="APK" value="/sdcard/DemoApp.apk"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response** - XML String with all settings set successfully.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
			<characteristic type="status">
				<parm name="code" value="6"/>
				<parm name="description" value="Review the XML for details"/>
				<characteristic type="extended\_status">
					<parm name="code" value="0"/>
					<parm name="description" value=""/>
				</characteristic>
			</characteristic>
			<characteristic type="RemoteScannerMgr" version="5.2">
				<parm name="Action" value="3"/>
				<parm name="SerialNumber" value=""/>
			</characteristic >
			<characteristic type="AppMgr" version="5.1">
				<parm name="Action" value="Install"/>
				<parm name="APK" value="/sdcard/DemoApp.apk"/>
			</characteristic>
		</wap-provisioningdoc>

###XML with parm-error


In this example, the parm error was returned due to the missing APK for
the AppMgr to perform the install action.

**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?><!--This is an auto
		generated document. Changes to this document may cause incorrect
		behavior.--><wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-08 10:13:05"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="RemoteScannerMgr" version="5.2">
		<parm name="emdk\_name" value="ResetDefaultScanner"/>
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Install"/>
		<parm name="APK" value="/sdcard/Test.apk"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response** - XML String with characteristic-error and parm-error because the APK doesnot exist in the path specified in AppMgr feature.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>
		<characteristic-error type="RemoteScannerMgr" version="5.2">
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic-error>
		<characteristic-error type="AppMgr" version="5.1" desc="missing">
		<parm-error name="Action" value="Install" desc="apk doesnot exist in
		the path"/>
		<parm name="APK" value="/sdcard/Test.apk"/>
		</characteristic-error>
		</wap-provisioningdoc>

###XML with characteristic-error

In this example, the characteristic error was returned due to the remote
Bluetooth scanner is not connected to perform the action specified in
the RemoteScannerMgr.

**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?><!--This is an auto
		generated document. Changes to this document may cause incorrect
		behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-08 10:13:05"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="RemoteScannerMgr" version="5.2">
		<parm name="emdk\_name" value="ResetDefaultScanner"/>
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Install"/>
		<parm name="APK" value="/sdcard/DemoApp.apk"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response** – XML String with characteristic-error in RemoteScannerMgr because the remote scanner is not connected.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>
		<characteristic-error type="RemoteScannerMgr" version="5.2" desc="No
		connection">
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic-error>
		<characteristic-error type="AppMgr" version="5.1" desc="missing">
		<parm-error name="Action" value="Install" desc="apk doesnot exist in
		the path"/>
		<parm name="APK" value="/sdcard/DemoApp.apk "/>
		</characteristic-error>
		</wap-provisioningdoc>

##XML with characteristic-error and parm-error


In this example, the characteristic error was returned due to the remote
Bluetooth scanner is not connected to perform the action specified in
the RemoteScannerMgr.

**XML submitted** - With incorrect or unsupported values

		:::xml
		<?xml version="1.0" encoding="UTF-8"?><!--This is an auto
		generated document. Changes to this document may cause incorrect
		behavior.--><wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-08 10:13:05"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="RemotePrinterMgr" version="5.2">
		<parm name="emdk\_name" value="ResetDefaultScanner"/>
		<parm name="Action" value="3"/>
		<parm name="SerialNumber" value=""/>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Incorrect"/>
		<parm name="APK" value="/sdcard/Test.apk"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response** - String with characteristic-error in RemoteScannerMgr because the remote scanner is not connected.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>
		<characteristic-error type="RemotePrinterMgr" version="5.2" desc="
		has not registered with MX Framework yet">
		<parm name="Action" value="3"/>
		</characteristic-error>
		<characteristic-error type="AppMgr" version="5.1"
		desc="unsupported">
		<parm-error name="Action" value="Incorrect" desc="unsupported"/>
		<parm name="APK" value="/sdcard/Test.apk"/>
		</characteristic-error>
		</wap-provisioningdoc>

##Profile XML – DataCapture Feature Only


**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may
		cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-19 13:49:42"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="ActivitySelection" version="0.1">
		<parm name="emdk\_name" value="MyAppSelection1"/>
		<characteristic type="Application">
		<parm name="PrefixAppName" value="false"/>
		<parm name="package" value="com.symbol.test1"/>
		<characteristic type="Activities">
		<parm name="activity" value="\*"/>
		</characteristic>
		</characteristic>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response**

If the data capture profile setting succeeds, the EMDKResults.statusCode
will return status code as SUCCESS and EMDKResults.getStatusString()
will have the response XML string as shown in response XML below.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="0"/>
		<parm name="description" value="Success"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>
		<characteristic type="DataCapture">
		<parm name="code" value="0"/>
		<parm name="description" value="Success"/>
		</characteristic>
		</wap-provisioningdoc>

##Profile XML – DataCapture Feature and Non DataCapture 


**XML submitted**

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<!--This is an auto generated document. Changes to this document may
		cause incorrect behavior.-->
		<wap-provisioningdoc>
		<characteristic type="ProfileInfo">
		<parm name="created\_wizard\_version" value="5.0.1"/>
		</characteristic>
		<characteristic type="Profile">
		<parm name="ProfileName" value="MyProfile"/>
		<parm name="ModifiedDate" value="2016-09-19 13:59:56"/>
		<parm name="TargetSystemVersion" value="6.0"/>
		<characteristic type="ActivitySelection" version="0.1">
		<parm name="emdk\_name" value="MyAppSelection1"/>
		<characteristic type="Application">
		<parm name="PrefixAppName" value="false"/>
		<parm name="package" value="com.symbol.test1"/>
		<characteristic type="Activities">
		<parm name="activity" value="\*"/>
		</characteristic>
		</characteristic>
		</characteristic>
		<characteristic type="AppMgr" version="5.1">
		<parm name="emdk\_name" value="DemoInstallation"/>
		<parm name="Action" value="Install"/>
		<parm name="APK" value="Test.apk"/>
		</characteristic>
		</characteristic>
		</wap-provisioningdoc>

**XML Response**

The EMDKResults.statusCode will return status code as CHECK\_XML and
EMDKResults.getStatusString() will have the response XML string as shown
in XML response below.

		:::xml
		<?xml version="1.0" encoding="UTF-8"?>
		<wap-provisioningdoc>
		<characteristic type="status">
		<parm name="code" value="6"/>
		<parm name="description" value="Review the XML for details"/>
		<characteristic type="extended\_status">
		<parm name="code" value="0"/>
		<parm name="description" value=""/>
		</characteristic>
		</characteristic>
		<characteristic type="DataCapture">
		<parm name="code" value="0"/>
		<parm name="description" value="Success"/>
		</characteristic>
		<characteristic-error type="AppMgr" version="5.1" desc="missing">
		<parm-error name="Action" value="Install" desc="apk doesnot exist in
		the path"/>
		<parm name="APK" value="Test.apk"/>
		</characteristic-error>
		</wap-provisioningdoc>

##Sample Code for Parsing Response XML


Parsing the Response XML will require the use of a XML Parser library,
in this example we will use org.xmlpull.v1.XmlPullParser. XmlPullParser
will allow us to quickly iterate over each START\_TAG in the XML
response looking for Parm and Characteristic errors.

**Characteristic-Error** - A Characteristic-Error is an element that appears
in a Result XML document that is used to indicate a failure when
processing a corresponding characteristic in a Request XML document.

**Parm-Error** - A Parm-Error is an element that appears in a Result XML
document that is used to indicate a failure when processing a
corresponding parm in a Request XML document.

1.  First import the XML parsing library

		:::java
		import org.xmlpull.v1.XmlPullParser;
		import org.xmlpull.v1.XmlPullParserException;

2.  Next we will get a string representation of the XML Response, Then
    instantiate a new XMLPullParser object, and set its input to the the
    XML Response String object.

		:::java
		String xmlResponse = results.getStatusString();
		XmlPullParser parser = Xml.newPullParser();
		parser.setInput(new StringReader(xmlResponse));

3.  Finally we will use XmlPullParser events to iterate over the XML
    Response nodes searching for parm and characteristic errors. In this
    example, I simply log the errors for later review. You will need to
    add custom error handling to each of the if blocks inside the
    START\_TAG case if logging is not sufficient.

		:::java
		try {
			int event;
			try {
				event = parser.getEventType();
				while (event != XmlPullParser.END\_DOCUMENT) {
				String name = parser.getName();
				switch (event) {
				case XmlPullParser.START\_TAG:
				if (name.equals("parm-error")) {
				parmName = parser.getAttributeValue(null, "name");
				errorDescription = parser.getAttributeValue(null,
				"desc");
				Log.d(TAG," (Name: " + parmName + ", Error
				Description: " + errorDescription + ")");
				return;
				}
				if (name.equals("characteristic-error")) {
				errorType = parser.getAttributeValue(null, "type");
				errorDescription = parser.getAttributeValue(null,
				"desc");
				Log.d(TAG," (Type: " + errorType + ", Error
				Description: " + errorDescription + ")");
				return;
				}
				break;
				case XmlPullParser.END\_TAG:
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
		*//Profile processed sucessfully*
		}
		}



##Name-Value Pair 

ProcessProfile() and processProfileAsync() allow one to submit a String Array containing Name=Value Pairs that can be used to replace Name=Value Pairs in a specified Profile before installing and activating that profile. The following guide explains the use of Name=Value Pair replacement and a utility method to help create Name=Value pairs.

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


















