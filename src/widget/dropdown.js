import React,{ useState, useRef,  useEffect} from 'react';
import { useDetectOutsideClick } from "./../util/useDetectOutsideClick";
import PubSub from 'pubsub-js';
import * as Const from './../util/const';
import Store from './../controller/store-order';

const Loader = ({mainRef}) => {
  
 const dropdownRef = useRef();
 const [style, setStyle] = useState();
 const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
 const [children, setChildren] = useState();

 useEffect(() => {
    PubSub.subscribe(Const.Bus.DROPDOWN, function (msg, data) {
      if(data.children){
        setIsActive(true);
        setStyle({left: data.ref.pageX+'px', top: data.ref.pageY});
        setChildren(data.children);
      }else{
        setIsActive(false);
      }
    });
  });
	return (
		<nav
      style={style}
      ref={dropdownRef} 
      className={`menu ${isActive ? "active" : "inactive"}`}
    >
      {children}
    </nav>
	);
};

export default Loader;