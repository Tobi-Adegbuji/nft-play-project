import './App.css';
import AuctionCard from './AuctionCard'; 
import AuctionRow from './AuctionRow';


// https://dribbble.com/shots/16892110-XCRYP-NFT-Marketplace-Dashboard

function App() {
  return (
    <div className="App">
      <AuctionRow assetOwnerAddress={"0x78b5887b94b7ac26b536dac7e829ecde355b48a2"}/>
    </div>
  );
}

export default App;
