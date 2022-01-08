/**
 * PROMISE.RESOLVE
 */


//CREATE PROMISE
var promise4 = Promise.resolve(1);

//HANDLE PROMISE
promise4.then(function (value) {
  console.log(
    "This will run as it is a resovled promise. The resolved value is ",
    value
  );
});
promise4.catch(function (reason) {
  console.log("This will not run as it is a resolved promise", reason);
});
