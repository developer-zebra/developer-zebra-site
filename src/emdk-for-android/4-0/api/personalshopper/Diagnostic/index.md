---
title: Diagnostic
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


This class provides access to fetch the diagnostics information.
 
 

**Example Usage:**
	
	:::java
	
	paramId
	DiagnosticData diagnosticData =  PsObject.diagnostic.getDiagnosticData(DiagnosticParamId paramId
	,DiagnosticConfig diagnosticconfig);
	


##Public Methods

### getDiagnosticData

**public DiagnosticData getDiagnosticData(int paramId, DiagnosticConfig diagnosticconfig)**

Get the values for all the parameters or the specified parameter ID.

**Parameters:**

`paramId`

`diagnosticconfig`

**Returns:**

com.symbol.emdk.personalshopper.DiagnosticData - DiagnosticData : Manufacturing date, Battery capacity in Percentage ,
 Battery State of Health in Percentage ,Battery capacity in Minutes,
 Device charging time in minutes  ,Days since battery was last replaced ,
 Time since last reboot in minutes , Battery charging time required for shopping trip

**Throws:**

com.symbol.emdk.personalshopper.DiagnosticException














