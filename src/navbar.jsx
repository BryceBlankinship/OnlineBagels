import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar(){
    const [option, setOption] = useState(0);
    const navigate = useNavigate();

        return(
            <div className="topnav">
            <a className={option === 0 ? 'active' : ''} onClick={() => {
                setOption(0);
                navigate('/');
            }}>Home</a>
            <a className={option === 1 ? 'active' : ''} onClick={() => {
                setOption(1);
                navigate('/services');
            }}>Services</a>
            <a className={option === 2 ? 'active' : ''} onClick={() => {
                setOption(2);
                navigate('/reviews');
            }}>Reviews</a>
            <a className={option === 3 ? 'active' : ''} onClick={() => {
                setOption(3);
                navigate('/auth');
            }}>Login</a>
            </div>
        );
}