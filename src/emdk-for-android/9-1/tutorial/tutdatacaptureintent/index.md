---
title: Data Capture Intents Tutorial
layout: guide.html
product: EMDK For Android
productversion: '9.1'
---

<div class="alert alert-danger alert-dismissible fade in" role="alert"> <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <h4>Regarding EMDK Barcode Scanning APIs</h4> <p><u>Zebra strongly recommends the use of DataWedge for all applications that require barcode scanning</u>. <b>While Zebra will continue to support EMDK Barcode APIs</b>, the efficiency and feature richness of intent-based interfaces make it a simpler alternative to app development using EMDK Barcode APIs.</p> <p> <b>DataWedge facts</b>:
    </p><ul>
        <li><b>DataWedge APIs have the same capabilities currently available in EMDK Barcode APIs.</li>
        <li><b>DataWedge intent-based APIs are easier and faster to implement than EMDK Barcode APIs.</li>
        <li><b>New features are added to DataWedge before being considered for EMDK Barcode APIs.</li>
    </ul>
    <br>
    <a href="/datawedge" class="btn btn-danger">Learn About DataWedge</a>  <p></p> </div>

## Overview
DataWedge on Android has the ability to output captured data via Intents. This article describes how to use the DataWedge Intent output plug-in and the Data Capture API to receive captured data in your native Android application.

Knowledge of Android programming and familiarity with the Android intent mechanism are assumed. Also assumed is some familiarity with DataWedge and that you have read the DataWedge section in the Integrator Guide for your device.

> **Note**: As of EMDK 6.8, DataWedge can no longer be configured for data capture through Profile Manager. Zebra recommends using the [DataWedge APIs](/datawedge/latest/guide/api/) instead. 

## Application Layout
For this tutorial we created an Android application with a blank activity, to which we added the following layout.

    :::xml
    <?xml version="1.0" encoding="utf-8"?>  
    <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"  
        android:layout_width="fill_parent"  
        android:layout_height="fill_parent"  
        android:orientation="vertical" >  
        <LinearLayout  
            android:layout_width="fill_parent"  
            android:layout_height="wrap_content"  
            android:orientation="horizontal" >  
            <ImageView  
                android:id="@+id/logo"  
                style="@style/logo"  
                android:contentDescription="@string/title" />  
            <LinearLayout  
                android:layout_width="fill_parent"  
                android:layout_height="wrap_content"  
                android:orientation="vertical" >  
                <TextView style="@style/title" />  
                <TextView style="@style/copyright" />  
            </LinearLayout>  
        </LinearLayout>  
        <View style="@style/hr" />  
        <TextView style="@style/intro" />  
        <EditText  
            android:id="@+id/editbox"  
            style="@style/editbox"  
            android:inputType="textMultiLine"  
            />  
    </LinearLayout> 

The things to note in the above layout are the ImageView and the EditText widgets.  The ImageView widget will effectively act as a button which can be used to toggle the scanner instead of pressing the trigger button on the device. The EditText widget will be used to display the data that we receive in the intent.
 
## Intent Strings
The intent we will receive from DataWedge will contain a bundle of data which we will be retrieving using the Intent.getStringtExtra() and Intent.getSerializableExtra() methods.  

### Data Items
The following is a list of the data item names that the bundle could contain.

* String SOURCE_TAG = "com.motorolasolutions.emdk.datawedge.source";
* String contains the source of the data i.e. scanner or MSR
* String DATA_STRING_TAG = "com.motorolasolutions.emdk.datawedge.data_string";
    * String contains the output data as a String. In the case of concatenated bar codes, the decode data is concatenated and sent out as a single string. In the case of MSR output, the data from the MSR tracks is concatenated and sent out as a single string.
* String LABEL_TYPE_TAG = "com.motorolasolutions.emdk.datawedge.label_type";
* String contains the label type of the bar code.
* String DECODE_DATA_TAG = "com.motorolasolutions.emdk.datawedge.decode_data";
    * Decode data returned as a list of byte arrays. In most cases there will be one byte array per decode. For bar-code symbologies that support concatenation (i.e. Codabar, Code128, MicroPDF, etc.), the decoded data is stored in multiple byte arrays (one byte array per bar code). Clients can get data in each byte array by passing an index.

### MSR Intent Names
Let's list the MSR intent names (in case we want to use these in the future).
The MSR related data added to the intent's bundle can be retrieved using the Intent.getStringtExtra() and Intent.getSerializableExtra() calls, using the following String tags:

