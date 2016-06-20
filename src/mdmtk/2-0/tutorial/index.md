---
title: Quick Start
layout: guide.html
product: MDM ToolKit
productversion: '2.0'
---

## Overview
This quick start guide will walk through the common tasks and components that you will use in order for your MDM client to interface with the MX Management System available on Zebra Android devices. The following steps will be covered. 

* **Intro To The MXMS** - The basic information that is needed for using the MX Management System.
* **Binding to the MXMS** - All communications to the MXMS on Zebra devices, occur through a common binding interface.  
* **Generating XML** - Data exchanged to the MXMS from the MDM client is handled through a defined XML structure. Using the DSD tool provided in the MDM Toolkit will provide a template for the XML to be used for applying settings. Typically you will use this tool to generate all needed functions and then replace string values for dynamically changing variables.
* **Submitting XML** - Within the MDM client, XML will be submitted to apply settings via a simple API.
* **Querying the MXMS** - Within the MDM client, XML will be submitted to query the MXMS to receive back information about the current settings on the device.
* **Next Steps**

## Requirements

* MDM Toolkit (XML Generator Tool, DSD Files)
* Zebra Android Device with MX
* Java JVM Installed
* Android ADT

## Intro To The MXMS

### MXMS Overview

The MX Management System (MXMS) provides a common interface to Zebra Android device capabilities utilizing XML that conforms to the standard OMA-CP PROV (Microsoft MSPROV) schema. This allows developers and administrators to have an extensible, efficient, reliable and scalable means for configuring and administrating Zebra Android devices. MXMS exposes capabilities that underlying CSPs provide to give the user access to both privileged and unprivileged APIs. Each CSP exposes its capabilities using DSD files that are included with the MDM Toolkit. These DSD files are then imported into a DSD tool to generate XML that can be sent to the MXMS running on the device to change a device configuration or behavior.

For more information on the definitions of necessary terms, the MX architecture and data flow, MDM implementation approaches, CSP summaries and other information, please see [this page.](../guide/MX/overview)

### MXMS XML

MXMS utilizes XML that conforms to the PROV DTD and more specifically to the Microsoft-defined dialect, which is defined by the MSPROV DTD. PROV DTD is the XML schema used by the OMA CP (Open Mobile Alliance Client Provisioning) Standard. Use of this XML schema means that XML that can be consumed by MXMS will be familiar to MDM Vendors that are already familiar with OMA CP and/or the PROV DTD. Use of this XML schema also means that MXMS can be more easily leveraged by existing MDMs that are based on or can already leverage OMA CP.

For more information on the XML elements, Request and Result XML documents, DSDs and other information, please see [this page.](../guide/xml/xml_overview)

### MDM XML Creation

The XML documents that are used in MX need to be structured in a standardized format. The DSD tool, which is included in this toolkit, can be used to generate sample XML. Typically you would require that some values be changed dynamically on the device by your client application. So you would therefore manipulate the values of specific parameter attributes within your code based on the specific template you have generated. 

For more information and instructions on XML generation, modifying values, and other information, please see [this page.](../guide/xml/generate)

### MDM Result XML Parsing

When submitting a Request XML document, knowing what happened will require at least some minimal parsing of the Result XML document. Parm Value Extraction is a method for simplifying the extraction of relevant information from an XML Result document, which involves searching an XML document for a parm with a given name and extracting the value associated with it.

For more information on Result XML documents and Parm Value Extraction, please see [this page.](../guide/xml/response)

## Binding to the MXMS

1. Create a new Android project with an empty activity in Eclipse.   

2. The following permissions needs to be added to your application's manifest file to allow it to access MXMS.

		:::xml
        <uses-permission android:name="com.symbol.mxmf.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />
		<uses-permission android:name="com.motorolasolutions.emdk.mxframework.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE"/>
		
3. Create two new packages in your application. One package should be named `com.symbol.mxmf` and the other package should be named `com.motorolasolutions.emdk.mxframework`. These packages will be used for holding the aidl (Android Interface Definition Language) files.

