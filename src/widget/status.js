import React from 'react';
import * as Const from './../util/const';

const Status = ({status}) => {
	switch (status) {
    case Const.status.ACCEPTED:
      return(
        <div className='filter__report filter__report--margin'>
          <span className='status--accepted'>Accepted</span>
        </div>
      )
    case Const.status.CREATED:
      return(
        <div className='filter__report filter__report--margin'>
          <span className='status--created'>Created</span>
        </div>
      )
    case Const.status.DRIVERASSIGNED:
      return(
        <div className='filter__report filter__report--margin'>
          <span className='status--driver-assigned'>Assigned</span>
        </div>
      )
    case Const.status.DELIVERING:
    return(
      <div className='filter__report filter__report--margin'>
        <span className='status--delivering'>Delivering</span>
      </div>
    )
    case Const.status.DONE:
      return(
        <div className='filter__report filter__report--margin'>
         <span className='status--done'>Done</span>
        </div>
      )
      case Const.status.CANCELED:
      return(
        <div className='filter__report filter__report--margin'>
          <span className='status--cancel'>Canceled</span>
        </div>
      )
    default:
      break;
  }
};

export default Status;