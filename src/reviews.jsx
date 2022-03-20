import React, { Component } from 'react';

export function ReviewHero(){
    return(
        <div className='review-hero-container'>
            <div className="review-hero">
                reviewhero
            </div>
        </div>
    );
}

export function ReviewCard(){
    // going to be very similar to the servicecard
    return(
        <>
            reviewcard
        </>
    );
}

export default function Reviews(){
    return(
        <>
            <ReviewHero />
            <ReviewCard />
        </>
    );
}
