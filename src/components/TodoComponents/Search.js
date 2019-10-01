import React from 'react';

export default class Search extends React.Component {
    render() {
        return (
            <div className='search-form'>
                <input
                    id='search'
                    placeholder='Search tasks'
                    onChange={e => this.props.setSearchTerm(document.querySelector('.search-form input').value)}
                    value={this.props.searchTerm}
                ></input>
            </div>
        )
    }
}