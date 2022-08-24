import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import './new.scss'

const New = () => {

  const [file, setFile] = useState('');
  console.log(file);

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
                    src={
                      file ? 
                    URL.createObjectURL(file)
                    :'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                    }
                    alt='img'
                  />
            </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label>Transaction</label>
                <input type='text' placeholder='transaction'  />
              </div>
              <div className="formInput">
                <label>Billers</label>
                <input type='text' placeholder='billers'  />
              </div>
              <div className="formInput">
                <label>Institutions</label>
                <input type='text' placeholder='institution'  />
              </div>
              <div className="formInput">
                <label>Amount</label>
                <input type='text' placeholder='amount'  />
              </div>
              <div className="formInput">
                <label>Date</label>
                <input type='text' placeholder='date'  />
              </div>
              <div className="formInput">
                <label htmlFor='file'> Upload: <UploadFileIcon className='icon' /> </label>
                <input type='file' id='file' onChange={e=>setFile(e.target.files[0])} hidden />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
        </div> 
         </div>
  )
}

export default New