---
title: ScannerConfig.DecoderParameters.UpcEanParameters
layout: guide.html 
product: EMDK For Xamarin 
productversion: '7.0' 
---
The UPCEAN class provides access to parameters that are available for the UPC/EAN decoder. UPC/EAN is the family of codes which are used to identify products and UPC EAN Params are the params common to these codes

**Type** - Java.Lang.Object

##Properties

###BooklandCode
Flag to enable Bookland code decoding. Any EAN which begins with the 978 prefix is called a Bookland EAN barcode and is used on books and book related products internationally.

**Type** - System.Boolean
###BooklandFormat
Specifies the bookland format to use. Use enum ScannerConfig.BooklandFormat.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.BooklandFormat
###ConvertDataBarToUpcEan
If this is set it converts DataBar bar codes to UPC/EAN format. For this setting to work UPC/EAN symbologies must be enabled. A check in the checkbox indicates that the option is enabled.

**Type** - System.Boolean
###CouponCode
Enables Coupon code decoding. Note that in order to successfully decode Coupon codes, all of the correct decoders must be enabled.

**Type** - System.Boolean
###CouponReport
Used to differentiate between old coupon (UPC/EAN and Code128) and new GS1 DataBar Coupons. NOTE: There is an Interim GS1 DataBar Coupon (UPC A and the GS1 DataBar), which is meant for smooth transition of adaption from old coupon format to new coupon format. If an interim coupon is presented to the scanner, it will read old or new portion of it, depending on the report mode setting. Use class ScannerConfig.CouponReport.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.CouponReport
###EanZeroExtend
Enable this parameter to add five leading zeros to decoded EAN-8 symbols to make them compatible in format to EAN-13 symbols. Disable this to transmit EAN-8 symbols as is

**Type** - System.Boolean
###RandomWeightCheckDigit
Flag to enable random weight check digit verification.

**Type** - System.Boolean
###ReducedQuietZone
Flag to Enable or Disable decoding of UPC barcodes with reduced quiet zones. If you enable, select a OneDQuietZoneLevel to set the effort level.

**Type** - System.Boolean
###SecurityLevel
The scanner of fers four levels of decode security for UPC/EAN bar codes. Select higher security levels for lower quality bar codes. There is an inverse relationship between security and decode speed, so be sure to choose only that level of security necessary for the application. Use class ScannerConfig.SecurityLevel..

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.SecurityLevel
###Supplemental2
Flag to enable length 2 supplementals.

**Type** - System.Boolean
###Supplemental5
Flag to enable length 5 supplementals.

**Type** - System.Boolean
###SupplementalMode
The supplemental mode. Use enum ScannerConfig.SupplementalMode.

**Type** - Symbol.XamarinEMDK.Barcode.ScannerConfig.SupplementalMode
###SupplementalRetries
Retry count for auto-discriminating for supplementals. Possible values are 2 to 20 inclusive. Note that this flag is only considered if Supplemental Mode - UPC EAN is set to one of the following values: Supplementals Auto, Supplementals Smart, Supplementals 378-379 , Supplementals 978-979, Supplementals 977 or Supplementals 414-419-434-439 (2 to 20, default 10).

**Type** - System.Int32


