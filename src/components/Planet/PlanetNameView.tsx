import React, { useEffect, useState } from "react";
import { Planet } from "../../model/Planet";
import { planetService } from "../../services/PlanetService";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { add } from "../../store/PlanetStore";

const PlanetNameView: React.FC<any> = ({url}) => {
    const [planet, setPlanet] = useState<Planet>();
    const planetMap = useAppSelector((state)=>state.planet.value);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        if(!planetMap[url]){
            planetService.getPlanetByUrl(url, (data:Planet, err:any)=>{
            if(data){
                setPlanet(data);
                dispatch(add(data))
            }
            })
        }
        else{
            setPlanet(planetMap[url]);
        }
    },[planetMap])
    return (<span>{planet?.name}</span>)
}
export default PlanetNameView;