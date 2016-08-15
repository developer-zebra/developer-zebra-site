---
title: ScannerException
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The methods of barcode scanning object throw a ScannerException when an error
 occurs. 

The error could be due to:
 <ol>
 <li>Client using the API incorrectly
 <li>Or because an unexpected error occurred

##Public Methods

### getResult

**public ScannerResults getResult()**

Returns the ScannerResults enum value.

**Returns:**

com.symbol.emdk.barcode.ScannerResults


