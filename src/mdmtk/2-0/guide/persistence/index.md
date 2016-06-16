#Persistence

##Overview

In the context of the MDM Toolkit, Persistence is defined as the ability of to persist across an Enterprise Reset or an OS Update that results in an Enterprise Reset.

On Zebra Android devices, an Enterprise Reset is the same as a Factory Reset with the exception that the /enterprise partition is preserved (whereas it would be destroyed on a Factory Reset). The purpose of an Enterprise Reset is to return the device to an Enterprise-defined default state, generally as determined by the contents of the /enterprise partition. When using the MDM Toolkit, an MDM Agent can control the Enterprise-defined default state, and hence what will persist across an Enterprise Reset. This is done by directly controlling which MDM-deployed content is stored in the /enterprise folder, so it will survive an Enterprise Reset, and by controlling which Request XML Documents are Persistent, using the [PersistMgr Feature Type](../guide/csp/persistence).

There are two key aspects of Persistence that should be considered with regard to an MDM: Persistence of Manageability by the MDM and Persistence of Management Operations performed using the MDM. These aspects will be covered in the major sections of this page.

###Persistence of Manageability by the MDM

As a general rule, most customers using an MDM would expect that an Enterprise Reset would return a device to their specific Enterprise-defined default state and that state would include everything necessary to allow the device to be managed by the MDM following the Enterprise Reset. It is therefore incumbent on an MDM vendor to ensure that their MDM Agent is capable of meeting this expectation.

If a customer used StageNow to Stage the device to install the MDM Agent and bring the device under management by the MDM, as described in [Staging a Device to be Managed by an MDM](../guide/MDM/staging), then Persistence of Manageability would be a given, since it would have been established by StageNow. But if the customer used some sort of sideloading process to install the MDM Agent and bring the device under management by the MDM, then Persistence of Manageability might require significant additional effort to achieve. This is another good reason why customers are strongly recommended to use StageNow to install the MDM Agent and bring the device under management by the MDM.

Of course, in order for Persistence to work as expected when established using StageNow, the customer must use StageNow properly for the MDM in question. Since each MDM will likely have unique aspects, such as file names, etc. the MDM vendor will need to provide customers with the specifics related to their MDM Agent APK file(s), configuration file(s), etc. so the customer can use StageNow appropriately to achieve Persistence of Manageability for that MDM.

####Staging Requirements for Persistence of Manageability

In order to Stage a device to be managed by an MDM and to provide Persistence of Manageability for that MDM across an Enterprise Reset, the following Staging requirements would need to be met:

1.  A suitable version of the MXMS must be present on a device before an MDM Agent can use any Feature Types to perform Management Operations on that device. The MDM Tool Kit is designed to target MXMS versions 4.4 and higher.

	Requirement 1 could be accomplished on most Zebra Android devices by having the customer use StageNow to install MXMS 4.4, if it is not already present on the device.

2.	The MDM Agent configuration file(s) must be stored in a location within the device file system that will persist across an Enterprise Reset
3.	The MDM Agent APK file(s) must be stored in a location within the device file system that will persist across an Enterprise Reset.

	Requirements 2 and 3 could be accomplished on most Zebra Android devices by having the customer use StageNow to store these files to a folder under /enterprise/usr. In most cases, it would be advisable to use an MDM-specific sub-folder under this folder, such as /enterprise/usr/mymdm. Such a folder should have its permissions set to 777 (world readable and writable) to ensure that it will be accessible even if owner IDs change as a result of reinstallation following Enterprise Reset. If the StageNow FileMgr Setting Type is used to deploy files to such a folder, it will automatically set the permissions correctly. If the folder is created by the MDM Agent, it should set the permissions appropriately. The MDM vendor should select this folder and communicate it to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

4.	The MDM Agent APK file(s) must be installed

	Requirement 4 could be accomplished on most Zebra Android devices by having the customer use the StageNow AppMgr Setting Type install the APK file(s) using the same paths and file names to which those files were stored using the StageNow FileMgr Setting Type. The MDM vendor should select the locations and specify the file names and communicate them to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

5.	The MDM Agent APK(s) must be launched

	Requirement 5 could be accomplished on most Zebra Android devices by having the customer use the StageNow Intent Setting Type to send the Android Intent(s) required to launch the MDM Agent APK(s). The exact Android Intent(s) that need to be sent, and the details of those Intent(s), will be specific to the MDM vendor implementation. The MDM vendor should define those details and communicate them to the customer so they could have that information when using StageNow to Stage a device to be managed by that MDM.

