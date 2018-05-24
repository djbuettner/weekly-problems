## Setting Up the Weekly Problems Repository

To complete the Weekly Problems, you will fork, clone, and commit and push changes to a remote
GitHub repository. Follow the steps below exactly to set up your Weekly Problems repository
correctly.

1. While logged into your GitHub account in your web browser, point your browser to
   https://github.com/2018-summer-apis/weekly-problems and click the Fork button. You will then see
   that you have forked the Weekly Problems repository from `2018-summer-apis/weekly-problems` into
   your own GitHub account.

2. Once you have forked your own copy of the repository, go to your command line and change to
   whichever directory that you’ve decided you will keep all of your different Git repositories for
   this class. Clone your copy of the repo to your computer by clicking the Clone or download button
   on GitHub, and copying either the SSH or HTTPS clone address for easy pasting to your command
   line.

   If you choose SSH (preferable), you must have set up your private/public key pair with GitHub.
   Documentation for doing that is here:
   https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/

   You’ll then be able to clone this way, using your actual GitHub username where this example says
   USERNAME:

    $ git clone git@github.com:USERNAME/weekly-problems.git

  If you choose HTTPS, you’ll be able to clone this way, using your actual GitHub username where
  this example says USERNAME:

    $ git clone https://github.com/USERNAME/weekly-problems.git

3. You can now change directories into `weekly-problems` and then the `setup` directory, where you
   should now have this file, `readme.md`, on your local computer. Open the file in your editor,
   and write below the URL to your fork of the GitHub repository, and the add and commit:

   My Weekly Problems repository URL: https://github.com/djbuettner/weekly-problems

4. Next, push your commit to GitHub. Run `git push origin master` from your command line.

5. Next, and most crucially, you need to add the instructor’s repository as a second remote.
   From your command line and within the `weekly-problems` directory, run the command:

    $ git remote add instructor https://github.com/2018-summer-apis/weekly-problems

   Once you have done that, you can run the command `git remote -v` and it should list two remotes,
   one called `origin` and one called `instructor`.

   **To access future Weekly Problems, you will change into your `weekly-problems` directory and
   run:**

    $ git pull instructor master

6. Finally, verify that the instructor can see your fork of the repository by going to
   https://github.com/2018-summer-apis/weekly-problems/network/members and checking to see that your
   GitHub username is listed there.
