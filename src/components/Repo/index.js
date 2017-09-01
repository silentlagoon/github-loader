import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Repo from './Repo';

function mapDispatchToProps(dispatch) {
    return {
        getUser: bindActionCreators(actions.fetchUser, dispatch)
    };
}

function mapStateToProps(state) {
    const { user } = state.user;
    return {
        user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Repo);