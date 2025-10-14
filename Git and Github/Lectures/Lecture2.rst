git checkout -b 'branch_name' --> creates new branch and switches to it

HEAD always point to the branch in which you are working

git checkout main 

Merge conflict -->
Main's code ----> feature additonal code (commited)
added some code 
in Main's code and commits

When try to merge main with feature conflict arises

Main code ->
let a =90;
console.log('This is a value - ', a);
console.log('There is no value');

feature code ->
let a =90;
console.log('This is the value we got - ', a);
console.log('Hi');
