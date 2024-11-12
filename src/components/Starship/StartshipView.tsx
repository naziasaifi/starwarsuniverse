import { TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import Starship from "../../model/Starship";
import { startshipService } from "../../services/StarshipService";

const StartshipView: React.FC<any> = ({url}) => {
    const [startship, setStarship] = useState<Starship>();
    useEffect(()=>{
        startshipService.getStarshipByUrl(url, (data:Starship, err:any)=>{
            if(data){
                setStarship(data);
            }
        })
    },[])
    return (<ul><li>{startship?.name}</li></ul>)
}

export default StartshipView;