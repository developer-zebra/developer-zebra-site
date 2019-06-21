---
title: Locking SmartCradle API
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

EMDK for Android 7.4 (and later) contains interfaces for controlling the Locking SmartCradle, which is used for charging and securing Zebra EC30 ultra-compact mobile computing devices. Current interfaces provide programmatic access to the following SmartCradle functions: 

* Lock and unlock a device from its charging bay
* Illuminate a bay's LED to shine solid or to "blink"
* Set a bay's LED color to red, green or blue
* Set a Timeout (in sec.) for expiration of an Action



Following design and implementation is an Intent based Cradle API is exposed to Zebra customers and application developers for them to program the applications to communicate with Zebra smart cradle.  
Applications are expected to create and pass the required data structures to the Intent interface.
Client application is not responsible for enabling / disabling the smart cradle – this is handled automatically by the underlying framework when the application tries to send a message.  E.g. the framework could call cradleEnable() when it is told to do action on cradle then call cradleDisable() after action is done.


### Requirements

Use of SmartCradle intent APIs requires experience with Java and with Android app development and intent usage. 

**Supported cradle(s)**: 

* EC30 Locking Cradle 

-----

## SmartCradle Intent Action

The API currently implements a single intent, `com.symbol.cradle.api.ACTION_DO`. Individual cradle Actions are executed as specified in an intent extra. Supported Actions are listed below. 

### Cradle Actions

The `com.symbol.cradle.api.ACTION_DO` intent is capable of performing the following Actions:

#### Unlock cradle bay 
* **Type**: Bundle
* **Extra**: "UNLOCK"<br>
**Parameters**: LED, Timeout
* **LED**: Boolean
 * **True**: Unlock cradle with LED
 * **False**: Unlock cradle without LED (default)<br>
* **Timeout**: Integer
 * **Possible values**:
 	* 5&ndash;20 (seconds)
 	* Step value: 1
 	* default: 0

#### LED Blink
* **Type**: Bundle
* **Extra**: "BLINK" <br>
**Parameters**: Color, Solid, Timeout
* **Color**: Integer (default = 0)
 * 1- Green
 * 16 - Red
 * 17 - Blue
* **Solid**: Boolean
 * **True**: Solid LED
 * **False**: Blink LED (default)
* **Timeout**: Integer
 * **Possible values**:
 	* 0&ndash;120 (seconds)
 	* Step value: 1
 	* default: 0

### Return Values

#### Callback

* **Type**: Pending intent
* **Extra**: "CALLBACK_RESPONSE"<br>
* **Function**: Indicates "SUCCESS" or FAILURE" of UNBLOCK, BLINK commands 
* **"RESULT_CODES"**: "SUCCESS" or FAILURE" of intent being sent, NOT of the client's ability to execute the command.  
 * **"RESULT_MESSAGE"**: e.g. ‘INVALID_PARAMETERS', ‘DEVICE_NOT_READY’, etc.

-----

### Sample Code

#### Unlock Cradle:

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

#### Unlock Cradle with LED:

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

#### Blink Cradle LED:

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

#### Broadcast Receiver:

    /*The broadcast receiver below will receive the responseIntent defined in the above functions once any of the above API calls have been processed
    register this broadcast receiver by putting the below in the <application> section of the manifest.
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
