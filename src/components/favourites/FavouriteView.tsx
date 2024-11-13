import React, { useState, useEffect } from 'react';
import { favouriteService } from '../../services/FavouriteService';
import { ColumnsData } from '../../model/DataTable';
import CustomDataTable from '../shared/CustomDataTable';
import DeleteIcon from '@mui/icons-material/Delete';
import PlanetNameView from '../Planet/PlanetNameView';
import { Favourite } from '../../model/Favourite';
import '../../style/App.css';

const FavouriteView: React.FC = () => {
  const [favourites, setFavourites] = useState<Favourite[]>([]);
  useEffect(() => {
    const favs = favouriteService.getFavourites();
    if(favs){
        const favData: Favourite[] = [];
        Object.keys(favs).forEach(function(key) {
            favData.push(favs[key]);
        });
        setFavourites(favData);
    }
  }, [favourites]);

  const getPlanetNameView = (row: Favourite) => {
    return <PlanetNameView url={row.homeworld}></PlanetNameView>
}
  const getDeleteButtonBody = (fav: Favourite) => {
        return <DeleteIcon onClick={()=>{favouriteService.removeFavourite(fav.id);setFavourites([]);}}/>
  }
  const getColumns = () => {
    const columns: ColumnsData[] = []
    columns.push({field: 'name', header: "Name", dataType:'string'});
    columns.push({field: 'height', header: "height", dataType:'string'});
    columns.push({field: 'gender', header: "Gender", dataType:'string'});
    columns.push({field: '', header: "Home Planet", body: getPlanetNameView, dataType:'string'});
    columns.push({field: '', header: "Remove", body: getDeleteButtonBody, dataType:'string'});
    return columns;       
}
  return (
    <div className='container'>
      <h2>Favourite List</h2>
      <CustomDataTable  columns = {getColumns()} data={favourites}
      ></CustomDataTable>
    </div>
  );
}

export default FavouriteView;