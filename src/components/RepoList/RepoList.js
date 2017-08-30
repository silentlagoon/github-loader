import React, { Component } from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import { CircularProgress } from 'material-ui';
  import { Link } from 'react-router';

class RepoList extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            repos => {
                this.setState({
                    repos: repos
                });
            }
        );
    }

    _createTableRow(repos) {
        return repos.map(function (repo, key) {
            return (
                <TableRow key={ key }>
                    <TableRowColumn><a href={ repo.html_url } >{ repo.name }</a></TableRowColumn>
                    <TableRowColumn>{ repo.stargazers_count }</TableRowColumn>
                </TableRow>
            )
        })
    }


    render() {
        if ( ! this.state.repos) {
            return (<CircularProgress />);
        }

        const repos = this.state.repos;

        return (
            <div>
                <h2>Repos List</h2>
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Stars Count</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        { this._createTableRow(repos) }
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default RepoList;