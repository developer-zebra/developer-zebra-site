---
title: MifareDesfireResults
type: api
layout: guide.html
product: EMDK For Android
productversion: '5.0'
---




**Values:**

* **SUCCESS** -Success

* **FAILURE** -Failure

* **EMDK_NOT_OPENED** -The EMDK is not opened.

* **NOT_ENABLED** -The connection to the Tag is not enabled. Try after enabling the TAG.

* **INVALID_SAM_KEY** -The SAM key is invalid or SAM key does not satisfy all the conditions.

* **TAG_LOST** -Tag lost

* **SAM_AUTHENTICATION_ERROR** -The application is trying to use the key which is not present on the SAM.

* **INVALID_VALUE** -Invalid input parameter or value

* **ALREADY_ENABLED** -The tag is already enabled.

* **APP_NOT_SELECTED** -The application identifier(AID) not selected error will be returned if
 the POS application calls method such as getFileSettings, getFileds
 without selecting the Application (AID)..

* **NO_TRANSACTION_CHANGES** -There are no chnages to file or record to complete the requested
 operation such abort or commit transaction.

* **TAG_OUT_OF_MEMORY** -The volatile memory (EEPROM) on the tag is full to perfrom the requested
 operation.

* **INVALID_COMMAND_CODE** -This is protocol error when MifareDesfire library passes invalid command
 code to the SAM.

* **INTEGRITY_ERROR** -This is protocol error when MifareDesfire library passes incorrect
 padding bytes.

* **TAG_KEY_NOT_FOUND** -The key requested for the operation is not present in the Tag..

* **INVALID_COMMAND_LENGTH** -This is protocol error when MifareDesfire library passes invalid command
 string length to the SAM..

* **APP_NOT_FOUND** -The application is not found on the tag.

* **APP_INTEGRITY_ERROR** -The application integrity error on the tag. This error doesnot occur
 under normal and refer Desfire specification for more information.

* **AUTHENTICATION_ERROR** -The tag is not authenticated or not allowed to peform operations
 requested..

* **ADDITIONAL_FRAME_REQUIRED** -The protocol error occurs when the library passes command such as invalid
 APDU command mode, invalid padding byes, APDU command string length,
 etc..

* **FILE_SIZE_LIMIT_EXCEEDED** -The file size limit exceeded..

* **PICC_INTEGRITY_ERROR** -The PICC integrity error on the tag. This error doesnot occur under
 normal and refer Desfire specification for more information.

* **COMMAND_ABORTED** -The previous command not completed because of additional frame exception
 and if it is not given to that command but we trying to execute the other
 command

* **PICC_DISABLED_ERROR** -The PICC disabled error on the tag. This error doesnot occur under normal
 and refer Desfire specification for more information.

* **APP_LIMIT_EXCEEDED** -No.of applications exceeded on the tag i.e.,Maximum of 28 application is
 allowed.

* **ALREADY_EXISTS** -The file or application identifier specified already exists on the tag.

* **TAG_MEMORY_ERROR** -The error occurred on the tag memory. This error doesnot occur under
 normal and refer Desfire specification for more information.

* **FILE_NOT_FOUND** -The requested file does not exists on the tag.

* **FILE_INTEGRITY_ERROR** -The file integrity error occurred on the tag. This error doesnot occur
 under normal and refer Desfire specification for more information.

* **PARAM_NOT_SUPPORTED** -The parameter not supported.

* **UNDEFINED** -Error code not defined.





