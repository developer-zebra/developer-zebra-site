
## EMDK for Xamarin

* Get latest EMDK For Android code from Jenkins  http://10.17.216.63:8080/jenkins/ and look for something similar to "tut_emdkx_build" and open the latest. 
* Download sdk-addon.zip and unzip (The SDK-Addon at the highest api level has the javadocs ex; addon-symbol_emdk-symbol-26)
* Get latest Symbol.XamarinEMDK.dll from Praveen (should be here: http://10.17.216.63:8080/jenkins/job/tut_emdkx_build/. On Oct 8, it was here: \\10.233.84.19\Data\USER_BUILD_OUTPUT\TUT_XAMARIN_TOOL_MAC\97) Team is migrating to Artifactory.
* Copy Symbol.XamarinEMDK.dll to "/libs" folder in mDocToMarkdown (replace any existing file)
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
1. Log onto the [Jenkins build server](http://10.17.216.63:8080/jenkins/job/TUT_Build_EMDKA/) (log in with Zebra credentials) (or http://10.17.216.63:8080/jenkins/)
2. In the main pane, look for something similar to "tut_emdka_build" and open the latest.
3. 9/25/18- THIS PROCESS IS SUBJECT TO CHANGE-- Download the latest `sdk-addon.zip` file. This should have the current API level that the tool can target (i.e. Android API level 26). 
4. Open the .zip file and navigate to /addon-symbol_emdk-symbol-XX/docs/reference (where "XX" is the highest number if multiple choices exist). 
5. Copy the `/reference` folder to your local <u>BUILD</u> FOLDER `/build/emdk-for-android/x-x/api/` folder (where x-x = the version number, i.e. 6-8). **DO NOT COPY TO `/src` folder!** 
6. Copy the `stylesheet.css` file from a prior version into the `/api/reference` folder, overwriting the existing `stylesheet.css` file copied from the zip. 
7. View the local version of the APIs and confirm the style and that new feature(s) are present (see release notes for new API features).
8. Copy the local version to the staging-server repo (zebra-stage.github.io).
9. View the staging-server copy to confirm and test as in Step 6.
10. When all changes are validated, copy to production-server repo (zebra.github.io).

### Create new code sample repos for a new EMDK version
Basic Steps
1) Create new repo
2) Clone repo from previous version (to retain folders) and pull repo lcoally https://help.github.com/articles/duplicating-a-repository/

3) get latest samples from gerrit  found in master branch (need double check this with Charitha:
https://gerrit.zebra.com/#/admin/projects/Secure_EMDK/EMDK_Android

4) Update new repo with samples and push

5) Update links in docs


### Create a repo for a new code sample




