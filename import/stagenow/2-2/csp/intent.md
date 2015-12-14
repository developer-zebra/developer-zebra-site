# Intent

## About Intent

### Overview

The Intent Manager setting type allows an application to create and send intents on the device.  Intents are an Android mechanism to perform inter-process communications to activities or services in a generic manner.

An Intent is sent by an activity or service (the requestor) within one application package and is received by one or more activities or services (the receivers) within one or more application packages.  When sending an Intent, the requestor must specify an Action indicating the operation/function to initiate and allowing the Android system to identity a suitable receiver(s) for the Intent.

There are two key types of Intents:

* An Explicit Intent is directed to a single specific activity or service. To accomplish this, the requestor explicitly specifies the component to which the Intent will be sent.  Because Explicit Intents cannot be intercepted or accessed by anyone other than the intended recipient, they are inherently more secure than Implicit Intents.  Explicit Intents always produce the same result since they are always routed to the same receiver. Sending an Explicit Intent is more complex than sending an Implicit Intent because the requestor must specify specific identity details about the intended receiver, and so it fails if this information does not exactly match an installed activity or service that can accept the request.

* An Implicit Intent is sent anonymously to an unspecified activity or service that can implement the operation/function requested by the specified Action.  The Android system is responsible for identifying all activities or services that COULD handle the Intent and determining which activities or services the Intent should be sent.  An Implicit Intent can be less secure than an Explicit Intent since it can be sent to an unintended receiver and/or to multiple receivers.  Implicit Intents can be less complex to send since they require information only about the request and not about the intended receiver(s).  Sending an Implicit Intent succeeds if there is any installed activity or service that can accept the request.

There are three ways to send an Intent:

* Start Activity is commonly used to send both Explicit or Implicit Intents targeted at a single activity within a single application package. 

* Start Service sends an Intent targeted at a single service within a single application package. Start Service can be used to send Explicit or Implicit Intents, but is most commonly for Explicit Intents.

* Send Broadcast sends an Intent targeted at one or more activities or services within one or more application packages. Send Broadcast can be used to send Explicit or Implicit Intents, but is most commonly used for Implicit Intents.

As noted earlier, when sending an Intent, a requestor must specify an Action that indicates the operation/function to initiate.  The requestor may also specify other attributes as part of the Intent, which include information about the requested operation/function or about the intended receiver. The following describes only those attributes that can be specified via the Intent Manager setting type.


### Main Functionality

* Launch the main activity of an application package to present the User Interface (UI) for that activity
* Invoke a specific function within an activity within an application (with the UI associated with that function of that activity)
* Start a service that implements one or more functions that can be used by one or more activities or services
* Broadcast an Intent to communicate information to one or more activities or services

## Parameter Notes

### Action
Specify the intent action to perform.

The Action parameter specifies the name of the Intent Action that identifies the operation/function requested by the requestor to be performed by the receiver(s).  Many standard Android Intent Actions can be used, and applications can create their own custom Intent Actions. Following are some of the most commonly used standard Android Intent Actions:

* android.intent.action.MAIN

This Intent Action requests the receiver to launch its main entry point. The exact meaning of this Action varies based on the receiver, but for most applications, this Actions launches the main activity contained within the application package. For example, this Action can launch the activity for an application that would be launched by clicking the application’s main launcher icon. This Action does not generally expect any supplied data.

* android.intent.action.EDIT

This Intent Action requests the receiver to launch a suitable activity to edit the supplied data.  The exact meaning of this Action varies based on the receiver, as well as the type of data that must be supplied.

* android.intent.action.VIEW

This Intent Action requests the receiver to launch a suitable activity to view the supplied data.  The exact meaning of this Action varies based on the receiver, as well as the type of data that must be supplied.

### MIME Type
Provide the content MIME Type to specify in the intent.
The MIME (Multipurpose Internet Mail Extensions) Type parameter specifies the type of data to be supplied for the Intent. This parameter is meaningful only when data is supplied and is most commonly used in conjunction with the URI parameter or the File parameter to specify the type of data referenced by the URI or contained within the File. Most applications handle only a limited set of data types and only have Intents routed to them that specify data types that they support.

### URI
Set the data URI for the explicit MIME type for the intent.
The URI (Uniform Resource Identifier) parameter specifies the location of data the receiver uses to implement the requested operation/function. This parameter must be used in conjunction with the MIME Type attribute in order to identify the type of the data.

### File
Set the data file for the explicit MIME type for the intent.
The File parameter specifies the path and name of a file containing data the receiver uses to implement the requested operation/function. This parameter must be used in conjunction with the MIME Type attribute in order to identify the type of the data.

### Package Name
The Package Name parameter specifies the application package name of the receiver to which the Intent may be sent. Only use this parameter when sending an Explicit Intent. The Package Name and Class Name attributes must always be specified together to identify a given component within an application package. The Package Name can be extracted from the APK file for an application package or must be obtained from the developer of the application package.

### Class Name
The Class Name attribute specifies the class name of the receiver to which the Intent may be sent. Only use this parameter when sending an Explicit Intent. The Package Name and Class Name attributes must always be specified together to identify a given component within an application package. The Class Name must be obtained from the developer of the application package.

### Extra Data
Specify Extra Data to attach to the intent.
Extra Data parameters specify additional information that the receiver can use to implement the operation/function. The exact set of Extra Data parameters required varies based on the receiver. The Intent Manager setting type allows specifying up to five sets of Extra Data parameters. The Intent Manager setting type does not validate that the number of sets of Extra Data parameters is suitable for any specific receiver.

Each set of Extra Data specified must include all the following parameters:

* Type - Specifies the type of the data value provided in the Value parameter. 
The supported types are:
  * The Standard Integer Type parameter indicates that the value must be a 32-bit signed two's complement integer, with a minimum value of 2147483648 (-231) and a maximum value of 2147483647 (231-1).
  * The Short Integer Type parameter indicates that the value must be a 16-bit signed two's complement integer. It has a minimum value of -32,768 (-215) and a maximum value of 32,767 (-215-1).
  * The Long Integer Type parameter indicates that the value must be a 32-bit signed two's complement integer, with a minimum value of 9223372036854775808 (-263) and a maximum value of 9223372036854775807 (263-1).
  * The Single Byte Integer Type parameter indicates that the value must be an 8-bit signed two's complement integer, with a minimum value of -128 (27-1) and a maximum value of 127 (27-1).
  * The Character Type parameter indicates that the value must be a single character.
  * The Character Sequence Type parameter indicates that the value must be sequence of characters
  * The Floating Point Type parameter indicates that the value must be a single-precision 32-bit IEEE 754 floating point.
  * The Boolean Type parameter indicates that the value must be true (1) or false(0).
  * The Double Precision Floating Point Type parameter indicates that the value must be a double-precision 64-bit IEEE 754 floating point.
  * The String Type parameter indicates that the value must be a string of characters.


* Name - Specifies the name that identifies the data value provided in the Value parameter. The set of names supported depends on the receiver, as does the data type of the value expected for a given name and that must be specified via the Type parameter. The Intent Manager setting type does not validate that the specified name is valid or that it is suitable by any specific receiver.

* Value - Specifies the value identified by the Name parameter and must be of the data type specified via the Type parameter. The Intent Manager setting type does not validate that the value meets the constraint of the specified data type or is suitable for any specific receiver.


## Feature Compatibility

<iframe src="compare.html#mx=4.3&csp=Intent&embed=true"></iframe> 
