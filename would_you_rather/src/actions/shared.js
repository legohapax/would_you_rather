import { receivePolls } from './polls'
import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'


export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users,polls}) => {
                dispatch(receivePolls(polls))
                dispatch(receiveUsers(users))
            }   
    )
}

}