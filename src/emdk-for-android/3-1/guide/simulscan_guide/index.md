---
title: "SimulScan API programmer's guide"
layout: guide.html
product: EMDK For Android
productversion: '2.3'
---

##Introduction
SimulScan is an end-to-end data capture solution for extracting critical data from documents. A differentiating data capture value-add, it involves capturing fields of interest in a given document and converting it into data that an end-user application can use immediately at the point of transaction.

SimulScan customers benefit from:

- Productivity gain by decoding multiple bar codes read with a single trigger pull
- Automated data entry with character recognition [OCR]
- Simplified workflow exceptions with checked mark recognition [OMR] and Signature presence detection

Customers can interactively capture documents and obtain meaningful data present in the document.  Barcodes are identified and decoded; strings are recognized from fields containing text; images are refined from fields containing pictures and so forth. Based on a "template", an image of the entire document is processed by various engines to extract the relevant data.

##Determining device support

- Supported devices : TC55, TC75
- SimulScan v1.8
- EMDK v3.1.x


###Our licensing procedure

- Obtain a device license from [https://softwarelicensing.zebra.com/](https://softwarelicensing.zebra.com/)
	- Further information on the licensing process can be found [here](https://softwarelicensing.motorolasolutions.com/documentation/index.html).
- Copy the received XML to the device

- Setup the license on the device (**TC55 2.42 and later devices**)

	- Go to Settings -> About phone -> Legal information -> Symbol licenses (this will only be available on a 2.42+ BSP device)
	- Click on the Android menu button -> Install license
	- Navigate to the XML you copied
	- Once this is complete, the License Information should be updated to reflect the fact that a license is installed


##Getting started

###Initialize EMDK manager

Follow the [“Basic Scanning Tutorial using Barcode API”](../../tutorial/tutBasicScanningAPI) to
set up your project for the EMDK.

>Note: It is recommended to release EMDKManager in onDestroy() and onClose() (Service disconnected unexpectedly)

###Get SimulScanManager

	:::java
	SimulScanManager simulscanManager = (SimulScanManager) emdkManager.getInstance(FEATURE_TYPE.SimulScan);

>Note: Release() must be called on SimulScanManager before switching to another EMDK or DataWedge application

###Get SimulScanReader

There are two options here:

1. Use the SimulScanManager.getDevice(SimulScanDeviceIdentifier deviceIdentifier) API

	The valid SimulScanDeviceIdentifiers are:
	- INTERNAL_CAMERA1 : Use the internal camera
	- INTERNAL_IMAGER1 : Use the internal imager
	- TEMPLATE_DRIVEN : Use the device defined in the template

	If the SimulScanDeviceIdentifier is not valid in the target platform an exception will be thrown from the call to “getDevice”

		:::java
		try {
			simulscanManager.getDevice(SimulScanDeviceIdentifier.INTERNAL_CAMERA1);
		} catch (SimulScanException e) {
			e.printStackTrace();
		}

2. Use the SimulScanManager.getSupportedDevicesInfo() first and then pass one the received SimulScanReaderInfo objects to SimulScanManager.getDevice(SimulScanReaderInfo simulscanReaderInfo)

		:::java
		List<SimulScanReaderInfo> readerInfoList = simulscanManager.getSupportedDevicesInfo();
		try {
			simulscanManager.getDevice(readerInfoList.get(0));
		} catch (SimulScanException e) {
			e.printStackTrace();
		}

###Using SimulScanReader

First register data and status listener to the SimulScanReader object. The listeners must implement the SimulScanDataEventListerner & SimulScanStatusEventListerne interfaces.

	:::java
	public class SimulScanTestApp implements SimulScanStatusEventListerner, SimulScanDataEventListerner{
		@Override
		public void onSimulScanData(SimulScanData form) {
			// TODO Auto-generated method stub
		}
		@Override
		public void onSimulScanStatus(SimulScanStatusData status) {
			// TODO Auto-generated method stub
		}
	}

	....

	SimulScanTestApp m_ SimulScanTestApp = new SimulScanTestApp();
	try {
		selectedSimulScanReader.addSimulScanStatusListener(m_ SimulScanTestApp);	selectedSimulScanReader.addSimulScanDataListener(m_ SimulScanTestApp);
	} catch (SimulScanException e) {
		e.printStackTrace();
	}

**SimulScanReader.enable()** enables the reader hardware. This method does not make the reader to scan. Basically it will make the scanner device available for your application. If another reader is already enabled by you or other applications, this will throw a SimulScanException. You must call disable() when you are done, otherwise all readers will remain locked and will be unavailable for this and any other application that uses SimulScan.

	:::java
	try {
		selectedSimulScanReader.enable();
	} catch (SimulScanException e) {
		e.printStackTrace();
	}

Once the barcode is enabled, we will must set a valid template for the reader. The template and other configurations can be changed via the SimulScanReader’s SimulScanConfig. The templates can be loaded via the SimulScanMultiTemplate class.

	:::java
	SimulScanConfig config = selectedSimulScanReader.getConfig();

	SimulScanMultiTemplate multiTemplate = new SimulScanMultiTemplate(Uri.fromFile("/file/path"));
	if(multiTemplate != null)
		config.multiTemplate = multiTemplate;
	//optionally set other configs
	config.enableAutoCapture = true;
	 config.enableResultConfirmation = true;
	 config.processingTimeout = 10000;

	// Apply config
	 selectedSimulScanReader.setConfig(config);

To create SimulScan templates use the “Template Builder" graphical tool web tool at https://simulscan.zebra.com/.
 Template builder help can be found there at https://simulscan.zebra.com/Content/Help/WebHelp/index.htm.
 After creating the templates, copy the template XML to your device and use the “new SimulScanMultiTemplate()” API to open the created template.

After setting a template we can start a scan using the SimulScanReader.read() API. The read request can be canceled by issuing a cancelRead(). If a read() is submitted while another read is pending, the method call will fail. It is recommended to check whether a read is pending by calling isReadPending() before submitting a read().

	:::java
	try {
		if(!selectedSimulScanReader.isEnabled())
			selectedSimulScanReader.enable();
	} catch (SimulScanException e) {
		e.printStackTrace();
	}

When we are done with scanning, we must release the scanner hardware resources for other applications to use. So it is recommended to override onStop() method disable any enabled SimulScanReaders.

	:::java
	@Override
	public void onStop(){
		if(selectedSimulScanReader.isReadPending()){
			try {
				selectedSimulScanReader.cancelRead();
			} catch (SimulScanException e) {
				e.printStackTrace();
			}
		}
		try {
			if(selectedSimulScanReader.isEnabled()){
				selectedSimulScanReader.disable();
			}
		} catch (SimulScanException e) {
			e.printStackTrace();
		}
		super.onStop();
	}

###SimulScanConfig in detail

The SimulScanConfig APIs can be used to set various SimulScan configuration parameters for each SimulScan reader. To get the current configuration of a SimulScanReader via a SimulScanConfig object, use the SimulScanReader.getConfig() API. Use the SimulScanConfig object’s public parameters to change the configuration and then call SimulScanReader.setConfig(SimulScanConfig config) to apply the changes.

The valid configuration parameters are as follows:

- enableAutoCapture : If true, form will be captured automatically when detected.
- enableDebugMode : If enabled, allows a session to write form capture, region images, region values, and other data to storage.
- enableFeedbackAudio : Turn on/off audio feedback.
- enableHaptic : Turn on/off haptic feedback.
- enableLED : Turn on/off LED feedback.
- enableResultConfirmation : If enabled, shows a UI confirmation with results in SimulScanView before sending results back to application.
- identificationTimeout : Amount of time in milliseconds to wait before timing out identification.
- multiTemplate : The SimulScanMultiTemplate to scan
- processingTimeout : Amount of time in milliseconds to wait before timing out processing

	:::java
	SimulScanConfig config = selectedSimulScanReader.getConfig();

	config.enableAutoCapture = true;
	 config.enableResultConfirmation = true;
	 config.processingTimeout = 10000;

	// Apply config
	 selectedSimulScanReader.setConfig(config);

###Handling onSimulScanStatus events

EMDK will generate onSimulSCanStatus events when there is a change in state in a particular SimulScanReader. Use the SimulScanStatusData object in the onSimulScanScanStatus callback method to get information on the status.

	:::java
	@Override
	public void onSimulScanStatus(SimulScanStatusData statusData) {

		// Print the friendly name of the Reader that originated the status update
		Log.v(TAG, "Reader: "+ statusData.getFriendlyName());
		// Handle the various state changes
		switch (statusData.getState()) {
			case DISABLED:
				Log.v(TAG, "onDisabled");
				break;
			case ENABLED:
				Log.v(TAG, "onEnabled");
				break;
			case SCANNING:
				Log.v(TAG, "Scanning");
				break;
			case IDLE:
				Log.v(TAG, "Idle");
				break;
			case ERROR:
			Log.e(TAG, "ERROR: " + statusData.extendedInfo. getExtendedStatusDescription ());
				break;
			case UNKNOWN:
			default:
				break;
		}
	}


Use the SimulScanStatusData’s getFriendlyName() API to get the friendly name of the SimulScanReader that has generated the Status event and use the getState() API to get the SimulScanStatus object with the status change information.

The list of valid states are as follows:

- DISABLED : Disabled called successfully on reader
- ENABLED : Enabled reader successfully
- ERROR : Error occurred
- IDLE : Finished scanning
- SCANNING : Successfully started scanning
- UNKNOWN : Known status

For additional error information use the Extended info parameter of the SimulScanStatusData object.

>Note: If you plan to do any significant processing during the onSimulScanStatus callback, you should do so in a background thread so that it does not block the UI thread.

###Handling onSimulScanData events

EMDK will generate onSimulScanData events after a successful scan. Use the SimulScanData object that is passed to this callback routine to get the extracted scanned information.  

>Note: The SimulScanData should be processed on a background thread so that it does not block the UI thread.

	:::java
	public void onSimulScanData(SimulScanData simulscanData) {
			Date timestamp = new Date(simulscanData.getTimestamp());
			List<SimulScanElement> simulscanDataElements = simulscanData.getElements();
			List<SimulScanRegion> simulscanDataRegions = new ArrayList<SimulScanRegion>();
			for (SimulScanElement curElement : simulscanDataElements)
			{
				if (curElement instanceof SimulScanRegion) {
					Log.d(TAG, ((SimulScanRegion) curElement).getName());
				} else if (curElement instanceof SimulScanGroup) {
					List<SimulScanRegion> regionsInGroup = ((SimulScanGroup)curElement).getRegions();
					for (SimulScanRegion curRegion : regionsInGroup){
						Log.d(TAG, “Group:”+ ((SimulScanGroup)curElement).getName() +” Region:”+ ((SimulScanRegion) curRegion).getName());
					}
				}
			}
	 }


**SimulScanData.getTemplate()** returns the extracted template. This template information can be used to reconstruct the original scanned image from the extracted data.
The **SimulScanElements** returned from **SimulScanData.getElements()** API are either instances of SimulScanRegion for SimulScanGroup. Use the **SimulScanRegion’s getData()** API to get the actual OCR, OMR, Barcode or image data. The type of the returned object from getData() will depend on the SimulScanRegion.

RegionType as shown in the table below:

<table>
<tr>
<td>RegionType</td><td>Data type</td>
</tr>
<tr>
<td>OCR</td><td>String</td>
</tr>
<tr>
<td>OMR</td><td>Integer</td>
</tr>
<tr>
<td>Barcode</td><td>String</td>
</tr>
<tr>
<td>Picture</td><td>Byte[] (binary image data)</td>
</tr>
</table>

###Important considerations

Due to a known issue with the Symbol SimulScan framework version 1.8, the orientation of your application must be fixed preferably using the AndroidManifest.xml. Failing to do so may cause your application to hang if the orientation changes during a scan.


##SimulScan Default Templates

The SimulScan default templates are available under `"/enterprise/device/settings/datawedge/templates"`. Although this path is not accessible via the file browser on devices having latest images, it is possible to access the path programmatically and get templates copied to any other location preferred by the application. The application must obtain the SimulScanManager instance before attempting to copy these templates from above location.












