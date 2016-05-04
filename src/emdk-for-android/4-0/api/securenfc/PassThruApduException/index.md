---
title: PassThruApduException
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


The methods of PassThruApduProcessor object throw a PassThruApduException when an error
 occurs.

 The error could be due to:
 <ol>
 <li>Client using the API incorrectly
 <li>Or because an unexpected error occurred

##Public Methods

### getResult

**public PassThruApduResults getResult()**

Returns the PassThruApduResults.

**Returns:**

com.symbol.emdk.securenfc.PassThruApduResults












