---
title: Locking SmartCradle APIs
layout: guide.html
product: EMDK For Android
productversion: '7.6'
---

## Overview

EMDK for Android 7.4 (and later) contains interfaces for controlling the EC30 Locking SmartCradle (model CRD-EC30-10SLC1-01), a 10-slot cradle used for securing, charging and individually dispensing Zebra EC30 ultra-compact enterprise companion devices. Interfaces provide programmatic, one-way communication from apps on EC30 devices to the SmartCradle for activating the cradle functions listed below. 

#### Supported Cradle Functions
* **Unlock** a device from its individual charging slot
* **Illuminate a slot's LED** to shine solid or to "blink"
* **Set LED color** to red, green or blue
* **Set a Timeout** (in sec.) for expiration of an Action (i.e. Unlock)

#### Notes
* **Device slots lock automatically** when a device is inserted
* **Communications are one-way**; from device to cradle only
* **Apps operate with or without a user kiosk**
* **APIs NOT supported on ShareCradles** (see below)

### Requirements

Use of SmartCradle intent APIs requires experience with Java, with Android app development and with usage of Android intents. A supported cradle also is required. 

**Supported Cradle(s)**: 
* EC30 10-slot Locking SmartCradle (model CRD-EC30-10SLC1-01)

**Cradles <u>NOT</u> Supported**: 
* EC30 2-slot Charge ShareCradle (model CRD-EC30-2SCHG1-01)
* EC30 10-slot Charge ShareCradle (model CRD-EC30-10SC1-01)

-----

### Also See

* [EC30 Programmer's Guide](../../guide/ec30_programming)
* [PS20 Product Page on Zebra.com](https://www.zebra.com/us/en/products/mobile-computers/handheld/ps20.html)
* [Detecting PS20 Device State (docked/undocked)](https://www.zebra.com/us/en/support-downloads/knowledge-articles/evm/PS20-intents-to-detect-the-state-of-the-device.html)
* [Data capture intent APIs](../datacapture)
* [Battery intent APIs](../battery)
* [Native APIs](../../api)

-----

## SmartCradle Intent Action

The API currently implements a single intent with individual cradle Actions executed as intent extras. Supported Actions are listed below. 

### Cradle Intent

`com.symbol.cradle.api.ACTION_DO`

### Cradle Actions
Actions are implemented as intent extras. See [sample code](#samplecode) for syntax. 

#### Unlock Cradle Slot 
**Extra**: "UNLOCK"<br>
**Type**: Bundle<br>
**Parameters**: LED, Timeout<br>
* **"LED"**: Boolean<br>
 * **"true"**: Unlock cradle slot and light its LED solid green<br>
 * **"false": Unlock cradle lighting LED (default)**<br>
* **"TIMEOUT"**: Integer<br>
 * **Range**: 5&ndash;20 (seconds)<br>
 * **Step value**: 1<br>
 * **Default: 0**<br>

#### Blink (flash) LED
**Extra**: "BLINK"<br>
**Type**: Bundle<br>
**Parameters**: Color, Solid, Timeout<br>
* **"COLOR"**: Integer<br>
 * **0 -Off (default)**<br> 
 * **1 -** Green<br>
 * **16 -** Red<br>
 * **17 -** Blue<br>
* **"SOLID"**: Boolean<br>
 * **"true"**: Solid LED<br>
 * **"false": Blink LED (default)**<br>
* **"TIMEOUT"**: Integer<br>
 * **Range**: 0&ndash;120 (seconds)<br>
 * **Step value**: 1<br>
 * **Default: 0**<br>

**Note: The cradle LED blink rate is NOT programmable**.

### Return Values

#### Callback

**Extra**: "CALLBACK_RESPONSE"<br>
**Type**: Pending intent<br>
**Function**: Indicates status of "UNLOCK" and "BLINK" intents (NOT of the client ability to execute)<br>
**Result codes and messages**:<br>
* **"RESULT_CODE"** <br>
 * "SUCCESS"<br>
 * "FAILURE"<br>
* **"RESULT_MESSAGE"**<br>
 * "INVALID_PARAMETERS"<br>
 * "DEVICE_NOT_READY"<br>
 * "GENERAL_FAILURE"<br>
 * "SENDING_COMMAND_FAILED"<br>
 * "DEVICE_BUSY"<br>

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

* [EC30 Programmer's Guide](../../guide/ec30_programming)
* [PS20 Product Page on Zebra.com](https://www.zebra.com/us/en/products/mobile-computers/handheld/ps20.html)
* [Detecting PS20 Device State (docked/undocked)](https://www.zebra.com/us/en/support-downloads/knowledge-articles/evm/PS20-intents-to-detect-the-state-of-the-device.html)
* [Data capture intent APIs](../datacapture)
* [Battery intent APIs](../battery)
* [Native APIs](../../api)
