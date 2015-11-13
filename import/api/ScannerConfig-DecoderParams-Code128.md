#ScannerConfig.DecoderParams.Code128

The Code128 class provides access to parameters that are available
 for the Code128 decoder.

##Public Fields

###length1

Use to set decode lengths. The supported range is 0 to 55.

 

**Example Usage:**
	
	:::java	
	int length1 = code128.length1;


**Type:**

int

###length2

Use to set decode lengths. The supported range is 0 to 55.

 

**Example Usage:**
	
	:::java	
	int length2 = code128.length2;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data.

 

**Example Usage:**
	
	:::java	
	code128.redundancy = true;


**Type:**

boolean

###enablePlain

Flag to enable other sub types besides GS1-128 and ISBT-128

 

**Example Usage:**
	
	:::java	
	code128.enablePlain = false;


**Type:**

boolean

###enableEan128

Flag to enable EAN128 subtype.
 

**Example Usage:**
	
	:::java	
	code128.enableEan128 = true;


**Type:**

boolean

###enableIsbt128

Flag to enable ISBT128 .
 

**Example Usage:**
	
	:::java	
	code128.enableIsbt128 = true;


**Type:**

boolean

###isbt128ConcatMode

Select an option for concatenating pairs of ISBT code types. Use
 enum  ScannerConfig.Isbt128ContactMode.

 

**Example Usage:**
	
	:::java	
	code128.isbt128ConcatMode = Isbt128ContactMode.NONE;


**Type:**

com.symbol.emdk.barcode.ScannerConfig.Isbt128ContactMode

###checkIsbtTable

The ISBT specification includes a table that lists several types
 of ISBT bar codes that are commonly used in pairs. If ISBT128
 Concat Mode is set, enable Check ISBT T able to concatenate only
 those pairs found in this table. Other types of ISBT codes are
 not concatenated.

 

**Example Usage:**
	
	:::java	
	code128.checkIsbtTable = true;


**Type:**

boolean

###securityLevel

The scanner of fers four levels of decode security for Code 128
 bar codes. Select increasing levels of security for decreasing
 levels of bar code quality. There is an inverse relationship
 between security and scanner aggressiveness, so choose only that
 level of security necessary for any given application. Use enum
  ScannerConfig.SecurityLevel.

 

**Example Usage:**
	
	:::java	
	code128.securityLevel = SecurityLevel.LEVEL_0;


**Type:**

com.symbol.emdk.barcode.ScannerConfig.SecurityLevel

