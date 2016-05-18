---
title: DataWedge Decoders
layout: guide.html
product: DataWedge
productversion: '3.1'
---

## Decoders

Intro to decoders. 

Configures which bar code decoders are enabled or disabled. For best performance disable all unnecessary decoders.

Touch Decoders. The Barcode input screen appears. A check in the checkbox indicates that the decoder is enabled. By default the most commonly used decoders are enabled (shown below with an asterisk). The supported decoders are:
<h4 id="_decoders">Decoders</h4>
<div class="paragraph"><p>Configures which bar code decoders are enabled or disabled. For best performance disable all unnecessary
decoders.</p></div>
<div class="paragraph"><p>Touch <strong>Decoders</strong>. The <strong>Barcode input</strong> screen appears. A check in the checkbox indicates that the decoder is
enabled. By default the most commonly used decoders are enabled (shown below with an asterisk). The
supported decoders are:</p></div>

### Decoders
DataWedge decodes all major barcode symbologies. Popular formats are enabled by default (*). To help improve scanning performance, individual symbologies can be enabled and disabled as needed for a specific app or usage profile. To modify decoder parameters, see Decoder Paramaters section following table. 

<div class="tableblock">
<table rules="none"
width="100%"
frame="void"
cellspacing="0" cellpadding="4">

<col width="33%" />
<col width="33%" />
<col width="33%" />
<tbody>
<tr>
<td align="left" valign="top"><p class="table">UPC-E0<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">UPC-E1</p></td>
<td align="left" valign="top"><p class="table">UPC-A<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MSI</p></td>
<td align="left" valign="top"><p class="table">EAN-8<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">EAN-13<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Codabar<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Code 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Discrete 2 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Interleaved 2 of 5</p></td>
<td align="left" valign="top"><p class="table">Code 11</p></td>
<td align="left" valign="top"><p class="table">Code 93</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Code 128<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">PDF417<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Trioptic 39</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">MicroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacroPDF<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Maxicode<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Datamatrix<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">QR Code<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MacromicroPDF<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">GS1 DataBar</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Limited</p></td>
<td align="left" valign="top"><p class="table">GS1 DataBar Expanded</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Composite AB<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">Webcode</p></td>
<td align="left" valign="top"><p class="table">Composite C<sup>*</sup></p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">TLC 39<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">USPostnet</p></td>
<td align="left" valign="top"><p class="table">USPlanet</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">UK Postal</p></td>
<td align="left" valign="top"><p class="table">Japanese Postal</p></td>
<td align="left" valign="top"><p class="table">Australian Postal</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Canadian Postal</p></td>
<td align="left" valign="top"><p class="table">Dutch Postal</p></td>
<td align="left" valign="top"><p class="table">Chinese 2 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">Aztec<sup>*</sup></p></td>
<td align="left" valign="top"><p class="table">MicroQR</p></td>
<td align="left" valign="top"><p class="table">Korean 3 of 5</p></td>
</tr>
<tr>
<td align="left" valign="top"><p class="table">US4state</p></td>
<td align="left" valign="top"><p class="table">US4state FICS</p></td>
<td align="left" valign="top"><p class="table">Matrix 2 of 5</p></td>
</tr>
</tbody>
</table>
</div>
&#42; _Enabled by default_

### Decoder Params

Use Decode Params to configure individual decoder parameters. Touch Decode Params. The Decode params screen appears. Touch the decoder parameter to modify.

------

### UPCE0

Report Check Digit - The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE0 preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

**Convert UPCE0 To UPCA -** Enable to convert UPCE0 (zero suppressed) decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable to transmit UPCE0 decoded data as UPCE0 data, without conversion (default - disabled).

------

### UPCE1

**Report Check Digit -** The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCE1 preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

**Convert UPCE1 To UPCA -** Enable this to convert UPCE1 decoded data to UPC-A format before transmission. After conversion, the data follows UPC-A format and is affected by UPC-A programming selections. Disable this to transmit UPCE1 decoded data as UPCE1 data, without conversion.

------

### UPCA

**Report Check Digit -** The check digit is the last character of the symbol used to verify the integrity of the data. Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Preamble -** Preamble characters are part of the UPC symbol consisting of Country Code and System Character. There are three options for transmitting a UPCA preamble:

**Preamble Sys Char -** Transmit System Character only.

**Preamble Country and Sys Char -** Transmit System Character and Country Code ("0" for USA).

