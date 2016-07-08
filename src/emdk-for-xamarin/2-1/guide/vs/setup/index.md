---
title: Visual Studio Setup
layout: guide.html
product: EMDK For Xamarin
productversion: '2.0'
---

## Watch This Guide
![yt:hs-JlwSfCxk](../../../images/video.png)


##Installing the Extension

1. Open Visual Studio and select `Tools\Extensions and Updates`.

	![img](../../../images/vs/toolsextensions.png)
2. Select the `Online` section in the left hand pane of the `Extensions and Updates` dialog.
3. Then Select `Visual Studio Gallery` in the left hand pane under `Online`.
4. Now enter `emdk` in the search box in the top right of the `Extensions and Updates` dialog, and press enter.
5. You should now be presented with a search result, showing the `EMDK For Xamarin`.

	![img](../../../images/vs/install-emdk-found.png)
6. Click the `Download` button.

7. Click `Yes` when prompted to allow the program to make changes to your computer.

	![img](../../../images/vs/vsix-install-allow.png)
8. Click `Install` when prompted to agree to the license terms.

	![img](../../../images/vs/vsix-install-license.png)
9. Click `Close` when the extension installer is complete.

	![img](../../../images/vs/vsix-install-complete.png)
10. Restart Visual Studio as directed

	![img](../../../images/vs/vsix-restart.png)

##Uninstalling the Extension

1. Open Visual Studio and select `Tools\Extensions and Updates`.

	![img](../../../images/vs/toolsextensions.png)

2. Select `Installed` from the left hand pane
3. Type `emdk` in the search box in the top right corner and then press **Enter**
4. In the search results (center pane) find `EMDK for Xamarin`, and click the **Uninstall** button.
5. Then click the **Yes** button when prompted.
6. Restart Visual Studio as directed

	![img](../../../images/vs/vsix-restart.png)

##Support file cleanup
The IDE extension copies support files to the your file system in order to perform tasks such as Device Runtime Install. To clean up the support files do the following.

* Remove Folder - C:\Users\Public\Symbol EMDK for Xamarin



## What's Next
In order to fully enable the EMDK for Xamarin, you must [install the Xamarin Component](/emdk-for-xamarin/2-0/guide/component/install)