6.	Connectivity must be established via which the MDM Agent can contact the MDM Server
	
	Requirement 6 could be accomplished on most Zebra Android devices by having the customer use various StageNow Setting Types, such as the Wi-Fi Setting Type or the GprsMgr Setting Type, in conjunction with supporting Setting Types, such as the CertMgr Setting Type, to establish the required Connectivity. The exact Settings Types to be used will depend on the types of Connectivity the customer wishes to establish and the types of Connectivity over which the MDM supports management of devices. This will likely vary widely by customer and the MDM vendor can likely give the customer only general advice on what Connectivity to establish when using StageNow to Stage a device to be managed by that MDM.

7.	All XML used above should be made Persistent

	Requirement 7 could be accomplished on most Zebra Android devices by having the customer use the StageNow PersistMgr Setting Type to make the entire Staging Profile Persistent.
	
####Sample StageNow Staging Profile Steps

A StageNow Staging Profile that meets all 7 requirements above to achieve Persistence of Manageability is shown below:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; a. Wi-Fi - Set up Staging WLAN network

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SSID: "mynetwork"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Passphrase: "mysecret"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b. FileMgr - Download MDM Agent Configuration file to:
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Target Path and File Name: "/enterprise/usr/mymdm/mymdm.cfg"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; c. FileMgr - Download MDM Agent APK file to:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Target Path and File Name: "/enterprise/usr/mymdm/mymdm.APK"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d. AppMgr - Install APK file from:
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; APK Path and Name: "/enterprise/usr/mymdm/mymdm.APK"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; e. Intent - Send Intent, with:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Action: "Start Activity"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Android Action Name: "android.intent.action.MAIN"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Package Name: "com.mycompany.mymdm"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Class Name: " com.mycompany.mymdm/MainActivity"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f. PersistMgr - Persist entire Staging Profile, with:
	
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Persist Action: "1"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Persist As Name: "StageNowPersistMyMDM"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Persist As Version: "1.0"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Persist As Order: "50"

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Persist If Error: "false"

The sample Staging Profile above would, in theory, meet all the requirements to achieve Persistence of Manageability for a hypothetical MDM named "MyMDM". In particular:

* Step a) This step establishes Connectivity that will be used to download the required files during Staging and that will then be used by the MDM Agent to contact the MDM Server.
* Step b) This step causes the MDM Agent Configuration file to be downloaded and stored into the folder "/enterprise/usr/mymdm", which is a location that will persist across an Enterprise Reset.
* Step c) This step causes the MDM Agent APK file to be downloaded and stored into the folder "/enterprise/usr/mymdm", which is a location that will persist across an Enterprise Reset.
* Step d) This step installs the MDM Agent APK silently.
* Step e) This step launches the Main Activity Class of the MDM Agent.
* Step f) This step causes the Request XML Document containing steps a) through f) to be stored in the /enterprise partition and arrange for that Request XML Document to be resubmitted following subsequent Enterprise Resets.

>**Note:** The above sample Staging Profile presupposes that the same network can and will be used to download files as well for the MDM Agent to contact the MDM Server. This need not be the case and may not always be the right thing to do, depending on the customer needs and situation. Some customers may need or want to download during Staging to be done over a Staging Network and for the MDM Agent to contact the MDM Server via a different Production Network. In such cases, the Staging Profile used might need to be more sophisticated than the above sample.

####Operational Aspects of Persistence of Manageability

Once the Staging steps in the above sample Staging Profile have been completed, the MDM Agent would be running. When the MDM Agent starts, it would presumably read its Configuration file, looking for the specific file name in a specific location (e.g. "/enterprise/usr/mymdm/mymdm.cfg") and configure itself based on the contents of that file. It would then use that configuration information to reach the MDM Server, via the already established Connectivity. The device then will be discovered by the MDM Server and will show up in the device inventory displayed by the Management Console of the MDM Server.

Once the device is managed by the MDM, if an Enterprise Reset was performed on the device, the PersistMgr would resubmit the Request XML Document that was persisted as a result of Staging. This would lead to the following:

