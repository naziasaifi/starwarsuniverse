
import { constants } from "../utils/Constants";

export const favouriteService = {
    addToFavourite: (fav: any) => {
        let str = localStorage.getItem(constants.FAVOURITE);
        if(!str){
            str = '{}';
        }
        let json = JSON.parse(str);
        json[fav.id] = fav;
        localStorage.setItem(constants.FAVOURITE,JSON.stringify(json))
    },
    removeFavourite: (fav: any) => {
        let str = localStorage.getItem(constants.FAVOURITE);
        if(!str){
           return;
        }
        let json = JSON.parse(str);
        delete json[fav];
        localStorage.setItem(constants.FAVOURITE,JSON.stringify(json))
    },
    getFavourites: ()=>{
        let str = localStorage.getItem(constants.FAVOURITE);
        if(str){
            return JSON.parse(str);
        }
        return null;
    },
    isFavourites: (charId:any)=>{
        let str = localStorage.getItem(constants.FAVOURITE);
        if(str){
            return JSON.parse(str)[charId];
        }
        return false;
    }
}