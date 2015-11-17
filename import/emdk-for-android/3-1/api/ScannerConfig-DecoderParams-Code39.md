#ScannerConfig.DecoderParams.Code39

The Code39 class provides access to parameters that are available for
 the Code39 decoder.

##Public Fields

###length1

Use to set decode lengths. The valid range is 0 to 55.

 

**Example Usage:**
	
	:::java	
	code39.length1 = 0;


**Type:**

int

###length2

Use to set decode lengths. The valid range is 0 to 55.

 

**Example Usage:**
	
	:::java	
	code39.length2 = 55;


**Type:**

int

###verifyCheckDigit

Enable this feature to check the integrity of all Code 39 symbols
 to verify that the data complies with a specified check digit
 algorithm. The digital scanner decodes only those Code 39 symbols
 that include a modulo 43 check digit. Enable this feature only if
 the Code 39 symbols contain a modulo 43 check digit.

 

**Example Usage:**
	
	:::java	
	code39.verifyCheckDigit = false;


**Type:**

boolean

###reportCheckDigit

Transmit Code 39 data with or without the check digit.

 

**Example Usage:**
	
	:::java	
	code39.reportCheckDigit = true;


**Type:**

boolean

###fullAscii

Code 39 Full ASCII is a variant of Code 39 that pairs characters
 to encode the full ASCII character set.

 

**Example Usage:**
	
	:::java	
	code39.fullAscii = true;


**Type:**

boolean

###redundancy

Sets the reader to read the bar code twice before accepting data.

 

**Example Usage:**
	
	:::java	
	code39.redundancy = true;


**Type:**

boolean

###convertToCode32

Code 32 is a variant of Code 39 used by the Italian
 pharmaceutical industry.

 

**Example Usage:**
	
	:::java	
	code39.convertToCode32 = true;


**Type:**

boolean

###reportCode32Prefix

Scan the appropriate bar code to enable or disable adding the
 prefix character "A" to all Code 32 bar codes.

 

**Example Usage:**
	
	:::java	
	code39.reportCode32Prefix = true;


**Type:**

boolean

###securityLevel

Options: Security level 0 , Security Level 1 , Security Level 2
 and Security Level 3. Use enum  ScannerConfig.SecurityLevel.

 

**Example Usage:**
	
	:::java	
	code39.securityLevel = SecurityLevel.LEVEL_1;


**Type:**

com.symbol.emdk.barcode.ScannerConfig.SecurityLevel