**Preamble None -** Transmit no preamble.

Select the appropriate option to match the host system.

------

### MSI

**Length 1 [endnote1] -** To decode a MSI symbol with a specific length range set this value to the lower limit. For example, to decode MSI symbols containing between 4 and 12 characters, set this value to 4.

**Length 2 [endnote1] -** To decode a MSI symbol with a specific length range set this value to the upper limit. For example, to decode MSI symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

**Check Digit -** With MSI symbols, one check digit is mandatory and always verified by the reader. The second check digit is optional.

**One Check Digit -** Verify one check digit.

**Two Check Digits -** Verify two check digits.

**Check Digit Scheme -** Two algorithms are possible for the verification of the second MSI check digit. Select the algorithm used to encode the check digit.

**Mod-11-10 -** First check digit is MOD 11 and second check digit is MOD 10.

**Mod-10-10 -** Both check digits are MOD 10.

**Report Check Digit -** Transmit MSI data with or without the check digit. A check in the checkbox indicates to send MSI data with check digit.

------

### EAN8

**Convert EAN8 To EAN13 -** Convert EAN8 data to EAN 13. A check in the checkbox indicates that the option is enabled.

------

### Codabar

**Length1 [endnote1] -** To decode a Codabar symbol with a specific length range set this value to the lower limit. For example, to decode Codabar symbols containing between 8 and 24 characters, set this value to 8..

**Length2 [endnote1] -** To decode a Codabar symbol with a specific length range set this value to the upper limit. For example, to decode Codabar symbols containing between 8 and 24 characters, set this value to 24.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

**Clsi Editing -** Enable this parameter to strip the start and stop characters and insert a space after the first, fifth, and tenth characters of a 14-character Codabar symbol. Enable this feature if the host system requires this data format.

**Notis Editing -** Enable this parameter to strip the start and stop characters from a decoded Codabar symbol. Enable this feature if the host system requires this data format.

------

### Code39

**Length1 [endnote1] -** To decode a Code 39 symbol with a specific length range set this value to the lower limit. For example, to decode Code 39 symbols containing between 8 and 24 characters, set this value to 8.

**Length2 [endnote1] -** To decode a Code 39 symbol with a specific length range set this value to the upper limit. For example, to decode Code 39 symbols containing between 8 and 24 characters, set this value to 24.

**Verify Check Digit -** Enable this feature to check the integrity of all Code 39 symbols to verify that the data complies with a specified check digit algorithm. The digital scanner decodes only those Code 39 symbols that include a modulo 43 check digit. Enable this feature only if the Code 39 symbols contain a modulo 43 check digit.

**Report Check Digit -** Transmit Code 39 data with or without the check digit. A check in the checkbox indicates to send Code 39 data with check digit.

**Full Ascii -** Code 39 Full ASCII is a variant of Code 39 that pairs characters to encode the full ASCII character set. To enable or disable Code 39 Full ASCII.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

**Convert Code39 To Code32 -** Code 32 is a variant of Code 39 used by the Italian pharmaceutical industry. Scan the appropriate bar code below to enable or disable converting Code 39 to Code 32.

**Report Code32 Prefix -** Scan the appropriate bar code to enable or disable adding the prefix character "A" to all Code 32 bar codes.

**Security Level -** Options: Security level 0, Security Level 1, Security Level 2 and Security Level 3.

### Discrete 2 of 5

**Length1 [endnote1] -** To decode a Discrete 2 of 5 symbol with a specific length range set this value to the lower limit. For example, to decode Discrete 2 of 5 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode a Discrete 2 of 5 symbol with a specific length range set this value to the upper limit. For example, to decode Discrete 2 of 5 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

------

### Interleaved 2 of 5

**Length1 [endnote1] -** To decode an Interleaved 2 of 5 symbol with a specific length range set this value to the lower limit. For example, to decode Interleaved 2 of 5 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode an Interleaved 2 of 5 symbol with a specific length range set this value to the upper limit. For example, to decode Interleaved 2 of 5 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

------

### Check Digit

**No Check Digit -** A check digit is not used..

**USS Check Digit -** Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Uniform Symbology Specification (USS) check digit algorithm.

**OPCC Check Digit -** Select to check the integrity of all Interleaved 2 of 5 symbols to verify the data complies with either the Optical Product Code Council (OPCC) check digit algorithm.

**Report Check Digit -** Transmit Interleaved 2 of 5 data with or without the check digit. A check in the checkbox indicates to send I2of5 data with check digit.

