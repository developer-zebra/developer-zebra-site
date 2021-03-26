---
title: MDNA Licensing
layout: guide.html
product: EMDK For Android
productversion: '9.1'
---

## Overview

For Zebra Professional-series devices, the following EMDK features require the purchase of a Mobility DNA (MDNA) Enterprise license: 

* Multi-barcode scanning
* Image/document capture

For more information, please visit the [MDNA Enterprise licensing page](/licensing). 

-----

## Multi-barcode in Barcode API

### Existing Apps  

#### Licensed Scenario 

Running an existing scanning app with multi-barcode capability enabled on a MDNA-licensed Zebra Professional device with EMDK 8.0 (and later) will perform as expected.

#### Unlicensed Scenario 

Running an existing EMDK-complied scanning app with multi-barcode capability enabled on a Zebra Professional device without an MDNA Enterprise license results in a ScannerException in the `scanner.setConfig()` API call. Such apps are capable of scanning only single barcodes until an MDNA Enterprise license is acquired and applied. 

#### License Expired Scenario

If an MDNA Enterprise license expires while an app with multi-barcode capabilities is in use, the next `scanner.read()` API call will fail with ScannerException embedding an “UNLICENSED_FEATURE” result code. This immediately halts multi-barcode scanning, even if the user had previously been doing so during their current scanning session. Only single barcode scanning is possible thereafter until an MDNA Enterprise license is renewed and applied. 

-----

### Apps Under Development 

#### Licensed Scenario

Building and running an existing scanning app with multi-barcode capability enabled on a MDNA-licensed Zebra Professional device with EMDK 8.0 will perform as expected.

#### Unlicensed Scenario

Running an existing EMDK-complied scanning app with multi-barcode capability enabled on a Zebra Professional device without an MDNA Enterprise license results in a ScannerException in the `scanner.setConfig()` API call. Such apps are capable of scanning only single barcodes until an MDNA Enterprise license is acquired and applied. 

##### Code snippet showing the unlicensed scenario:

    :::java
    try {
       // Getting scanner configuration
       ScannerConfig config = scanner.getConfig();

       // Enabling multi-barcode feature for imager 
        config.readerParams.readerSpecific.imagerSpecific.scanMode = ScannerConfig.ScanMode.MULTI_BARCODE;

       // Enabling multi-barcode feature for camera
        config.readerParams.readerSpecific.cameraSpecific.scanMode = ScannerConfig.ScanMode.MULTI_BARCODE;

       // Setting scanner configuration
       scanner.setConfig(config);

      } catch (ScannerException e) {

        String scannerResult = e.getResult().toString();
                    
        // Check the error code
        if(scannerResult.equalsIgnoreCase(“UNLICENSED_FEATURE”)){
                
            // If the scanner.setConfig() API call is failing with the result 
                    // code “UNLICENSED_FEATURE” means the device is not licensed to use
                     // Multi-barcode feature and an MDNA Enterprise License is required.
                  
            }
      }


#### License Expired Scenario

If an MDNA Enterprise license expires while an app with multi-barcode capabilities is in use, the next `scanner.read()` API call will fail with ScannerException embedding an “UNLICENSED_FEATURE” result code. This immediately halts multi-barcode scanning, even if the user had previously been doing so during their current scanning session. Only single barcode scanning is possible thereafter until an MDNA Enterprise license is renewed and applied. 

##### Code snippet showing the license expiration scenario:

    :::java
    try {
        // Submit a new read.
        scanner.read();

    } catch (ScannerException e) {

        String scannerResult = e.getResult().toString();
                    
        // Check the error code
        if(scannerResult.equalsIgnoreCase(“UNLICENSED_FEATURE”)){
                
            // If the scanner.read() API call is failing with the result 
                    // code “UNLICENSED_FEATURE” means the device is not licensed to use
                     // Multi-barcode feature and an MDNA Enterprise License is required.
             }
    }

