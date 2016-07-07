---
title: PaymentData.DataType
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


The DataType enum identifies the asynchronous method for which the response is received. 
 The onData callback provides payment data object which gives the result and data type. 
 Payment data object can be type casted to the respective derived class to obtain data for that method.

**Values:**

* **ENABLE** -Enum value to identify the Enable method response.

* **READCARDDATA** -Enum value to identify the readCardData method response.

* **PROMPTPIN** -Enum value to  identify the promptPin method response.

* **PROMPTMENU** -Enum value to identify the promptMenu method response.

* **PROMPTMESSAGE** -Enum value to identify the promptMessage method response.

* **GETEMVTAG** -Enum value to identify the getEmvTags method response.

* **PROMPTADDITIONALINFO** -Enum value to identify the PromptAdditonalInfo method response.

* **COMPLETEONLINEEMV** -Enum value to identify the completeOnlineEmv method response.

* **VALIDATEMAC** -Enum value to identify the validateMac method response.

* **AUTHORIZECARD** -Enum value to identify the AuthorizeCard method response.

* **UNDEFINED** -Undefined.

