import React from 'react';
import Search from '../Search/Search';
import { storiesOf, action } from '@storybook/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

storiesOf('Search', module)
    .add('search', () => {
        return getSearch();
    })

function getSearch() {
    return(
        <MuiThemeProvider>
            <Search />
        </MuiThemeProvider>
    );
}