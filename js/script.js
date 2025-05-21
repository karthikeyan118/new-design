const arr = ["john", "arun", "mani"];

arr.forEach((name, index) => {
  arr[index] = name.toUpperCase();
});
console.log(arr);
