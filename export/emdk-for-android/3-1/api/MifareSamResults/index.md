---
title: ##MifareSamResults
---
###MifareSamResults

Defines all the error codes the MifareSAM APIs returns. <br>
 <br>

**Values:**

* **SUCCESS** -Success

* **EMDK_NOT_OPENED** -The EMDK is not opened.

* **NFC_DISABLED** -NFC is disabled in settings, try enabling the NFC.

* **SAM_NOT_AVAILABLE** -SAM not present in the device. Try inserting SAM before using the Secure NFC API.

* **FAILURE** -Failure

* **ALREADY_CONNECTED** -The SAM is already connected.

* **INVALID_VALUE** -Invalid input parameter

* **INVALID_KEY** -The key type or length is invalid.

* **PARAM_NOT_SUPPORTED** -The parameter not supported.

* **NOT_CONNECTED** -The SAM is not connected. Try calling connect before making other calls.

* **SAM_NOT_IN_AV1_MODE** -The SAM is not in the AV1 mode.

* **SAM_NOT_IN_AV2_MODE** -The SAM is not in the AV2 mode.

* **SAM_KEY_DISABLED** -The specified SAM key is disabled.

* **INVALID_HOST_KEY** -The key specified is not a host key

* **MEMORY_FAILURE** -Memory failure (KUC could not be updated).

* **KEY_VER_NOT_FOUND** -The key version is not found.

* **INVALID_KEY_ENTRY_OR_KUC** -Referenced data is invalid for key entry or KUC (Key Usage Counters).

* **AUTH_COND_NOT_SATISFIED** -SAM in AV1 mode: Key entry cannot be used for authentication, MIFARE SAM
 AV2 needs to be unlocked with key entry 00h first or KUC limit reached.
 
 SAM in AV2 mode: Key entry disabled, no Host Key type, startup host
 authentication accomplished, no lock/unlock key, not key zero, unlock key
 number and version mismatch, no AES key type, KUC limit exceeded or
 Unknown key type.

* **UNDEFINED** -Error code not defined.

