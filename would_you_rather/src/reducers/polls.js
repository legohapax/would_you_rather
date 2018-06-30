import {RECEIVE_POLLS, SAVE_QUESTION_ANSWER} from "../actions/polls"

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
                  : state[action.id].optionTwo.votes.concat([action.authedUser]) //tohle možná musí jít do svého ...optionTwo
                }
              }
            }
        
        default :
            return state
    }
} 