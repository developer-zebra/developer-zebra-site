---
title: MX Management System Interface
layout: guide.html
product: MDM Toolkit
productversion: '2.0'
---

In order to communicate with the MXMS, you must setup a binding to the service. Once this reference is established you can then:

* Send XML to change device behavior or configuration
* Query for current device and framework settings
* Process results sent back from the MXMS

## Requirements 

* Zebra Android Device with MX

	Note: For instructions to install or update MX on your Zebra Android Device, please see the [StageNow 2.3 - Getting Started Documentation](http://techdocs.zebra.com/stagenow/2-3/gettingstarted/).

* Android IDE

## Setup Code ###
1. Create a new Android project with an empty activity.   

2. The following permissions needs to be added to your application's manifest file to allow it to access MXMS.

		:::xml
        <uses-permission android:name="com.symbol.mxmf.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE" />
		<uses-permission android:name="com.motorolasolutions.emdk.mxframework.ACCESS_MX_MANAGEMENT_FRAMEWORK_SERVICE"/>
		
3. Create two new packages in your application. One package should be named `com.symbol.mxmf` and the other package should be named `com.motorolasolutions.emdk.mxframework`. These packages will be used for holding the aidl (Android Interface Definition Language) files.

4. The SimpleMdmToolKitSample project, which is supplied in the MDM Toolkit, contains the IMxFrameworkService.aidl files that should be copied into your application. These AIDL files are located in the SimpleMdmToolKitSample's `com.symbol.mxmf` and `com.motorolasolutions.emdk.mxframework` packages. These AIDL files should be copied into the respective packages that were made in Step 3.

5. In the package that contains the empty activity that was created in Step 1, copy and paste the following classes from the SimpleMdmToolKitSample project's `com.symbol.simplemdmtoolkitsample` package:

	* MxNamespace.java
	* MxNamespaceMotorolaSolutions.java
	* MxNamespaceSymbol.java
	* SymbolBrand.java
	* XmlParser.java

	>**Note:** The package names in these classes will need to be edited to match the package name of your application.

6. In your application's activity, the onCreate method should call the init method that is in the SymbolBrand class. This will check that MXMS is installed on the device. If MXMS is detected, your application will be bound to MXMS, allowing interaction to occur between them.

		:::java
		// Variable to hold the main activity
		static private Activity m_activity;
	
		@Override
		protected void onCreate(Bundle savedInstanceState)
		{
			super.onCreate(savedInstanceState);
			setContentView(R.layout.activity_main);
			
			// Save the main activity so it can be accessed from other threads
			m_activity = this;

			// Call init ONCE to start the process of binding to the MXMS
			// Note: You should call init early (e.g. as shown here in onCreate)
			//       XML cannot be submitted to the MXMS the binding is complete
			SymbolBrand.MXMS.init(this,mMxFrameworkServiceConnection);
		}

7. The ServiceConnection will also need to be added to your application's activity. This will contain the onServiceConnected callback that will notify your application that it was successfully bound to MXMS. It should also contain the onServiceDisconnected callback that will notify your application when it was successfully unbound with MXMS.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
			
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
			
			}
		}; 

8. In the onServiceConnected method, the onServiceConnected in the SymbolBrand helper class should also be called, which will notify this class that your application was bound to MXMS. At the end of the method, the term method in the SymbolBrand class should be called, which will unbind your application from MXMS. The application can also exit at this point. In the onServiceDisconnected method, the onServiceDisconnected method in the SymbolBrand helper class should also be called, which will notify this class that your application was unbound from MXMS.

		:::java
		// This definition is mandatory to track binding to the MXMS
		private ServiceConnection mMxFrameworkServiceConnection = new ServiceConnection()
		{
			// Callback to notify when binding to the MXMS has completed
			public void onServiceConnected(ComponentName className,IBinder service)
			{
				// Pass the binding notification on so the helper class can know the service was bound
				SymbolBrand.MXMS.onServiceConnected(className,service);

				// Call term 
				SymbolBrand.MXMS.term(m_activity,mMxFrameworkServiceConnection);

				// Exit the application
				m_activity.finish();	    		
			}
			
			// Callback to notify when unbinding from the MXMS has occurred
			public void onServiceDisconnected(ComponentName className)
			{
				// Pass the unbinding notification on so the helper class can know the service was unbound
				SymbolBrand.MXMS.onServiceDisconnected(className);
			}
		};    



