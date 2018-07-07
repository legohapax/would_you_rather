import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class PollSneakPeek extends Component {
    render() {
        const {
            author, timestamp, optionOne,optionTwo,id
            } = this.props.poll

        return(
            <Link to={`/poll/${id}`}  >
                <div className='pollSneakPeak'>
                    <h2> Would you rather ... </h2>
                    <div>
                        <p>{`${optionOne.text}`}</p>
                        <p>{`${optionTwo.text}`}</p>
                    </div>
                    <div> author: {`${author}`} </div>
                </div>
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