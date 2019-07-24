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
    headingsidentifier = require("metalsmith-headings-identifier"),
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
    .clean(false)
    .concurrency(2000)
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

    //emdk for android 4.0
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

    //emdk for android 4.2
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/4-2/'
    }))

    //emdk for andriod 3.1
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
    
    //emdk for android 5.0
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/5-0/'
    }))

    

//emdk for android 6.0
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-0/'
    }))


//emdk for android 6.3
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-3/'
    }))

//emdk for android 6.4
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-4/'
    }))

    //emdk for android 6.6
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/payment',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/PersonalShopper',
        automenu: true,
        ascontent: true
    }))
    
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/scanandpair',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/securenfc',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/serialcomm',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/simulscan',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/api/notification',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-android/6-6/'
    }))

    //emdk for xamarin 1.0
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
        folder: 'emdk-for-xamarin/2-1/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-1/api/notification',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-1/api/scanandpair',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-1/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-1/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-1/'
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/api/notification',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/api/scanandpair',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-2/'
    }))

    //emdk-x 2.3
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/api/notification',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/api/scanandpair',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-3/'
    }))

    //emdk-x 2.4
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/simulscan',
        automenu: true,
        ascontent: true
    })) 
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/notification',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/scanandpair',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-4/'
    }))

        //emdk-x 2.5
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/',
        automenu: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/simulscan',
        automenu: true,
        ascontent: true
    })) 
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/notification',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/scanandpair',
        automenu: true,
        ascontent: true
    }))    
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/barcode',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/api/core',
        automenu: true,
        ascontent: true
    }))
    .use(foldermenu({
        folder: 'emdk-for-xamarin/2-5/'
    }))

    .use(foldermenu({
        folder: 'mx/',
        automenu: false
    }))
    .use(foldermenu({
        folder: 'simulscan/1-1/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-2/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-3/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-4/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-5/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-6/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-7/'
    }))
    .use(foldermenu({
        folder: 'stagenow/2-8/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-3/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-4/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-5/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-6/'
    }))
    .use(foldermenu({
        folder: 'ehs/2-7/'
    }))
    .use(foldermenu({
        folder: 'datawedge/5-0/'
    }))
    .use(foldermenu({
        folder: 'datawedge/6-0/'
    }))
   .use(foldermenu({
        folder: 'datawedge/6-2/'
    }))
   .use(foldermenu({
        folder: 'datawedge/6-3/'
    }))
   .use(foldermenu({
        folder: 'datawedge/6-4/'
    }))
  .use(foldermenu({
        folder: 'datawedge/6-5/'
    }))
    .use(foldermenu({
        folder: 'enterprise-browser/1-4/'
    }))
        .use(foldermenu({
        folder: 'enterprise-browser/1-5/'
    }))
    .use(foldermenu({
        folder: 'enterprise-browser/1-6/'
    }))
    .use(foldermenu({
        folder: 'enterprise-browser/1-7/'
    }))
        .use(foldermenu({
        folder: 'enterprise-keyboard/1-0/'
    }))
       .use(foldermenu({
        folder: 'enterprise-keyboard/1-1/'
    }))
       .use(foldermenu({
        folder: 'enterprise-keyboard/1-2/'
    }))
       .use(foldermenu({
        folder: 'enterprise-keyboard/1-3/'
    }))
       .use(foldermenu({
        folder: 'enterprise-keyboard/1-4/'
    }))
       .use(foldermenu({
        folder: 'enterprise-keyboard/1-5/'
    }))
       .use(foldermenu({
        folder: 'rxlogger/5-4/'
    }))

        .use(foldermenu({
        folder: 'ddt/1-1/'
    }))
        
        .use(foldermenu({
        folder: 'dex-scanpair/1-8/'
    }))
    
    .use(showdown({literalMidWordUnderscores:true,ghCodeBlocks:false,smartIndentationFix:true}))
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
    .use(serve({
        cache: 0
    }))
    .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
      console.log('\u0007');//System bell to alert when build is complete
    }
  });
