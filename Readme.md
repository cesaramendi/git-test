# Front-End Web UI Frameworks and Tools: Bootstrap 4
por Universidad Científica y Tecnológica de Hong Kong

## Setting up Git
Check to make sure that Git is installed and available on the command line, by typing the following at the command prompt:
`git --version`

To configure your user name to be used by Git, type the following at the prompt:
`git config --global user.name "Your Name"`

To configure your email to be used by Git, type the following at the prompt:
`git config --global user.email <your email address>`

You can check your default Git global configuration, you can type the following at the prompt:
`git config --list`

## Basic Git Commands

Go to the git-test folder in your cmd window/terminal and type the following at the prompt to initialize the folder as a Git repository: `git init`

To add files to the staging area of your Git repository, type: `git add .`

To commit the current staging area to your Git repository, type: `git commit -m "first commit"`

To check the log of the commits to your Git repository, type `git log --oneline`

-Add a sub-folder named templates to your git-test folder, and then add a file named test.html to the templates folder. Then set the contents of this file to be the same as the index.html file above.
-Then check the status and add all the files to the staging area.
-Then do the second commit to your repository
-Now, modify the index.html file

To check out the index.html from the second commit, find the number of the second commit using the git log, and then type the following at the prompt: `git checkout <second commit's number> index.html`

### Resetting the Git repository

To discard the effect of the previous operation and restore index.html to its state at the end of the third commit, type: `git reset HEAD index.html`

Then type the following at the prompt: `git checkout -- index.html`

You can also use git reset to reset the staging area to the last commit without disturbing the working directory.

## Online Git Repositories
In this exercise you have learnt to set up an online Git repository, synchronize your local repository with the remote repository, and clone an online repository.

type the following to set up your local repository to link to your online Git repository: `git remote add origin <repository URL>`

type the following to push the commits to the online repository: `git push -u origin master`

To clone an online repository to your computer, type the following at the prompt: `git clone <repository URL>`

## Setting up Node.js and NPM

To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded.
As an example, on a Mac, you will see the following web page. Click on the Download button. Follow along the instructions to install Node on your machine. (Note: Now Node gives you the option of installing a mature and dependable LTS version and a more newer stable version. You should to install the LTS version. I will use this version in the course.)

Type `npm -v`

## Basics of Node.js and NPM

In this exercise you learnt to set up package.json, install a npm package and start a development server.

Initializing package.json `npm init`

Installing an NPM Module `npm install lite-server --save-dev`. lite-server, that allows you to run a Node.js based development web server and serve up your project files.

Next, open package.json in your editor and modify it as shown below. Note the addition of two lines, line 7 and line 9.

	{
	  "name": "git-test",
	  "version": "1.0.0",
	  "description": "This is the Git and Node basic learning project",
	  "main": "index.html",
	  "scripts": {
	    "start": "npm run lite",
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "lite": "lite-server"
	  },
	  "repository": {
	    "type": "git",
	    "url": "git+https://jogesh_k_muppala@bitbucket.org/jogesh_k_muppala/git-test.git"
	  },
	  "author": "",
	  "license": "ISC",
	  "homepage": "https://bitbucket.org/jogesh_k_muppala/git-test#readme",
	  "devDependencies": {
	    "lite-server": "^2.2.2"
	  }
	}

Next, start the development server by typing the following at the prompt: `npm start`

Next, create a file in your project directory named .gitignore (Note: the name starts with a period)Then, add the following to the ".gitignore" file `node_modules`

### Getting Started with Bootstrap

Downloading Bootstrap

You will use npm to fetch the Bootstrap files for use within your project. Thereafter you need to install JQuery and Popper.js as shown below since Bootstrap 4 depends on these two. At the prompt, type the following to fetch Bootstrap files to your project folder:

	npm install bootstrap@4.0.0 --save
	npm install jquery@3.3.1 popper.js@1.12.9 --save

### Getting your Web page Bootstrap ready

Insert the following code in the <head> of index.html file before the title.

    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">

Bootstrap by default uses the JQuery Javascript library for its Javascript plugins. Hence the need to include JQuery library in the web page.

    <!-- jQuery first, then Popper.js, then Bootstrap JS. -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

## Icon Fonts

Using Icon Fonts and Other CSS classes

One of the most popular icon font toolkit is Font Awesome. Go to its website http://fontawesome.io/ to check out more details about this icon font. 

