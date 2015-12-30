---
title: Intent Manager
description: The Intent Manager allows an application to communicate with other applications using Android Intents.
---

## About Intent

### Overview

The Intent Manager allows an application to communicate with other applications using Android Intents.

In Android, an Intent is an abstract description of an operation to be performed. An Intent must first be created and then sent using one of the following APIs:

* **startActivity** can be used to launch a Activity within an application, usually to perform some User Interface function.
* **broadcastIntent** can be used to notify one or more listener applications about the occurrence of some event.
* **startService** can be used to communicate with a background Service.

Android Intents provide a facility for performing late runtime binding between applications. The most common use of Intents is to launch application Activities. An Intent can be defined as a data structure that specifies an operation to be performed, and the data required to perform that operation. An Intent may consist of an action to specify the operation to be performed, data to be operated upon, and extra data items of various types to qualify the operation to be performed.

Intents are defined by indicating how the Intent should be sent, specifying an Android action name, URI and MIME type of the primary data, and by attaching extra data items.

Android Intents are a general-purpose mechanism, and a rich set of methods is provided in the Android Intent Class to customize an Intent to meet the requirements of the application to which it is being sent. Highly complex Intents can be created using Java code, but it would be impractical for the Intent to attempt to describe every possible Intent. Instead, the most common use case of launching application Activities is supported, along with a modest capability to attach data items to cover other common use cases.

>**Note:** The Intent feature is not designed to create and send very complex Intents, especially those that require numerous extra data items or extra data items with complex data types. If hightly complex Intents are required, do so by writing Java code, packaging it as an application, and launching that application using a simpler Intent.

Every Android Intent is one of two types:

* **Explicit Intents**

	An Explicit Intent is directed to a specific application and requests that application, and only that application, to perform the requested operation. An Explicit Intent may be sent using any of the available methods, but can only be sent to a single application. An Explicit Intent is most commonly sent using startActivity or startService to direct it to an Activity or Service within a specific application.

	If an Intent specifies a Package Name and a Class Name, then it is an Explicit Intent because it will only be sent to the specific application identified by that Package Name and Class Name. An Explicit Intent will fail if an application with the specified Package Name and Class Name is not installed. An Explicit Intent can, but is not required to, specify additional information to tell the receiving application how to perform the requested operation.

* **Implicit Intents**

	An Implicit Intent is a generic request to perform an operation that does not specify which application or applications should perform that operation. An Implicit Intent may be sent using any of the available methods. An Implicit Intent is most sent using broadcastIntent to request an unspecified number of registered receivers to perform an operation.

	If an Intent does not specify a Package Name and Class Name, then it is an Implicit Intent because it does not specify a specific application to which it will be sent. An Implicit Intent may fail if there are no suitable registered receiver(s). An Implicit Intent must specify at least some information to tell receiving application(s) what operation to perform and how to perform the requested operation.

### Main Functionality

* Specify how the Intent will be sent:
	* startActivity
	* broadcastIntent
	* startService
* Specify the Android action name of the operation to be performed 
* Specify the URI and MIME Type of the primary data
* Attach up to 5 extra data items, of the following data types:
	* Standard Integer
	* Character
	* Character Sequence
	* Floating Point
	* Long Integer
	* Boolean
	* Short
	* Double Precision Floating Point
	* String
	* Single Byte Integer

	
##Parameter Notes
###Action
Pivotal parm: Yes 

Description: 

>This parm allow you to specify how the Intent will be sent one or more other applications.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>StartActivity</td>
    <td>"1"</td>
	<td>This value will cause the Intent to be sent using startActivity to invoke an Activity within an application.</td>
  </tr>
  <tr>
    <td>StartService</td>
    <td>"2"</td>
	<td>This value will cause the Intent to be sent using startService to initiate operation of a background Service within an application.</td>
  </tr>
  <tr>
    <td>Broadcast</td>
    <td>"3"</td>
	<td>This value will cause the Intent to be sent using broadcastIntent to invoke registered broadcast receivers (listeners) within one or more applications.</td>
  </tr>
