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

