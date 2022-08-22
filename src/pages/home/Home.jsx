import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';

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
            <div className="listTitle"> All Institution Trasactions</div>
            <Table />
        </div>
    </div>
    </div>
  )
}

export default Home