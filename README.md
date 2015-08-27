# Angular-Testing

##Folder Structure

Create a folder for the project

create two folders for source and test (src and test)

create a another folder for development code in source folder (dev)




##Dependency managers

<b>npm init</b>
to create a package.json file

<b>bower init</b>	
to create a bower.json file



##Build scripts

<b>npm install grunt --save-dev</b>		
to install local grunt

create <b>gruntfile.js</b> file and add the following content

```javascript
	module.exports = function (grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json')
		});
  };
```

<b>npm install grunt-angular-builder --save-dev</b>
to install angular-builder to grunt

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
