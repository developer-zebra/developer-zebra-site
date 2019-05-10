---
title: SAM API Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '7.4'
---

## Overview

The EMDK for Android Secure Access Module (SAM) API provides developers with a comprehensive set of tools to easily create secure NFC applications for use with Zebra mobile devices. It's important to note that **the EMDK SAM API allows only for secure communication with the NFC tags**. The SAMManager is the primary object used to enumerate available SAMs and access SAMs to securely communicate with tags. Applications should use the Android NFC APIs to read standard NFC tags. 

-----

### Update Android Manifest

&#49;. Add the following permissions in the Android Manifest:

        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
        <uses-permission android:name="android.permission.NFC" />

&#50;. In the manifest's &lt;application&gt; node, add the following line to enable use of EMDK libraries on the device:

        :::xml 
        <uses-library android:name="com.symbol.emdk"/>

&#51;. Determine whether NFC is supported by the device by running the following code:

        :::Java
        if (NfcAdapter.getDefaultAdapter(this) == null) { 
            Toast.makeText(this, "NFC Not Supported", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }
If NFC is supported, continue to the next step.

-----

### Get the SAM Manager

An EMDK Manager object must be acquired before getting the SAM Manager object, and must release the SAM Manager class before quitting. Use the code below to get the SAM Manager: 

        :::Java
        samManager = (SAMManager) emdkManager.getInstance(EMDKManager.FEATURE_TYPE.SAM);

-----

### Enumerate SAM Objects

The `enumerateSAMs()` call returns a list of SAM objects present in the device. An empty list indicates that no SAMs are present. Call the `enumerateSAMs()` method to enumerate the available SAMs in the device: 
 
        :::Java
        List<SAM> samList = null;
        try {
            samList = samManager.enumerateSAMs();
        }catch (SAMException ex){
            Log.d(TAG, SAMResults.getErrorDescription(ex.getResult()));
        }
        if(samList != null && samList.size()>0) {
            SAM sam = samList.get(0);
        }

-----

### Using the SAM

To use a SAM, a connection must be made with the SAM. Zebra recommends disconnecting the SAM when communications are concluded.

&#49;. Get SAM type: 

        :::Java
        getSAMType() //returns the SAM type (i.e. MIFARE, CALYPSO, FELICA)
        
        SAMType samType = sam.getSamType();

&#50;. Use the `connect()` method to connect to a SAM:

        :::Java
        if (!sam.isConnected()) {
            try {
                sam.connect();
            } catch (SAMException ex) {
                Log.d(TAG, SAMResults.getErrorDescription(ex.getResult()));
                return;
            }
        }
####Notes
* If another SAM is already connected, `connect()` throws and exception.
* The `isConnected()` method returns the current SAM connection status.
* Exceptions will be thrown if: 
 * The called SAM is already connected with the current application
 * Another SAM connected with the current application 
 * A different app is connected to the SAM

-----

### Transceive API

The basic unit of communication between an NFC reader and a tag is the Application Protocol Data Unit, or APDU. Use the `transceive()` method is used to send the APDUs to the SAM. 

**To send an ADPU**: 

        :::Java 
        byte[] getVersionAPDU = new byte[]{(byte) 0x80, (byte) 0x60, (byte) 0x00, (byte) 0x00,/*(byte)0x00,*/(byte) 0x00};
        byte[] response = null;
        try {
            response = sam.transceive(getVersionAPDU, (short) 0, false);
        } catch (SAMException  ex) {
            Log.d(TAG,SAMResults.getErrorDescription(ex.getResult()));
        }
#### Notes
* Exceptions will be thrown if:
 * SAM is not connected    
 * A SAM is having an active connection by a different application
 * Failure to transceive data

-----

### Disconnect SAM
Use the `disconnect()` method to close the SAM connection. The SAM must be closed after all communications are done. Failure to do so might prevent other apps from using SAM APIs.

**To disconnect SAM**: 

    :::Java
    if (sam.isConnected()) {
        sam.disconnect();
    }

### Get SAM Index

The `getSamIndex()` method returns the slot index of the SAM starting from 1.

**To get the SAM slot index**:  

    :::Java
    int index = sam.getSamIndex();

-----

### Detect NFC Tag
 
The sample code below shows how to use [Android NFC APIs](https://developer.android.com/guide/topics/connectivity/nfc/nfc) to detect an NFC tag and establish a connection with an appropriate SAM using the EMDK SAM API's `connect()` method. 

#### Sample Code 

    public class MainActivity extends AppCompatActivity implements EMDKManager.EMDKListener {
        
        ...

        boolean tagOperationInProgress = false;
        private PendingIntent nfcIntent = null;
        private NfcAdapter nfcAdapter = null;
        private String detectedTag = "";

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);

        ...

            nfcIntent = PendingIntent.getActivity(this, 0,
                    new Intent(this, this.getClass())
                            .addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP), 0);
            
        }
        @Override
        protected void onResume() {
            super.onResume();
            
            ...
         
            if(tagOperationInProgress)
                tagOperationInProgress = false;

            if (nfcAdapter != null) {
                nfcAdapter.enableForegroundDispatch(this, nfcIntent, null, null);
            }
        }

        @Override
        protected void onPause() {
            super.onPause();
        
            ...

            if(nfcAdapter!=null){
                nfcAdapter.disableForegroundDispatch(this);
            }
        }

        @Override
        protected void onNewIntent(Intent intent) {
            super.onNewIntent(intent);
            tagDetection(intent);
        }

        private void tagDetection(Intent intent) {

            tagOperationInProgress = true;

            if(samManager == null) {
                //initSAMManager();
            }

            if (NfcAdapter.ACTION_NDEF_DISCOVERED.equals(intent.getAction())
                    || NfcAdapter.ACTION_TAG_DISCOVERED.equals(intent.getAction())
                    || NfcAdapter.ACTION_TECH_DISCOVERED.equals(intent.getAction())) {

                Tag lTag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
                SAM sam = null;
                SAMType samTypeForTag = null;

                samTypeForTag = findCompatibleSAM(lTag);

                String text = detectedTag + " " + getString(R.string.message_tag_detected) + "\n";

                String compatibeSAMText = "";
                for (Map.Entry<Integer, SAM> entry : presetSAMList.entrySet())
                {
                    if(entry.getValue().getSamType() == samTypeForTag)
                    {
                        sam = entry.getValue();
                        compatibeSAMText += "\n\t" + sam.getSamType() + "(Slot " + sam.getSamIndex() + ")";
                    }
                }
                if(!presetSAMList.isEmpty()) {
                    if (!compatibeSAMText.isEmpty()) {

                        text += getString(R.string.message_tag_compatible) + " " + compatibeSAMText;

                        /**
                         * Connect to the appropriate SAM based on the Tag detected.
                         *
                        /** Connect [Start] 
                        try {
                            if (!sam.isConnected()) {
                                sam.connect();
                            }
                        } catch (SAMException ex) {
                          SAMResults.getErrorDescription(ex.getResult());
                        }
                        /** Connect [End] */

                        /** Transceive [Start]
                        byte[] response = null;
                        try {
                            response = sam.transceive(transceive_apdu_1, (short) 0, false);
                            response = sam.transceive(transceive_apdu_2, (short) 0, false);
                            response = sam.transceive(transceive_apdu_3, (short) 0, false);
                            response = sam.transceive(transceive_apdu_4, (short) 0, false);
                        } catch (SAMException ex) {
                           SAMResults.getErrorDescription(ex.getResult());
                        }
                        /**Transceive [End] */

                        /** Disconnect [Start]
                        if (sam.isConnected()) {
                            sam.disconnect();
                        }
                        /** Disconnect [End] */

                    } else {
                        text += getString(R.string.message_tag_not_compatible);
                    }
                }
            }
        }
        private SAMType findCompatibleSAM(Tag aTag) {
     
                /**
               Refer to link below for documentation describing how to identify 
               card tag type and how to return the matching SAMType
               https://developer.android.com/guide/topics/connectivity/nfc/nfc 
                */
        }
    }


