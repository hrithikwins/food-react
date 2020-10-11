
import React from 'react';
import { MainPage } from "./views/main-page";
import BottomNavigationBar from './views/Components/bottom-navigation';
import TemporaryDrawer from './views/Components/sidebar';

function App() {
  return (
    <>
      <TemporaryDrawer />
      <MainPage />
      <BottomNavigationBar />
    </>
  );
}

export default App; 
