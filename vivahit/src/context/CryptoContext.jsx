import React, { createContext,  useEffect, useState } from 'react'
  export const Crypto = createContext()
const CryptoContext = ({children}) => {
      const [currency,setCurrency] = useState("usd")
      const [symbol,setSymbol] = useState("₹")
        useEffect(()=>{
      if(currency==="inr"){
          setSymbol("₹")
      }else if (currency==="usd"){
              setSymbol("$")
      }
        },[currency]) 
  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>
   {children}
    </Crypto.Provider>
  )
}

export default CryptoContext



