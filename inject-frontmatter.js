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
        "path": "",
        "frontmatter": [
            {
                "item" :  "layout",
                "value" : "guide.html",
                "override": false
                
            }
        ]
    },
    {
        "path": "samples",
        "frontmatter": [
            {
                "item" :  "layout",
                "value" : "sample.html",
                "override": true,
            }
        ]
    },
    {
        "path": "emdk-for-xamarin",
        "frontmatter": [
            {
                "item" :  "product",
                "value" : "EMDK For Xamarin",
                "override": false,
            }
        ]
    },
    {
        "path": "emdk-for-android",
        "frontmatter": [
            {
                "item" :  "product",
                "value" : "EMDK For Android",
                "override": false,
            }
        ]
    },
    {
        "path": "ehs",
        "frontmatter": [
            {
                "item" :  "product",
                "value" : "Enteprise Home Screen",
                "override": false,
            }
        ]
    },
    {
        "path": "stagenow",
        "frontmatter": [
            {
                "item" :  "product",
                "value" : "Stagenow",
                "override": false,
            }
        ]
    },
    {
        "path": "enterprise-keyboard",
        "frontmatter": [
            {
                "item" :  "product",
                "value" : "Enterprise Keyboard",
                "override": false,
            }
        ]
    },
    {
        "path": "1-0",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "1.0",
                "override": false,
            }
        ]
    },
    {
        "path": "2-0",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.0",
                "override": false,
            }
        ]
    },
    {
        "path": "2-3",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.3",
                "override": false,
            }
        ]
    },
    {
        "path": "3-1",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.3",
                "override": false,
            }
        ]
    },
    {
        "path": "4-0",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "4.0",
                "override": false,
            }
        ]
    },
    {
        "path": "4-1",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "4.1",
                "override": false,
            }
        ]
    },
    {
        "path": "2-2",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.1",
                "override": false,
            }
        ]
    },
    {
        "path": "2-3",
        "frontmatter": [
            {
                "item" :  "productversion",
                "value" : "2.3",
                "override": false,
            }
        ]
    },


]

for (var i = 0; i < settings.length; i++) {
    inject_frontMatter(settings[i]);
};
