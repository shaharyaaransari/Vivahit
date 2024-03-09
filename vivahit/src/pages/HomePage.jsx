import React, { useContext, useEffect, useState } from "react";
import TabsComponent from "../component/Tabs/TabsComponent";
import axios from "axios";
import { Crypto } from "../context/CryptoContext";
export default function HomePage() {
  const [coins, setCoins] = useState([]);
  const { currency } = useContext(Crypto);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
        console.log(res.data);
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <TabsComponent coins={coins}/>
    </div>
  );
}
