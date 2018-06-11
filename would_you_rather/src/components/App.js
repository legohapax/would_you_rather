import React, { Component } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from "react-redux"
import ListPolls from './ListPolls'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        {this.props.loading === true
          ? null
          : <ListPolls />}
        
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
    return {
      loading: authedUser === null
    }
  }
  
export default connect(mapStateToProps)(App) 


