import { _saveQuestionAnswer } from '../utils/_DAT'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_QUESTION_ANSER = 'SAVE_QUESTION_ANSWER'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

export function saveQuestionAnswer ({id, authedUser,xxxxxx}) {
    return {
        type: SAVE_QUESTION_ANSER,
        id,
        authedUser,
        xxxxxxx
    }

}