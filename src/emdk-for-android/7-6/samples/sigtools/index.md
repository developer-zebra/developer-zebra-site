---
publish: true
title: App Signature Tools
description: Used to extract the signature file from APK or DER file(s)
downloads:
  - title: SigTools_3.zip
    url: 'SigTools_3.zip'
features:
  - Java APIs
devices:
  - Supported on all Zebra Android devices
layout: sample.html
product: EMDK For Android
productversion: '7.6'
---

## Overview
SigTools is a command-line utility for converting a certificate into a byte array. Supported inputs are Android `.apk` app files or those formatted according to Distinguished Encoding Rules (DER), which generally contain an X.509 binary certificate used for secure websites. **Output is formatted as a Java class or a string of bytes** and is automatically copied to the host-system clipboard. Optionally, the output can be written to a file (for JAVA OUTFORM). 

This utility can be used to create a signature file for securing apps using the Zebra [Access Manager](/mx/accessmgr) CSP. 

####`WARNING:`
**Zebra does not recommend using this utility for production environments**. This app is an *<u>example</u>* of how to extract and generate a signature file from an app. **No Zebra support or warranty is expressed or implied**.  

-----

### SYNOPSYS
    java -jar SigTools.jar COMMAND -INFORM [DER|APK] -OUTFORM [BYTES|JAVA] [-OUTFILE filename] -IN FILENAME [FILENAME]...[ARGUMENTS]

### DESCRIPTION
#### Commands

**GETCERT -** Read the certificate

**VERSION -** Get the version of this JAR

#### Arguments

**INFORM** (required) - Format of the input file: **'APK'** or **'DER'**

**OUTFORM** (required) - Format of the output: **BYTES** (a string representing bytes in certificate) or **JAVA** (a Java class)

**IN** (required) - A space-separated list of file names (**NOTE**: If name contains a space, surround name with quotes) 

**OUTFILE** (optional) - The output file name if **JAVA** is used as the OUTFORM 

#### Notes

* **This sample app illustrates a single use-case** for converting and/or extracting an app's signature file from the app for the purpose of developer validation and certification. 

##Requirements
* A Linux, macOS or Windows host computer with Java runtime environment installed  
* DER-formatted or `.apk` file(s) from which to extract the signature(s)

##Using Sample App

1. **[Download the sample app](SigTools_3.zip)** and unzip it onto the host computer. 
2. **Move the** `SigTools.jar` **file to a working folder with the** `.apk` or DER file(s) it will operate on. 
3. **Open a command prompt** or terminal window on the host computer and navigate to the working folder. 
4. Execute SigTools app, modifying the sample commands below as needed for files.
5. Deploy the signature file (called `test.java` in the `.apk` example below) to devices as needed or paste the contents of the clipboard as needed. 

> **`WARNING:`** Sample apps are for demonstration purposes only and should not be used in production environments.

### SAMPLE COMMANDS
    :::java
    // For APK files:
    java -jar SigTools_3.jar GetCert -INFORM APK -OUTFORM JAVA -IN test.apk -OUTFILE test.java 
    // For DER files:
    java -jar SigTools_3.jar GetCert -INFORM DER -OUTFORM BYTES -IN test.x509.pem -OUTFILE test.txt

