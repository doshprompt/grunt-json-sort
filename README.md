# grunt-json-sort

> A grunt task for alphabetizing JSON files, irrespective of their type(s).

## Community

If you have any problems setting up or using `grunt-json-sort`, open an issue. I would be happy to help.

**This is an active repository** that takes user suggestions, feedback and pull requests seriously. Happy grunting!

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

	npm install grunt-json-sort --save-dev

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

	grunt.loadNpmTasks('grunt-json-sort');

## The "sortJSON" task

### Overview
In your project's Gruntfile, add a section named `sortJSON` to the data object passed into `grunt.initConfig()`.

	grunt.initConfig({
		sortJSON: {
			src: [
				'translations/english.json',
				'translations/french.json'
			]
		}
	});
	
### Options

#### options.spacing
Type: `Number`
Default value: `4`

Number of spaces to indent JSON after sorting. Note there is a hard limit of `10` spaces.
See MDN's definition of [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Parameters) for more details.

#### options.jshintrc

Type: `String`
Default value: `undefined`

Relative path to your project's jshintrc file.
If it exists then grunt-json-sort will use the rules defined by jshint
	
### Usage Examples

#### Default Options

All you need to do is specify the files to alphabetize as the source files. Here, we opt to use the rules defined by our ``.jshintrc`` file.

```js
	grunt.initConfig({
		sortJSON: {
			src: [
				'translations/english.json',
				'translations/french.json'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});
```

**or**

```js
	grunt.initConfig({
		sortJSON: {
			task: {
				src: [
					'translations/english.json',
					'translations/french.json'
				],
				options: {
					spacing: 6
				}
			}
		}
	});
```

### Before Sorting 

	{
			"two": "2",
			"one": "1",
			"3": "three",
			"4": {
					"b": "b",
					"a": "a"
			}
	}

### After Sorting

	{
			"3": "three",
			"4": {
					"a": "a",
					"b": "b"
			},
			"one": "1",
			"two": "2"
	}

## Run Tests

		> npm install
		> npm test

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
Please refer to this [document][commit-message-format] for a detailed explanation of git commit guidelines - source: [AngularJS](https://angualrjs.org)
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#

## Release History

 * 2014-04-29   v1.0.0   First version!

---

Task submitted by Rahul Doshi.
Forked from [grunt-sort-json](https://www.npmjs.org/package/grunt-sort-json) by [Andrew Mead](http://www.andrewjmead.com)