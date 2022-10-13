import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import { TokenProvider } from "./contexts/AuthContext";
import Featured from "./pages/featured";
import Albums from "./pages/albums";
import Playlists from "./pages/playlists";
import Categories from "./pages/categories";
import Album from "./pages/album";
import Playlist from "./pages/playlist";
import Category from "./pages/category";
import { PlayerProvider } from "./contexts/PlayerContext";
import Playing from "./pages/playing";
import { ThemeProvider } from "./contexts/ThemeContext";
import Search from "./pages/search";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <TokenProvider>
          <PlayerProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<App />}>
                <Route path="/albums" element={<Albums />} />
                <Route path="/albums/:id" element={<Album />} />
                <Route path="/playlists" element={<Playlists />} />
                <Route path="/playlists/:id" element={<Playlist />} />
                <Route path="/featured" element={<Featured />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:id" element={<Category />} />
                <Route path="/search" element={<Search />} />
                <Route path="/playing" element={<Playing />} />
              </Route>
              <Route path="*" element={<Login />} />
            </Routes>
          </PlayerProvider>
        </TokenProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
