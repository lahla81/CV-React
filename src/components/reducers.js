import { CHANGE_ROUTE } from './constants';

const initialState ={
    route : 'Intro'
}

export const routeChange = (state=initialState, action={}) =>{
    switch(action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, {route: action.payload})
        default:
            return state;
    }
}