import React from "react";
import "./index.css";
import Beranda from "./routes/Beranda";
import Profil from "./routes/Profil";
import Berita from "./routes/Berita";
import Prestasi from "./routes/Prestasi";
import Galeri from "./routes/Galeri";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/prestasi" element={<Prestasi />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
    </div>
  );
}

export default App;
