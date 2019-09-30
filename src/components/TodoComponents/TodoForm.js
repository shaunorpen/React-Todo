import React from 'react';

export default class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input  id='newTask' 
                            value={this.props.newTaskDescription} 
                            onChange={e => this.props.setNewTaskDescription(document.querySelector('#newTask').value)}></input>
                </div>
                <div>
                    <button onClick={e => this.props.addTodo(document.querySelector('#newTask').value)} >Add to List</button>
                    <button onClick={this.props.clearCompleted} >Clear Completed</button>
                </div>
            </div>
        );
    }
}