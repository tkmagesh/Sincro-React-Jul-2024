export function removeClosed(bugs /* hack-2 */){
    const bugsToRetain = bugs.filter(bug => !bug.isClosed)
    const action = { type : 'BUGS_INIT', payload : bugsToRetain}
    return action;
}