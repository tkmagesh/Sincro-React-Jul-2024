export function removeClosed(){
    return function(dispatch, getState){
        const storeState = getState() // returns the complete store state
        const bugs = storeState.bugsState;
        const bugsToRetain = bugs.filter(bug => !bug.isClosed)
        const action = { type : 'BUGS_INIT', payload : bugsToRetain}
        dispatch(action);
    }
}