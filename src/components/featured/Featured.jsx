import React from 'react';
 //import { CircularProgressbar } from 'react-circular-progressbar';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
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
                {/* <CircularProgressbar 
                value={65} 
                text={` 65%` } 
                strokeWidth={10}/> */}

                   <CircularProgressbarWithChildren
        value={55}
        styles={buildStyles({
         
          pathColor: '#610a61',
          trailColor: "#eee",
          strokeLinecap: "butt"
        })}
      >
        {/* Foreground path */}
        <CircularProgressbar
          value={15}
          text={` 65%`}          
          styles={buildStyles({
           pathColor: '#d34aa1',
            trailColor: "transparent",
            strokeLinecap: "butt",
             textSize: "12px",
              textColor: "black",
          })}
        />       
      </CircularProgressbarWithChildren>
            </div>
        </div>
        
    </div>
  )
}

export default Featured