(this.webpackJsonpbaemin=this.webpackJsonpbaemin||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(6),c=a.n(s),i=(a(11),a(2)),d=a(3),m=a(4),l=function(){function e(){Object(d.a)(this,e)}return Object(m.a)(e,null,[{key:"addCommas",value:function(e){var t,a,n;a=(t=(e+="").split("."))[0],n=t.length>1?"."+t[1]:"";for(var r=/(\d+)(\d{3})/;r.test(a);)a=a.replace(r,"$1,$2");return a+n}}]),e}(),h="created",o="accepted",_="driverAssigned",u="delivering",j="done",g="canceled",p=a(0),b=function(e){switch(e.status){case o:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--accepted",children:"Accepted"})});case h:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--created",children:"Created"})});case _:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--driver-assigned",children:"Assigned"})});case u:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--delivering",children:"Delivering"})});case j:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--done",children:"Done"})});case g:return Object(p.jsx)("div",{className:"filter__report filter__report--margin",children:Object(p.jsx)("span",{className:"status--cancel",children:"Canceled"})})}},v=function(e){var t=e.data,a=e.setSortTime,r=Object(n.useState)(!1),s=Object(i.a)(r,2),c=s[0],d=s[1],m=function(){return t&&0!==t.length?t.map((function(e,t){return Object(p.jsxs)("div",{className:"table__body row middle-xs",children:[Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:e.id}),Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:Object(p.jsx)(b,{status:e.status})}),Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:e.customer}),Object(p.jsxs)("div",{className:"table__body__item col-xs-2 flx middle-xs",children:[Object(p.jsx)("img",{className:"table__body__avatar",src:e.rider.avatar,alt:"avatar"+e.rider.name}),Object(p.jsx)("div",{className:"table__body__drive-name",children:e.rider.name})]}),Object(p.jsx)("div",{className:"table__body__item col-xs-2",children:e.order_address}),Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:e.merchant_name}),Object(p.jsx)("div",{className:"table__body__item col-xs-2",children:e.merchant_address}),Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:l.addCommas(e.total_price)}),Object(p.jsx)("div",{className:"table__body__item col-xs-1",children:e.update_time})]},"order-item"+t)})):null};return Object(p.jsxs)("div",{className:"table",children:[Object(p.jsx)("div",{className:"table__header",children:Object(p.jsxs)("div",{className:"flx",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 24 24",width:"1em",class:"svg-icon--material svg-icon card-icon text-info","data-name":"Material--Alarm",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M12 6c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z",opacity:"0.3"}),Object(p.jsx)("path",{d:"M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4a9 9 0 10.001 18.001A9 9 0 0012 4zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"})]}),"Order tracking service"]})}),Object(p.jsxs)("div",{className:"table__container",children:[Object(p.jsxs)("div",{className:"table__thead row",children:[Object(p.jsx)("div",{className:"table__thead__item col-xs-1",children:"Id"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-1",children:"Status"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-1",children:"Customer"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-2",children:"Rider Name"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-2",children:"Order Address"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-1",children:"Merchant Name"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-2",children:"Merchant Address"}),Object(p.jsx)("div",{className:"table__thead__item col-xs-1",children:"Total Price"}),Object(p.jsxs)("div",{className:"table__thead__item click col-xs-1",onClick:function(){return a(!c),void d(!c)},children:["Time",Object(p.jsx)("span",{className:"table__thead__symbol",children:c?"\u2191":"\u2193"})]})]}),Object(p.jsx)(m,{})]})]})},x=new(function(){function e(){Object(d.a)(this,e),this.dataOrder=[{id:1,status:"created",customer:"L\xfd T\u1ea1 B\xecnh",rider:{avatar:"https://imgur.com/ZadyPKc.png",id:"12",name:"Tr\u1ea7n H\u1ea3i Anh B\u1ea3o"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Yoko Sushi",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"10"},{id:2,status:"created",customer:"Ph\u1ea1m Th\u1ecb Hi\u1ec1n Anh",rider:{avatar:"https://imgur.com/SRfneEN.png",id:"123",name:"Ph\u1ea1m Ho\xe0ng Anh"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Ph\xfac Long",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"10"},{id:3,status:"accepted",customer:"\u0110\u1ed7 Ho\xe0ng Gia B\u1ea3o",rider:{avatar:"https://imgur.com/tzlTZDJ.png",id:"231",name:"Tr\u1ea7n Th\u1ecb Minh Ch\xe2u"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"C\u01a1m Th\u1ed1 Anh Nguy\u1ec5n",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"5"},{id:4,status:"driverAssigned",customer:"Nguy\u1ec5n Th\xe1i D\u01b0\u01a1ng",rider:{avatar:"https://imgur.com/b041aFi.png",id:"111",name:"Ph\u1ea1m Ti\u1ebfn D\u0169ng"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Hi\u1ebfu V\u1ecbt",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"10"},{id:5,status:"delivering",customer:"V\u0169 H\u01b0\u01a1ng Giang",rider:{avatar:"https://imgur.com/ZadyPKc.png",id:"1211",name:"Nguy\u1ec5n Th\u1ecb Ng\xe2n H\xe0"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Ti\u1ec7m G\xe0 R\xe1n S\u1ed1 19",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"30"},{id:6,status:"delivering",customer:"Nguy\u1ec5n L\xea Hi\u1ebfu",rider:{avatar:"https://imgur.com/SRfneEN.png",id:"1231",name:"Ph\u1ea1m Xu\xe2n H\xf2a"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Don Chicken",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"20"},{id:7,status:"canceled",customer:"Khoa Minh Ho\xe0ng",rider:{avatar:"https://imgur.com/tzlTZDJ.png",id:"1231",name:"Nguy\u1ec5n M\u1ea1nh H\xf9ng"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Let's Sushi",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"10"},{id:8,status:"done",customer:"Nguy\u1ec5n V\u0169 Gia H\u01b0ng",rider:{avatar:"https://imgur.com/b041aFi.png",id:"1231",name:"Tr\u1ea7n Tu\u1ea5n H\u01b0ng"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Taco N\xf3n L\xe1",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"40"},{id:9,status:"done",customer:"Ph\u1ea1m Gia Minh",rider:{avatar:"https://imgur.com/ZadyPKc.png",id:"1231",name:"\u0110\u1ed7 Ho\xe0ng M\u1ef9"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"KFC",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"55"},{id:10,status:"delivering",customer:"\u0110\u1ed7 Quang Ng\u1ecdc",rider:{avatar:"https://imgur.com/SRfneEN.png",id:"1231",name:"\t\u0110\xe0m Y\u1ebfn Nhi"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Vua G\xe0 Lu\u1ed9c",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"25"},{id:11,status:"driverAssigned",customer:"\t\u0110o\xe0n Ho\xe0ng S\u01a1n",rider:{avatar:"https://imgur.com/tzlTZDJ.png",id:"1231",name:"Nguy\u1ec5n C\xf4ng Th\xe0nh"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"B\xe1nh M\xec Que",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"15"},{id:12,status:"delivering",customer:"\tB\xf9i Ph\u01b0\u01a1ng Th\u1ea3o",rider:{avatar:"https://imgur.com/b041aFi.png",id:"1231",name:"Nguy\u1ec5n H\u01b0\u01a1ng Th\u1ea3o"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Ti\u1ec7m G\xe0 R\xe1n Toki",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"20"},{id:13,status:"done",customer:"\tT\xf4 Di\u1ec7u Th\u1ea3o",rider:{avatar:"https://imgur.com/ZadyPKc.png",id:"1231",name:"V\u0169 Ph\u01b0\u01a1ng Th\u1ea3o"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Raw Juice",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"20"},{id:14,status:"accepted",customer:"\u0110\u1eb7ng Huy\u1ec1n Thi",rider:{avatar:"https://imgur.com/SRfneEN.png",id:"1231",name:"\u0110\u1eb7ng Th\xe0nh Trung"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Susi's Cake",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"5"},{id:15,status:"delivering",customer:"Tr\u1ecbnh Thi\xean Tr\u01b0\u1eddng",rider:{avatar:"https://imgur.com/SRfneEN.png",id:"1231",name:"L\xea Kh\xe1nh Vy"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"The Alley",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"30"},{id:16,status:"accepted",customer:"Ph\u1ea1m V\u0169 Ng\u1ecdc Di\u1ec7p",rider:{avatar:"https://imgur.com/tzlTZDJ.png",id:"1231",name:"Tr\u1ea7n \u0110\u1ee9c D\u01b0\u01a1ng"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Qu\xe1n B\xe0 B\xe9o",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"10"},{id:17,status:"created",customer:"Nguy\u1ec5n Qu\u1ed1c Huy",rider:{avatar:"https://imgur.com/b041aFi.png",id:"1231",name:"Ph\u1ea1m B\u1ea3o Li\xean"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Ti\u1ebfn Sushi",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"2"},{id:18,status:"created",customer:"\t\u0110inh Th\xf9y Linh",rider:{avatar:"https://imgur.com/ZadyPKc.png",id:"1231",name:"\tNguy\u1ec5n Th\xf9y Linh"},order_address:"132 Tr\u1ea7n Nam, Ph\u01b0\u1eddng B\xecnh Ph\xfa, Qu\u1eadn 7, HCM",merchant_name:"Puku+",merchant_address:"D2 C\u01b0 X\xe1 V\u0129nh H\u1ed9i, \u0110\u01b0\u1eddng 50, P. 5, Qu\u1eadn 4, TP. HCM",total_price:"133000",update_time:"2"}]}return Object(m.a)(e,[{key:"getDataOrder",value:function(){return this.dataOrder}},{key:"setDataOrder",value:function(e){this.dataOrder=e}}]),e}()),O=function(e){for(var t=e.currentPage,a=e.setCurrentPage,n=e.totalPosts,r=e.postPerPage,s=Math.ceil(n/r),c=[],i=1;i<=s;i++)c.push(i);return Object(p.jsxs)("ul",{className:"pagination",children:[Object(p.jsx)("li",{className:"page-item ".concat(1===t&&"disabled"),children:Object(p.jsx)("button",{className:"page-link",onClick:function(){return a(t-1)},children:"\xab"})}),c.map((function(e){return Object(p.jsx)("li",{className:"page-item ".concat(e===t&&"active"),onClick:function(){return a(e)},children:Object(p.jsx)("button",{className:"page-link",children:e})},e)})),Object(p.jsx)("li",{className:"page-item ".concat(t===s&&"disabled"),children:Object(p.jsx)("button",{className:"page-link",onClick:function(){return a(t+1)},children:"\xbb"})})]})},N=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),c=Object(i.a)(s,2),d=c[0],m=c[1],l=Object(n.useState)(!0),h=Object(i.a)(l,2),o=h[0],_=h[1],u=a.length,j=5*d,g=j-5,b=a.slice(g,j);Object(n.useEffect)((function(){r(x.getDataOrder().sort((function(e,t){return t.update_time-e.update_time})))}),[]);var N=function(){return Object(p.jsxs)("div",{className:"filter",children:[Object(p.jsxs)("div",{className:"flx",children:[Object(p.jsxs)("div",{className:"filter__report",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 24 24",width:"1em",class:"svg-icon--material svg-icon svg-icon-2x me-2 filter__repport__icon","data-name":"Material--Info",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z",opacity:"0.3"}),Object(p.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]}),Object(p.jsx)("span",{children:"You have:"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--done",children:"Done"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--accepted",children:"Accepted"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--delivering",children:"Delivering"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--driver-assigned",children:"Driver Assigned"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--cancel",children:"Canceled"})]}),Object(p.jsxs)("div",{className:"filter__report filter__report--margin",children:[Object(p.jsx)("span",{className:"filter__mount",children:" 12 "}),Object(p.jsx)("span",{className:"status--created",children:"Created"})]})]}),Object(p.jsxs)("div",{className:"filter__button",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 24 24",width:"1em",class:"svg-icon--material svg-icon btn-icon filter__icon","data-name":"Material--Filter",children:[Object(p.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),Object(p.jsx)("path",{d:"M7 17h14V3H7v14zm4.25-5.53l1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z",opacity:"0.3"}),Object(p.jsx)("path",{d:"M1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L8.5 15h11z"})]}),Object(p.jsx)("span",{children:"Filter"})]})]})};return Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)(N,{}),Object(p.jsx)(v,{data:b,setSortTime:function(e){r(e?a.sort((function(e,t){return e.update_time-t.update_time})):a.sort((function(e,t){return t.update_time-e.update_time}))),_(!o)}}),u>5&&Object(p.jsx)(O,{currentPage:d,setCurrentPage:m,totalPosts:u,postPerPage:5})]})},P=function(){return Object(p.jsxs)("div",{className:"dashboard",children:[Object(p.jsx)("div",{className:"brand",children:Object(p.jsx)("img",{className:"brand__logo",src:"https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/ece9e898f6e0d9e04d8c2943d0e6f851.jpg",alt:"logo"})}),Object(p.jsx)(N,{})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(P,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.dc0ab625.chunk.js.map