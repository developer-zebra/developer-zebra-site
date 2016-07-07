---
title: SimulScanException
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The SimulScan APIs throw a SimulScanException when an error occurs.
 
The error could be due to:
 <ol>
 <li>Incorrect use of APIs
 <li>Or in case of an unexpected error
 </ol>

##Public Methods

### getResult

**public SimulScanResults getResult()**

Returns the SimulScanResults object that provides additional information on the exception.

**Returns:**

com.symbol.emdk.simulscan.SimulScanResults - SimulScanResults





