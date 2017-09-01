import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Search from './components/Search/Search';
import Repo from './components/Repo';
import RepoList from './components/RepoList'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();
//store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Search}/>
                <Route path="user/:username" component={Repo}/>
                <Route path="user/:username/repos" component={RepoList} />
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
