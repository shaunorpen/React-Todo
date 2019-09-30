import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.task}</span>
                <button onClick={e => this.props.markCompleted(`${this.props.id}`)}>Mark Completed</button>
            </div>
        );
    }
}