import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from 'react'

class PollDetail extends Component {
    kkk = this.props.poll.author
    render () {
        const {
            author, timestamp, optionOne,optionTwo
            } = this.props.poll
        const number_of_all_votes = optionOne.votes.length + optionTwo.votes.length
        const authed_player_has_answered = optionOne.votes.includes(this.props.authedUser)
        
        return (
            
            <div className="pollDetail">
            {console.log(authed_player_has_answered)}
                <h2> Would you rather </h2>
                {this.props.poll.author}
                {/* TODO - nefunguje avatar */}
                
                <img src="dog1.jpeg" alt="Smiley face" /> 
                
                <div className={optionOne.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                    {`${optionOne.text}`} 
                    <div className='optionDetails'>
                        <p>{optionOne.votes.includes(this.props.authedUser) ? "ano" : "ne"}</p>
                        <p>Number of votes: {`${optionOne.votes.length}`} </p>
                        <p>Percentage of votes: {(optionOne.votes.length / number_of_all_votes) * 100} % </p> 
                    </div>
                </div>
                
                <div className={optionTwo.votes.includes(this.props.authedUser) ? 'optionHighlight' : 'option'}> 
                 {`${optionTwo.text}`}
                    <div className= 'optionDetails'>
                        <p>{optionTwo.votes.includes(this.props.authedUser) ? "ano" : "ne"}</p>
                        <p>Number of votes: {`${optionTwo.votes.length}`}</p>
                        <p>Percentage of votes:  {(optionTwo.votes.length / number_of_all_votes) * 100} %</p>
                    </div> 
                </div>

                
            </div>
        )
    }
}

    function mapStateToProps ({polls, users, authedUser}, { id }) {
        const poll = polls[id]
    
        return {
            poll: poll,
            users,
            authedUser
        }   
    }


export default connect(mapStateToProps)(PollDetail)