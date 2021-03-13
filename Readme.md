#Front-End Web UI Frameworks and Tools: Bootstrap 4
por Universidad Científica y Tecnológica de Hong Kong

##Setting up Git
Check to make sure that Git is installed and available on the command line, by typing the following at the command prompt:
`git --version`

To configure your user name to be used by Git, type the following at the prompt:
`git config --global user.name "Your Name"`

To configure your email to be used by Git, type the following at the prompt:
`git config --global user.email <your email address>`

You can check your default Git global configuration, you can type the following at the prompt:
`git config --list`

##Basic Git Commands

	Go to the git-test folder in your cmd window/terminal and type the following at the prompt to initialize the folder as a Git repository: `git init`

	To add files to the staging area of your Git repository, type: `git add .`

	To commit the current staging area to your Git repository, type: `git commit -m "first commit"`

	To check the log of the commits to your Git repository, type `git log --oneline`

	-Add a sub-folder named templates to your git-test folder, and then add a file named test.html to the templates folder. Then set the contents of this file to be the same as the index.html file above.
	-Then check the status and add all the files to the staging area.
	-Then do the second commit to your repository
	-Now, modify the index.html file

	To check out the index.html from the second commit, find the number of the second commit using the git log, and then type the following at the prompt: `git checkout <second commit's number> index.html`

###Resetting the Git repository

	To discard the effect of the previous operation and restore index.html to its state at the end of the third commit, type: `git reset HEAD index.html`

	Then type the following at the prompt: `git checkout -- index.html`

	You can also use git reset to reset the staging area to the last commit without disturbing the working directory.

