---
title: Enterprise Keyboard APIs
layout: guide.html
product: Enterprise Keyboard
productversion: '3.9'
---

## Overview

Zebra Enterprise Keyboard APIs operate primarily through Android intents&ndash;specific commands that can be used by Android applications to control EKB and layouts made with the [Enterprise Keyboard Designer](/ekd) (EKB Designer, or EKD), Zebra's Windows-based custom keyboard creator tool. This guide describes the functionality of the intents supported by EKB and their effects on EKD layouts.

### Requirements
Using EKB APIs requires experience with Java programming, familiarity with Android intents and at least one custom layout file (i.e. `myLayout.encrypted`). It also requires knowledge of EKB usage, features and terminology. Learn more [about Enterprise Keyboard](http://techdocs.zebra.com/enterprise-keyboard).

### About the APIs
Enterprise Keyboard APIs allow the following functions: 

* **ENABLE** (true/false) enables or disables the Enterprise Keyboard 
* **GET** can return lists of: 
 * Available key layouts made with EKD
 * Current key layout group (file name) and the name of the current key layout
* **SET** switches to the specified keyboard or key layout
* **SHOW** displays the specified layout on the device
* **RESET** behavior varies based on current key layout selection: 
 * **If a custom layout is selected as the default**, the custom layout is reset and displayed when an input field gains focus.
 * **If a custom key layout is NOT selected as the default**, the Enterprise Keyboard fixed layout is reset and enabled (if previously disabled). EKB is displayed when an input field gains focus.  

<!-- 
When default custom layout is not set. Reset intent, resets to Enterprise keyboard layout and enables the Enterprise Keyboard [if disabled]. After reset, the fixed-layout Enterprise Keyboard is shown when an input field gets focus.

When default custom layout is set. Reset intent, resets to Default custom layout. After reset, the default custom layout is shown when an input field gets focus.

Resets all key layouts and enables Enterprise Keyboard (if disabled)
-->

> * **Zebra recommends resetting to the default input device whenever quitting an app that uses EKB**. 

### Also See

* [Dynamically Switching Keyboards](https://developer.zebra.com/blog/dynamically-switching-keyboards-zebra-android-devices) | Implementation details and sample code by Zebra engineering
* [Exploring the Enterprise Keyboard API](https://developer.zebra.com/blog/exploring-enterprise-keyboard-api) | Working with EKD-made Custom Layouts by Zebra engineering

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
* Apps running in full screen mode display custom key layouts with an extra margin from the bottom of the device screen.
* **When using DataWedge to switch layouts**, the EKB fixed layout is sometimes shown briefly or until the focus changes again. 
* **When custom layouts are displayed, <u>all EKB settings, preferences and functions are suspended</u>**.

-----

## App Window Resizing 

Android apps generally adjust window size when a general-purpose keyboard is displayed. Window resizing for EKD custom key layouts are subject to the rules below.   

#### EKD Window Resizing Behavior

* **An application activity's main window is resized only if the**:
 * **Width of the custom key layout is <u>greater than or equal to 50 percent</u> of device's <u>screen width</u>**
 <br> ***AND*** 
 * **Layout <u>transparency</u> value is <u>less than 30</u>**. 
* An activity's main **window will NOT be resized if a custom key layout is positioned on top of the app's title bar or toolbar** (sometimes known as the "Action" bar). 
* In some cases, window resizing results in a blank portion of the screen. 
* **To disable windows resizing of an activity’s main window**, set the following attribute in the app's activity manifest file: 
 * `android:windowSoftInputMode=”adjustNothing”`

-----

## Intents

App developers and administrators can use Android intents to determine programmatically which layouts are available in a device and to select and switch between layouts according to the input requirements of an application.

### Sending Intents
The syntax defined in Enterprise Keyboard 2.0 (and higher) permits multiple Enterprise Keyboard API calls as extras on a single intent action. The syntax is as follows:

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

## Layout Switching

This section explains the program logic involved with switching layouts with Android intents when focus of an input field changes. 

> **Note**: Layouts also can be controlled through DataWedge. [Find out how](http://techdocs.zebra.com/datawedge/latest/guide/utilities/ekb/). 

### Requirements

* **EKB v3.2 installed and activated on the target device(s)** and set as the default input source
* **A *<u>single</u>* EKD layout file** (i.e. `myProject.encrypted`) in the following device folder: <br>
 `/enterprise/device/settings/ekb/config/`
* **Layout file must contain ALL layouts** being used by apps on the device

> See the [Enterprise Keyboard Designer Guide](/ekd) for help creating a layout file. 

-----

### Use Case 1

This case describes an Android app with two text input fields. Substitute sample names shown below with those in the deployed [layout definition file](../deploy). 

* `editText1` input field uses the standard Enterprise Keyboard fixed layout, which includes numeric, alpha-numeric, scan and symbol keyboards manually switchable by the user as needed.  
* `editText2` input field uses a custom layout made with EKD that contains keys specifically designed for a particular type of input. 

**Program logic for switching between standard and custom layouts** according to changes from `onFocus` listener: 

#### When the `editText1` field gets focus, send the following intents to display the EKB fixed layout:

1. Send `ENABLE` intent to Enterprise Keyboard fixed layout.
2. Send `RESET` to the custom EKB layout.
3. When the `onReceive()` method receives a result type value of `DEFAULT_LAYOUT`, **send a** `SHOW` **intent to the EKB fixed layout** to display it. 

#### When the focus changes to `edittext2`, send the following intents to show the custom layout:

1. Send a `SET` intent to set the custom layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 
2. On `focusOut` of `editText1`, send `ENABLE` "false" intent the EKB fixed layout to disable it.

> **`IMPORTANT:` Enterprise Keyboard must be enabled if the application goes to the background** to avoid a device user resetting the layout from outside the app.

-----

### Use Case 2

This case describes an Android app with two text input fields, both requiring custom layouts alternated within a specific time interval: 

* `editText1` input field uses a custom layout called `numericLayout.encrypted`  
* `editText2` input field uses a custom layout called `functionLayout.encrypted`

**Program logic for switching between two custom layouts** according to changes from `onFocus` listener: 

#### When the `editText1` field gets focus, send the following intents to display `numericLayout`:

1. Send a `SET` intent for `numericLayout.encrypted` to set the custom numeric layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 

#### When the focus changes to `edittext2`, send the following intents to show the custom layout:

1. Send a `SET` intent for `functionLayout.encrypted` to set the custom function-key layout.<br>
**Note**: If the custom layout name is not known, send a `GET` intent <u>**_before_** the calling the onFocus change listener</u> to receive a list of all available layout names in the layout file. Then send the `SET` intent with the name of the desired layout. 

> **`IMPORTANT:` Enterprise Keyboard must be enabled if the application goes to the background** to avoid a device user resetting the layout from outside the app.

-----

## API Parameters, Samples

### ENABLE
**Used to enable or disable the Enterprise Keyboard**. 

**Parameter values**:
* **TRUE**: Enterprise Keyboard enabled and shown whenever device user taps on an input field.
* **FALSE**: Enterprise Keyboard is disabled and does not show even after using SHOW API or tapping on an input area.

Once Enterprise Keyboard is enabled/disabled, the requested application receives a response intent containing a `RESULT_CODE` and `RESULT_MESSAGE` extras.

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
**Returns a list of custom key layouts** currently available in the device.

##### Get available key layouts:

	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[] propertiesToRetrieve = {"AVAILABLE_LAYOUTS"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);

	// Intent is sent back with status (via explicit broadcast)
	
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

**Returns the current key layout group and the current key layout name**. If Enterprise Keyboard is the current keyboard, returns the currently selected EKB layout.

##### Get current key layout group and layout name:
	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_GET");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String[] propertiesToRetrieve = {"CURRENT_LAYOUT_GROUP”,"CURRENT_LAYOUT_NAME"};
	intent.putExtra("PROPERTIES_TO_GET", propertiesToRetrieve);

	//  Intent is sent back with status (via explicit broadcast)
	
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

_____

### SET (key layout)
**Sets the custom layout in Enterprise Keyboard**. While sending the intent to set the key layout, developer must add `CURRENT_LAYOUT_GROUP` and `CURRENT_LAYOUT_NAME` parameters as extras.

Once key layout is set in Enterprise Keyboard, requested application receives a response intent containing  `RESULT_CODE` and `RESULT_MESSAGE` extras.

##### Set key layout:
	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_UPDATE");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	String layoutGroupName = layoutGroup.getText().toString();
	String layout = layoutName.getText().toString();
	intent.putExtra("CURRENT_LAYOUT_GROUP", layoutGroupName);
	intent.putExtra("CURRENT_LAYOUT_NAME", layout);

	// Intent is sent back with status (via explicit broadcast)

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
**Used to show or hide the specified key layout**. 

**`IMPORTANT:` An app CANNOT hide the keyboard using the SHOW API if the app contains logic to show the keyboard automatically when an activity comes to the foreground** (i.e. the activity has a declared flag of `android:windowSoftInputMode`=`stateVisible` in its `AndroidManifest.xml` file).

**Parameter values**:

* **TRUE**: Keyboard is shown when activity is launched, even if the activity does not require input.

* **FALSE**: Keyboard is not shown when activity is launched; shown only when the device user taps on an input field.

Once key layout is shown/hidden, requested application receives a response intent with RESULT_CODE and RESULT_MESSAGE.

##### Sample code to show key layout:

	:::java
	Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_UPDATE");
	intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);

	// needToShow is a Boolean object; it can be true or false:

	intent.putExtra("SHOW", needToShow); 

	//  Intent is sent back with status (via explicit broadcast)

	Intent responseIntent = new Intent(this, MyBroadcastReceiver.class);
	PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), requestCode, responseIntent, flags);
	intent.putExtra("CALLBACK_RESPONSE", piResponse);
	sendBroadcast(intent);