You can get Font Awesome using npm by typing the following at the prompt: `npm install font-awesome@4.7.0 --save`

Another module that we install is Bootstrap Social that enables the addition of Social buttons to our site. You can find more information about it at https://lipis.github.io/bootstrap-social/. 

To install it using npm, type the following at the prompt: `npm install bootstrap-social@5.1.1 --save`

We now need to include the CSS files for font awesome and bootstrap-social in the index.html file. Add the following code to the head of the file after the links for importing Bootstrap CSS classes. Do the same change to aboutus.html file:

	 <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">

Next, in both index.html and aboutus.html, go down to the address in the footer of the page and replace the "Tel.", "Fax" and "Email" with the corresponding font awesome based icons as follows:

	<i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br>
	<i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br>
	<i class="fa fa-envelope fa-lg"></i>: 
	<a href="mailto:confusion@food.net">confusion@food.net</a>

## Bootstrap and JQuery

Use Bootstrap's JS component methods together with JQuery and Javascript
Use JS code to control the Bootstrap JS component

Adding the Carousel Control Buttons

	 <div class="btn-group" id="carouselButton">
        <button class="btn btn-danger btn-sm" id="carousel-pause">
    	    <span class="fa fa-pause"></span>
        </button>
        <button class="btn btn-danger btn-sm" id="carousel-play">
    	    <span class="fa fa-play"></span>
        </button>
    </div>

Adding CSS Class for the Buttons

Next, We add the following CSS class to styles.css file to position the buttons at the bottom-right corner of the carousel:

	#carouselButton {
	    right:0px;
	    position: absolute;
	    bottom: 0px;
	    z-index: 1;
	}

Adding JavaScript Code

Finally we add the following JavaScript code to activate the buttons:

    <script>
        $(document).ready(function(){
            $("#mycarousel").carousel( { interval: 2000 } );
            $("#carousel-pause").click(function(){
                $("#mycarousel").carousel('pause');
            });
            $("#carousel-play").click(function(){
                $("#mycarousel").carousel('cycle');
            });
        });
    </script>

## Less

Installing and using the lessc Compiler

	npm install -g less@2.7.2

Next, go to the CSS folder on your machine and rename the styles.css file that you have there as styles-old.css. This is to save the CSS file that we have been using so far. We will be creating a new styles.css file by compiling the Less file.
Next type the following at the command prompt to compile the Less file into a CSS file:

	lessc styles.less styles.css


Adding Less Variables

Open the conFusion project in a text editor of your choice. In the css folder, create a file named styles.less. We will add the Less code into this file.
Add the following Less variables into the file:

	@lt-gray: #ddd;
	@background-dark: #512DA8;
	@background-light: #9575CD;
	@background-pale: #D1C4E9;
	// Height variables
	@carousel-item-height: 300px;

Less Mixins

	.zero-margin (@pad-up-dn: 0px, @pad-left-right: 0px) {
		margin:0px auto;
		padding: @pad-up-dn @pad-left-right;
	}

Using the variables and Mixin class

	.row-header{
	    .zero-margin();
	}
	.row-content {
	    .zero-margin(50px,0px);
	    border-bottom: 1px ridge;
	    min-height:400px;
	}
	.footer{
	    background-color: @background-pale;
	    .zero-margin(20px, 0px);
	}

Nesting Selectors

	.carousel {
	    background:@background-dark;
	    .carousel-item {
	        height: @carousel-item-height;
	        img {
	            position: absolute;
	            top: 0;
	            left: 0;
	            min-height: 300px;
	        }
	    }
	}

## SCSS

Installing and using the node-sass module

    npm install --save-dev node-sass@4.7.2

Next open your package.json file and add the following line into the scripts object there.  This adds a script to enable the compilation of the Scss file into a CSS file:

    "scss": "node-sass -o css/ css/"

In order to transform the Scss file to a CSS file, type the following at the prompt:

    npm run scss


Adding Scss Variables

	$lt-gray: #ddd;
	$background-dark: #512DA8;
	$background-light: #9575CD;
	$background-pale: #D1C4E9;
	// Height variables
	$carousel-item-height: 300px;

Scss Mixins

	@mixin zero-margin($pad-up-dn, $pad-left-right) {
		margin:0px auto;
		padding: $pad-up-dn $pad-left-right;
	}

