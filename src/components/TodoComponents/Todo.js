import React from 'react';
import './Todo.css';

export default class Todo extends React.Component {
    render() {
        return (
            <div className='task'>
                <span className={this.props.completed ? 'completed' : 'incomplete'}>{this.props.task}</span>
                <button onClick={e => this.props.markCompleted(`${this.props.id}`)}>Mark Completed</button>
            </div>
        );
    }
}