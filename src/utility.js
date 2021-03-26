/* 
input: [{name: 'hello', gender: 'male'}, {name: 'world' , gender : 'female' }, {name: 'varenya' , gender: 'male'}]

output: {
    'male' : [{name: 'hello' }, {name: 'varenya'}]
    'female': [{name: 'world'}]
}


*/

function groupBy(listOfObjects, keyName) {
  let result = {};

  listOfObjects.forEach((obj) => {
    const currentValue = obj[keyName];
    if (result.hasOwnProperty(currentValue)) {
      result[currentValue].push(obj);
    } else {
      result[currentValue] = [obj];
    }
  });

  return result;
}

export { groupBy };
