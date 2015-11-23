#PaymentData

PaymentData class holds the response or data sent  by the payment device.

##Public Methods

### getDataType

**public DataType getDataType()**

Returns the method type so that the PaymentDataBase class can be type
 cast to the respective derived class to obtain the actual data

**Returns:**

com.symbol.emdk.payment.PaymentData.DataType - Return the method type

### getResult

**public PaymentResults getResult()**

This method can used to obtain the payment response status.

**Returns:**

com.symbol.emdk.payment.PaymentResults - Returns PaymentResults;

##Public Enums

###PaymentData.DataType

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

