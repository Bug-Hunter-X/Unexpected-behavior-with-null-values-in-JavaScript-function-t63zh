function foo(a, b) {
  // Check if either a or b is falsy (null, undefined, 0, false, '', etc.)
  if (!a || !b) {
    return 0; // Handle falsy values
  }
  return a + b; // Regular addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(undefined,5)); // Output: 0
console.log(foo(5,undefined)); // Output: 0
console.log(foo(0,5)); // Output: 0