---
title: SimulScanResults
type: api
---


Defines all the error codes the SimulScan API returns.

**Values:**

* **SUCCESS** -Success.

* **ALREADY_SCANNING** -A scan operation is already in progress.

* **ALREADY_STOPPED_SCANNING** -The reader has already stopped scanning

* **READER_ALREADY_ENABLED** -Reader is already enabled

* **READER_IN_USE** -Another reader is already enabled and in use. Only one reader can be enabled at a time.

* **READER_ALREADY_DISABLED** -The reader is already disabled

* **FEATURE_NOT_SUPPORTED** -The feature is not supported completely or for specified input.

* **READER_NOT_ENABLED** -The selected reader is not enabled.

* **INVALID_OBJECT** -The reader has been released and is not valid.

* **FAILED_TO_LOAD_TEMPLATE** -Failed to load template

* **FAILED_TO_SET_TEMPLATE** -Failed to set template

* **TEMPLATE_NOT_SET** -Failed to set template

* **INVALID_VALUE** -The value passed is not valid.

* **NO_DATA_LISTENER** -Data listner is not set

* **EMDK_NOT_OPENED** -EMDK is not opened

* **READER_INIT_FAILED** -Reader initialization failed.

* **READER_DEINIT_FAILED** -Reader initialization failed.

* **UNDEFINED** -Undefined

* **FAILURE** -Failure

