# XML Parser 

## Overview

The XmlParser class is a Java class for assisting with MXMS XML on Android. This class is available in the SimpleMdmToolkitSample and SimpleMdmToolkitQuery projects that are included in the MDM Toolkit. These projects can be found in the "Samples" folder of the MDM Toolkit.

The XmlParser class has been developed to assist in starting MXMS development and to offer suggestion as to how your application might process MXMS XML. Your application does not need to use the XmlParser class. It is up to your development teams to determine the best way for your application to handle MXMS XML for your needs. 

## Main Features

This section describes some common features that may need to be used by the MDM Agent when processing Request and Result XML Documents. For more information about the individual methods, please see the Main Methods section below.

### Validate Set Responses

The XmlParser class can assist you in validating responses from MXMS through the help of the `isEquivalent` function. When an MXMS set is successful the Result XML Document should be equivalent to the set XML, besides for white space. To use the `isEquivalent` function pass in the XML string you have submitted to MXMS and the XML string response from MXMS. If the XML is equivalent, the function will return `true` if not it will return `false`. If the function returns `false` it should contain error parms or characteristics.

For Example:

    :::java
    //Check for Errors
    boolean isXmlGood = XmlParser.isEquivalent(XML, resXML);

### Counting Errors in a Result XML Document

The XmlParser class helps you count the number of errors in the XML returned from the MXMS through the use of the function `countCharcErrors` and `countTlcErrors`. Both functions take in the Result XML Document string from MXMS and return the number of Characteristic-Errors of their specified type (either only Top-Level Characteristic-Errors *or* both Top-Level Characteristic-Errors and Sub-Group Characteristic-Errors). 

For Example: 

    :::java
    //Count Errors 
    int charErrors = XmlParser.countCharcErrors(resXML);
    int tlcErrors = XmlParser.countTlcErrors(resXML);

### Modifying XML Documents

The XmlParser class helps you modify MXMS XML. For example, you can use it to replace values in a template XML with values given to your program through a user input. The function `replaceParms` allows you to specify the Top-Level Characteristic that containts the parm(s) that will be replaced, the name(s) of the parm(s) that will be replaced, and the new value(s) of the parm(s). The method then will output the updated XML string with the specified parm value change(s).

For Example:

    :::java
    //Setup parm value
	ParmValue parmValue = new ParmValue("charType", "parmName", "value");
	    				 
	//Setup parm value array list
	ArrayList<ParmValue> parmValues = new ArrayList<ParmValue>();
	    				 
	//Add parm value
	parmValues.add(parmValue);
	    				 
	//Modify XML
	String newXML = XmlParser.replaceParms(xml, parmValues);

### Reading XML Documents

The XmlParser class helps you read MXMS XML through the use of the `fetchParms` and `fetchParmRepeats` functions. For example, you can use these functions to confirm parm values in a set Request XML Document or read parm values in a query XML Document. To use this function, pass in the XML and a list of parm selectors, and the function will return an array list of parm values. 

For Example:

    :::java
    //Setup parm selector
	ParmSelector parmSelector = new ParmSelector("charType", "parmName");
	
	//Get parm values
	ArrayList<ParmValue> parmValues = XmlParser.fetchParms(xml, parmSelector);
	
### Creating Query XML

The XmlParser class helps you to create Characteristic-Query and Parm-Query Request XML Documents through the use of the `getCharQuery` and `getParmQuery` functions. You can use these methods to create simple Query Request XML Documents, which can be submitted to MXMS. To create a Characteristic-Query Request Xml Document, pass in the name of the Top-Level Characteristic that should be queried. To create a Parm-Query Request Xml Document, pass in the name of the Parm that should be queried and the name of the Top-Level Characteristic that contains this parm.

For Example:

	:::java
	String charQuery = XmlParser.getCharQuery("PersistMgr");
	String parmQuery = XmlParser.getParmQuery("PersistMgr", "Version");

## Main Methods

###static public int countCharcErrors(String xml)

Helper function to count the number of Characteristic-Errors in an XML document. The Characteristic-Errors that are added to this count can be at any level in the XML, meaning that they can be errors on Top-Level Characteristics or Sub-Group Characteristics.

**Parameters:**

*xml-* The Result XML Document that was returned by MXMS.

**Returns**

An integer indicating the number of Characteristic-Errors that are at any level in the Result XML Document.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic-error type="TLCError" desc="Sample Top Level Characteristic Error" version="4.4" >
			<characteristic-error type="SGCError" desc="Sample Sub Group Error">
				<parm name="ParmExample" value="1"/>
			</characteristic-error>
		</characteristic-error>
	</wap-provisioningdoc> 

**Example Invocation**

	::java
	int charErrorCount = XmlParser.countCharcErrors(xml);
	