4. The SimpleMdmToolKitSample project, which is supplied in the MDM Toolkit, contains the IMxFrameworkService.aidl files that should be copied into your application. These AIDL files are located in the SimpleMdmToolKitSample's `com.symbol.mxmf` and `com.motorolasolutions.emdk.mxframework` packages. These AIDL files should be copied into the respective packages that were made in Step 3.

5. In the package that contains the empty activity that was created in Step 1, copy and paste the following classes from the SimpleMdmToolKitSample project's `com.symbol.simplemdmtoolkitsample` package:

	* MxNamespace.java
	* MxNamespaceMotorolaSolutions.java
	* MxNamespaceSymbol.java
	* SymbolBrand.java
	* XmlParser.java

	>**Note:** The package names in these classes will need to be edited to match the package name of your application.

6. In your application's activity, the `onCreate` method should call the init method that is in the SymbolBrand class. This will check that MXMS is installed on the device. If MXMS is detected, your application will be bound to MXMS, allowing interaction to occur between them.

		:::java
		// Variable to hold the main activity
		static private Activity m_activity;
	
		@Override
		protected void onCreate(Bundle savedInstanceState)
		{
			super.onCreate(savedInstanceState);
			setContentView(R.layout.activity_main);
			
			// Save the main activity so it can be accessed from other threads
			m_activity = this;

			// Call init ONCE to start the process of binding to the MXMS
			// Note: You should call init early (e.g. as shown here in onCreate)
			//       XML cannot be submitted to the MXMS the binding is complete
			SymbolBrand.MXMS.init(this,mMxFrameworkServiceConnection);
		}

7. The ServiceConnection will also need to be added to your application's activity. This will contain the `onServiceConnected` callback that will notify your application that it was successfully bound to MXMS. It should also contain the `onServiceDisconnected` callback that will notify your application when it was successfully unbound with MXMS.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
			
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
			
			}
		}; 

8. In the `onServiceConnected method`, the `onServiceConnected` in the SymbolBrand helper class should also be called, which will notify this class that your application was bound to MXMS. At the end of the method, the term method in the SymbolBrand class should be called, which will unbind your application from MXMS. The application can also exit at this point. In the `onServiceDisconnected` method, the `onServiceDisconnected` method in the SymbolBrand helper class should also be called, which will notify this class that your application was unbound from MXMS.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
				// Pass the binding notification on so the helper class can know the service was bound
				SymbolBrand.MXMS.onServiceConnected(className,service);

				// Call term 
				SymbolBrand.MXMS.term(m_activity,mMxFrameworkServiceConnection);

				// Exit the application
				m_activity.finish();	    		
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
				// Pass the unbinding notification on so the helper class can know the service was unbound
				SymbolBrand.MXMS.onServiceDisconnected(className);
			}
		};    


## Generating XML

###Creating a Set XML

1. Start the jar file `DsdTool.jar` located in the folder `DSD To XML`. You will be presented with the following menu screen.

	![img](../images/xml-gen/mainmenu.PNG)
	
2. Click the "Create Set XML" button if you would like to create a new XML which will be used to set a feature on the device. 
3. You will then be presented with a file select dialog. Select the DSD file for the corresponding CSP you wish to configure and click "Open". For this example we will be using "Clock.dsd". 

	![img](../images/xml-gen/dsd-selection.PNG)
	
4. Set the values you wish to configure via MX. For this example we will be setting Date, Time, and Time Zone.  

	![img](../images/xml-gen/set-parms.PNG)
	
5. When complete, click the button "Save Set XML". 
6. Select a location to save your XML configuration file on your computer, give it a name, and select "Open".
	
	![img](../images/xml-gen/save-screen.PNG)
	
7. You can now open the file with a text or XML editor to view the generated XML. For example:

    	:::xml
		<wap-provisioningdoc>
			<characteristic type="Clock" version="4.2" >
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-5"/>
				<parm name="Date" value="2014-12-03"/>
				<parm name="Time" value="11:00:00"/>
			</characteristic>
		</wap-provisioningdoc>

