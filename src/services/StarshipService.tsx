import axiosInstance from '../axios/axiosInstance';

export const startshipService = {
    getStarshipByUrl:  (request: any,callback: any) => {
        axiosInstance.get(request)
        .then( (response: any) => {
            if(response.data )
                 callback(response.data, null);
            else
                callback(null, response.errors);
        })
        .catch(error => {
            callback(null, error)
        });
    },
  }
  