* Step a) This step will re-establish the Connectivity that was originally established during Staging, and that will be used by the MDM Agent to contact the MDM Server.
* Step b) This step will attempt to re-download the MDM Agent Configuration file, but since the file already exists (since it was originally downloaded to a persistent location), the download will fail. This failure will not stop execution of the Request XML Document.
* Step c) This step will attempt to re-download the MDM Agent APK file but, since the file already exists (since it was originally downloaded to a persistent location), the download will fail. This failure will not stop execution of the Request XML Document.
* Step d) This step will re-install the MDM Agent APK silently.
* Step e) This step will re-launches the Main Activity Class of the MDM Agent.
* Step f) This step will not re-persist the Request XML Document since Persist If Error was set to "false" and errors did occur (during the download steps). But since the Request XML Document was already Persistent, it will remain Persistent and hence will be resubmitted again on subsequent Enterprise Resets.

####MDM Agent Updates and Persistence of Manageability

Given that Persistence of Manageability has been established for the MDM Agent using StageNow, as described above, there likely will come a time when the MDM Agent needs to be updated, as described in [Updating the MDM Agent](../guide/MDM/updating). While the MDM Agent can be updated directing using the [AppMgr Feature Type](../guide/csp/app), unless care is taken, that will not automatically cause the new version of the MDM Agent to become the Persistent version. As noted above, following an Enterprise Reset, PersistMgr will re-install the MDM Agent APK file, from the location in which it is stored, as a result of resubmitting the Persistent Request XML Document.

If the new version of the MDM Agent APK file has the same name and is downloaded and stored into the same persistent location, thus physically replacing the existing APK file, then the new version will be re-installed as a result of resubmitting that existing Persistent Request XML Document following a subsequent Enterprise Reset. Since the StageNow FileMgr Setting Type has to be told what name to give the file and the location in which it should be stored, you would need to know the details of how the customer used StageNow in order to know how to update the MDM Agent so as to maintain Persistence of Manageability. The easiest way to do that is to tell the customer the right way to use StageNow to Stage your MDM for Persistence of Manageability and then leverage that knowledge to update the MDM Agent to maintain Persistence of Manageability.

####Connectivity and Persistence of Manageability

Various Feature Types, such as the [Wi-Fi Feature Type](../guide/csp/wifi) or the [GprsMgr Feature Type](../guide/csp/gprs), in conjunction with supporting Feature Types, such as the [CertMgr Feature Type](../guide/csp/cert), can be used to establish new Connectivity and/or modify existing Connectivity. But unless care is taken, any newly configured Connectivity will not automatically become Persistent. And as previously noted, Persistence of Connectivity is a key requirement for Persistence of Manageability, since manageability depends on the MDM Agent contacting the MDM Sever via some Connectivity.

Persistence of Connectivity is really a topic that is considered part of the next section Persistence of Management Operations performed using the MDM. But some aspects of Connectivity Persistence are worth mentioning here due to the potential overlap with Staging and the important role Connectivity plays in Persistence of Manageability. If Connectivity is made Persistent as part of Staging, as was shown in the sample Staging Profile, then what happens when Connectivity needs to be changed via management operations performed using the MDM? Ideally, such changes to Connectivity would be as persistent, or perhaps more persistent as the Convexity configured during Staging.

It is important to understand that when Staging was used to persist a Request XML Document for a Staging Profile, then entire Request XML Document will persist under a single assigned name. If the MDM later persists some new Connectivity via another Request XML Document as another name, then both Request XML Documents will be persistent and both will be resubmitted on subsequent Enterprise Resets. Since the two might conflict with each other, order can be important, since the last one submitted will "win". This is where "Persist As Order" comes in. In the sample Staging Profile, "Persist As Order" was arbitrarily shown as "50", but could be set to any value from 00 to 99.

The MDM vendor should provide guidance to the customer on which "Persist As Order" to use when Staging. Recommending a value of "50" leaves The MDM plenty of options to choose to persist other Request XML Documents with a higher or lower order. To ensure that MDM persisted Connectivity changes are applied after those persisted by Staging, the MDM can intentionally use a higher number, thus ensuring it is submitted later. This allows the MDM to undo or change or augment the Connectivity persisted during Staging, so as long as the customer followed the Staging recommendations provided by the MDM vendor.

###Persistence of Management Operations performed using the MDM

This section assumes that a customer has already followed guidelines and recommendations provided by an MDM vendor about how to Stage a device to achieve Persistence of Manageability and that those guidelines and recommendations were based on, and met the requirements set forth in the previous section.