>**Note:** Notice the relationship with the `parm` attributes and associated `value`. 

###Creating a Query XML
1. Start the jar file `DsdTool.jar` located in the folder `DSD To XML`. You will be presented with the following menu screen.

	![img](../images/xml-gen/mainmenu.PNG)
	
2. Click the "Create Query XML" button if you would like to create a new XML which will be used to receive the status of a feature on the device. 
3. You will then be presented with a file select dialog. Select the DSD file for the corresponding CSP you wish to query and click "Open". For this example we will be using "SettingsMgr.dsd". 

	![img](../images/xml-gen/dsd-selection-query.PNG)
	
4. Select the values you wish to query via MX. For this example we will be querying the ability to invoke an enterprise reset and the ability to turn Wi-Fi on/off.  

	![img](../images/xml-gen/set-query.PNG)
	
5. When complete, click the button "Save Query XML". 
6. Select a location to save your XML configuration file on your computer, give it a name, and select "Open".
	
	![img](../images/xml-gen/save-screen-query.PNG)
	
7. You can now open the file with a text or XML editor to view the generated XML. For example:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="SettingsMgr">
				<parm-query name="InvokeEnterpriseReset"/>
				<parm-query name="WifiSettingsUI"/>
			</characteristic>
		</wap-provisioningdoc>

## Submitting XML

In your application's activity's `onServiceConnected` method, you can add code before the `term` call that would submit XML to MXMS. This example adds the `utilizeMXMS` method here, which will show how to edit XML and submit them to MXMS. However, it would be possible to repeatedly call this method from other locations. The `onServiceConnected` method is the first location where this method could possibly be called.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
				// Pass the binding notification on so the helper class can know the service was bound
				SymbolBrand.MXMS.onServiceConnected(className,service);

				// For the purposes of this test application, we call this from here because this is the FIRST time it can be done
				// In a real world situation, it might be called repeatedly from other locations, as things that need to be done are identified
				utilizeMXMS();

				// Call term 
				SymbolBrand.MXMS.term(m_activity,mMxFrameworkServiceConnection);

				// Exit the application
				m_activity.finish();	    		
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
				// Pass the unbinding notification on so the helper class can know the service was unbound
				SymbolBrand.MXMS.onServiceDisconnected(className);
			}
		}; 

In this example, the `utilizeMXMS` method is used to demonstrate how to take an XML from the application's Assets folder, change the values of a parm, and send this Request XML document to MXMS. The Result XML document that is returned is then used to get the value of one of the parms. Through the use of the methods that are mentioned here, you can create an application that also performs these actions.

1. The `utilizeMXMS` method uses the `isReady` method from the SymbolBrand class to check if the application successfully bound to MXMS, which would mean that it is ready to accept XML from your application. 

2. If `isReady` returns true, the clock.in.xml is then retrieved from the Assets folder, which will be used as the Request XML document. This XML file contains:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="Clock" version="4.2" >
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-5"/>
				<parm name="Date" value="2014-12-03"/>
				<parm name="Time" value="11:00:00"/>
			</characteristic>
		</wap-provisioningdoc>

3. To replace the parms in the Request XML document, an ArrayList must be made to contain ParmValue objects. The ParmValue object is in the XmlParser class and in this example, is instantiated with the Top Level Characteristic type ("clock"), the name of the parm that will be edited ("time"), and the new value that will be used to replace the original value in the XML ("11:11:11"). The Request XML document and the ArrayList of ParmValue objects is used by the XmlParser's `replaceParms` method, which in this example, will change the "time" parm's value to "11:11:11". 

4. The modified Request XML document is used by the SymbolBrand class's `submitXml` method, which will submit this XML to the MXMS. This XML will then be sent to the Clock Feature Type, which will change the time of the device to 11:11:11. 

5. The MXMS will return a Result XML document is used by the XmlParser's `formatXml` class to split the Result XML document up onto multiple lines for better readability. 

6. The XmlParser's `isEquivalent` method is then used to check that the Result XML document is equivalent to the Result XML document that was submitted, which would indicate that the device's clock was set successfully. If the XML documents were not equivalent, this indicates that there may have been an error in setting the clock and a characteristic error and/or parm error was returned. 

