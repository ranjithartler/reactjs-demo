import HttpClient from './BaseService';

export const getUser = () => {
    return async (dispatch, getState) => {
        const resonse = await HttpClient.get('/posts');
        console.log(resonse, "resonseresonse");
        console.log(getState, "getState");
        dispatch({type: 'GET_USER', payload: resonse.data});  
    }
}
