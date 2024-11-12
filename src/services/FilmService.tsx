import axios from "axios";
import axiosInstance from '../axios/axiosInstance';
import Character from "../model/Character";
import { constants } from "../utils/Constants";


export const filmService = {
    getFilmByUrl:  (request: any,callback: any) => {
        axiosInstance.get(request)
        .then( (response: any) => {
            if(response.data )
                 callback(response.data, null);
            else
                callback(null, response.errors);
        })
        .catch(error => {
            //console.error(error);
            callback(null, error)
        });
    },
  }
  