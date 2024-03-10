import React, { useContext } from "react";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Crypto } from "../../context/CryptoContext";
    import "./List.css"
export const List = ({ coin }) => {
  const { symbol } = useContext(Crypto);
 
  return (
    <tr className="list-row">
      <td className="td-img">
        <img src={coin.image} alt="coin-logo" className="coin-logo coin-image-td" />
        </td>
          <td className="td-info">
          <div className="name-col info-flex">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
          </td>
        
      
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
      <td>
        <p className="total-volume">
         {coin.market_cap.toLocaleString()}
        </p>
      </td>
      <td>
        {" "}
        <p className="total-volume">
          {coin.total_volume.toLocaleString()}
        </p>
      </td>
    </tr>
  );
};
