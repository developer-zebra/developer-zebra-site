

## EMDK For Android

### Load APIs
1. Ask the engineers to give you the final JavaDoc (as of Jan. 2020 it was Mahesh or Charitha). <!-- Mar 6, 2019: Jenkins has been a moving target over the past two cycles. So now we just ask eng. for the final JavaDoc instead of wasting time trying to do this -> Using Zebra credentials, log onto the [Jenkins build server](http://10.17.216.63:8080/jenkins/job/TUT_Build_EMDKA/) (or http://10.17.216.63:8080/jenkins/)
2. In the main pane, look for something similar to "tut_emdka_build" and open the latest.
3. 9/25/18- THIS PROCESS IS SUBJECT TO CHANGE-- Download the latest `sdk-addon.zip` file. This should have the current API level that the tool can target (i.e. Android API level 26). 
4. Open the .zip file and navigate to /addon-symbol_emdk-symbol-XX/docs/reference (where "XX" is the highest number if multiple choices exist).  -->
5. Copy the `/reference` folder to your local <u>BUILD</u> FOLDER `/build/emdk-for-android/x-x/api/` folder (where x-x = the version number, i.e. 6-8). **DO NOT COPY TO `/src` folder!** 
6. Copy the `stylesheet.css` file from a prior version into the `/api/reference` folder, overwriting the existing `stylesheet.css` file copied from the zip. 
7. View the local version of the APIs and confirm the style and that new feature(s) are present (see release notes for new API features).
8. Copy the local version to the staging-server repo (zebra-stage.github.io).
9. View the staging-server copy to confirm and test as in Step 6.
10. When all changes are validated, copy to production-server repo (zebra.github.io).

-----

## EMDK for Xamarin

`IMPORTANT:` Perform <u>AFTER</u> EMDK for Android APIs have been updated.  

1. Ask the engineers to give you the final `Symbol.XamarinEMDK.dll` for the version you're updating (in Jan. 2020 it was Mahesh Pitakotuwa). <!-- Mar 6, 2019: Jenkins has been a moving target over the past two cycles. So now we just ask eng. for the final JavaDoc instead of wasting time trying to do this -> Get latest EMDK For Xamarin code from Jenkins  http://10.17.216.63:8080/jenkins/ and look for something similar to "tut_emdkx_build" and open the latest. 
2. Get latest `Symbol.XamarinEMDK.dll` from Praveen (should be here: http://10.17.216.63:8080/jenkins/job/tut_emdkx_build/. On Oct 8, it was here: \\10.233.84.19\Data\USER_BUILD_OUTPUT\TUT_XAMARIN_TOOL_MAC\97) Team is migrating to Artifactory.-->
3. Copy `Symbol.XamarinEMDK.dll` file to `/libs` folder in `/mDocToMarkdown` (replace or remame the existing file, if any).
4. Go to Terminal and navigate to folder `/mDocToMarkdown`. Then run command in the readme file in that folder (cross fingers - requires mdoc from Xamarin tools). Keep the Terminal window open for Step 13. 
5. Using the latest release notes as a reference, identify each **NEW API feature** and use the "Find in Folder" function (use your text editor to search the /mdoc folder) to confirm that each new API feature is there. 
6. Check AssemblyFileVersion inside any mdoc API to confirm that it matches the EMDK-X major and minor version numbers. 
7. Using the "Find in Folder" function, search /mdoc folder for "To be added" - this finds everything new/changed. 
8. `In each corresponding function in the EMDK-A JavaDocs, copy its description (from EMDK-A API) to the Summary field (replacing "To be added.") and remove other instances of "to be added" from nearby "value" and "remarks" fields.` **NOTE**: When looking at JavaDocs - always click down into the details and do ***NOT*** take "first sentence" from top-level summary; it's not always the same. 
9. For members called "values" or "valuesof," just remove "to be added" from all places. 
10. For hidden or protected members (with "protected" in <MemberSignature Language="C#" Value="protected...> just remove "to be added" from all its fields. 
11. Double-check for missed instances of "to be added" in `/mdoc` folder; correct as needed. 
12. Get the current assembly version number from one of the API (xml) files. 
13. To generate markdown: 
   * In terminal `/mDocToMarkdown` folder, run: <br>
<br>

   	:::term
   	node generate_markdown.js -a 6.0.0.51 -p 6.0
   	// replace "2.6.0.69" with current assemblyversion and "2.6" with the major.minor version

14. Markdown is output to `/mDocToMarkdown/markdown` folder
15. Copy the folders under /markdown into /src/emdk-for-xamarin/x-x/api and "merge"
16. Build, post and invite engineering to validate. 

-----

### Create new code sample repos for a new EMDK version

Basic Steps
1) Create new repo
2) Clone repo from previous version (to retain folders) and pull repo locally https://help.github.com/articles/duplicating-a-repository/
3) get latest samples from gerrit  found in master branch (need double check this with Charitha:
https://gerrit.zebra.com/#/admin/projects/Secure_EMDK/EMDK_Android

4) Update new repo with samples and push

5) Update links in docs

-----

### Create a repo for a new code sample




