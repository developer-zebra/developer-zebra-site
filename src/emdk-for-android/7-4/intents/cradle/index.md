---
title: Locking SmartCradle API
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

EMDK for Android 7.4 (and later) contains interfaces for controlling the Locking SmartCradle, which is used for charging and securing Zebra EC30 ultra-compact mobile computing devices. Current interfaces provide programmatic access to the following SmartCradle functions: 

* **Unlock** a device from its charging bay
* **Illuminate a bay LED** to shine solid or to "blink"
* **Set LED color** to red, green or blue
* **Set Timeout** (in sec.) for expiration of an Action

### Requirements

Use of SmartCradle intent APIs requires experience with Java and with Android app development and intent usage. 

**Supported cradle(s)**: 

* EC30 Locking SmartCradle 

-----

## SmartCradle Intent Action

The API currently implements a single intent, `com.symbol.cradle.api.ACTION_DO`. Individual cradle Actions are executed as intent extras. Supported Actions are listed below. 

### Cradle Actions

The `com.symbol.cradle.api.ACTION_DO` intent is capable of performing the following Actions:

#### Unlock cradle bay 
* **Extra**: "UNLOCK"
* **Type**: Bundle
* **Parameters**: LED, Timeout<br>
**LED**: Boolean<br>
	* **True**: Unlock cradle with LED<br>
	* **False**: Unlock cradle without LED (default)<br>
**Timeout**: Integer<br>
	* 5&ndash;20 (seconds)
	* Step value: 1
	* default: 0

#### LED Blink
* **Extra**: "BLINK"
* **Type**: Bundle<br>
* **Parameters**: Color, Solid, Timeout<br>
**Color**: Integer (default = 0)<br>
	* 1- Green
	* 16 - Red
	* 17 - Blue<br>
**Solid**: Boolean<br>
	* **True**: Solid LED<br>
	* **False**: Blink LED (default)<br>
**Timeout**: Integer<br>
 	* 0&ndash;120 (seconds)
 	* Step value: 1
 	* default: 0

### Return Values

#### Callback

* **Extra**: "CALLBACK_RESPONSE"
* **Type**: Pending intent<br>
* **Function**: Indicates "SUCCESS" or FAILURE" of UNBLOCK, BLINK commands 
* **"RESULT_CODES"**: "SUCCESS" or FAILURE" of intent being sent, NOT of the client's ability to execute the command.  
 * **"RESULT_MESSAGE"**: "INVALID_PARAMETERS", "DEVICE_NOT_READY", etc.

-----

## Sample Code
Below is code provided by engineering and modified by Dan Silva 

### Unlock Cradle:

	private void CradleUnlock() {
	        Intent intent = new Intent();
	        intent.setAction("com.symbol.cradle.api.ACTION_DO");
	        Bundle unlockBundle = new Bundle();
	        unlockBundle.putInt("TIMEOUT", 5);
	        unlockBundle.putBoolean("LED", false);
	        intent.putExtra("UNLOCK", unlockBundle);
	        Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);
	        responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
	        responseIntent.putExtra("COMMAND", "CRADLE_UNLOCK");
	        PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
	        intent.putExtra("CALLBACK_RESPONSE", piResponse);
	        sendBroadcast(intent);
	    }

### Unlock Cradle with LED:

    private void CradleUnlockWithLED() {
        Intent intent = new Intent();
        intent.setAction("com.symbol.cradle.api.ACTION_DO");
        Bundle unlockBundle = new Bundle();
        unlockBundle.putInt("TIMEOUT", 5);
        unlockBundle.putBoolean("LED", true);
        intent.putExtra("UNLOCK", unlockBundle);
        Intent responseIntent = new Intent(getApplicationContext(),  MyBroadcastReceiver.class);
        responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
        responseIntent.putExtra("COMMAND", "CRADLE_UNLOCK_WITH_LED");
        PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
        intent.putExtra("CALLBACK_RESPONSE", piResponse);
        sendBroadcast(intent);
    }

### Blink Cradle LED:

    private void CradleLEDBlink() {
        Intent intent = new Intent();
        intent.setAction("com.symbol.cradle.api.ACTION_DO");
        Bundle blinkBundle = new Bundle();
        blinkBundle.putInt("TIMEOUT", 5);
        blinkBundle.putInt("COLOR", color); //1-Green,16-Red,17-Blue
        blinkBundle.putBoolean("SOLID", isSolid); // true OR false
        intent.putExtra("BLINK", blinkBundle);
        Intent responseIntent = new Intent(getApplicationContext(), MyBroadcastReceiver.class);
        responseIntent.addFlags(Intent.FLAG_RECEIVER_FOREGROUND);
        responseIntent.putExtra("COMMAND", "CRADLE_BLINK_LED");
        PendingIntent piResponse = PendingIntent.getBroadcast(getApplicationContext(), REQUEST_CODE, responseIntent, PendingIntent.FLAG_UPDATE_CURRENT);
        intent.putExtra("CALLBACK_RESPONSE", piResponse);
        sendBroadcast(intent);
    }

### Broadcast Receiver:

    /*The broadcast receiver below will receive the responseIntent defined in the above functions once any of the above API calls have been processed register this broadcast receiver by putting the below in the <application> section of the manifest.

            <receiver
            android:name=".MainActivity$MyBroadcastReceiver">
    		</receiver>
    */
    
    public static class MyBroadcastReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            String status = "";
            String command = intent.getStringExtra("COMMAND");
            String resultCode = intent.getStringExtra("RESULT_CODE");
            String resultMessage = intent.getStringExtra("RESULT_MESSAGE");
            if (command != null) {
                status += "\n* " + command;
            }
            if (resultCode != null) {
                status += "\n* ResultCode= " + resultCode;
            }
            if (resultMessage != null) {
                status += "\n* Message= " + resultMessage + " \n";
            }
            Log.d(MyBroadcastReceiver.class.getSimpleName(), status);
        }
    }

-----

## Also See

* [Data capture intent APIs](../datacapture)
* [Battery intent APIs](../battery)
* [Native APIs](../../api)
