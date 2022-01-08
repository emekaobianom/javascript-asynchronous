
/**
 * PROMISE.ALL
 * 
 * We want to create Promise objects and run all of them at once with Promise.All
 */


//CREATE PROMISE FUNCTION (once called will generate a promise)
var promiseTRSANSG = (promiseThatResolvesAfterNSecondsGenerator = function ( n = 0) { //input to the promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ resolvedAfterNSeconds: n,});
    }, n * 1000);
  });
});

var promiseTRJANSG = (promiseThatRejectsAfterNSecondsGenerator = function ( n = 0) { //input to the promise
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject({rejectedAfterNSeconds: n,});
    }, n * 1000);
  });
});


/**
 * The Promise.all(iterable) method returns a single Promise that resolves 
 * when all of the promises in the iterable argument have resolved or 
 * when the iterable argument contains no promises. 
 * It rejects with the reason of the first promise that rejects.
 */

// ======================================== CASE ONE =========================================
// when all promises are resolved

console.time("Promise.All");

//CREATE PROMISES and put them in an array
var promisesArray = [];
promisesArray.push(promiseTRSANSG(1));
promisesArray.push(promiseTRSANSG(4));
promisesArray.push(promiseTRSANSG(2));

//HANDLE PROMISES --- it waits until all promises are done before working, 
// and it loops them sequentially... not on who finish first
var handleAllPromises = Promise.all(promisesArray);
handleAllPromises.then(function(values) { // LOOP
  console.timeEnd("Promise.All");
  console.log("All the promises are resolved", values);
});
handleAllPromises.catch(function(reason) {
  console.log("One of the promises failed with the following reason", reason);
});

/**
 * 1: The third promise which takes 2 seconds finishes before the second promise which takes 4 seconds. 
 *    But as you can see in the output, the order of the promises are maintained in the values.
   2: I added a console timer to find out how long Promise.All takes. 
      If the promises were executed in sequential it should have taken 1+4+2=7 seconds in total. 
      But from our timer we saw that it only takes 4 seconds. 
      This is a proof that all the promises were executed in parallel.
 */


// ======================================== CASE TWO =========================================