var fs = require('fs'),
    path = require('path'),
    wrench = require('wrench'),
    keyword_extractor = require("keyword-extractor"),
    snippets = require('smart-text-snippet'),
    yamlFront = require('front-matter'),
    removeMd = require('remove-markdown'),
    unfluff = require('unfluff');


function ignoreFunc(file, stats) {
  // `file` is the absolute path to the file, and `stats` is an `fs.Stats` 
  // object returned from `fs.lstat()`. 
  return stats.isFile() && path.extname(file) != ".csp";
}

var index_generate = function(folder){
    folder = "src/mx/" + folder;
    var json = {csp:"",parms: []};
    files = wrench.readdirSyncRecursive(folder);
    // console.log(files)
      // Files is an array of filename 
      // console.log(files);
        console.log('indexing: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        if(path.extname(filename) == ".csp"){
            
            console.log("reading:" + filename);
            var md = fs.readFileSync(filename).toString();

            var yaml;
            yaml = yamlFront(md).attributes;
            //get just text
            console.log("Generating JSON: " + yaml.title );
            if(yaml.csp){
                json.csp = yaml.csp;
            }
            var parm_item = {};
            if(yaml.type == "parm"){
                if(yaml.parm && yaml.parm.name){
                    
                    if(yaml.parm.type == "list"){
                        parm_item.listitems = [];
                        for (var i = 0; i < yaml.parm.list.length; i++) {
                            
                            var listitem =     {
                                code: yaml.parm.list[i].code,
                                name: yaml.parm.list[i].name,
                                requires: {
                                    osx: yaml.parm.list[i].osx || "",
                                    osxEnd: yaml.parm.list[i]["osx-end"] || "",
                                    mx: yaml.parm.list[i].mx || "",
                                    api: yaml.parm.list[i].apilevel || "",
                                    osxSpecific: yaml.parm.list[i]["osx-specific"] || "",
                                    osxSpecificList: yaml.parm.list[i]["osx-specific-list"] || "",
                                    osxExclude: yaml.parm.list[i]["osx-exclude"] || "",
                                    osxExcludeEnd: yaml.parm.list[i]["osx-exclude-end"] || ""

                                }

                            }
                            parm_item.name = yaml.parm.name;
                            parm_item.listitems.push(listitem);                            
                        };
                    }
                    else{
                        parm_item.name = yaml.parm.name;
                        parm_item.requires= {
                            osx: yaml.osx || "",
                            osxEnd: yaml["osx-end"] || "",
                            mx: yaml.mx || "",
                            api: yaml.apilevel || "",
                            osxSpecific: yaml["osx-specific"] || "",
                            osxSpecificList: yaml["osx-specific-list"] || "",
                            osxExclude: yaml["osx-exclude"] || "",
                            osxExcludeEnd: yaml["osx-exclude-end"] || ""
                        }
                    }
                }
                else{
                    console.error("Missing Parm name")
                }
                //repeat parm if it contains comma delimited list
                var parmnames = parm_item.name.split(',');
                for (var i = 0; i < parmnames.length; i++) {
                    var parmname = parmnames[i].trim();
                    console.log("    " + parmname);

                    
                    var parm  = (JSON.parse(JSON.stringify(parm_item)));
                    parm.name = parmname;
                    json.parms.push(parm);
                };
                
            }
            else{
                console.error("Not a parm")
            }

                      
        }
    };
    var json_file = folder.replace('src','build')+'/mx.json';
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
    

}
      index_generate("accessmgr");
      index_generate("analyticsmgr");
      index_generate("appmgr");
      index_generate("audiovoluimgr");
      index_generate("batchmgr");
      index_generate("batterymgr");
      index_generate("bluetoothmgr");
      index_generate("browsermgr");
      index_generate("cameramgr");
      index_generate("cellularmgr");
      index_generate("certmgr");
      index_generate("clock");
      index_generate("componentmgr");
      index_generate("conditionmgr");
      index_generate("devadmin");
      index_generate("dhcpoptionmgr");
      index_generate("displaymgr");
      index_generate("encryptmgr");
      index_generate("filemgr");
      index_generate("gprsmgr");
      index_generate("hostsmgr");
      index_generate("intent");
      index_generate("keymappingmgr");
      index_generate("licensemgr");
      index_generate("persistmgr");
      index_generate("powerkeymgr");
      index_generate("powermgr");
      index_generate("scanmodemgr");
      index_generate("sdcardmgr");
      index_generate("settingsmgr");
      index_generate("stats");
      index_generate("statusmgr");
      index_generate("threatmgr");
      index_generate("touchmgr");
      index_generate("uimgr");
      index_generate("usbmgr");
      index_generate("wifi");
      index_generate("wirelessmgr");
      index_generate("xmlmgr");
