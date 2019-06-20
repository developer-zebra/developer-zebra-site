---
title: Locking-cradle API
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

EMDK for Android 7.4 (and later) contains interfaces for controlling the locking charger cradle for securing and dispensing Zebra EC30 ultra-compact mobile computing devices. Current interfaces provide programmatic access to the following main cradle functions: 

* Lock and unlock all device bays
* LED flash or solid illumination
* LED color
* Timeout
* 



enabling and disabling the cradle

Following design and implementation is an Intent based Cradle API is exposed to Zebra customers and application developers for them to program the applications to communicate with Zebra smart cradle.  
Applications are expected to create and pass the required data structures to the Intent interface.
Client application is not responsible for enabling / disabling the smart cradle – this is handled automatically by the underlying framework when the application tries to send a message.  E.g. the framework could call cradleEnable() when it is told to do action on cradle then call cradleDisable() after action is done.


### Requirements

Use of cradle intent APIs requires experience with Java and Android app development, and familiarity with Android intents. 

**Supported cradle(s)**: 

* EC30 Locking Cradle 

-----

## Cradle Intent APIs

Cradle intent APIs can be used in applications that require control of the EC30 locking cradle. Supported intent actions and commands are listed below. 

**Cradle Action(s)**:

* `com.symbol.cradle.api.ACTION_DO`
	* Unlock cradle
	* Flash LED

Do Action
The following commands are used to do work.

Command - Associated Intent Extra - Values Type - Bundle Parameters

Cradle Unlock - UNLOCK  - Bundle - LED & Timeout
LED Blink 	  - BLINK 	- Bundle - Color, Solid & Timeout

-----

Bundle Parameters

Command - Bundle Parameter - Values Type - Description

Cradle Unlock - LED - Boolean - True - Unlock cradle with LED
							  - False - Unlock cradle without LED
							  - Default : False

TIMEOUT
int
5 to 20 seconds
Default : 0 | Step Value : 1s

LED Blink
 


COLOR
int
1 – Green, 16 – Red, 17 – Blue
Default : 0
SOLID
Boolean
True – Solid LED
False – Blink LED
Default : False
TIMEOUT
int
0 to 120 seconds
Default : 0 | Step Value : 1s
Do Command Return Values
Property
Associated Intent Extra
Values Type
Description
Callback
CALLBACK_RESPONSE
Pending Intent
Will specify if the UNLOCK or BLINK command executed successfully or not. (SUCCESS/FAILURE)
Callback value
 Intent extra
Description
RESULT_CODE
String: “SUCCESS”, “FAILURE”.
Whether the Intent call succeeded or failed.  If this field is “FAILURE” then the RESULT_MESSAGE will contain details of what failed.  This is not the success / fail of the client, it is whether or not the command was successfully sent, for example, failing to cradleEnable () the hardware would lead to a FAIL.
RESULT_MESSAGE
String.  User readable representation of the return message,
e.g. ‘INVALID_PARAMETERS, ‘DEVICE_NOT_READY’ or some other message.


**IrDA Intents and Actions**:

* `com.symbol.irda.api.ACTION_DO`:
 * Send data
<br>
<br>

* `com.symbol.irda.api.ACTION_GET`:
 * Get server name
 * Get driver version
 * Get connection idle time
<br>
<br>

* `com.symbol.irda.api.ACTION_REGISTER`:
 * Register/Unregister callbacks
<br>
<br>

* `com.symbol.irda.api.ACTION_UPDATE`:
 * Set server name
 * Set connection idle time
<br>

##### Usage information for each command follows in the sections below.

-----

## Send Data 

To send data over IrDA, data must be converted to byte arrays. Large data is broken into small chunks of bytes prior to delivery to the receiving device. The first `SEND_DATA` command typically requires extra time to complete; `SEND_DATA` commands sent within 30 seconds of the first complete more quickly. The 30-second time frame is adjustable; see [Set Connection Idle Time](#setconnectionidletime) section for details.

### Sample Code

#### To send data via IrDA:

		:::Java
		Intent intent = new Intent(); //Create new intent

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_DO");

		//Set to run at foreground priority, with a shorter timeout interval 
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 
		
		//Text to be sent over IrDA
		String text = "Hello IrDA"; 

		//Convert to byte array to be accepted by SEND_DATA
		byte[] byteArray = text.getBytes();

		//Supported value up to 1024 bytes
		intent.putExtra("SEND_DATA", byteArray); 

		//Designate the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class); 
		
		//Set to run at foreground priority, with a shorter timeout interval
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);

		//Any extras are useful to identify feedback
		responseIntent.putExtra("COMMAND", "SEND_DATA"); 

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here
		intent.putExtra("CALLBACK_RESPONSE", piResponse); 
		
		//Send the broadcast
		sendBroadcast(intent); 

