export default (state = [], action) => {
    switch(action.type) {
        case 'GET_USER':
            return action.payload;
        case 'NEW_USER':
        debugger;
            return action.payload;
        default:
            return state;
    }
}
