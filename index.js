var Metalsmith = require('metalsmith'),
    branch = require('metalsmith-branch'),
  	markdown   = require('metalsmith-markdown'),
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
	Swag = require('swag');

Swag.registerHelpers(Handlebars);

var findLayout = function(config) {
    var pattern = new RegExp(config.pattern);

    return function(files, metalsmith, done) {
        for (var file in files) {
            if (pattern.test(file)) {
                var _f = files[file];
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
            if (pattern.test(file)) {
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
            console.log(file);
            if (pattern.test(file)) {
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
        		console.log(filepath);
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
	.use(metaUrl({
		pattern: '*.md'
	}))
	.use(inplace({
	  engine: 'handlebars',
	  partials: 'partials',
	  pattern: '**/*.md'
	}))	
	.use(collections({
	    samples: {
	        pattern: 'samples/**/*.md',
	        sortBy: 'date',
	        reverse: true
	    }

	}))
    .use(findLayout({
        pattern: 'samples',
        layoutName: 'sample.html'
    }))
    .use(findProduct({
        pattern: 'samples/emdk-for-android',
        productName: 'EMDK For Android'
    }))
    .use(findProductVersion({
        pattern: 'samples/emdk-for-android/4-0',
        productVersionName: '4.0'
    }))
    .use(findProductVersion({
        pattern: 'samples/emdk-for-android/3-1',
        productVersionName: '3.1'
    }))
    .use(findProduct({
        pattern: 'samples/emdk-for-xamarin',
        productName: 'EMDK For Xamarin'
    }))
    .use(findProductVersion({
        pattern: 'samples/emdk-for-xamarin/1-0',
        productVersionName: '1.0'
    }))
    .use(markdown({
	  smartypants: true,
	  gfm: true,
	  tables: true
	}))
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
    .destination('./build')
    .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('Site build complete!');
    }
  });