To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands). 

-----

## Set Server Name

For IrDA communication, the Zebra device serves as the “client” and the device it communicates with is the “server." To identify the device it communicates with, set the server name of the device. If a server name is not specified, the default “**IrDA:TinyTP**” is used.

### Sample Code

Set the server name:

		:::Java
		//Create new intent 
		Intent intent = new Intent(); 

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_UPDATE");

		//Set to run at foreground priority with a shorter timeout interval 
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Server name to be used
		intent.putExtra("SERVER_NAME", "<NEW SERVER NAME>"); 

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class); 
		
		//Set to run at foreground priority with a shorter timeout interval
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);

		//Any extras are useful to identify feedback 
		responseIntent.putExtra("COMMAND", "SET_SERVER_NAME"); 

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here
		intent.putExtra("CALLBACK_RESPONSE", piResponse); 
		
		//Send the broadcast
		sendBroadcast(intent); 

The new server name is kept in device memory until device restart, after which the server name is reset to the “**IrDA:TinyTP**” default server name. To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands).

-----

## Register Callbacks 

The application must be registered for callbacks to receive messages or responses from the server. Once the callback is processed, the application can act accordingly depending on the response received.


### Sample Code 

#### Register and receive callbacks from the server:

		:::Java
		//Create new intent
		Intent intent = new Intent(); 

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_REGISTER");

		//Set to run at foreground priority, with a shorter timeout interval 
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Intent to be sent back with status (via explicit broadcast)
		Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);

		//Cross-check the extras specified here vs the intent received to the broadcast receiver to identify the related response
		responseIntent.putExtra("COMMAND", "REGISTER_CALLBACK_CALL");

		//Set to run at foreground priority, with a shorter timeout interval 
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here
		intent.putExtra("CALLBACK_RESPONSE", piResponse); 

		//Intent called whenever data is received from the server
		int flags2 = 0;
		int requestCode2 = 3;
		Intent dataCallBackIntent = new Intent(this, MyBroadcastReceiver.class);
		dataCallBackIntent.putExtra("COMMAND", "REGISTERED_CALLBACK_DATA");

		//Set to run at foreground priority, with a shorter timeout interval
		dataCallBackIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 
		PendingIntent piDataCallback = PendingIntent.getBroadcast(getApplicationContext(), requestCode2, dataCallBackIntent, flags2);

		//Send pending intent as DATA_CALLBACK
		//IrDA API responds to the pending intent specified here when a data is received from the server
		intent.putExtra("DATA_CALLBACK", piDataCallback); 
		
		//Send the broadcast
		sendBroadcast(intent); 

After executing the code above, callbacks from the server are delivered to the broadcast receiver. 

The extras specified for the `dataCallBackIntent` versus the broadcast receiver intent can be cross-checked to identify the related response as follows:

#### Check the COMMAND parameter:

		:::Java
		public class MyBroadcastReceiver extends BroadcastReceiver {

	    @Override
	    public void onReceive(Context context, Intent intent) {
	        
	        String command = intent.getStringExtra("COMMAND");
	        
	        String status = "";
	        if(command != null && command.equalsIgnoreCase("REGISTERED_CALLBACK_DATA")) {
	            byte[] data = intent.getByteArrayExtra("DATA_CALLBACK");
	            status += " "+ data.length + " bytes received!";
	        }
	        Log.d("TAG",status);
	    }
	}

To receive the response from the server, extract the information from `DATA_CALLBACK`.

-----

## Unregister Callbacks

For each callback that is registered, a corresponding call is needed to unregister the callback. Set the DATA_CALLBACK parameter to NULL to unregister the callback.

### Sample Code

#### Unregister the callback:

		:::Java
		//Create new intent
		Intent intent = new Intent();  

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_REGISTER");

		//Set to run at foreground priority, with a shorter timeout interval 
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);

		/Any extras are useful 
		responseIntent.putExtra("COMMAND", "UNREGISTER_CALLBACK_CALL"); / 		 
 

#### Identify the feedback at broadcast receiver

		:::Java
		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here
		intent.putExtra("CALLBACK_RESPONSE", piResponse);

		//Send DATA_CALLBACK as null to stop receiving callbacks from the server
		intent.putExtra("DATA_CALLBACK", (String)null); 

		//Send the broadcast
		sendBroadcast(intent); 

