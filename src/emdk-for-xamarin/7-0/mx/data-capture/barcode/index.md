---
title: Barcode Profile Feature Reference
layout: guide.html
product: EMDK For Xamarin
productversion: '7.0'
---

## Overview
In order to get Barcode data in your application, you must create a profile with two profile features selected:

* Barcode
* [Keystroke](../keystroke),[Intent](../intent),[IP](../IP) (Output)

The `Barcode` feature in the Profile Manager is responsible for reading data from the device's integrated bar code scanner and supports different types of bar code readers including laser, imager and internal camera. It also contains detailed parameters for scanner behavior as well as individual barcode symbology parameters.

The `Intent`, `Keystroke` or `IP` feature in the Profile Manager is used to define how the output from the Barcode scanner should be handled

* Intent - The Intent feature, in the Profile Manager, collects and sends data received from the Barcode scanner to your application using the Android Intent mechanism. To use this, you should be familiar with how to register to receive intents in your application as well as handling the data that is passed in. You will have the ability to configure how the intent is sent to your application in the profile itself.

* Keystroke - The Keystroke feature, in the Profile Manager, collects and sends data received from the Barcode scanner to your application by emulating keystrokes. You will have the option to control how the data is sent as well as if it should have any prefix or suffix automatically added using basic data formatting.

* IP - IP Output allows DataWedge to send captured data to a host computer via a network connection. Captured data can be sent over an IP network to a specified IP address and port using either TCP or UDP transport protocols.

## Name
The name field is used by the EMDK to identify this particular feature parameter set when you want to manage just part of the profile programmatically using the EMDK ProfileManager API. This can be useful if you have multiple types of the same feature and want to update only one of them without having to update the whole profile. 

## Enabled
Enables or disables this feature. Default is enabled.

## Scanner Selection
Configures which scanning device to use for data capture.

* Auto - Automatically determines the best scanning device. If a Scan Module or Scan/MSR Module is installed on the MC40, then the 2D imager is selected. Otherwise the camera is selected.
* Internal Laser 1 - Scanning is performed using the internal 1D laser scanner.
* Internal Imager 1 - Scanning is performed using the internal 2D scanner or MSR module.
* Internal Camera 1 - Scanning is performed with the rear-facing camera.
* Pluggable Laser 1 - Scanning is performed using an external 1D laser scanner plugged into the device.
* Bluetooth Imager 1 - Scanning is performed using an external 2D scanner connected via BlueTooth.
* RS5000 Pluggable Imager - Scanning is performed using a Pluggable RS5000 Scanner.
* RS6000 Bluetooth Imager - Scanning is performed using a RS6000 over Bluetooth.

The following Bluetooth scanners are supported: 

* **Zebra RS507** Cordless Ring Scanner
* **RS6000 Bluetooth Ring Scanner** (when used with WT6000 only)  

Bluetooth scanners are supported according to the following rules:

* **To initially configure the RS507** in a Profile, the scanner must be paired and connected.
* **After initial configuration**, the Bluetooth scanner can be enabled and disabled in the Profile even if it is disconnected from the device. However, to configure reader parameters, decoders and other scanner settings, the Bluetooth scanner must be connected.
* **The device will not automatically reconnect** to a Bluetooth scanner if that scanner is connected while it is using a different auto-selected scanner. To re-enable a Bluetooth scanner, connect the scanner and select it in the Profile or re-choose the Auto select option.
* **Auto-selection and Battery Swap -** If Scanner selection is set to Auto and the RS507 was enabled prior to a battery swap, DataWedge will continue working with that RS507 scanner upon reconnection after the battery is swapped. If the RS507 does not reconnect with after the swap, DataCapture will revert to the current default scanner.

## Keep Enabled on Suspend 
This mode is supported on Bluetooth and pluggable scanners only, and might result in faster battery drain than would otherwise be expected while in suspend mode. 

**Note: The Zebra computing device will wake from suspend mode when the RS507 scan trigger is pressed**.

## Decoders
Configures which bar code decoders are enabled or disabled. For best performance disable all unnecessary decoders. By default the most commonly used decoders are enabled (shown below with an asterisk). The supported decoders are:

