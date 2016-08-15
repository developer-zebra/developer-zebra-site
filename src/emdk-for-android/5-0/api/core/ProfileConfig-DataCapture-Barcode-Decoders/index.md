---
title: ProfileConfig.DataCapture.Barcode.Decoders
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The Decoders class provides access to enable or disable decoder barcode symbologies. 
 
 

**Example Usage:**
	
	:::java	
	Decoders decoders = barcode.decoders;
	decoders.upca = ENABLED_STATE.TRUE;


##Public Fields

###upca

Sets the Enabled State of Decoder UPCA. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.upca = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###upce0

Sets the Enabled State of Decoder UPCE0. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.upce0 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###ean13

Sets the Enabled State of Decoder EAN-13. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.ean13 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###ean8

Sets the Enabled State of Decoder EAN-8. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.ean8 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###code128

Sets the Enabled State of Decoder Code 128. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.code128 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###code39

Sets the Enabled State of Decoder Code 39. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.code39 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###i2of5

Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.i2of5 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###gs1_databar

Sets the Enabled State of Decoder Interleaved 2 of 5. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.gs1_databar = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###gs1_databar_lim

Sets the Enabled State of Decoder GS1 DataBar Limited. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.gs1_databar_lim = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###gs1_databar_exp

Sets the Enabled State of Decoder GS1 DataBar Expanded. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.gs1_databar_exp = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###datamatrix

Sets the Enabled State of Decoder Data Matrix. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.datamatrix = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###qrcode

Sets the Enabled State of Decoder QR Code. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.qrcode = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###pdf417

Sets the Enabled State of Decoder PDF417. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.pdf417 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###composite_ab

Sets the Enabled State of Decoder Composite AB. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.composite_ab = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###composite_c

Sets the Enabled State of Decoder Composite C. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.composite_c = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###microqr

Sets the Enabled State of Decoder Micro QR. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.microqr = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###aztec

Sets the Enabled State of Decoder Aztec. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.aztec = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###maxicode

Sets the Enabled State of Decoder Maxicode. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.maxicode = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###micropdf

Sets the Enabled State of Decoder Micro PDF. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.micropdf = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###uspostnet

Sets the Enabled State of Decoder US Postnet. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.uspostnet = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###usplanet

Sets the Enabled State of Decoder US Planet. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.usplanet = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###uk_postal

Sets the Enabled State of Decoder UK Postal. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.uk_postal = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###japanese_postal

Sets the Enabled State of Decoder Japan Postal. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.japanese_postal = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###australian_postal

Sets the Enabled State of Decoder Australian Postal. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.australian_postal = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###canadian_postal

Sets the Enabled State of Decoder Canadian Postal. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.canadian_postal = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###dutch_postal

Sets the Enabled State of Decoder Dutch Postal. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.dutch_postal = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###us4state

Sets the Enabled State of Decoder US4State. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.us4state = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###us4state_fics

Sets the Enabled State of Decoder US4State FICS. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.us4state_fics = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###codabar

Sets the Enabled State of Decoder Codabar. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.codabar = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###msi

Sets the Enabled State of Decoder MSI. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.msi = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###code93

Sets the Enabled State of Decoder Code 93. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.code93 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###trioptic39

Sets the Enabled State of Decoder Trioptic 39. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.trioptic39 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###d2of5

Sets the Enabled State of Decoder Discrete 2 of 5. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.d2of5 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###chinese_2of5

Sets the Enabled State of Decoder Chinese 2 of 5. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.chinese_2of5 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###korean_3of5

Sets the Enabled State of Decoder Korean 3 of 5. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.korean_3of5 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###code11

Sets the Enabled State of Decoder Code11. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.code11 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###tlc39

Sets the Enabled State of Decoder TLC 39. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.tlc39 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###signature

Sets the Enabled State of Decoder Signature. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.signature = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###webcode

Sets the Enabled State of Decoder Web Code. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.webcode = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###matrix_2of5

Sets the Enabled State of Decoder Matrix 2 of 5. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.matrix_2of5 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE

###upce1

Sets the Enabled State of Decoder UPCE1. 
 Use enum [ ProfileConfig.ENABLED_STATE](../ProfileConfig-ENABLED_STATE). 
 
 

**Example Usage:**
	
	:::java
	
	decoders.upce1 = ENABLED_STATE.DEFAULT;
	}


**Type:**

com.symbol.emdk.ProfileConfig.ENABLED_STATE


