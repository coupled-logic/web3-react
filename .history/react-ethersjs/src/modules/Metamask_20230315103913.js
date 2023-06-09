import React, { Component } from 'react';
import nrwlConfig from './modules/nrwlConfig';
const ethers = require("ethers")

class Metamask extends Component {
    constructor(props) {
        super(props);
    }

    async connectToMetamask() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        this.setState({ selectedAddress: accounts[0] })
    }
    renderMetamask() {
        if (!this.state.selectedAddress) {
            return (
            <button onClick={() => this.connectToMetamask()}>Connect to Metamask</button>
            )
        } else {
            return (
            <p>Welcome {this.state.selectedAddress}</p>
            );
        }
    }


    render() {
        return(
        <div>
            {this.renderMetamask()}
        </div>
        )
    }
}

export default Metamask;