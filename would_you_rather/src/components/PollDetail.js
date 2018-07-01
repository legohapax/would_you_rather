import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/polls'

import Image from 'react'

class PollDetail extends Component {
    handleVote = (e) => {
        e.preventDefault()
        //console.log(e.target.name)
 

        const { dispatch, authedUser, polls } = this.props

        //console.log(authedUser,this.props.match.params.id)
        dispatch(handleSaveQuestionAnswer({
            authedUser,
            id: this.props.match.params.id,  // nebo toto? polls[this.props.match.params.id].id
            option: e.target.name,//který option user vybral
           
        }))

    }
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
            
                <h2> Would you rather </h2>
                {author}
                {/* TODO - nefunguje avatar */}
                
                <img src="dog1.jpeg" alt="Smiley face" /> 
                
                <div className={optionOne.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                    {`${optionOne.text}`} 
                    {!authed_user_has_answered && 
                    <button name='optionOne' onClick={this.handleVote}> 
                        vote
                    </button>
                    }
                    {authed_user_has_answered &&
                        <div className='optionDetails'>
                            <p>Number of votes: {`${optionOne.votes.length}`} </p>
                            <p>Percentage of votes: {(optionOne.votes.length / number_of_all_votes) * 100} % </p> 
                        </div>
                    }
                </div>
                
                <div className={optionTwo.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                    {`${optionTwo.text}`}
                    {!authed_user_has_answered && 
                        <button name='optionTwo' onClick={this.handleVote}> 
                            vote
                        </button>
                    }
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