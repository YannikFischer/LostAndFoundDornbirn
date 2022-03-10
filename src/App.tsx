import React from "react";
import "./App.scss";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Lost from "./pages/Lost/Lost";
import Found from "./pages/Found/Found";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import Preview from "./pages/Preview/Preview";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lost" element={<Lost />} />
          <Route path="/found" element={<Found />} />
          <Route path="/items/:id" element={<Preview />} />
          <Route path="*" element={() => <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
