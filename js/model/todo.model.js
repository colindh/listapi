

class Todo {
  constructor(todoData) {
    this.id = todoData.id;
    this.createdAt = todoData.createdAt;
    this.description = todoData.description;
    this.done = todoData.done;
  }
}

module.exports = Todo;
