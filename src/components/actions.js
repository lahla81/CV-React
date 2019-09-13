import { 
    CHANGE_ROUTE,
    CHANGE_PROJECTS
} from './constants';

export const setRoute = (text) => ({
    type: CHANGE_ROUTE,
    payload: text
})

export const setProjects = (text) => ({
    type: CHANGE_PROJECTS,
    payload: text
})