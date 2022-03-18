import React, { Component } from 'react';
import './buttons.css';

export default class Button extends Component {
    // Buttons will accept functions for onClick handling as props
    render(){
        return(
            <button className='btn-default'>{this.props.title}</button>
        );
    }
}

export class SmallButton extends Component {
    render(){
        return(
            <button className='btn-small'>{this.props.title}</button>
        );
    }
}