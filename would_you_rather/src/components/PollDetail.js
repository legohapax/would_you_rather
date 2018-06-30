import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Image from 'react'

class PollDetail extends Component {
    
    render () {
        //console.log(this.props.match.params.id)
        const {
            author, timestamp, optionOne,optionTwo,id
            } = this.props.polls[this.props.match.params.id]
            // console.log(author)
        const number_of_all_votes = optionOne.votes.length + optionTwo.votes.length
        const authed_user_has_answered = optionOne.votes.includes(this.props.authedUser) 
            || optionTwo.votes.includes(this.props.authedUser)
        
        return (
            
            <div className="pollDetail">
            {console.log(authed_user_has_answered)}
                <h2> Would you rather </h2>
                {author}
                {/* TODO - nefunguje avatar */}
                
                <img src="dog1.jpeg" alt="Smiley face" /> 
                
                <div className={optionOne.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                    {`${optionOne.text}`} 
                    {authed_user_has_answered &&
                        <div className='optionDetails'>
                            <p>Number of votes: {`${optionOne.votes.length}`} </p>
                            <p>Percentage of votes: {(optionOne.votes.length / number_of_all_votes) * 100} % </p> 
                        </div>
                    }
                </div>
                
                <div className={optionTwo.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                 {`${optionTwo.text}`}
                    {authed_user_has_answered &&
                        <div className='optionDetails'>
                            <p>Number of votes: {`${optionTwo.votes.length}`}</p>
                            <p>Percentage of votes:  {(optionTwo.votes.length / number_of_all_votes) * 100} %</p>
                        </div> 
                    }
                </div>

                
            </div>
        )
    }
}

    function mapStateToProps ({polls, users, authedUser}) {
        //const poll = polls[id]
    
        return {
            polls,
            //poll: poll,
            users,
            authedUser
        }   
    }


export default withRouter(connect(mapStateToProps)(PollDetail))