-----

## Set Connection Idle Time

The IrDA port is opened when the first `SEND_DATA` command is received. The port is kept open for 30 seconds by default. Within this time frame, subsequent `SEND_DATA` commands are not needed to open the port again. After 30 seconds from the last IrDA API call, the port is closed. This time frame is adjustable by setting the connection idle time.

### Sample Code

#### Set connection idle time:

		:::Java
		//Create new intent
		Intent intent = new Intent(); 

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_UPDATE"); 

		//Set to run at foreground priority, with a shorter timeout interval.
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Set idle time to 15 seconds
		intent.putExtra("CONNECTION_IDLE_TIME", 15); 

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);
		
		//Set to run at foreground priority, with a shorter timeout interval.
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);  

		//Any extras are useful to identify the feedback at the broadcast receiver
		responseIntent.putExtra("COMMAND", "SET_CONNECTION_IDLE_TIME"); 
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		
		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here
		intent.putExtra("CALLBACK_RESPONSE", piResponse); 
		
		//Send the broadcast
		sendBroadcast(intent); 

To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands). 

-----

## Get Command

The Get command retrieves the following properties:

`CONNECTION_IDLE_TIME` - Returns the time (in seconds) the connection remains open before automatically closing 
`SERVER_NAME` - Returns the current server name 
`DRIVER_VERSION` - Driver version 

### Sample Code 

#### Get driver version:

		:::Java
		//Create new intent
		Intent intent = new Intent(); 

		//Specify the IrDA action
		intent.setAction("com.symbol.irda.api.ACTION_GET");

		//Set to run at foreground priority, with a shorter timeout interval 
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Mention the properties to Retrieve
		String[] propertiesToRetrieve = {"DRIVER_VERSION", "CONNECTION_IDLE_TIME", "SERVER_NAME"};

		//Assign the properties to retrieve to PROPERTIES_TO_GET extra
		intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);  

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);

		//Set to run at foreground priority, with a shorter timeout interval
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); 

		//Any extras are useful to identify the feedback at the broadcast receiver 
		responseIntent.putExtra("COMMAND", "GET_DRIVER_VERSION"); 

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);

		//Send pending intent as CALLBACK_RESPONSE
		//IrDA API responds to the pending intent specified here.
		intent.putExtra("CALLBACK_RESPONSE", piResponse);

		//Send the broadcast 
		sendBroadcast(intent); 

#### Decode the Get command response

The Get command response is delivered to the broadcast receiver in the pending intent to retrieve the queried data.

#### Retrieve data from the Get command:

		:::Java
		public class MyBroadcastReceiver extends BroadcastReceiver {
		    @Override
		    public void onReceive(Context context, Intent intent) {

	        String status = "";
	        String command = intent.getStringExtra("COMMAND");
	        if(command != null) {
	            switch (command) {
	                case "GET_SERVER_NAME":
	                    status += " "+ intent.getStringExtra("SERVER_NAME");
	                    break;
	                case "GET_CONNECTION_IDLE_TIME":
	                    status += " "+ intent.getIntExtra("CONNECTION_IDLE_TIME",0);
	                    break;
	                case "GET_DRIVER_VERSION":
	                    status += " "+ intent.getStringExtra("DRIVER_VERSION");
	                    break;

	            }
	        }
	        Log.d("TAG",status);
	    }
	}

-----

## Get Feedback for Commands

The `ACTION_DO` and `ACTION_UPDATE` methods send a `RESULT_CODE` and a `RESULT_MESSAGE` back to the client app with feedback about whether the specified command succeeded. This response is delivered to the broadcast receiver and passed to the pending intent.

### Sample Code 

#### Get feedback from commands:

		:::Java
		public class MyBroadcastReceiver extends BroadcastReceiver {

	    @Override
	    public void onReceive(Context context, Intent intent) {

	        String status = "";
	        String command = intent.getStringExtra("COMMAND");
	        String resultCode = intent.getStringExtra("RESULT_CODE");
	        String resultMessage = intent.getStringExtra("RESULT_MESSAGE");

	        if(command != null)
	            status += "" + command + ": ";

	        if(resultCode != null)
	            status += "" + resultCode;

	        if(resultMessage != null)
	            status += "\nMessage: " + resultMessage;
	        
	        Log.d("TAG",status);

	    }
	}

-----

## Also See

* [Data capture intent APIs](../datacapture)
* [Battery intent APIs](../battery)
* [Native APIs](../../api)
