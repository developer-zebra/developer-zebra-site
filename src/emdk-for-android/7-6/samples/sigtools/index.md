---
publish: true
title: App Signature Tools
description: Used to extract the signature file from an APK.
downloads:
  - title: SigTools_3.zip
    url: 'SigTools_3.zip'
features:
  - Profile Manager
  - Barcode
  - Java APIs
devices:
  - MC33 O,
  - PS20 O,
  - TC20 N/O,
  - TC25 N/O,
  - TC51 O,
  - TC52 O,
  - TC56 O,
  - TC57 O,
  - TC70x O,
  - TC72 O,
  - TC77 O
layout: sample.html
product: EMDK For Android
productversion: '7.6'
---

`WARNING:` This app is presented as an *example* of how to extract and generate a signature file from an app. <u>No Zebra support or warranty is expressed or implied</u>. **ZEBRA DOES NOT RECOMMEND USING THIS APP IN PRODUCTION ENVIRONMENTS**.  

## Overview
SigTools converts a certificate (either a direct DER-formated file or one extracted from an `.apk`) into
a byte array. The output is formatted as a Java class or a string of bytes and is automatically copied to the host-system clipboard. Optionally, the output can be written to a file (for JAVA OUTFORM). 

### SYNTAX
    java -jar SigTools COMMAND -INFORM [DER|APK] -OUTFORM [BYTES|JAVA] [-OUTFILE filename] -IN FILENAME [FILENAME]...[ARGUMENTS]

### DESCRIPTION
#### Commands

**GETCERT -** Read the certificate

**VERSION -** Get the version of this JAR

#### Arguments

**INFORM -** (REQUIRED) Format of the input file: **'APK'** or **'DER'**

**OUTFORM -** (REQUIRED) Format of the output: `BYTES` (a string representing the bytes in the certificate) or '`JAVA`' (a Java class)

**IN -** (REQUIRED) A space-separated list of file names (**NOTE**: Surround with quotes if there is a space in the name) 

**OUTFILE -** (Optional) The output file name if '`JAVA`' is used as the OUTFORM 

#### Notes

* **This sample illustrates a single use-case** for converting and/or extracting an app's signature file from the app for the purpose of developer validation and certification. This is not a comprehensive example of the many ways this feature could be implemented or used. 

##Requirements
* A Linux, macOS or Windows PC with Java execution environment installed  
* A DER-formatted file or `.apk` from which to extract the signature

##Using Sample App

1. **[Download the sample app](SigTools_3.zip)** and unzip it onto the host computer. 
2. Place the `SigTools_3.jar` file in the same folder as the `.apk` it will be operating on. 
3. **Open a command prompt** or terminal window on the host computer and navigate to the same folder. 
4. Execute SigTools app using a version of the sample commands below that coincides with the file that contains the signature.
5. Deploy the signature file (named `test.java` in the `.apk` example below) to devices as needed. 

> **`WARNING:`**: Sample apps are for demonstration purposes only and should not be used in production environments.

### SAMPLE COMMANDS
    :::java
    // For APK files:
    java -jar SigTools_3.jar GetCert -INFORM APK -OUTFORM JAVA -IN test.apk -OUTFILE test.java 
    //
    // For DER files:
    java -jar SigTools_3.jar GetCert -INFORM DER -OUTFORM BYTES -IN test.x509.pem -OUTFILE test.txt

