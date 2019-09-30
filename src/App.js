import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const starterTasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: starterTasks,
      newTask: '',
    };
  }

  addTodo = (taskDescription) => {
    if (taskDescription) {
      this.setState(currentState => ({
        todos: [...currentState.todos, {
          task: taskDescription,
          id: Date.now(),
          completed: false
        }],
        newTask: '',
      }))
    }
  }

  markCompleted = (taskId) => {
    this.setState(currentState => ({
      todos: currentState.todos.map(todo => {
        if (todo.id === Number(taskId)) {
          return {...todo, completed: true};
        }
        return todo;
      })
    }))
  }

  clearCompleted = () => {
    this.setState(currentState => ({
      todos: currentState.todos.filter(todo => todo.completed === false)
    }))
  }

  setNewTask = (newTaskDescription) => {
    this.setState(currentState => ({
      newTask: newTaskDescription
    }))
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} 
                  markCompleted={this.markCompleted} />
        <TodoForm addTodo={this.addTodo} 
                  clearCompleted={this.clearCompleted} 
                  newTaskDescription={this.state.newTask} 
                  setNewTaskDescription={this.setNewTask} />
      </div>
    );
  }
}

export default App;
