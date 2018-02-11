export const SET_JSON = 'SET_JSON';
export const NO_JSON = 'NO_JSON';
export const SET_FILTER = 'SET_FILTER';

export const setJson = json => ({
    type: SET_JSON,
    payload: json,
});

export const noJson = () => ({
    type: NO_JSON,
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});