* Australian Postal
* Aztec
* Canadian Postal
* Chinese 2 of 5
* Codabar*
* Code 11
* Code 39*
* Code 93
* Code 128*
* Composite AB
* Composite C
* Datamatrix*
* Discrete 2 of 5
* Dutch Postal
* EAN-8*
* EAN-13*
* GS1 DataBar*
* GS1 DataBar Expanded*
* GS1 DataBar Limited
* HAN XIN
* Japanese Postal
* Korean 3 of 5
* Interleaved 2 of 5
* Matrix 2 of 5
* Maxicode*
* MAIL MARK
* MicroPDF
* MicroQR
* MSI
* PDF417*
* QR Code*
* Signature
* TLC 39
* Trioptic 39
* UK Postal
* UPC-A*
* UPC-E0*
* UPC-E1
* US4State
* US4state FICS
* USPostnet
* USPlanet
* Webcode

## UPCA
* Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option.
* Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCA preamble:
	* Preamble None - Transmit no preamble.
	* Preamble Sys Char - Transmit System Character only (default).
	* Preamble Country and Sys Char - Transmit System Character and Country Code ("0" for USA). Select the appropriate option to match the host system.

## UPCE0
* Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option.
* Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE0 preamble:
	* Preamble Sys Char - Transmit System Character only.
	* Preamble Country and Sys Char - Transmit System Character and Country Code ("0" for USA).
	* Preamble None - Transmit no preamble (default). Select the appropriate option to match the host system.
* Convert UPCE0 To UPCA - Enable to convert UPCE0 (zero suppressed) decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable to transmit UPCE0 decoded data as UPCE0 data, without conversion (default - disabled).

## Code128
* Length1 - Use to set decode lengths (default - 0).
* Length2 - Use to set decode lengths (default - 55).
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Enable Plain Code 128 - Flag to enable other 128 sub types (besides GS1-128 and ISBT-128).
* Enable GS1-128 - Set the GS1 128 subtype.
* Enable ISBT128 - Set the ISBT128 subtype.
* ISBT128 Concatenation Mode - Select an option for concatenating pairs of ISBT code types:
	* Concat Mode Never - Do not concatenate pairs of ISBT codes encountered (default).
	* Concat Mode Always - There must be two ISBT codes in order to decode and perform concatenation. Does not decode single ISBT symbols.
	* Concat Mode Auto - Decodes and concatenates pairs of ISBT codes immediately. If only a single ISBT symbol is present, the device must decode the symbol the number of times set via Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.
* Check ISBT Table - The ISBT specification includes a table that lists several types of ISBT bar codes that are commonly used in pairs. If ISBT128 Concat Mode is set, enable Check ISBT Table to concatenate only those pairs found in this table. Other types of ISBT codes are not concatenated.
* Security Level - The scanner offers four levels of decode security for Code 128 bar codes. Select increasing levels of security for decreasing levels of bar code quality. There is an inverse relationship between security and scanner aggressiveness, so choose only that level of security necessary for any given application.
	* Security Level 0 - This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most "in-spec" bar codes.
	* Security Level 1 - This setting eliminates most misdecodes.
	* Security Level 2 - Select this option if Security level 1 fails to eliminate misdecodes.
	* Security Level 3 - If Security Level 2 is selected and misdecodes still occur, select this security level. Be advised, selecting this option is an extreme measure against mis-decoding severely out of spec bar codes. Selecting this level of security significantly impairs the decoding ability of the scanner. If this level of security is needed, try to improve the quality of the bar codes.
* Code128 Reduced Quiet Zone - 	Code128 Reduced Quiet Zone
* Ignore Code128 FNC4 - Ignore Code128 FNC4


## Code39
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths 4.
* Verify Check Digit - Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. Enable this feature only if the Code 39 symbols contain a modulo 43 check digit (default - disabled).
* Report Check Digit - Transmit Code 39 data with or without the check digit.
* Full ASCII - Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set. To enable or disable Code 39 Full ASCII,
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Convert Code39 To Code32 - Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry. Scan the appropriate bar code below to enable or disable converting Code 39 to Code 32.
* Report Code32 Prefix - Scan the appropriate bar code to enable or disable adding the prefix character "A" to all Code 32 bar codes.
* Security Level - Options: Security level 0, Security Level 1, Security Level 2 and Security Level 3.
* Code39 Reduced Quite Zone - Code39 Reduced Quiet Zone

## Interleaved 2of5
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Check Digit
	* No Check Digit - A check digit is not used.
	* USS Check Digit - Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Uniform Symbology Specification (USS) check digit algorithm.
	* OPCC Check Digit - Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Optical Product Code Council (OPCC) check digit algorithm.
