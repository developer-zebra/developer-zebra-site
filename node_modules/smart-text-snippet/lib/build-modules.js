var fs = require('fs');

// build the npm module
var src = './src/smart-text-snippet.js';

console.log('reading file: ', src);

fs.readFile(src, 'utf8', function(err, data) {
  // npm module
  fs.readFile('./src/node-wrapper.js', 'utf8', function(err, _data) {
    var strNode = _data.replace('<METHOD-BODY>', data);
    fs.writeFile('./dist/smart-text-snippet-node.js', strNode, function(err){
      console.log('Wrote npm module file');
    });
  });
   
  fs.readFile('./src/browser-wrapper.js', 'utf8', function(err, _data) {
    // browser module
    var strBrowser = _data.replace('<METHOD-BODY>', data);
    fs.writeFile('./dist/smart-text-snippet-browser.js', strBrowser, function(err) {
      console.log('wrote browser module');
    });
  });
  
  fs.readFile('./src/amd-wrapper.js', 'utf8', function(err, _data) {
    var strAmd = _data.replace('<METHOD-BODY>', data);
    fs.writeFile('./dist/smart-text-snippet-amd.js', strAmd, function(err) {
      console.log('wrote amd module');
    });
  });
});


