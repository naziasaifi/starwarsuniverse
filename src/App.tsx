import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CharacterDetailsView from '../src/components/characters/CharacterDetailsView';
import CharacterListView from '../src/components/characters/CharacterListView';
import Favourite from '../src/components/favourites/FavouriteView';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { AppBar, Toolbar, Typography } from '@mui/material';
import CommonAppBar from './components/shared/CommonAppBar';
function App() {
  return <Fragment>
   
  <BrowserRouter>
  <CommonAppBar/>
      <Routes>
        <Route path="/" element={<CharacterListView />} />
        <Route path="/character/:characterId" element={<CharacterDetailsView />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
    </Fragment>
  
}

export default App;
