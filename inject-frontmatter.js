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
    var pattern = new RegExp(setting.path)
    var folder = "src"; 
    var frontmatter = setting.frontmatter;
    var json = [];
    files = wrench.readdirSyncRecursive(folder);
    console.log('injecting all in: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        // console.log(filename);
        if(pattern.test(files[f]) && path.extname(filename) == ".md"){
            
            console.log("reading:" + filename);
            var yaml = matter.read(filename);
            // yaml.content="";
            for (var i = 0; i < setting.frontmatter.length; i++) {
                var inject = setting.frontmatter[i];
                var key = inject.item;
                var value = inject.value;
                if(yaml.data[key] && !inject.override && !inject.replace){
                    console.log("        ingnoring: " + key);
                    
                }
                else{
                    if(inject.replace){
                        if(inject.replace.match ==yaml.data[key]){
                            yaml.data[key] = value;
                            console.log("     replacing: " + key + ": " + value)
                        }
                        else{
                            console.log("     not replacing: " + key);
                        }
                    }
                    else{
                        yaml.data[key] = value;
                        console.log("     adding: " + key + ": " + value)

                    }
                }
            };

            //create new file content
            var newfilecontent = matter.stringify(yaml.content, yaml.data);
                    
            fs.writeFileSync(filename, newfilecontent);

        }
    };
    
    

}

var settings = [

    {
<<<<<<< HEAD
        "path": "emdk-for-android/6-3/",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "6.3",
=======
        "path": "stagenow/2-6/",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.6",
>>>>>>> develop
                "override": true,
            }
        ]
    },



]

for (var i = 0; i < settings.length; i++) {
    inject_frontMatter(settings[i]);
};
