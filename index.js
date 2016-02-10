var fs = require('fs'),
    path = require('path'),
    recursive = require('recursive-readdir'),
    keyword_extractor = require("keyword-extractor"),
    snippets = require('smart-text-snippet'),
    yamlFront = require('yaml-front-matter'),
    unfluff = require('unfluff');


function ignoreFunc(file, stats) {
  // `file` is the absolute path to the file, and `stats` is an `fs.Stats` 
  // object returned from `fs.lstat()`. 
  return stats.isFile() && path.extname(file) != ".html";
}

var folders = ["emdk-for-android/4-0"];


for (var i = 0; i < folders.length; i++) {
    folder = "build/" + folders[i];
    var json = [];
    console.log('indexing: ' + folder);
    recursive(folder, [ ignoreFunc], function (err, files) {
      // Files is an array of filename 
      // console.log(files);
      

        for (var i = 0; i < files.length; i++) {
            filename = files[i];
            console.log("reading:" + filename);
            var html = fs.readFileSync(filename);
            data = unfluff(html, 'en');
            var mdfile= filename.replace("build/","src/").replace(".html",".md");
            var md = fs.readFileSync(mdfile).toString();
            var md_contents = md.replace(/\A---(.|\n)*?---/,'');
            console.log(md_contents);
            if(md_contents==""){
                console.log("--------------> EMPTY MD USING HTML")
                md_contents = data.text;
            }
            var yaml;
            try {
                yaml = yamlFront.loadFront(md);
            }
            catch(err) {
                console.log("****** CHECK YAML: " + mdfile) + err.message;
                yaml = {
                    title: data.title
                }
            } 
            //get just text
            console.log("Generating Keywords: " + yaml.title );
            var keywords = keyword_extractor.extract(md_contents,
                {
                    language:"english",
                    remove_digits: true,
                    return_changed_case:true,
                    remove_duplicates: true

                });
            console.log("Keywords: " + keywords.length.toString());
            keyword_string = "";
            for (var x = 0; x < keywords.length; x++) {
                keyword_string += keywords[x] + " ";
            };
            var snippet = snippets.snip(data.text, {len: 150});
            index_item = {
                title: yaml.title,
                keywords: keyword_string,
                summary: snippet,
                url: filename.replace("build/","").replace("/index.html","")

            }
            if(index_item.keywords==""){
                console.log('\u0007')
                console.log("*** EMPTY FILE");
                console.log(data.text);
            }
            else{
                json.push(index_item);          

            }
        };
        var json_file = folder+'/index.json';
        console.log("Writing to: " + json_file);
        fs.open(json_file, 'w', function(err, fd) {
           if (err) {
               return console.error(err);
           }
          console.log("Creating Index:" + json_file);     
        });        
        fs.writeFile(json_file, JSON.stringify(json), function(err) {
            if(err) {
                console.error("Could not write file" + json_file + ": %s", err);
            }
        });
    })
}