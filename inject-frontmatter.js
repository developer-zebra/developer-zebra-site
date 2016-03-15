var fs = require('fs'),
    path = require('path'),
    wrench = require('wrench'),
    matter = require('gray-matter');




function ignoreFunc(file, stats) {
  // `file` is the absolute path to the file, and `stats` is an `fs.Stats` 
  // object returned from `fs.lstat()`. 
  return stats.isFile() && path.extname(file) != ".html";
}

var inject_frontMatter = function(setting){
    var folder = "src/" + setting.path; 
    var frontmatter = setting.frontmatter;
    var json = [];
    files = wrench.readdirSyncRecursive(folder);
    console.log('injecting all in: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        if(path.extname(filename) == ".md"){
            
            console.log("reading:" + filename);
            var yaml = matter.read(filename);
            // yaml.content="";
            for (var i = 0; i < setting.frontmatter.length; i++) {
                var inject = setting.frontmatter[i];
                var key = inject.item;
                var value = inject.value;
                if(yaml.data[key] && !inject.override){
                    console.log("        ingnoring: " + key);
                    
                }
                else{
                    yaml.data[key] = value;
                    console.log("     adding: " + key + ": " + value)
                }
            };

            //create new file content
            var newfilecontent = matter.stringify(yaml.content, yaml.data);
            fs.open(filename, 'w', function(err, fd) {
               if (err) {
                   return console.error(err);
               }
              // console.log("Writing File:" + filename);     
            });        
            fs.writeFile(filename, newfilecontent, function(err) {
                if(err) {
                    console.error("Could not write file" + filename + ": %s", err);
                }
            });

        }
    };
    
    

}

var settings = [
    {
        "path": "emdk-for-android/4-0",
        "frontmatter": [
            {
                "item" :  "layout",
                "value" : "xx.html",
                "override": false
            }
        ]
    }
]

for (var i = 0; i < settings.length; i++) {
    inject_frontMatter(settings[i]);
};
