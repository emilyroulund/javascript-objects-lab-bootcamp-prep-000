var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  object 
  object[key] = value; 
  return object;
}
//returns object with original key value pairs and new value pairs (nondestructive)

function updateObjectWithKeyandValue(object, key, value) {
  newObject = Object.assign({},  object[key] = value);
  return newObject;
}
//does not modify original object, but returns a clone with new data
//FAILING 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; 
  return object;
}
//updates `object` with the given `key` and `value` (destructive) and returns the entire updated object

function deleteFromObjectByKey(object, key) {
  object; 
  var newObject = Object.assign({}, object); 
  newObject;
  delete newObject.key;
  return newObject;
}
//deletes `key` from a clone of object and returns the new object (it is non-destructive)
//FAILING

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
//modifies the original object; return object without the deleted pair 

