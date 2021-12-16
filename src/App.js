import './App.css'
import Header from "./Components/Header";
import CollectionCard from './Components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList';
function App() {
  const [punklistData, setPunklistData] = useState([]);
  useEffect(()=>{
const getMyNfts = async () => {
  const openseaData= await axios.get(
    'https://testnets-api.opensea.io/assets?asset_contract_address=0xfc57397D0DA7DFFd4089df7b3F0Aa650795BFF5b&order_direction=asc'
  )
  console.log(openseaData.data.assets);
  setPunklistData(openseaData.data.assets)
  
  }
    return getMyNfts();
},[])
  return (

    <div className="app">
    <Header />
    <PunkList punklistData={punklistData}/>
    </div>
  );  
}

export default App;
