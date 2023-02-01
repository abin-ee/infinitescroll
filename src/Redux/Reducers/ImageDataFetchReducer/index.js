import {
    IMAGE_DATA_FECT_START,
    IMAGE_DATA_FETCH_SUCCESS,
    IMAGE_DATA_FETCH_FAILED
} from '../../constants';
import {
   imageDataFetchStart,
   imageDataFetchSuccess,
   imageDataFetchFailed
} from './Helper';
import { INITIAL_STATE } from './InitialState';

export const ImageFetchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case IMAGE_DATA_FECT_START:
            return imageDataFetchStart(state, action.payload);
        case IMAGE_DATA_FETCH_SUCCESS:
            return imageDataFetchSuccess(state, action.payload);
        case IMAGE_DATA_FETCH_FAILED:
            return imageDataFetchFailed(state, action.payload);
        default:
            return { ...state };
    }
}