import React from 'react';
import './progressbar.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProgressBar from "@ramonak/react-progress-bar";
import LightbulbCircleRoundedIcon from '@mui/icons-material/LightbulbCircleRounded';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';

const ProgressChart = () => {
  return (
    <div className='progressbar'>
        <div className="category">
            <h1 className="title">User Category</h1>
            <AddCircleIcon className='icon'/>
        </div>
        
        <div className="admin">
            <div className="admin-wrapper">
                <div className="super-admin">
                        <LightbulbCircleRoundedIcon className='admin-icon' />
                        <h3 className="title">Super Admin 1</h3>
                        <p className="description">19 Users</p>
                </div>
                <div className="bar">
                    <ProgressBar 
                    completed={40}
                    completedClassName="barCompleted1"
                    />
                </div>
            </div>
            <div className="admin-wrapper">
                <div className="super-admin">
                        <SupervisedUserCircleRoundedIcon className='admin-icon orange' />
                        <h3 className="title">Super Admin 2</h3>
                        <p className="description">5 Users</p>
                </div>
                <div className="bar">
                    <ProgressBar 
                    completed={60}
                    completedClassName="barCompleted2"
                    />
                </div>
            </div>
            <div className="admin-wrapper">
                <div className="super-admin">
                        <StarsRoundedIcon className='admin-icon yellow' />
                        <h3 className="title">Super Admin 3</h3>
                        <p className="description">31 Users</p>
                </div>
                <div className="bar">
                    <ProgressBar 
                    height='20px'
                    completed={85}
                    completedClassName="barCompleted3"
                    />
                </div>
            </div>
            
         </div>
       
    </div>
  )
}

export default ProgressChart