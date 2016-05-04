---
title: SimulScanConfig
type: api
layout: guide.html
product: EMDK For Android
productversion: '4.0'
---


The SimulScanConfig class provides access to reader configuration settings.
 
 

**Example Usage:**
	
	:::java
	
	SimulScanMultiTemplate template1 = new SimulScanMultiTemplate(fileUri);//fileUri points to the template
	SimulScanReader reader = simulscanManager.getDevice(template1.deviceIdentifier);
	reader.enable();
	SimulScanConfig config = reader.getConfig(); // Reader object must be enabled before calling getConfig
	config.audioFeedback = false;
	reader.setConfig(config); // Reader object must be enabled and not scanning when calling setConfig
	


##Public Fields

###multiTemplate

The SimulScanMultiTemplate to scan

**Type:**

com.symbol.emdk.simulscan.SimulScanMultiTemplate

###autoCapture

If true, form will be captured automatically when detected.
 If false, user must manually tap screen or press trigger to capture form.

**Type:**

java.lang.Boolean

###debugMode

If enabled, allows a session to write form capture, region images, region values, and other data to storage. 
 After successful session, a prompt will come up allowing the user to turn Debug Mode off.

**Type:**

java.lang.Boolean

###audioFeedback

Turn on/off audio feedback.

**Type:**

java.lang.Boolean

###hapticFeedback

Turn on/off haptic feedback.

**Type:**

java.lang.Boolean

###ledFeedback

Turn on/off LED feedback.

**Type:**

java.lang.Boolean

###userConfirmationOnScan

If userConfirmationOnScan is true, shows UI for user to confirm the scanned data
 before sending results to application.

**Type:**

java.lang.Boolean

###identificationTimeout

Amount of time in milliseconds to wait before timing out identification.

**Type:**

int

###processingTimeout

Amount of time in milliseconds to wait before timing out processing.

**Type:**

int