**Convert ITF-14 To EAN13 -** Convert 14-character Interleaved 2 of 5 bar codes to EAN-13, and transmit as EAN-13. The Interleaved 2 of 5 bar code must be enabled and must have a leading zero and a valid EAN-13 check digit. A check in the checkbox indicates that the option is enabled.

------

### Code11

**Length1 [endnote1] -** To decode a Code 11 symbol with a specific length range set this value to the lower limit. For example, to decode Code 11 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode a Code 11 symbol with a specific length range set this value to the upper limit. For example, to decode Code 11 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

**Verify Check Digit -** Check the integrity of all Code 11 symbols to verify that the data complies with the specified check digit algorithm. This selects the check digit mechanism for the decoded Code 11 bar code.

**No Check Digit -** Do not verify check digit.

**One Check Digit -** Bar code contains one check digit.

**Two Check Digits -** bar code contains two check digits.

**Report Check Digit -** Transmit Code 11 data with or without the check digit. A check in the checkbox indicates to send Code 11 data with check digit.

### Code93

**Length1 [endnote1] -** To decode a Code 93 symbol with a specific length range set this value to the lower limit. For example, to decode Code 93 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode a Code 93 symbol with a specific length range set this value to the upper limit. For example, to decode Code 93 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

------

### Code128

**Length1 [endnote1] -** To decode a Code 128 symbol with a specific length range set this value to the lower limit. For example, to decode Code 128 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode a Code 128 symbol with a specific length range set this value to the upper limit. For example, to decode Code 128 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

**Enable EAN128 -** Set the EAN128 subtype. A check in the checkbox indicates that the option is enabled.

**Enable ISBT128 -** Set the ISBT128 subtype. A check in the checkbox indicates that the option is enabled.

**Enable Plain Code128 -** Enables other (non EAN or ISBT) Code 128 subtypes. A check in the checkbox indicates that redundancy is enabled.

**ISBT128 Concat Mode -** Select an option for concatenating pairs of ISBT code types:

**Concat Mode Never -** Do not concatenate pairs of ISBT codes encountered.

**Concat Mode Always -** There must be two ISBT codes in order to decode and perform concatenation. Does not decode single ISBT symbols.

**Concat Mode Auto -** Decodes and concatenates pairs of ISBT codes immediately. If only a single ISBT symbol is present, the device must decode the symbol the number of times set via Redundancy - Code128 before transmitting its data to confirm that there is no additional ISBT symbol.

**Check ISBT Table -** The ISBT specification includes a table that lists several types of ISBT bar codes that are commonly used in pairs. If ISBT128 Concat Mode is set, enable Check ISBT Table to concatenate only those pairs found in this table. Other types of ISBT codes are not concatenated. A check in the checkbox indicates that redundancy is enabled.

**Security Level -** The scanner offers four levels of decode security for Code 128 bar codes. Select increasing levels of security for decreasing levels of bar code quality. There is an inverse relationship between security and scanner aggressiveness, so choose only that level of security necessary for any given application.

**Security Level 0 -** This setting allows the scanner to operate in its most aggressive state, while providing sufficient security in decoding most "in-spec" bar codes.

**Security Level 1 -** This setting eliminates most misdecodes.

**Security Level 2 -** Select this option if Security level 1 fails to eliminate misdecodes.

**Security Level 3 -** If Security Level 2 is selected and misdecodes still occur, select this security level. Be advised, selecting this option is an extreme measure against mis-decoding severely out of spec bar codes. Selecting this level of security significantly impairs the decoding ability of the scanner. If this level of security is needed, try to improve the quality of the bar codes.

------

### Trioptic39

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

------

### MicroPDF

**Code 128 Emulation -** Enable this option to transmit data from certain MicroPDF417 symbols as Code 128. AIM Code ID Character must be enabled for this option to work.

**Enable Code 128 Emulation** to transmit these MicroPDF417 symbols with one of the following prefixes:

]C1 if the first codeword is 903 - 905

]C2 if the first codeword is 908 or 909

]C0 if the first codeword is 910 or 911

**Disable Code 128 Emulation** to transmit these MicroPDF417 symbols with one of the following prefixes:

]L3 if the first codeword is 903-905

]L4 if the first codeword is 908 or 909

]L5 if the first codeword is 910 or 911.

------

### Webcode

