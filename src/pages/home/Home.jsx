import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from '../../components/charts/Chart';
import Featured from '../../components/featured/Featured';
import ProgressChart from '../../components/progress/ProgressBar';
import Table from '../../components/table/Table';

const Home = () => {
  return (
    <div className='home'> 
    <Sidebar />
    <div className="homeContainer">
        <Navbar />
        <div className="widgets">
            <Widget type='revenue' />
            <Widget type='billers' />
            <Widget type='institutions' />
            <Widget type='users' />
        </div>
        <div className="charts">
            <Chart />
            <Featured />
            <ProgressChart />
        </div>
        <div className="listContainer">
            <div className="listTitle"> 
                 <div className="leftList"> All Institution Transactions</div>
                 <div className="rightList">
                        <div className="search">
                            <input type='text' placeholder='Search for order Id, Billers, Institutions...' />
                            <SearchOutlinedIcon />
                        </div>
                        <div className="listFilter">
                            <div className="filter">
                                <p> Filter By Banks </p>
                                <ArrowDownwardIcon />
                            </div>
                            <div className="filter">
                                <p> Filter By Billers </p>
                                <ArrowDownwardIcon />
                            </div>
                        </div>
                    </div>            
                </div>
            <Table />
        </div>
    </div>
    </div>
  )
}

export default Home