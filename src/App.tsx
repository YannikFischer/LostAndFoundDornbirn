import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lost from './pages/Lost/Lost';
import Found from './pages/Found/Found';
import Navbar from './pages/NavBar/NavBar';
import Footer from './pages/Footer/Footer';
import Preview from './pages/Preview/Preview';
import MainPage from './pages/MainPage/MainPage';
import ItemList from './pages/ItemList/ItemList';
import Test from './pages/testing/Test';

function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/lost' element={<Lost />} />
          <Route path='/found' element={<Found />} />
          <Route path='/itemList' element={<ItemList />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/test' element={<Test />} />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
