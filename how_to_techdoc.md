
## Fix the "Anchor link problem"

Because the TechDocs-page header (aka "menu bar") always remains when scrolling up or down, content of anchor links is partially obscured by the header. The following fixes that by causing the header to adhere to the top of the page, scrolling away upward as the page is scrolled downward. 

**Add this to any branch in which you want to see the new behavior**: 

Changes the main.css:

1. In Header section insert the following (approx. line 178) causing menu bar to remain at top of scrolling page:

	    #main-menu {
	    position:relative;
	    }

2. In Typography section (approx. line 12) comment the following to remove extra padding no longer needed:

	    /* padding-top: 100px; */

-----

## Add "Back to Top" Button
After fixing the Anchor link problem (above), we added a "back to top" button to make it easier to bring the header back into view:  

Add to main.css:

    #back-to-top-btn {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        font-size: 18px;
        border: none;
        outline: none;
        background-color: gray;
        color: white;
        cursor: pointer;
        padding: 8px;
        border-radius: 4px;
    }

    #back-to-top-btn:hover {
        background-color: #555;
    }

Add to Main.js:

    //Get the Back-to-top button
    var html='<button id="back-to-top-btn" title="Go to top">Back to Top</button>';

    $("body").append(html);

    var buttonToTop = document.getElementById("back-to-top-btn");

    // When the user scrolls down from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        buttonToTop.style.display = "block";
      } else {
        buttonToTop.style.display = "none";
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    $("#back-to-top-btn").click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        });



----

## Document a NEW PRODUCT
(example: Enterprise Browser 1.6)

### I. Create a new BRANCH off the "develop" branch of developer-zebra-site repo

	:::term
	$ git checkout develop
	$ git checkout -b eb-1.6 develop ("eb-1.6" = new branch name off the "develop" branch)


### II. Create folder structure
In product folder ("enterprise-browser"), copy folder of prior version
Rename the copied folder to "1-6" (separate digits with a **dash**, **NOT a dot**)
Search and replace " 'productversion: 1-5' " with " 'productversion: 1-6' " on all pages
Search and replace "1.5" with "1.6" in appropriate places (a manual replacement process is recommended; some search results will be "false positives")

	:::term
	$ git add . (stages all changed files for commit)  
	$ git commit -m 'EB 1.6 initial commit' (commits the changes, makes a restore point)
	$ git push --set-upstream origin eb-1.6 (only required for the first push, after that just use "git push" to replicate changes to the online repo)


### III. Modify build script and techdocs "tile-page" 

* Inside /src/build.js, replicate and modify the prior product's portion of the build script  

* In the /src/index.md file, replicate and modify the prior product's section of the tile page 

	:::term
	$ node build (builds pages and starts local web server to view them with)

Browse to http://localhost:8080/ and click the product's tile to see the pages

### IV.  Modify/Add/Create pages as necessary for the new version
After saving major changes, commit them to the repo: 

	:::term
	$ git add . (stages all changed files for commit)  
	$ git commit -m '[optional Jira ticket number] insert brief description of the changes'


To see changes: 
* press CTRL-C in the build tab to quit the local web server 

	:::term
	$ node build (to run it again and publish the latest saved changes)


* Refresh the page(s) and revise as necessary

* Update the redirect link for the new product version (i.e. /src/ehs/2-5/index.md)
This ensures that incoming links from other products (i.e. "techdocs.zebra.com/ehs") will never go stale. 

## WHEN WORK IS COMPLETE...

### V. Stage (for engineering validation)

* Copy updated files to zebra-stage.github.io repo from local /build folder (select "merge" if prompted)
* Add and commit using steps from above
* Push new files to server, verify arrival
* Copy the URL to the jira ticket and @mention relevant engineers to validate
* Correct as necessary and post to stage and zebra.github.io repos (commit and push)

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


## Add an MX version to Android Studio

* On a Mac, open the folder: "/users/shared/Symbol EMDK for Android/wizard/DSD" 
* Create a folder for the new MX version, following the existing naming convention
* Copy the new DSDs to the new folder
* Open the file "/DSD/index.dsd" 
* Create a new <characteristic> node by copying that of the prior version
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
* Edit /mx/index.md; /mx/newCSPname/index.md; /mx/compatibility/index.md as needed for the new CSP
* Edit /src/build.js
* If a new version of MX or OSx is required, edit /partials/navbar-smartdocs.html
* copy edited build and navbar-smartdocs files to stage and production servers
