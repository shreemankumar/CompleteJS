// Callbacks
/**
 *  function ------ sends to another function as a parameter then that parameter wala function is call callback
 */

function runAfterSometime(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
runAfterSometime(function () {
  console.log("hey");
});