</table>
</div>	

####Android Action Name
Pivotal parm: No

Parm name: ActionName

Description: 

>This parm will allow you to specify the name of the action to be performed by the receiver(s) of the Intent. Many standard Android action names are predefined, but new action names can be added, making the set of possible action names effectively unlimited. A given receiver will likely honor only a small set of action names, so the action name to be used should be chosen from amongst those supported by the intended receiver(s).

>**Note:** Since the set of possible action names is extensible, the Intent does not put any specific restrictions on the action names that can be specified. However, Android rejects an Intent for which there is no suitable receiver. In addition, certain receivers may require certain permissions to be held by an application in order to send Intents with certain action names. If an attempt is made to send an Intent and that Intent is rejected by the Android system or by a specific receiver, then an error will be returned in the Result XML.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####URI
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Uri

Description: 

>This parm allows you to specify a Uniform Resource Identifier (URI) that identifies the primary data for the Intent. A URI parm is not required unless there is some primary data to be processed by the operation requested by the Intent. A URI typically identifies a resource on a remote server. In most cases, a MIME Type should also be specified to define the type of the data referenced by the URI.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####File
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: File

Description: 

>This parm allows you to specify a path and file name that identifies the primary data for the Intent. A File parm is not required unless there is some primary data to be processed by the operation requested by the Intent. In some cases, a MIME Type should also be specified to define the type of the data in the file.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####MIME Type
Pivotal parm: No

Parm name: Type

Description: 

>This parm allows you to specify the content MIME Type of the primary data for the Intent. This parm is used to specify the type of the data object that will be used to perform the requested operation. A MIME Type is commonly specified for file or network resources to assist the receiving application in processing the data. The actual data for the operation to be performed must be specified using the URI parm or the File parm.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Package Name
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Package

Description: 

>This parm allows you to specify the Package Name of the application to which the Intent will be sent. Specifying this parm makes the Intent an Explicit Intent and will result in a failure if no application with the specified Package Name is installed. The Package Name and Class Name parms should always be used together to specify a class within an application.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Class Name
Settable if: The Action is "StartActivity" or "StartService"

Pivotal parm: No

Parm name: Class

Description: 

>This parm allows you to specify a Class Name, within the application identified by the specified Package Name, to which the Intent will be sent. Specifying this parm makes the Intent an Explicit Intent and will result in a failure if no such Class exists within the specified application. The Package Name and Class Name parms should always be used together to specify a class within an application.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

###Extra Data Items

As previously explained, the Intent allows you to specify up to five (5) extra data items to attach to the Intent to be sent. The set prompts and parm names used to specify each of the 5 extra data items are similar and documented below.

####Extra Types:
####(Extra 0 Type, Extra 1 Type, Extra 2 Type, Extra 3 Type, and Extra 4 Type)

Pivotal parm: Yes

Description:

>These parms allow you to choose which of up to 5 extra data items should be attached to the Intent and the data type of each attached extra data item.

