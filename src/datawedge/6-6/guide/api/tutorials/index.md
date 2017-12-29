---
title: DataWedge Intent Example 1
layout: guide.html
product: DataWedge
productversion: '6.6'
---

## Overview
This tutorial includes a simplified application that shows how to use the DataWedge service on Zebra mobile computing devices to receive scanned barcode data via an intent. 

### Configure DataWedge

**Configure DataWedge to output scans via intent**: 

1. **Launch DataWedge** via Applications --> DataWedge
2. **Select a Profile** (the example uses "Profile0 (default)")
3. **Confirm the following Profile settings**:
  * The Profile is enabled
  * Barcode input is enabled
  * Intent output is enabled
4. Configure the intent output as follows:
  * Intent action: com.dwexample.ACTION (This matches the value defined at https://github.com/darryncampbell/DataWedge-Intent-Example-1/blob/master/app/src/main/res/values/strings.xml)
  * Intent category: leave blank
  * Intent delivery: Broadcast intent
  * The following image shows the Intent output configuration
  
![Datawedge Configuration](https://raw.githubusercontent.com/darryncampbell/DataWedge-Intent-Example-1/master/screenshots/datawedge_settings.png?raw=true)

### Run Application

Launch the application

![Application](https://raw.githubusercontent.com/darryncampbell/DataWedge-Intent-Example-1/master/screenshots/application_before_scan.png?raw=true)

Scan a barcode.  The read barcode should be shown on the UI

![Application](https://raw.githubusercontent.com/darryncampbell/DataWedge-Intent-Example-1/master/screenshots/application_after_scan.png?raw=true)

Here's [the whole project](https://github.com/darryncampbell/DataWedge-Intent-Example-1)

## Source Code
Below is the sourcecode for the sample app described above. For the `build.gradle` and other resources, see the [entire project on github](https://github.com/darryncampbell/DataWedge-Intent-Example-1).


		:::java
		package com.darryncampbell.datawedgeintentexample1;

		import android.content.BroadcastReceiver;
		import android.content.Context;
		import android.content.Intent;
		import android.content.IntentFilter;
		import android.support.v7.app.AppCompatActivity;
		import android.os.Bundle;
		import android.util.Log;
		import android.widget.ArrayAdapter;
		import android.widget.Spinner;
		import android.widget.TextView;
		import android.widget.Toast;

		import java.util.ArrayList;

		public class MainActivity extends AppCompatActivity {

	    @Override
	    protected void onCreate(Bundle savedInstanceState) {
	        super.onCreate(savedInstanceState);
	        setContentView(R.layout.activity_main);

	        IntentFilter filter = new IntentFilter();
	        filter.addCategory(Intent.CATEGORY_DEFAULT);
	        filter.addAction(getResources().getString(R.string.activity_intent_filter_action));
	        registerReceiver(myBroadcastReceiver, filter);
	    }

	    @Override
	    protected void onDestroy()
	    {
	        super.onDestroy();
	        unregisterReceiver(myBroadcastReceiver);
	    }

	    private BroadcastReceiver myBroadcastReceiver = new BroadcastReceiver() {
	        @Override
	        public void onReceive(Context context, Intent intent) {
	            String action = intent.getAction();
	            Bundle b = intent.getExtras();
	            
	            //
	            // The following is useful for debugging to verify
	            // the format of received intents from DataWedge...
	            //
	            // for (String key : b.keySet())
	            // {
	            //   Log.v(LOG_TAG, key);
	            // }
	            //

	            if (action.equals(getResources().getString(R.string.activity_intent_filter_action))) {
	                //
	                //  Received a barcode scan
	                //
	                try {
	                    displayScanResult(intent, "via Broadcast");
	                } catch (Exception e) {
	                    //
	                    // Catch if the UI does not exist when we receive the broadcast... 
	                    // This app is not designed to be used in production
	                    //
	                }
	            }
	        }
	    };

	    private void displayScanResult(Intent initiatingIntent, String howDataReceived)
	    {
	        String decodedSource = initiatingIntent.getStringExtra(getResources().getString(R.string.datawedge_intent_key_source));
	        String decodedData = initiatingIntent.getStringExtra(getResources().getString(R.string.datawedge_intent_key_data));
	        String decodedLabelType = initiatingIntent.getStringExtra(getResources().getString(R.string.datawedge_intent_key_label_type));

	        final TextView lblScanSource = (TextView) findViewById(R.id.lblScanSource);
	        final TextView lblScanData = (TextView) findViewById(R.id.lblScanData);
	        final TextView lblScanLabelType = (TextView) findViewById(R.id.lblScanDecoder);
	        lblScanSource.setText(decodedSource + " " + howDataReceived);
	        lblScanData.setText(decodedData);
	        lblScanLabelType.setText(decodedLabelType);
	    }
	}
