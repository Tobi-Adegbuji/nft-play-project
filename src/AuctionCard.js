import React from "react";
import "./AuctionCard.css";

function AuctionCard({ ownerAsset }) {

//If text is too long, it will shorten the text
function truncate(str, n){
  const limitedWord = str?.length > n ? str.substr(0, n-1) + "..." : str; 
  return limitedWord.replace(/(\r\n|\n|\r)/gm, ""); 
}

console.log(ownerAsset)

  return (
    <div className="auction">
      <div className="auction-image">
      <img src={ownerAsset.image_url}></img>
      <div className="auction-timer">12: 43m: 10s</div>
      </div>

      <div className="auction-profile">
        <img className="auction-avatar"  src={ownerAsset.collection.image_url}/>
        <div className="auction-info">
          <h4>{ownerAsset.name}</h4>
          <p>{ownerAsset.creator.user != null || ownerAsset.creator.user == " "
          ? ownerAsset.creator.user.username : ""}</p>
        </div>
      </div>

      <div className="auction-bid-info">
        <p>Current Bid</p>
        <div className="auction-pricing">
          <h5 className="auction-eth">{ownerAsset.last_sale === null ? "Never Sold" : "TBA"}</h5>
          <h5 className="auction-dollars">{ownerAsset.last_sale === null ? "" : `${
             (Math.round(ownerAsset.last_sale.payment_token.usd_price * 100) / 100).toFixed(2)
            } USD`}</h5>
        </div>
      </div>
    </div>
  );
}

export default AuctionCard;
