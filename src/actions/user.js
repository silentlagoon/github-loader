import * as actionTypes from '../constants/actionTypes';

function setUser(user) {
    return {
        type: actionTypes.USER_GET,
        user
    }
}

export function fetchUser(username) {
    return function(dispatch) {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then((user) => {
                dispatch(setUser(user));
            }
        );
    }
}