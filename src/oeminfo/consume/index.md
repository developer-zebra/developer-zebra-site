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

Information for consumption is made available through **Data Provider apps**. Both app types&ndash;Consumers and Providers&ndash;use the [Zebra Data Provider Interfaces (ZDPIs)](../faq/whatdoeszdpistandfor) included in the [OEMinfo Content Provider Framework](../faq/oeminfocontentproviderframework). 

-----

### Consuming Data

The process of retrieving data through OEMinfo is the same as that of querying an [Android content provider](https://developer.android.com/guide/topics/providers/content-providers). However, **before any app can retrieve data from an OEMinfo Content Provider, it must first receive permission** to do so. 

#### To acquire read permission for OEMinfo content: 

Add the following statement to the app's `AndroidManifest.xml` file:

        <uses-permission android:name=”com.zebra.provider.READ”>

Like Android, OEMinfo employs content URIs, which identify certain data available from a provider. Each content URI includes the authority of the Content Provider represented as a symbolic name along with a path to a table. When calling a client method to access a Content Provider's table, the content URI for the table is passed as an argument.

#### To Retrieve Data Using OEMinfo
 
1. The following pseudo code shows how to retrieve the device serial number:<br>
  a. <br>
  The consumer application should have details about AUTHORITY, PROVIDER and API of the content provider to be queried.<br>
**String SERIAL_URI** = `content://oem_info/oem.zebra.secure/build_serial`<br>
  b. Get the data:<br> 
  Querying the data from the OEMinfo Content Provider can be done using the standard Android cursor query methods: <br>

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

4.3 Pseudo-code for reading IMEI 
4.3.1 Get the Authority, Provider Name and API
The consumer application should have the details about the content provider which its wants to query. The information is the AUTHORITY, PROVIDER and the API.

    String IMEI_URI = “content://oem_info/wan/imei”

4.3.2 Getting the Data 
Querying the data from the OEM Info Content Provider can be done using the standard android cursor query methods. Sample code below illustrates the methods to query data.

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

4.4 Pseudo-code for reading OS Update
4.4.1 Get the Authority, Provider Name and API
The consumer application should have the details about the content provider which its wants to query. The information is the AUTHORITY, PROVIDER and the API.

    // OS UPDATE URI
    String OSU_URI = “content://oem_info/oem.zebra.osupdate”;
    // APIs
    String OSU_STATUS = “status”;
    String OSU_DETAIL = “detail”;
    String OSU_TS = “ts”;

4.4.2 Getting the Data 
Querying the data from the OEM Info Content Provider can be done using the standard android cursor query methods. Sample code below illustrates the methods to query data.

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
 
4.5 Register for Callback when URI data changes 
Applications can receive callbacks for changes to the content using the standard android content observer methods. We recommend to use register callbacks for semi-static URI values.

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

 
4.6 Limitations
• By design and requirement, OemInfo reads system properties after device reboot (at BOOT_COMPLETE) only.
o Other than OS Update events, OemInfo is not supporting reading system properties which can change at runtime.

• Reading URI data at `BOOT_COMPLETE`.
 o After receiving boot complete event, OemInfo queries selected system properties and refreshes the content provider this will take a few seconds after boot.
 o If your application immediately queries OemInfo URIs at boot complete you may get the stale data,

     This is not an issue for static values like Serial Number or IMEI.

     Other values like OS Update status are dynamic and change when OemInfo receives the OS Update event/intent.

Note: There is a minute delay before publishing OS Update results to ZDPI, this is only at boot-up time. The reason for this is that immediately reading system time at this instant gives Unix epoch time on value tier devices (like Hawkeye N & O).
 o It is recommended to register with a content observer on the URI to receive callback whenever there is new data available.

• Reading URI at Data Wipe
 o After Enterprise Reset / Factory Reset, the OemInfo data is empty and takes more time populate the content provider database.
 o It is recommended to register with a content observer on the URI to receive callback whenever there is new data available.

• Platform / SELinux Restrictions across desserts and devices
 o OemInfo is “System UID” and platform signed. OemInfo is subject to platform permissions and SELinux restrictions across desserts and devices.
 o OemInfo reads a prescribed set of System properties, these system properties available on some devices may not be available on others.
 o Some system properties may become restricted, removed (or added) after OSUpdates.

• If there is a property of interest that is not supported or becomes unavailable, please reach out to ZDS Team.


## Also See

