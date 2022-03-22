import React, { Component } from 'react';
import './buttons.css';

export default class Button extends Component {
    // Buttons will accept functions for onClick handling as props
    render(){
        return(
            <button className='btn-default' onClick={this.props.onClick}>{this.props.title}</button>
        );
    }
}

export class SmallButton extends Component {
    render(){
        return(
            <button className='btn-small' onClick={this.props.onClick}>{this.props.title}</button>
        );
    }
}