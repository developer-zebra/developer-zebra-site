var Metalsmith = require('metalsmith'),
    lunr = require('metalsmith-lunr')
    branch = require('metalsmith-branch'),
    showdown   = require('metalsmith-showdown'),
    snippet   = require('metalsmith-snippet'),
    templates  = require('metalsmith-templates')
    Handlebars = require('handlebars'),
    collections = require('metalsmith-collections'),
    permalinks  = require('metalsmith-permalinks'),
    tags = require('metalsmith-tags'),
    multimatch = require('multimatch'),
    inplace = require('metalsmith-in-place'),
    layouts = require('metalsmith-layouts'),
    fs         = require('fs'),
    Handlebars = require('handlebars'),
    serve = require('metalsmith-serve'),
    watch = require('metalsmith-watch'),
    foldermenu = require('metalsmith-folder-menu'),
    imagemin = require('metalsmith-imagemin'),
    paths = require('metalsmith-paths'),
    codehighlight = require('metalsmith-code-highlight'),
    blc = require('metalsmith-broken-link-checker'),
    headingsidentifier = require("metalsmith-headings-identifier"),
    sitemap = require('metalsmith-sitemap'),
    Swag = require('swag'),
    path = require('path'),
    wrench = require('wrench'),
    keyword_extractor = require("keyword-extractor"),
    snippets = require('smart-text-snippet'),
    yamlFront = require('front-matter'),
    removeMd = require('remove-markdown'),
    unfluff = require('unfluff');


Swag.registerHelpers(Handlebars);

var fileinsert = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (typeof(_f.insert) !='undefined' ) {
                    //console.log('trying to insert' + _f.insert.file + ':' + _f.url);
                    if(typeof(files[_f.insert.file]) =='undefined'){
                        console.log('ERROR INSERTING:' + _f.insert.file + ' INTO:' + _f.url)
                    }
                    else{
                        _f.contents = files[_f.insert.file].contents;
                        _f.title = files[_f.insert.file].title;
                        
                    }
                    // console.log(_f);
                }
            }
        }
        done();
    };
};


var defaultPublish = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (typeof(_f.publish) =='undefined' ) {
                    _f.publish = true;
                    _f.lunr = true;
                }
            }
        }
        done();
    };
};

var mxversion = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (!_f.mxversion) {
                    _f.mxversion = config.mxversion;
                }
            }
        }
        done();
    };
};

var findLayout = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                // if(_f.path.dir =='emdk-for-android/3-1/mx/4-4/app-management'){
                //     console.log(_f)

                // }
                if (!_f.layout) {
                    
                    _f.layout = config.layoutName;
                }
            }
        }
        done();
    };
};

var findProduct = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (!_f.product) {
                    _f.product = config.productName;
                }
            }
        }
        done();
    };
};

var findProductVersion = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            // console.log(file);
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (!_f.productversion) {
                    _f.productversion = config.productVersionName;
                }
            }
        }
        done();
    };
};




var metaUrl = function(config) {
    var pattern = config.pattern;

    return function(files, metalsmith, done) {
        Object.keys(files).forEach(function (filepath) {
        // parent folder name
            // if (pattern.test(files[filepath])) {
                // console.log(filepath);
                files[filepath]['url'] = "/" + filepath.replace("index.md","");
            // }
        });
        done();
    };
};

Handlebars.registerHelper("debug", function(optionalValue) {
  console.log("Current Context");
  console.log("====================");
  console.log(this);
 
  if (optionalValue) {
    console.log("Value");
    console.log("====================");
    console.log(optionalValue);
  }
});

var sitebuild = Metalsmith(__dirname)
    .clean(false)
    .concurrency(1000)
    .metadata({
        site: {
          title: 'Zebra Technologies - EMDK Samples',
          url: 'http://zebratechnologies.github.io/samples'
        }
        
      })
    .use(paths({
        property: "path"
    }))    
    .use(metaUrl({
        pattern: '*.md'
    }))
    .use(defaultPublish({
        pattern: '.*'
    }))
    .use(fileinsert({
        pattern: '.*'
    }))
    .use(inplace({
      engine: 'handlebars',
      partials: 'partials',
      pattern: '**/*.md'
    })) 
    .use(collections({
        samples: {
            pattern: '**/samples/**',
            sortBy: 'date',
            reverse: true
        },
        mx: {
            pattern: 'mx/**/*.md'
        },
        md: {
            pattern: '/**/**.md'
        },
        csp: {
            pattern: 'mx/**/*.csp',
            sortBy: 'order'
        },

    }))
    .use(findLayout({
        pattern: 'mx',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: 'samples',
        layoutName: 'sample.html'
    }))
    .use(findLayout({
        pattern: '[^/]+/[^/]+/api',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: '[^/]+/[^/]+/guide',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: '[^/]+/[^/]+/tutorial',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: 'stagenow',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: 'ehs',
        layoutName: 'guide.html'
    }))
    .use(findProduct({
        pattern: 'emdk-for-android',
        productName: 'EMDK For Android'
    }))
    .use(findProduct({
        pattern: 'ehs',
        productName: 'Enterprise Home Screen'
    }))
    .use(findProduct({
        pattern: 'stagenow',
        productName: 'Stagenow'
    }))
    .use(findProductVersion({
        pattern: 'ehs/2-3',
        productVersionName: '2.3'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-android/3-1',
        productVersionName: '3.1'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-android/4-0',
        productVersionName: '4.0'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-android/4-1',
        productVersionName: '4.1'
    }))
    .use(findProduct({
        pattern: 'emdk-for-xamarin',
        productName: 'EMDK For Xamarin'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-xamarin/1-0',
        productVersionName: '1.0'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-xamarin/2-0',
        productVersionName: '2.0'
    }))
    .use(findProductVersion({
        pattern: 'stagenow/2-2',
        productVersionName: '2.2'
    }))
    .use(mxversion({
        pattern: 'mx/4-2/',
        mxversion: '4.2'
    }))
    .use(mxversion({
        pattern: 'mx/4-4/',
        mxversion: '4.4'
    }))
    .use(mxversion({
        pattern: 'mx/5-0/',
        mxversion: '5.0'
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-0/'
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-1/'
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/personalshopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/3-1/'
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/1-0/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/1-0/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/1-0/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/1-0/'
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-0/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-0/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-0/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-0/'
    }))
    .use(foldermenu({
        folder: 'mx/4-4/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'mx/5-0/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'mx/4-2/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'mx/',
        automenu: false
    }))
    .use(foldermenu({
        folder: 'stagenow/2-2/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-3/'
    }))
    .use(showdown({literalMidWordUnderscores:true}))
    .use(snippet({
      maxLength: 250,
      suffix: '...'
    }))
    
    // .use(permalinks())
    // .use(templates('handlebars'))
    .use(layouts({
      directory: 'layouts',
      default: 'index.html',
      engine: 'handlebars',
      // partials: 'partials',
      pattern: '**/*.html'
    }))
    .use(headingsidentifier({
        headingClass: "anchor"
    }))
    .use(codehighlight({

    }))
    .destination('./build')
    .use(sitemap({
        hostname: 'http://zebra.github.io'
    }))
    .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete! - going to index');
      index_generate("emdk-for-android/4-0");
      index_generate("emdk-for-android/3-1");
      index_generate("emdk-for-xamarin/1-0");
      index_generate("stagenow/2-2");
      index_generate("ehs/2-3");

    }
  });

// INDEXING CODE

var index_generate = function(folder){
    folder = "build/" + folder;
    var json = [];
    files = wrench.readdirSyncRecursive(folder);
    // console.log(files)
      // Files is an array of filename 
      // console.log(files);
        console.log('indexing: ' + folder);
    

    for (var f = 0; f < files.length; f++) {
        filename = folder + "/" + files[f];
        if(path.extname(filename) == ".html"){
            
            console.log("reading:" + filename);
            var html_file = fs.readFileSync(filename);
            html = unfluff(html_file, 'en');
            var mdfile= filename.replace("build/","src/").replace(".html",".md");
            var md = fs.readFileSync(mdfile).toString();
            
            var yaml;
            yaml = yamlFront(md);
            //get just text
            console.log("Generating Keywords: " + yaml.attributes.title );
            if(yaml.body==""){
                yaml.body = html.text
            }
            var keywords = keyword_extractor.extract(yaml.body,
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
            var snippet = snippets.snip(removeMd(yaml.body), {len: 150});
            index_item = {
                title: yaml.attributes.title,
                keywords: keyword_string,
                summary: snippet,
                url: filename.replace("build/","/").replace("/index.html","")

            }
            if(index_item.keywords==""){
                console.log("*** EMPTY FILE");
                console.log(yaml.body);
            }
            else{
                json.push(index_item);          

            }
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
    

}