Using the variables and Mixin class

	.row-header{
	    @include zero-margin(0px,0px);
	}
	.row-content {
	    @include zero-margin(50px,0px);
	    border-bottom: 1px ridge;
	    min-height:400px;
	}
	.footer{
	    background-color: $background-pale;
	    @include zero-margin(20px, 0px);
	}

Nesting Selectors

	.carousel {
	    background:$background-dark;
	    .carousel-item {
	        height: $carousel-item-height;
	        img {
	            position: absolute;
	            top: 0;
	            left: 0;
	            min-height: 300px;
	        }
	    }
	}

## NPM Scripts Part 1

Watch for changes to the styles.scss file and automatically compile it to the css file.
Run multiple NPM scripts in parallel using parallelshell NPM module.

Watching for Changes and Parallelshell

First, we install two NPM packages onchange and parallelshell as follows: 

	npm install --save-dev onchange@3.3.0 parallelshell@3.0.1

Then, add the following two script items to package.json if you are doing the exercise on a MacOS computer or a Linux computer:

    "watch:scss": "onchange 'css/*.scss' -- npm run scss",
    "watch:all": "parallelshell 'npm run watch:scss' 'npm run lite'"

NOTE: If you are doing the exercise on a Windows computer, please use the following two script items instead of the above:

    "watch:scss": "onchange \"css/*.scss\" -- npm run scss",
    "watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""

You will also update the start script as follows:

    "start": "npm run watch:all",

script items to *package.json* on a Windows computer:

	"scripts": {
		"start": "npm run watch:all",
		"test": "echo \"Error: no test specified\" && exit 1",
		"lite": "lite-server",
		"scss": "node-sass -o css/ css/",
		"watch:scss": "onchange \"css/*.scss\" -- npm run scss",
		"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\""
	},

Then, type the following at the prompt to start watching for changes to the SCSS file, compile it to CSS, and run the server:

	npm start

Now, whenever you make any changes to styles.scss file, it will automatically be compiled to the corresponding css file.

## NPM Scripts Part 2

Clean out a folder using the clean NPM module.
Copy files from one folder to another
Prepare a minified and concatenated css file from all the css files used in your project
Prepare an uglified and concatenated JS file containing all the JS code used in your project

Cleaning up a Distribution Folder

Install the rimraf npm module by typing the following at the prompt: `npm install --save-dev rimraf@2.6.2`

Then, set up the following script: `"clean": "rimraf dist",`

Copying Fonts

Your project uses font-awesome fonts. These need to be copied to the distribution folder. To help us do this, install the copyfiles NPM module globally as follows: `npm -g install copyfiles@2.0.0`

Then set up the following script: `"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",`

Compressing and Minifying Images

We use the imagemin-cli NPM module to help us to compress our images to reduce the size of the images being used in our project. Install the imagemin-cli module as follows: `npm -g install imagemin-cli@3.0.0`

Remember to use sudo on mac and Linux. NOTE: Some students have encountered issues with imagemin-cli not installing its plugins due to issues with global permissions on Mac. In that case try `sudo npm install -g imagemin-cli@3.0.0 --unsafe-perm=true --allow-root`

Then set up the following script: `"imagemin": "imagemin img/* --out-dir='dist/img'",`

Preparing the Distribution Folder

Open .gitignore and update it as follows. We do not want the dist folder to be checked into the git repository.

	node_modules
	dist

Then, install the usemin-cli, cssmin, uglifyjs and htmlmin NPM packages as follows:

	npm install --save-dev usemin-cli@0.5.1 cssmin@0.4.3 uglifyjs@2.4.11 htmlmin@0.0.7

Add the following two scripts to the package.json file:

    "usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
    "build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"

script items to *package.json* on a Windows computer:

	"scripts": {
		"start": "npm run watch:all",
		"test": "echo \"Error: no test specified\" && exit 1",
		"lite": "lite-server",
		"scss": "node-sass -o css/ css/",
		"watch:scss": "onchange \"css/*.scss\" -- npm run scss",
		"watch:all": "parallelshell \"npm run watch:scss\" \"npm run lite\"",
		"clean": "rimraf dist",
		"copyfonts": "copyfiles -f node_modules/font-awesome/fonts/* dist/fonts",
		"imagemin": "imagemin img/* --out-dir=\"dist/img\"",
		"usemin": "usemin contactus.html -d dist --htmlmin -o dist/contactus.html && usemin aboutus.html -d dist --htmlmin -o dist/aboutus.html && usemin index.html -d dist --htmlmin -o dist/index.html",
		"build": "npm run clean && npm run imagemin && npm run copyfonts && npm run usemin"
	},

