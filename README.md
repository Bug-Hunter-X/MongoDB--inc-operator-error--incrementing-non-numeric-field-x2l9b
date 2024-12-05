# MongoDB $inc Operator Error: Incrementing Non-Numeric Field

This example demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The `$inc` operator is designed to increment numeric fields only. Attempting to increment a string or other non-numeric field will result in an error or unexpected behavior.

## Bug
The `bug.js` file contains a MongoDB query that attempts to increment a string field using `$inc`. This will not work as intended and may throw an error.

## Solution
The `bugSolution.js` file shows the correct way to use the `$inc` operator, ensuring the target field is numeric.