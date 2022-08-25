import React from 'react';
import Chart from '../../components/charts/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ListTable from '../../components/table/Table';
import './single.scss';

const Single = () => {
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
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
          <Navbar />
          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
                <h1 className="title">Information</h1>
                <div className="item">
                 <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnBtoJahaHrbvU_9PwuDquYb46Jh0uHf20w&usqp=CAU'
                    alt='cr7'
                    className='itemImg'
                  />
                  <div className="details">
                      <h1 className="itemTitle">Cristiano Ronaldo</h1>
                      <div className="detailItem">
                        <span className="itemKey">Transaction:</span>
                        <span className="itemValue">8987</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Billers:</span>
                        <span className="itemValue">Waec</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Orders:</span>
                        <span className="itemValue">87933</span>
                      </div>
                      <div className="detailItem">
                        <span className="itemKey">Date:</span>
                        <span className="itemValue">8/7/2033</span>
                      </div>
                  </div>
                </div>
            </div>
            <div className="right" width='100%' aspect={4/1}>
                <Chart />
            </div>
          </div>
          <div className="bottom">
            <h1 className="title">Last Transactions</h1>
              <ListTable rows={data} />
          </div>
      </div>
      </div>

  )
}

export default Single