---
title: Locking SmartCradle APIs
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

EMDK for Android 7.4 (and later) contains interfaces for controlling the EC30 Locking SmartCradle (model CRD-EC30-10SLC1-01), a 10-slot cradle used for securing, charging and dispensing Zebra EC30 ultra-compact enterprise companion devices. Interfaces provide programmatic access to the SmartCradle functions listed below. 

#### Supported Actions
* **Unlock** a device from its charging slot
* **Illuminate a slot LED** to shine solid or to "blink"
* **Set LED color** to red, green or blue
* **Set Timeout** (in sec.) for expiration of an Action

#### Notes
* Device slots lock automatically when a device is inserted   
* The SmartCradle operates with or without a user kiosk
* **API NOT supported on ShareCradles** (see below)

### Requirements

Use of SmartCradle intent APIs requires experience with Java and with Android app development and usage of Android intents. 

**Cradle(s) Supported**: 
* EC30 10-slot Locking SmartCradle (model CRD-EC30-10SLC1-01)

**Cradle(s) <u>NOT</u> Supported**: 
* EC30 2-slot Charge ShareCradle (model CRD-EC30-2SCHG1-01)
* EC30 10-slot Charge ShareCradle (model CRD-EC30-10SC1-01)

-----

## SmartCradle Intent Action

The API currently implements a single intent with individual cradle Actions executed as intent extras. Supported Actions are listed below. 

### Cradle Intent

`com.symbol.cradle.api.ACTION_DO`

### Cradle Actions

#### Unlock Cradle Slot 
**Extra**: "UNLOCK"<br>
**Type**: Bundle<br>
**Parameters**: LED, Timeout<br>
* **LED**: Boolean<br>
 * **True**: Unlock cradle slot and flash its LED<br>
 * **False: Unlock cradle without flashing LED (default)**<br>
* **Timeout**: Integer<br>
 * **Range**: 5&ndash;20 (seconds)<br>
 * **Step value**: 1<br>
 * **Default: 0**<br>

#### Blink (flash) LED
**Extra**: "BLINK"<br>
**Type**: Bundle<br>
**Parameters**: Color, Solid, Timeout<br>
* **Color**: Integer<br>
 * **0 -Off (default)**<br> 
 * **1 -** Green<br>
 * **16 -** Red<br>
 * **17 -** Blue<br>
* **Solid**: Boolean<br>
 * **True**: Solid LED<br>
 * **False: Blink LED (default)**<br>
* **Timeout**: Integer<br>
 * **Range**: 0&ndash;120 (seconds)<br>
 * **Step value**: 1<br>
 * **Default: 0**<br>

**Note: The cradle LED blink rate is NOT programmable**.

### Return Values

#### Callback

**Extra**: "CALLBACK_RESPONSE"<br>
**Type**: Pending intent<br>
**Function**: Indicates status of UNLOCK, BLINK intent command being sent (NOT of the client ability to execute)<br>
**"RESULT_CODE"**: "SUCCESS" or FAILURE"<br>
**"RESULT_MESSAGE"**: "INVALID_PARAMETERS", "DEVICE_NOT_READY", etc.<br>

-----

## Sample Code

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

    /*The broadcast receiver below receives the responseIntent defined in the above functions. Once any of the above API calls have been processed, register this broadcast receiver by adding the code below in the <application> section of the manifest:

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
