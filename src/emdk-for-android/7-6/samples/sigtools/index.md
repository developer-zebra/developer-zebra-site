---
publish: true
title: App Signature Tools
description: Used to extract the signature file from an APK.
downloads:
  - title: SigTools.zip
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3/archive/master.zip'
sources:
  - title: Github Repo
    url: 'https://github.com/Zebra/samples-emdkforandroid-7_3'
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
image: 1.png
screenshots:
  - MultiBarcode.png
  - MultiBarcode_scan.png
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

>**NOTE**: The appearance of sample app screens can vary by operating system and Java version. 

**Before beginning, download the sample app** and make it visible on the host computer. 

1. **Launch the sample app**. It should appear similar to the image below:
  <img alt="image" style="height:400px" src="MultiBarcode.png"/>
  
2. **Select the desired scanner, point the device at a scan target that contains multiple barcodes and tap the Scan button**.<br>The status area should appear similar to the image below:  

  <img alt="image" style="height:400px" src="MultiBarcode_scan.png"/>

> **`WARNING:`**: Sample apps are for demonstration purposes only and should not be used in production environments.