Webcode Subtype - Enables the decoding of the GT Webcode subtype. A check in the checkbox indicates that the option is enabled.

------

### Composite AB

**UCC Link Mode -**

Link Flag ignored

Always Linked

Auto Discriminate

**MultiPacket Mode -**

Multi Part Single Packet

Mutli independent Reads

Use UPC Preamble Check Digit - Use the UPC rules specified in the UPC-EAN parameters when reporting composite decode data.

------

### Composite C

**MultiPacket Mode -**

Multi Part Single Packet

Mutli independent Reads

------

### USPostnet

**Report Check Digit -** Transmit USPostnet data with or without the check digit. A check in the checkbox indicates to send USPostnet data with check digit.

------

### USPlanet

**Report Check Digit -** Transmit USPlanet data with or without the check digit. A check in the checkbox indicates to send USPlanet data with check digit.

------

### UK Postal

**Report Check Digit -** Transmit UK Postal data with or without the check digit. A check in the checkbox indicates to send UK Postal data with check digit.

------

### Korean 3of5

**Length1 [endnote1] -** To decode a Korean 3 of 5 symbol with a specific length range set this value to the lower limit. For example, to decode Korean 3 of 5 symbols containing between 4 and 12 characters, set this value to 4.

**Length2 [endnote1] -** To decode a Korean 3 of 5 symbol with a specific length range set this value to the upper limit. For example, to decode Korean 3 of 5 symbols containing between 4 and 12 characters, set this value to 12.

**Redundancy -** Sets the reader to read the bar code twice before accepting data. A check in the checkbox indicates that redundancy is enabled.

------

### Decode Lengths

The allowable decode lengths are specified by Length1 and Length2 as follows:

* Variable length: Decode symbols containing any number of characters.
* Set both Length1 and Length2 to 0.
* Range: Decode a symbol with a specific length range (from a to b, including a and b).
* Set Length1 to a and set Length2 to b.
* Two Discrete Lengths: Decode only symbols containing either of two selected lengths.
* Set Length1 to b and Length2 to a where a is less than b.
* One Discrete Length: Decode only symbols containing a specific length.
* Set both Length1 and Length2 to the non zero value.

------

## UPC EAN Params

Allows the configuration of the parameters that apply to more than one UPC or EAN decoder.

**Security Level -** The scanner offers four levels of decode security for UPC/EAN bar codes. Select higher security levels for lower quality bar codes. There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application.

**Level 0 -** This setting allows the scanner to operate fastest, while providing sufficient security in decoding "in-spec" UPC/EAN bar codes.

**Level 1 -** As bar code quality levels diminish, certain characters become prone to misdecodes before others (i.e., 1, 2, 7, 8). If the scanner is misdecoding poorly printed bar codes, and the misdecodes are limited to these characters, select this security level.

**Level 2 -** If the scanner is misdecoding poorly printed bar codes, and the misdecodes are not limited to characters 1, 2, 7, and 8, select this security level.

**Level 3 -** If the scanner is still misdecoding, select this security level. Be advised, selecting this option is an extreme measure against misdecoding severely out of spec bar codes. Selecting this level of security can significantly impair the decoding ability of the scanner. If this level of security is necessary, try to improve the quality of the bar codes.

**Supplemental2 -** Enables or disables this option. A check in the checkbox indicates that the option is enabled.

**Supplemental5 -** Enables or disables this option. A check in the checkbox indicates that the option is enabled.

### Supplemental Mode

**No Supplementals -** the scanner is presented with a UPC/EAN plus supplemental symbol, the scanner decodes UPC/EAN and ignores the supplemental characters.

**Supplemental Always -** the scanner only decodes UPC/EAN symbols with supplemental characters, and ignores symbols without supplementals.

**Supplements Auto -** the scanner decodes UPC/EAN symbols with supplemental characters immediately. If the symbol does not have a supplemental, the scanner must decode the bar code the number of times set via UPC/EAN Supplemental Redundancy before transmitting its data to confirm that there is no supplemental.

**Supplemental Smart -** Enables smart supplementals. In this mode the decoder returns the decoded value of the main block right away if it does not belong to one of the following supplemental types: 378, 379, 977, 978, 979, 414, 419, 434 or 439. If the bar code starts with one of the prefixes it searches the image more aggressively for a supplemental. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.

**Supplemental 378-379 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 378 or 379. Disables reading of supplementals for any other UPC/EAN bar code not starting with 378 or 379. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.

