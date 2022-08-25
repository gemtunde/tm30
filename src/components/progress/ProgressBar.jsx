import React from 'react';
import './progressbar.scss'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProgressBar from "@ramonak/react-progress-bar";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


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
                        <AccountBalanceIcon className='admin-icon' />
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
                        <PeopleAltIcon className='admin-icon orange' />
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
                        <AccountBalanceWalletIcon className='admin-icon yellow' />
                        <h3 className="title">Bank Admin </h3>
                        <p className="description">231 Users</p>
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
         <div className="category">
            <h3>View all</h3>            
        </div>
    </div>
  )
}

export default ProgressChart