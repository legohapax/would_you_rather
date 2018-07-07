import {RECEIVE_POLLS, SAVE_QUESTION_ANSWER, ADD_POLL} from "../actions/polls"

export default function tweets (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POLLS :
            return {
                ...state,
                ...action.polls
            }
        case SAVE_QUESTION_ANSWER :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    optionOne: {
                        ...state[action.id].optionOne,
                        votes: action.option === "optionOne"
                        ? state[action.id].optionOne.votes.concat([action.authedUser])
                        : state[action.id].optionOne.votes
                    },
                    optionTwo: {
                        ...state[action.id].optionTwo,
                        votes: action.option === "optionTwo"
                        ? state[action.id].optionTwo.votes.concat([action.authedUser])
                        : state[action.id].optionTwo.votes
                    }
                }
            }
        case ADD_POLL:
            const { poll } = action
            return {
                ...state,
                [action.poll.id]: action.poll
            }
        
        default :
            return state
    }
} 