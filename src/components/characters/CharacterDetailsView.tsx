import React, { useState, useEffect } from 'react';
import Character from '../../model/Character';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { characterService } from '../../services/CharacterService';
import { constants } from '../../utils/Constants';
import { Table, TableCell, tableCellClasses, TableRow, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './character.css';
import { favouriteService } from '../../services/FavouriteService';
import FilmView from '../film/FilmView';
import StartshipView from '../Starship/StartshipView';
import PlanetNameView from '../Planet/PlanetNameView';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditCharacterView from './EditCharacterView';
import Loading from '../shared/Loading';
import '../../App.css';

const CharacterDetailsView= () => {
  const [character, setCharacter] = useState<Character | null |  undefined>(null);
  const [favourite, setFavourite] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const {characterId} = useParams<string>();

  const data = useAppSelector((state)=>state.character.value);

  useEffect(() => {
      const url = constants.BASE_URL +constants.PEOPLE_URL + characterId + "/";
      if(data && data[url]){
        setCharacter(data[url]);
      }
      else{
        characterService.getCharacterDataById( url,(data:Character, err:any)=>{
          if(data)
            setCharacter(data);
      });
      }
      setFavourite(favouriteService.isFavourites(characterId));
  }, [characterId]);
  const addTofavourite = ()=>{
    const fav = {id: characterId, name: character?.name, height: character?.height, gender: character?.gender,
                  home_planet: character?.home_planet, homeworld: character?.homeworld
    };
    favouriteService.addToFavourite(fav)
    setFavourite(true);
  }
  const removeFavourite = ()=>{
    favouriteService.removeFavourite(characterId)
    setFavourite(false);
  }
  const updateCharacter = (height: string, gender: string) => {
    if(character){
      //character.gender=gender;
      //character.height=height;
      //setCharacter(character);
      //TODO: Create Post request to update Character information
      setEditOpen(false)
    }
  }
  if (!character) {
    return (<Loading loading={true}/>);
  }

  return (
      <div className='character-container'>
      <div>
      <Table sx={{
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}  className='star-war-table'>
    <TableRow>
          <TableCell colSpan={2}>
            {favourite?<label className='primary-color'><FavoriteIcon  onClick={removeFavourite} className='clickable-field icon-margin'/> Remove from favourite</label> :
            <label className='primary-color'><FavoriteBorderIcon  onClick={addTofavourite} className='clickable-field icon-margin'/> Add to favourite</label>}
          </TableCell>
      
        </TableRow>
        <TableRow>
          <TableCell><Typography variant="h6" className='primary-color' gutterBottom>Character details</Typography></TableCell>
          <TableCell><ModeEditIcon onClick={()=>setEditOpen(!editOpen)} style={{cursor:'pointer'}}></ModeEditIcon></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>{character.name}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hair Color</TableCell>
          <TableCell>{character.hair_color}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Eye Color</TableCell>
          <TableCell>{character.eye_color}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Gender</TableCell>
          <TableCell>{character.gender}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Home Planet</TableCell>
          <TableCell><PlanetNameView url={character.homeworld}></PlanetNameView></TableCell>
        </TableRow>
        
      </Table>
      </div>
      <div className='details-container'>
      <Table className='star-war-table' sx={{
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}>
        <TableRow>
          <TableCell colSpan={2}><Typography className='primary-color' variant="h6" gutterBottom>Films</Typography></TableCell>
        </TableRow>
        
        {character.films?character.films.map((film)=>{
          return <FilmView url={film}/>
        })
        :null}

      </Table>
      </div>
      <div className='details-container'>
      <Table  className='star-war-table'  sx={{
    [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    }
  }}>
      <TableRow>
          <TableCell colSpan={2}><Typography className='primary-color' variant="h6" gutterBottom>Starships Piloted</Typography></TableCell>
        </TableRow>
        
        {character.films?character.starships.map((ss)=>{
          return <StartshipView url={ss}/>
        })
        :null}

      </Table>
      </div>
      <EditCharacterView open={editOpen} height={character.height} gender={character.gender} setOpen={setEditOpen} callback={updateCharacter}/>
    </div>  
  );
};

export default CharacterDetailsView;