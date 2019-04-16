import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    // arrow function makes sure the correct value of 'this' is used,
    // or in other words makes sure 'this' pooints to 'SearchBar'
    onFormSubmit = (event) => {
        event.preventDefault();

        // In class based components, you reference props with 'this' keyword (this.props)
        // onSubmit was passed on through the props object - which is pointing to the
        // onSearchSubmit method in the App component
        this.props.onSubmit(this.state.term);
    }
    // testing
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <label>Image</label>
                        <input  type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;