import axios from 'axios';

export class ApiBase {
    constructor(params) {
        this.instance = axios.create({
            baseURL: "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page",
        });
        this.instance.interceptors.response.use(
            response => {
                if (response.data && response.data.dataToken) {
                    response.data.data = response.data
                }
                return response
            },
            error => {
                this.getErrorResponse(error);
                return Promise.reject(error);
            }
        );
    }

    getErrorResponse(error) {
        if (
            error &&
            error.response &&
            error.response.data &&
            error.response.status === 401
        ) {
            if(error.response.data.code === "tokenExpired"){
                window.location.href = "/accessDenied"
            }else if (window.location.pathname !== "/accessDenied" && window.location.pathname !== '/') {
                window.location.href = "/accessDenied"
            }else{
                
            }
        }
    }
}