* String MSR_DATA_TAG = "com.motorolasolutions.emdk.datawedge.msr_data";
    * The data from the MSR tracks is concatenated and sent out as a byte array.
* String MSR_TRACK1_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1";
    * MSR track 1 data is returned as a byte array.
* String MSR_TRACK2_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2";
    * MSR track 2 data is returned as a byte array.
* String MSR_TRACK3_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3";
    * MSR track 3 data is returned as a byte array.
* String MSR_TRACK1_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_status";
    * MSR track 1 decode status as an Integer where 0 indicates a successful decode.
* String MSR_TRACK2_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_status";
    * MSR track 2 decode status as an Integer where 0 indicates a successful decode.
* String MSR_TRACK3_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_status";
    * MSR track 3 decode status as an Integer where 0 indicates a successful decode.
* String MSR_TRACK1_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_encrypted";
    * MSR track 1 encrypted data is returned as a byte array.
* String MSR_TRACK2_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_encrypted";
    * MSR track 2 encrypted data is returned as a byte array.
* String MSR_TRACK3_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_encrypted";
    * MSR track 3 encrypted data is returned as a byte array.
* String MSR_TRACK1_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_hashed";
    * MSR track 1 hashed data is returned as a byte array.
* String MSR_TRACK2_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_hashed";
    * MSR track 2 hashed data is returned as a byte array.
* String MSR_TRACK3_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_hashed";
    * MSR track 3 hashed data is returned as a byte array.

### Soft Scan Trigger Intent Names
Here are the API intent names for the soft scan trigger:

* String ACTION_SOFTSCANTRIGGER = "com.motorolasolutions.emdk.datawedge.api.ACTION_SOFTSCANTRIGGER";
    * This is the intent action for the soft scan trigger.
* String EXTRA_PARAM = "com.motorolasolutions.emdk.datawedge.api.EXTRA_PARAMETER";
    * Parameter passed in the intent to specify the action the soft scan trigger should perform.  The following actions are recognized:
* String DWAPI_START_SCANNING = "START_SCANNING";
    * Start scanning.
* String DWAPI_STOP_SCANNING = "STOP_SCANNING";
    * Stop scanning.
* String DWAPI_TOGGLE_SCANNING = "TOGGLE_SCANNING";
    * Toggle scanning.

>In the code that follows we will just be using the SOURCE_TAG, DATA_STRING_TAG and LABEL_TYPE_TAG intent data to display the intent data in the EditText widget.
 
## Handling Intents
Incoming intents can be handled by overriding the onNewIntent method.

    :::java
    @Override  
    public void onNewIntent(Intent i) {  
        handleDecodeData(i);  
    }  

Our *handleDecodeData()* method will responsible for getting the data from the intent, formatting it and adding it to the end of the edit box; something like this:

    :::java
    private void handleDecodeData(Intent i) {  
        // check the intent action is for us  
        if ( i.getAction().contentEquals(com.motorolasolutions.emdk.sample.dwdemosample.RECVR) ) {       
            // define a string that will hold our output  
      
      
            String out = "";  
            // get the source of the data  
            String source = i.getStringExtra(SOURCE_TAG);  
            // save it to use later  
            if (source == null) source = "scanner";  
            // get the data from the intent  
            String data = i.getStringExtra(DATA_STRING_TAG);  
            // let's define a variable for the data length  
            Integer data_len = 0;  
            // and set it to the length of the data  
            if (data != null) data_len = data.length();  
            // check if the data has come from the barcode scanner  
            if (source.equalsIgnoreCase("scanner")) {  
                // check if there is anything in the data  
                if (data != null && data.length() > 0) {  
                  // we have some data, so let's get it's symbology  
                    String sLabelType = i.getStringExtra(LABEL_TYPE_TAG);  
                    // check if the string is empty  
                    if (sLabelType != null && sLabelType.length() > 0) {  
                        // format of the label type string is LABEL-TYPE-SYMBOLOGY  
                        // so let's skip the LABEL-TYPE- portion to get just the symbology  
                        sLabelType = sLabelType.substring(11);  
                    }  
                    else {  
                      // the string was empty so let's set it to "Unknown"  
                        sLabelType = "Unknown";  
                    }  
                  // let's construct the beginning of our output string  
                    out = "Source: Scanner, " + "Symbology: " + sLabelType + ", Length: " + data_len.toString() + ", Data: ...\r\n";  
                }  
            }  
            // check if the data has come from the MSR  
            if (source.equalsIgnoreCase("msr")) {  
                // construct the beginning of our output string  
              out = "Source: MSR, Length: " + data_len.toString() + ", Data: ...\r\n";  
            }  
      
      
            // let's get our edit box view  
            EditText et = (EditText)findViewById(R.id.editbox);  
            // and get it's text into an editable string  
            Editable txt = et.getText();  
            // now because we want format our output  
          // we need to put the edit box text into a spannable string builder  
            SpannableStringBuilder stringbuilder = new SpannableStringBuilder(txt);  
            // add the output string we constructed earlier  
            stringbuilder.append(out);  
            // now let's highlight our output string in bold type  
          stringbuilder.setSpan(new StyleSpan(Typeface.BOLD), txt.length(), stringbuilder.length(), SpannableString.SPAN_EXCLUSIVE_EXCLUSIVE);  
      
      
          // then add the barcode or msr data, plus a new line, and add it to the string builder  
          stringbuilder.append(data + "\r\n");  
          // now let's update the text in the edit box  
          et.setText(stringbuilder);  
            // we want the text cursor to be at the end of the edit box  
            // so let's get the edit box text again  
            txt = et.getText();  
            // and set the cursor position at the end of the text  
            et.setSelection(txt.length());  
            // and we are done!  
      }  
    } 


