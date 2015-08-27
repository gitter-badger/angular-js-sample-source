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
```bash
npm install grunt-angular-builder --save-dev
```
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
