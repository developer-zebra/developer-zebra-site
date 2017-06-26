---
title: EMDK for Xamarin Setup
layout: guide.html
product: EMDK For Xamarin
productversion: '2.4'
---

##Before you get started
In order to use the EMDK for Xamarin, you must have the Xamarin Platform installed on your development system. When developing on Windows, you will need to use Microsoft Visual Studio 2013, 2015, or 2017 as your development environment. When developing on Mac you will need to use Xamarin Studio as your development environment. Xamarin Studio will be installed as part of the Xamarin Platform on Mac.  Zebra does not provide licenses for Microsoft Visual Studio or licenses for Xamarin Platform. 

###Development Environment
Consult the [Xamarin](http://developer.xamarin.com/guides/android/getting_started/) and [Microsoft documentation](https://www.visualstudio.com/downloads/download-visual-studio-vs) for installing and setting up Xamarin.Android, Visual Studio(Windows) or Xamarin Studio(Mac):


##Getting Started
### 1) Install The Visual Studio Extension or Xamarin Studio Add-in

Download and install the Visual Studio Extension(Windows) using the online extension gallery.

- [Read the Visual Studio Setup Guide](/emdk-for-xamarin/2-4/guide/vs/setup)


Download and install the Xamarin Studio Add-in(Mac) using the Add-in Manager.

- [Read the Xamarin Studio Setup Guide](/emdk-for-xamarin/2-4/guide/xs/setup)


### 2) Install The Xamarin Component

- [Read the Xamarin Component Install Guide](/emdk-for-xamarin/2-4/guide/component/install)

    >NOTE: When multiple versions of the EMDK for Xamarin component are installed, all versions of the component will be visible in the **Edit Components** screen for your project.
    
	![img](../../images/component/add.jpg)


### 3) Try the Sample
A sample is included as part of the Xamarin Component package to help get you started. Click on the **samples** tab on the component details page to add it to your solution project.


### 4) Understand Profile Manager
One unique feature to EMDK for Xamarin is to control device behavior and configuration through the use of *profiles*. The EMDK Profile Manager lets you create profiles right from your IDE using a GUI interface for selecting the features and settings that your application wishes to use. Then in your application you would simply apply the profile when needed. This results in a simple approach and minimal lines of code required to accomplish tasks

- [Read the Profile Manager Overview Guide](/emdk-for-xamarin/2-4/guide/profile-manager)

### 5) Build a Simple Application
Now that you have your environment setup and have an overview of the EMDK for Xamarin, let's walk through and build an application from scratch.

- [Follow the Hello Xamarin tutorial](/emdk-for-xamarin/2-4/tutorial/helloxamarin)

<div style="display:none">
<!-- this section used in Xamarin gettingstarted.md for component packaging -->
### 6) Check out our docs
We have a lot more resources for you to benefit from:

- API reference
- Developer Guides
- Tutorials
- Videos
- More Samples
- [More docs online](http://emdk.github.io/xamarin-docs/edge)
</div>













