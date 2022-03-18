import React, { Component } from 'react';
import './hero.css';

class SelectionText extends Component {
    state = {
        clicked: false,
        business: '_',
    };

    render() {
        return (
            <>
                <a className='hero-dropdown-btn' onClick={() => {
                    this.setState({clicked: !this.state.clicked});
                }}>{this.state.business}</a>
                <div className={this.state.clicked ? "hero-dropdown show" : "hero-dropdown"}>
                    <a onClick={() => {
                        this.setState({business: 'Pizzeria', clicked: false})
                    }}>Pizzeria</a>
                    <a onClick={() => {
                        this.setState({business: 'Bagel Shop', clicked: false})
                    }}>Bagel Shop</a>
                    <a onClick={() => {
                        this.setState({business: 'Sandwich Deli', clicked: false})
                    }}>Sandwich Deli</a>
                </div>
            </>
        );
    }
}

export default class Hero extends Component {
    render() {
        return (
            <div className="hero-container">
                <h1>Do Business Better.</h1>
                <p className='hero-subtext'>I am a <SelectionText/>.</p>
            </div>
        );
    }
}