Open *.html* and surround the css links inclusion code as follows:

    <!-- build:css css/main.css -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="node_modules/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/bootstrap-social/bootstrap-social.css">
    <link href="css/styles.css" rel="stylesheet">
    <!-- endbuild -->

Similarly, open *.html* and surround the js script inclusion code as follows:

    <!-- build:js js/main.js -->
    <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scripts.js"></script>
    <!-- endbuild -->

To build the distribution folder, you can type the following at the prompt:

	npm run build

To view type `http://localhost:3000/dist/index.html`

## Grunt Part 1

-Install Grunt CLI and Grunt packages in your project.
-Configure a Grunt file with a set of tasks to build a web project from a source, and serve the built project using a server.

Installing Grunt

	npm install -g grunt-cli@1.2.0

Next install Grunt to use within your project. To do this, go to the folder and type the following at the prompt:

	npm install grunt@1.0.2 --save-dev

### Creating a Grunt File

Next you need to create a Grunt file containing the configuration for all the tasks to be run when you use Grunt. To do this, create a file named Gruntfile.js in the conFusion folder.
Next, add the following code to Gruntfile.js to set up the file to configure Grunt tasks:

	'use strict';
	module.exports = function (grunt) {
	  // Define the configuration for all the tasks
	  grunt.initConfig({
	  });
	};


### Compiling SCSS to CSS

	npm install grunt-sass@2.1.0 --save-dev
	npm install time-grunt@1.4.0 --save-dev
	npm install jit-grunt@0.10.0 --save-dev

configure the SASS task in the Gruntfile as follows, by including the code inside the function in Gruntfile.js:

	'use strict';
	module.exports = function (grunt) {
	    // Time how long tasks take. Can help when optimizing build times
	    require('time-grunt')(grunt);
	    // Automatically load required Grunt tasks
	    require('jit-grunt')(grunt);
	    // Define the configuration for all the tasks
	    grunt.initConfig({
	        sass: {
	            dist: {
	                files: {
	                    'css/styles.css': 'css/styles.scss'
	                }
	            }
	        }
	    });
	    grunt.registerTask('css', ['sass']);
	};

Now you can run the grunt SASS task by typing the following at the prompt:

	grunt css

### Watch and Serve Tasks

	npm install grunt-contrib-watch@1.0.0 --save-dev
	npm install grunt-browser-sync@2.2.0 --save-dev

After this, we will configure the browser-sync and watch tasks by adding the following code to the Grunt file:


	,
	        watch: {
	            files: 'css/*.scss',
	            tasks: ['sass']
	        },
	        browserSync: {
	            dev: {
	                bsFiles: {
	                    src : [
	                        'css/*.css',
	                        '*.html',
	                        'js/*.js'
	                    ]
	                },
	                options: {
	                    watchTask: true,
	                    server: {
	                        baseDir: "./"
	                    }
	                }
	            }
	        }

Then add the following task to the Grunt file:

    grunt.registerTask('default', ['browserSync', 'watch']);

Now if you type the following at the command prompt, it will start the server, and open the web page in your default browser. It will also keep a watch on the files in the css folder, and if you update any of them, it will compile the scss file into css file and load the updated page into the browser (livereload)

	grunt

## Grunt Part 2

Configure a Grunt file with a set of tasks to build your web project from a source.

### Copying the Files and Cleaning Up the Dist Folder

	npm install grunt-contrib-copy@1.0.0 --save-dev
	npm install grunt-contrib-clean@1.1.0 --save-dev

### Compressing and Minifying Images

	npm install grunt-contrib-imagemin@2.0.1 --save-dev

### Preparing the Distribution Folder and Files

	 npm install grunt-contrib-concat@1.0.1 --save-dev
	 npm install grunt-contrib-cssmin@2.2.1 --save-dev
	 npm install grunt-contrib-htmlmin@2.4.0 --save-dev
	 npm install grunt-contrib-uglify@3.3.0 --save-dev
	 npm install grunt-filerev@2.3.1 --save-dev
	 npm install grunt-usemin@3.1.1 --save-dev

