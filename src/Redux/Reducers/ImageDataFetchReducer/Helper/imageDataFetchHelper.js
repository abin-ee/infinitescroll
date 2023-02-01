import data from '../constants'

export const imageDataFetchStart = (state, payload) => {
    return {
        ...state,
        ImageDataFetchApi: {
            error: false,
            isLoading: true,
            data: state.ImageDataFetchApi.data,
            message: ""
        }
    }
}

export const imageDataFetchSuccess = (state, payload) => {
    let newData = data[payload.data].nodes
    let oldData = state.ImageDataFetchApi.data
    return {
        ...state,
        ImageDataFetchApi: {
            error: false,
            isLoading: false,
            data: [...oldData,...newData],
            message: ""
        },
        currentPage: payload.data
    }
}

export const imageDataFetchFailed = (state, payload) => {
    return { ...state }
}