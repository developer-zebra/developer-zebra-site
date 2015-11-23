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
	Swag = require('swag');


Swag.registerHelpers(Handlebars);

var defaultPublish = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file) && files[file].path.ext == '.md') {
                var _f = files[file];
                if (!_f.publish) {
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
    .use(findProduct({
        pattern: 'emdk-for-android',
        productName: 'EMDK For Android'
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
        folder: 'emdk-for-android/4-0/'
    }))
    .use(foldermenu({
        folder: 'mx/4-4/',
        automenu: true
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
    .use(
        watch({
          paths: {
            "${source}/**/*": true,
            "layouts/**/*": "**/*",
            "partials/**/*": "**/*",
          },
          livereload: true,
    }))
    .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });

