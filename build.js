var Metalsmith = require('metalsmith'),
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
	Swag = require('swag');


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
        }

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
        layoutName: 'api.html'
    }))
    .use(findLayout({
        pattern: '[^/]+/[^/]+/guide',
        layoutName: 'guide.html'
    }))
    .use(findLayout({
        pattern: '[^/]+/[^/]+/tutorial',
        layoutName: 'tutorial.html'
    }))
    .use(findLayout({
        pattern: 'stagenow',
        layoutName: 'guide.html'
    }))
    .use(findProduct({
        pattern: 'emdk-for-android',
        productName: 'EMDK For Android'
    }))
    .use(findProduct({
        pattern: 'stagenow',
        productName: 'Stagenow'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-android/3-1',
        productVersionName: '3.1'
    }))
    .use(findProductVersion({
        pattern: 'emdk-for-android/4-0',
        productVersionName: '4.0'
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
        folder: 'emdk-for-android/3-1/'
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
    .use(showdown({}))
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
    .use(codehighlight({

    }))
    .destination('./build')
    .use(serve({
        cache: 0
    }))
    .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });

