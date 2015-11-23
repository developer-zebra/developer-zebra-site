#ProfileConfig.DataCapture.Barcode.DecoderParams

Holds Decoder configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	DecoderParams decoderParams = profileConfigdataCapture.barcode.decoderParams;


##Public Fields

###upca

Configures the UPCA Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.UPCA.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.upca.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.UPCA

###upce0

Configures the UPCE0 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE0.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.upce0.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE0

###ean8

Configures the EAN8 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.EAN8.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.ean8.convert_to_ean13 = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.EAN8

###code128

Configures the Code128 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Code128.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.code128.enable_ean128 = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Code128

###code39

Configures the Code39 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Code39.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.code39.full_ascii = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Code39

###interleaved_2of5

Configures the Interleaved 2of5 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Interleaved_2of5.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.interleaved_2of5.check_digit = CHECK_DIGIT_TYPE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Interleaved_2of5

###composite_AB

Configures the Composite AB Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Composite_AB.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.composite_AB.ucc_link_mode = UCC_LINK_MODE.ALWAYS_LINKED;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Composite_AB

###usPostnet

Configures the US Postnet Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.USPostnet.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.usPostnet.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.USPostnet

###usPlanet

Configures the US Planet Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.USPlanet.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.usPlanet.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.USPlanet

###uk_Postal

Configures the UK Postal Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.UK_Postal.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.uk_Postal.report_check_digit = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.UK_Postal

###codabar

Configures the Codabar Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Codabar.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.codabar.clsi_editing = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Codabar

###msi

Configures the MSI Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.MSI.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.msi.check_digit = CHECK_DIGIT.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.MSI

###code93

Configures the Code93 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Code93.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.code93.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Code93

###trioptic39

Configures the Trioptic39 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Trioptic39.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.trioptic39.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Trioptic39

###discrete_2of5

Configures the Discrete_2of5 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Discrete_2of5.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.discrete_2of5.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Discrete_2of5

###code11

Configures the Code11 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Code11.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.code11.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Code11

###matrix_2of5

Configures the Matrix 2of5 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.Matrix_2of5.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.matrix_2of5.redundancy = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.Matrix_2of5

###upce1

Configures the UPCE1 Symbology object  ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE1.
 
 

**Example Usage:**
	
	:::java	
	decoderParams.upce1.convert_to_upca = ENABLED_STATE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture.Barcode.DecoderParams.UPCE1