<div class="parm-table">
 <table>
	<tr>
		<th>Parm Option Name</th>
		<th>Parm Value</th>
		<th>Description</th>
	</tr>
  <tr>
    <td>None</td>
    <td>"none"</td>
	<td>This value (or the absence of this parm from the XML) will not cause the corresponding extra data item to be attached to the Intent.</td>
  </tr>
  <tr>
    <td>Standard Integer</td>
    <td>"int"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Standard Integer. The value provided for the extra data item will therefore need to be a string representing a valid standard integer value, with a minimum value of -2<sup>31</sup> and a maximum value of 2<sup>31</sup>-1.</td>
  </tr>
  <tr>
    <td>Character</td>
    <td>"char"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of character. The value provided for the extra data item will therefore need to be a string containing a single character.</td>
  </tr>
  <tr>
    <td>Character Sequence</td>
    <td>"charsequence"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Character Sequence. The value provided for the extra data item will therefore need to be a string containing a sequence of characters. This data type is can be used to supply values comparable to the String data type and should be used if the receiver explicitly requires a Character Sequence instead of a String.</td>
  </tr>
  <tr>
    <td>Floating Point</td>
    <td>"float"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Single Precision Floating Point. The value provided for the extra data item will therefore need to be a string representing a valid single-precision 32-bit IEEE 754 floating point number.</td>
  </tr>
  <tr>
    <td>Long Integer</td>
    <td>"long"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Long Integer. The value provided for the extra data item will therefore need to be a string representing a valid long integer value, with a minimum value of -2<sup>63</sup> and a maximum value of 2<sup>63</sup>-1.</td>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>"boolean"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Boolean. The value provided for the extra data item will therefore need to be a string representing a valid boolean value, "false" or "true".</td>
  </tr>
  <tr>
    <td>Short</td>
    <td>"short"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Short Integer. The value provided for the extra data item will therefore need to be a string representing a valid short integer value, with a minimum value of -2<sup>15</sup> and a maximum value of 2<sup>15</sup>-1.</td>
  </tr>
  <tr>
    <td>Double Precision Floating Point</td>
    <td>"double"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Double Precision Floating Point. The value provided for the extra data item will therefore need to be a string representing a valid double-precision 64-bit IEEE 754 floating point number.</td>
  </tr>
  <tr>
    <td>String</td>
    <td>"string"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of character sequence. The value provided for the extra data item will therefore need to be a string containing a sequence of characters. This data type is can be used to supply values comparable to the Character Sequence data type and should be used if the receiver explicitly requires a String instead of a Character Sequence.</td>
  </tr>
  <tr>
    <td>Single Byte Integer</td>
    <td>"byte"</td>
	<td>This value will cause the corresponding extra data item to be attached to the Intent with a data type of Single Byte Integer. The value provided for the extra data item will therefore need to be a string representing a valid single-byte integer value, with a minimum value of -2<sup>7</sup> and a maximum value of 2<sup>7</sup>-1.</td>
  </tr>
</table>
</div>	

####Extra Names:
####(Extra 0 Name, Extra 1 Name, Extra 2 Name, Extra 3 Name, and Extra 4 Name)

Settable if: The Extra 0 Type is not "none"

Pivotal parm: No

Parm names: ExtraName, ExtraName1, ExtraName2, ExtraName3, and ExtraName4

Description: 

>These parms allow you to specify the extra data item name to be attached for any extra data item for which a data type other than "none" was specified.

>**Note:** The Intent does not impose any specific restrictions on names that can be specified for extra data items to be attached to an Intent. But to achieve the desired result be sure to specify the exact name for a extra data item that the receiver of the Intent is expecting.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

####Extra Values:
####(Extra 0 Value, Extra 1 Value, Extra 2 Value, Extra 3 Value, and Extra 4 Value)

Settable if: The Extra 0 Type is not "none"

Pivotal parm: No

Parm names: ExtraValue, ExtraValue1, ExtraValue2, ExtraValue3, and ExtraValue4

Description: 

>These parms allow you to specify the value of the extra data item to be attached to the Intent for the corresponding name for which a data type other than "none" was specified.

Parm value input rules: 

* String with a minimum size of 1 character and a maximum size of 255 characters

##Example XML

###Launch the Main Activity for an Application

	:::XML
	<wap-provisioningdoc>
		<characteristic type="Intent" version="4.3" >
			<parm name="Action" value="StartActivity"/>
			<parm name="ActionName" value="android.intent.action.MAIN"/>
			<parm name="Package" value="com.sample.myapp"/>
			<parm name="Class" value="com.sample.myapp.MainActivity"/>
		</characteristic>
	</wap-provisioningdoc>


