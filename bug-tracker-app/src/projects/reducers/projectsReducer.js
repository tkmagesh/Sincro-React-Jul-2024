/* 
let initialState = [
  { id: 1, name: "Bug Tracker" },
  { id: 2, name: "Time Tracker" },
  { id: 3, name: "Expense Manager" },
]; 
*/
let initialState = [];

export default function projectsReducer(currentState = initialState, action){
    switch (action.type) {
        case 'PROJECTS_INIT':
            return action.payload;
        case 'PROJECTS_ADD':
            return [...currentState, action.payload]
        default:
            return currentState;
    }
}