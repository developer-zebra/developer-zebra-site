

// Import the module
var readdirp = require('readdirp');
var fs = require('fs');
var count = require('word-count');
var fm = require('front-matter');

var settings = {
    root: './src',
    entryType: 'all',
    // Filter files with js and json extension
    fileFilter: [ '*.md', '*.csp' ]
};

// In this example, this variable will store all the paths of the files and directories inside the providen path
var allFilePaths = [];
var ctr_all = 0; 
var ctr_file = 0;
var ctr_num_files = 0;
// Iterate recursively through a folder
readdirp(settings,
    // This callback is executed everytime a file or directory is found inside the providen path
    function(fileInfo) {
    	if( fileInfo.fullPath.endsWith(".md") || fileInfo.fullPath.endsWith(".csp")){
    		ctr_num_files += 1;
	        console.log(ctr_num_files + "    : Opening" + fileInfo.fullPath);
	        //open file
	        var file = fs.readFileSync(fileInfo.fullPath, "utf8");

	        // seperate markdown content so can just count body
	        try {
	        	//if document is a CSP then we need to count words in front-matter
	        	if (fileInfo.fullPath.endsWith(".csp")) {
	        		ctr_file = count(file);
	        	} else {
			        var content = fm(file)

			        // count body only
			        ctr_file = count(content.body);
	        		
	        	}
			}
			catch(err) {
				//fallback if front matter is malformed
			    ctr_file = count(file);
			}
	        ctr_all = ctr_all + ctr_file;
	        console.log (ctr_all + ":"+ ctr_file + fileInfo.fullPath);
	        // Store the fullPath of the file/directory in our custom array 
	        //allFilePaths.push(
	        //    fileInfo.fullPath
	        //);

    	}
    }, 

    // This callback is executed once 
    function (err, res) {
        if(err){
            throw err;
	        console.log("error");
	        console.log(err);
        }
        console.log("done");
        console.log("Total Files: " + ctr_num_files);
        console.log("Total Words: " + ctr_all);
        // An array with all the fileEntry objects of the folder 
        // console.log(res);
        // ["c:/file.txt",""]
    }
);