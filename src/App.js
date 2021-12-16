import './App.css'
import Header from "./Components/Header";
import CollectionCard from './Components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './Components/PunkList';
import Main from './Components/Main';
function App() {
  const [punklistData, setPunklistData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0)
  useEffect(()=>{
const getMyNfts = async () => {
  const openseaData= await axios.get(
    'https://testnets-api.opensea.io/assets?asset_contract_address=0xfc57397D0DA7DFFd4089df7b3F0Aa650795BFF5b&order_direction=asc'
  )
  setPunklistData(openseaData.data.assets)
  
  }
    return getMyNfts();
},[])
  return (

    <div className="app">
    <Header />
    {
      punklistData.length > 0 && (
        <>       
         <Main punklistData={punklistData} selectedPunk={selectedPunk} />
        <PunkList punklistData={punklistData} setSelectedPunk={setSelectedPunk} />
        </>

      )
    }
   
    </div>
  );  
}

export default App;
