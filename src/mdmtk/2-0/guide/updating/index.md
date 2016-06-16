#Updating the MDM Agent

##Overview

The MDM Agent may need to be updated when new versions are released. The [AppMgr Feature Type](../guide/csp/app) can be used to upgrade this. 

The AppMgr Feature that should be used for this would be its Upgrade action, instead of using its Uninstall and Install actions. This is because uninstalling the MDM Agent would cause its data to be wiped out. 

By using the Upgrade action, the MDM Agent will not be uninstalled and the existing data will not be wiped out. The MDM Agent that is already installed and the newer version that is being installed must:

* Have the same package name
* Be signed by the same developer
* The newer app must have a higher version number

Therefore, the steps that would have to be taken to update the MDM Agent would be:

1. Download the new version of the MDM Agent APK file(s) onto the device
2. Save the new MDM Agent APK file(s) into a persistent storage location on the device, such as the Enterprise Partition. It is recommended that the new version would be saved in the same location of the previous MDM Agent's APK file(s) and that the new file(s) should overwrite the old file(s).
3. The AppMgr Feature Type should then be used to upgrade the MDM Agent.

	>**Note:** The Upgrade action will cause the running MDM Agent on the device to be shut down before it installs the new version. This may affect any processes that are running while the Upgrade action was triggered. For example, if the MDM Agent was submitting an XML to the MXMS while the Upgrade action was triggered, MXMS will still process the XML since it was sent before the MDM Agent was shut down. However, the Result XML document that is returned by the MXMS may not be received by the MDM Agent, possibly causing errors to not be detected.

4. The new version of the MDM Agent has been updated and will be used on the device now.

>**Note:** The above steps are used to acheive Persistence of Manageability by the MDM, which is described in the [Persistence page](../guide/MDM/persistence).