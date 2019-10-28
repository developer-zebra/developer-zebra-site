---
title: Enterprise Keyboard APIs
layout: guide.html
product: Enterprise Keyboard
productversion: '3.2'
---

## Overview

Zebra Enterprise Keyboard APIs operate primarily through Android intents&ndash;specific commands that can be used by Android applications to control EKB and layouts made with the [Enterprise Keyboard Designer](/ekd) (EKB Designer, or EKD), Zebra's Windows-based custom keyboard creator tool. This guide describes the functionality of the intents supported by EKB and their effects on EKD layouts.

### Requirements
Using EKB APIs requires experience with Java programming, familiarity with Android intents and at least one custom layout file (i.e. `myLayout.encrypted`). It also requires knowledge of EKB usage, features and terminology. Learn more [about Enterprise Keyboard](http://techdocs.zebra.com/enterprise-keyboard).

### About the APIs
Enterprise Keyboard APIs allow the following functions: 

* **ENABLE** (true/false) enables or disables the keyboard 
* **GET** can return lists of: 
 * Available keyboard layouts
 * Current key layout group (file name) and the name of the current layout
* **SET** switches to the specified keyboard layout
* **SHOW** displays the specified layout on the device
* **RESET** Resets EKB layouts and enables Enterprise Keyboard (if disabled)

> * **Zebra recommends resetting to the default input device when quitting an app that uses EKB**. 

-----

### `IMPORTANT - PLEASE READ`
* **<u>Only one keyboard or custom key layout can be displayed on the device screen at a time</u>**. When a custom key layout is displayed, all other keyboards are hidden, including the standard Enterprise Keyboard alpha-numeric layout. 
* **Layouts made with EKD must be called by an app using intents** to be displayed.
* **Apps on the device can access <u>only a single EKD project file</u>**, but multiple layouts can be saved in that single project file and called independently through intents.  
* EKD projects are saved and deployed as encrypted files that can be decrypted on the device only by **DataWedge, Enterprise Browser and Enterprise Keyboard** and applications running on a Zebra Android device. 
* Layout files can be imported into Enterprise Keyboard Designer and modified or supplemented with additional keys and/or layouts. 
* **Zebra recommends resetting to the default input device when quitting an app that uses EKB**. 
* In this guide, the terms “button” and “key” are used interchangeably. 
* **If an app contains logic to show the keyboard automatically** when an activity comes to the foreground (i.e. the activity has a declared flag of `android:windowSoftInputMode`=`stateVisible` in its `AndroidManifest.xml` file), **that app cannot hide the keyboard using the SHOW API**.
* Apps running in full screen mode display custom keyboard layouts with an extra margin from the bottom of the device screen.

-----

### Using EKB APIs
The following example describes a company with business requirements that call for an application with four GUI screens: 

* `FunctionKeyActivity`
* `DisableActivity`
* `MultiInputActivity`
* `ResetActivity` 

`FunctionKeyActivity` is the launcher activity of the application, and is the first activity in the following sequence of the activities:

`FunctionKeyActivity` -> `DisableActivity` -> `MultiInputActivity` -> `ResetActivity`

Each activity involves the following keyboard requirements:

When `FunctionKeyActivity` comes to the foreground, the app should `GET` the following information:
* Available layouts in the device
* Current layout group name
* Current layout name

* `FunctionKeyActivity` should then set a function-key keyboard layout to show immediately when the app it comes in the foreground.
* `DisableActivity` does not use a keyboard, so keyboard should be disabled when this activity comes to the foreground. If the device user taps on an input area, a keyboard should not appear.
* `MultiInputActivity` has two input areas. When the device user taps on the first input area, a qwerty keyboard layout appears. When the user taps on the second input area, the numeric keyboard layout appears.
* `ResetActivity` uses a regular keyboard, so keyboard should be reset.

> **Note**: Zebra provides a sample Android app that implements the functions described above.

-----

## Intents

App developers and administrators can use Android intents to determine programmatically which layouts are available in a device and to select and switch between layouts according to the input requirements of an application.

### Sending Intents
The syntax defined in Enterprise Keyboard 2.0 permits multiple Enterprise Keyboard API calls as extras on a single intent action. The syntax is as follows:

	:::java
	Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
	intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[]propertiesToRetrieve = {"AVAILABLE_LAYOUTS"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);

### Receiving Results
For intents that query EKB for information (such as `GET_AVAILABLE_LAYOUTS`), the app must declare a receiver in the `AndroidManifest.xml` file and add a pending intent in the query intent as an extra to receive the result. 

##### Register the broadcast receiver to receive the results:

	:::java
	//Declare broadcast receiver in AndroidManifest.xml file
	<receiver android:name=".MyBroadcastReceiver"></receiver>

	//Sending intent to get available layouts

	Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
	intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[] propertiesToRetrieve = {"AVAILABLE_LAYOUTS"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);


	//Intent sent back with status (via explicit broadcast)

	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);
	 
	//Receiving the result
	@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString(“RESULT_CODE”);
	    String msg = mBundle.getString(“RESULT_MESSAGE”);
	}


