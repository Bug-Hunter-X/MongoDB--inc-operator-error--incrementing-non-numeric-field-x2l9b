```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 } });

// Or, if the field needs to be initialized and incremented:
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { field: 1 }, $setOnInsert: { field: 0 }});
```