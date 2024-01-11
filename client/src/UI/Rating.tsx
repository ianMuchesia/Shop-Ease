import React from 'react'
import { IoStar, IoStarHalfOutline } from 'react-icons/io5';

interface RatingProps {
    rating: number;
   
    }

const Rating = ({rating}:RatingProps) => {
 

    if (rating === 5 ){
        return (
            <div className="showcase-rating">
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            </div>
        )
    }else if (rating === 4) 
        return (
            <div className="showcase-rating">
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStarHalfOutline className="ion-icon"/>
            </div>
        )
    else{
        return (
            <div className="showcase-rating">
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStar className="ion-icon"/>
            <IoStarHalfOutline className="ion-icon"/>
            <IoStarHalfOutline className="ion-icon"/>
            </div>
        )
    }


    
}

export default Rating