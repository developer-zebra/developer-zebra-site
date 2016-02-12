var fs = require('fs'),
    path = require('path'),
    cheerio = require('cheerio'),
    wrench = require('wrench'),
    keyword_extractor = require("keyword-extractor"),
    snippets = require('smart-text-snippet'),
    yamlFront = require('front-matter'),
    removeMd = require('remove-markdown'),
    unfluff = require('unfluff');

function fileExists(filePath)
{
    try
    {
        return fs.statSync(filePath).isFile();
    }
    catch (err)
    {
        return false;
    }
}

var check_links = function(folder){
    folder = "build/" + folder;
    var json = [];
    files = wrench.readdirSyncRecursive(folder);
    // console.log(files)
      // Files is an array of filename 
      // console.log(files);
        console.log('checking: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        if(path.extname(filename) == ".html"){
            
            // console.log("reading:" + filename);
            var html_file = fs.readFileSync(filename);
            var $ = cheerio.load(html_file);
            $("a").each(function() {
                var link = $(this);
                var text = link.text();
                var href = link.attr("href");
                var linkfile ="";
                
                if (href){
                    if(href.startsWith("http")){
                        //external link
                    }

                    if(href.startsWith("#")){
                        //anchor
                    }

                    if(href.startsWith("..")){
                        //relative
                    }
                    
                    if(href.startsWith("/")){
                        //rooted
                        linkfile = 'build/'+href+'/index.html';
                        
                    }
                    if(linkfile !=""){
                        if(fileExists(linkfile)){

                        }
                        else{
                        console.log(filename + "     bad link-> " + href);

                        }

                    }
                }

                
            });

            
        }
    };
    

}


      check_links("emdk-for-android/4-0");
      