**Supplemental 978-979 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 978 or 979. Disables reading of supplementals for another UPC/EAN bar code not starting with 978 or 979. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main barcode is returned.

**Supplemental 414-419-434-439 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 414, 419, 434 or 439. Disables reading of supplementals for another UPC/EAN bar code not starting with 414, 419, 434 or 439. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.

**Supplemental 977 -** Enables (auto-discriminate) supplemental for UPC/EAN codes starting with 977. Disables reading of supplementals for another UPC/EAN barcode not starting with 977. Tries to scan the supplemental if it is present. If the supplemental scanning failed, then the main bar code is returned.

**Retry Count -** Retry count for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive. Note that this flag is only considered if Supplemental Mode is set to one of the following values: Supplementals Auto, Supplementals Smart, Supplementals 378-379, Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20).

**Random Check Digit -** Enables random weight check digit verification. A check in the checkbox indicates that the option is enabled.

### Linear Decode - Not in use. Deprecated.

**Bookland -** Enable or disable this option. A check in the checkbox indicates that the option is enabled.

**Coupon -** Enables Coupon code decoding. Note that in order to successfully decode Coupon codes, all of the correct decoders must be enabled. A check in the checkbox indicates that the option is enabled.

**Bookland Format -** If Bookland option is enabled, select one of the following formats for Bookland data:

**Format ISBN-10 -** The scanner reports Bookland data starting with 978 in traditional 10-digit format with the special Bookland check digit for backward-compatibility. Data starting with 979 is not considered Bookland in this mode.

**Format ISBN-13 -** The scanner reports Bookland data (starting with either 978 or 979) as EAN-13 in 13-digit format to meet the 2007 ISBN-13 protocol.

**Convert GS1 To UPC EAN -** If this is set it converts GS1 barcodes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled. A check in the checkbox indicates that the option is enabled.

### Reader Params

Allows the configuration of parameters specific to the selected bar code reader.

Illumination mode - Turns illumination on and off.

On - Illumination is on.

Off - Illumination is off.

Aiming Pattern - Turns aim pattern on and off.

Aim Type - This parameter allows to enable or disable continuous scanning.

Trigger - For each trigger press a single barcode can be scanned.

**Timed Hold –** Once trigger is pressed an aiming session is started for a time specified by Aim Timer, when this time expires a decode session is started and scan beam will be visible. The decode session will remain active until the Beam Timer expires, the trigger is released or a barcode is decoded.

**Timed Release -** Once pressed an aiming session is started and will continue until the trigger is released. If the Aim Timer is expired when the trigger is released then a decode session will be started with scan beam visible for a remaining time equal to Beam Timer or a barcode is decoded.

**Press and Release -** Scan beam starts when trigger is pressed and released. The decode session will remain active until the Beam Timer expired or a barcode is decoded.

**Continuous Read -** Press and hold the scan trigger will continuously scan barcodes. Note: Continuous scanning is not supported with the RS507 Bluetooth scanner.

**Beam Timer -** Sets the maximum amount of time that the reader remains on (0 - 60,000 ms in increments of 100 ms). A value of 0 sets the reader to stay on indefinitely.

**Aim Timer -** Sets the duration in milliseconds for timed aim modes (0 - 60,000 ms in increments of 100 ms).

**Image Capture Mode -** Set image capture mode in the barcode scanner.

------

### None - No image capturing.

**Single Image Capture on Decode -** Captures an image with decoded data.
**Image Capture Only -** Only captures and image and no barcode data will be dispatched.

> **Note**: No image data will be processed by DataWedge and it is not recommend to change this parameter when barcode scanning is used with DataWedge.

**Linear Security Level -** Sets the number of times a bar code is read to confirm an accurate decode.

**Security Redundancy and Length -** Two times read redundancy based on redundancy flags and code length.

**Security Short or Codabar -** Two times read redundancy if short bar code or Codabar.

**Security All Twice -** Two times read redundancy for all bar codes.

**Security Long and Short -** Two times read redundancy for long bar codes, three times for short bar codes.

**Security All Thrice -** Three times read redundancy for all bar codes.

**Picklist -** This parameter allows the imager to decode only the bar code that is directly under the cross-hair/reticle (+) part of the pattern. This feature is most useful in applications where multiple bar codes may appear in the field of view during a decode session and only one of them is targeted for decode.

**Disable -** Disables Picklist mode, so any bar code within the field of view can be decoded.