##### Receive the result:

	:::java
	@Override
	public void onReceive(Context context, Intent intent) {     Toast._makeText_(context, *"onReceived"*, Toast.*_LENGTH_SHORT_*).show();     Bundle mBundle = intent.getExtras();     String result = mBundle.getString(*"RESULT_CODE"*);     String msg = mBundle.getString(*"RESULT_MESSAGE"*);

	}
 
-----

### RESET
**Resets and enables the specified Enterprise Keyboard fixed or custom layout** based on current key layout selection: 
* **If a custom layout is selected as the default**, the custom layout is reset and displayed when an input field gains focus.
* **If a custom key layout is NOT selected as the default**, the Enterprise Keyboard fixed layout is reset and enabled (if previously disabled). EKB is displayed when an input field gains focus.  

**Parameter values**:

* **TRUE**: Keyboard is reset
* **FALSE**: Keyboard is not reset

The requested application receives a response intent containing RESULT_CODE and RESULT_MESSAGE extras.

##### Show keyboard:

	:::java
		Intent intent = new Intent();
	intent.setAction("com.symbol.ekb.api.ACTION_DO");
		intent.setPackage("com.symbol.mxmf.csp.enterprisekeyboard");
	intent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	intent.putExtra("RESET_LAYOUT", needToReset);

							// needToReset is a Boolean object; can be either true or false:

	//Intent sent back with status (via explicit broadcast)
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


-----
