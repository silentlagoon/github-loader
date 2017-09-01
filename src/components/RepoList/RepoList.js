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

class RepoList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserRepos(this.props.params.username);
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
        const repos = this.props.repos;

        if ( ! repos) {
            return (<CircularProgress />);
        }

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