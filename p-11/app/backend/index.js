// backend/index.js
const express = require('express');
 
const PORT = process.env.PORT || 3010;
const app = express();
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
 
const todoItems = require('./todo-items.json');
app.get('/api/todo-items', (req, res) => {
  res.json({ data: todoItems });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
