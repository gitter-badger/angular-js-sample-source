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
