---
title: ProfileConfig.DataCapture.Barcode.ReaderParams
type: api
---


Holds reader configuration settings. 
 
 

**Example Usage:**
	
	:::java	
	ReaderParams readerParams = profileConfig.dataCapture.barcode.readerParams;


##Public Fields

###aim_type

This setting is used to change the behavior of the aimer.

**Type:**

com.symbol.emdk.ProfileConfig.AIM_TYPE

###same_barcode_timeout

This setting is used to prevent the scanner driver from decoding the same symbol within this time interval (applicable only when 
 aim_type = AIM_TYPE.CONTINUOUS_READ). Basically in the continuous mode the user can perform rapid scan and to prevent the 
 user from decoding the same barcode twice user can set this value to an appropriate interval (in milliseconds). A value of 0 means 
 no interval is required between two successive reads.
 Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc

**Type:**

int

###different_barcode_timeout

This setting is used to prevent the scanner from decoding another symbol within this time interval (applicable only when  
 aim_type = AIM_TYPE.CONTINUOUS_READ). The user may want to prevent decoding too quickly and set an interval that the user can aim 
 before decoding the next barcode. A value of 0 means no interval is required between two successive reads.
 Boundary values are 0 to 5000 in milliseconds in 500 increments such as 0, 500, 1000... etc

**Type:**

int

###beam_timer

Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). 
 A value of 0 sets the reader to stay on indefinitely (default -15000).
 
 

**Example Usage:**
	
	:::java	
	int timer = readerParams.beam_timer;


**Type:**

int

###power_mode

Sets the scanner power mode.
 Use enum [ProfileConfig-POWER_MODE](../ProfileConfig-POWER_MODE).
 
 

**Example Usage:**
	
	:::java	
	readerParams.power_mode = POWER_MODE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.POWER_MODE

###linear_security_level

Sets the number of times a bar code is read to confirm an accurate decode.
 Use enum [ProfileConfig-LINEAR_SECURITY_LEVEL](../ProfileConfig-LINEAR_SECURITY_LEVEL).
 
 

**Example Usage:**
	
	:::java	
	readerParams.linear_security_level = LINEAR_SECURITY_LEVEL.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.LINEAR_SECURITY_LEVEL

###picklist

Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. 
 This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and 
 only one of them is targeted for decode.
 Use enum [ProfileConfig-PICK_LIST](../ProfileConfig-PICK_LIST).
 
 

**Example Usage:**
	
	:::java	
	readerParams.picklist = PICK_LIST.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.PICK_LIST

###illumination_mode

Turns camera illumination on and off. 
 This option is only available when camera is selected in the Barcode input Scanner selection option.
 Use enum [ProfileConfig-ILLUMINATION_MODE](../ProfileConfig-ILLUMINATION_MODE).
 
 

**Example Usage:**
	
	:::java	
	readerParams.illumination_mode = ILLUMINATION_MODE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.ILLUMINATION_MODE

###lcd_mode

Enables or disables LCD mode. 
 LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones (imager only).
 Use enum [ProfileConfig-LCD_MODE](../ProfileConfig-LCD_MODE).
 
 

**Example Usage:**
	
	:::java	
	readerParams.lcd_mode = LCD_MODE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.LCD_MODE

###low_power_timeout

Time in milliseconds of non-use before dropping to a low-power mode.
 
 

**Example Usage:**
	
	:::java	
	int timeout = readerParams.low_power_timeout;


**Type:**

int

###illumination_brightness

Sets the Illumination Brightness of the Imager. (1 - Lowest, 10 - Highest).
 
 

**Example Usage:**
	
	:::java	
	int illumination_brightness = readerParams.illumination_brightness;


**Type:**

int

###inverse_1d_mode

This parameter allows the user to select decoding on inverse 1D bar codes.
 Use enum [ProfileConfig-INVERSE_1D_MODE](../ProfileConfig-INVERSE_1D_MODE).
 
 

**Example Usage:**
	
	:::java	
	readerParams.inverse_1d_mode = INVERSE_1D_MODE.AUTO;


**Type:**

com.symbol.emdk.ProfileConfig.INVERSE_1D_MODE

###viewfinder_mode

Configures the Viewfinder modes supported for camera scanning.
 Use enum [ProfileConfig-VIEWFINDER_MODE](../ProfileConfig-VIEWFINDER_MODE).
 
 

**Example Usage:**
	
	:::java	
	readerParams.viewfinder_mode = VIEWFINDER_MODE.DEFAULT;


**Type:**

com.symbol.emdk.ProfileConfig.VIEWFINDER_MODE

