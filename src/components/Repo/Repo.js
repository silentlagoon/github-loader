import React, { Component } from 'react';
import { Avatar } from 'material-ui';
import { Link } from 'react-router';
import { CircularProgress } from 'material-ui';

class Repo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(this.props.params.username);
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
        const user = this.props.user;
        
        if(! user) {
            return (
                <CircularProgress />
            );
        }
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