* Report Check Digit - Transmit Interleaved 2 of 5 data with or without the check digit.
* Convert ITF-14 To EAN13 - Convert 14-character Interleaved 2 of 5 bar codes to EAN-13, and transmit as EAN-13. The Interleaved 2 of 5 bar code must be enabled and must have a leading zero and a valid EAN-13 check digit.
* Security Level - The scanner offers four levels of decode security. Select increasing levels of security for decreasing levels of barcode quality.
* I2of5 Reduced Quiet Zone - I2of5 Reduced Quiet Zone

##GS1 Data Bar Limited
* Security Level - The scanner offers four levels of decode security. Select increasing levels of security for decreasing levels of barcode quality.


## Composite AB
* UCC Link Mode
	* Link Flag ignored - 1D component is transmitted regardless of whether a 2D component is detected.
	* Always Linked - 1D and the 2D components are transmitted. If 2D is not present, the 1D component is not transmitted.
	* Auto Discriminate - the digital scanner determines if there is a 2D portion, then transmits the 1D component, as well as the 2D portion if present. (default).

## US Postnet
* Report Check Digit - Transmits US Postnet data with or without the check digit

## US Planet
* Report Check Digit - Transmits US Planet data with or without the check digit

## UK Postal
* Report Check Digit - Transmit UK Postal data with or without the check digit

## Codabar
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* CLSI Editing - Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. Enable this feature if the host system requires this data format.
* NOTIS Editing - Enable this parameter to strip the start and stop characters from a decoded Codabar symbol. Enable this feature if the host system requires this data format.

## MSI
* Length 1 - Use to set decode lengths.
* Length 2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Check Digit - With MSI symbols, one check digit is mandatory and always verified by the reader. The second check digit is optional.
	* One Check Digit - Verify one check digit.
	* Two Check Digits - Verify two check digits.
* Check Digit Scheme - Two algorithms are possible for the verification of the second MSI check digit.
Select the algorithm used to encode the check digit.
	* Mod-11-10 - First check digit is MOD 11 and second check digit is MOD 10.
	* Mod-10-10 - Both check digits are MOD 10.
* Report Check Digit - Transmit MSI data with or without the check digit.

## Code93
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.

## Discrete 2 of 5
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.

## Code11
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Verify Check Digit - Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 bar code.
	* No Check Digit - Do not verify check digit.
	* 1 Check Digit - Bar code contains one check digit.
	* 2 Check Digits - bar code contains two check digits.
* Report Check DIgit - Transmit Code 11 data with or without the check digit.

## HAN XIN
* HAN XIN Inverse - HAN XIN Inverse

##Matrix 2 of 5
* Length1 - Use to set decode lengths.
* Length2 - Use to set decode lengths.
* Redundancy - Sets the reader to read the bar code twice before accepting data.
* Report Check Digit - Transmit Matrix 2 of 5 data with or without the check digit.
* Verify Check Digit - Enable this feature to check the integrity of all Matrix 2 of 5 symbols to verify that the data complies with a specified check digit algorithm.

## UPCE1
* Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option.
* Preamble - Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE1 preamble:
	* Preamble Sys Char - Transmit System Character only.
	* Preamble Country and Sys Char - Transmit System Character and Country Code ("0" for USA).
	* Preamble None - Transmit no preamble (default). Select the appropriate option to match the host system.
* Convert UPCE1 To UPCA - Enable this to convert UPCE1 decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable this to transmit UPCE1 decoded data as UPCE1 data, without conversion.

-----

## Decode Lengths

The allowable decode lengths are specified by options Length1 and Length2 as follows:

* **Variable length -** Decode symbols containing any number of characters.
	* Set both Length1 and Length2 to 0.
* **Range -** Decode a symbol with a specific length range (from a to b, including a and b).
	* Set Length1 to a and set Length2 to b.
* **Two Discrete Lengths -** Decode only symbols containing either of two selected lengths.
	* Set either Length1 or Length2 to the specific lengths.
* **One Discrete Length -** Decode only symbols containing a specific length.
	* Set both Length1 and Length2 to the specific length.

-----

## UPC EAN Params

Allows the configuration of the parameters that apply to more than one UPC or EAN decoder.

* **Security Level -** The scanner offers four levels of decode security for UPC/EAN bar codes. Select higher security levels for lower quality bar codes. There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application.

	* **Level 0 -** This default setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN bar codes.
	
	* **Level 1 -** As bar code quality levels diminish, certain characters become prone to misdecodes before others (i.e., 1, 2, 7, 8). If the scanner is misdecoding poorly printed bar codes, and the misdecodes are limited to these characters, select this security level.
	
	* **Level 2 -** If the scanner is misdecoding poorly printed bar codes, and the misdecodes are not limited to characters 1, 2, 7, and 8, select this security level.
	
	* **Level 3 -** If the scanner is still misdecoding, select this security level. Be advised, selecting this option is an extreme measure against misdecoding severely out of spec bar codes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is necessary, try to improve the quality of the bar codes.

