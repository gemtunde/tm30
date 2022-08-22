import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Billers</h1>
            <p className="description"> billers that joined over the month</p>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar 
                value={65} 
                text={` 65%` } 
                strokeWidth={10}/>
            </div>
        </div>
        
    </div>
  )
}

export default Featured