---
title: EMDKResults.STATUS_CODE
type: api
---


Defines all the status codes the library returns. 
 
 

**Example Usage:**
	
	:::java	
	results.statusCode.SUCCESS;


**Values:**

* **SUCCESS** -Process profile was a success.

* **FAILURE** -Process profile was a failure.

* **UNKNOWN** -Process profile had mixed results.

* **NULL_POINTER** -Process profile was a had a null value.

* **EMPTY_PROFILENAME** -Profile name passed Process profile was empty.

* **EMDK_NOT_OPENED** -EMDK is not opened

* **CHECK_XML** -This is returned when multiple features are present in the profile. In such a case the only way to
 verify if the API call was successful is to analyze the XML.

* **PREVIOUS_REQUEST_IN_PROGRESS** -The previous request is in progress, wait for it to complete before next request.

* **PROCESSING** -The processing of profile started, the result will be returned through the data listener callback registered.

* **NO_DATA_LISTENER** -The asynchronous method (Ex: processProfileAsync) is issued without adding the data listener.

* **FEATURE_NOT_READY_TO_USE** -The requested feature is not ready to use. Try later.

* **FEATURE_NOT_SUPPORTED** -The requested feature is not supported on this device.

