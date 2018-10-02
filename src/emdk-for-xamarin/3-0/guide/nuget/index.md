---
title: NuGet Installation
layout: guide.html
product: EMDK for Xamarin
productversion: '3.0'
---

Starting with version 3.0, EMDK for Xamarin development tools are installed from NuGet packages and updated using the NuGet package management system. The EMDK-X NuGet package adds to Microsoft Visual Studio the API libraries required for building Android applications with Xamarin. **The package must be added to any Android project before the APIs are available for use**. 

> **Zebra recommends using EMDK-X with Visual Studio 2017**. 

<!-- 
In previous versions of EMDK for Xamarin, the EMDK APIs were distributed through a Xamarin component. In late 2017, [Microsoft announced](https://blog.xamarin.com/hello-nuget-new-home-xamarin-components/) that it was phasing out support for Xamarin components and that all providers would be required to use NuGet packages.
 -->
**These instructions apply to**:

* Visual Studio 2017 for Mac OS
* Visual Studio 2017 for Windows

>**WARNING**: Do not select "Add Xamarin Component" from the "EMDK" menu shown below; it does not function as intended.

![img](xam-component-menu.jpg)
<br>

-----

### Prerequisites
The following software is required to use EMDK for Xamarin:

**Windows**:
* Windows 7, 8, 8.1, 10 (32- or 64-bit)
* Java Development Kit (JDK) v7u45 or higher
* Visual Studio 2017 or Visual Studio 2015 (up to v15.5) 

**Mac OS**:  
* Mac OS X 10.10 or higher
* Java for OS X 2014-10x or higher
* Java Development Kit (JDK) v7u75 or higher
* **Visual Studio 2017 for Mac OS** `NEW` (Xamarin Studio is no longer supported)

**Attention Visual Studio 2015 users**: EMDK for Xamarin supports Visual Studio 2015 <u>only up to version 15.5</u>. Upgrading to any higher version results in failure. **Zebra recommends using Visual Studio 2017**. 

-----

### Windows Installation

The following instructions apply to Visual Studio 2017. A supported version of Visual Studio must be installed to complete the steps below. If necessary, [install Visual Studio 2017](https://visualstudio.microsoft.com/downloads/) before proceeding. 

**To install the NuGet package in Visual Studio 2017 for Windows**: 
 
1. [Download the EMDK for Xamarin NuGet file](https://github.com/zebra-stage/zebra-stage.github.io/blob/master/emdk-for-xamarin/nuget/Symbol.XamarinEMDK.2.7.0.76-rc.nupkg?raw=true) and save to a local folder.
2. From within a project, right-click the project name and **select "Manage NuGet Packages..."** from the menu:
	<img alt="image" style="height:276px" src="win-manage-nuget.jpg"/>
	<br><br>
3. **Click the Settings (gear) icon** in the upper-right corner:
	<img alt="image" style="height:210px" src="settings-icon.jpg"/>
	<br><br>
4. **Click the "+" button** in the upper-right corner:
	<img alt="image" style="height:279px" src="plus_button.jpg"/>
	<br><br>
5. Near the bottom of the dialog, **change the Name to "Local" and hit (...) to navigate to the NuGet file** downloaded in Step 1.<br> Then **click the "Update" button**: 
	<img alt="image" style="height:418px" src="add_local.jpg"/>
	<br><br>
6. **Click the "OK" button**.
7. Check the "**Include prerelease**" checkbox and in the upper-right corner, change the package source to "**Local**" as shown: 
	<img alt="image" style="height:242px" src="change_local.jpg"/>
	<br><br>
8. **Select the** `Symbol.XamarinEMDK` **package** (if not already selected) and **click the "Install" button**: 
	<img alt="image" style="height:227px" src="install-package.jpg"/>
	<br><br>
9. When prompted, **click "OK" to accept the changes**: 
	<img alt="image" style="height:421px" src="accept-changes.jpg"/>
	<br>...**and "I Accept**" for the license: 
	<img alt="image" style="height:360=px" src="accept-license.jpg"/>
	<br><br>
10. **Confirm that the EMDK for Xamarin APIs are now referenced** in the project:
	<img alt="image" style="height:347px" src="reference.jpg"/>
	<br>

> EMDK for Xamarin APIs are ready to use. 

-----

### Mac OS Installation

The following instructions apply to Visual Studio 2017, which must be installed to complete the steps below. If necessary, [install Visual Studio 2017](https://visualstudio.microsoft.com/downloads/) before proceeding. 

Visual Studio 2017 for Windows

**To install the NuGet package in Visual Studio 2017 for Mac**:

1. [Download the EMDK for Xamarin NuGet file](https://github.com/zebra-stage/zebra-stage.github.io/blob/master/emdk-for-xamarin/nuget/Symbol.XamarinEMDK.2.7.0.76-rc.nupkg?raw=true) and save to a local folder. 
2. In the project, **right-click the "Packages" folder**.
3. Click "**Add Packages**" as below:
	<img alt="image" style="height:273px" src="addpackage.png"/>
	_Click to enlarge_.<br><br>
4. **Select "Configure sources**" from the drop-down, which initially displays nuget.org as below: 
	<img alt="image" style="height:62px" src="nugetorg.png"/>
	_Click to enlarge_.<br><br>
5. **Click the "Add" button** in the lower-right corner:
	<img alt="image" style="height:350px" src="addserver.png"/>
	_Click to enlarge_.<br><br>
6. **Navigate to the NuGet file** downloaded in Step 1. They **click the "Open" button**:
	<img alt="image" style="height:350px" src="selectfolder.png"/>
	_Click to enlarge_.<br><br>
7. **Click the "Add Source" button**:
	<img alt="image" style="height:150px" src="addsource.png"/>
	_Click to enlarge_.<br><br>
8. The "Local" source is shown. **Click OK to save**:
	<img alt="image" style="height:250px" src="addedsource.png"/>
	_Click to enlarge_.<br><br>
9. **On the "Add Packages" screen**, select the `Symbol.XamarinEMDK` package (if not already selected), confirm that the "**Show pre-release packages**" checkbox is checked, and click the "**Add package**" button:
	<img alt="image" style="height:350px" src="showprerelease.png"/>
	_Click to enlarge_.<br><br>
10. **Accept the license** when prompted:
	<img alt="image" style="height:100px" src="license.png"/>
	_Click to enlarge_.<br>

> EMDK for Xamarin APIs are ready to use. 

-----

### Remove the NuGet Package

#### Remove from Windows

**To remove the EMDK for Xamarin NuGet package from a Windows project**:

From within a project, **right-click the** `Symbol.EMDKForXamarin` **package and select "Remove"** as below:
	![img](remove-package-win.jpg)
<br>

-----

#### Remove from Mac OS

**To remove the EMDK for Xamarin NuGet package from a Mac OS project**:

From within a project, **right-click the** `Symbol.EMDKForXamarin` **package and select "Remove"** as below:
<img alt="image" style="height:100px" src="remove-package.png"/>
	_Click to enlarge_.<br>
<br>
