---
title: ScannerConfig.DecoderParams.Msi
type: api
---


The Msi class provides access to parameters that are available for
 the Msi decoder.

##Public Fields

###length1

Use to set decode lengths. The range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	msi.length1 = 4;
	


**Type:**

int

###length2

Use to set decode lengths. The range is 0 to 55.
 
 

**Example Usage:**
	
	:::java
	
	msi.length2 = 55;
	


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.
 
 

**Example Usage:**
	
	:::java
	
	msi.redundancy = true;
	


**Type:**

boolean

###checkDigits

With MSI symbols, one check digit is mandatory and always
 verified by the reader. The second check digit is optional. Use
 enum [ ScannerConfig.CheckDigit](../ScannerConfig-CheckDigit).
 
 

**Example Usage:**
	
	:::java
	
	msi.checkDigits = CheckDigit.ONE;
	


**Type:**

com.symbol.emdk.barcode.ScannerConfig.CheckDigit

###checkDigitScheme

Two algorithms are possible for the verification of the second
 MSI check digit. Select the algorithm used to encode the check
 digit. Use enum [ ScannerConfig.CheckDigitScheme](../ScannerConfig-CheckDigitScheme).
 
 

**Example Usage:**
	
	:::java
	
	msi.check_digit_scheme = CheckDigitScheme.MOD_10_10;
	


**Type:**

com.symbol.emdk.barcode.ScannerConfig.CheckDigitScheme

###reportCheckDigit

Transmit MSI data with or without the check digit.
 
 

**Example Usage:**
	
	:::java
	
	msi.reportCheckDigit = false;
	


**Type:**

boolean

