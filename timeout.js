let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 1000);
});

// promise
//   .then((res) => {
//     console.log(res);
//     return new Promise(function (resolve, reject) {
//       setTimeout(() => resolve("done"), 1000);
//       setTimeout(() => reject("donee"), 1000);
//     });
//   })
//   .then((res) => console.log(res + res))
//   .catch((er) => console.log(er));
//#########################################
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);
// setImmediate(() => {
//   console.log("setImmediate");
// // });
// var i = 0;
// var start = new Date();
// function foo() {
//   i++;
//   if (i < 1000) {
//     setImmediate(foo);
//   } else {
//     var end = new Date();
//     console.log("Execution time: ", end - start);
//   }
// }
// foo();

// var i = 0;
// var start = new Date();
// function foo() {
//   i++;
//   if (i < 1000) {
//     setTimeout(foo, 0);
//   } else {
//     var end = new Date();
//     console.log("Execution time: ", end - start);
//   }
// }
// foo();

var i = 0;
function foo() {
  i++;
  if (i > 20) {
    return;
  }
  console.log("foo");
  setTimeout(() => {
    console.log("setTimeout");
  }, 0);
  process.nextTick(foo);
}
setTimeout(foo, 2);
