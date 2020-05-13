import axios from 'axios';

export const FETCH_COINS_START = 'FETCH_COINS_START';
export const FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS';
export const FETCH_COINS_FAILURE = 'FETCH_COINS_FAILURE';

export const fetchCoins = () => {
    return dispatch => {
        dispatch({ type: FETCH_COINS_START});
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_COINS_SUCCESS, payload: res.data });
    })
    .catch(err => console.log('coin api failed'))
};
};