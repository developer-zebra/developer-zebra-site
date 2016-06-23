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
* **Generating XML** - Data exchanged to the MXMS from the MDM client is handled through a defined XML structure. 
* **Submitting XML** - Within the MDM client, XML will be submitted to apply settings via a simple API.

## Requirements

* MDM Toolkit 
* StageNow 2.3
* Zebra Android Device with MX

	Note: For instructions to install or update MX on your Zebra Android Device, please see the <a href="http://techdocs.zebra.com/stagenow/2-3/gettingstarted/" target="_blank">StageNow 2.3 - Getting Started Documentation</a>.

* Java JVM Installed
* Android IDE

## Intro To The MXMS

### MXMS Overview

The MX Management System (MXMS) provides a common interface to Zebra Android device capabilities utilizing XML that conforms to the standard OMA-CP PROV (Microsoft MSPROV) schema. This allows developers and administrators to have an extensible, efficient, reliable and scalable means for configuring and administrating Zebra Android devices. MXMS exposes capabilities that underlying CSPs provide to give the user access to both privileged and unprivileged APIs. Each CSP exposes its capabilities using DSD files which are included with StageNow 2.3. StageNow should be used to generate XML that can be sent to the MXMS running on the device to change a device configuration or behavior.

For more information on the definitions of necessary terms, the MX architecture and data flow, MDM implementation approaches, CSP summaries and other information, please see [this page.](../mx/overview)

### MXMS XML

MXMS utilizes XML that conforms to the PROV DTD and more specifically to the Microsoft-defined dialect, which is defined by the MSPROV DTD. PROV DTD is the XML schema used by the OMA CP (Open Mobile Alliance Client Provisioning) Standard. Use of this XML schema means that XML that can be consumed by MXMS will be familiar to MDM Vendors that are already familiar with OMA CP and/or the PROV DTD. Use of this XML schema also means that MXMS can be more easily leveraged by existing MDMs that are based on or can already leverage OMA CP.

For more information on the XML elements, Request and Result XML documents, DSDs and other information, please see [this page.](../guide/xml/xml_overview)

### MDM XML Creation

The XML documents that are used in MX need to be structured in a standardized format. StageNow 2.3 can be used to generate sample XML. Typically you would require that some values be changed dynamically on the device by your client application. So you would therefore manipulate the values of specific parameter attributes within your code based on the specific template you have generated. 



### MDM Result XML Parsing

When submitting a Request XML document, knowing what happened will require at least some minimal parsing of the Result XML document. Parm Value Extraction is a method for simplifying the extraction of relevant information from an XML Result document, which involves searching an XML document for a parm with a given name and extracting the value associated with it.

For more information on Result XML documents and Parm Value Extraction, please see [this page.](../guide/xml/response)

## Binding to the MXMS

1. Create a new Android project with an empty activity.   

2. The following permissions needs to be added to your application's manifest file to allow it to access MXMS.

		:::xml
        <uses-permission android:name="com.symbol.mxmf.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />
		<uses-permission android:name="com.motorolasolutions.emdk.mxframework.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE"/>
		
3. Create two new packages in your application. One package should be named `com.symbol.mxmf` and the other package should be named `com.motorolasolutions.emdk.mxframework`. These packages will be used for holding the aidl (Android Interface Definition Language) files.

	Note: When Using Android Studio, the new packages need to be created in the aidl folder of your project or the IDE will not automatically generate the necessary interface files.


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

###Creating XML
This Toolkit does not provide the means to generate XML required to exchange data with the MXMS. XML should be generated by utilizing the **Export a Profile to an MDM** feature of StageNow 2.3. 
Full instructions for StageNow setup, and Usage can be <a href="http://techdocs.zebra.com/stagenow/2-3/about/" target="_blank">found here</a>.


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

5. The MXMS will return a Result XML document which is used by the XmlParser's `formatXml` class to split the Result XML document up onto multiple lines for better readability. 

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

