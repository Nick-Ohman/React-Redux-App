import React, {useEffect} from 'react'
import Card from './card'
import { connect } from 'react-redux';


import {fetchCoins} from '../store/actions/index'

const Home = props => {
    console.log('look for me!!!!!!!!!', props.data)

    useEffect(() => {
        props.fetchCoins();
    }, [])
    return (
        <div className="cardforflex">
            
            {props.isFetching && <h3>wait a sec bruh, im fetching</h3>}
            {props.data && (
                <div className="flex">
                    {props.data.map(item => {
                        return (
                            <>
                                <Card item={item} key={item.id}/>
                            </>
                        )
                    })}
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