import React from 'react';
import './index.css';

class SearchBar extends React.Component {

    state = { button: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term);
        this.props.onClick(this.state.button);
    }

    render(props) {
        return (
            <div style={{marginTop:'40px', marginLeft:'420px'}}>

                <button 
                    className="ui secondary button" 
                    onClick={this.onFormSubmit}
                    style={{fontSize:'32px'}}
                >
                    {this.props.auth}
                </button>
            </div>
        );
    };
}

export default SearchBar;