var dirname = 'mdoc/';
var fs = require('fs');
var path = require('path');
var process = require("process");
var XmlDocument = require('xmldoc').XmlDocument;

var markdown_buffer = "";
var methods_buffer = "";
var properties_buffer = "";
var constructors_buffer = "";
var events_buffer = "";


var assembly;
var product_version


if(process.argv.indexOf("-a") != -1){ //does our flag exist?
    assembly = process.argv[process.argv.indexOf("-a") + 1]; //grab the next item
}

if(process.argv.indexOf("-p") != -1){ //does our flag exist?
    product_version = process.argv[process.argv.indexOf("-p") + 1]; //grab the next item
}


if(assembly != null && product_version != null){

  fs.readdir(dirname, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach(function (file, index) {
      var stats = fs.statSync(dirname + file);
      if (stats.isDirectory()) {

        var namespace = file.split('.');

        if (namespace.length < 3) {
          api_folder = "core";
        } else {
          api_folder = namespace[2].toLowerCase();
        }
        
          writeMarkdown(dirname + file, api_folder)
        
      }
    });

  });
} else {

  console.log("\nUSAGE:\n Required Arguments:\n -a 'assembly'\n -p 'product version' \n\nEXAMPLE:\nnode generate_markdown.js -a 2.4.0.87 -p 2.4\n");
}


