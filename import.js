var fs = require('fs');
var fse = require('fs-extra');
var basename = require('path').basename;
var dirname = require('path').dirname;
var extname = require('path').extname;

var resetExport = function() {
    fse.removeSync('export');
    fse.mkdirsSync('export');
};    

var traverseFileSystem = function (currentPath) {
    console.log(currentPath);
    var destFolder = 'export';
    var files = fs.readdirSync(currentPath);
    for (var i in files) {
        var currentFile = currentPath + "/" + files[i];
        var stats = fs.statSync(currentFile);
        if (stats.isFile() && markdown(currentFile)) {
            //console.log(currentFile);
            var newFolder = currentFile.replace('import',destFolder).replace('.md',"")
            console.log('file: %s => ', currentFile, newFolder+"/index.md");
            fse.mkdirsSync(newFolder); 
            //need to add front matter and remove 
            var data = fs.readFileSync(currentFile,'utf8'); //read existing contents into data

            var lines = data.split('\n');
            var title = files[i]; //default title to file name incase of no #
            for(var line = 0; line < lines.length; line++){
                if(lines[line].startsWith('#')){
                    //looking for markdown H1 #
                    title=lines[line].replace('#','');
                    break;
                };
            }
            // console.log(title);
            var frontMatter= '---\ntitle: '+title+'\n---\n';
            fs.writeFileSync(newFolder+"/index.md",frontMatter,'utf8');
            fs.appendFileSync(newFolder+"/index.md",data,'utf8');

        }
        else if (stats.isDirectory()) {
            //copy directory to import
            var currentFolder = currentPath + "/" + files[i];
            var newFolder = currentFolder.replace('import',destFolder)
            fse.mkdirsSync(newFolder); //just make a new folder with same name in export folder
            console.log('%s => %s',currentFolder,newFolder);
            traverseFileSystem(currentFile);
           }
        }
    };

resetExport();
traverseFileSystem('import');


function markdown(file){
  return /\.md|\.markdown/.test(extname(file));
}