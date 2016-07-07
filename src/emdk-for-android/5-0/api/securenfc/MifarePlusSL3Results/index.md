---
title: MifarePlusSL3Results
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

* **AUTHENTICATION_ERROR** -The tag is not authenticated or not allowed to peform operations
 requested.

* **RW_OPERATIONS_LIMIT_EXCEEDED** -The number of read or write operation is exceeded for the current session

* **INVALID_MAC** -Invalid Mac in command or response

* **INVALID_BLOCK_NUMBER** -The block using for the operation is not valid.

* **BLOCK_NOT_EXISTS** -The block using for the operation does not exist on the tag.

* **NOT_SUPPORTED_COMMAND** -The current command not supported for the current card state i.e., the
 application is trying to perform the operation which is not supported for
 MifarePlus Security level 3.

* **ACCESSING_EMPTY_BLOCK** -The application is trying to perform operation or access the block on the tag which is empty or null.

* **ALREADY_ENABLED** -The tag is already enabled.

* **TAG_LOST** -Tag lost

* **TAG_MEMORY_ERROR** -The requested operation cannot be performed on the block either due to
 overflow or underflow of the block memory

* **INVALID_VALUE** -The value or parameter passed is invalid.

* **INVALID_VALUE_BLOCK** -The block used for the increment /decrement/transfer is not a valid value
 block.

* **SAM_AUTHENTICATION_ERROR** -The application is trying to use the key which is not valid or not
 present on the SAM.

* **PARAM_NOT_SUPPORTED** -The parameter not supported.

* **UNDEFINED** -Undefined





