---
title: Diagnostic
---
#Diagnostic

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

paramId

diagnosticconfig

**Returns:**

com.symbol.emdk.personalshopper.DiagnosticData

**Throws:**

com.symbol.emdk.personalshopper.DiagnosticException



