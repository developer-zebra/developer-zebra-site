## Document a New CSP

### For MX docs
1. Add a menu choice to /mx and /mx/compatibilty feature matrixes
2. Copy an existing CSP and rename it to the new CSP name. **ALWAYS USE ALL LOWER CASE** for folder names. 
**NOTE**: When selecting the source CSP to copy, pick one with a small number of parms with at least one list parm and one string parm. BluetoothMgr is a good choice.  
3. Edit one of the parms to match data of the new CSP and REPLICATE THAT ONE for the remaining parms. This will minimize editing later. 
**REMEMBER, ALWAYS USE ALL LOWER CASE** for folder names.
4. Edit the `index.md` file at the root of the new CSP's directory, which controls the title on the CSP detail page and provides a description of the CSP in other places.

### For EMDK-A, EMDK-X and StageNow

####EMDK (A and X)
0. Confirm that the CSP is (or will be) supported by the current (or next) version of EMDK A and X 
1. Add a menu choice to /profile-manager-guides, paying attention to existing CSP categorization
2. Copy the folder of an existing CSP in EMDK's /mx folder (**not MX's MX folder**)
3. Edit the contents of the copied CSP stub file to match the new CSP
4. When built, a productized version of the CSP's detail page will be injected into the folder 
5. Acknowledge that Rob is a genius for developing this time-saving gem =:^] 

#### StageNow
1. Add a menu choice to /settingtypes, paying attention to existing CSP categorization
2. Copy the folder of an existing CSP in /csp folder
3. Edit the contents of the copied CSP stub file to match the new CSP
4. When built, a productized version of the CSP's detail page will be injected into the folder
5. Genuflect once again to Rob. =:^] 

## Document a NEW PRODUCT
(example: Enterprise Browser 1.6)

### I. Check out the product branch to be updated. For EB, the command would be as follows: 

		:::term
		$ git checkout eb

### II. Create folder structure

1. In product folder ("enterprise-browser"), copy the folder of prior version.
2. Rename the copied folder to "1-6" (separate digits with a **dash**, **NOT a dot**).
3. Commit this change using the commands and comment similar to the following: 

		:::term
		$ git add . <-- stages all changed files for commit  
		$ git commit -m '[TUT-12345] EB 1.6 initial commit (raw copy of EB 1.5)' 
		$ git push 

4. Using your text editor, search and replace "productversion: 1-5" with "productversion: 1-6" on all pages. 
5. Search and replace "1-5" with "1-6" to update menus and links. Notice use of a hyphen (-) and NOT a dot (.).
6. Search and replace "1.5" with "1.6" in appropriate places (a manual replacement process is recommended; some search results will be "false positives," such as those that read "for EB 1.5 and higher...").

<!-- THIS PUSH-COMMAND PARAMETER IS NO LONGER REQUIRED : 
		--set-upstream origin eb-1.6 
 -->

### III. Modify build script and techdocs "tile-page" 

1. Inside /src/build.js, replicate and modify the prior product's portion of the build script (for a new product, add a new section to the build script). 
2. In the /src/index.md file, replicate and modify the prior product's section of the tile page. 
3. Build pages for the new product: 

		:::term
		$ node build (builds pages and starts local web server to view them with)
4. Browse to http://localhost:8080/ and click the product's tile to see the pages.

### IV.  Modify/Add/Create pages as necessary for the new version
After saving major changes, commit them to the repo: 

		:::term
		$ git add . (stages all changed files for commit)  
		$ git commit -m '[Jira ticket number] EB 1.6 About page new features added'


To see changes: 
* press CTRL-C in the build tab to quit the local web server: 

	:::term
	$ node build (to run it again and publish the latest saved changes)

* Refresh the page(s) and revise as necessary

* Update the redirect link for the new product version (i.e. /src/ehs/2-5/index.md)
This ensures that incoming links from other products (i.e. "techdocs.zebra.com/ehs") will never go stale. 

## WHEN WORK IS COMPLETE...

### V. Stage (for engineering validation)

1. Copy updated files to zebra-stage.github.io repo from local /build folder (select "merge" if prompted). 
2. Add and commit using steps from above.
3. Push new files to server, verify arrival. 
4. Copy the URL to the jira ticket and @mention relevant engineers to request validation.
5. Correct as necessary and post to stage for re-validation. 
6. When all changes are completed and validated, post to zebra.github.io

<!-- THIS SECTION IS NO LONGER REQUIRED. MOST PRODUCTS NOW HAVE THEIR OWN BRANCHES OR ARE CONTAINS WITHIN SMALL GROUPS (i.e. "TUT_PI" branches for EMDK, MX and StageNow and "solutions" branch for SOLA products.> 

### VI. Merge into Develop 

* From within the develop branch:

	:::term
	$ git merge --no-ff branch-name
	$ git commit -m 'message describing the merge'
	$ git push origin develop


### VII. Merge Develop into Branch

From within the branch that develop is merging into: 

	:::term
	$ git merge --no-ff develop
	$ git commit -m 'message describing the merge'
	$ git push origin branch-name
 -->

## Add an MX version to Android Studio

As of EMDK 7.1, EMDK plug-ins are distributed through the JCenter repository, making these steps obsolete. 

* On a Mac, open the folder: "/users/shared/Symbol EMDK for Android/wizard/DSD" 
* Create a folder for the new MX version, following the existing naming convention
* Copy the new DSDs to the new folder
* Open the file "/DSD/index.dsd" 
* Create a new &lt;characteristic&gt; node by copying that of the prior version
* Modify where necessary for the new version number
* Add new line(s) for new CSPs, if any 
* Launch EMDK and select Profile Manager from EMDK menu

## Add a new CSP to MX

* On develop repo, go to "tut" branch 
* Analyze the new CSP's DSD for the number and types of parameters
* Identify and copy an existing CSP that's similar to the new one
* Rename the folders as needed to correspond to the new DSD
* Search and replace the contents of the copied index.md files for mx: "x.x"; osx: "x.x"; apilevel: "xx"; csp: name; and any other global information, as appropriate
* Manually edit remaining file content as appropriate to document usage CSP (see gerrit repo for Mini-HLD, release notes and other techteam artifacts provided by engineering. Also see APA slides, Polarion for parm descriptions)
* Edit /mx/index.md; /mx/&lt;newCSPname&gt;/index.md; /mx/compatibility/index.md as needed for the new CSP
* Edit /src/build.js (if necessary) to add the new version's directory to the source list
* In StageNow docs: 
   * Add a link in the Settings Types index for each new CSP
   * Copy an existing folder under /csp, rename it as the new CSP and edit index.md to match
* If the CSP is being used by EMDK (DSD contains "developer" role):
   * Add a link in the Profile Manager index for each new CSP
   * Copy an existing folder under the EMDK /mx folder, rename it as the new CSP and edit index.md to match
* If a new version of MX and/or OSx is required, add it to /partials/navbar-smartdocs.html layout
* Build and copy new /mx folder (only for MX itself) to stage for validation  
* Once validated and/or corrected, rebuild and copy to production server

## Update EMDK Sample Code

* In a browser, go to this git help page -> https://github.com/exampleuser/old-repository.git
* In terminal, go to the current sample-code repo
* Create a bare clone of the repo using as shown on the help page: 
 * git clone --bare https://github.com/exampleuser/old-repository.git
* Mirror-push to the new repo:
 * cd old-repository.git
 * git push --mirror https://github.com/exampleuser/new-repository.git
* Remove the temporary local repository you created in step 1: 
 * cd ..
 * rm -rf old-repository.git
* See emdk-api-generation doc for more details

## Update EMDK Sample Code (alternative method)

1. In a browser, go to the prior version of the sample-code branch (i.e. "samples-emdkforxamarin-4_0")
2. Click the green "Clone or download" button and copy the clone URL
3. Navigate to your repo folder in a terminal window and make a clone of the samples branch using this command:
 * git clone "https://github.com/Zebra/samples-emdkforxamarin-4_0" (replacing quoted text with copied URL)
4. Switch to the new cloned repo and create a new incremented samples branch off the "master" branch using command similar to:
 * git checkout -b samples-emdkforxamarin-5_0 master
5. Copy the new sample files into the new branch off the master branch, REPLACING the existing folders
6. Add, commit and push the new sample files
7. In the browser, switch to the newly created branch and copy the URL from the browser's address bar
8. Insert the copied URL into the "source:" line on the sample guide pages' frontmatter
9. Click the green "Clone or download" button, right-click the "Download ZIP" link and select "Copy Link Address" from the right-click drop-down
10. Insert the copied URL into the "download:" line on the sample guide pages' frontmatter
11. Build the pages and test the links

