import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TambahAgenda from "./pages/TambahAgenda";
import Users from "./pages/Users";
import DaftarPiket from "./pages/DaftarPiket";
import TambahPiket from "./pages/TambahPiket";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tambahagenda" element={<TambahAgenda />} />
            <Route path="/users" element={<Users />} />
            <Route path="/daftarpiket" element={<DaftarPiket />} />
            <Route path="/tambahpiket" element={<TambahPiket />} />
          </Routes>
          <div></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