* **Supplemental2 -** Enables or disables this option.

* **Supplemental5 -** Enables or disables this option.

* **Supplemental Mode**:
	* **No Supplementals -** the scanner is presented with a UPC/EAN plus supplemental symbol, the
	scanner decodes UPC/EAN and ignores the supplemental characters.
	* **Supplemental Always -** the scanner only decodes UPC/EAN symbols with supplemental characters, and ignores symbols without supplementals.
	* **Supplements Auto -** the scanner decodes UPC/EAN symbols with supplemental characters immediately. If the symbol does not have a supplemental, the scanner must decode the bar code the number of times set via UPC/EAN Supplemental Redundancy before transmitting its data to confirm that there is no supplemental.
	* **Supplemental Smart -** Enables smart supplementals. In this mode the decoder returns the decoded value of the main block right away if it does not belong to one of the following supplemental types: 378, 379, 977, 978, 979, 414, 419, 434 or 439. If the bar code starts with one of the prefixes it searches the image more aggressively for a supplemental. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.
	* **Supplemental 378-379 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 378 or 379. Disables reading of supplementals for any other UPC/EAN bar code not starting with 378 or 379. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.
	* **Supplemental 978-979 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 978 or 979. Disables reading of supplementals for another UPC/EAN bar code not starting with 978 or 979. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main barcode is returned.
	* **Supplemental 414-419-434-439 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 414, 419, 434 or 439. Disables reading of supplementals for another UPC/EAN bar code not starting with 414, 419, 434 or 439. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.
	* **Supplemental 977 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 977. Disables reading of supplementals for another UPC/EAN barcode not starting with 977. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.
* **Retry Count -** Retry count for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive. Note that this flag is only considered if Supplemental Mode - UPC EAN is set to one of the following values: Supplementals Auto, Supplementals Smart, Supplementals 378-379, Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20).

* **Random Weight Check Digit -** Enable random weight check digit verification.

* **Bookland -** Enable or disable this option.

* **Coupon -** Enables Coupon code decoding. Note that in order to successfully decode Coupon codes, all
of the correct decoders must be enabled.

* **Coupon Report Mode -** Enables one of the coupon report modes
	* Old Coupon Report Mode
	* New Coupon Report Mode
	* Both Coupon Report Mode

* **EAN Zero Extend -** Enable this parameter to add five leading zeros to decoded EAN-8 symbols to make them compatible in format to EAN-13 symbols. Disable this to transmit EAN-8 symbols as is.

* **Bookland Format -** if Bookland option is enabled, select on of the formats for Bookland data
	* Format ISBN-10
	* Format ISBN-13

* **Convert DataBar To UPC EAN -** If this is set it converts DataBar bar codes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled.

* **UPC Reduced Quiet Zone -** Enable decoding of marginless UPC barcodes

-----

## Reader Params

Allows the configuration of parameters specific to the selected bar code reader.

* **Beam Timer -** Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.
* **Adaptive Scanning -** Enable/Disable Adaptive Scanning

* **Beam Width -** Set Beam Width
	* Narrow
	* Normal
	* Wide

* **Power Mode -** Set scanner power mode
	* Low Power Mode
	* Optimized Power Mode
	* High Power Mode
	* Always On

* **Mobile Phone Display Mode -** Defines finer reader by the DS457
	* Disable Mobile Display Mode
	* Enable Mobile Display Mode

* **Reader Mode -** Defines how the SSI scanner triggers
	* Presentation Mode
	* Triggered Mode

* **Linear Security Level -** Sets the number of times a bar code is read to confirm an accurate decode.
	* Security Redundancy and Length - Two times read redundancy based on redundancy flags and
	code length.
	* Security Short or Codabar - Two times read redundancy if short bar code or Codabar.
	* Security All Twice - Two times read redundancy for all bar codes.
	* Security Long and Short - Two times read redundancy for long bar codes, three times for short bar codes.
	* Security All Thrice - Three times read redundancy for all bar codes.

