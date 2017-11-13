fs = require('fs');
util = require('util');
var parseString = require('xml2js').parseString;
var dirname = 'mdoc/Symbol.XamarinEMDK/';
var fs = require('fs');
var path = require('path');
var process = require("process");


// Loop through all the files in the temp directory
fs.readdir(dirname, function (err, files) {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        // Make one pass and make the file complete
        var docPath = path.join(dirname, file);


        fs.stat(docPath, function (error, stat) {
            if (error) {
                console.error("Error stating file.", error);
                return;
            }

            if (stat.isFile())
                fs.readFile(docPath, 'utf8', function (err, data) {
                    if (err) {
                        return console.log(err);
                    }
                    else {
                        parseString(data, function (err, result) {
                            console.log("--------------------------------------------");
                            console.dir(result);
                            //console.dir(util.inspect(result, false, null));
                                
                            for (var typeprop in result) {

                                for (var classprop in result[typeprop]) {
                                    if (classprop == "$") {
                                        console.log("ClassName: " + result["Type"][classprop].Name);
                                        console.log("FullName: " + result["Type"][classprop].FullName);
                                    } else if (classprop == "AssemblyInfo"){
                                        console.log(JSON.stringify(result["Type"][classprop]));
                                        console.log("AssemblyVersion: " + result["Type"][classprop]["AssemblyVersion"]);
                                    } else {
                                        console.log("Key:" + classprop);
                                    }
                                }

                            }
                        });
                    }
                });
        });
    });
});