Once a device is successfully being managed by an MDM and Persistence of Manageability has been achieved, the next question is "What about the Persistence of the various Management Operations that have been performed for the device by the MDM Agent at the request of the MDM Server?" This section will address this question.

####Approaches to Persistence of Management Operations

Persistence of Manageability ensures that a device will return to a state where it is managed by the MDM after each Enterprise Reset. In most cases, there will be a change of state that occurs as a result of such an Enterprise Reset, as a result of what does not persist.  The main reason why an Enterprise Reset would be done is to discard anything that has been done but that was not intentionally persisted and hence have not been made part of the Enterprise-defined default state.  Performing an Enterprise Reset is typically done to abandon changes that may have been made by the device user or temporarily by an MDM, to restore normal operation by returning to a "known good state".

Since an Enterprise Reset generally results in some change of device state, an MDM Agent should be able to detect the new post-Enterprise Reset state of the device, following an Enterprise Reset, and report that new state to the MDM Server. The MDM Server should then be able to detect that change of state, by detecting what is no longer present.  The MDM Server should then be able to re-apply any configuration to the device that it needs or wants, via the MDM Agent. In a sense, the MDM could offer Persistence of Management Operations that have been previously performed, following an Enterprise Reset, simply by re-performing those Management Operations after the Enterprise Reset.

Depending on the situation, a customer may be completely satisfied with an MDM that only offers an MDM Server-based ability to re-perform Management Operations, following an Enterprise Reset, as a means to make those Management Operations Persistent across an Enterprise Reset. But there may also be reasons why a customer considers such an approach to be undesirable or even unacceptable, such as:

* Connectivity might be lacking following an Enterprise Reset

	Depending on the circumstances under which an Enterprise Reset is initiated, Connectivity that allows the MDM Agent to contact the MDM Server might be lacking. Just because the configuration of the Connectivity has been successfully performed doesn't mean the Connectivity will actually be available. If the connection to the MDM Server is down for some reason, or if there is a disruption in the wireless network, or if the device is out of range of a wireless network, then the MDM Agent may be unable to contact the MDM Server right away.
	
	If the device is not usable for its intended purpose following an Enterprise Reset until the MDM Server is able to successfully re-perform critical Management Operations, then a lack of Connectivity could result in a loss of productivity. This could lead a customer to require that certain critical Management Operations be made Persistent locally on the device, so the device can be usable following an Enterprise Reset regardless of Connectivity. Obviously, in such cases, a device used under such situations would not be actively managed by the MDM until Connectivity becomes available again. But the customer might prefer that to having the device be unusable.

* Re-performing Management Operations takes time

	Following an Enterprise Reset, if Connectivity is available then the MDM Agent can contact the MDM Server and report its post-Enterprise Reset State. The MDM Server can then compare the current state of the device to the desired state of the device and begin initiating Management Operations to return the device to a desired post-Enterprise Reset state. But that process may require many round trips of information between the MDM Agent and the MDM Server, to download files, etc., all of which may take time. If those Management Operations are critical to return the device to a usable state, then that time required to perform them could result in a loss of productivity. This could lead a customer to require that certain critical Management Operations be made Persistent locally on the device, so the device can be usable more rapidly following an Enterprise Reset.
	
This leads us to identify the following high level approaches that an MDM vendor might need or want to take to make Management Operations performed using that MDM Persistent:

* MDM Server re-performs Management Operations by resending them to the MDM Agent

	This approach as described earlier and the potential downsides related to dependence on Connectivity and potential lag time were already discussed. This approach has the upside that it may place fewer demands on device storage.
	
	In particular, the /enterprise partition is a limited resource on Zebra Android devices, usually having a size of 128MB. If there is a need to make many large applications Persistent, there may not be adequate space to store Persistent copies of their APK files on the /enterprise partition. If not every application is of the same criticality, it might be appropriate to use this approach for the less critical applications or largest and use other approaches for the most critical applications or smaller applications.

