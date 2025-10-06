const obj ={
name:'Rohit',
age:24,
account_balance:190,
}

keys are strings that are debugged as string , whether you use string or not

Common methods on objects - 
Object.keys(obj) returns [name, age, account_balance]
Object.keys(obj).length returns 3
Object.assign(obj) combines 2 objects and has the unique properties only 
Provide source as {}, so that the other objects must not modify on changes applied 

obj1.occupation = 'police';
const obj2 = Object.assign({}, obj1, obj);
console.log(obj2)