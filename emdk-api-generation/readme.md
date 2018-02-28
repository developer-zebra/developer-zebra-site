
## EMDK for Xamarin

* Get latest EMDK For Android code from Jenkins  http://10.17.216.63:8080/jenkins/job/tut_emdka_build/ and look for something similar to "tut_emdkx_build" and open the latest. 
* Download sdk-addon.zip  and unzip (The SDK-Addon at the highest api level has the javadocs ex; addon-symbol_emdk-symbol-26)
* Get latest Symbol.XamarinEMDK.dll from Praveen (should be here: http://10.17.216.63:8080/jenkins/job/tut_emdkx_build/)
* Replace Symbol.XamarinEMDK.dll to Lib folder in mDocToMarkdown
* Go to shell in folder mDocToMarkdown - then run command in readme (cross fingers - need mdoc - from Xamarin tools)
* This updates mdoc folder
* Do sanity check to see if new API are in there (you can also check assembly version inside a MDOC API)
* Find "To be added" in mdocs folder (this is all new/changed stuff)
* Find same thing in Javadocs and get description - replace Summary TBA - remove other TBA
* When looking at javadocs - always click down into the details (do not take "first sentence" from summary)
* For values and valuesof - just remove TBA
* Do not do hidden look for "protected" <MemberSignature Language="C#" Value="protected
* Note: check how params descriptions are done
* Generate Markdown
	* ex: node generate_markdown.js -a 2.6.0.69 -p 2.6 
* check for latest assembly number in xml
* Markdown is in "mDocToMarkdown/markdown" folder - look again for TBA
* Copy the markdown and "merge" into techdocs E4X API folder

## EMDK For Android

### Load APIs
1. Log onto the [Jenkins build server](http://10.17.216.63:8080/jenkins/) (ID=kelani, pw= kelani@123) and look for something similar to "tut_emdka_build" and open the latest.
2. Download the latest `sdk-addon.zip` file. This should have the current API level that the tool can target (i.e. Android API level 26). 
3. Open the .zip file and navigate to /addon-symbol_emdk-symbol-26/docs/reference
4. Copy the `/reference` folder to your local `/build/emdk-for-android/x-x/api/` folder (where x-x = the version number, i.e. 6-8). **DO NOT COPY TO `/SRC` folder!** 
5. Copy the `stylesheet.css` file from a prior version into the `api/reference` folder, overwriting the existing `stylesheet.css` file copied from the zip. 
6. View the local copy of the APIs and confirm the look and new feature(s).
7. Copy the local version to the staging-server repo (zebra-stage.github.io).
8. View the staging-server copy to confirm and test as in Step 6.
9. When all changes are validated, copy to production-server repo (zebra.github.io).

### Create new code sample repos for a new EMDK version

do this: 
https://help.github.com/articles/duplicating-a-repository/

### Create a repo for a new code sample




