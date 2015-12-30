---
title: CSP Manager
description: The CspMgr allows a query of the system to determine the CSPs present on a given device.
---

## About CspMgr

### Overview

The CspMgr allows a query of the system to determine the CSPs present on a given device.

The MX Management System (MXMS) is a system on Zebra Android devices that consists of the MX Management Framework and a collection of Configuration Service Providers (CSPs). Using the MDM Toolkit, an MDM Agent can submit Request XML documents to the MXMF, which will route sections of the XML to appropriate CSPs. Each CSP provides the ability to perform certain configuration and administration functions for a specific subsystem on the device. For example, the CameraMgr CSP can be used to manage the Camera subsystem on a device.

The capabilities of a CSP present on a given device can be accessed by using the corresponding feature via the MDM Toolkit. For example, the CameraMgr can be used to access the functionality of the CameraMgr CSP. The MXMS present on a given device will include many CSPs. Different device models, or devices with different versions of Android, may include different sets of available CSPs. The CspMgr allows an app to determine the CSPs present and thereby to determine which MDM Toolkit features can be used on that device.

### Main Functionality

* Query the list of CSPs that are available for use on the device

##Parameter Notes
###Characteristic
Parm name: characteristic

Description:

> This parm will contain the CSP name of each CSP that is available for use on the device. Since there is a one-to-one correspondence between CSP names and features in the MDM Toolkit, this is also the list of features that can be successfully used on the device.

>Knowing the set of CSPs that are available on a device can be useful for an MDM Agent to avoid submitting Request XML documents that would fail due to features that are not supported by that device. It may be preferable to perform a pre-check and avoid generating XML that uses unsupported features rather than submitting XML and detecting and handling failures due to unsupported features.

>Knowing the set of CSPs that are available on a device can be useful for an MDM Server to better understand the capabilities of a given device. The MDM Server might use this information to determine which optional features to expose to an Administrator via the Management Console. Or, the MDM Server might display this information to an Administrator to help determine which operations make sense to perform on which devices.

###Package
Parm name: package

Description: 

>This parm will contain the Android Package Name of each of the registered CSP. This parm is generally less useful to an MDM but may be useful in some circumstances, such as when troubleshooting problems with management functionality.

###Class
Parm name: class

Description: 

>This parm will contain the Android Class Name of each of the registered CSP. This parm is generally less useful to an MDM but may be useful in some circumstances, such as when troubleshooting problems with management functionality.

##Queries

Input

	:::XML
	<wap-provisioningdoc>
		<characteristic-query type="CspMgr"/>
	</wap-provisioningdoc>

Output

	:::XML
	<wap-provisioningdoc>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AccessMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.accessmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.accessmgr.MxAccessMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AppMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.appmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.appmgr.MxAppMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AudioVolUIMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.audiovoluimgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.audiovoluimgr.MxAudioVolUICSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CertMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.certmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.certmgr.MxCertManagerService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Clock"/>
				<parm name="package" value="com.symbol.mxmf.csp.clock"/>
				<parm name="class" value="com.symbol.mxmf.csp.clock.MxCSPClockService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Intent"/>
				<parm name="package" value="com.symbol.mxmf.csp.intent"/>
				<parm name="class" value="com.symbol.mxmf.csp.intent.MxIntentCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="MX"/>
				<parm name="package" value="com.symbol.mxmf.csp.mx"/>
				<parm name="class" value="com.symbol.mxmf.csp.mx.MxVersionCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PersistMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.persistmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.persistmgr.MxPersistCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="XmlMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.xmlmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.xmlmgr.MxXmlMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="AnalyticsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.analyticsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.analyticsmgr.AnalyticsMgrService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Batch"/>
				<parm name="package" value="com.symbol.mxmf.csp.batch"/>
				<parm name="class" value="com.symbol.mxmf.csp.batch.BatchCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="BatteryMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.batterymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.batterymgr.MxBatteryMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="BrowserMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.browsermgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.browsermgr.MxBrowserMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CameraMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.cameramgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.cameramgr.MxCameraCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="CellularMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.cellularmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.cellularmgr.MxCellularMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="ComponentMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.componentmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.componentmgr.MxComponentMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DevAdmin"/>
				<parm name="package" value="com.symbol.mxmf.csp.devadmin"/>
				<parm name="class" value="com.symbol.mxmf.csp.devadmin.MxDevAdminCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DhcpOptionMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.dhcpoptionmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.dhcpoptionmgr.MxDhcpOptionMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="DisplayMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.displaymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.displaymgr.MxDisplayMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="EncryptMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.encryptmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.encryptmgr.MxEncryptMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="FileMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.filemgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.filemgr.FileMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="GprsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.gprsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.gprsmgr.GPRSMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="KeyMappingMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.keymappingmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.keymappingmgr.MxKeyMappingMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="LicenseMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.licensemgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.licensemgr.LicenseMgrService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerKeyMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.powerkeymgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.powerkeymgr.MxPowerKeyMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="PowerMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.powermgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.powermgr.MxPowerMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SdCardMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.sdcardmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.sdcardmgr.MxSdCardMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="SettingsMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.settingsmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.settingsmgr.MxSettingsMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Stats"/>
				<parm name="package" value="com.symbol.mxmf.csp.stats"/>
				<parm name="class" value="com.symbol.mxmf.csp.stats.MxStatsCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="ThreatMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.threatmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.threatmgr.MxThreatMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="TouchMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.touchmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.touchmgr.TouchMngrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UiMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.uimgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.uimgr.MxUiMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="UsbMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.usbmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.usbmgr.MxUsbMgrCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="Wi-Fi"/>
				<parm name="package" value="com.symbol.mxmf.csp.wifi"/>
				<parm name="class" value="com.symbol.mxmf.csp.wifi.MxWifiConfigCSPService"/>
			</characteristic>
		</characteristic>
		<characteristic type="CspMgr">
			<characteristic type="csp-details">
				<parm name="characteristic" value="WirelessMgr"/>
				<parm name="package" value="com.symbol.mxmf.csp.wirelessmgr"/>
				<parm name="class" value="com.symbol.mxmf.csp.wirelessmgr.MxWirelessMgrCSPService"/>
			</characteristic>
		</characteristic>
	</wap-provisioningdoc>