**Hardware Picklist -** Picklist mode is enabled by sending a command to hardware.

**Software Picklist -** Picklist feature is handled in the software. No commands are sent to Hardware.

>**Note**: When both hardware and software picklists are supported hardware picklist is better in performance.
Same Symbol Timeout - This parameter is used to prevent the scanner from decoding the same symbol within this time interval (applicable only when Aim Type to Continuous Read). A value of 0 means no interval is required between two successive reads.

**Different Symbol Timeout -** This prameter is used to prevent the scanner from decoding another symbol within this time interval (applicable only when Aim Type is set to Continuous Read). A value of 0 means no interval is required between two successive reads.

**LCD Mode -** Enables or disables LCD mode. LCD mode enhances the ability of the imager to read bar codes from LCD displays such as cellphones (Scan Module Only).

**Disable -** Disables the LCD mode

**Enable -** Enables LCD mode.

>**Note**: When using the LCD mode, a degradation in performance may be observed and the aiming crosshair may blink until the bar code is decoded.
HW Engine Low Power Timeout - Time in milliseconds of non-use before scanner turns to a low-power mode.

**Inverse 1D Mode -** Allows the user to select decoding on inverse 1D bar codes.

**Disabled -** Disables decoding of inverse 1D symbologies.

**Enabled -** Enables decoding of only inverse 1D symbologies.

**Auto -** Allows decoding of both positive as well as inverse 1D symbologies.

**1D Quiet Zone Level -** Sets the effort the decoder performs to decode marginless barcodes.

**Level 0 -** The decoder will perform margin stuff as usual.

**Level 1 -** The decoder will perform more aggressively.

**Level 2 -** decoder only requires one side end of barcode.

**Level 3 -** The decoder can decode anything .

>**Note**: Since higher marginless levels will increase the mis-decode risk and decoding time, we strongly recommend the user only enable the symbologies which needs to choose higher marginless level, and leave all other symbologies at default level 1

**Poor Quality Decode Effort -** Trigger poor quality barcode decoding enhancement feature.

**Effort Level 0 -** Decoding performance on regular 1D and 2D barcodes is not affected.

**Effort Level 1 -** the scanner performance on regular 2-D barcodes is impacted while decoding performance on Tesco Thailand barcode and Suppository barcode is improved.

**Effort Level 2 -** same as Level 1.

**Effort Level 3 -** same as Level 1.

>**Note:** Same performance from Effort Level 1 to Effort Level 3.
Character Set Selection - Allows the user to convert the barcode data if different from default encoding type. UTF-8 is the default value. Other options are ISO-8859-1 and Shift_JIS.

**Viewfinder Mode -** This setting displays the Viewfinder modes supported for scanning.

**Viewfinder Enabled -** Enables only the viewfinder.

**Static Reticle -** Enables the viewfinder and a red reticle in the center of the screen which helps selecting the bar code.

>**Note:** This parameter supported in Camera scanner only.
Scan Params

Allows the configuration of Code Id and decode feedback options.

**Code ID Type -** A Code ID character identifies the code type of a scanned bar code. This is useful when the reader is decoding more than one code type. Select a code ID character to insert between the prefix and the decoded symbol.

**Code ID Type None -** No prefix.

**Code ID Type Aim -** A standards based three character prefix.

**Code ID Type Symbol -** A Symbol defined single character prefix.

>**Note**: Not all ringtones are fully supported as decode tones. Ringtones of longer length may be truncated when used as a decode tone. The recommendation is to test the selected tone for operation before deployment to a customer site.

**Volume Type -** Defines which volume setting to be used to play the Decode Audio Feedback.

**Ringer and Notifications -** Uses Ringer and Notifications volume settings for audio feedback.

**Music and Media -** Uses Music and Media volume settings for audio feedback.

**Alarms -** Uses Alarms volume settings for audio feedback.

**Decode Audio Feedback -** Select an audio tone to sound upon a good decode.

**Decode Haptic Feedback -** Enable the mobile computer to vibrate upon a good decode.

**Decode Feedback LED Timer -** Green LED flash time (in milliseconds) upon a good decode.

**Decoding LED Notification -** When enabled flashes the Red LED when trigger is pressed to scan a barcode.

>**Note**: Some of the parameters are not supported in all devices.

------

Refer to the [Special Features Guide](../features) for information about Kiosk Mode, Secure Mode, Lockdown State and other special EHS features and behaviors. 