**Example Output**

2


###static public int countTlcErrors(String xml)

Helper function to count the number of Top-Level Characteristic-Errors in an XML document.

**Parameters:**

*xml-* The Result XML Document that was returned by MXMS.

**Returns**

An integer indicating the number of Top-Level Characteristic-Errors in the Result XML Document.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic-error type="TLCError" desc="Sample Top Level Characteristic Error" version="4.4" >
			<characteristic-error type="SGCError" desc="Sample Sub Group Error">
				<parm name="ParmExample" value="1"/>
			</characteristic-error>
		</characteristic-error>
	</wap-provisioningdoc> 

**Example Invocation**

	::java
	int tlcErrorCount = XmlParser.countTlcErrors(xml);

**Example Output**

1

###static public String fetchParm(String xml,ParmSelector selector)

Helper function to extract a single parm value from an XML document.

**Parameters:**

*xml-* The XML Document that contains the parm who's value will be returned

*selector-* A ParmSelector object containing the TLC that the needed parm is inside of and the name of the parm who's value will be returned. 

**Returns**

A string containing the parm value of the specified parm in the XML Document. If there are multiple parms with the same name, only the value of the first one of these parms will be returned.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample" version="4.4" >
			<parm name="ParmExample" value="ParmValueExample"/>
		</characteristic>
	</wap-provisioningdoc> 
	
**Example Invocation**

	:::java
	String parmValue = XmlParser.fetchParm(xml,new ParmSelector("TLCExample","ParmExample"));
	
**Example Output**	

ParmValueExample

###static public ArrayList&lt;String&gt; fetchParmRepeats(String xml,ParmSelector selector)

Helper function to extract a parm value from an XML document. This can be used when there are multiple parms with the same name. The values of these parms would be returned in the ArrayList.

**Parameters:**

*xml-* The XML Document that contains the parm who's value will be returned

*selector-* A ParmSelector object containing the TLC that the needed parm is inside of and the name of the parm who's value will be returned. 

**Returns**

A string containing the parm value of the specified parm in the XML Document.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample" version="4.4" >
			<parm name="ParmExample" value="ParmValueExample1"/>
			<parm name="ParmExample" value="ParmValueExample2"/>
		</characteristic>
	</wap-provisioningdoc> 

**Example Invocation**

	:::java
	ArrayList<String> parmValueList  = XmlParser.fetchParmRepeats(xml, new ParmSelector("TLCExample","ParmExample"));
	
**Example Output**	

[ParmValueExample1, ParmValueExample2]

###public static String formatCompXml(String xml)

Helper function to reformat XML into "comparable" format for equivalence checking. For example, if an XML has contains extra whitespace, this will be removed from the XML so that it can be checked to see if it is equivalent with another XML that does not have whitespace. 

**Parameters:**

*xml-* The Result XML Document that was returned by MXMS

**Returns**

A string containing the reformatted XML.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample"      version="4.4" >
			<parm     name="ParmExample"      value="ParmValueExample"/>
		</characteristic>
	</wap-provisioningdoc> 
	

**Example Invocation**

	:::java
	String formattedXML = XmlParser.formatCompXml(xml);
	
**Example Output**	

	:::XML
	<wap-provisioningdoc><characteristic type="TLCExample" version="4.4" ><parm name="ParmExample" value="ParmValueExample"/></characteristic></wap-provisioningdoc> 


###public static String formatXml(String xml)

Helper function to reformat XML into "displayable" format. This will return the XML on multiple lines for better readability.

**Parameters:**

*xml-* The Result XML Document that was returned by MXMS

**Returns**

A string containing the reformatted XML

**Example Input XML**

	:::XML
	<wap-provisioningdoc><characteristic type="TLCExample" version="4.4"><parm name="ParmExample" value="ParmValueExample"/></characteristic></wap-provisioningdoc>

**Example Invocation**

	::java
	String formattedXML = XmlParser.formatXml(xml);
	
**Example Output**	

	:::XML
	<wap-provisioningdoc>
	<characteristic type="TLCExample" version="4.4">
	<parm name="ParmExample" value="ParmValueExample"/>
	</characteristic>
	</wap-provisioningdoc>

###static public String getAssetXml(Activity activity,String assetName)
Get an XML file from the assets folder and return its contents as a string.

**Parameters:**

*activity-* An object for the Activity that is calling this method.

*assetName-* The name of the XML that is in the Asset folder of the project. This string must include the ".xml" extension.

**Returns**

If the specified XML is found in the Asset folder of the application, a string containing the contents of this XML file will be returned. If the XML file was not found, null will be returned.

**Example Invocation**

	::java
	String xml = XmlParser.getAssetXml(this, "input.xml");
	
