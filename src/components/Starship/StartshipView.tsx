import React, { useEffect, useId, useState } from "react";
import Starship from "../../model/Starship";
import { startshipService } from "../../services/StarshipService";

const StartshipView: React.FC<any> = ({url}) => {
    const [startship, setStarship] = useState<Starship>();
    const id  = useId();
    useEffect(()=>{
        startshipService.getStarshipByUrl(url, (data:Starship, err:any)=>{
            if(data){
                setStarship(data);
            }
        })
    },[])
  
     return (<ul><li key={`${id}--${startship?.name}`}>{startship?.name}</li></ul>)
    
}

export default StartshipView;