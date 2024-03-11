import React, { useContext, useEffect, useState } from "react";
import TabsComponent from "../component/Tabs/TabsComponent";
import axios from "axios";
import { Crypto } from "../context/CryptoContext";
import Search from "../component/Search/Search";
import PaginationComponent from "../component/Pagination/Pagination";
import { Spinner } from "../component/Spinner/Spinner";

export default function HomePage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const { currency } = useContext(Crypto);
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
const [laoding,setLoading] = useState(true)
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((res) => {
      
        setCoins(res.data);
          console.log(res.data)
        setPaginatedCoins(res.data.slice(0, 10));
          setLoading(false)
      })
      .catch((err) => {
           setLoading(false)
        console.log(err);
      });
  }, []);
  const handleChange = (e) => {
    setSearch(e.target.value);
   
  };
  var filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );
  const handlePageChange = (event, value) => {
    setPage(value);
    // Value = new page number
    var initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
      
  };

  return (
    <div>
        <Search search={search} handleChange={handleChange}/>
          {laoding ?<Spinner/>:<TabsComponent    coins={search ? filteredCoins : paginatedCoins}/>}
      
      {!search && !laoding &&(
            <PaginationComponent
              page={page}
              handlePageChange={handlePageChange}
            />
          )}
    </div>
  );
}
