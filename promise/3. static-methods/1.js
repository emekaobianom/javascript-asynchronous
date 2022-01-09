/**
 * PROMISE.REJECT
 * 
 * Promise.reject(reason) helps you create a rejected promise.
 */

//CREATE A PROMISE
var promise3 = Promise.reject("Not interested");

//HANDLE IT
promise3.then(function (value) {
  console.log(
    "This will not run as it is a resolved promise. The resolved value is ",
    value
  );
});
promise3.catch(function (reason) {
  console.log("This run as it is a rejected promise. The reason is ", reason);
});
