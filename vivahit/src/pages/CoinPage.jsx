import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CoinObject } from "../component/function/CoinObject";
import { Spinner } from "../component/Spinner/Spinner";
import { List } from "../component/List/List";
import { useParams } from "react-router-dom";
import CoinInfo from "../component/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../component/function/GetData";
import { Crypto } from "../context/CryptoContext";
import { getCoinPrice } from "../component/function/getCoinPriceData";
import LineChart from "../component/LineChart/LineChart";
import { gettingDate } from "../component/function/GetConvertDate";
import SelectDays from "../component/Coin/SelectDays/SelectDays";

export const CoinPage = () => {
  const { id } = useParams();
  const [days, setDays] = useState(30);
  const { currency } = useContext(Crypto);
  const [chartData, setChartData] = useState({});
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id,days,currency]);
  async function getData() {
    const coinData = await getCoinData(id);
    if (coinData) {
      CoinObject(coinData, setCoin);
      const prices = await getCoinPrice(id, days, currency);
      if (prices.length > 0) {
        setChartData({
          labels: prices.map((price)=> gettingDate(price[0])),
          datasets: [
            {
              data:  prices.map((price)=>price[1]),  
              borderWidth: 1,
              fill: false,
              backgroundColor: "rgba(58, 128, 233,0.1)",
              tension: 0.25,
              borderColor: "#3a80e9",
              pointRadius: 0,
            },
          ],
        });
      }
      setLoading(false);
    }
  }
  const handleDaysChange = async (event) => {
    setLoading(true);
    setDays(event.target.value);
    const prices = await getPrices(id, event.target.value, priceType, setError);
    if (prices) {
      settingChartData(setChartData, prices);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="grey-wrapper">
          <List coin={coin} />
        </div>
      )}
        {!loading &&  <div className="grey-wrapper">
           <SelectDays handleDaysChange={handleDaysChange} days={days} />
        <LineChart chartData={chartData}/>
      </div>}
     
      {!loading && <CoinInfo heading={coin.name} desc={coin.desc} />}
    </>
  );
};
