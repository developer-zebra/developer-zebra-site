#ProfileConfig

Class for dealing with profile data
 
 

**Example Usage:**
	
	:::java	
	ProfileConfig profileConfig = new ProfileConfig();


##Constructors

###ProfileConfig

Creates a new instance of ProfileConfig.
 
 

**Example Usage:**
	
	:::java	
	ProfileConfig profileConfig = new ProfileConfig();


##Public Fields

###profileName

Gets and Sets the profile name.
 
 

**Example Usage:**
	
	:::java	
	String profileName =  profileConfig.profileName;


**Type:**

java.lang.String

###modifiedDate

Gets and Sets the profiles modified date string. 
 
 

**Example Usage:**
	
	:::java	
	String profileDate = profileConfig.modifiedDate;


**Type:**

java.lang.String

###dataCapture

Gets and Sets the profiles DataCapture object  ProfileConfig#dataCapture. 
 
 

**Example Usage:**
	
	:::java	
	DataCapture dataCapture = profileConfig.dataCapture;


**Type:**

com.symbol.emdk.ProfileConfig.DataCapture

###activitySelection

Gets and Sets the activity selection for the profiles  ProfileConfig#activitySelection. 
 If no activities are associated to profile, the profile will be associated to that application for that session.
 
 

**Example Usage:**
	
	:::java	
	ActivitySelection activitySelection = profileConfig.activitySelection;


**Type:**

com.symbol.emdk.ProfileConfig.ActivitySelection

##Public Enums

###ProfileConfig.DEVICETYPES

List of supported scanner device types
 
 

**Example Usage:**
	
	:::java	
	DEVICETYPES.INTERNAL_LASER1;


**Values:**

* **AUTO** -Default scanner device configured on device

* **INTERNAL_LASER1** -Internal laser

* **INTERNAL_CAMERA1** -Internal camera

* **INTERNAL_IMAGER1** -Internal imager

###ProfileConfig.ENABLED_STATE

Enable states
 
 

**Example Usage:**
	
	:::java	
	ENABLED_STATE.FALSE;


**Values:**

* **DEFAULT** -Default enable state configured on device

* **FALSE** -Disabled

* **TRUE** -Enabled

###ProfileConfig.ILLUMINATION_MODE

Turns camera illumination on and off. 
 This option is only available when camera is selected in the Barcode input Scanner selection option.
 
 

**Example Usage:**
	
	:::java	
	ILLUMINATION_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default illumination configured on device

* **OFF** -External illumination is always is off

* **ON** -External illumination is always on

###ProfileConfig.LCD_MODE

Enable or disable LCD mode (for Blockbuster imager devices only). 
 LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones.
 
 

**Example Usage:**
	
	:::java	
	LCD_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default LCD mode configured on device

* **DISABLED** -Disables LCD mode

* **ENABLED** -Enables LCD mode.

###ProfileConfig.INVERSE_1D_MODE

This parameter allows the user to select decoding on inverse 1D bar codes.
 
 

**Example Usage:**
	
	:::java	
	INVERSE_1D_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default inverse 1D mode configured on device

* **DISABLED** -Disables decoding of inverse 1D symbologies

* **ENABLED** -Enables decoding of only inverse 1D symbologies.

* **AUTO** -Allows decoding of both positive as well as inverse 1D symbologies.

###ProfileConfig.PREAMBLE

Controls the preamble applied to the bar code
 Preamble characters are part of the UPC symbol consisting of Country Code and System Character.
 Select the appropriate option to match the host system.
 
 

**Example Usage:**
	
	:::java	
	PREAMBLE.DEFAULT;


**Values:**

* **DEFAULT** -Default preamble configured on device

* **NONE** -No preamble

* **SYS_CHAR** -System character preamble

* **COUNTRY_AND_SYS_CHAR** -Both country and system code preamble

###ProfileConfig.ISBT128_CONTACT_MODE

Option for concatenating pairs of ISBT128 code types.
 
 

**Example Usage:**
	
	:::java	
	ISBT128_CONTACT_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default ISBT128 concatenation configured on device

* **NEVER** -Will ignore the barcode pair and only output decode data for only one of the barcodes

* **ALWAYS** -Will not decode if both the barcodes are not present or if one of them cannot be decoded.
 There must be two ISBT codes in order to decode and perform concatenation.

* **AUTO** -Decodes and concatenates pairs of ISBT codes immediately.
 If only a single ISBT symbol is present, the device must decode the symbol the number of times set via DataWedge Configuration 4 - 1 1 
 Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.

###ProfileConfig.SECURITY_LEVEL

The scanner offers four levels of decode security for UPC/EAN bar codes. 
 Select higher security levels for lower quality bar codes. 
 There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application.
 
 

**Example Usage:**
	
	:::java	
	CHECK_DIGIT_TYPE.DEFAULT;


**Values:**

* **DEFAULT** -Default security level configured on device

* **LEVEL_0** -This setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN bar codes (default).

* **LEVEL_1** -As bar code quality levels diminish, certain characters become prone to misdecodes before others (i.e., 1, 2, 7, 8). 
 If the scanner is misdecoding poorly printed bar codes, and the misdecodes are limited to these characters, select this security level.

* **LEVEL_2** -If the scanner is misdecoding poorly printed bar codes, and the misdecodes are not limited to characters 1, 2, 7, and 8, select this security level.

* **LEVEL_3** -If the scanner is still misdecoding, select this security level. 
 Be advised, selecting this option is an extreme measure against misdecoding severely out of spec bar codes.
 Selecting this level of security can significantly impair the decoding ability of the scanner. 
 If this level of security is necessary, try to improve the quality of the bar codes

###ProfileConfig.POWER_MODE

Sets the scanner power mode.
 
 

**Example Usage:**
	
	:::java	
	POWER_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default linear security level configured on device.

* **LOW** -Lowest power, but slowest performance.

* **OPTIMIZED** -Power level adjusts with scanning usage (Defalt).

* **HIGH** -High power, and excellent performance.

* **ALWAYS_ON** -Highest power, fastest performance.

###ProfileConfig.LINEAR_SECURITY_LEVEL

Sets the number of times a bar code is read to confirm an accurate decode.
 
 

**Example Usage:**
	
	:::java	
	LINEAR_SECURITY_LEVEL.DEFAULT;


**Values:**

* **DEFAULT** -Default linear security level configured on device.

* **SHORT_OR_CODABAR** -Two times read redundancy if short bar code or Codabar.

* **ALL_TWICE** -Two times read redundancy for all bar codes (default).

* **LONG_AND_SHORT** -Two times read redundancy for long bar codes, three times for short bar codes.

* **ALL_THRICE** -Three times read redundancy for all bar codes.

###ProfileConfig.CHECK_DIGIT_TYPE

Verify data integrity.
 
 

**Example Usage:**
	
	:::java	
	CHECK_DIGIT_TYPE.DEFAULT;


**Values:**

* **DEFAULT** -Default check digit type configured on device.

* **NO** -A check digit is not used.

* **USS** -Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Uniform Symbology Specification (USS) check digit algorithm.

* **OPCC** -Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Optical Product Code Council (OPCC) check digit algorithm.

###ProfileConfig.CHECK_DIGIT

The number of check digits to be verified.
 With MSI symbols, one check digit is mandatory and always verified by the reader. 
 The second check digit is optional.
 
 

**Example Usage:**
	
	:::java	
	CHECK_DIGIT.DEFAULT;


**Values:**

* **DEFAULT** -Default check digit configured on device.

* **ONE** -Verify one check digit.

* **TWO** -Verify two check digits.

###ProfileConfig.VERIFY_CHECK_DIGIT

Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. 
 This selects the check digit mechanism for the decoded Code 11 bar code.
 
 

**Example Usage:**
	
	:::java	
	VERIFY_CHECK_DIGIT.DEFAULT;


**Values:**

* **DEFAULT** -Default verify check digit scheme configured on device.

* **NO** -Do not verify check digit.

* **ONE** -Bar code contains one check digit.

* **TWO** -Bar code contains two check digits.

###ProfileConfig.CHECK_DIGIT_SCHEME

Two algorithms are possible for the verification of the second MSI check digit.
 Select the algorithm used to encode the check digit.
 
 

**Example Usage:**
	
	:::java	
	CHECK_DIGIT_SCHEME.DEFAULT;


**Values:**

* **DEFAULT** -Default check digit scheme configured on device.

