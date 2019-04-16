import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }
    
    render () {
        return (
            <div className="ui container" style={searchBarContainerStyle}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

const searchBarContainerStyle = {
    marginTop: '15px'
};

export default App;