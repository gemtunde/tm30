import React from 'react';
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ReportIcon from '@mui/icons-material/Report';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
     <div className="top">
        <span className="logo"> gemtunde</span>
     </div>
        <hr />
     <div className="center">
        <ul>
            <li className='dashboard'>
                <DashboardIcon className='icon' />
                <span> <Link to='/' style={{textDecoration:'none'}}> Dashboard</Link></span> 
            </li>
              <li>
                <SummarizeIcon  className='icon'/>
                <span> <Link to='/user/new' style={{textDecoration:'none'}}>Add New</Link></span> 
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
                <PersonAddAltIcon  className='icon'/>
                <span><Link to='/user' style={{textDecoration:'none'}}> Users</Link></span> 
            </li>
             <li>
                <DashboardIcon  className='icon'/>
                <span><Link to='/user/2' style={{textDecoration:'none'}}>Transactions </Link></span> 
            </li>
            <li>
                <AssessmentIcon  className='icon'/>
                <span>Reporting</span> 
            </li>            
            <li>
                <PowerSettingsNewIcon  className='icon'/>
                <span className='logout'>Logout</span> 
            </li>
        </ul>
     </div>
     <div className="bottom">
        <div className="bottom1">
             <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnBtoJahaHrbvU_9PwuDquYb46Jh0uHf20w&usqp=CAU'
                    alt='cr7'
                  />
        </div>
        <div className="bottom2">
            <h2 className="title">Mo Salah</h2>
            <p className="description">Super Admin</p>
        </div>
        <ArrowDownwardIcon />
     </div>
        </div>
  )
}

export default Sidebar