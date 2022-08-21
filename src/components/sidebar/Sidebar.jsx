import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReportIcon from '@mui/icons-material/Report';
import SummarizeIcon from '@mui/icons-material/Summarize';

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="top">
        <span className="logo"> tm30</span>
     </div>
        <hr />
     <div className="center">
        <ul>
            <li className='dashboard'>
                <DashboardIcon className='icon' />
                <span>Dashboard</span> 
            </li>
            <li>
                <PersonAddAltIcon  className='icon'/>
                <span>Users</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Orders</span> 
            </li>
            <li>
                <SummarizeIcon  className='icon'/>
                <span>Stats</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Notifications</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Logs</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Institutions</span> 
            </li>
            <li>
                <ReportIcon  className='icon'/>
                <span>Billers</span> 
            </li>
            <li>
                <AssessmentIcon  className='icon'/>
                <span>Reporting</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Transactions</span> 
            </li>
            <li>
                <SettingsIcon  className='icon'/>
                <span>Setting</span> 
            </li>
            <li>
                <DashboardIcon  className='icon'/>
                <span>Profile</span> 
            </li>
            <li>
                <PowerSettingsNewIcon  className='icon'/>
                <span className='logout'>Logout</span> 
            </li>
        </ul>
     </div>
     <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
     </div>
        </div>
  )
}

export default Sidebar