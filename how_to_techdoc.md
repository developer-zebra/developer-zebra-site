## Document a NEW PRODUCT
(example: Enterprise Browser 1.6)

### I. Create a new BRANCH in the developer-zebra-site repo from the same folder from which you'll be copying the product. For example, if you're documenting EB 1.6, checkout the branch containing EB 1.5. 

		:::term
		$ git checkout eb-1.5
		$ git checkout -b eb-1.6 ("eb-1.6" = new branch that contains EB 1.5)


### II. Create folder structure

1. In product folder ("enterprise-browser"), copy the folder of prior version.
2. Rename the copied folder to "1-6" (separate digits with a **dash**, **NOT a dot**).
3. Using your editor, search and replace "productversion: 1-5" with "productversion: 1-6" on all pages. 
4. Search and replace "1.5" with "1.6" in appropriate places (a manual replacement process is recommended; some search results will be "false positives," such as those that read "for EB 1.5 and higher...").

		:::term
		$ git add . (stages all changed files for commit)  
		$ git commit -m 'EB 1.6 initial commit' 
		$ git push 

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

* On a Mac, open the folder: "/users/shared/Symbol EMDK for Android/wizard/DSD" 
* Create a folder for the new MX version, following the existing naming convention
* Copy the new DSDs to the new folder
* Open the file "/DSD/index.dsd" 
* Create a new &lt;characteristic&gt; node by copying that of the prior version
* Modify where necessary for the new version number
* Add new line(s) for new CSPs, if any 
* Launch EMDK and select Profile Manager from EMDK menu

## Add a new CSP to MX

* Create a branch off develop
* Analyze the new CSPs DSD for the number and types of parameters
* Identify and copy an existing CSP that's similar to the new one
* Rename the folders as needed to correspond to the new DSD
* Search and replace the contents of the copied index.md files for mx: "x.x"; osx: "x.x"; apilevel: "xx"; csp: name; and any other global information, as appropriate
* Manually edit remaining file content as appropriate to document usage CSP (see gerrit repo for Mini-HLD, release notes and other techteam artifacts provided by engineering. Also see APA slides)
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
