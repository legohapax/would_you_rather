import React, { Component } from 'react'
import { connect } from 'react-redux'


class PollSneakPeek extends Component {
    render() {
        //console.log(this.props.poll.author)
        const {
            author, timestamp, optionOne,optionTwo
            } = this.props.poll

        return(
            <div className='poll' >
                <h2> Would you rather ... </h2>
                <div className='option'> 
                    {`${optionOne.votes.length}`} X {`${optionOne.text}`} 
                    
                </div>
                <div className='option'> 
                {`${optionTwo.votes.length}`} X {`${optionTwo.text}`} 
                </div>
                <div> author: {`${author}`} </div>
                <div> timestamp: {`${timestamp}`} </div>
            </div>
        )
    }

}

function mapStateToProps ({polls}, { id }) {
    const poll = polls[id]
    //const parentTweet = tweet ? tweets[tweet.replyingTo] : null
//    console.log(poll)
    

    return {
        poll: poll
        // ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
        // : null
    }   
}

export default connect(mapStateToProps)(PollSneakPeek)