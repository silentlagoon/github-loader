import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import RepoList from './RepoList';

function mapDispatchToProps(dispatch) {
    return {
        getUserRepos: bindActionCreators(actions.fetchUserRepos, dispatch)
    };
}

function mapStateToProps(state) {
    const { repos } = state.repos;
    return {
        repos
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);