import React, { useContext } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Crypto } from "../../context/CryptoContext";
    import "./List.css"
import { Tooltip } from "@mui/material";
import { convertNumber } from "../function/ConvertNumber";
import { Link } from "react-router-dom";
export const List = ({ coin }) => {
  const { symbol } = useContext(Crypto);
 
  return (
    <Link to={`/coins/${coin.id}`}>
 <tr className="list-row">
        <Tooltip title="Coin Logo"   placement="bottom-start">
        <td className="td-img">
        <img src={coin?.image} alt="coin-logo" className="coin-logo coin-image-td" />
        </td>
        </Tooltip>
      <Tooltip title="Coin Info"   placement="bottom-end">
      <td className="td-info">
          <div className="name-col info-flex">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
          </td>
      </Tooltip>
         
        <Tooltip    title="Coin Price Percentage In 24hrs"   placement="bottom-start">
        {coin.price_change_percentage_24h > 0 ? (
        <td className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-chip-icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className="chip-flex ">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon_chip_red td-chip-icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
        </Tooltip>
        <Tooltip title="Coin Price In USD"   placement="bottom-start">
        <td >
        <h3
          className="coin-price td-current-price"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >{`${symbol}${coin.current_price.toLocaleString()}`}</h3>
      </td>
        </Tooltip>
      
      <Tooltip title="Market Cap"   placement="bottom-start">
      <td>
        <p className="total-volume">
         { convertNumber(coin.market_cap)}
        </p>
      </td>
      </Tooltip>
        
     <Tooltip title="Total Volume"   placement="bottom-start">
     <td>
        {" "}
        <p className="total-volume">
          {  convertNumber(coin.total_volume)}
        </p>
      </td>
     </Tooltip>
     
    </tr>
    </Link>
   
  );
};
