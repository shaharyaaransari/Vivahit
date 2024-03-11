import axios from "axios";

export const getCoinPrice = (id, days = 365, currency) =>{
    const prices =  axios
        .get(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        )
        .then((res) => {
              
          return res.data.prices
            
        })
        .catch((err) => {
            
          console.log(err);
        });
       return prices
}
  ;