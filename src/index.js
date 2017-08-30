import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Search from './components/Search/Search';
import Repo from './components/Repo/Repo';
import RepoList from './components/RepoList/RepoList'
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Search}/>
            <Route path="user/:username" component={Repo}/>
            <Route path="user/:username/repos" component={RepoList} />
        </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
