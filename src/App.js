import './App.css'
import Header from "./Components/Header";
import CollectionCard from './Components/CollectionCard';
import {useState, useEffect} from './react'
function App() {
  return (

    <div className="app">
    <Header />
    <CollectionCard 
    id={0}
     name={'Eye Op Punk'}
     traits={[{value:5}]} 
     image='https://ipfs.thirdweb.com/ipfs/bafkreiasgnibw32isqfyjnv5lhj4wxzp6izayculjlo4ampmmfla3j4tj4' />
    </div>
  );  
}

export default App;
