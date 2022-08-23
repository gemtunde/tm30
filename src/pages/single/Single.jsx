import React from 'react';
import Chart from '../../components/charts/Chart';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import ListTable from '../../components/table/Table';
import './single.scss';

const Single = () => {
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
              <ListTable />
          </div>
      </div>
      </div>
  )
}

export default Single