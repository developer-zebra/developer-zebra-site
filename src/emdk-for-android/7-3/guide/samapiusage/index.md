---
title: SAM API Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '7.3'
---

## Overview

The EMDK for Android Secure Access Module (SAM) API provides developers with a comprehensive set of tools to easily create secure NFC applications for use with Zebra mobile devices. It's important to note that **the EMDK SAM API allows only for secure communication with the NFC tags**. The SAMManager is the primary object used to enumerate available SAMs and access SAMs to securely communicate with tags. Applications should use the Android NFC APIs to read standard NFC tags. 


### Update Android Manifest

1. Add the following permissions in the Android Manifest:

        :::xml
        <uses-permission android:name="com.symbol.emdk.permission.EMDK"/>
        <uses-permission android:name="android.permission.NFC" />

2. In the manifest's &lt;application&gt; node, add the following line to enable use of EMDK libraries on the device:

        :::xml 
        <uses-library android:name="com.symbol.emdk"/>

3. Determine whether NFC is supported by the device:

        :::Java
        if (NfcAdapter.getDefaultAdapter(this) == null) { 
            Toast.makeText(this, "NFC Not Supported", Toast.LENGTH_SHORT).show();
            finish();
            return;
        }
If NFC is supported, continue to the next step.

4. Get the SAMManager:

        :::Java
        samManager = (SAMManager) emdkManager.getInstance(EMDKManager.FEATURE_TYPE.SAM);

Note: To get SAMManager, an EMDKManager object must be acquired before getting the SAMManager object and must release the SAMManager class before quitting.

5. Call the `enumerateSAMs()` method to enumerate the available SAMs in the device: 
 
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
This call returns a list of SAM objects present in the device. An empty list indicates that no SAMs present. 

### Using the SAM

To use a SAM, a connection must be made with the SAM. Zebra recommends disconnecting the SAM when communications are concluded.

1. Get SAM type: 

        :::Java
        getSAMType() //returns the SAM type (i.e. MIFARE, CALYPSO, FELICA)
        
        SAMType samType = sam.getSamType();

2. Use the `Connect()` method to connect to a SAM:

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
* If another SAM is already connected, `Connect()` throws and exception.
* The `isConnected()` method returns the current SAM connection status.
* Exceptions will be thrown if: 
 * The called SAM is already connected with the current application
 * Another SAM connected with the current application 
 * A different app is connected to the SAM

### Transceive API

The Transceive API is used to send the APDUs to the SAM. Exception will be thrown in an error.

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

Disconnect from SAM

Disconnect() API closes the SAM connection. The SAM must be closed after all the communications are done. Failure to do so, may prevent other apps from using SAM APIs.
if (sam.isConnected()) {
    sam.disconnect();
}

Get SAM Index

getSAMIndex returns the slot index of the SAM. The indexes are starting from 1.
 
int index = sam.getSamIndex();
 

Detect a NFC Tag using Android NFC APIs and Connect with Appropriate SAM using EMDK

Following sample code shows how to detect an NFC tag and connect with the appropriate SAM.
For a detailed description about how to identify the card type, please refer to the android documentation: https://developer.android.com/guide/topics/connectivity/nfc/nfc

public class MainActivity extends AppCompatActivity implements EMDKManager.EMDKListener {

    
    .
    .
    .
    .
    .
    .

    boolean tagOperationInProgress = false;
    private PendingIntent nfcIntent = null;
    private NfcAdapter nfcAdapter = null;
    private String detectedTag = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        .
        .
        .
        .
        .

        nfcIntent = PendingIntent.getActivity(this, 0,
                new Intent(this, this.getClass())
                        .addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP), 0);
        
    }

      

    @Override
    protected void onResume() {
        super.onResume();
        
        .
        .
     
        if(tagOperationInProgress)
            tagOperationInProgress = false;

        if (nfcAdapter != null) {
            nfcAdapter.enableForegroundDispatch(this, nfcIntent, null, null);
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        .
        .
        .

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
           Please refer to documentation below to identify card tag type
           and return the matching SAMType
           https://developer.android.com/guide/topics/connectivity/nfc/nfc 
        */


    }



}


