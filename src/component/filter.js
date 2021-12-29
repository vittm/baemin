import React,{ useState,  useEffect} from 'react';
import Search from './../component/search';

const Filter = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  const Main = () => {
    return(
      <div className='filter'>
        <div className="flx">
          <div className='filter__report'>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" class="svg-icon--material svg-icon svg-icon-2x me-2 filter__repport__icon" data-name="Material--Info"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z" opacity="0.3"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
            <span>You have:</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--done'>Done</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--accepted'>Accepted</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--delivering'>Delivering</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--driver-assigned'>Driver Assigned</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--cancel'>Canceled</span>
          </div>
          <div className='filter__report filter__report--margin'>
            <span className="filter__mount"> 12 </span>
            <span className='status--created'>Created</span>
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