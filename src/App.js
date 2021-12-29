import React,{ useState, useRef, useEffect} from 'react';
import Order from './component/order';

const Dashboard = () =>{
  return(
    <div className="dashboard">
      <div className='brand'>
        <img className='brand__logo' src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/ece9e898f6e0d9e04d8c2943d0e6f851.jpg" alt='logo' />
      </div>
      <Order />
    </div>
  )
}

export default Dashboard;