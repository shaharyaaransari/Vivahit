import React, { useContext } from "react";
import "./Grid.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
  
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Crypto } from "../../context/CryptoContext";
export const Grid = ({ coin }) => {
  const {  currency,symbol } = useContext(Crypto);
  
  return (
    <div className={`grid-container ${coin.price_change_percentage_24h <0&& "grid-container-red"}`}>
      <div className="info-flex">
        <img src={coin.image} alt="coin-logo" className="coin-logo" />
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
       
      </div>
      {coin.price_change_percentage_24h >0 ?(<div className="chip-flex">
          <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
             <div className="icon-chip">
    < TrendingUpRoundedIcon/>
             </div>
        </div>):(<div className="chip-flex ">
          <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
             <div className="icon_chip_red"> 
<TrendingDownRoundedIcon/>
             </div>
        </div>)}
          <div className="info-container">
          <h3 className="coin-price" style={{color:coin.price_change_percentage_24h >0?'var(--green)':'var(--red)'}}>{  `${symbol}${coin.current_price.toLocaleString()}`}</h3>
          </div>
         <p className="total-volume">Market Cap : {coin.market_cap.toLocaleString()}</p>
         <p className="total-volume">Total Volume : {coin.total_volume.toLocaleString()}</p>
    </div>
  );
};
