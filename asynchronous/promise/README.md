
# PromiseStatus can have three different values: PENDING, RESOLVED, or REJECTED
# pending always have PromiseValue = undefined until the promise is either resolved or rejected
# When a promise is in resolved or rejected states, a promise is said to be SETTLED
# NB: rejected states always throws an error to the browser so we always find a way to handle that


# Promise object has STATIC methods and PROTOTYPE methods.
# PROTOTYPE called on an instantiated Promise... .then , .catch, .finally
# STATIC called on a raw promise class... Promise.reject(reason), Promise.resolve(value), Promise.all(iterable),Promise.race()
# NB: both normal methods and prototypes all return a Promise object

<!-- 
Promise.prototype.catch(onRejected)
Promise.prototype.then(onFulfilled, onRejected)
Promise.prototype.finally(onFinally) 
-->

###
### Rules of Thumb for Using Promises
1. Use promises whenever you are using async or blocking code.
2. resolve maps to then and reject maps to catch for all practical purposes.
3. Make sure to write both .catch and .then methods for all the promises.
4. If something needs to be done in both cases, use .finally.
5. We only get one shot at mutating each promise.
6. We can add multiple handlers to a single promise.
7. The return type of all the methods in Promise object, whether they are static methods or prototype methods, is again a Promise
8. In Promise.all the order of the promises is maintained in the values variable, irrespective of which promise was first resolved.


//----------- my steps on promises ----

step 1. CREATE A PROMISE or GET A PROMISE OBJECT
step 2. HANDLE THE PROMISE (here you give the promise things to do when they change states)