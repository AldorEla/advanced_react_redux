import axios from 'axios';
import { FETCH_USERS } from './types';
export const URL = 'https://jsonplaceholder.typicode.com/users';

export function fetchUsers() {
    // Axios returns a promise, therefore request is a promise
    const request = axios.get(URL);
    
    return {
        type: FETCH_USERS,
        payload: request
    };
}