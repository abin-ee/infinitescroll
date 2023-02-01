import {
    IMAGE_DATA_FECT_START,
    IMAGE_DATA_FETCH_SUCCESS,
    // IMAGE_DATA_FETCH_FAILED
} from '../../constants';
import { ApiBase } from '../../../api/apiInstance';

export const getImageDatas = (payload, cb) => {
    const axios = new ApiBase().instance;
    return (dispatch) => {
        dispatch({ type: IMAGE_DATA_FECT_START });
        axios.post(`/${payload.page}`, {})
            .then((res) => {
                setTimeout(() => {
                    dispatch({
                        type: IMAGE_DATA_FETCH_SUCCESS,
                        payload: {
                            data: payload.page,
                        }
                    })
                    cb && cb(true)
                }, 3000)
            })
            .catch((err) => {
                setTimeout(() => {
                    dispatch({
                        type: IMAGE_DATA_FETCH_SUCCESS,
                        payload: {
                            data: payload.page,
                        }
                    })
                    cb && cb(true)
                }, 3000)
            }
            );
    };
}