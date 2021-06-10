---
title: APIs
layout: guide.html
product: Secure Storage Manager
productversion: '1.0'
---

## Overview

This section provides the Content Provider Interface APIs for Secure Storage Manager (SSM):

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Action</th>
    <th>Method</th>
  </tr>

  <tr>
   	<td>Add new data</td>
	<td>Uri <b>insert</b> (Uri uri, ContentValues values)</td>
  </tr>

  <tr>
   	<td>Modify/Update existing data</td>
	<td>int <b>update</b> (Uri uri, ContentValues values, String selection, String[] selectionArgs)</td>
  </tr>

  <tr>
   	<td>Return data based on selection criteria</td>
	<td>Cursor <b>query</b> (Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder)</td>
  </tr>

  <tr>
   	<td>Delete data</td>
	<td>int <b>delete</b> (Uri uri, String selection, String[] selectionArgs)</td>
  </tr>

</table>
<br>
Content Provider parameters:

<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>Key</th>
    <th>Value</th>
    <th>Mandatory/Optional</th>
  </tr>

  <tr>
   	<td>target_app_package</td>
	<td>Package name and the signature of the target application in json array. Also accepts multiple target apps and signatures in json array. Signature must be given in Base64 format. To generate the signature of any APK, see section <a href="#gettheandroidapksignature">Get the Android APK signature</a> below.</td>
    <td>Mandatory</td>
  </tr>

  <tr>
   	<td>data_name</td>
	<td>Unique name to identify data.</td>
    <td>Mandatory</td>
  </tr>

  <tr>
   	<td>data_value</td>
	<td>Any data (string or json).</td>
    <td>Mandatory</td>
  </tr>

  <tr>
   	<td>data_persist_required</td>
	<td>Specify whether persistence is required from an Enterprise reset:<br> true/false</td>
    <td>Mandatory</td>
  </tr>

  <tr>
   	<td>multi_instance_required</td>
	<td>Specify Whether multi instance (multi-user or multi profile) support is required:<br>true/false</td>
    <td>Optional (not yet supported in current SSM v1.0)</td>
  </tr>

  <tr>
   	<td>data_input_form</td>
	<td>plaintext =1, encrypted=2</td>
    <td>Optional</td>
  </tr>

  <tr>
   	<td>data_output_form</td>
	<td>plaintext=1, encrypted=2, keystrokes=3</td>
    <td>Optional</td>
  </tr>

</table>

<br>
Note: When `data_persist_required = 1`, there is a delay in query data returned the first time rebooting after an Enterprise Reset due to initialization.


-----

## Get the Android APK Signature

To get the signature (signing certificate) of an Android APK for parameter `target_app_package`:
1. Go to the Zebra App Signature tool page. 
2. Follow instruction to download and use the tool.
3. Use the following command (modify as needed):

        Java -jar SigTools.jar GetCert -INFORM APK -OUTFORM BASE64 -IN Client.apk -OUTFILE Client.txt

Notes:
* “Client.apk” represents the app for which a signature is being obtained.
* The signature (as a Base64 format string) is saved as “Client.txt” based on the example. 
* Contents of “Client.txt” can be copied as the target-package app signature.
* If the signature must be read from a file, rename "Client.txt" to "packageName.txt" (substitute "packageName" with that of the target app) and place the file in the `/assets` directory.

-----

## Query Data Limitation 

When querying persistent data, the result is provided by proxy and transferred to SSM using the [Android binder](https://developer.android.com/reference/android/os/Binder) implementation. The Android binder transaction has a parcel size limitation that is also enforced with queries. Large data sets (i.e. 1000 records or more) are not supported due to this parcel size limitation. Approximately 125 data records were queried successfully in this case.

### Duplicate Data Names

Data names can be duplicated based on whether the data itself is intended to be persistent and permanent. If data is not to be persistent, a duplicate data name can be created as persistent and new values can be updated as needed. Other fields should be changed accordingly. 

### Data Size Limitation

For Zebra apps listed below, the data size limitation on individual records is enforced (added in Config.xml based on package name).


<table class="facelift" style="width:100%" border="1" padding="5px">
  <tr bgcolor="#dce8ef">
    <th>App</th>
    <th>Package Name</th>
    <th>Data Size Limitation (KB)</th>
  </tr>

  <tr>
   	<td>DataWedge</td>
	<td>com.symbol.datawedge</td>
    <td>100</td>
  </tr>

  <tr>
   	<td>Enterprise Keyboard</td>
	<td>com.symbol.mxmf.csp.enterprisekeyboard</td>
    <td>100</td>
  </tr>

  <tr>
   	<td>License Manager</td>
	<td>com.zebra.licensemgrservice</td>
    <td>100</td>
  </tr>

  <tr>
   	<td>Enterprise Browser</td>
	<td>com.symbol.enterprisebrowser</td>
    <td>100</td>
  </tr>
  
  <tr>
   	<td>Default</td>
	<td>-</td>
    <td>10</td>
  </tr>

</table>

-----

## Encrypted Data From Client Apps

SSM can receive encrypted data from client apps and save it in SSM encrypted format within the SSM database.

To send encrypted data to SSM: 
1. Create an “AES” secret key: 

        private SecretKey getRandomKey(String algorithmType) {

                    SecureRandom rand = new SecureRandom();
                    KeyGenerator generator;
                    try {
                        generator = KeyGenerator.getInstance(algorithmType);
                        generator.init(128, rand);
                        mSecretKey = generator.generateKey();
                        Log.d(TAG, "mSecretKey = "+ mSecretKey);
                        return mSecretKey;
                    } catch (NoSuchAlgorithmException e) {
                        e.printStackTrace();
                    }
                    return null;
        }
2. Encrypt data using the secret key created in Step 1.
3. Encrypt the secret key using SSM public key.
4. Insert encrypted secret key and data in SSM database. Reference data input and output form to detect the encrypted data:

        values.put("data_input_form”, "2"); // plaintext =1, encrypted= 2 
        values.put("data_output_form", "1"); // plaintext =1, encrypted= 2
        values.put(“data_input_encrypted_key”,”Encrypted Secret Key”);
        values.put("data_value", inputData);


#### SSM Public Key

SSM public key shared in Base64 string format as below:

        MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwE1qxpfNZVGq3wfPp3AqSeSpCPi3NUC1
        cCBuh5nkPvC3TfYHiozsy3gBYyUoYWIoAYlgypehqLIQfdHTrLpsVbS1BW6mnv76WvYwmaGrGfHz
        i50ETA8bFDwkrboG3jcHnvDJPH904BdU5eMrsq1o+BDmTmF/OAm1rJPohb8mukWhjZ+o6OW6iNhO
        28IDRb26pKuTu6sckHn8I1I51bl44qaxq55A4wVR4mHEZL0EK/q2hY0Iqcak2dA8w8N0nJrWzbIb
        p5FeT/WyGO2pure7UxKEZfE5pkewPfcHSGpR+0sbdCMaw6KrDpC5jusry4PjFw92sS/Huywv6/pv
        7WVPmwIDAQAB


-----

## Sample Code

### Insert / Update Data in a Single App

Sample code to securely insert data in plain text:

        private String TARGET_APP_PACKAGE = "target_app_package";
        private String DATA_NAME = "data_name";
        private String DATA_VALUE = "data_value";
        private String DATA_INPUT_FORM = "data_input_form";
        private String DATA_OUTPUT_FORM = "data_output_form";
        private String DATA_PERSIST_REQUIRED = "data_persist_required";
        private String MULTI_INSTANCE_REQUIRED = "multi_instance_required";

        AUTHORITY = "content://com.zebra.securestoragemanager.securecontentprovider/data";
        Uri cpUri = Uri.parse(AUTHORITY);
        ContentValues values = new ContentValues();
        
        // TARGET_APP_PACKAGE gives both package name info and signature info in single entry. This can be either single target app or even multiple target apps.

        values.put(TARGET_APP_PACKAGE,
                "{\"pkgs_sigs\": [{\"pkg\":\"com.ztestapp.clientapplication\",\"sig\":\"ABSFFSDF… WREWED\"}]}");

        // Dummy sig is placed here. use SigTool to get this base64 String.

        values.put(DATA_NAME, “unique name to identify data in UTF-8 encoded format"); 
        values.put(DATA_VALUE, “any string data/json data"); 
        values.put(DATA_INPUT_FORM, "1"); //plaintext =1, encrypted=2
        values.put(DATA_OUTPUT_FORM, "1"); //plaintext=1, encrypted=2, keystrokes=3
        values.put(DATA_PERSIST_REQUIRED, "false");
        values.put(MULTI_INSTANCE_REQUIRED, "false");	    
        values.put(AUTO_DELETE_REQUIRED, "false");

        Uri createdRow = getContentResolver().insert(cpUri, values);
            
        Log.d(TAG, "Created row: " + createdRow.toString());

The return URI provides the URI of the newly inserted row.

### Insert / Update Data in Multiple Apps

Sample code to insert the package name and signature of all target apps as a json array in the content values object, which must then be passed to the Insert/Update method: 

        //Code snippet - single app support:
        
        values.put(COLUMN_TARGET_APP_PACKAGE, 
        "{\"pkgs_sigs\":[{\"pkg\":\"com.ztestapp.clientapplication\",\"sig\":\"24727AB4E6C4A…ACE1FE342F0D6872B27B3C\"}
        ]}");

        //Code snippet - multiple app support:

        values.put(COLUMN_TARGET_APP_PACKAGE, "{\"pkgs_sigs\":[
        {\"pkg\":\"com.ztestapp.clientapplication\",\"sig\":\"24727AB4E6C4A0BE……27B3C\"},
        {\"pkg\":\"com.ztestapp.clientapplication2\",\"sig\":\"24727AB4E……872B27B3C\"},
        {\"pkg\":\"com.ztestapp.abc\",\"sig\":\"25677AB4E6C……72B27B3C\"}
        ]}");

The return URI provides the number of rows updated.


### Query

Sample code to return the package name and other parameter data:

        Uri cpUriQuery = Uri.parse(AUTHORITY + "/[com.ztestapp.clientapplication]");

        String selection = "target_app_package = '" + packageName + "'" +"AND "+ "data_persist_required = '" + "false" + "'" +
                "AND "+"multi_instance_required = '"+ "true" + "'";
        Cursor cursor = null;
        
        try {
            cursor = getContentResolver().query(cpUriQuery, null, selection, null, null);
        } catch (Exception e) {
            Log.d(TAG, "Error: "+ e.getMessage());
        }
        // Then traverse the cursor object to get the required field values using the standard Android method. Not shown here. 


### Delete

Sample code to delete the package name and other parameter data:

        Uri cpUriDelete = Uri.parse(AUTHORITY + "/[com.ztestapp.clientapplication]");

        String whereClause = "target_app_package = '" + packageName + "'" +"AND "+ "data_persist_required = '" + "false" + "'" +
                "AND "+"multi_instance_required = '"+ "true" + "'";

        int rowsDeleted = getContentResolver().delete(cpUriDelete, whereClause , null);

-----

Related Guides:

* [About SSM](../about)
* [Using SSM](../use)
