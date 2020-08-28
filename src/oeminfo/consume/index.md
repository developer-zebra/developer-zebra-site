---
title: Consuming Data
layout: guide.html
product: OEMinfo
productversion:
menu:
  items:
    - title: About
      url: /oeminfo/about
    - title: Consume Data
      url: /oeminfo/consume
    - title: Provide Data
      url: /oeminfo/publish
    - title: FAQs
      url: /oeminfo/faq
    - icon: fa fa-search
      url: /oeminfo/search
---

## Overview

**Data Consumers are apps seeking to retrieve device information**. Examples of such apps from Zebra include StageNow and OEMconfig device configuration tools, as well as Power Manager and other built-in configuration service provider (CSP) modules that interface directly with Zebra's device-API layer. 

Information for consumption is made available through **Data Provider apps**. Both app types&ndash;Consumers and Providers&ndash;use the [Zebra Data Provider Interfaces (ZDPIs)](../faq/#whatdoeszdpistandfor) included in the [OEMinfo Content Provider Framework](../faq/#oeminfocontentproviderframework). 

-----

## Consuming OEMinfo Data

The process of retrieving data through OEMinfo is the same as that of querying an [Android content provider](https://developer.android.com/guide/topics/providers/content-providers). And like Android, OEMinfo employs content URIs to identify certain data available from a provider. Each content URI includes the authority of the Content Provider represented as a symbolic name along with a path to a table. When calling a client method to access a Content Provider's table, the content URI for the table is passed as an argument.

**However, before an app can retrieve data from OEMinfo, it must first receive permission** to do so. This step must be performed only once for each app, but is required before the app can attempt any OEMinfo read operation. 

#### To acquire read permission: 

**Add the following statement to the app's** `AndroidManifest.xml` file:

        <uses-permission android:name=”com.zebra.provider.READ”>

-----

### Acquire Serial Number 
1. Get the AUTHORITY, PROVIDER and API using the following command:<br>

        String SERIAL_URI** = `content://oem_info/oem.zebra.secure/build_serial`
2. **Get the data** (in this case the device serial number) by parsing the string using Android cursor query methods implemented in the following Java code:<br>

        :::java
        // Prepare the URI
        public void getData() {
            final Uri myUri = Uri.parse(SERIAL_URI);
            new UpdateAsync().execute(myUri.toString());
        }

        // Always query for data in Async task or background thread
        class UpdateAsync extends AsyncTask<String,Void,Cursor> {
            private String myUri;

        @Override
        protected Cursor doInBackground(String... args) {
            myUri = args[0];

            // Query the content provider
            ContentResolver cr = getContentResolver();
            Cursor cursor = cr.query(Uri.parse(myUri),
                                null, null, null, null);

            // Read the cursor
            cursor.moveToFirst();
            String serialNumber = cursor.getString(0);
            Log.i(TAG, "Device Serial Number is : ” + serialNumber);            
            return cursor;
            }
            }

The next two sections apply the above process for getting the device IMEI and OS update info. Skip the the [Callback section](#callbacks) to see sample code for setting an app to be notified of changes to OEMinfo data. This Zebra-recommended practice can be helpful for monitoring non-static URIs.

-----

### Acquire IMEI

4. Get the AUTHORITY, PROVIDER and API using the following command:<br>

        String IMEI_URI = “content://oem_info/wan/imei”
5. **Get the data** (in this case the device IMEI number) by parsing the string using Android cursor query methods implemented in the following Java code:<br>

        :::java
        // Prepare the URI
        public void getData() {
            final Uri myUri = Uri.parse(IMEI_URI);
            new UpdateAsync().execute(myUri.toString());
        }

        // Always query for data in Async task or background thread
        class UpdateAsync extends AsyncTask<String,Void,Cursor> {
            private String myUri;

        @Override
        protected Cursor doInBackground(String... args) {
            myUri = args[0];

        // Query the content provider
        ContentResolver cr = getContentResolver();
        Cursor cursor = cr.query(Uri.parse(myUri),
                            null, null, null, null);

        // Read the cursor
        cursor.moveToFirst();
        String imeiNumber = cursor.getString(0);
        Log.i(TAG, "Device IMEI is : ” + imeiNumber);            
        return cursor;
        }
        }

-----

### Acquire OS update info

6. Get the AUTHORITY, PROVIDER and API using the following Java code:<br>

        :::java
        // OS UPDATE URI
        String OSU_URI = “content://oem_info/oem.zebra.osupdate”;

        // APIs
        String OSU_STATUS = “status”;
        String OSU_DETAIL = “detail”;
        String OSU_TS = “ts”;

7. **Get the data** (in this case the device OS update info) by parsing the string using Android cursor query methods implemented in the following Java code:<br>

            :::java
            // Prepare the URI
            public void getData() {
                final Uri myUri = Uri.parse(OSU_URI);
                new UpdateAsync().execute(myUri.toString());
            }

            // Always query for data in Async task or background thread
            class UpdateAsync extends AsyncTask<String,Void,Cursor> {
                private String myUri;

            @Override
            protected Cursor doInBackground(String... args) {
                myUri = args[0];

                // Query the content provider
                ContentResolver cr = getContentResolver();
                Cursor cursor = cr.query(Uri.parse(myUri),
                                    null, null, null, null);

                // Read the cursor
                While (cursor.moveToNext()) {
                    String status = cursor.getString(
                                    cursor.getColumnIndex(OSU_STATUS));
                 
                    String detail = cursor.getString(
                                    cursor.getColumnIndex(OSU_DETAIL));

                    String time = cursor.getString(
                                    cursor.getColumnIndex(OSU_TS));

                    Log.i(TAG, "STATUS : " + status + “, DETAIL : ” + detail
                               + “, TIME : ” + time);            
                            }
                            return cursor;
                        }
                    }

-----

### Callbacks

**Use the following Java code to register an app to be notified when URI data changes**. Apps also can receive callbacks for changes to the content using the standard Android content observer methods, but **Zebra recommends always registering callbacks for semi-static URI values**.

    // Prepare the URI
    Uri myUri = Uri.Parse(MY_URI_STRING);

    // Register with content observer
    ContentResolver cr = getContentResolver();
    cr.registerContentObserver(myUri, true, 
        new ContentObserver(new Handler(getMainLooper())) {

        @Override
        public void onChange(boolean selfChange, Uri uri) {
            super.onChange(selfChange, uri);

            // Content has changed
            Log.d(TAG, "content has changed, uri = " + uri);
            // Reading the data is like above example
            getData();
        }
    });

-----

### Limitations

**Data acquired through the OEMinfo Content Provider is subject to the rules and limitations listed below**. 

* With the exception of OS Update events, **OEMinfo does NOT support reading of system properties that can change at runtime**.
* **OEMinfo reads system properties only after being signaled by the** `BOOT_COMPLETE` event.
 * After receiving `BOOT_COMPLETE`, OEMinfo queries selected system properties and refreshes the Content Provider. This generally takes a few seconds, but **a delay of about one minute is typical before results of an OS Update are published to the ZDPI**.
 * If an app queries OEMinfo too soon after reboot, **some URIs might return "stale" data**, posing a potential issue for non-static values. 
* **OEMinfo requires extra time populate the Content Provider database** when device data is wiped after an Enterprise Reset, Factory Reset or other erasure event.
  * **Zebra recommends registering apps with a content observer on the URI to receive a callback whenever new data is available** to avoid issues relating to stale or missing data due to re-population delays.
* **OEMinfo is “System UID” and platform-signed**, and is therefore **subject to platform permissions and SELinux restrictions** across Android versions and devices.
 * The same set of **system properties might not be readable on all devices**.
 * System properties might become restricted, removed or added after an OS update.

-----

## Also See

* **[Android content provider docs](https://developer.android.com/guide/topics/providers/content-providers)**
* **[Android cursor docs](https://developer.android.com/reference/android/database/Cursor)**