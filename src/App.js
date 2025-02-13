import React from 'react';
import './css/styles.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='main-container'>
      <Header />
      {/* <Main />
      <Footer /> */}
    </div>
  );
};

export default App; // Exporting the App component
