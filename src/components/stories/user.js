import React from 'react';
import Repo from '../Repo';
import { storiesOf, action } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from '../../stores/configureStore';

storiesOf('Repo', module)
    .add('fetched user profile', () => {
        return getRepo();
    })

function getRepo() {
    const store = configureStore();
    return(
        <MuiThemeProvider>
            <Repo store={store} params={ {username: 'silentlagoon'} }/>
        </MuiThemeProvider>
    );
}