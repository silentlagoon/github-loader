import React, { Component } from 'react';
import { browserHistory as history } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textFieldValue: ''
        }

        this._handleSubmit = this._handleSubmit.bind(this);
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
    }

    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.state.textFieldValue}`)
    }

    _handleTextFieldChange(e) {
        this.setState({
            textFieldValue: e.target.value
        });
    }

    render() {
        const style = {
            margin: 12,
        };

        return (
            <div>
                <TextField
                    value={ this.state.textFieldValue }
                    onChange={ this._handleTextFieldChange }
                    hintText="Enter username to search"
                />
                <RaisedButton
                    label="Search"
                    primary={true}
                    style={style} 
                    onClick={ this._handleSubmit }
                />
            </div>
        )
    }
}

export default Search;