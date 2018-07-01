import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class PollSneakPeek extends Component {
    render() {
        //console.log(this.props.poll.author)
        const {
            author, timestamp, optionOne,optionTwo,id
            } = this.props.poll

        return(
            
            <Link to={`/poll/${id}`} className='pollSneakPeak' >
                <h2> Would you rather ... </h2>
                
                {/* <div>
                    {optionOne}
                    {optionTwo}
                </div> */}
                
                {/* <div className='option'> 
                    {`${optionOne.votes.length}`} X {`${optionOne.text}`} 
                    
                </div>
                <div className='option'> 
                {`${optionTwo.votes.length}`} X {`${optionTwo.text}`} 
                </div> */}
                <div> author: {`${author}`} </div>
                <div> timestamp: {`${timestamp}`} </div>
            </Link>
        )
    }

}

function mapStateToProps ({polls}, { id }) {
    const poll = polls[id]

    return {
        poll: poll
    }   
}

export default connect(mapStateToProps)(PollSneakPeek)