export default function({ dispatch }) {
    return next => action => {
        // If the action does not have a payload
        // or, the payload does not have .then property
        // send it to the next action
        if(!action.payload || !action.payload.then) {
            return next(action);
        }
        
        // In this step we do have a promise.
        // Make sure the action's promise resolves
        action.payload.then(response => dispatch({...action, payload: response}));
        // create a new action with the old type, but
        // replace the promise with the response data
    }
}