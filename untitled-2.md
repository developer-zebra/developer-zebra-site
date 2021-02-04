# Test Criteria - Zebra Technologies TechDocs

 Device Diagnostic Tool 2.4

## Overview <a id="overview"></a>

Device Diagnostic Tool tests for the operation of device hardware features based on specific criteria, with the following results:

* **Pass** - if the criteria is met
* **Fail** - if the criteria is not met
* **Information** - displays informational data \(pass/fail is not applicable\)

| Test | Requires User Intervention | Properties/Action | Pass/Fail Criteria |
| :--- | :--- | :--- | :--- |
| Scanner | Yes | Scan a barcode | Passes when a barcode is scanned successfully. |
| Button | Yes | Button press:   - Scan trigger \(left or right\)   - Push-to-talk   - Volume up   - Volume down | Passes when the button press is detected for each of the buttons. |
| Touch Screen | Yes | Touch grid | Passes when touch is detected within each grid box on the screen. |
| Bluetooth | No | Information returned:   - Name   - Radio power cycle   - Functional/ Non-functional   - Connectable/ Discoverable | Passes if the Bluetooth radio can be power cycled and the information is returned successfully. |
| WLAN | No | Information returned:   - MAC address   - Network test   - Signal strength \(i\)   - ESSID \(i\)   - IP address \(i\)   - BSSID \(i\)   - Speed \(i\) | Passes when the network test is successful. |
| WWAN | No | Information returned:   - Sim state   - Voice state   - Data state   - WAN type \(i\)   - Signal strength \(i\)   - Phone number \(i\)   - Device ID \(i\) | Passes when the sim card is present. Passes automatically on non-WAN devices. |
| Battery | No | Information returned:   - Part number   - Serial number   - Manufacture date   - Decommission status   - Voltage \(i\)   - Current \(i\)   - Temperature \(i\)   - Level \(i\)   - Current Capacity \(i\) | Passes if the battery health is good and the battery information is retrieved successfully. **Note:** Current Capacity only applies to PowerPrecision+ batteris. |
| Audio | Yes | Record and play file | User manual intervention is required. The user manually records audio then listens to the recording. Test pass/fail is based on user discretion. Device speakers should be used for this test - use of headphones is not acceptable. This test should be conducted in an environment with minimal background noise for successful testing. Set the device to maximum volume during playback for best results. **Note:** This test cannot be performed if the device does not have a microphone, e.g. MC18. |

Red colored text indicates sensitive information that is not displayed. Instead, “valid” or “invalid” is shown to indicate whether the information is detected in the proper format. “Valid” indicates the appropriate value was retrieved. “Invalid” indicates the value retrieved is null, empty, or does not match the expected MAC address pattern \(only applies to MAC address\).

 **\(i\)** indicates informational data that is considered as extra data, which is displayed if **show\_extra\_data** is set to “true” in the `configuration.xml` file.

 Refer to [Configure Tests](../configuration#configuretests) section for a description of each test.

## 

## See Also <a id="seealso"></a>

* [About Device Diagnostic Tool](../about)
* [Usage Guide](../usage)
* [Configuration](../configuration)

