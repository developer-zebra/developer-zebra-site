---
title: PaymentException
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The methods of payment object throw a PaymentException when an error
 occurs.

 The error could be due to:
 <ol>
 <li>Client using the API incorrectly
 <li>Or because an unexpected error occurred

##Public Methods

### getResult

**public PaymentResults getResult()**

Returns the PaymentResults.

**Returns:**

com.symbol.emdk.payment.PaymentResults