* MDM Agent saves and re-performs MDM commands received from the MDM Server

	The recommended model for implementing MDM Agents using the MDM Toolkit could be described by the following steps:
	
	1.	MDM Server sends MDM-specific command(s) to MDM Agent
	2.	MDM Agent receives MDM-specific command(s) from MDM Server
	3.	MDM Agent interprets MDM-specific command(s) to determine function(s) to perform
	4.	MDM Agent extracts relevant information from an MDM-specific command for a function
	5.	MDM Agent selects suitable pre-built Request XML template(s) for the function
	6.	MDM Agent substitutes relevant information into the XML template(s) for the function
	7.	MDM Agent assembles Request XML Document(s) to perform one or more functions
	8.	MDM Agent submits the Request XML Document(s) to the MXMS
	9.	MDM Agent receives the Result XML Document(s) back from the MXMS
	10.	MDM Agent interprets the Result XML Document(s) to determine what happened
	11.	MDM Agent creates MDM-specific result(s) to describe what happened
	12.	MDM Agent sends MDM-specific result(s) to the MDM Server
	
	If the above model is followed, then an MDM Agent could choose to store the MDM-specific command(s) received from MDM Server in a location where they will persist across an Enterprise Reset. Following an Enterprise Reset, once the MDM Agent is running again, it can read those MDM-specific command(s) and re-process them (e.g. starting from step 3). Since these command(s) will be processed without having just been received from the MDM Server, the results likely will not need to be sent back to the MDM Server.

	One potential benefit of this approach is that is can be used to Persist all Management Operations that the MDM Agent can be requested to do by the MDM Server, whether a given operation is implemented by the MDM Agent by submitting a Request XML Document to MXMS or not. It could also be used to Persist combinations of things that use both custom MDM Agent code and Request XML Documents that are submitted to MXMS.

* MDM Agent saves and re-submits Request XML Documents

	If the recommended model for implementing MDM Agents using the MDM Toolkit, as described above, is followed, then an MDM Agent could choose to store Request XML Documents, which have previously been submitted to the MXMS, in a location where they will persist across an Enterprise Reset. Following an Enterprise Reset, once the MDM Agent is running again, it can read those Request XML Documents that it stored and resubmit them to MXMF itself (e.g. starting from step 8).
	
	One potential benefit of this approach is that the time lag can be reduced because the MDM Agent doesn't need to spend time re-processing MDM-specific command(s) and creating Request XML Documents again. The MDM Agent can proceed immediately to submit previously saved Request XML Documents that are "ready to use".

	One potential downside of this approach is that it can only be used to Persist Management Operations that the MDM Agent implements solely using Request XML Documents that are submitted to MXMS. If custom MDM Agent code must be executed to perform a given Management Operation, then the approach of saving MDM-specific command(s) would likely be a better choice since it would allow the MDM Agent to execute such code while processing those command(s). Additionally, this approach places additional demands on local persistent storage and hence may not be practical to use to persist large or numerous applications.

* MDM Agent requests PersistMgr to save and re-submit Request XML Documents

	If the recommended model for implementing MDM Agents using the MDM Toolkit, as described above, is followed, then an MDM Agent could choose to use PersistMgr to cause Request XML Documents to be stored persistently and then to be automatically resubmitted following an Enterprise Reset by PersistMgr.
	
	One potential benefit of this approach is that it can simplify the implementation of an MDM Agent required to achieve Persistence of Management Operations because most of the work will be done by PersistMgr. The MDM Agent needs to identity when Persistence is required, and request PersistMgr to do it. But the MDM Agent doesn't thereafter have to take any action following an Enterprise Reset to make Persistence actually occur.

	This approach shares the same downside as the approach of having the MDM Agent resubmit stored Request XML Documents in that it can only Persist what can be done via MXMS, not any custom code that may be implemented within them MDM Agent.  Similarly, this approach places additional demands on local persistent storage and hence may not be practical to use to persist large or numerous applications.

####Persistence Caveats

Once one or more approaches have been chosen for how to achieve Persistence of Management Operations, some or all of the following caveats should be considered to determine if they apply and, if so, how they should be addressed to help provide a robust and complete solution.

* Not every Management Operation needs to be Persisted

	When a customer Device Administrator is performing Management Operations on a device from the Management Console of an MDM Server, some Management Operations will make sense to be Persistent. In other words, the Device Administrator may want them to be part of the new Enterprise-defined default state that the device will return to on subsequent Enterprise Resets. But it may not always be the case that every Management Operation initiated by a Device Administrator should be so permanent. If a Management Operation is performed as a temporary troubleshooting measure, then it may be preferable not to Persist it, and hence not to make it part of the new Enterprise-defined default state. In fact, a key reason why an Enterprise Reset might be issued would be to discard everything that is Non-persistent and return the device to a clean, "known good state".
	
	This means that an MDM would ideally provide some mechanism for the customer Device Administrator to express their intention and take control over which Management Operations should or should not be Persisted. If such control is not provided to the Device Administrator via the Management Console, then the MDM may need to try to make the decision themselves. That could involve making everything Persistent or making nothing Persistent. Since these polar extremes might be undesirable, the MDM might make this determination on a per-Management Operation basis. It is strongly recommended that MDMs consider providing such control to the Device Administrator since it will provide a more comprehensive solution and allow it to better adapt to customer requirements.

