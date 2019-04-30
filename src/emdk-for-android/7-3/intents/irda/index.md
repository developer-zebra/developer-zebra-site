---
title: IrDA Intents API
layout: guide.html
product: EMDK For Android
productversion: '7.3'
---

#`UNDER CONSTRUCTION`

## Overview

Zebra IrDA APIs operate through Android intents – specific commands that can be used by Android applications to control IrDA. This guide provides developers with a comprehensive set of tools to easily communicate between IrDA devices via wireless infrared communication with IrDA Intent APIs on Zebra mobile devices.  

* Zebra IrDA supports the following protocols:
 * TinyTP
 * IrLMP
 * IrLAP/ LSAP
 * IrSIR

### Requirements

Use of IrDA APIs requires experience with Java programming, Android application development and familiarity with Android intents. 

**Target device(s) must contain**: 

* IrDA peripheral hardware
* DataWedge version 7.3.11 or later on the device
* IrDA transceivers in clear line-of-sight during data transmission

-----

IrDA Intent APIs

IrDA Intent APIs can be used in applications that require control of IrDA communication.
Supported intent actions and commands:

`com.symbol.irda.api.ACTION_UPDATE`
* Set server name
* Set connection idle time

`com.symbol.irda.api.ACTION_DO`
Send Data

`com.symbol.irda.api.ACTION_GET`
* Get server name
* Get driver version
* Get connection idle time

`com.symbol.irda.api.ACTION_REGISTER`
* Register/Unregister callbacks

Usage information for each command follows in the sections below.

-----

## Send Data 

To send data over IrDA, data must be converted to byte arrays. Large data is broken into small chunks of bytes prior to delivery to the receiving device. The first `SEND_DATA` command typically requires extra time to complete; `SEND_DATA` commands sent within 30 seconds of the first often complete more quickly. The 30-second time frame is adjustable; see [Set Connection Idle Time](#setconnectionidletime) section for details.

### Sample Code

#### To send data via IrDA:

		:::Java
		Intent intent = new Intent(); //Create new intent
		intent.setAction("com.symbol.irda.api.ACTION_DO"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		String text = "Hello IrDA"; //Text to be sent over IrDA

		byte[] byteArray = text.getBytes(); //Convert to byte array to be accepted by SEND_DATA 
		intent.putExtra("SEND_DATA", byteArray); //Supported value up to 1024 bytes

		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class); //Mention the broadcast receiver to receive the response
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.
		responseIntent.putExtra("COMMAND", "SEND_DATA"); //Any extras are useful to identify feedback

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE
		IrDA API responds to the pending intent mentioned here.
		sendBroadcast(intent); //Send the broadcast

To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands). 

-----

## Set Server Name

For IrDA communication, the Zebra device serves as the “client” and the device it communicates to is the “server”. To identify the device it communicates to, set the server name of the device . If a server name is not specified, a default server name “IrDA:TinyTP” is used.

### Sample Code

Set the server name:

		:::Java
		Intent intent = new Intent(); //Create new intent 
		intent.setAction("com.symbol.irda.api.ACTION_UPDATE"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		intent.putExtra("SERVER_NAME", "<NEW SERVER NAME>"); //Server name to be used

		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class); //Mention the broadcast receiver to receive the response
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.
		responseIntent.putExtra("COMMAND", "SET_SERVER_NAME"); //Any extras are useful to identify feedback

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE. IrDA API responds to the pending intent mentioned here.
		sendBroadcast(intent); //Send the broadcast

The new server name is kept in device memory until device restart, after which the server name is reset to its default server name. To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands).

-----

## Register Callbacks 

The application must be registered for callbacks to receive messages or responses from the server. Once the callback is processed, the application can act accordingly depending on the response received.


## Sample Code 

