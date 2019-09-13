import { CHANGE_ROUTE } from './constants';
import { CHANGE_PROJECTS } from './constants';

const initialRouteState ={
    route : 'Intro'
}
const initialProjectsState = {
    category : ''
}

export const routeChange = (state=initialRouteState, action={}) =>{
    switch(action.type) {
        case CHANGE_ROUTE:
            return Object.assign({}, state, { route: action.payload })
        default:
            return state;
    }
}
export const projectsChange = (state=initialProjectsState, action={}) =>{
    switch(action.type) {
        case CHANGE_PROJECTS:
            return Object.assign({}, state, { category: action.payload })
        default:
            return state;
    }
}