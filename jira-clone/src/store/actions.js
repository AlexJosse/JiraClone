export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const UPDATE_DATA_UP_PROGRESS = 'UPDATE_DATA_UP_PROGRESS';
export const UPDATE_DATA_UP_DONE = 'UPDATE_DATA_UP_DONE';
export const UPDATE_DATA_NOT_STARTED= 'UPDATE_DATA_NOT_STARTED';

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });