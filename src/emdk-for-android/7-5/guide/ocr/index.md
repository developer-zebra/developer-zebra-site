---
title: OCR Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---
 
## Overview
Optical Character Recognition (OCR) is a feature that enables the conversion of text images into machine-encoded text. In EMDK 7.5 (and higher), the Barcode API can configure the device scanner to enables an app to capture various OCR font types as text. This functionality is modeled as decoder types (OCRA, OCRB, MICRE13B and USCurrency) exposed through the Barcode API. The captured OCR data can be retrieved from the data returned to the application from a scan event using the onData callback.
 
### Enable OCR
Before an application can capture using OCR, the decoder that corresponds with the OCR font type (OCRA, OCRB, MICRE13B, USCurrency) must be enabled. To do so, get an instance of a scanner object (see the [Barcode Scanning API Programmer's Guide](../barcode_scanning_guide) for details). **Note: For OCR-A and OCR-B, selecting the most appropriate font variant optimizes performance and accuracy**.

**Once initialized, modify the scanner configuration as below**:

        :::java
        ScannerConfig config = scanner.getConfig();
        config.decoderParams.ocrA.enabled = true; //enable OCRA decoder
        config.decoderParams.ocrA.ocrAVariant = ScannerConfig.OcrAVariant.FULL_ASCII; //select required variant
        scanner.setConfig(config);


### Configure Parameters

Set the parameters based on specific app requirements. 

**Default values for OCR parameters**:   

        :::java
        ScannerConfig config = scanner.getConfig();
        config.ocrParams.inverseOcr = ScannerConfig.InverseOcr.REGULAR_ONLY;
        config.ocrParams.checkDigitModulus = 1;
        config.ocrParams.checkDigitMultiplier = "121212121212";
        config.ocrParams.checkDigitValidation = ScannerConfig.OcrCheckDigitValidation.NONE; 
        config.ocrParams.ocrLines = ScannerConfig.OcrLines.ONE_LINE; 
        config.ocrParams.maxCharacters = 100; 
        config.ocrParams.minCharacters = 3; 
        config.ocrParams.orientation = ScannerConfig.OcrOrientation.DEGREE_0; 
        config.ocrParams.quietZone = 50; 
        config.ocrParams.subset = "!\"#$%()*+,-./0123456789<>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\\^|";
        config.ocrParams.template = "99999999";
        scanner.setConfig(config);

-----

## OCR Parameters

###Inverse OCR 

White or light words on a black or dark background. 

#### Options for decoding
* **Regular Only - Decode regular OCR (black on white) strings only (default)**
* Inverse Only - Decode inverse OCR (white on black) strings only
* Auto-discriminate - Decode regular and inverse OCR strings

###OCR Check Digit Modulus 

Sets the OCR module check digit calculation. The check digit is the digit in the right-most position in an OCR string and helps improve the accuracy of the collected data. It is the end product of a calculation made on the incoming data. For check digit calculation, for example, Modulus 10 alpha and numeric characters are assigned numeric weights. The calculation is applied to the character weights and the resulting check digit is added to the end of the data. If the incoming data does not match the check digit, the data is considered corrupt. The selected check digit option does not take effect until the OCR Check Digit Validation is set.

**Possible values**: 

* **Low - 1 (default)**
* High - 99

###OCR Check Digit Multiplier 
Sets OCR check digit multipliers for the character positions. For check digit validation, each character in scanned data has an equivalent weight used in the check digit calculation.

**Possible values**: 

* Minimum length - 1
* Maximum Length - 100
* **Default = 121212121212**


###OCR Check Digit Validation 
Protects against scanning errors by applying a check digit validation scheme.

**Possible values**: 

* **None - 0 (default)**

* Product Add Left to Right - Each character in the scanned data is assigned a numeric value. Each digit representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, and the sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456

* Digits: 1 3 2 4 5 6
* Multipliers:  1 2 3 4 5 6
* Products: 1 6 6 16 25 36
* Sum of products: 1+6+6+16+25+36 = 90

If the Check Digit Modulus is 10, it passes because 90 is divisible by 10 (the remainder is zero).

**Product Add Right to Left -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero. Example: Scanned data numeric value is 132459 (check digit is 9). Check digit multiplier string is 123456.

* Digits: 1 3 2 4 5 9
* Multipliers:  6 5 4 3 2 1
* Products: 6 15 8 12 10 9
* Sum of products: 6+15+8+12+10+9 = 60

If the Check Digit Modulus is 10, it passes because 60 is divisible by 10 (the remainder is 0).

**Digit Add Left to Right -** Each character in the scanned data is assigned a numeric value. Each value representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.

Digits: 1 3 2 4 5 6
Multipliers:  1 2 3 4 5 6
Products: 1 6 6 16 25  36
* Sum of product digits: 1+6+6+1+6+2+5+3+6 = 36

If the Check Digit Modulus is 12, it passes because 36 is divisible by 12 (the remainder is 0).

**Digit Add Right to Left -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.

Digits: 1 3 2 4 5 6
Multipliers:  6 5 4 3 2 1
Products: 6 15 8 12 10 6
* Sum of product digits: 6+1+5+8+1+2+1+0+6 = 30

The Check Digit Modulus is 10. It passes because 30 is divisible by 10 (the remainder is 0).

**Product Add Right to Left Simple Remainder -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products except for the check digit's product is computed. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product.

Example: Scanned data numeric value is 122456 (check digit is 6). Check digit multiplier string is 123456.

* Digits: 1 2 2 4 5 6
* Multipliers  6 5 4 3 2 1
* Products 6 10 8 12 10 6
* Sum of products: 6+10+8+12+10 = 46

The Check Digit Modulus is 10. It passes because 46 divided by 10 leaves a remainder of 6.

**Digit Add Right to Left Simple Remainder -** Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products except for the check digit's product is then calculated. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product.

Example: Scanned data numeric value is 122459 (check digit is 6). Check digit multiplier string is 123456.

* Digits: 1 2 2 4 5 9
* Multipliers:  6 5 4 3 2 1
* Products:  6 10 8 12 10 9
* Sum of product digits:  6+1+0+8+1+2+1+0+= 19

The Check Digit Modulus is 10. It passes because 19 divided by 10 leaves a remainder of 9.

**Health Industry - HIBCC43 -** The health industry module 43 check digit standard. The check digit is the modulus 43 sum of all the character values in a given message and is printed as the last character in a given message.

###OCR Lines 
Used to select the number of OCR lines to decode. 

* **1 Line (default)**
* 2 Lines
* 3 Lines

###OCR Maximum Characters 
Select the maximum number of OCR characters (including spaces) per line to decode.

**Possible values**:

* Low - 3 
* **High – 100 (default)**

###OCR Minimum Characters 
Select the minimum number of OCR characters (not including spaces) per line to decode.

**Possible values**:

* **Low - 3 (default)**
* High - 100

###OCR Orientation 
Select the orientation of an OCR string to be read. Setting an incorrect orientation can cause mis-decodes. Options:

**Possible values**:

* **0 degrees - to the imaging engine (default)**
* 270 degrees - clockwise (or 90 degrees counterclockwise) to the imaging engine
* 180 degrees - (upside down) to the imaging engine
* 90 degrees - clockwise to the imaging engine
* Omni-directional

###OCR Quiet Zone 
Sets the field width of blank space to stop scanning during OCR reading.

**Possible values**:

* Low - 20
* High - 99 
* **Default = 50**

###OCR Subset 
Defines a custom group of characters in place of a preset font variant. For example, if scanning only numbers and the letters A, B, and C, create a subset of just these characters to speed decoding. This applies a designated OCR Subset across all enabled OCR fonts.

**Possible values**:

* Minimum length - 1
* Maximum Length – 100
* **Default = !"#$%()&#42;+,-./0123456789<>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\^|)**

###OCR Template  
Creates a template for precisely matching scanned OCR characters to a desired input format. Carefully constructing an OCR template eliminates scanning errors. The template expression is formed by numbers and letters. The default is 99999999 which accepts any alphanumeric character OCR string. If there are less than 8 '9' characters, the '9' represents only digit values.

**Possible values**: 

* Minimum length - 3
* Maximum Length - 100 
* **Default = 99999999**

-----

## OCR Template Operators

The template operators in the following table can assist in capturing, delimiting and formatting scanned OCR data. OCR template expressions are formed by numbers and letters arranged in a sequence. Refer to the **[Zebra DS36X8 Reference Guide](https://www.zebra.com/content/dam/zebra_new_ia/en-us/manuals/barcode-scanners/ds36x8-prg-en.pdf) Chapter 15** for more information. 


<table class="table table-striped">
<tr>
<th>Name</th>
<th>Description</th>
<th>Template</th>
<th>Valid Data</th>
<th>Invalid Data/<br>Outgoing Data</th>
</tr>

<tr>
<td>Required Digit (9)</td>
<td>Accepts a numeric character only in this position.</td>
<td>99999</td>
<td>12987</td>
<td>123AB</td>
</tr>

<tr>
<td>Required Alpha (A)</td>
<td>Accepts an alpha character only in this position.</td>
<td>AAA</td>
<td>ABC</td>
<td>12F</td>
</tr>

<tr>
<td>Require and Suppress (0)</td>
<td>Any character in this position is suppressed from the output, including space and reject.</td>
<td>990AA</td>
<td>12QAB</td>
<td>12AB</td>
<td></td>
</tr>

<tr>
<td>Optional Alphanumeric (1)</td>
<td>Accepts an alpha-numeric character, if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99991</td>
<td>1234A</td>
<td>1234&lt;</td>
<td></td>
</tr>

<tr>
<td>Optional Alpha (2)</td>
<td>Accepts an alpha character, if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>AAAA2</td>
<td>ABCDE</td>
<td>ABCD6</td>
<td></td>
</tr>

<tr>
<td>Alpha or Digit (3)</td>
<td>An alpha-numeric character is required in this position to validate the incoming data.</td>
<td>33333</td>
<td>12ABC</td>
<td>12AB&lt;</td>
</tr>

<tr>
<td>Any Including Space and Reject (4)</td>
<td>Accepts any character in this position, including spaces and rejects. Rejects are represented by an underscore (_) character in the output. This is a good selection for troubleshooting.</td>
<td>99499</td>
<td>12$34<br>34_98</td>
<td></td>
</tr>

<tr>
<td>Any except Space and Reject (5)</td>
<td>Accepts any character in this position except a space or reject.</td>
<td>55999</td>
<td>A.123<br>*Z456</td>
<td>A BCD</td>
</tr>

<tr>
<td>Optional Digit (7)</td>
<td>Accepts a numeric character, if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99977</td>
<td>12345<br>789</td>
<td>789AB</td>
</tr>

<tr>
<td>Digit or Fill (8)</td>
<td>Accepts any numeric or fill character in this position.</td>
<td>88899</td>
<td>12345<br>&gt;&gt;789<br>&lt;&lt;789</td>
<td></td>
</tr>

<tr>
<td>Alpha or Fill (F)</td>
<td>Accepts any alpha or fill character in this position.</td>
<td>AAAFF</td>
<td>ABCXY<br>LMN&gt;&gt;<br>ABC&lt;5</td>
<td></td>
</tr>

<tr>
<td>Optional Space ( )</td>
<td>Accepts a space, if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99 99</td>
<td>12 34<br>1234</td>
<td>67891</td>
</tr>

<tr>
<td>Optional Small Special (.)</td>
<td>Accepts a special character, if present. Optional characters are not allowed as the first character(s) in a field of like characters. Small special characters are - (dash) and . (dot)</td>
<td>AA.99</td>
<td>MN.35<br>XY98</td>
<td>XYZ12</td>
</tr>

<tr>
<td>Other Template Operators. These template operators assist in capturing, delimiting and formatting scanned OCR data.</td>
</tr>

<tr>
<td>Literal String (&quot; and +)</td>
<td>Use either of these delimiting characters surrounding alphanumeric characters to define a literal string within a template that must be present in scanned OCR data. There are two characters used to delimit required literal strings; if one of the delimiter characters is already present in the desired literal string, use the other delimiter.</td>
<td>&quot;35+BC&quot;</td>
<td>35+BC</td>
<td>AB+22</td>
</tr>

<tr>
<td>New Line (E)</td>
<td>To create a template of multiple lines, add an "E" between the template of each single line.</td>
<td>999EAAAA</td>
<td>321<br>BCAD</td>
<td>XYZW<br>12</td>
</tr>

<tr>
<td>String Extract (C)</td>
<td>This operator combined with others defines a string of characters to extract from the scanned data. The string extract is structured as follows:<br><br>CbPe<br><br>Where:<br>&bull; "C" is the string extract operator<br>&bull; "b" is the string begin delimiter<br>&bull; "P" is the category (one or more numeric or alpha characters) describing the string representation<br>&bull; "e" is the string end delimiter<br><br>Values for "b" and "e" can be any character that can be scanned and are included in the output stream.</td>
<td>C&gt;A&gt;</td>
<td>XQ3&gt;ABCDE&gt;<br>-&gt;ATRU&gt;123</td>
<td>&gt;ABCDE&gt;<br>&gt;ATRU&gt;</td>
</tr>

<tr>
<td>Ignore to End of Field (D)</td>
<td>This operator causes all characters after a template to be ignored. Use this as the last character in a template expression.</td>
<td>999D</td>
<td>123-PED<br>357298</td>
<td>123<br>357</td>
</tr>

<tr>
<td>Skip Until (P1)</td>
<td>This operator allows skipping over characters until a specific character type or a literal string is detected. It can be used in two ways:<br><br>P1ct<br><br>Where:<br>&bull; "P1" is the "Skip Until" operator<br>&bull; "c" is the type of character that triggers the start of output<br>&bull; "t" is one or more template characters<br><br>P1&quot;s&quot;t<br><br>Where:<br>&bull; P1 is the "Skip Until" operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; t is one or more template characters<br><br>The trigger character or literal string is included in output from a "Skip Until" operator, and the first character in the template should accommodate this trigger.</td>
<td>P1&quot;PN&quot;AA9999</td>
<td>123PN9876<br>X-PN3592</td>
<td>PN9876<br>PN3592</td>
</tr>

<tr>
<td>Skip Until Not (P0)</td>
<td>This operator allows skipping over characters until a specific character type or a literal string is not matched in the output stream. It can be used in two ways:<br><br>P0ct<br><br>Where:<br>&bull; P0 is the "Skip Until Not" operator<br>&bull; "c" is the type of character that triggers the start of output<br>&bull; "t" is one or more template characters<br><br>P0&quot;s&quot;t<br><br>Where:<br>&bull; "P0" is the "Skip Until Not" operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; "t" is one or more template characters<br><br>The trigger character or literal string is included in output from a "Skip Until Not" operator.</td>
<td>P0A9999</td>
<td>BPN3456<br>X-PN3592</td>
<td>5341<br>No output</td>
</tr>

<tr>
<td>Repeat Previous (R)</td>
<td>This operator allows a template character to repeat one or more times, allowing the capture of variable-length scanned data. The following examples capture two required alpha characters followed by one or more required digits:</td>
<td>AA9R</td>
<td>AB3<br>AB3<br>32RM52700</td>
<td>PN12345<br>PN12345<br>No output</td>
</tr>

<tr>
<td>Scroll Until Match (S)</td>
<td>This operator steps through scanned data one character at a time until the data matches the template.</td>
<td>S99999</td>
<td>AB3<br>PN12345<br>32RM52700</td>
<td>No output<br>12345<br>52700</td>
</tr>

<tr>
<td>Multiple Templates</td>
<td>This feature sets up multiple templates for OCR decoding. For each template in the multiple template string, use a capital letter "X" as a separator between the templates.<br><br>For example, setting the OCR Template as 99999XAAAAA decodes OCR strings of either "12345" or "ABCDE."</td>
<td>Following are sample templates with descriptions of valid data for each definition. The Field Definition is followed by its description:<br><br>&quot;M&quot;99977&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">M</span><span>&nbsp;followed by three digits and two optional digits.<br>&quot;X&quot;997777&quot;X&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">X</span><span>&nbsp;followed by two digits, four optional digits, and an X.<br>9959775599 &nbsp;&nbsp;&nbsp;&nbsp; : Two digits followed by any character, a digit, two optional digits, any two characters, and two digits.<br>A55&quot;-&quot;999&quot;-&quot;99 &nbsp;&nbsp; : A letter followed by two characters, a dash, three digits, a dash, and two digits.<br>33A&quot;.&quot;99 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Two alphanumeric characters followed by a letter, a period, and two digits.<br>999992991&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Five digits followed by an optional alpha, two digits, and an optional alphanumeric.<br>&quot;PN98&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Literal field -&nbsp;</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

### Multiple Templates
The multiple templates feature sets up two or more templates for OCR decoding, with a capital letter "X" as the separator between strings in the template. For example, setting the OCR Template as "99999XAAAAA" decodes OCR strings of either "12345" or "ABCDE." Additional sample template strings are below with descriptions of data that would be valid for each template. 

**"M99977"** injects a capital letter M followed by three required numerical characters and two optional numbers to be acquired.

**"X997777X"** begins with a capital X followed by two required numbers, four optional numbers and another X.

**"9959775599"** defines two numbers followed by any character, another required number, two optional numbers, any two alpha-numerical characters and two additional numbers.

**"A55-999-99"** requires an alpha character followed by any two alpha-numeric characters, a dash, three numbers, a dash, and two more numbers.

"33A.99" defines two alpha-numeric characters followed by a letter, a period and two numbers.

"999992991" defines five numbers followed by an optional alpha-numeric character, two numbers and an optional alpha-numeric character.

"PN98" is a Literal field. 

-----

## Also See

**[Zebra DS36X8 Reference Guide](https://www.zebra.com/content/dam/zebra_new_ia/en-us/manuals/barcode-scanners/ds36x8-prg-en.pdf)** | Chapter 15 covers OCR programming 