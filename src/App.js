import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Homepage />}
      />
      <Route
        path="/details/:id/"
        element={<AnimeCard />}
      />
    </Routes>
  );
}

export default App;
