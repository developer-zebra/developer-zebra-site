---
title: PaymentResults
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.1'
---


Defines all the error codes the payment API returns.
 <br><br>

**Values:**

* **SUCCESS** -Success.

* **INVALID_VALUE** -The parameter value is not correct.

* **AUTHORIZATION_FAILED** -Application authorization failed.

* **FAILURE** -Operation is failed.

* **TIMED_OUT** -Operation is timed out.

* **AUTHENTICATION_FAILED** -Payment device authentication failed.

* **ENABLE_FAILED** -Failed to enable the payment device.

* **DISABLE_FAILED** -Failed to disable the payment device.

* **ALREADY_ENABLED** -Payment device is already enabled and its ready to use.

* **OPERATION_CANCELLED** -The operation is cancelled by the user.

* **OK_KEY_PRESSED** -OK or Enter key is pressed by the user.

* **CANCEL_KEY_PRESSED**

* **LOW_POWER_OPERATION_CANCELLED** -The payment device is low power and operation is cancelled.

* **TLV_DATA_ERROR** -Tag-Length-Value data format error.

* **MAC_KEY_CREATE_ERROR** -Error occured during mac key creation.

* **MAC_BLOCK_CREATE_ERROR** -Error occured during mac block creation.

* **MAC_VALIDATION_ERROR** -Mac validation failed.

* **INVALID_MAC_KEY_LENGTH** -Invalid MAC key length.

* **INVALID_DATA_LENGTH** -Invalid data length

* **INVALID_PIN_LENGTH** -Invalid maximum and minimum PIN length

* **ALREADY_CLOSED** -The device is already closed.

* **CHIP_READ_ERROR** -Error occurred while reading chip or IC.

* **CARD_BLOCKED** -The card is blocked.

* **CHIP_READ_NO_APP_ERROR** -No app to read the chip on this card.

* **CARD_INSERTION_ERROR**

* **DEVICE_NOT_PAIRED** -The payment device is not paired.

* **DEVICE_NOT_ENABLED** -The payment device is not enabled.

* **INVALID_CONFIGURATION** -The payment device configuration is not correct.

* **COMMUNICATION_ERROR** -Communication error occurred.

* **FEATURE_NOT_SUPPORTED** -The feature is not supported.

* **INVALID_OBJECT** -The object is invalid.

* **NO_DATA_LISTENER** -Data listener is not added.

* **PREVIOUS_COMMAND_PENDING** -Previously requested command is in progress, wait for it to complete.

* **CARD_SWIPE_ERROR** -Error occurred while swiping the card.

* **EMV_APP_NOT_SELECTED** -Must set the Emv App before calling this method.

* **EMV_APP_ADD_ERROR** -Failed to add the EMV APP/EMV CAPK.

* **EMV_TRANSACTION_DENIED** -EMV transaction is denied.

* **CARD_EXPIRED** -The card is expired.

* **APP_EXPIRED** -The Card App is expired.

* **CARD_NOT_AUTHORIZED**

* **API_SEQUENCE_ERROR** -API not called in specific order.

* **DEVICE_IN_USE** -Payment device is already used by other application. 
 Close the previous session before using it or set the forceEnable to true in the payment configuration to forcibly close the previous session.

* **CONNECTION_ERROR** -Bluetooth connection error. Try calling enable..

* **NULL_POINTER** -Null value is passed as input parameter.

* **CARD_REMOVED** -Card removed while payment device was reading the card data.

* **EMV_TRANSACTION_ERROR** -EMV transaction error or not expected.

* **CARD_AUTHENTICATION_FAILED** -Card data authentication failed.

* **GET_ONLINE_PIN_FAILED** -Get Online PIN failed.

* **GAC_CARD_LOOPBACK**

* **GAC_RESPONSE_ERROR**

* **NO_DUKPT_KEY** -No DUKPT key to get PIN

* **EMV_CAPK_ADD_ERROR** -Add EMV CAPK failed

* **ACCOUNT_NUMBER_MISMATCH** -The account does not match account number of card used.

* **DISABLED** -New state when PD40 disconnects or goes out of range

* **CANNOT_ABORT** -Abort does not support aborting the previously requested command

* **REMOVECARD_COMMAND_PENDING** -RemoveCard is pending, Please remove the card to perform other requests.

* **UNSUPPORTED_ENCRYPTION_TYPE** -Encryption type not supported.

* **NO_ENCRYPTION_KEY** -Data encryption key is not injected on Payment Device.

* **NO_PIN_INPUT** -User choose to bypass PIN.

* **REPETITIVE_OPERATION** -Same command is repeated

* **DEVICE_UPDATE_IN_PROGRESS** -The PD40 Device Upadate is in progress.

* **UNDEFINED** -Error code not defined.












