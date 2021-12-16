import React from "react";
import { Routes, Route } from "react-router-dom";

import { ErrorPage } from "./areas/ErrorPage";
import { FindAlbumPage } from "./areas/FindAlbumPage/FindAlbumPage";
import { FindArtistPage } from "./areas/FindArtistPage/FindArtistPage";
import { FindSongPage } from "./areas/FindSongPage/FindSongPage";
import { HomePage } from "./areas/HomePage";
import { Layout } from "./shared/Layout";
import { StoreProvider } from "./store/Store";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="artist" element={<FindArtistPage />} />
            <Route path="album" element={<FindAlbumPage />} />
            <Route path="song" element={<FindSongPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </StoreProvider>
    </div>
  );
}

export default App;