* **Picklist -** Allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. This feature is useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is targeted for decode.
	* Disable - Disables Picklist mode. Any bar code within the field of view can be decoded.
	* Centered - Enables the Picklist mode so that only the bar code in the center of the image is decoded. This is most useful when used in conjunction with the static and dynamic reticle viewfinder modes. Note: This mode is only valid for decoder modules that supports a viewfinder. If one tries to set this for a unsupported decoder then the device would issue an error. (Camera scanner only).
	* Reticle - Enables the Picklist mode so that only the bar code that is directly under the cross-hair (reticle) is decoded. This is useful when used in conjunction with the static and dynamic reticle viewfinder modes. (Scan Module Only)

* **Aim Type -** Type Trigger Modes
	* Trigger
	* Continuous Read
	* PRESS_AND_SUSTAIN (select devices only)

* **Same Symbol Timeout -** Suppress decoding same symbol within this time interval in Continuous Trigger Mode. From 0 to 5000, Steps of 500. Eg: 0, 500, 1000, 1500...

* **Different Symbol Timeout -** Suppress decoding another symbol within this time interval in Continuous Trigger Mode. From 0 to 5000, Steps of 500. Eg: 0, 500, 1000, 1500...

* **Illumination mode -** Enable/Disable illumination depending on ambient light conditions

* **LCD Mode -** Enables or disables LCD mode. LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones (Scan Module Only).
	* Disable - Disables the LCD mode.
	* Enable - Enables LCD mode.

** Note**: When using the LCD mode**, a degradation in performance may be observed and the aiming crosshair may blink until the bar code is decoded.

* **Time Delay to Low Power -** Time delay for scanner to enter low power mode
	* 1 Second
	* 30 Seconds
	* 1 Minute
	* 5 Minutes

* **Illumination Brightness Value -** Illumination Brightness of the Imager

* **Inverse 1D Mode -** This parameter allows the user to select decoding on inverse 1D bar codes.
	* Disable - Disables decoding of inverse 1D bar codes.
	* Enable - Enables decoding of only inverse 1D bar codes.
	* Auto - Allows decoding of both positive and inverse 1D bar codes.

* **Poor Quality Decode Effort -**
	* Level 0
	* Level 1
	* Level 2
	* Level 3

* **Viewfinder Mode -** Configures the Viewfinder modes supported for camera scanning.
	* Viewfinder Enabled - Enables only the viewfinder.
	* Static Reticle - Enables the viewfinder and a red reticle in the center of the screen which helps selecting the bar code.

-----

## Scan Params

Allows the configuration of Code Id and decode feedback options.

* **Code ID Type -** A Code ID character identifies the code type of a scanned bar code. This is useful when the reader is decoding more than one code type. Select a code ID character to insert between the prefix and the decoded symbol.
	* Code ID Type None - No prefix (default).
	* Code ID Type Aim - A standards based three character prefix.
	* Code ID Type Symbol - A Symbol defined single character prefix.

**Note: Not all ringtones are fully supported as decode tones**. Ringtones of longer length may be truncated when used as a decode tone. The recommendation is to test the selected tone for operation before deployment to a customer site.

* **Volume Type -**
	* Ringer
	* Music and Media
	* Alarms
	* Notification

* **Decode Audio Feedback -** Select an audio tone to sound upon a good decode.
	* The audio tones stored as Application’s private data (i.e. cache, asset) should not be specified for this field to avoid access violation. Therefore any audio tones meant for this purpose must be stored under shared public directories (Music/ , Ringtones/) or shared “external storage”.

* **Decode Haptic Feedback -** Enable the MC40 to vibrate upon a good decode.

* **BT Disconnect On Exit -** Enable/Disable Bluetooth disconnect on exit.

* **Connection Idle Time -** If a bluetooth scanner associated application is opened, Bluetooth scanner will be automatically disconnected after this Connection Time duration of inactivity. From 60 to 1800, Steps of 5. Eg: 60, 65, 70, 75...

* **Decode Feedback LED Timer -** Time for which Good Decode LED Notification Runs

* **Display BT Address Barcode -** If this value is set to true, the Bluetooth Pairing Utility Application will be opened when the enable method is called

* **Decoding LED Notification -** Time for which Good Decode LED Notification Runs

* **Engine Decode LED -** Controls Engines' decode LED behavior
	* Disabled
	* Off on power down
	* Power down only after LED off

-----

## Output Data
In order for your application to receive the barcode data, you must specify one or more Output features. Please  refer to their reference documentation for more information.

* [Intent](../intent)
* [Keystroke](../keystroke)
* [IP](../IP)














