import React from 'react'
import styled from 'styled-components'


const Card = props => {
    return (
        <div className="card">
                    <img src={props.item.image} />
                    <h1>{props.item.name}</h1>
                    <h2>{props.item.symbol}</h2>
                    <p>Current Price: ${props.item.current_price}</p>
                    <p>Market Cap: {props.item.market_cap_rank}</p>
            
        </div>
    )
}

export default Card;