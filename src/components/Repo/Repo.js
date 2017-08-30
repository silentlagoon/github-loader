import React, { Component } from 'react';
import { Avatar } from 'material-ui';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';
import './Repo.css';

class Repo extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}`)
        .then(response => response.json())
        .then(
            user => {
                this.setState({
                    user: user
                });
            }
        );
    }

    _userBlock = (user) => {
        return (
            <div>
                <p className="userbox"><b>User Name:</b> { user.name }</p>
                <p className="userbox"><b>Followers:</b> { user.followers }</p>
                <p className="userbox"><b>Public Repos:</b> <Link to={ `/user/${this.props.params.username}/repos` }>{ user.public_repos }</Link></p>
            </div>
        );
    }

    render() {
        if ( ! this.state.user) {
            return (<CircularProgress />);
        }

        const user = this.state.user;

        return (
            <div>
                <h2>User Page</h2>
                <Avatar src={ user.avatar_url } />
                { this._userBlock(user) }
            </div>
        )
    }
}

export default Repo;