* The /enterprise partition has a limited amount of space

	When making Management Operations Persistent, MDMs should keep in mind that the /enterprise partition is a limited resource used by multiple entities within Zebra Android devices. While the /enterprise partition is allocated 128MB, at least some of this space will be consumed by existing system processes. Consider that Android APK files can range from a few MB to tens of MB in size. If there are many APKs to install, or if the APKs to be installed are large, the available space in /enterprise may be rapidly used up. Also keep in mind that while most Request XML Documents are fairly small, every Request XML Document that is made Persistent using PersistMgr will also occupy space on the /enterprise partition.
	
	As noted above, it is strongly recommended that control over which Management Operations are made Persistent should be provided by the MDM to the customer Device Administrator via the Management Console. In that way, the Device Administrator is empowered to decide how to utilize the limited space on the /enterprise partition and to select which Management Operations should be persisted locally on the device and which operations can wait to be performed again by the MDM Server.

	It should also be understood that the /enterprise partition may not be the only place that an MDM Agent can store files such that they will Persist across an Enterprise Reset. On devices that have a fixed internal Primary Storage partition, files stored on that partition may well survive an Enterprise Reset, although they might or might not survive certain OS Updates (e.g. from one major version to another). On devices that support removable storage and on which storage card is present, files store on that storage card will generally always survive an Enterprise Reset.  The details of what is possible will generally vary by device and circumstances.  Providing control to the customer Device Administrator of where to store files will allow such variations to be exploited without having to "hard code" them into the MDM Agent or Server.

	While there may be multiple alternate locations that could be used on a particular device to Persist files across an Enterprise Reset, the /enterprise partition is the one that is supported on all Zebra Android devices and hence should be used wisely. Also note that Request XML Documents that are Persisted by PersistMgr will always be stored in the /enterprise partition, but can reference files stored elsewhere. So, hybrid solutions that support use of multiple partitions for Persistence can be deployed. It is strongly recommend that customer Device Administrators be provided a method to control the location where files are stored. This could provide both a means to decide what to Persist but also to decide which partition to use to persist which content.

* The MDM Agent may not be the only application using PersistMgr

	As noted earlier, customers can use the StageNow PersistMgr Setting Type to achieve Persistence of Management for an MDM. The StageNow PersistMgr Setting Type could also be used by the customer to Persist many other things. In addition, the PersistMgr Feature Type could be used by custom applications written using Zebra's Enterprise Mobility Development Kit (EMDK) for Android to Persist various things. Finally, in theory a customer could install multiple MDM Agents, each of which could be using the PersistMgr Feature.
	
	The primary thing to consider is that just because the MDM Agent submits a Request XML Document and includes a PersistMgr Feature to make it Persistent, doesn't mean that there aren't already, or won't later be, other Persistent Request XML Documents that do similar things and that might conflict. It is important to understand that when multiple applications are using PersistMgr, no one application is inherently pre-eminent. An MDM Agent can't guarantee that its use of PersistMgr will somehow take precedence over others.

	The following are some of ways that an MDM might seek to cope with such situations:
	
	* The MDM Agent could query PersistMgr, at strategic times, to determine which Request XML Documents are Persistent and what their names are, and report them to the MDM Server for display in the Management Console. While the MDM Agent cannot obtain the contents of those, knowing the names might provide a customer Device Administrator with some idea of what they do, and the order may help track down why the end result is not as expected.
	* The MDM Agent could use some consistent naming scheme to identify its own Persistent Request XML Documents and thereby differentiate them from others.
	* The MDM Agent could provide the customer Device Administrator with a method to remove Persistent Request XML Documents that are unknown or that might be suspect.
	* The MDM Agent could use the [AccessMgr Feature Type](../guide/csp/access), perhaps at the request of the customer Device Administrator via the Management Console of the MDM Server, to control which applications are allowed to submit Request XML Documents to the MXMS. This could be used to give the MDM exclusive, or semi-exclusive access to perform Management Operations using MXMS.
