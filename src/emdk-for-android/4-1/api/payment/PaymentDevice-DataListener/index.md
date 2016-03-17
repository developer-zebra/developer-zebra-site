---
title: PaymentDevice.DataListener
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


An interface for notifying client applications when the payment data and
 status available. The customer application must implement the
 DataListener interface to get the callbacks.
 
 

**Example Usage:**
	
	:::java
	
	public class MainActivity extends Activity implements DataListener {
	'@override
	void onData(PaymentData data) {
	if(data.getResult() == SUCCESS) {
	if(data.getDataType() == CARD_DATA) {
	CardData cardData = (CardData) data;
	String expiryDate = cardData.getExpiryDate();
	}
	}
	}
	}
	


##Public Methods

### onData

**public void onData(PaymentData data)**

This is the callback method upon data or status notification.

**Parameters:**

`data` - Payment data Object. Based on the type of the data, this
            object can type cast to corresponding data class to obtain
            the data.

**Returns:**

void









