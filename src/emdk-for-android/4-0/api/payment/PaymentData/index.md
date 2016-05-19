---
title: PaymentData
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


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












