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

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Home = () => {
     const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

     const [value, setValue] = React.useState('1');
      const data =[
        {
            id:12323,
            institution:'Access Bank',
            biller:'FRSC',
            order: 'Driver License',
            date: '24/07/2021',
            amount: 2349800,
            status: 'Pending'
        },
        {
            id:922323,
            institution:'Eco Bank',
            biller:'WAEC',
            order: 'National Id',
            date: '4/08/2021',
            amount: 9009800,
            status: 'Successful'
        },
        {
            id:229323,
            institution:'GTBank',
            biller:'PHCN',
            order: 'Electricity Bill',
            date: '2/09/2021',
            amount: 49800,
            status: 'Failed'
        },
        {
            id:832323,
            institution:'First Bank',
            biller:'OAU',
            order: 'School Fee',
            date: '24/07/2021',
            amount: 5649800,
            status: 'Pending'
        },
        {
            id:219023,
            institution:'Polaris Bank',
            biller:'NECO',
            order: 'School form',
            date: '03/03/2021',
            amount: 27409800,
            status: 'Successful'
        },
        {
            id:900323,
            institution:'Unity Bank',
            biller:'Tax',
            order: 'Driver License',
            date: '30/01/2021',
            amount: 339800,
            status: 'Failed'
        },
        {
            id:505090,
            institution:'Zenith Bank',
            biller:'Hospital Bill',
            order: 'Voters Card',
            date: '14/08/2021',
            amount: 2349800,
            status: 'Pending'
        },
    ];

    //successful transactions
    const successData = data.filter(item => item.status === 'Successful');
    //console.log(successData)

    //pending transactions
    const pendData = data.filter(item => item.status === 'Pending');
   

    //failed transactions
    const failedData = data.filter(item => item.status === 'Failed');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

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
                           <FormControl style={{width:'150px'}}>
                                <InputLabel id="demo-simple-select-label"> Filter by Banks</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                    <MenuItem value={10}>GTBank</MenuItem>
                                    <MenuItem value={20}>UBA</MenuItem>
                                    <MenuItem value={30}>Access</MenuItem>
                                </Select>
                        </FormControl>
                           <FormControl style={{width:'150px'}}>
                                <InputLabel id="demo-simple-select-label"> Filter by Billers</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                    <MenuItem value={10}>WAEC</MenuItem>
                                    <MenuItem value={20}>PHCN</MenuItem>
                                    <MenuItem value={30}>TAX</MenuItem>
                                </Select>
                        </FormControl>
                        </div>
                    </div>            
                </div>
                <TabContext value={value}>
        <div style={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="All Transactions" value="1" />
            <Tab label="Successful" value="2" />
            <Tab label="Pending" value="3" />
            <Tab label="Failed" value="4" />
          </TabList>
        </div>
        <TabPanel value="1"><Table rows={data} /></TabPanel>
        <TabPanel value="2"><Table rows={successData}/> </TabPanel>
        <TabPanel value="3"><Table rows={pendData} /> </TabPanel>
        <TabPanel value="4"><Table rows={failedData} /> </TabPanel>
      </TabContext>
            
        </div>
    </div>
    </div>
  )
}

export default Home