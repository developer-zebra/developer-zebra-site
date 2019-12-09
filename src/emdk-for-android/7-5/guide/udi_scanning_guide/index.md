---
title: "UDI Label Scanning Programmer's Guide"
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---

> **`IMPORTANT:`** Support for Unique Device Identification (UDI) standard barcodes such as GS1, HIBCC and ICCBBA in Barcode APIs has been deprecated. **UDI support will end when EMDK targets devices running Android 10 Q**.

##UDI Label Scanning Feature

The EMDK Barcode API exposes a UDI barcode scanning feature that provides applications with the ability to read UDI Labels from from three issuing agencies, GS1, HIBCC and ICCBBA. This Guide will focus on the UDI Barcode scanning features of the EMDK Barcode APIs, for API details not pertaining to UDI Scannning see the Barcode Scanning API Programmer's Guide.

##Enabling UDI Scanning mode

Before an application can scan UDI labels, scanMode must be set to UDI. First get an instance of a scanner object, refer to the Barcode Scanning API Programmer's Guide for instructions on how to initialize a scanner object. Once you have an initialized scanner object, you can then modify the scanner configuration.

>Note: UDI scanning is only available with Imager based scanners.

    :::java
    ScannerConfig config = scanner.getConfig();

    // Scan Mode set to UDI
    config.readerParams.readerSpecific.imagerSpecific.scanMode = ScannerConfig.ScanMode.UDI;

    scanner.setConfig(config);

##Enabling/Disabling UDI Label Types

By default all UDI types are enabled. If you a wish to disable scanning of a specific UDI type, you can set it's udiParam to false.

    :::java
    ScannerConfig config = scanner.getConfig();

    // Just to show that the sub types can be enabled/ disabled
    config.udiParams.enableGS1 = true;
    config.udiParams.enableHIBCC = false;
    config.udiParams.enableICCBBA = false;

    scanner.setConfig(config);

##Handling Scan Data

###Tokenized Scan Data

Data read from a UDI labels contain embedded key/value pairs delimited by characters defined by their UDI type. The Key will be a label ( or Token) that describes the data contained in the Value. The EMDK Barcode APIs will recognize the UDI type and extract the Key/Value pairs into a data structure that can be easily iterated over. When data is returned to your application from a Scan event via the OnData callback, The data will be contained in a ScanDataCollection object. The code snippet below demonstrates how to access the Tokenized UDI data.


    :::java
    if (scanDataCollection.getTokenizedData() != null) {

        for (TokenizedData.Token data : scanDataCollection.getTokenizedData().getTokens()) {

            //The key (or Token) can be retrieved by calling data.getKey()
            //The UDI data associated with that Token and be retrieved by calling data.getData()

            Log.d("UDI","Token: " + data.getKey() + " Data: " + data.getData() );
        }

    }

###Raw UDI Data

In some cases the Raw data( UDI data before being Tokenized) from a UDI label may be useful. The code snippet below demonstrates how to access the Raw UDI data from a ScanDataCollection.


    :::java
    for (ScanData data : scanDataCollection.getScanData()) {
        // Log raw data.
        Log.d("UDI", "Data: " + data.getData());
    }

###UDI Label Type

The UDI label type recognized by the EMDK Barcode API's is provided as a String, allowing an application easily display the that label type. The code snippet below demonstrates how to access the UDI Label type String.


     :::java
     Log.d("UDI", "UDI Label Type: " + scanDataCollection.getLabelIdentifier());

### Retrieving Data by Token Name
Token Data can also be retrieved by individual Token name. The EMDK API provides the supported Tokens in the TokenizedData.Keys class. The code snippet below demonstrates how to retrieve data by Token Name.

    :::java
    scanDataCollection.getTokenizedData().getTokensByKey(TokenizedData.Keys.DEVICE_IDENTIFIER);