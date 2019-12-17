---
title: OCR Programmer's Guide
layout: guide.html
product: EMDK For Android
productversion: '7.5'
---
 
## Overview
Optical Character Recognition (OCR) is a feature that enables the conversion of text images into machine-encoded text. In EMDK 7.5 (and higher), the Barcode API can configure the device scanner to enables an app to capture various OCR font types as text. This functionality is modeled as decoder types (OCRA, OCRB, MICRE13B and USCurrency) exposed through the Barcode API. The captured OCR data can be retrieved from the data returned to the application from a scan event using the onData callback.
 
### Enable OCR
Before an application can capture using OCR, the decoder that corresponds with the OCR font type (OCRA, OCRB, MICRE13B, USCurrency) must be enabled. Get an instance of a scanner object (see Barcode Scanning API Programmer's Guide for details). Once initialized, modify the scanner configuration as below:

Note: For OCRA and OCRB, selecting the most appropriate font variant optimizes performance and accuracy.

        :::java
        ScannerConfig config = scanner.getConfig();
        config.decoderParams.ocrA.enabled = true; //enable OCRA decoder
        config.decoderParams.ocrA.ocrAVariant = ScannerConfig.OcrAVariant.FULL_ASCII; //select required variant
        scanner.setConfig(config);


Configure Parameters
By default, the following values are configured for OCR parameters. Change the parameters based on specific requirements.

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


## Parameters in Detail

###Inverse OCR 
White or light words on a black or dark background. Select an option for decoding inverse OCR:
Regular Only - Decode regular OCR (black on white) strings only. (default)
Inverse Only - Decode inverse OCR (white on black) strings only.
Auto-discriminate - Decode both regular and inverse OCR strings.



##OCR Check Digit Modulus 
Sets the OCR module check digit calculation. The check digit is the last digit (in the right most position) in an OCR string and improves the accuracy of the collected data. The check digit is the end product of a calculation made on the incoming data. For check digit calculation, for example Modulus 10, alpha and numeric characters are assigned numeric weights. The calculation is applied to the character weights and the resulting check digit is added to the end of the data. If the incoming data does not match the check digit, the data is considered corrupt. The selected check digit option does not take effect until you set OCR Check Digit Validation.
Low - 1 (default)
High - 99



##OCR Check Digit Multiplier 
Sets OCR check digit multipliers for the character positions. For check digit validation, each character in scanned data has an equivalent weight used in the check digit calculation.
Minimum length - 1
Maximum Length - 100 (Default - 121212121212)


##OCR Check Digit Validation 
Protects against scanning errors by applying a check digit validation scheme. Options:

* None - 0 (default)
* Product Add Left to Right - Each character in the scanned data is assigned a numeric value. Each digit representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, and the sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456

Digit                1       3       2       4       5       6
Multiplier        1       2       3       4       5       6
Product          1       6       6       16     25     36
Product add  1+     6+     6+    16+   25+   36 = 90

If the Check Digit Modulus is 10, it passes because 90 is divisible by 10 (the remainder is zero).
Product Add Right to Left - Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products is computed. The check digit passes if this sum modulo Check Digit Modulus is zero. Example: Scanned data numeric value is 132459 (check digit is 9). Check digit multiplier string is 123456.

Digit                1       3       2       4       5       9
Multiplier        6       5       4       3       2       1
Product          6       15       8      12     10    9
Product add  6+    15+    8+     12+   10+   9 = 60

If the Check Digit Modulus is 10, it passes because 60 is divisible by 10 (the remainder is 0).
Digit Add Left to Right - Each character in the scanned data is assigned a numeric value. Each value representing a character in the scanned data is multiplied by its corresponding digit in the multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.

Digit                1       3       2       4       5       6
Multiplier        1       2       3       4       5       6
Product          1       6       6       16     25     36
Digit add       1+    6+    6+    1+6+   2+5+   3+6 = 36

If the Check Digit Modulus is 12, it passes because 36 is divisible by 12 (the remainder is 0).
Digit Add Right to Left - Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products is then calculated. The check digit passes if this sum modulo Check Digit Modulus is zero.

Example: Scanned data numeric value is 132456 (check digit is 6). Check digit multiplier string is 123456.

Digit                1       3       2       4       5       6
Multiplier        6       5       4       3       2       1
Product          6       15       8       12     10    6
Digit add      6+    1+5+    8+   1+2+   1+0+   6 = 30

The Check Digit Modulus is 10. It passes because 30 is divisible by 10 (the remainder is 0).
Product Add Right to Left Simple Remainder - Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of these products except for the check digit's product is computed. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product.

Example: Scanned data numeric value is 122456 (check digit is 6). Check digit multiplier string is 123456.

Digit                1       2       2       4       5             6
Multiplier        6       5       4       3       2             1
Product          6       10      8       12     10          6
Product add  6+    10+    8+     12+   10    = 46  6

The Check Digit Modulus is 10. It passes because 46 divided by 10 leaves a remainder of 6.
Digit Add Right to Left Simple Remainder - Each character in the scanned data is assigned a numeric value. The check digit multiplier is reversed in order. Each value representing a character in the scanned data is multiplied by its corresponding digit in the reversed multiplier, resulting in a product for each character in the scanned data. The sum of each individual digit in all of the products except for the check digit's product is then calculated. The check digit passes if this sum modulo Check Digit Modulus is equal to the check digit's product.

Example: Scanned data numeric value is 122459 (check digit is 6). Check digit multiplier string is 123456.

Digit                1       2       2       4       5             9
Multiplier        6       5       4       3       2             1
Product           6       10       8     12     10          9
Digit add      6+    1+0+    8+     1+2+   1+0+   = 19   9

The Check Digit Modulus is 10. It passes because 19 divided by 10 leaves a remainder of 9.
Health Industry - HIBCC43 - The health industry module 43 check digit standard. The check digit is the modulus 43 sum of all the character values in a given message and is printed as the last character in a given message.

###OCR Lines 
Select the number of OCR lines to decode:
1 Line (default)
2 Lines
3 Lines

###OCR Maximum Characters 
Select the maximum number of OCR characters (including spaces) per line to decode.
Low - 3 
High – 100 (default)
OCR Minimum Characters 
Select the minimum number of OCR characters (not including spaces) per line to decode.
Low - 3 (default)
High - 100

###OCR Orientation 
Select the orientation of an OCR string to be read. Setting an incorrect orientation can cause mis-decodes. Options:
0 degree - to the imaging engine (default)
270 degree - clockwise (or 90o counterclockwise) to the imaging engine
180 degree - (upside down) to the imaging engine
90 degree - clockwise to the imaging engine
Omnidirectional

###OCR Quiet Zone 
Sets the field width of blank space to stop scanning during OCR reading.
Low - 20
High - 99 (Default - 50)

###OCR Subset 
Defines a custom group of characters in place of a preset font variant. For example, if scanning only numbers and the letters A, B, and C, create a subset of just these characters to speed decoding. This applies a designated OCR Subset across all enabled OCR fonts.
Minimum length - 1
Maximum Length – 100 (Default - !"#$%()*+,-./0123456789<>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\^|)

###OCR Template  
Creates a template for precisely matching scanned OCR characters to a desired input format. Carefully constructing an OCR template eliminates scanning errors. The template expression is formed by numbers and letters. The default is 99999999 which accepts any alphanumeric character OCR string. If there are less than 8 '9' characters, the '9' represents only digit values.

Minimum length - 3
Maximum Length - 100 (Default - 99999999)


## TABLE TITLE HERE << 


    <tr>
        <th>#</th>
        <th>Data Definitions</th>
        <th>Constant name</th>
        <th>Data type </th>
        <th>Format</th>
        <th>Power Precision</th>
        <th>Power Precision Plus</th>
        <th>Backup Battery</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Battery Manufacture Date</td>
        <td>mfd</td>
        <td>String</td>
        <td>yyyy-mm-dd</td>
        <td>X</td>
        <td>X</td>
        <td> </td>
    </tr>

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
<td>Only a numeric character is allowed in this position.</td>
<td>99999</td>
<td>12987</td>
<td>123AB</td>
</tr>

<tr>
<td>Required Alpha (A)</td>
<td>Only an alpha character is allowed in this position.</td>
<td>AAA</td>
<td>ABC</td>
<td>12F</td>
</tr>

<tr>Require and Suppress (0)</td>
<td>Any character in this position, including space or reject, is suppressed from the output.</td>
<td>990AA</td>
<td>12QAB</td>
<td>12AB</td>
<td></td>
</tr>

<tr>Optional Alphanumeric (1)</td>
<td>This option accepts an alphanumeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99991</td>
<td>1234A</td>
<td>1234&lt;</td>
<td></td>
</tr>

<tr>Optional Alpha (2)</td>
<td>This option accepts an alpha character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>AAAA2</td>
<td>ABCDE</td>
<td>ABCD6</td>
<td></td>
</tr>

<tr>Alpha or Digit (3)</td>
<td>An alphanumeric character is required in this position to validate the incoming data.</td>
<td>33333</td>
<td>12ABC</td>
<td>12AB&lt;</td>
</tr>

<tr>Any Including Space &amp; Reject (4)</td>
<td>Accepts any character in this position, including space and reject. Rejects are represented as an underscore (_) in the output. This is a good selection for troubleshooting.</td>
<td>99499</td>
<td>12$34<br>34_98</td>
<td></td>
</tr>

<tr>Any except Space &amp; Reject (5)</td>
<td>Accepts any character in this position except a space or reject.</td>
<td>55999</td>
<td>A.123<br>*Z456</td>
<td>A BCD</td>
</tr>

<tr>Optional Digit (7)</td>
<td>Accepts a numeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99977</td>
<td>12345<br>789</td>
<td>789AB</td>
</tr>

<tr>Digit or Fill (8)</td>
<td>Accepts any numeric or fill character in this position.</td>
<td>88899</td>
<td>12345<br>&gt;&gt;789<br>&lt;&lt;789</td>
<td></td>
</tr>

<tr>Alpha or Fill (F)</td>
<td>Accepts any alpha or fill character in this position.</td>
<td>AAAFF</td>
<td>ABCXY<br>LMN&gt;&gt;<br>ABC&lt;5</td>
<td></td>
</tr>

<tr>Optional Space ( )</td>
<td>Accepts a space if present. Optional characters are not allowed as the first character(s) in a field of like characters.</td>
<td>99 99</td>
<td>12 34<br>1234</td>
<td>67891</td>
</tr>

<tr>Optional Small Special (.)</td>
<td>Accepts a special character if present. Optional characters are not allowed as the first character(s) in a field of like characters. Small special characters are - , and .</td>
<td>AA.99</td>
<td>MN.35<br>XY98</td>
<td>XYZ12</td>
</tr>

<tr>Other Template Operators -</span><span class="c2">&nbsp;These template operators assist in capturing, delimiting, and formatting scanned OCR data</td>
</tr><tr>Literal String (&quot; and +)</td>
<td>Use either of these delimiting characters surrounding alphanumeric characters to define a literal string within a template that must be present in scanned OCR data. There are two characters used to delimit required literal strings; if one of the delimiter characters is present in the desired literal string, use the other delimiter.</td>
<td>&quot;35+BC&quot;</td>
<td>35+BC</td>
<td>AB+22</td>
</tr>

<tr>New Line (E)</td>
<td>To create a template of multiple lines, add E between the template of each single line.</td>
<td>999EAAAA</td>
<td>321<br>BCAD</td>
<td>XYZW<br>12</td>
</tr>

<tr>String Extract (C)</td>
<td>This operator combined with others defines a string of characters to extract from the scanned data. The string extract is structured as follows:<br><br>CbPe<br><br>Where:<br>&bull; C is the string extract operator<br>&bull; b is the string begin delimiter<br>&bull; P is the category (one or more numeric or alpha characters) describing the string representation<br>&bull; e is the string end delimiter<br><br>Values for b and e can be any scannable character. They are included in the output stream.</td>
<td>C&gt;A&gt;</td>
<td>XQ3&gt;ABCDE&gt;<br>-&gt;ATRU&gt;123</td>
<td>&gt;ABCDE&gt;<br>&gt;ATRU&gt;</td>
</tr>

<tr>Ignore to End of Field (D)</td>
<td>This operator causes all characters after a template to be ignored. Use this as the last character in a template expression.</td>
<td>999D</td>
<td>123-PED<br>357298</td>
<td>123<br>357</td>
</tr>

<tr>Skip Until (P1)</td>
<td>This operator allows skipping over characters until a specific character type or a literal string is detected. It can be used in two ways:<br><br>P1ct<br><br>Where:<br>&bull; P1 is the Skip Until operator<br>&bull; c is the type of character that triggers the start of output<br>&bull; t is one or more template characters<br><br>P1&quot;s&quot;t<br><br>Where:<br>&bull; P1 is the Skip Until operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until operator, and the first character in the template should accommodate this trigger.</td>
<td>P1&quot;PN&quot;AA9999</td>
<td>123PN9876<br>X-PN3592</td>
<td>PN9876<br>PN3592</td>
</tr>

<tr>Skip Until Not (P0)</td>
<td>This operator allows skipping over characters until a specific character type or a literal string is not matched in the output stream. It can be used in two ways:<br><br>P0ct<br><br>Where:<br>&bull; P0 is the Skip Until Not operator<br>&bull; c is the type of character that triggers the start of output<br>&bull; t is one or more template characters<br><br>P0&quot;s&quot;t<br><br>Where:<br>&bull; P0 is the Skip Until Not operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until Not operator.</td>
<td>P0A9999</td>
<td>BPN3456<br>X-PN3592</td>
<td>5341<br>No output</td>
</tr>

<tr>Repeat Previous (R)</td>
<td>This operator allows a template character to repeat one or more times, allowing the capture of variable-length scanned data. The following examples capture two required alpha characters followed by one or more required digits:</td>
<td>AA9R</td>
<td>AB3<br>AB3<br>32RM52700</td>
<td>PN12345<br>PN12345<br>No output</td>
</tr>

<tr>Scroll Until Match (S)</td>
<td>This operator steps through scanned data one character at a time until the data matches the template.</td>
<td>S99999</td>
<td>AB3<br>PN12345<br>32RM52700</td>
<td>No output<br>12345<br>52700</td>
</tr>

<tr>Multiple Templates</td>
<td>This feature sets up multiple templates for OCR decoding. For each template in the multiple template string, use a capital letter X as a separator between the templates.<br><br>For example, set the OCR Template as 99999XAAAAA to decode OCR strings of either 12345 or ABCDE.</td>
<td>Following are sample templates with descriptions of valid data for each definition. The Field Definition is followed by its description:<br><br>&quot;M&quot;99977&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">M</span><span>&nbsp;followed by three digits and two optional digits.<br>&quot;X&quot;997777&quot;X&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">X</span><span>&nbsp;followed by two digits, four optional digits, and an X.<br>9959775599 &nbsp;&nbsp;&nbsp;&nbsp; : Two digits followed by any character, a digit, two optional digits, any two characters, and two digits.<br>A55&quot;-&quot;999&quot;-&quot;99 &nbsp;&nbsp; : A letter followed by two characters, a dash, three digits, a dash, and two digits.<br>33A&quot;.&quot;99 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Two alphanumeric characters followed by a letter, a period, and two digits.<br>999992991&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Five digits followed by an optional alpha, two digits, and an optional alphanumeric.<br>&quot;PN98&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Literal field -&nbsp;</td>
</tr>
</tbody>
</table>


<!-- not needed...?
<p class="c0 c20"><span class="c2"></span>
</p>
</body>
</html>
 -->

 <!-- except for line below, table pre-fix-up    
    <table class="table table-striped">

<tbody>
<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c13 c7">Name</span></p>
</td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c13 c7">Description</span></p>
</td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c13 c7">Template</span></p>
</td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c13 c7">Valid Data/<br>Incoming Data</span></p>
</td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c13 c7">Invalid Data/<br>Outgoing Data</span></p></td>

</tr><tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0">

<span class="c2">Required Digit (9)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Only a numeric character is allowed in this position.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">99999</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">12987</span></p></td>
<td>123AB</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Required Alpha (A)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">Only an alpha character is allowed in this position.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">AAA</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">ABC</span></p></td>
<td>12F</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Require and Suppress (0)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Any character in this position, including space or reject, is suppressed from the output.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">990AA</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">12QAB</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">12AB</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Optional Alphanumeric (1)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">This option accepts an alphanumeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">99991</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">1234A</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">1234&lt;</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Optional Alpha (2)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">This option accepts an alpha character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">AAAA2</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">ABCDE</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">ABCD6</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Alpha or Digit (3)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">An alphanumeric character is required in this position to validate the incoming data.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">33333</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">12ABC</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">12AB&lt;</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Any Including Space &amp; Reject (4)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts any character in this position, including space and reject. Rejects are represented as an underscore (_) in the output. This is a good selection for troubleshooting.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">99499</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">12$34<br>34_98</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0 c20"><span class="c2"></span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Any except Space &amp; Reject (5)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts any character in this position except a space or reject.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">55999</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">A.123<br>*Z456</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">A BCD</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Optional Digit (7)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts a numeric character if present. Optional characters are not allowed as the first character(s) in a field of like characters.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">99977</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">12345<br>789</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">789AB</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Digit or Fill (8)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts any numeric or fill character in this position.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">88899</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">12345<br>&gt;&gt;789<br>&lt;&lt;789</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0 c20"><span class="c2"></span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Alpha or Fill (F)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts any alpha or fill character in this position.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">AAAFF</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">ABCXY<br>LMN&gt;&gt;<br>ABC&lt;5</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0 c20"><span class="c2"></span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Optional Space ( )</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts a space if present. Optional characters are not allowed as the first character(s) in a field of like characters.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">99 99</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">12 34<br>1234</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">67891</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Optional Small Special (.)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Accepts a special character if present. Optional characters are not allowed as the first character(s) in a field of like characters. Small special characters are - , and .</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">AA.99</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">MN.35<br>XY98</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">XYZ12</span></p></td>
</tr>

<tr class="c8"><td class="c34" colspan="5" rowspan="1"><p class="c0"><span class="c7">Other Template Operators -</span><span class="c2">&nbsp;These template operators assist in capturing, delimiting, and formatting scanned OCR data</span></p></td>
</tr><tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Literal String (&quot; and +)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Use either of these delimiting characters surrounding alphanumeric characters to define a literal string within a template that must be present in scanned OCR data. There are two characters used to delimit required literal strings; if one of the delimiter characters is present in the desired literal string, use the other delimiter.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">&quot;35+BC&quot;</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">35+BC</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">AB+22</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">New Line (E)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">To create a template of multiple lines, add E between the template of each single line.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">999EAAAA</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">321<br>BCAD</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">XYZW<br>12</span></p></td>
</tr>

<tr class="c8"><td class="c10 c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">String Extract (C)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator combined with others defines a string of characters to extract from the scanned data. The string extract is structured as follows:<br><br>CbPe<br><br>Where:<br>&bull; C is the string extract operator<br>&bull; b is the string begin delimiter<br>&bull; P is the category (one or more numeric or alpha characters) describing the string representation<br>&bull; e is the string end delimiter<br><br>Values for b and e can be any scannable character. They are included in the output stream.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">C&gt;A&gt;</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">XQ3&gt;ABCDE&gt;<br>-&gt;ATRU&gt;123</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">&gt;ABCDE&gt;<br>&gt;ATRU&gt;</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Ignore to End of Field (D)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator causes all characters after a template to be ignored. Use this as the last character in a template expression.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">999D</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">123-PED<br>357298</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">123<br>357</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Skip Until (P1)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator allows skipping over characters until a specific character type or a literal string is detected. It can be used in two ways:<br><br>P1ct<br><br>Where:<br>&bull; P1 is the Skip Until operator<br>&bull; c is the type of character that triggers the start of output<br>&bull; t is one or more template characters<br><br>P1&quot;s&quot;t<br><br>Where:<br>&bull; P1 is the Skip Until operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until operator, and the first character in the template should accommodate this trigger.</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">P1&quot;PN&quot;AA9999</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">123PN9876<br>X-PN3592</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">PN9876<br>PN3592</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Skip Until Not (P0)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator allows skipping over characters until a specific character type or a literal string is not matched in the output stream. It can be used in two ways:<br><br>P0ct<br><br>Where:<br>&bull; P0 is the Skip Until Not operator<br>&bull; c is the type of character that triggers the start of output<br>&bull; t is one or more template characters<br><br>P0&quot;s&quot;t<br><br>Where:<br>&bull; P0 is the Skip Until Not operator<br>&bull; &quot;s&quot; is one or more literal string characters that trigger the start of output<br>&bull; t is one or more template characters<br><br>The trigger character or literal string is included in output from a Skip Until Not operator.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">P0A9999</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">BPN3456<br>X-PN3592</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">5341<br>No output</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Repeat Previous (R)</span></p></td>
<td class="c16 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator allows a template character to repeat one or more times, allowing the capture of variable-length scanned data. The following examples capture two required alpha characters followed by one or more required digits:</span></p></td>
<td class="c17 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">AA9R</span></p></td>
<td class="c3" colspan="1" rowspan="1"><p class="c0"><span class="c2">AB3<br>AB3<br>32RM52700</span></p></td>
<td class="c1" colspan="1" rowspan="1"><p class="c0"><span class="c2">PN12345<br>PN12345<br>No output</span></p></td>
</tr>

<tr class="c8"><td class="c14" colspan="1" rowspan="1"><p class="c0"><span class="c2">Scroll Until Match (S)</span></p></td>
<td class="c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">This operator steps through scanned data one character at a time until the data matches the template.</span></p></td>
<td class="c17" colspan="1" rowspan="1"><p class="c0"><span class="c2">S99999</span></p></td>
<td class="c23" colspan="1" rowspan="1"><p class="c0"><span class="c2">AB3<br>PN12345<br>32RM52700</span></p></td>
<td class="c27" colspan="1" rowspan="1"><p class="c0"><span class="c2">No output<br>12345<br>52700</span></p></td>
</tr>

<tr class="c8"><td class="c14 c10" colspan="1" rowspan="1"><p class="c0"><span class="c2">Multiple Templates</span></p></td>
<td class="c10 c16" colspan="1" rowspan="1"><p class="c0"><span class="c2">This feature sets up multiple templates for OCR decoding. For each template in the multiple template string, use a capital letter X as a separator between the templates.<br><br>For example, set the OCR Template as 99999XAAAAA to decode OCR strings of either 12345 or ABCDE.</span></p></td>
<td class="c10 c21" colspan="3" rowspan="1"><p class="c0"><span>Following are sample templates with descriptions of valid data for each definition. The Field Definition is followed by its description:<br><br>&quot;M&quot;99977&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">M</span><span>&nbsp;followed by three digits and two optional digits.<br>&quot;X&quot;997777&quot;X&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</span><span class="c7">X</span><span>&nbsp;followed by two digits, four optional digits, and an X.<br>9959775599 &nbsp;&nbsp;&nbsp;&nbsp; : Two digits followed by any character, a digit, two optional digits, any two characters, and two digits.<br>A55&quot;-&quot;999&quot;-&quot;99 &nbsp;&nbsp; : A letter followed by two characters, a dash, three digits, a dash, and two digits.<br>33A&quot;.&quot;99 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Two alphanumeric characters followed by a letter, a period, and two digits.<br>999992991&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Five digits followed by an optional alpha, two digits, and an optional alphanumeric.<br>&quot;PN98&quot;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : Literal field -&nbsp;</span><span class="c7">PN98</span></p></td>
</tr>
</tbody>
</table>
-->