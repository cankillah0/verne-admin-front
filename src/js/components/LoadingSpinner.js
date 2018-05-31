/**
 * Created by me on 3/22/2018.
 */
import React, { Component } from 'react';
import Loader from 'react-loader-spinner'

const divStyle = {
    marginLeft:"35%",
    marginTop:"5.4%",
    marginBottom:"17.4%"
};

class LoadingSpinner extends Component {
    //other logic



    render() {
        return(
            <div style={divStyle}>
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height="100"
                    width="100"
                    margin-top="-100px"
                />
            </div>
        );
    }
}

export default LoadingSpinner;