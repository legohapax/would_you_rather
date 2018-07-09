import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { connect } from "react-redux"
import ListPolls from './ListPolls'
import PollDetail from './PollDetail'
import Nav from './Nav'
import NewPoll from './NewPoll'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'
import Login from './Login'


class App extends Component {
    componentDidMount() {
      this.props.dispatch(handleInitialData())
    }

  render() {
      return (
          <Router>
              <div className="App">
                  { this.props.authedUser === null
                    ?
                    <Login/>
                    :
                    <Fragment>
                        <Nav/>
                          <div>
                              <Switch>
                                  <Route path='/' exact component={ListPolls}/>
                                  <Route path='/question/:question_id' component={PollDetail}/>
                                  <Route path='/add' component={NewPoll}/>
                                  <Route path='/leaderboard' component={Leaderboard}/>
                                  <Route component={NoMatch}/>
                              </Switch>
                          </div>
                    </Fragment>
                  }
              </div>
          </Router>
      );
  }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
  
export default connect(mapStateToProps)(App) 


