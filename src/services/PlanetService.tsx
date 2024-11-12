import axios from "axios";
import axiosInstance from '../axios/axiosInstance';
import Character from "../model/Character";
import { constants } from "../utils/Constants";


export const planetService = {
    getAllCharacterData:  (url:string, callback: any) => {
        const reqUrl = url?url:constants.BASE_URL + constants.PEOPLE_URL;
        axiosInstance.get(reqUrl)
        .then( (response: any) => {
            if(response.data && response.data.results)
                 callback(response.data, null);
            else
                callback(null, response.errors);
        })
        .catch(error => {
            //console.error(error);
            callback(null, error)
        });
    },
    getPlanetByUrl:  (request: any,callback: any) => {
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
  