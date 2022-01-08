/**
 * To better understand the later topics let us create a function that returns a promise,
 * which will then be resolved or rejected at random,
 * so that we can test out various scenarios
 *
 */

//GET RANDOM A NUMBER
function getRandomNumber(start = 1, end = 10) {
  //works when both start and end are >=1
  return (parseInt(Math.random() * end) % (end - start + 1)) + start;
}


//CREATE A PROMISE
var promiseTRRARNOSG =
  (
      promiseThatResolvesRandomlyAfterRandomNumnberOfSecondsGenerator = function () {

        //RETURN A PROMISE
      return new Promise(function (resolve, reject) {
        let randomNumberOfSeconds = getRandomNumber(2, 10);

        setTimeout(function () {
          let randomiseResolving = getRandomNumber(1, 10);

          if (randomiseResolving > 5) {
            resolve({
              randomNumberOfSeconds: randomNumberOfSeconds,
              randomiseResolving: randomiseResolving,
            });
          } else {
            reject({
              randomNumberOfSeconds: randomNumberOfSeconds,
              randomiseResolving: randomiseResolving,
            });
          }

        }, randomNumberOfSeconds * 1000);

      });
      
    }
    
    );


// //HANDLE THE PROMISE
// var testProimse = promiseTRRARNOSG();
// testProimse.then(function (value) {
//   console.log("Value when promise is resolved : ", value);
// });
// testProimse.catch(function (reason) {
//   console.log("Reason when promise is rejected : ", reason);
// });



// to try the below comment the HANDLE THE PROMISE above and uncomment below



//----------------------- Let try something new -----------------------------------------------

//CREATE MANY PROMISES FROM ABOVE and HANDLE EACH ONE
// Let us loop through and create ten different promises using the function to see some variation. 
// Some will be resolved and some will be rejected.
for (i = 1; i <= 10; i++) {
  let promise = promiseTRRARNOSG();
  promise.then(function (value) {
    console.log("Value when promise is resolved : ", value);
  });
  promise.catch(function (reason) {
    console.log("Reason when promise is rejected : ", reason);
  });
}

//-----------------------------------------------------------------------------------------------
