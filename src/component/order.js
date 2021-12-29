import React,{ useState,  useEffect} from 'react';
import Table from './../widget/tablet';
import StoreList from './../controller/store-order';
import Paginate from './../widget/paginate';
import Filter from './../component/filter';
import PubSub from 'pubsub-js';
import * as Const from './../util/const';

const Order = () =>{
  const [dataOrder, setDataOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isRefresh, setIsRefresh] = useState(true);

  const postPerPage = 5;
	const totalPosts = dataOrder.length;

	const indexOfLastPost = currentPage * postPerPage;
	const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = dataOrder.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    setDataOrder(StoreList.sortByPriceDesc());
  },[]);


  useEffect(() => {
    PubSub.subscribe(Const.Bus.UPDATE_SEARCH, function (msg, data) {
      setDataOrder(data);
    });
  });
  const setSortTime = (sort) => {
    if(sort){
      setDataOrder(StoreList.sortByPriceAsc(dataOrder));
    }else{
      setDataOrder(StoreList.sortByPriceDesc(dataOrder));
    }
    setIsRefresh(!isRefresh);
  };
  return(
    <div className="content">
      <Filter />
      <Table 
        data= {filterPosts}
        setSortTime={setSortTime}
      />
      {totalPosts > postPerPage && (
						<Paginate
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
							totalPosts={totalPosts}
							postPerPage={postPerPage}
						/>
					)}
    </div>
  )
}

export default Order;