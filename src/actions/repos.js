import * as actionTypes from '../constants/actionTypes';

function setRepos(repos) {
    return {
        type: actionTypes.REPOS_GET,
        repos
    }
}

export function fetchUserRepos(username) {
    return function(dispatch) {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then((repos) => {
                dispatch(setRepos(repos));
            }
        );
    }
}