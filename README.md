# Angular-Testing

##Folder Structure

Create a folder for the project

create two folders for source and test (src and test)

create a another folder for development code in source folder (dev)




##Dependency managers
```bash
npm init
```
to create a package.json file
```bash
bower init
```
to create a bower.json file



##Build scripts
```bash
npm install grunt --save-dev
```
to install local grunt

create <b>gruntfile.js</b> file and add the following content

```javascript
	module.exports = function (grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json')
		});
  };
```

###Build
To build an angular JS application angular-builder can be used which is available as a grunt plugin.
[read more](https://www.npmjs.com/package/grunt-angular-builder)
<br>Installation:
```bash
npm install grunt-angular-builder --save-dev
```

Add following to the grunt config
```javascript
	'angular-builder': {
		options: {
			mainModule: 'sampleApp'
		},
		app: {
			src: 'src/dev/**/*.js',
			dest: 'src/dist/<%= pkg.name %>.min.js'
		}
	}
```
then add the following to the bottom of the gruntfile.js to load the angular-builder task
```javascript
	grunt.loadNpmTasks('grunt-angular-builder');
```



###Clean
And also to clean the build path, grunt-contrib-clean plugin can be used.
[read more](https://www.npmjs.com/package/grunt-contrib-clean)
<br>Installation:
```bash
npm install grunt-contrib-clean --save-dev
```
Add following to the grunt config
```javascript
	clean: ["src/dist"]
```
then add the following to the bottom of the gruntfile.js to load the clean task
```javascript
	grunt.loadNpmTasks('grunt-contrib-clean');
```


Now we can have our customized scripts to build the project as we need.
```javascript
	grunt.registerTask('release', ['clean', 'angular-builder']);
    	grunt.registerTask('debug', ['clean', 'angular-builder::debug']);
```

Finally our gruntfile.js will be looks like as follows.
```javascript
 module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["src/dist"],
        'angular-builder': {
            options: {
                mainModule: 'sampleApp'
            },
            app: {
                src: 'src/dev/**/*.js',
                dest: 'src/dist/<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-angular-builder');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('release', ['clean', 'angular-builder']);
    grunt.registerTask('debug', ['clean', 'angular-builder::debug']);
};
```

##Testing

###Karma
Karma is the runner used to execute unit test cases.
[read more]()
<br>Installation
```bash
npm install -g karma
npm insstall -g karma-cli
```

in order to execute test cases using karma runner, there should have a karma.config.js file having all information about the testing configurations of the project. This configuration file can be get generated using <b>karma-cli</b>.
```bash
karma init
```

Now this will run a wizard in command line to gather testing configuration. Let all other fields as default except following fields.

|Frameworks
| --------|
|mocha|


|files|
| --------|
|src/dev/**/*.js|
|test/**/*.mocha.js|
|bower_components/angular/angular.js|
|bower_components/angular-mocks/angular-mocks.js|	


|browsers|
| --------|
|Chrome	|
|PanthomJS|
			
Now this will auto generate a karma.config.js file as shown below.
```javascript
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
	  'bower_components/angular/angular.js',
	  'bower_components/angular-mocks/angular-mocks.js',
      'src/dev/**/*.js',
      'test/**/*.mocha.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
```

###Chai
Chai is the mostly used assertion library for unit testing.
[read more]()
<br>Installation
```bash
npm install karma-chai
```

And then add chai to karma.config.js as well.
```javascript
 frameworks: ['mocha', 'chai'],
```

###Running test cases
```bash
karma start
```


###Mocha Reporter
Mocha reporter can be used to get a clear mocha report of test cases as a command line output.
[read more]()
<br>Installation
```bash
npm install karma-mocha-reporter --save-dev
```
And then add chai to karma.config.js as well.
```javascript
 reporters: ['mocha'],
```

