import React,{ Component } from 'react'
import { connect } from 'react-redux'
import PollSneakPeek from './PollSneakPeek'
import PollDetail from './PollDetail'

class ListPolls extends Component {
    state = {
        answeredPolls: "unanswered",
    };
    
    renderPolls(whichPolls) {
        //zaslouzi si prepsat a zjednodusit poradne
        return(
            <div>
                <h2 className="center">Polls {`${whichPolls}`} by you</h2>
                <ul className="polls-list">
                {/* {console.log(this.state)} */}
                    {whichPolls === "answered"
                        ?
                        //displays answered polls
                        this.props.pollsIds.map((id) =>(
                            (this.props.polls[id].optionOne.votes.includes(this.props.authedUser) ||
                            this.props.polls[id].optionTwo.votes.includes(this.props.authedUser)) && 
                                <li key={id}>
                                    <div>
                                    
                                    <PollSneakPeek id={id}/>
                                    </div>
                                </li>
                        ))
                        :
                        //displays unaswered polls
                        this.props.pollsIds.map((id) =>(
                            !(this.props.polls[id].optionOne.votes.includes(this.props.authedUser) ||
                            this.props.polls[id].optionTwo.votes.includes(this.props.authedUser)) && 
                                <li key={id}>
                                    <div>
                                    
                                    <PollSneakPeek id={id}/>
                                    </div>
                                </li>
                    
                    ))}
                </ul>
            </div>
        )
    }
    
    render () {
        return(
            <div>
                <h2 className="center">Polls</h2>
                    <select
                        value={this.state.answeredPolls}
                        onChange={e => {
                            this.setState({answeredPolls: e.target.value})
                            }
                        }
                    > 
                        <option value="unaswered">unaswered</option>
                        <option value="answered">answered</option>
                        
                    </select>
                    
                {this.renderPolls(this.state.answeredPolls)}
                {/* <PollDetail id="6ni6ok3ym7mf1p33lnez"/> */}
                
            </div>
        )
    }
}


function mapStateToProps ({ polls, authedUser }) {
    return {
        authedUser,
        polls,
        pollsIds: Object.keys(polls)
            .sort((a,b) => polls[b].timestamp - polls[a].timestamp)
    }
}

export default connect(mapStateToProps)(ListPolls)