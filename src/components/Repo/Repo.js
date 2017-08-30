import React, { Component } from 'react';
import { Avatar } from 'material-ui';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';

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

    render() {
        if ( ! this.state.user) {
            return (<CircularProgress />);
        }

        const user = this.state.user;

        return (
            <div>
                <h2>User Page</h2>
                <Avatar src={ user.avatar_url } />
                <p>User Name: { user.name }</p>
                <p>Followers: { user.followers }</p>
                <p>Public Repos: <Link to={ `/user/${this.props.params.username}/repos` }>{ user.public_repos }</Link></p>
            </div>
        )
    }
}

export default Repo;