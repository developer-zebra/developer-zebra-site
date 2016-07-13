---
title: SimpleMdmToolkitSample Test App
layout: guide.html
product: MDM Toolkit
productversion: '2.0'
---

##Overview

The SimpleMdmToolkitSample test app can be used to submit Request XML Documents to the MXMS to set a feature on the device or to perform an action. The classes in this project can also be copied into another project so that the methods can be reused to bind and submit XML to MXMS, as shown in the sample code on the [Quick Start page](../tutorial/).

##Sample Location

The SimpleMdmToolkitSample test app can be found in the `[MDM Install folder]\Samples\SimpleMdmToolKitSample` folder.

##Instructions

1. Import the SimpleMdmToolkitSample test app into your IDE.
2. Create an XML file containing the Request XML Document that you would like to test.
3. Place this XML inside the test app's assets folder.
4. In your IDE, open the MainActivity class that is located in the `com.symbol.simplemdmtoolkitsample` package.
5. In the MainActivity class, edit the name of the inXML String variable that is in the utilizeMXMS method to match the name of the XML that was created in Step 2. For example:

		:::java
		String xmlName = "testSet.in.xml";

6. If you would like to test the ability to edit parm values programatically, code to do this can also be added into the utilizeMXMS method. The following code shows an example of how to edit a parm value of a Clock Feature Type Request XML Document:

		:::java
		if ( xmlName.startsWith("clock") )
		{
			// Replace one or more values in the input XML
			ArrayList<ParmValue> replaceValues = new ArrayList<ParmValue>();
			replaceValues.add(new ParmValue("clock","time","11:11:11"));
			String replaceXml = XmlParser.replaceParms(inXml,replaceValues);
			if ( replaceXml != null )
			{
				Log.i(TAG,"replaceXml = "+replaceXml);
				inXml = replaceXml;
			}
		}

7. If any additional files are needed by your Request XML Document, they will need to be added onto the device. For example, if your Request XML Document uses the AppMgr Feature Type to install an application, the necessary APK file must be put onto the device in the proper location.
8. Run the program while a Zebra Android device is connected to the computer with a USB cable and ADB is enabled on it. This will submit the Request XML Document to MXMS.
9. The Result XML Document that was returned from MXMS will be output to the LogCat log messages. This will show if the Request XML Document and the Result XML Document are equivalent. If they are equivalent, there were no errors returned and the actions were performed successfully. If they are not equivalent, this may indicate that errors were returned in the Result XML Document, indicating that some or all of the requested actions were not performed successfully.