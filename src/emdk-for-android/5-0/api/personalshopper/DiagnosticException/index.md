---
title: DiagnosticException
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


The methods of diagnostic API throw a DiagnosticException when an error
 occurs.

 The error could be due to:
 <ol>
 <li>Client using the API incorrectly
 <li>Or because an unexpected error occurred

##Public Methods

### getResult

**public DiagnosticResults getResult()**

Returns the DiagnosticResults enum.

**Returns:**

com.symbol.emdk.personalshopper.DiagnosticResults - Error type (Diagnostic Result)

