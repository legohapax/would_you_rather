import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import UserDetail from './UserDetail'

class Leaderboard extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
      }
    
    render() {
        return(
            <div>
                <h1>Leaderboard</h1>
                <ol>
                    { this.props.usersIds.map((id) => (
                        <li key={id}>
                            <UserDetail id={id}/>
                        </li>
                    ))

                    }
                </ol>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    // sums up answers and questions of users to facilitate sorting
    for (let user in users) {
        users[user].leaderboardSum = users[user].questions.length + Object.keys(users[user].answers).length
        
    }
    
    return {
        usersIds: Object.keys(users)
             .sort((a,b) => users[b].leaderboardSum - users[a].leaderboardSum)
    }
}

export default connect(mapStateToProps)(Leaderboard)

