import React, { useState, useEffect } from 'react';
import Character from '../../model/Character';
import { ColumnsData } from '../../model/DataTable';
import { characterService } from '../../services/CharacterService';
import { useNavigate } from 'react-router-dom';
import RestResponse from '../../model/RestResponse';
import CustomDataTable from '../shared/CustomDataTable';
import { addAll } from '../../store/CharacterStore';
import PlanetNameView from '../Planet/PlanetNameView';
import { useAppDispatch } from '../../app/hooks';
import './character.css';
import Loading from '../shared/Loading';
import '../../style/App.css';


const CharacterListView: React.FC = () => {
  const [characters, setCharacters] = useState<RestResponse<Character>>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<any>('');
  const [search, setSearch] = useState<any>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
 
  useEffect(() => {
    characterService.getAllCharacterData(page, search, (data: RestResponse<Character>, error:any)=>{
        setLoading(false);
        setCharacters(data);
        if(data && data.results){
            dispatch(addAll(data.results));
        }
    })
  },[page, search]);
const handleRowClick = (row: Character) => {
    const arr = row.url.split('/');
    navigate("/character/" + arr[arr.length-2])
}
const handleNext = (action: string) =>{
    setPage(action);
}
const getPlanetNameView = (row: Character) => {
    return <PlanetNameView url={row.homeworld}></PlanetNameView>
}
const filterByName = (name: string) => {
    setSearch(name);
}
const getColumns = () => {
    const columns: ColumnsData[] = []
    columns.push({field: 'name', header: "Name", dataType:'string'});
    columns.push({field: 'gender', header: "Gender", dataType:'string'});
    columns.push({field: '', header: "Home Planet", body: getPlanetNameView, dataType:'string'});
    return columns;       
}

  if(loading) {
    return (<Loading loading={loading}/>);
  } else {
  return (
    
    <div className='container'>
      <h1>Character List</h1>
      <CustomDataTable handleNext={handleNext} columns = {getColumns()} data={characters?characters.results:[]} onRowClick={handleRowClick}
      pageData={{count: characters?.count, next:characters?.next, prev:characters?.previous}}
      filter={filterByName}></CustomDataTable>
    </div>
  );
}
};

export default CharacterListView;