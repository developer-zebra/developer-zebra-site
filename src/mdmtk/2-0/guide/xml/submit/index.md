# XML Submission

## Overview
This document will describe how to send XML to MXMS for setting parameter values for CSPs:

* Sending XML
* Group Submission

The structure of the XML is based on a standard format that is being used by the MXMS. Each CSP offers different options for parameters and sub-characteristics, but all follow the same structure:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="SomeCSP" version="SpecificVersionToUse">
				<parm name="SomeParm" value="SomeValue"/>
			</characteristic>
			<characteristic type="SomeCSPWithSubCharacteristic" version="SpecificVersionToUse">
				<parm name="SomeParm" value="SomeValue"/>
				<characteristic type="SomeSubChar">
					<parm name="SomeParmofSubChar" value="SomeValue"/>
				</characteristic>
			</characteristic>	
		</wap-provisioningdoc>

### General Submission Rules

* Characteristics must be wrapped in a `wap-provisioningdoc` node
* Each characteristic must contain a version attribute that indicates the version to use
* Multiple characteristics can be sent in one XML package
* Characteristics are processed synchronously in the order they appear in the XML


## Submitting XML

In your application's activity's onServiceConnected method, you can add code before the `term` call that would submit XML to MXMS. This example adds the utilizeMXMS method here, which will show how to edit XML and submit them to MXMS. However, it would be possible to repeatedly call this method from other locations. The onServiceConnected method is the first location where this method could possibly be called.

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

In this example, the utilizeMXMS method is used to demonstrate how to take an XML from the application's Assets folder, change the values of a parm, and send this Request XML document to MXMS. The Result XML document that is returned is then used to get the value of one of the parms. Through the use of the methods that are mentioned here, you can create an application that also performs these actions.

1. The utilizeMXMS method uses the isReady method from the SymbolBrand class to check if the application successfully bound to MXMS, which would mean that it is ready to accept XML from your application. 

2. If isReady returns true, the clock.in.xml is then retrieved from the Assets folder, which will be used as the Request XML document. This XML file contains:

		:::xml
		<wap-provisioningdoc>
			<characteristic type="Clock" version="4.2" >
				<parm name="AutoTime" value="false"/>
				<parm name="TimeZone" value="GMT-5"/>
				<parm name="Date" value="2014-12-03"/>
				<parm name="Time" value="11:00:00"/>
			</characteristic>
		</wap-provisioningdoc>

3. To replace the parms in the Request XML document, an ArrayList must be made to contain ParmValue objects. The ParmValue object is in the XmlParser class and in this example, is instantiated with the Top Level Characteristic type ("clock"), the name of the parm that will be edited ("time"), and the new value that will be used to replace the original value in the XML ("11:11:11"). The Request XML document and the ArrayList of ParmValue objects is used by the XmlParser's replaceParms method, which in this example, will change the "time" parm's value to "11:11:11". 

4. The modified Request XML document is used by the SymbolBrand class's submitXml method, which will submit this XML to the MXMS. This XML will then be sent to the Clock Feature Type, which will change the time of the device to 11:11:11. 

5. The MXMS will return a Result XML document is used by the XmlParser's formatXml class to split the Result XML document up onto multiple lines for better readability. 

6. The XmlParser's isEquivalent method is then used to check that the Result XML document is equivalent to the Result XML document that was submitted, which would indicate that the device's clock was set successfully. If the XML documents were not equivalent, this indicates that there may have been an error in setting the clock and a characteristic error and/or parm error was returned. 

7. If the XML documents are equivalent, this example shows how the XmlParser's fetchParm method can be used to retrieve the value of the "time" parm. The Top Level Characteristic type ("clock") and the name of the parm who's value will be fetched ("time") are used by the fetchParm method to return this parm's value.


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

