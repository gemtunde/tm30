import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="top">
        <span className="logo"> tm30</span>
     </div>
        <hr />
     <div className="center">
        <ul>
            <li>
                <DashboardIcon />
                <span>Dashboard</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Users</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Orders</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Stats</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Notifications</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Logs</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Institutions</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Billers</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Reporting</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Transactions</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Setting</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Profile</span> 
            </li>
            <li>
                <DashboardIcon />
                <span>Logout</span> 
            </li>
        </ul>
     </div>
     <div className="bottom">toggle options</div>
        </div>
  )
}

export default Sidebar