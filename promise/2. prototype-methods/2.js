/**
 * Since .then can assign bothonFulfilled, onRejected handlers , 
 * instead of writing separate .then and .catch, 
 * we could have done the same with with .then. It would have looked like This:
 */

//CREATE PROMISE
 var momsPromise = new Promise(function (resolve, reject) {
    momsSavings = 20000;
    priceOfPhone = 60000;
    if (momsSavings > priceOfPhone) {
      resolve({
        brand: "iphone",
        model: "13pro",
      });
    } else {
      reject("We don't have enough savings. Let's save some more money.");
    }
  });

  //HANDLE PROMISE
 momsPromise.then(
    function(value) {
      console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
    },
    function(reason) {
      console.log("Mom coudn't buy me the phone because ", reason);
    }
  );

  /**
   * For the sake of the readability of the code, I think it is better to keep them separat
   */