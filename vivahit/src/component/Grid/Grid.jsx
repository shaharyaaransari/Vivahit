import React from 'react'
import "./Grid.css"
export const Grid = ({coin}) => {
  return (
    <div className='grid-container'>
            <div className='info-flex'>
         <img src={coin.image} alt="coin-logo" className='coin-logo'/>
                 <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                 </div>
            </div>
</div>
  )
}
