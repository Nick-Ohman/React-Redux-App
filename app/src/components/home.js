import React from 'react'
import { connect } from 'react-redux';

const Home = () => {
    return (
        <div>
            <h1>Pump and Dump Space</h1>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return{

    };
};


export default connect(mapStateToProps, {})(Home);