-----

## Example Use Cases

This section explains how to switch layouts when focus of the input field changes. 

Only one definition (.encrypted) file should be present in following folder path in device:
  


Keyboard and key layout settings can be configured using EKB intent APIs or through DataWedge. There are scenarios where user can switch between custom layouts and EKB's fixed layouts (i.e. numeric, alpha-numeric, scan and symbol layouts). 



### Requirements

* EKB v3.2 installed on the target device(s) and set as the default input source
* **A *<u>single</u>* EKD layout** (`.encrypted`) **file** in the following device folder: <br>
 `/enterprise/device/settings/ekb/config/`

> See the [Enterprise Keyboard Designer Guide](/ekd) for help creating a layout file. 

-----

### Use Case #1

This case describes an Android app with two text input fields: one (editText1) requires one or more of the standard Enterprise Keyboard fixed (numeric, alpha-numeric, scan and symbol) layouts, the other (editText2) uses a custom layout made with EKD. The steps below describe the program logic for switching between two layouts as needed. 

**Note**: To protect against a user not knowing the “CustomLayout” name, send an intent to get all available layout names in the layout file _before_ the calling the onFocus change listener.

Perform the tasks below on changes to the `onFocus` property of edittext1 (1st edittext inputField) to show custom layout.

1. When the editText1 gets focus, perform the tasks to display the EKB fixed layout:
 * Send `ENABLE` intent to Enterprise Keyboard 
 * Send `RESET` to the EKB layout
 * When the intent broadcast is received (through the `onReceive()` method), check the result type value. If the result type value is `DEFAULT_LAYOUT` then send an intent to `SHOW` the EKB layout.
2. When focus changes to edittext2 from edittext1, use these tasks to show the custom layout:
 * Send an intent to set the custom layout
 * Disable the Enterprise Keyboard on Focus out of the input field

Note: Enterprise Keyboard must be enabled if the application goes in background. The user could reset the layout to show fixed layout outside the application.


		:::Java
		<insert command here>


* Disable the Enterprise Keyboard on focus out of the input field.


* Perform the below tasks when focus changes to edittext2 from exittext1 and show fixed layout. User should perform below tasks when the edittext2 input field gets focus.



-----

### Use Case #2

There are two edit text input field in an android application where the user wants to associate first inputfield with one custom layout and second inputfield with another custom layout. They are switching between edittext inputfields in specific time interval. 
Description: 
Note: User must have two layouts created using EKD and the deliverable file (`.encrypted`) must be deployed inside device. 

Suppose, user has two edittext input field, edittext1 and edittext2 and the edittext1 should have associated a custom layout, “numericLayout” (Layout Name) and edittext2 should have associated with a custom layout, “functionLayout” (Layout Name). The below steps should be followed for handling the focus In/Out change of the edit text input file.
* Perform the below task on onFocus change of edittext1 (first inputField) to show the “numericLayout” custom layout.
* When the edit text input field gets Focus, send an Intent to set the “numericLayout” custom layout.


* Perform the below task on onFocus change of edittext2 (second inputField) to show the “functionLayout” custom layout.
* When the edit text input field gets Focus, send an Intent to set the “functionLayout” custom layout.

-----

## Sample Code

### ENABLE
Used to enable or disable the keyboard. 

**Parameter values**:
* **TRUE**: Keyboard enabled and shown whenever device user taps on an input field.
* **FALSE**: Keyboard is disabled and does not show even after using SHOW API or tapping on an input area.

Once keyboard is enabled/disabled, requested application will receive a response intent having `RESULT_CODE` and `RESULT_MESSAGE`.

##### Show keyboard:
	:::java
			Intent intent = new Intent();
		intent.setAction("com.symbol.ekb.api.ACTION_UPDATE");
			intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);

	// needToEnable is a Boolean object; it can be true or false:

		intent.putExtra("ENABLE", needToEnable);	

	//  Intent sent back with status (via explicit broadcast)

	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);
	 

##### Receive the result:
	::java
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");    
	}

-----

### GET (available layouts)
Returns a list of custom enterprise keyboard layouts currently available in the device.

