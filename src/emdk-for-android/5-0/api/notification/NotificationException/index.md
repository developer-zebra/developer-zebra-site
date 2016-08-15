---
title: NotificationException
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---


The methods of notification object will throw a NotificationException when an error
 occurred. 

The error could be due to:
 <ol>
 <li>Client using the API incorrectly
 <li>Or because an unexpected error occurred

##Public Methods

### getResult

**public NotificationResults getResult()**

Returns the NotificationResults enum value.

**Returns:**

com.symbol.emdk.notification.NotificationResults