**Example Output**

	:::XML
	<wap-provisioningdoc><characteristic type="TLCExample" version="4.4"><parm name="ParmExample" value="ParmValueExample"/></characteristic></wap-provisioningdoc>

###static public String getCharQuery(String charType)
Helper function to construct an XML document that queries a Top-Level Characteristic. This XML Document can then be submitted to MXMS to query the specified Feature Type.

**Parameters:**

*charType-* The Feature Type name that the query will be made for

**Returns**

A string containing the Request XML Document that can be submitted to MXMS to query the specified Feature Type

**Example Invocation**

	::java
	String charQuery = XmlParser.getCharQuery("PersistMgr");
	
**Example Output**

	:::XML
	<wap-provisioningdoc><characteristic-query type="PersistMgr" /></wap-provisioningdoc>
  
###static public String getParmQuery(String charType,String parmName)
Helper function to construct an XML document that queries one parm directly under a Top-Level Characteristic. This XML Document can then be submitted to MXMS to query the specified parm.

**Parameters:**

*charType-* The Feature Type name that will contain the parm that the query will be made for.

*parmName-* The name of the parm that the query will be made for.

**Returns**

A string containing the Request XML Document that can be submitted to MXMS to query the specified parm.

**Example Invocation**

	::java
	String parmQuery = XmlParser.getParmQuery("PersistMgr", "Version");
	
**Example Output**

	:::XML
	<wap-provisioningdoc><characteristic type="PersistMgr"><parm-query name="Version"/></characteristic></wap-provisioningdoc>

###static public boolean isEquivalent(String inXml,String outXml)
Return whether two XML strings are equivalent. This means that they are the same, ignoring whitespace. This can be used to detect if a set Request XML Document was successfully applied by MXMS by comparing it to the returned Result XML Document to see if it contained any errors.

**Parameters:**

*inXml-* The Request XML Document that will be compared to the Result XML Document to see if they are equivalent.

*outXml-* The Result XML Document that will be compared to the Request XML Document to see if they are equivalent.

**Returns**

A Boolean containing true if the XML Documents are equivalent to each other or false if they are not.

**Example Input XML 1**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample" version="4.4" >
			<parm name="ParmExample" value="ParmValueExample"/>
		</characteristic>
	</wap-provisioningdoc> 

**Example Input XML 2**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample"      version="4.4" >
			<parm     name="ParmExample"      value="ParmValueExample"/>
		</characteristic>
	</wap-provisioningdoc> 

**Example Invocation**

	::java
	boolean equivalence = XmlParser.isEquivalent(xml,xml2);
	
**Example Output**

true
	
###public static String readXml(InputStream stream)
Helper function to take an InputStream variable which contains an XML Document and convert it to a string. 

**Parameters:**

*stream-* The InputStream which contains the XML Document that will be read.

**Returns**

The XML Document as a string variable. Null is returned if no data could be read from the stream.

**Example Invocation**

	::java
	String xml = XmlParser.readXml(stream);
	
**Example Output**

	:::XML
	<wap-provisioningdoc><characteristic type="TLCExample" version="4.4" ><parm name="ParmExample" value="ParmValueExample"/></characteristic></wap-provisioningdoc>

###static public String replaceParms(String xml,ArrayList&lt;ParmValue&gt; values)
Helper function to replace the values of a list of parms.

>**Note:** This function will only replace within the first occurrence of a specified Top-Level Characteristic within an XML document. If an XML document has multiple instances of the same Top-Level Characteristic, then subsequent instances cannot be affected.

**Parameters:**

*xml-* The XML Document that contains the parm value(s) that will be replaced.

*values-* ParmValue objects of the parm(s) that will be replaced and the new value(s). Each ParmValue object should contain the Top-Level Characteristic that contains the parm who's value will be replaced, the name of the parm who's value will be replaced, and the new value that will be given to the specified parm.

**Returns**

A string containing the XML Document that was submitted to the method with the specified parm(s) containing the new value(s) that this method set.

**Example Input XML**

	:::XML
	<wap-provisioningdoc>
		<characteristic type="TLCExample" version="4.4" >
			<parm name="ParmExample" value="ParmValueExample"/>
		</characteristic>
	</wap-provisioningdoc> 

**Example Invocation**

	::java
	ArrayList<ParmValue> replaceValues = new ArrayList<ParmValue>();
	replaceValues.add(new ParmValue("TLCExample", "ParmExample", "NewValue"));
	String replaceXml = XmlParser.replaceParms(inXml,replaceValues);
	
**Example Output**

	:::XML
	<wap-provisioningdoc><characteristic type="TLCExample"><parm name="ParmExample" value="NewValue"/></characteristic></wap-provisioningdoc>