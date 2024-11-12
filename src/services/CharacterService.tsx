import axios from "axios";
import axiosInstance from '../axios/axiosInstance';
import Character from "../model/Character";
import { constants } from "../utils/Constants";


export const characterService = {
    getAllCharacterData:  (url:string, search: string, callback: any) => {
        const reqUrl = url?(url+'&'):(constants.BASE_URL + constants.PEOPLE_URL + "?");
        axiosInstance.get(reqUrl +'search='+search)
        .then( (response: any) => {
            if(response.data && response.data.results)
                 callback(response.data, null);
            else
                callback(null, response.errors);
        })
        .catch(error => {
            callback(null, error)
        });
    },
    getCharacterDataById:  (request: any,callback: any) => {
        axiosInstance.get( request)
        .then( (response: any) => {
            if(response.data)
                 callback(response.data, null);
            else
                callback(response.errors);
        })
        .catch(error => {
                callback(null, error)
        });
    },
  }
  