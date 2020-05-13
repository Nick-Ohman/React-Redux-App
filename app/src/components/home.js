import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {fetchCoins} from '../store/actions/index'

const Home = props => {
    console.log('look for me!!!!!!!!!', props.data)

    useEffect(() => {
        props.fetchCoins();
    }, [])
    return (
        <div>
            <h1>The Pump and Dump Space</h1>
            {props.isFetching && <h3>wait a sec bruh, im fetching</h3>}
            {props.data && (
                <div>
                    <h3>{props.data.map(item => {
                        return (
                            <div>
                                <h1>{item.name}</h1>
                                <img src={item.image}/>
                            </div>
                        )
                    })}hello</h3>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    console.log("this is MSTP", state);
    return{
        isFetching: state.isFetching,
        data: state.data
    };
};


export default connect(mapStateToProps, { fetchCoins })(Home);