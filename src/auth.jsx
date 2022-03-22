import React, { Component, useState } from 'react';
import './auth.css';
import { SmallButton } from './buttons';

export default class AuthHandler extends Component {
    render(){
        return(
            <>
                Lets get some data in a server :D
                <br></br>
                <br></br>
                Should I create a rest api in javascript, typescript, or golang?
                <br></br>
                <br></br>
                Im lazy so javascript :D

                <AuthView/>
            </>
        );
    }
}

export function AuthView(){       
    const [signin, setSignin] = useState(false);

    if(!signin){
        return(
            <div className='authcontainer'>
                <div className='bordercontainer'>
                    <h1 className='auth-title'>Sign In</h1>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <a style={{cursor: 'pointer', color: 'blue', marginLeft: '-65px', fontSize: '14px'}} onClick={() => {
                        setSignin(true);
                    }}>Sign Up Instead?</a>
                    <SmallButton title="Sign In"/>
                </div>
            </div>
        );
    }else{
        return(
            <div className='authcontainer'>
                <div className='bordercontainer'>
                    <h1 className='auth-title'>Sign Up</h1>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <a style={{cursor: 'pointer', color: 'blue', marginLeft: '-65px', fontSize: '14px'}} onClick={() => {
                        setSignin(false);
                    }}>Sign In Instead?</a>
                    <SmallButton title="Sign Up" onClick={() => {
                        console.log('clicked sign up btn')
                    }}/>
                </div>
            </div>
        );
    }

}

