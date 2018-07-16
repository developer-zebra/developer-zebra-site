---
title: EMDK for Xamarin Setup
layout: guide.html
product: EMDK For Xamarin
productversion: '2.7'
---

##Before you get started
In order to use the EMDK for Xamarin, you will need to use Microsoft Visual Studio 2013, 2015, or 2017 as your development environment. Zebra does not provide licenses for Microsoft Visual Studio or licenses for Xamarin Platform. 

###Development Environment
Consult the [Xamarin](http://developer.xamarin.com/guides/android/getting_started/) and [Microsoft documentation](https://www.visualstudio.com/downloads/download-visual-studio-vs) for installing and setting up Xamarin.Android, Visual Studio(Windows) or Xamarin Studio(Mac):


##Getting Started
### 1) Install The EMDK For Xamarin NuGet Package

- [Read the EMDK For Xamarin NuGet Package Install Guide](/emdk-for-xamarin/2-7/guide/nuget)

>NOTE: Microsoft no longer supports Xamarin components and is requiring providers to use NuGet distribution. If you are not using Visual Studio 2017, you should consider upgrading.  

### 2) Understand Profile Manager
One unique feature to EMDK for Xamarin is to control device behavior and configuration through the use of *profiles*. The EMDK Profile Manager lets you create profiles right from your IDE using a GUI interface for selecting the features and settings that your application wishes to use. Then in your application you would simply apply the profile when needed. This results in a simple approach and minimal lines of code required to accomplish tasks

- [Read the Profile Manager Overview Guide](/emdk-for-xamarin/2-7/guide/profile-manager)

### 3) Build a Simple Application
Now that you have your environment setup and have an overview of the EMDK for Xamarin, let's walk through and build an application from scratch.

- [Follow the Hello Xamarin tutorial](/emdk-for-xamarin/2-7/tutorial/helloxamarin)

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













