import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import { browserHistory as history } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });

    switch(value) {
      case 0:
        history.push(`/`);
        break;
      case 1:
        this.handleCaseUser();
        break;
      case 2:
       this.handleCaseRepos();
       break;
    }
  };

  handleCaseUser = () => {
    const username = `${this.props.params.username}`;

    if(username === 'undefined') {
      history.push(`/`);
    } else {
      history.push(`/user/${username}`)
    }
  }

  handleCaseRepos = () => {
    const username = `${this.props.params.username}`;

    if(username === 'undefined') {
      history.push(`/`);
    } else {
      history.push(`/user/${username}/repos`)
    }
  }

  render() {
    return (
      <MuiThemeProvider>      
        <div className="App">
          <div className="App-header">
            <h2>Github Loader</h2>
          </div>
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Search" value={0} />
            <Tab label="User" value={1} />
            <Tab label="User Repos" value={2} />
          </Tabs>
          <main className="main-content">
            { this.props.children }
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