7. If the XML documents are equivalent, this example shows how the XmlParser's `fetchParm` method can be used to retrieve the value of the "time" parm. The Top Level Characteristic type ("clock") and the name of the parm who's value will be fetched ("time") are used by the `fetchParm` method to return this parm's value.


		:::java
		// Function to do something by utilizing the MXMS
		private void utilizeMXMS()
		{
			// Check to see if the MXMS is successfully bound and ready to accept XML
			// Note: Once the binding complete notification (previous code) is passed on, this function will return true
			//       Depending on where this code is called from, this check may or may not be required, but never hurts.
			if ( SymbolBrand.MXMS.isReady() )
			{
				Log.d(m_activity.getApplicationInfo().name,"MXMS.isReady");

				String xmlName = "clock.in.xml";
				
				// Extract an XML snippet from the application assets
				String inXml = XmlParser.getAssetXml(m_activity,xmlName);
				
				// If the XML was successfully obtained
				if ( inXml != null )
				{
					Log.i(m_activity.getApplicationInfo().name,"inXml = "+inXml);

					if ( xmlName.startsWith("clock") )
					{
						// Replace one or more values in the input XML
						ArrayList<ParmValue> replaceValues = new ArrayList<ParmValue>();
						replaceValues.add(new ParmValue("clock","time","11:11:11"));
						String replaceXml = XmlParser.replaceParms(inXml,replaceValues);
						if ( replaceXml != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"replaceXml = "+replaceXml);
							inXml = replaceXml;
						}
					}
					
					// Submit the XML to the MXMS for processing
					// Note: This will FAIL unless SymbolBrand.MXMS.isReady(), indicating that the binding to the MXMS has completed successfully
					String outXml = SymbolBrand.MXMS.submitXml(inXml);

					// If we got back result XML
					// Note: A null result XML is what happens when the binding to the MXMS has NOT completed successfully
					if ( outXml != null )
					{
						Log.i(m_activity.getApplicationInfo().name,"outXml = "+outXml);

						// Format the return XML for friendlier display
						String fmtOutXml = XmlParser.formatXml(outXml); 

						// If it was formatted successfully
						// Note: If invalid XML results are passed, the formatting may fail
						if ( fmtOutXml != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"fmtOutXml = "+fmtOutXml);

							// Determine whether the submitted and result XML are equivalent
							if ( XmlParser.isEquivalent(inXml,outXml) )
							{
								Log.i(m_activity.getApplicationInfo().name,"Submitted and Result XML are Equivalent!");
								
								if ( xmlName.startsWith("clock.in") )
								{
									// Fetch the value of the time parm from the output XML
									String time = XmlParser.fetchParm(outXml,new ParmSelector("clock","time"));
									
									// If we got a non-null value
									if ( time != null )
									{
										Log.i(m_activity.getApplicationInfo().name,"Set time was \""+time+"\"");
									}
								}
							}
							else
							{
								String fmtInXml = XmlParser.formatXml(inXml); 
								if ( fmtInXml != null ) Log.e(m_activity.getApplicationInfo().name,"inXml = "+fmtInXml);
								Log.e(m_activity.getApplicationInfo().name,"fmtOutXml = "+fmtOutXml);
								Log.e(m_activity.getApplicationInfo().name,"Submitted and Result XML are NOT Equivalent!");

								// Determine whether any top-level characteristic errors were in the result XML
								int errors = XmlParser.countTlcErrors(outXml);
								
								if ( errors > 0 )
								{
									Log.e(m_activity.getApplicationInfo().name,"Result XML has "+errors+" top level characteristic errors!");
								}
							}
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"No formatted XML");
						}
					}
					else
					{
						Log.d(m_activity.getApplicationInfo().name,"No output XML");
					}
				}
				else
				{
					Log.d(m_activity.getApplicationInfo().name,"No input XML");
				}
			}
		}

## Querying the MXMS

