import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from "react-redux"
import ListPolls from './ListPolls'
import PollDetail from './PollDetail'
import Nav from './Nav'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
            <div className="App">
                <Nav/>
                {this.props.loading === true
                    ? null
                    : <div>
                      <Route path='/' exact component={ListPolls}/>
                      <Route path='/poll/:id' component={PollDetail}/>
                      </div>
                }
        
          </div>
        </Router>

      
    );
  }
}

function mapStateToProps ({ authedUser }) {
    return {
      loading: authedUser === null
    }
  }
  
export default connect(mapStateToProps)(App) 


