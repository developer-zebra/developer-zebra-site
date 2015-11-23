#ProfileConfig.DataCapture.Barcode.DecoderParams.Codabar

Holds Codabar configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	Codabar codabar = profileConfig.Barcode.DecoderParams.Codabar;


##Public Fields

###length1

Use to set decode lengths (default - 6). 
 
 

**Example Usage:**
	
	:::java	
	int length1 = codabar.length1;


**Type:**

int

###length2

Use to set decode lengths (default - 55). 
 
 

**Example Usage:**
	
	:::java	
	int length2 = codabar.length2;


**Type:**

int

###redundancy

Sets the reader to read the bar code twice before accepting data (default - enabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	codabar.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###clsi_editing

Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. 
 Enable this feature if the host system requires this data format (default - disabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	codabar.clsi_editing = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###notis_editing

Enable this parameter to strip the start and stop characters from a decoded Codabar symbol. 
 Enable this feature if the host system requires this data format (default - disabled). 
 Use enum  ProfileConfig.ENABLED_STATE. 
 
 

**Example Usage:**
	
	:::java	
	codabar.notis_editing = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

