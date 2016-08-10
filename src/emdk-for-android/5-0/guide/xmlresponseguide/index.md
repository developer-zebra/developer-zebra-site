---
title: "XML Response programmer's guide"
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

In many cases, the Status Code will be [CHECK_XML](/emdk-for-android/5-0/api/core/EMDKResults-STATUS_CODE/) regardless of whether there was a processing error or not. This status code does not clarify if a processing failure happened, only that we need to check the XML response for errors. The CHECK_XML status code should be used to determine if xml processing is necessary. 

		:::java
		STATUS_CODE statusCode = results.statusCode;
		if(results.statusCode == EMDKResults.STATUS_CODE.CHECK_XML) {
			//parse the response xml to insure there are no errors
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


### 