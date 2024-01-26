import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <div className='centered-container'>
        <button className='centered-button'>Browse all products</button>
      </div>
      <Newsletter />
    </div>
  );
}

export default App;