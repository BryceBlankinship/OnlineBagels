import React, { Component } from 'react';
import { SmallButton } from './buttons.jsx';
import './services.css';

export class ServiceCard extends Component {
    showBtn(){
        const showBtn = this.props.btnTitle ?? false;
        return showBtn ? <SmallButton title={this.props.btnTitle}></SmallButton> : null;
    }

    render(){

        return(
            <div className="service-card">
                <h1>{this.props.title}</h1>
                <p>{this.props.desc}</p>
                {this.showBtn()}
            </div>
        );
    }
}

export default class Services extends Component {
    render(){
        return(
            <div className="service-container">
                <ServiceCard title="Accept Online Orders" desc="
                    Effortlessly accept online orders. Configure your menu for free here.
                " btnTitle="Create Menu"/>
                <ServiceCard title="Zero Transaction Fees" desc="desc2" btnTitle="Show Savings"/>
                <ServiceCard title={["Integrate with", <br></br>, "Third Party Delivery Services"]} desc="Our ordering system works directly with the DoorDash, Uber Eats, & Slice systems so you can easily keep all transactions in one view." btnTitle="Start Integration"/>
            </div>
        );
    }
}