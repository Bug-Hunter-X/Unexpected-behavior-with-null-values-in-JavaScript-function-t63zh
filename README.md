# JavaScript Null Handling Bug

This repository demonstrates a common JavaScript bug related to null handling in function arguments.  The `foo` function in `bug.js` attempts to gracefully handle null values by returning 0. However, it doesn't consider undefined or other falsy values which could lead to errors or unexpected behavior. The `bugSolution.js` file provides an improved version that addresses this issue.

## Bug Description

The original code only explicitly checks for null values. If either `a` or `b` is `undefined`, `NaN`, or other falsy value, it'll result in incorrect addition or runtime errors.

## Solution

The corrected code in `bugSolution.js` incorporates a more robust check, ensuring that the function appropriately handles various falsy values, preventing unexpected behavior.