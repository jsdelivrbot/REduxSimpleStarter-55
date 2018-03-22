import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyDs42uomAE3Nplfy83QvZssQ0tzOwC8e20';

const App = () => {
  return (<div>
    <SearchBar />
  </div>
  );
}

ReactDom.render(<App />, document.querySelector('.container'));