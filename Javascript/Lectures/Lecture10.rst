const obj ={
name:'Rohit',
age:24,
account_balance:190,
}

keys are strings that are debugged as string , whether you use string or not

Common methods on objects - 
Object.keys(obj) returns [name, age, account_balance]
Object.keys(obj).length returns 3
Object.assign(obj) combines 2 objects and has the unique properties only and updates the property value with the last objects value if the key is present in both objects
Provide source as {}, so that the other objects must not modify on changes applied 

obj1.occupation = 'police';
const obj2 = Object.assign({}, obj1, obj);
                         //target multiple sources
Creates a deep copy if the obejct is not nested , but if the object is nested it will create a shallow copy for nested object and same for the spread operator as well
Best practice is to use the structured clone , as it creates the exact deep copy 

Shallow copy vs deep copy ? 
Shallow copy copies the reference of the object and if any of changes made in shallow copy , it also affects the original object as well
Deep copy on other side, creates a fully independent object.

Where do we get the functions like push, pop, unshift etc in array as it is object, even we do not specify , From where there are coming from ???
obj.__proto__
(inherited from the prototype of the object)