Submitting queries to MX follows a similar process to submitting XML that is meant to set the device or perform an action. The SimpleMdmToolKitQuery project, which is supplied in the MDM Toolkit, contains an example of how to submit queries to MX. 

1. This example calls the `queryMX` method from the `onServiceConnected` instead of the `utilizeMXMS` method which was used in the previous example.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
				// Pass the binding notification on so the helper class can know the service was bound
				SymbolBrand.MXMS.onServiceConnected(className,service);

				// For the purposes of this test application, we call this from here because this is the FIRST time it can be done
				// In a real world situation, it might be called repeatedly from other locations, as things that need to be done are identified
				queryMX();

				// Call term 
				SymbolBrand.MXMS.term(m_activity,mMxFrameworkServiceConnection);
				
				// Exit the application
				m_activity.finish();	    		
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
				// Pass the unbinding notification on so the helper class can know the service was unbound
				SymbolBrand.MXMS.onServiceDisconnected(className);
			}
		};  

2. In the `queryMX` method, if isReady returns true, the mx.in3.xml is then retrieved from the Assets folder, which will be used as the Request XML document. This XML file contains:

		:::xml
		<wap-provisioningdoc>
			<characteristic-query type="MX"/>
		</wap-provisioningdoc>
		
3. The Request XML document is used by the SymbolBrand class's `submitXml` method, which will submit this XML to the MXMS. This XML will then be sent to the MX Feature Type, which will return the version number of MXMS.

5. The MXMS will return a Result XML document which is then used by the XmlParser's `fetchParm` method to retreive and output the value of the "MXMFVersion" and "Version" parms.

6. This sample project also shows similar code which would let you query the CspMgr Feature Type, which would return an enumerated list of the available Feature Types. There are also examples on how to use the other XMLs in the project's Assets folder to query other Feature Types, such as the CameraMgr, DisplayMgr, DevAdmin, DhcpOptionMgr, and EncryptMgr, to receive back information about the current settings of the device. 

		:::java
		// Function to query MX version(s)
		private void queryMX()
		{
			// Check to see if the MXMS is successfully bound and ready to accept XML
			// Note: Once the binding complete notification (previous code) is passed on, this function will return true
			//       Depending on where this code is called from, this check may or may not be required, but never hurts.
			if ( SymbolBrand.MXMS.isReady() )
			{
				Log.d(m_activity.getApplicationInfo().name,"MXMS.isReady");

				// Extract an XML snippet from the application assets
				//String inXml = XmlParser.getAssetXml(m_activity,"mx.in1.xml");
				//String inXml = XmlParser.getAssetXml(m_activity,"mx.in2.xml");
				String inXml = XmlParser.getAssetXml(m_activity,"mx.in3.xml");
				
				// If the XML was successfully obtained
				if ( inXml != null )
				{
					Log.d(m_activity.getApplicationInfo().name,"inXml = "+inXml);

					// Submit the XML to the MXMS for processing
					// Note: This will FAIL unless SymbolBrand.MXMS.isReady(), indicating that the binding to the MXMS has completed successfully
					String outXml = SymbolBrand.MXMS.submitXml(inXml);

					// If we got back result XML
					// Note: A null result XML is what happens when the binding to the MXMS has NOT completed successfully
					if ( outXml != null )
					{
						Log.d(m_activity.getApplicationInfo().name,"outXml = "+outXml);

						String queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","MXMFVersion"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"MXMF version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no MXMF version");
						}

						queryVersion = XmlParser.fetchParm(outXml,new ParmSelector("","Version"));

						if (queryVersion != null )
						{
							Log.i(m_activity.getApplicationInfo().name,"Version = " + queryVersion);
						}
						else
						{
							Log.d(m_activity.getApplicationInfo().name,"MX query returned no version");
						}
					}
					else
					{
						Log.d(m_activity.getApplicationInfo().name,"MX query returned no results");
					}
				}
			}
		}

## Next Step
Now that you have mastered the basics you will want to read about more details on the various aspects of interacting with MX.

* [XML Generation](../xml/generate)
