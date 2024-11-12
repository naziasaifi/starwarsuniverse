import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { filmService } from "../../services/FilmService";
import Film from "../../model/Film";

const FilmView: React.FC<any> = ({url}) => {
    const [film, setFilm] = useState<Film>();
    useEffect(()=>{
        filmService.getFilmByUrl(url, (data:Film, err:any)=>{
            if(data){
                setFilm(data);
            }
        })
    },[])
    return (<ul>       
        <li>{film?.title}</li>
    </ul>)
}
export default FilmView;