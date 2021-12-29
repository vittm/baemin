import React, {useEffect, useRef, useState} from 'react';
import Input from './../widget/input';
import Util from './../util/context';
import * as Const from './../util/const';
import Store from './../controller/store-order';
import PubSub from 'pubsub-js';

const Loader = () => {
  const [handState, setHandState] = useState({});
  const search = (order) => {
    if(handState){
      return Object.keys(handState).every((key) => {
        if(key === 'rider' ){
          return Util.simpleStripVietnamese(order[key].name).toLowerCase().indexOf(Util.simpleStripVietnamese(handState[key]).toLowerCase()) > -1;
        }else{
          return Util.simpleStripVietnamese(order[key].toString()).toLowerCase().indexOf(Util.simpleStripVietnamese(handState[key]).toLowerCase()) > -1;    
        }
      });
    }
  }

  useEffect(() => {
    var result = Store.getDataOrder().filter(search,handState);
    PubSub.publish(Const.Bus.UPDATE_SEARCH, result);
  },[handState]);

  const _handleInputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    setHandState({...handState,[name]: value});
  };
  
  const _reset = () => {
    setHandState({id: "",status: "",customer: "",rider:"", merchant_name: "",update_time:""});
    PubSub.publish(Const.Bus.UPDATE_SEARCH, Store.getDataOrder());
  }

	return (
		<div className='filter filter__search'>
      <div className='flx'>
        <div className='col-xs-1'>
          <p className='search__title'>ID</p>
          <Input placeholder="1" value={handState?.id} name="id" onChange={(e) => _handleInputChange(e)}/>
        </div>
        <div className='col-xs-2'>
          <p className='search__title'>Status</p>
          <Input placeholder="Done" value={handState?.status} name="status" onChange={(e) => _handleInputChange(e)}/>
        </div>
        <div className='col-xs-2'>
          <p className='search__title'>Customer Name</p>
          <Input placeholder="Lý Hải Nam" value={handState?.customer} name="customer" onChange={(e) => _handleInputChange(e)}/>
        </div>
        <div className='col-xs-2'>
          <p className='search__title'>Rider Name</p>
          <Input placeholder="Trần Hạ An" value={handState?.rider} name="rider" onChange={(e) => _handleInputChange(e)}/>
        </div>
        <div className='col-xs-3'>
          <p className='search__title'>Merchant Name</p>
          <Input placeholder="Phúc Long" value={handState?.merchant_name} name="merchant_name" onChange={(e) => _handleInputChange(e)}/>
        </div>
        <div className='col-xs-2'>
          <p className='search__title'>Update Time</p>
          <Input placeholder="10" value={handState?.update_time} name="update_time" onChange={(e) => _handleInputChange(e)}/>
        </div>
      </div>
      <div className='col-xs-offset-11 col-xs-1 flx search__reset' onClick={() => _reset()}>
        <div className='filter__report filter__report--margin'>
          <span className='status--cancel'>Reset</span>
        </div>
      </div>
    </div>
	);
};

export default Loader;