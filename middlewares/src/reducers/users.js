import { FETCH_USERS } from '../actions/types';

export default function usersReducer(state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
            console.log(action.payload);
            return [...state, ...action.payload.data];
    }
    return state;
}