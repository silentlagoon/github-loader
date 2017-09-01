import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type) {
        case actionTypes.REPOS_GET:
            return setRepos(state, action);
    }
    return state;
}

function setRepos(state, action) {
    const { repos } = action;
    return { ...state, repos };
}