* **MOD_11_10** -First check digit is MOD 11 and second check digit is MOD 10.

* **MOD_10_10** -Both check digits are MOD 10.

###ProfileConfig.UCC_LINK_MODE

Describes the UCC link mode state.
 
 

**Example Usage:**
	
	:::java	
	UCC_LINK_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default UCC link mode configured on device.

* **LINK_FLAG_IGNORED** -1D component is transmitted regardless of whether a 2D component is detected.

* **ALWAYS_LINKED** -1D and the 2D components are transmitted. If 2D is not present, the 1D component is not transmitted.

* **AUTO_DISCRIMINATE** -the digital scanner determines if there is a 2D portion, then transmits the 1D component, as well as the 2D portion if present (default). (default).

###ProfileConfig.PICK_LIST

Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. 
 This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is tar geted for decode.



**Example Usage:**
	
	:::java	
	PICK_LIST.DEFAULT;


**Values:**

* **DEFAULT** -Default pick list configured on device

* **DISABLED** -Disables Picklist mode. 
 Any bar code within the field of view can be decoded.

* **ENABLED** -Enables the Picklist mode so that only the bar code that is directly under the cross-hair (reticle) is decoded. 
 This is useful when used in conjunction with the static and dynamic reticle viewfinder modes. (Scan Module Only)

* **CENTERED** -Enables the Picklist mode so that only the bar code in the center of the image is decoded.
 This is most useful when used in conjunction with the static and dynamic reticle viewfinder modes.
 Note: This mode is only valid for decoder modules that supports a viewfinder.
 If one tries to set this for a unsupported decoder then the device would issue an error. (Camera scanner only)

###ProfileConfig.CODE_ID_TYPE

A Code ID character identifies the code type of a scanned bar code.
 This is useful when the reader is decoding more than one code type.
 Select a code ID character to insert between the prefix and the decoded symbol.
 
 

**Example Usage:**
	
	:::java	
	CODE_ID_TYPE.DEFAULT;


**Values:**

* **DEFAULT** -Default prefix configured on device

* **NONE** -No prefix.

* **AIM** -A standards based three character prefix.

* **SYMBOL** -A Symbol defined single character prefix.

###ProfileConfig.VOLUME_SLIDER_TYPE

Defines the notification type for a good decode.
 
 

**Example Usage:**
	
	:::java	
	VOLUME_SLIDER_TYPE.DEFAULT;


**Values:**

* **DEFAULT** -Default prefix configured on device

* **RINGER_AND_NOTIFICATIONS** -Ringer and Notifications.

* **MUSIC_AND_MEDIA** -Music and Media.

* **ALARM** -Alarms.

###ProfileConfig.SUPPLEMENTAL_MODE

Supplemental modes
 
 

**Example Usage:**
	
	:::java	
	SUPPLEMENTAL_MODE.DEFAULT;


**Values:**

* **DEFAULT** -Default supplemental mode configured on device

* **NO** -The scanner is presented with a UPC/EAN plus supplemental symbol, the scanner decodes UPC/EAN and ignores the supplemental characters.

* **ALWAYS** -The scanner only decodes UPC/EAN symbols with supplemental characters, and ignores symbols without supplementals.

* **AUTO** -The scanner decodes UPC/EAN symbols with supplemental characters immediately . If the symbol does not have a supplemental, 
 the scanner must decode the bar code the number of times set via UPC/EAN Supplemental Redundancy before transmitting its data 
 to confirm that there is no supplemental.

* **SMART** -Enables smart supplementals. 
 In this mode the decoder returns the decoded value of the main block right away if it does not belong to one of the following supplemental types: 378, 379, 977, 978, 979, 414, 419, 434 or 439. 
 If the bar code starts with one of the prefixes it searches the image more aggressively for a supplemental. 
 Tries to scan the supplemental if it is present. 
 If the supplemental scanning failed, then the main bar code is returned.

* **S_378_379** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 378 or 379. 
 Disables reading of supplementals for any other UPC/EAN bar code not starting with 378 or 379. 
 Tries to scan the supplemental if it is present. 
 If the supplemental scanning failed, then the main bar code is returned.

