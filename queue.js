(function() {

console.log('queue.js LOADED');

// Backup the existing queue of functions.
var queue = queue.cmd;

// Replace the push function with one that executes the function passed to it.
queue.cmd.push = function () {
  for (var i = 0; i < arguments.length; i++) {
    try {
      if (typeof arguments[i] === "function") {
        arguments[i]();
      }
      else {
        // What to do when given something not a function.
      }
    }
    catch (e) {
      // Error handling.
    }
  }
}

// Execute all the queued functions
// apply() turns the array into individual arguments
queue.cmd.push.apply(jsq.cmd, queue);

})(this);