## Toggling The Scan Trigger
Our activity layout has an ImageView which we will use as a button to toggle the scan trigger.  This is done by using the Data Capture API.  The following code toggles the scan trigger each time the image is tapped.

    :::java
    ImageView img = (ImageView) findViewById(R.id.dwdemo_logo);  
    img.setOnClickListener(new OnClickListener() {  
        @Override  
        public void onClick(View v) {  
            Intent i = new Intent();  
            i.setAction(ACTION_SOFTSCANTRIGGER);  
            i.putExtra(EXTRA_PARAM, DWAPI_TOGGLE_SCANNING);  
            DWDemoActivity.this.sendBroadcast(i);  
            Toast.makeText(v.getContext(), "Soft scan trigger toggled.", Toast.LENGTH_SHORT).show();  
        }  
    }); 


## Putting It All Together
Let's put all that code together so that we can see what our final activity class should look like.

    :::java
    package com.motorolasolutions.emdk.sample.dwdemosample;  
    import android.os.Bundle;  
    import android.app.Activity;  
    import android.content.Intent;  
    import android.graphics.Typeface;  
    import android.view.View;  
    import android.view.View.OnClickListener;  
    import android.widget.EditText;  
    import android.widget.ImageView;  
    import android.widget.Toast;  
    import android.text.Editable;  
    import android.text.SpannableString;  
    import android.text.SpannableStringBuilder;  
    import android.text.style.StyleSpan;  
    public class MainActivity extends Activity {  
        // Tag used for logging errors  
        private static final String TAG = MainActivity.class.getSimpleName();  
        // Let's define some intent strings  
        // This intent string contains the source of the data as a string  
        private static final String SOURCE_TAG = "com.motorolasolutions.emdk.datawedge.source";  
        // This intent string contains the barcode symbology as a string  
        private static final String LABEL_TYPE_TAG = "com.motorolasolutions.emdk.datawedge.label_type";  
        // This intent string contains the barcode data as a byte array list  
        private static final String DECODE_DATA_TAG = "com.motorolasolutions.emdk.datawedge.decode_data";  
        // This intent string contains the captured data as a string  
        // (in the case of MSR this data string contains a concatenation of the track data)  
        private static final String DATA_STRING_TAG = "com.motorolasolutions.emdk.datawedge.data_string";  
        // Let's define the MSR intent strings (in case we want to use these in the future)  
        private static final String MSR_DATA_TAG = "com.motorolasolutions.emdk.datawedge.msr_data";  
        private static final String MSR_TRACK1_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1";  
        private static final String MSR_TRACK2_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2";  
        private static final String MSR_TRACK3_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3";  
        private static final String MSR_TRACK1_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_status";  
        private static final String MSR_TRACK2_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_status";  
        private static final String MSR_TRACK3_STATUS_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_status";  
        private static final String MSR_TRACK1_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_encrypted";  
        private static final String MSR_TRACK2_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_encrypted";  
        private static final String MSR_TRACK3_ENCRYPTED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_encrypted";  
        private static final String MSR_TRACK1_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track1_hashed";  
        private static final String MSR_TRACK2_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track2_hashed";  
        private static final String MSR_TRACK3_HASHED_TAG = "com.motorolasolutions.emdk.datawedge.msr_track3_hashed";  
        // Let's define the API intent strings for the soft scan trigger    private static final String ACTION_SOFTSCANTRIGGER = "com.motorolasolutions.emdk.datawedge.api.ACTION_SOFTSCANTRIGGER";  
        private static final String EXTRA_PARAM = "com.motorolasolutions.emdk.datawedge.api.EXTRA_PARAMETER";  
        private static final String DWAPI_START_SCANNING = "START_SCANNING";  
        private static final String DWAPI_STOP_SCANNING = "STOP_SCANNING";  
        private static final String DWAPI_TOGGLE_SCANNING = "TOGGLE_SCANNING";  
        private static String ourIntentAction = "com.motorolasolutions.emdk.sample.dwdemosample.RECVR";  
      
      
        @Override  
        public void onCreate(Bundle savedInstanceState) {  
            super.onCreate(savedInstanceState);  
            setContentView(R.layout.activity_main);  
            // Let's set the cursor at the end of any text in the editable text field        EditText et = (EditText)findViewById(R.id.editbox);  
            Editable txt = et.getText();  
            et.setSelection(txt.length());  
      
      
            // Since we will be using the image as a soft scan trigger toggle button        // let's handle the image on onClick event  
            ImageView img = (ImageView) findViewById(R.id.logo);  
            img.setOnClickListener(new OnClickListener() {  
                @Override  
                public void onClick(View v) {  
                    // the image has been tapped so shoot off the intent to DataWedge                // to toggle the soft scan trigger  
                    // Create a new intent  
                    Intent i = new Intent();  
                    // set the intent action using soft scan trigger action string declared earlier  
                    i.setAction(ACTION_SOFTSCANTRIGGER);  
                    // add a string parameter to tell DW that we want to toggle the soft scan trigger  
                    i.putExtra(EXTRA_PARAM, DWAPI_TOGGLE_SCANNING);  
                    // now broadcast the intent  
                    MainActivity.this.sendBroadcast(i);  
                    // provide some feedback to the user that we did something                Toast.makeText(v.getContext(), "Soft scan trigger toggled.", Toast.LENGTH_SHORT).show();  
                }  
            });  
      
      
            // in case we have been launched by the DataWedge intent plug-in  
            // using the StartActivity method let's handle the intent  
            Intent i = getIntent();  
            handleDecodeData(i);  
        }  
      
      
        // We need to handle any incoming intents, so let override the onNewIntent method  
        @Override  
        public void onNewIntent(Intent i) {  
            handleDecodeData(i);  
        }  
      
      
        // This method is responsible for getting the data from the intent  
        // formatting it and adding it to the end of the edit box  
        private void handleDecodeData(Intent i) {  
            // check the intent action is for us  
            if ( i.getAction().contentEquals(ourIntentAction) ) {  
                // define a string that will hold our output  
                String out = "";  
                // get the source of the data  
                String source = i.getStringExtra(SOURCE_TAG);  
                // save it to use later  
                if (source == null) source = "scanner";  
                // get the data from the intent  
                String data = i.getStringExtra(DATA_STRING_TAG);  
                // let's define a variable for the data length  
      
      
                Integer data_len = 0;  
                // and set it to the length of the data  
                if (data != null) data_len = data.length();  
                // check if the data has come from the barcode scanner  
                if (source.equalsIgnoreCase("scanner")) {  
                    // check if there is anything in the data  
                    if (data != null && data.length() > 0) {  
                        // we have some data, so let's get it's symbology  
                        String sLabelType = i.getStringExtra(LABEL_TYPE_TAG);  
                        // check if the string is empty  
                        if (sLabelType != null && sLabelType.length() > 0) {                        // format of the label type string is LABEL-TYPE-SYMBOLOGY  
                            // so let's skip the LABEL-TYPE- portion to get just the symbology  
                            sLabelType = sLabelType.substring(11);  
                        }  
                        else {  
                            // the string was empty so let's set it to "Unknown"  
                            sLabelType = "Unknown";  
                        }  
      
      
                        // let's construct the beginning of our output string  
                        out = "Source: Scanner, " + "Symbology: " + sLabelType + ", Length: " + data_len.toString() + ", Data: ...\r\n";  
                    }  
                }  
                // check if the data has come from the MSR  
                if (source.equalsIgnoreCase("msr")) {  
                    // construct the beginning of our output string  
                    out = "Source: MSR, Length: " + data_len.toString() + ", Data: ...\r\n";  
                }  
      
      
                // let's get our edit box view  
                EditText et = (EditText)findViewById(R.id.editbox);  
                // and get it's text into an editable string  
                Editable txt = et.getText();  
                // now because we want format our output  
      
      
                // we need to put the edit box text into a spannable string builder  
                SpannableStringBuilder stringbuilder = new SpannableStringBuilder(txt);  
                // add the output string we constructed earlier  
                stringbuilder.append(out);  
                // now let's highlight our output string in bold type  
                stringbuilder.setSpan(new StyleSpan(Typeface.BOLD), txt.length(), stringbuilder.length(), SpannableString.SPAN_EXCLUSIVE_EXCLUSIVE);  
                // then add the barcode or msr data, plus a new line, and add it to the string builder  
                stringbuilder.append(data + "\r\n");  
                // now let's update the text in the edit box  
                et.setText(stringbuilder);  
                // we want the text cursor to be at the end of the edit box  
                // so let's get the edit box text again  
                txt = et.getText();  
                // and set the cursor position at the end of the text  
                et.setSelection(txt.length());  
                // and we are done!  
            }  
        }  
    }  

