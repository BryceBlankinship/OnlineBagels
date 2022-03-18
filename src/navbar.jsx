import React, { Component } from 'react';

export default class Navbar extends Component {
    state = {
        option: 0,
    };

    render(){
        return(
            <div class="topnav">
            <a className={this.state.option === 0 ? 'active' : ''} onClick={() => {
                this.setState({option: 0});
            }}>Home</a>
            <a className={this.state.option === 1 ? 'active' : ''} onClick={() => {
                this.setState({option: 1});
            }}>Services</a>
            <a className={this.state.option === 2 ? 'active' : ''} onClick={() => {
                this.setState({option: 2});
            }}>Contact</a>
            <a className={this.state.option === 3 ? 'active' : ''} onClick={() => {
                this.setState({option: 3});
            }}>Login</a>
            </div>
        );
    }
}