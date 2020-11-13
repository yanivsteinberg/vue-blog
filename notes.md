Destructuring

``` JS
const arr = [1, 2, 3, 4, 5];
const [firstElement, ,thirdElement, ...rest] = arr;
(firstElement === 1);
(thirdElement === 3);
(rest === [4, 5]);

const obj = {
  id: 'SomeId',
  name: 'SomeName',
  lastName: 'SomeLastName',
  children: [
    {
      id: 'ChildId',
      name: 'ChildName'
    },
    {
      id: 'AnotherChild',
      name: 'AnotherChildName',
    },
  ],
};
const { id, children, ...rest } = obj;
(id === obj.id);
(children === obj.children);
(rest === { name: 'SomeName', lastName: 'SomeLastName' });

// Rename obj field
const { id: objId } = obj;
(objId === obj.id);

// Get deeply nested
const { children: [{ id: childId }] } = obj;
childId === obj.children[0].id;

const functionTakesInObj = ({ id }) => return id;
(functionTakesInObj(obj) === obj.id);

const functionTakesInFirstElement = ([firstElement]) => return firstElement;
(functionTakesInFirstElement(arr) === arr[0])

function getObjId({ id }) {
  return id;
}
function getArrFirst([first]) {
  return first;
}


// Example
const range = [5, 10];
const [min, max] = range;
const [minAge, maxAge] = range;

// Before destructuring everything was like this
const id = obj.id;
const childId = obj.children[0].id;
const secondChildId = obj.children[1].id;
```