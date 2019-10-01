import React from 'react';
import Search from './components/TodoComponents/Search';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './css/reset.css';
import './css/App.css';

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
      searchTerm: '',
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

  setSearchTerm = (newSearchTerm) => {
    this.setState(currentState => ({
      searchTerm: newSearchTerm
    }))
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to ToDone!</h2>
        <Search   searchForTasks={this.searchForTasks}
                  searchTerm={this.state.searchTerm} 
                  setSearchTerm={this.setSearchTerm} />
        <TodoList todos={this.state.todos.filter(todo => todo.task.toLowerCase().includes(this.state.searchTerm.toLowerCase()))} 
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
