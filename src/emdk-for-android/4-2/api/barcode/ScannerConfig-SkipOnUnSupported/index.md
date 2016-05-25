---
title: ScannerConfig.SkipOnUnSupported
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.2'
---


Describes what to do when the scanner config fields are not supported for the specified scanner.

**Values:**

* **NONE** -Throws exception on any unsupported parameters or values.

* **UNSUPPORTED_PARAM** -Skips the only unsupported paramter and continues with next.

* **UNSUPPORTED_VALUE** -Skips the only unsupported values and continues with next.

* **ALL** -Skips both unsupported paramters and values and continues with next.

