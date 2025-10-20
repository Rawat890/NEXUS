GitHub is a proprietary developer platform that allows developers to create, store, manage, and share their code. It uses Git to provide distributed version control and GitHub itself provides access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Wikipedia
Founders: Chris Wanstrath, Scott Chacon, Tom Preston-Werner, P. J. Hyett
Git is a version control system that allows us to track our code changes and revert back to specific point according to need.

1. Code update kiya, website crashed then we have to revert back
2. Ownership of code

git config --global user.name 'Rohan'
git config --global user.email 'Rohan@gmail.com'
git config --list 
git config --global --unset-all user.email


git add . - all file for tracking
git diff - to show changes
git status

git log
git log --oneline (q to quit)
git show "id"

  Master
  Branch
     O->O->O->O->O->O->O->O->O
                             HEAD (latest commit)

To move to previous commit - 
git reset --hard HEAD~1 
git reset --hard <hashcode> -->HEAD moved to the hashcode

If you want to remove changes of 3rd last commit - 
  Master
  Branch
     O->O->O->O->O->O->O->O->O
                             HEAD (latest commit)

{Used to undo changes but history will be there}
git revert <hashcode>
git add 'file'
git commit 