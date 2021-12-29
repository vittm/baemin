import React,{ useState,  useEffect} from 'react';
import Search from './../component/search';
import PubSub from 'pubsub-js';
import * as Const from './../util/const';
import Store from './../controller/store-order';

const Filter = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  const filter = (name) => {
    if(name){
      const result = Store.getDataOrder().filter(word => word.status == name);
      PubSub.publish(Const.Bus.UPDATE_SEARCH, result);
    }else{
      PubSub.publish(Const.Bus.UPDATE_SEARCH, Store.getDataOrder());
    }
  }
  
  const Main = () => {
    return(
      <div className='filter'>
        <div className="flx">
          <div className='filter__report filter__report--margin'
            onClick={() => filter()}>
            <span className='status--created'> All</span>
          </div>
          <div className='filter__report filter__report--margin' 
            onClick={() => filter(Const.status.DONE)}>
            <span className='status--done'>
              Done
            </span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => filter(Const.status.ACCEPTED)}>
            <span className='status--accepted'> Accepted</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => filter(Const.status.DELIVERING)}>
            <span className='status--delivering'> Delivering</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => filter(Const.status.DRIVERASSIGNED)}>
            <span className='status--driver-assigned'> Driver Assigned</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => filter(Const.status.CANCELED)}>
            <span className='status--cancel'> Canceled</span>
          </div>
          <div className='filter__report filter__report--margin'
            onClick={() => filter(Const.status.CREATED)}>
            <span className='status--created'> Created</span>
          </div>
        </div>
        <div className='filter__button' onClick={() => toggleSearch()}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" class="svg-icon--material svg-icon btn-icon filter__icon" data-name="Material--Filter"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M7 17h14V3H7v14zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z" opacity="0.3"></path><path d="M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L8.5 15h11z"></path></svg>
          <span>Filter</span>
        </div>
      </div>
    )
  };
  return(
    <>
      <Main />
      {showSearch && <Search />}
    </>
  )
};

export default Filter;