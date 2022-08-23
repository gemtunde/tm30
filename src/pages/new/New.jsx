import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './new.scss'

const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">Add New User</h1>

        </div>
        <div className="bottom">
          <div className="left">
             <img
                    src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                    alt='img'
                  />
            </div>
          <div className="right">right</div>
        </div>
        </div> 
         </div>
  )
}

export default New