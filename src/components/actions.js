import { CHANGE_ROUTE } from './constants';

export const setRoute = (text) => ({
    type: CHANGE_ROUTE,
    payload: text
})