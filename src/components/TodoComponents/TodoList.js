import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <div className='tasks'>
                { this.props.todos.map(todo => {
                    return <Todo    
                                key             =   {todo.id} 
                                task            =   {todo.task} 
                                id              =   {todo.id} 
                                completed       =   {todo.completed}
                                markCompleted   =   {this.props.markCompleted} 
                            />;
                }) }
            </div>
        );
    }
}
