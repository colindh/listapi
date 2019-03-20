let express = require('express');
let fs = require('fs');
let Todo = require('../model/todo.model');

let app = express();
let router = express.Router();
let todos = [];

router.get('/', (req, res) => {
  res.send(todos);
});

router.post('/', (req, res) => {
  console.log(req.body);
  console.log(Object.keys(req.query));
  let newTodo = new Todo({
    id: todos.length,
    createdAt: Date.now(),
    description: req.query.description,
    done: false
  });
  todos.push(newTodo);
  res.send(newTodo);
});

router.delete('/:todoId', (req, res) => {
  todos = todos.filter((todo) => todo.id != req.params.todoId);
  res.send(todos);
});

module.exports = router;