Next, update the *Grunt.js*:

	'use strict';
	module.exports = function (grunt) {
	    // Time how long tasks take. Can help when optimizing build times
	    require('time-grunt')(grunt);
	    // Automatically load required Grunt tasks
	    require('jit-grunt')(grunt, {
		  useminPrepare: 'grunt-usemin'
		});
	    // Define the configuration for all the tasks
	    grunt.initConfig({
	    	//configure the SASS task in the Gruntfile as follows
	        sass: {
	            dist: {
	                files: {
	                    'css/styles.css': 'css/styles.scss'
	                }
	            }
	        },
	        //configure the browser-sync and watch tasks by adding the following
	        watch: {
	            files: 'css/*.scss',
	            tasks: ['sass']
	        },
	        browserSync: {
	            dev: {
	                bsFiles: {
	                    src : [
	                        'css/*.css',
	                        '*.html',
	                        'js/*.js'
	                    ]
	                },
	                options: {
	                    watchTask: true,
	                    server: {
	                        baseDir: "./"
	                    }
	                }
	            }
	        },
	        copy: {
	            html: {
	                files: [
	                {
	                    //for html
	                    expand: true,
	                    dot: true,
	                    cwd: './',
	                    src: ['*.html'],
	                    dest: 'dist'
	                }]                
	            },
	            fonts: {
	                files: [
	                {
	                    //for font-awesome
	                    expand: true,
	                    dot: true,
	                    cwd: 'node_modules/font-awesome',
	                    src: ['fonts/*.*'],
	                    dest: 'dist'
	                }]
	            }
	        },
	        clean: {
	            build: {
	                src: [ 'dist/']
	            }
	        },
	        imagemin: {
	            dynamic: {
	                files: [{
	                    expand: true,                  // Enable dynamic expansion
	                    cwd: './',                   // Src matches are relative to this path
	                    src: ['img/*.{png,jpg,gif}'],   // Actual patterns to match
	                    dest: 'dist/'                  // Destination path prefix
	                }]
	            }
	        },
	        useminPrepare: {
	            foo: {
	                dest: 'dist',
	                src: ['index.html']
	            },
	            options: {
	                flow: {
	                    steps: {
	                        css: ['cssmin'],
	                        js:['uglify']
	                    },
	                    post: {
	                        css: [{
	                            name: 'cssmin',
	                            createConfig: function (context, block) {
	                            var generated = context.options.generated;
	                                generated.options = {
	                                    keepSpecialComments: 0, rebase: false
	                                };
	                            }       
	                        }]
	                    }
	                }
	            }
	        },
	        // Concat
	        concat: {
	            options: {
	                separator: ';'
	            }, 
	            // dist configuration is provided by useminPrepare
	            dist: {}
	        },
	        // Uglify
	        uglify: {
	            // dist configuration is provided by useminPrepare
	            dist: {}
	        },
	        cssmin: {
	            dist: {}
	        },
	        // Filerev
	        filerev: {
	            options: {
	                encoding: 'utf8',
	                algorithm: 'md5',
	                length: 20
	            }, 
	            release: {
	            // filerev:release hashes(md5) all assets (images, js and css )
	            // in dist directory
	                files: [{
	                    src: [
	                        'dist/js/*.js',
	                        'dist/css/*.css',
	                    ]
	                }]
	            }
	        },
	        // Usemin
	        // Replaces all assets with their revved version in html and css files.
	        // options.assetDirs contains the directories for finding the assets
	        // according to their relative paths
	        usemin: {
	            html: ['dist/contactus.html','dist/aboutus.html','dist/index.html'],
	            options: {
	                assetsDirs: ['dist', 'dist/css','dist/js']
	            }
	        },
	        htmlmin: {                                         // Task
	            dist: {                                        // Target
	                options: {                                 // Target options
	                    collapseWhitespace: true
	                },
	                files: {                                   // Dictionary of files
	                    'dist/index.html': 'dist/index.html',  // 'destination': 'source'
	                    'dist/contactus.html': 'dist/contactus.html',
	                    'dist/aboutus.html': 'dist/aboutus.html',
	                }
	            }
	        }
	    });
	    grunt.registerTask('css', ['sass']);
	    grunt.registerTask('default', ['browserSync', 'watch']);
	    grunt.registerTask('build', [
			'clean',
			'copy',
			'imagemin',
			'useminPrepare',
			'concat',
			'cssmin',
			'uglify',
			'filerev',
			'usemin',
			'htmlmin'
	    ]);
	};

Now if you run Grunt, it will create a dist folder with the files structured correctly to be distributed to a server to host your website. To do this, type the following at the prompt:

	grunt build