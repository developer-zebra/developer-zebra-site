##EMDK for X
* Get latest code from Jenkins http://10.17.13.50:8080/job/tut_emdka_build/ (SDK-Addon highest api level - has javadocs)
* Get DLL from Praveen
* Copy DLL to Lib folder in mDocToMarkdown
* Go to shell in parent folder MDoc - then run command in readme (cross fingers - need mdoc - from Xamarin tools)
* This updates mdoc folder
* Find "To be added" in mdocs folder (this is all new/changed stuff)
* Find same thing in Javadocs and get description - replace Summary TBA - remove other TBA
* When looking at javadocs - always click down into the details (do not take "first sentence" from summary)
* For values and valuesof - just remove TBA
* Do not do hidden look for "protected" <MemberSignature Language="C#" Value="protected
* Note: check how params descriptions are done
* Generate Markdown
	* ex: node generate_markdown.js -a 2.6.0.69 -p 2.6 
* check for latest assembly number in xml
* Markdown is in "markdown" folder - look again for TBA
* Copy the markdown and "merge" into techdocs E4X API folder

##EMDK For Android
* Take HTML from SDK Add on/ Docs/ Ref (take entire reference folder) - do not take stylesheet
* Pushed to stage / public directly (not built - after build)