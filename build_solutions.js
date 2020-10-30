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

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
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
	    }


	}))




    .use(foldermenu({
        folder: 'activeedge/2-5/'
    }))
    .use(foldermenu({
        folder: 'cartscan/2-1/'
    }))
    .use(foldermenu({
        folder: 'emmtk/2-0/'
    }))
    .use(foldermenu({
        folder: 'devicecentral/2-0/'
    }))
    .use(foldermenu({
        folder: 'devicecentral/2-1/'
    }))
    .use(foldermenu({
        folder: 'devicecentral/3-0/'
    }))
    .use(foldermenu({
        folder: 'devicecentral/3-1/'
    }))
    .use(foldermenu({
        folder: 'devicetracker-onprem/1-0/'
    }))
    .use(foldermenu({
        folder: 'devicetracker-onprem/2-1/'
    }))
    .use(foldermenu({
        folder: 'devicetracker-onprem/2-2/'
    }))
    .use(foldermenu({
        folder: 'devicetracker-onprem/2-3/'
    }))
    .use(foldermenu({
        folder: 'devicetracker/4-0/'
    }))
    .use(foldermenu({
        folder: 'ppc/1-0/'
    }))
    .use(foldermenu({
        folder: 'ppc/2-0/'
    }))
    .use(foldermenu({
        folder: 'ppc/2-2/'
    }))
    .use(foldermenu({
        folder: 'ppc/2-3/'
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
        folder: 'ehs/2-8/'
    }))
    .use(foldermenu({
        folder: 'ehs/3-0/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-8/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-7/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-6/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-5/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-4/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-3/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-2/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-1/'
    }))
    .use(foldermenu({
        folder: 'enterprise-keyboard/1-0/'
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
