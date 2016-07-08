---
title: EMDK For Xamarin - 2.0
layout: guide.html
product: EMDK For Xamarin
productversion: '2.0'
---
The EMDK for Xamarin provides developers with a comprehensive set of tools to easily create powerful line of business applications for Android enterprise mobile computing devices while retaining their C# skills and tools. The EMDK for Xamarin includes class libraries, sample applications with source code, as well as all of the associated documentation to help your applications take full advantage of what Zebra Technologies devices have to offer.


## Devices Supported
Although EMDK for Android has been designed to work with all Symbol mobile computers running Android, the following devices have been used for validation:

* MC18 - KitKat (4.4.4)
* MC40 - KitKat (4.4.4)
* MC67 - KitKat (4.4.4)
* MC92 - KitKat (4.4.4)
* TC55 - KitKat (4.4.3)
* TC70 - KitKat (4.4.2,4.4.3)
* TC75 - KitKat (4.4.3)
* TC8000 - KitKat (4.4.3)
* WT6000 - Lollipop (5.1.1)

>Note: Be sure to run the [device update](/emdk-for-xamarin/2-0/guide/deviceupdate) on all devices before using the EMDK for Xamarin.



##What's New
**Version 2.0**
* API Updates
	* [EMDKManager.GetInstanceAsync](/emdk-for-xamarin/2-0/api/core/EMDKManager/#getinstanceasync) - New method GetInstanceAsync(). The EMDK Feature Manager object returned by this method is guaranteed to be usable immediately. The feature manger object returned by the existing method getInstance(), may not be ready to be used immediately, especially after a device reboot.

* Profile Manager Updates
	* [Multipule MX version support](/emdk-for-xamarin/2-0/guide/profile-manager) - Profile manager now supports multiple MX versions. You can now choose between  MX 4.2, 4.4 and 5.0 when creating a new profile.
	* [Profile Upgrade](/emdk-for-xamarin/2-0/guide/profile-manager) - Profile manager now provides a method to upgrade an existing profile to use a higher version of MX.
	* [Data Capture Activity Selection Wildcard](/emdk-for-xamarin/2-0/mx/data-capture/activity) - When using an Activity Selector in a Data Capture profile and wish to include all activities in an application package, you no longer have to manually enter each activity. You can now enter a single asterisk ( \* ) and all activities in that package will be selected. 
	* [Bluetooth Manager](/emdk-for-xamarin/2-0/mx/bluetoothmgr/) - The BluetoothMgr controls whether to allow new devices to pair.
	* [Hosts Manager](/emdk-for-xamarin/2-0/mx/hostsmgr/) - The HostsMgr allows the device to be assigned a Host Name by which the device can be identified by admins, applications and other devices on local and DNS-enabled IP networks.
	* [Launch application by Application name](/emdk-for-xamarin/2-0/mx/appmgr/#application-simple-name) - new action for [App Manager](/emdk-for-xamarin/2-0/mx/appmgr).
	* [UI Manager](/emdk-for-xamarin/2-0/mx/uimgr) updates
		* [Current Locale Options](/emdk-for-xamarin/2-0//mx/uimgr/#set-current-locale) - Additional Locale support for SPANISH, US_SPANISH, BRAZILIAN PORTUGUESE and PORTUGUESE
		* [Extended Locale Options](/emdk-for-xamarin/2-0/mx/uimgr/#set-an-extended-locale) - 4 new options for existing param "ExtendedLocale": SWEDEN_SWEDISH, NORWAY_NORWEGIAN-BOKMAL, FINLAND_FINISH, DENMARK_DANISH
		* [Custom Locale](/emdk-for-xamarin/2-0/mx/uimgr/#set-a-custom-locale) - This parm value permits the selection of the device's Custom Locale. A locale is the combination of a language and a region in which that language is spoken.
		* [Notification Pulldown Enable/Disable](/emdk-for-xamarin/2-0/mx/uimgr/#notification-pulldown-enabledisable) - controls whether a user will be allowed to "pull down" the Notifications/Status bar and access the Notifications panel. 
		* [Quick Settings Show/Hide](/emdk-for-xamarin/2-0/mx/uimgr/#quick-settings-icons-showhide) -  controls whether Quick Settings icons will be displayed in the Android Notifications panel.
	* Password Masking / Encryption for sensitive values in Certificate Manager and GPRS Manager.
	* [Wifi Manager - PAC File Support](/emdk-for-xamarin/2-0/mx/wifi/#pac-file-url) - Allows the central control of proxy settings for KitKat devices
	* [DHCP Option Manager](/emdk-for-xamarin/2-0/mx/dhcp/) - Support for vendor specific options for granular configuration control

	* [Display Manager - Screen Shot Usage](/emdk-for-xamarin/2-0/mx/displaymgr/#screen-shot-usage)

**Version 1.0**

* Supports Visual Studio 2013 and greater
* Supports Xamarin Studio 5.9.5 and greater (Windows and Mac)
* Installs as an IDE Plug-in for [Visual Studio](/emdk-for-xamarin/1-0/guide/vs/setup) & [Xamarin Studio](/emdk-for-xamarin/1-0/guide/xs/setup)
* Online Documentation
* Sample Code
	* [Barcode API Sample](/emdk-for-xamarin/1-0/samples/barcode/) (included)
	* [Data Capture Profile Sample](/emdk-for-xamarin/1-0/samples/data-capture/) (available for download)
	* [Wi-Fi Profile Sample](/emdk-for-xamarin/1-0/samples/wifi/) (available for download)
	* [Power Manager Profile Sample](/emdk-for-xamarin/1-0/samples/power/) (available for download)
* [Symbol.XamarinEMDK APIs](/emdk-for-xamarin/1-0/api)
	* EMDKManager, ProfileManager, VersionManager
	* Symbol.XamarinEMDK.Barcode

### About version numbers
With this release, we wanted to bring all the EMDK tools into your selected IDE. To do that we leveraged the extension framework provided by Visual studio and Xamarin Studio. The Visual Studio Extension and Xamarin Studio Add-in are separate IDE plug-ins that may have different version numbers and may not match the EMDK for Xamarin Component version. Below is a list of each plug-in version number along with the version number of the EMDK for Xamarin component they deliver.

Microsoft Visual Studio Extension **v1.0.4**: ( Provides EMDK menu in Visual Studio )

* EMDK for Xamarin Component **v1.0.3** ( Provides C# EMDK API's )

Xamarin Studio Add-in **v1.0.5**: (Provides EMDK menu in Xamarin Studio )

* EMDK for Xamarin Component **v1.0.3** ( Provides C# EMDK API's )