#### Register and receive callbacks from the server:

		:::Java
		Intent intent = new Intent(); //Create new intent
		intent.setAction("com.symbol.irda.api.ACTION_REGISTER"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		//Intent to be sent back with status (via explicit broadcast)
		Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
		responseIntent.putExtra("COMMAND", "REGISTER_CALLBACK_CALL"); //Cross-check the extras specified here vs the intent received to the broadcast receiver to identify the related response.
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE. IrDA API responds to the pending intent mentioned here.



		//Intent called whenever data is received from the server
		int flags2 = 0;
		int requestCode2 = 3;
		Intent dataCallBackIntent = new Intent(this, MyBroadcastReceiver.class);
		dataCallBackIntent.putExtra("COMMAND", "REGISTERED_CALLBACK_DATA");
		dataCallBackIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.
		PendingIntent piDataCallback = PendingIntent.getBroadcast(getApplicationContext(), requestCode2, dataCallBackIntent, flags2);
		intent.putExtra("DATA_CALLBACK", piDataCallback); //Send pending intent as DATA_CALLBACK. IrDA API responds to the pending intent mentioned here when a data is received from the server
		sendBroadcast(intent); //Send the broadcast

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
		Intent intent = new Intent();  //Create new intent
		intent.setAction("com.symbol.irda.api.ACTION_REGISTER"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		Intent responseIntent = new Intent(this, MyBroadcastReceiver.class); //Mention the broadcast receiver to receive the response
		responseIntent.putExtra("COMMAND", "UNREGISTER_CALLBACK_CALL"); //Any extras are useful 		 
 

#### Identify the feedback at broadcast receiver

		:::Java
		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE. IrDA API responds to the pending intent mentioned here.
		intent.putExtra("DATA_CALLBACK", (String)null); //Send DATA_CALLBACK as null to stop receiving callbacks from the server
		sendBroadcast(intent); //Send the broadcast

-----

## Set Connection Idle Time

The IrDA port is opened when the first `SEND_DATA` command is received. The port is kept open for 30 seconds by default. Within this time frame, subsequent `SEND_DATA` commands are not needed to open the port again. After 30 seconds from the last IrDA API call, the port is closed. This time frame is adjustable by setting the connection idle time.

### Sample Code

#### Set connection idle time:

		:::Java
		Intent intent = new Intent(); //Create new intent
		intent.setAction("com.symbol.irda.api.ACTION_UPDATE"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		intent.putExtra("CONNECTION_IDLE_TIME", 15); //Set idle time to 15 seconds

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);  //Set to run at foreground priority, with a shorter timeout interval.
		responseIntent.putExtra("COMMAND", "SET_CONNECTION_IDLE_TIME"); //Any extras are useful to identify the feedback at the broadcast receiver
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE. IrDA API responds to the pending intent mentioned here.
		sendBroadcast(intent); //Send the broadcast

To determine command success, see [Get Feedback for Commands](#getfeedbackforcommands). 

-----

## Get Command

The Get command retrieves the following properties:

`CONNECTION_IDLE_TIME` Returns the time (in seconds) the connection remains open before automatically closing 
`SERVER_NAME` - Returns the current server name 
`DRIVER_VERSION` - Driver version 

### Sample Code 

#### Get driver version:

		:::Java
		Intent intent = new Intent(); //Create new intent
		intent.setAction("com.symbol.irda.api.ACTION_GET"); //Specify the IrDA action
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND); //Set to run at foreground priority, with a shorter timeout interval.

		//Mention the properties to Retrieve
		String[] propertiesToRetrieve = {"DRIVER_VERSION", "CONNECTION_IDLE_TIME", "SERVER_NAME"};
		intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);  //Assign the properties to retrieve to PROPERTIES_TO_GET extra

		//Mention the broadcast receiver to receive the response
		Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);
		responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);  //Set to run at foreground priority, with a shorter timeout interval.
		responseIntent.putExtra("COMMAND", "GET_DRIVER_VERSION"); //Any extras are useful to identify the feedback at the broadcast receiver

		//Create pending intent
		PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext().getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
		intent.putExtra("CALLBACK_RESPONSE", piResponse); //Send pending intent as CALLBACK_RESPONSE. IrDA API responds to the pending intent mentioned here.
		sendBroadcast(intent); //Send the broadcast

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

The `ACTION_DO` and `ACTION_UPDATE` methods send a response back to the client application with feedback about whether the specified command succeeded. This response is delivered to the broadcast receiver passed to the pending intent. `ACTION_DO` and `ACTION_UPDATE` send a `RESULT_CODE` and a `RESULT_MESSAGE` back to the application containing feedback on the command executed. 

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


