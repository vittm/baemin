import React,{ useState, useRef, useEffect} from 'react';
import ConverText from './../util/context';
import Status from './../widget/status';

const Table = ({ data, setSortTime}) =>{
  const [arrow, setArrow] = useState(false);

  const setSort = () => {
    setSortTime(!arrow);
    setArrow(!arrow);
  };
  const ListOrder = () => {
    if(!data || data.length === 0) return null;
    return data.map((res,index) => {
      return (
        <div key={'order-item'+index} className='table__body row middle-xs'>
          <div className='table__body__item col-xs-1'>{res.id}</div>
          <div className='table__body__item col-xs-1'>{<Status status={res.status} />}</div>
          <div className='table__body__item col-xs-1'>{res.customer}</div>
          <div className='table__body__item col-xs-2 flx middle-xs'>
              <img className='table__body__avatar' src={res.rider.avatar} alt={"avatar"+ res.rider.name}/>
              <div className='table__body__drive-name'>{res.rider.name}</div>
          </div>
          <div className='table__body__item col-xs-2'>{res.order_address}</div>
          <div className='table__body__item col-xs-1'>{res.merchant_name}</div>
          <div className='table__body__item col-xs-2'>{res.merchant_address}</div>
          <div className='table__body__item col-xs-1'>{ConverText.addCommas(res.total_price)}</div>
          <div className='table__body__item col-xs-1'>{res.update_time}</div>
      </div>
      )
    });
  };
  return(
    <div className='table'>
      <div className='table__header'>
          <div className='flx'>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" class="svg-icon--material svg-icon card-icon text-info" data-name="Material--Alarm"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z" opacity="0.3"></path><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 10.001 18.001A9 9 0 0012 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>
          Order tracking service
          </div>
      </div>
      <div className='table__container'>
        <div className='table__thead row'>
            <div className='table__thead__item col-xs-1'>Id</div>
            <div className='table__thead__item col-xs-1'>Status</div>
            <div className='table__thead__item col-xs-1'>Customer</div>
            <div className='table__thead__item col-xs-2'>Rider Name</div>
            <div className='table__thead__item col-xs-2'>Order Address</div>
            <div className='table__thead__item col-xs-1'>Merchant Name</div>
            <div className='table__thead__item col-xs-2'>Merchant Address</div>
            <div className='table__thead__item col-xs-1'>Total Price</div>
            <div className='table__thead__item click col-xs-1' 
              onClick={() => setSort()}>
                Time 
                <span className='table__thead__symbol'>{arrow ? '↑' : '↓' }</span>
            </div>
        </div>
        <ListOrder />
      </div>

    </div>
  )
}

export default Table;