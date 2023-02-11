import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AnimeDetail from './pages/animeDetail';
import Homepage from './pages/homepage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/anime/:index"
          element={<AnimeDetail />}
        />
      </Routes>
    </>
  );
}

export default App;
