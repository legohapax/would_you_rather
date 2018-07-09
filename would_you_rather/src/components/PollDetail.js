import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/polls'


class PollDetail extends Component {
    handleVote = (e) => {
        e.preventDefault()

        const { dispatch, authedUser } = this.props

        dispatch(handleSaveQuestionAnswer({
            authedUser,
            id: this.props.match.params.question_id,
            qid: this.props.match.params.question_id,
            option: e.target.name,
            answer: e.target.name
        }))

    }
    
    render () {
        const {
            author, optionOne,optionTwo
            } = this.props.polls[this.props.match.params.question_id]
        const number_of_all_votes = optionOne.votes.length + optionTwo.votes.length
        const authed_user_has_answered = optionOne.votes.includes(this.props.authedUser) 
            || optionTwo.votes.includes(this.props.authedUser)
        
        return (
            <div className="pollDetail">
                <h2> Would you rather </h2>
                <div>
                    Author: {author}
                </div>
                
                <img src={this.props.users[author].avatarURL} alt="Smiley face" width='100px'/> 
                
                <div className={optionOne.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                    {`${optionOne.text}`} 
                    {!authed_user_has_answered && 
                        <button name='optionOne' onClick={this.handleVote}> 
                            Vote
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
    
        return {
            polls,
            users,
            authedUser
        }   
    }


export default withRouter(connect(mapStateToProps)(PollDetail))