##### Get available keyboard layouts:

	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[] propertiesToRetrieve = {"AVAILABLE_LAYOUTS"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);

	// Intent sent back with status (via explicit broadcast)
	
	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);

##### Receive the result:

	:::java 
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");

	    if(mBundle.get("AVAILABLE_LAYOUTS") != null) {
	        Object[] respObj = (Object[]) mBundle.getParcelableArray("AVAILABLE_LAYOUTS");
	        for(int i = 0; i < respObj.length; i++) {
	            Bundle temp = (Bundle) respObj[i];
	            String layoutGroupName = temp.getString("LAYOUT_GROUP");
	            Object[] layoutNamesBundle = (Object[]) temp.get("LAYOUTS");
	            for(int j = 0; j <layoutNamesBundle.length; j++) {
	                Bundle tempBundle = (Bundle) layoutNamesBundle[j];
	                String layoutName = tempBundle.getString("LAYOUT_NAME");
	            }
	        }
	    }
	}

-----

### GET (current layout)

This gets the current keyboard layout group and the current keyboard layout name. Returns the currently selected keyboard layout group and current keyboard layout name as set by Enterprise Keyboard.

##### Get current keyboard layout group and layout name:
	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[] propertiesToRetrieve = {"CURRENT_LAYOUT_GROUP”,"CURRENT_LAYOUT_NAME"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);

	//  Intent which will be sent back with status (via explicit broadcast)
	
	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);

##### Receive the result:
	:::java
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");
	    if(mBundle.get("CURRENT_LAYOUT_GROUP") != null) {
	        String currLayoutGroup = (String) mBundle.get("CURRENT_LAYOUT_GROUP");
	    }
	    if(mBundle.get("CURRENT_LAYOUT_NAME") != null) {
	        String currLayoutName = (String) mBundle.get("CURRENT_LAYOUT_NAME");
	    }
	}


### SET (keyboard layout)
Sets the custom layout in Enterprise Keyboard. While sending the intent to set the keyboard layout, developer must add `CURRENT_LAYOUT_GROUP` and `CURRENT_LAYOUT_NAME` params as extras.

Once keyboard layout is set in Enterprise Keyboard, requested application receives a response intent with `RESULT_CODE` and `RESULT_MESSAGE` extras.

##### Set keyboard layout:
	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_UPDATE");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String layoutGroupName = layoutGroup.getText().toString();
	String layout = layoutName.getText().toString();
	intent.putExtra("CURRENT_LAYOUT_GROUP", layoutGroupName);
	intent.putExtra("CURRENT_LAYOUT_NAME", layout);

	// Intent which will be sent back with status (via explicit broadcast)

	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);
 
##### Receive the result:
	:::java
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");    
		}
	   
	}

-----

### SHOW
Used to display the specified keyboard layout. 

> **NOTE**: If an app contains logic to show the keyboard automatically when an activity comes to the foreground (i.e. the activity has a declared flag of `android:windowSoftInputMode`=`stateVisible` in its `AndroidManifest.xml` file), **that app cannot hide the keyboard using the SHOW API**.


**Parameter values**:

`INFO TO COME FROM ENGINEERING`

<!-- 
##### Show keyboard:
	:::java
			Intent intent = new Intent();
		intent.setAction("com.symbol.ekb.api.ACTION_UPDATE");
			intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
		intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);

	// needToEnable is a Boolean object; it can be true or false:

		intent.putExtra("ENABLE", needToEnable);	

	//  Intent sent back with status (via explicit broadcast)

	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);
	 

##### Receive the result:
	::java
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");    
	}
 -->

-----

### RESET
Resets the Enterprise Keyboard layouts and enables the keyboard if it is disabled. After reset, the fixed-layout Enterprise Keyboard is shown. 

**Parameter values**:

* **TRUE**: Keyboard is reset.
* **FALSE**: Keyboard is not reset.

Requested application receives a response intent with RESULT_CODE and RESULT_MESSAGE.

##### Show keyboard:

	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_DO");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	intent.putExtra("RESET_LAYOUT", needToReset);	// needToReset is a Boolean object so it
							// can be either true or false.

	//Intent sent back with status (via explicit broadcast)
	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);0

##### Receive the result:

	:::java
		@Override
	public void onReceive(Context context, Intent intent) {
	    Toast.makeText(context, "onReceived", Toast.LENGTH_SHORT).show();
	    Bundle mBundle = intent.getExtras();
	    String result = mBundle.getString("RESULT_CODE");
	    String msg = mBundle.getString("RESULT_MESSAGE");    
	}


-----
