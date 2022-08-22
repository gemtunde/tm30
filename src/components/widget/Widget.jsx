import React from 'react';
import './widget.scss'
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded';

const Widget = ({type}) => {
    let data;

    switch(type){
        case 'revenue':
            data = {
                name:'Total Revenue',
                amount: 10000000,
                icon : <DashboardIcon  className='avatar'/>,
                title: '37% this month',
                titleIcon:<ArrowUpwardRoundedIcon/>,
                className: 'widget blue',
            }
                break;
        case 'billers':
            data = {
                name:'Total Billers',
                amount: 145,
                icon : <PlaylistAddCheckCircleRoundedIcon  className='avatar'/>,
                title: '2% this month',
                titleIcon:<ArrowDownwardRoundedIcon/>,
                className: 'widget orange',
            }
                break;
        case 'institutions':
            data = {
                name:'Total Institutions',
                amount: 63,
                icon : <SettingsIcon  className='avatar'/>,
                title: '11% this month',
                titleIcon:<ArrowUpwardRoundedIcon/>,
                className: 'widget green',
            }
                break;
        case 'users':
            data = {
                name:'Total Users',
                amount: 689,
                icon : <PowerSettingsNewIcon  className='avatar'/>,
                title: '17% this month',
                titleIcon:<ArrowDownwardRoundedIcon/>,
                className: 'widget yellow',
            }
                break;
            default:
                break;

    }

  return (
    <div className={data.className}>
        <div className="left">
          {data.icon}
            </div>
        <div className="right">
           <span className="total">{data.name}</span>
           <span className="amount">{data.amount}</span>
           <span className="month">
            {data.titleIcon}{data.title}</span>
            </div>
    </div>
  )
}

export default Widget