## Defining Intent Filters
Having dealt with the coding of our activity, we now need to inform the system which implicit intents our application can handle.  For that we need to define an intent-filter as follows.

    :::xml
    <intent-filter>  
        <action android:name="com.motorolasolutions.emdk.sample.dwdemosample.RECVR"/>  
        <category android:name="android.intent.category.DEFAULT"/>  
    </intent-filter>  


We will be using the com.motorolasolutions.emdk.sample.dwdemosample.RECVR action and the android.intent.category.DEFAULT category we have just defined above later on when we come to configure our DataWedge profile.

In this article DataWedge is configured to use the startActivity() method to send the intent. The startActivity() method causes a new activity to be launched. However since we do not want another instance of our activity launched each time we receive an intent, we need to specify the launch mode of our activity as single task.
android:launchMode="singleTask"

After adding the above, our AndroidManifest.xml should look something like this

    :::xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"  
        package="com.motorolasolutions.emdk.sample.dwdemosample"  
        android:versionCode="1"  
        android:versionName="1.0.0" >  
        <uses-sdk  
            android:minSdkVersion="10"  
            android:targetSdkVersion="10" />  
        <application  
            android:icon="@drawable/ic_launcher"  
            android:label="@string/app_name"  
            android:theme="@style/AppTheme" >  
            <activity  
                android:name=".MainActivity"  
                android:label="@string/app_name"  
                android:launchMode="singleTask" >  
                <intent-filter>  
                    <action android:name="android.intent.action.MAIN" />  
                    <category android:name="android.intent.category.LAUNCHER" />  
                </intent-filter>  
                <intent-filter>  
                    <action android:name="com.motorolasolutions.emdk.sample.dwdemosample.RECVR"/>  
                    <category android:name="android.intent.category.DEFAULT"/>  
                </intent-filter>  
                </activity>  
        </application>  
    </manifest>  

## Configuring DataWedge
Now we need to configure DataWedge to send the desired intent to our application.

The following steps will help you get started

* Launch DataWedge
* Create a new profile and give it a name such as "dwdemosample"
* Edit the profile
* Go into Associated apps, tap the menu button, and add a new app/activity
* For the application select com.motorolasolutions.emdk.sample.dwdemosample
* For the activity select com.motorolasolutions.emdk.sample.dwdemosample.MainActivty
* Go back and disable the keystroke output plug-in
* Enable the intent output plug-in
* For the intent action enter com.motorolasolutions.emdk.sample.dwdemosample.RECVR
* For the intent category enter android.intent.category.DEFAULT
 
## Summary
That's it.  You should now be able to scan a bar-code and see it appear in the sample application.
In this article, we covered:

* DataWedge intent strings
* Handling intents from Data Capture
* Receiving barcode/MSR data
* Sending intents to Data Capture
* Toggling of the soft scan trigger
* Defining intent filters
* Configuring DataWedge to send intents to our application


<!-- 4/24/18- dead link removed. No corresponding folder or sample found. -EC
## Sample Code
Download the source for this project in the [associated sample](/emdk-for-android/9-1/guide/sample/sampledatacaptureintent).

 -->















