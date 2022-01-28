import './AuctionRow.css';
import AuctionCard from './AuctionCard';
import React, {useState, useEffect} from "react";
import axios from 'axios';


function AuctionRow({assetOwnerAddress}){

  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const response = await axios.get(
          `https://api.opensea.io/api/v1/assets?owner=${assetOwnerAddress}&limit=50`, 
          {
            headers: {
              "Content-Type": "application/json",
              "X-API-KEY": "927abc5a5ca5470da62e47980ff5d676"}
          }
        );
        setNfts(response.data.assets);
        return response;
    }
    fetchData();
}, [assetOwnerAddress]);



  return( 
  <div className='auction-row'>
      <div className='auction-row-title-bar'>
        <h3>Hot Auctions</h3>
        <div className='auction-row-choices'>

        </div>
      </div>
      <div className='auction-row-cards'>
        {nfts.map((asset, index) => {
          return (
            <AuctionCard key={index} ownerAsset = {asset}/>
          );
        })}
      </div>
  </div>
    );
}

export default AuctionRow;
