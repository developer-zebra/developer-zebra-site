---
title: StatusData.ScanAndPairStates
type: api
---


Defines the different states of the scan and pir/unpair.

**Values:**

* **WAITING** -Scanner is waiting for hard trigger press

* **SCANNING** -Scanner beam is on and it is acquiring data.

* **DISCOVERING** -Discovering the Bluetooth device to be paired.

* **PAIRED** -The Bluetooth device is paired.

* **UNPAIRED** -The Bluetooth device is unpaired.

* **ERROR** -Error occurred during the scan and pair or unpair.
  Call StatusData .getResult() for error information.

* **UNDEFINED** -Undefined. This is the initial state.

