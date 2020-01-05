export function flatten(arr) {
  let flatArray = [];

  arr.forEach(element => {
    if (Array.isArray(element)) {
      flatArray = flatArray.concat(flatten(element));
      console.log(flatArray + "test");
    } else {
      if (element != null && element != undefined)
        flatArray.push(element);
      console.log(flatArray + "testing");
    }
  });
  console.log(flatArray);
  return flatArray;
}
