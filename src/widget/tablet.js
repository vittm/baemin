import React,{ useState} from 'react';
import ConverText from './../util/context';
import Status from './../widget/status';
import PubSub from 'pubsub-js';
import * as Const from './../util/const';
import Store from './../controller/store-order';

const Table = ({ data, setSortTime}) =>{
  const [arrow, setArrow] = useState(false);
  const setSort = () => {
    setSortTime(!arrow);
    setArrow(!arrow);
  };
  const changeStatus = (name,id) => {
    Store.changeOrder(name,id);
    PubSub.publish(Const.Bus.UPDATE_SEARCH, Store.getDataOrder());
    PubSub.publish(Const.Bus.DROPDOWN, {ref: null, children: null})
  }

  const onClick = (e,id) => {
    let n = [];
    n.push(
      <div className='dropdown-status'>
        <div className='filter__report filter__report--margin' 
            onClick={() => changeStatus(Const.status.DONE,id)}>
            <span className='status--done'>
              Done
            </span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => changeStatus(Const.status.ACCEPTED,id)}>
            <span className='status--accepted'> Accepted</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => changeStatus(Const.status.DELIVERING,id)}>
            <span className='status--delivering'> Delivering</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => changeStatus(Const.status.DRIVERASSIGNED,id)}>
            <span className='status--driver-assigned'> Driver Assigned</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => changeStatus(Const.status.CANCELED, id)}>
            <span className='status--cancel'> Canceled</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => changeStatus(Const.status.CREATED, id)}>
            <span className='status--created'> Created</span>
          </div>
      </div>
    )
    PubSub.publish(Const.Bus.DROPDOWN, {ref: e, children: n});
  };
  const ListOrder = () => {
    if(!data || data.length === 0) return <div className='null flx middle-xs'><img alt="hi" className='null__avatar' src="https://cdn-icons-png.flaticon.com/512/960/960616.png"/> <span>No data</span></div>
    return data.map((res,index) => {
      return (
        <div key={'order-item'+index} className='table__body row middle-xs'>
          <div className='table__body__item table__thead__item--id'>{res.id}</div>
          <div className='table__body__item table__thead__item--status'>
            {<Status status={res.status} onClick={(e) => onClick(e, res.id)} />}
          </div>
          <div className='table__body__item table__thead__item--customer'>{res.customer}</div>
          <div className='table__body__item table__thead__item--rider flx middle-xs'>
              <img className='table__body__avatar' src={res.rider.avatar} alt={"avatar"+ res.rider.name}/>
              <div className='table__body__drive-name'>{res.rider.name}</div>
          </div>
          <div className='table__body__item table__thead__item--order'>{res.order_address}</div>
          <div className='table__body__item table__thead__item--merchant'>{res.merchant_name}</div>
          <div className='table__body__item table__thead__item--m-address'>{res.merchant_address}</div>
          <div className='table__body__item table__thead__item--total'>{ConverText.addCommas(res.total_price)}</div>
          <div className='table__body__item table__thead__item--time'>{res.update_time}</div>
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
            <div className='table__thead__item table__thead__item--id'>Id</div>
            <div className='table__thead__item table__thead__item--status'>Status</div>
            <div className='table__thead__item table__thead__item--customer'>Customer</div>
            <div className='table__thead__item table__thead__item--rider'>Rider Name</div>
            <div className='table__thead__item table__thead__item--order'>Order Address</div>
            <div className='table__thead__item table__thead__item--merchant'>Merchant Name</div>
            <div className='table__thead__item table__thead__item--m-address'>Merchant Address</div>
            <div className='table__thead__item table__thead__item--total'>Total Price</div>
            <div className='table__thead__item table__thead__item--time click ' 
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