function writeMarkdown(mdoc_xml, api_folder) {

  fs.readdir(mdoc_xml, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }

    files.forEach(function (file, index) {
      // Make one pass and make the file complete
      var docPath = path.join(mdoc_xml, file);

      fs.readFile(path.join(__dirname, docPath), 'utf8', function (err, data) {

        if (err) {
          return console.log("**********************\n\n $s \n\n***********************\n\n", err);
        }

        console.log("Parsing: " + docPath);
        if(docPath.includes(".xml",0)){
        var doc = new XmlDocument(data);
        markdown_buffer = "";
        methods_buffer = "";
        properties_buffer = "";
        constructors_buffer = "";
        events_buffer = "";


        if (doc.childNamed("AssemblyInfo").toString().includes(assembly) && doc.childNamed("TypeSignature").attr.Value.includes("public")) {

          var class_name_index = 0;

          if (doc.attr.FullName.split('.').length < 4) {
            class_name_index = 2
          } else {
            class_name_index = 3
          }

          markdown_buffer += "---\ntitle: " + (doc.attr.FullName.split('.')[class_name_index]).replace('+', '.') + "\nlayout: guide.html\nproduct: EMDK For Xamarin \nproductversion: '"+product_version+"' \n---\n";

          markdown_buffer += doc.childNamed("Docs").childNamed("summary").val + "\n\n";
          var type = doc.childNamed("Base");
          if (type != undefined) {
            markdown_buffer += "**Type** - " + doc.childNamed("Base").childNamed("BaseTypeName").val + "\n\n";
          }

          var members = doc.childNamed("Members");
          members.eachChild(function (member) {

            if (member.childNamed("MemberType").val == "Constructor" && member.childNamed("MemberSignature").attr.Value.includes("public")) {
              if (member.childNamed("AssemblyInfo").toString().includes(assembly)) {
                constructors_buffer += "###" + member.childNamed("MemberSignature").attr.Value.split(" ")[1] + "\n\n";
                if (member.childNamed("MemberSignature").attr.Language == "C#") {
                  constructors_buffer += "**" + member.childNamed("MemberSignature").attr.Value + "**\n\n";
                }
                constructors_buffer += member.childNamed("Docs").childNamed("summary").val + "\n\n";

                var parameters = member.childNamed("Parameters");

                if (parameters != undefined && parameters.length > 0) {
                  constructors_buffer += "**Parameters:**\n\n";
                  parameters.eachChild(function (parameter) {
                    constructors_buffer += parameter.attr.Type.replace('+', '.') + " **" + parameter.attr.Name + "** ";

                    var parameter_summary = member.childNamed("Docs").childWithAttribute("name", parameter.attr.Name);

                    if (parameter_summary != undefined) {
                      constructors_buffer += " - " + parameter_summary.val + "\n\n";
                    } else {
                      constructors_buffer += "\n\n";
                    }

                  });
                }
                var returns = member.childNamed("ReturnValue");
                if (returns != undefined) {
                  constructors_buffer += "**Returns** - " + member.childNamed("ReturnValue").childNamed("ReturnType").val + "\n\n";
                }
              }

            }

            if (member.childNamed("MemberType").val == "Method" && member.childNamed("MemberSignature").attr.Value.includes("public")) {
              if (member.childNamed("AssemblyInfo").toString().includes(assembly)) {
                methods_buffer += "###" + member.attr.MemberName + "\n\n";
                if (member.childNamed("MemberSignature").attr.Language == "C#") {
                  methods_buffer += "**" + member.childNamed("MemberSignature").attr.Value + "**\n\n";
                }
                methods_buffer += member.childNamed("Docs").childNamed("summary").val + "\n\n";

                var parameters = member.childNamed("Parameters");

                if (parameters != undefined ) {
                  methods_buffer += "**Parameters:**\n\n";
                  parameters.eachChild(function (parameter) {
                    methods_buffer += parameter.attr.Type.replace('+', '.') + " **" + parameter.attr.Name + "** ";

                    var parameter_summary = member.childNamed("Docs").childWithAttribute("name", parameter.attr.Name);

                    if (parameter_summary != undefined) {
                      methods_buffer += " - " + parameter_summary.val + "\n\n";
                    } else {
                      methods_buffer += "\n\n";
                    }

                  });
                }
                methods_buffer += "**Returns** - " + member.childNamed("ReturnValue").childNamed("ReturnType").val + "\n\n";
              } else {
                      //console.log(member.attr.MemberName + " ----------- Method not found in this Assembly, must have been removed from API" );
                     }
            }

            if (member.childNamed("MemberType").val == "Property" && member.childNamed("MemberSignature").attr.Value.includes("public")) {
              if (member.childNamed("AssemblyInfo").toString().includes(assembly)) {
                properties_buffer += "###" + member.attr.MemberName + "\n";
                properties_buffer +=  member.childNamed("Docs").childNamed("summary").val + "\n\n";
                var returns = member.childNamed("ReturnValue");
                if (returns != undefined) {
                  properties_buffer += "**Type** - " + member.childNamed("ReturnValue").childNamed("ReturnType").val + "\n";
                }
              } else {
                      //console.log(member.attr.MemberName + " ----------- Property not found in this Assembly, must have been removed from API" );
                     }
            }

            if (member.childNamed("MemberType").val == "Event" && member.childNamed("MemberSignature").attr.Value.includes("public")) {
              if (member.childNamed("AssemblyInfo").toString().includes(assembly)) {
                events_buffer += "###" + member.attr.MemberName + "\n\n";
                events_buffer += member.childNamed("Docs").childNamed("summary").val + "\n\n";
              } else {
                      //console.log(member.attr.MemberName + " ----------- Event not found in this Assembly, must have been removed from API" );
                     }
            }
          });

          var out_buffer = "";

          out_buffer += markdown_buffer;

          if (constructors_buffer != "") {
            out_buffer += "##Constructors\n\n";
            out_buffer += constructors_buffer;
          }

          if (methods_buffer != "") {
            out_buffer += "##Methods\n";
            out_buffer += methods_buffer;
          }

          if (properties_buffer != "") {
            out_buffer += "##Properties\n\n";
            out_buffer += properties_buffer;
          }

          if (events_buffer != "") {
            out_buffer += "##Events\n\n";
            out_buffer += events_buffer;
          }

          var output_path = "./markdown/";
          if (!fs.existsSync(output_path)) {
            fs.mkdirSync(output_path);
          }

          output_path += api_folder + "/";

          if (!fs.existsSync(output_path)) {
            fs.mkdirSync(output_path);
          }

          output_path += docPath.split('/')[2].replace('+', '_').replace(".xml", "") + "/";
          if (!fs.existsSync(output_path)) {
            fs.mkdirSync(output_path);
          }

          fs.writeFile(output_path + "index.md", out_buffer, function (err) {
            if (err) {
              return console.log(err);
            }

            console.log(output_path + " saved!");
          });
        } else {
          console.log("^^^^^^^^^^ Assembly not found in this xml doc, must have been removed from API ^^^^^^^^^^^")
        }

      }
    });
    
    });
  });
}