* **S_978_979** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 978 or 979. 
 Disables reading of supplementals for another UPC/EAN bar code not starting with 978 or 979. 
 Tries to scan the supplemental if it is present. 
 If the supplemental scanning failed, then the main bar code is returned.

* **S_414_419_434_439** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 414, 419, 434 or 439. 
 Disables reading of supplementals for another UPC/EAN bar code 4 - 16 not starting with 414, 419, 434 or 439. 
 Tries to scan the supplemental if it is present. 
 If the supplemental scanning failed, then the main bar code is returned.

* **S_977** -Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 977. 
 Disables reading of supplementals for another UPC/EAN barcode not starting with 977. 
 Tries to scan the supplemental if it is present. 
 If the supplemental scanning failed, then the main bar code is returned.

###ProfileConfig.COUPON_REPORT

Supported Coupon modes 
 
 

**Example Usage:**
	
	:::java	
	COUPON_REPORT.DEFAULT;


**Values:**

* **DEFAULT** -Default coupon reports mode configured on device

* **OLD** -Scanner will read only the old coupon format

* **NEW** -Scanner will read only the new GS1 DataBar coupon format

* **BOTH** -Scanner will read both old coupon format as well as the new GS1 DataBar coupon format

###ProfileConfig.BOOKLAND_FORMAT

Lists the Bookland formats
 
 

**Example Usage:**
	
	:::java	
	BOOKLAND_FORMAT.DEFAULT;


**Values:**

* **DEFAULT** -Default bookland format configured on device

* **ISBN_10** -978 reported in 10 digit mode

* **ISBN_13** -978/979 transmitted as EAN13 as per 2007 ISBN-13 protocol

###ProfileConfig.VIEWFINDER_MODE

Configures the Viewfinder modes supported for camera scanning.
 
 

**Example Usage:**
	
	:::java	
	VIEWFINDER_MODE.ENABLED;


**Values:**

* **DEFAULT** -Default view finder mode configured on the device

* **DISABLED** -Viewfinder disabled. Viewfinder is not displayed during aiming or scanning.

* **ENABLED** -Viewfinder enabled. Displays the images captured by the camera on the screen.

* **STATIC_RECTICLE** -Viewfinder enabled with locate reticle.
 Displays the viewfinder as well as draws a red reticle in the center of the screen which helps with tracking the barcode.

###ProfileConfig.INTENT_DELIVERY

Allows configuration of the Intent Output Plug-in for the profile. 
 The Intent Output Plug-in allows the captured data to be sent to an application in the form of an implicit Intent.
 
 

**Example Usage:**
	
	:::java	
	INTENT_DELIVERY.SEND_VIA_STARTACTIVITY;


**Values:**

* **DEFAULT** -Default intent delivery type configured on the device

* **SEND_VIA_STARTACTIVITY** -Send output via StartActivity.

* **SEND_VIA_STARTSERVICE** -Send output via startService.

* **BROADCAST_INTENT** -Send output via Broadcast intent.

###ProfileConfig.ACTION_KEY_CHAR

Keystroke Output Action key character enables decoding of a special character embedded within a bar code or MSR data for use in native Android applications. 
 This feature is helpful when populating or executing a form.
 
 

**Example Usage:**
	
	:::java	
	ACTION_KEY_CHAR.NONE;


**Values:**

* **DEFAULT** -Default action key character configured on the device

* **NONE** -Action key character feature is disabled.

* **TAB** -Tab character code in a bar code is processed. 
 When DataWedge detects this character code in a bar code, move the focus to the next field.

* **LINEFEED** -Line feed character code in a bar code is processed. 
 When DataWedge detects this character code in a bar code, move the focus to the next field.

* **CARRIAGERETURN** -Carriage return character code in a bar code is processed. 
 When DataWedge detects this character code in a bar code, move the focus to the next field.

###ProfileConfig.AIM_TYPE

Describes the type of aiming to use. 
  
 

**Example Usage:**
	
	:::java	
	AIM_TYPE.CONTINUOUS_READ;


**Values:**

* **DEFAULT** -Default AIM_TYPE configured on the device

* **TRIGGER** -Standard Trigger Mode

* **CONTINUOUS_READ** -In this mode once the trigger is pulled the user can continue scanning barcodes without releasing the trigger. This mode is useful when the user wants to perform rapid scanning.

