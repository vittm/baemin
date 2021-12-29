class StoreList {
  constructor(){
    this.dataOrder = [
      {
        id: 1,
        status: 'created',
        customer: 'Lý Tạ Bình',
        rider: {
          avatar: 'https://imgur.com/ZadyPKc.png',
          id: '12',
          name: 'Trần Hải Anh Bảo'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Yoko Sushi',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '10'
    
      },
      {
        id: 2,
        status: 'created',
        customer: 'Phạm Thị Hiền Anh',
        rider: {
          avatar: 'https://imgur.com/SRfneEN.png',
          id: '123',
          name: 'Phạm Hoàng Anh'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Phúc Long',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '10'
    
      },
      {
        id: 3,
        status: 'accepted',
        customer: 'Đỗ Hoàng Gia Bảo',
        rider: {
          avatar: 'https://imgur.com/tzlTZDJ.png',
          id: '231',
          name: 'Trần Thị Minh Châu'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Cơm Thố Anh Nguyễn',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '5'
    
      },
      {
        id: 4,
        status: 'driverAssigned',
        customer: 'Nguyễn Thái Dương',
        rider: {
          avatar: 'https://imgur.com/b041aFi.png',
          id: '111',
          name: 'Phạm Tiến Dũng'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Hiếu Vịt',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '10'
    
      },{
        id: 5,
        status: 'delivering',
        customer: 'Vũ Hương Giang',
        rider: {
          avatar: 'https://imgur.com/ZadyPKc.png',
          id: '1211',
          name: 'Nguyễn Thị Ngân Hà'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Tiệm Gà Rán Số 19',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '30'
    
      },
      {
        id: 6,
        status: 'delivering',
        customer: 'Nguyễn Lê Hiếu',
        rider: {
          avatar: 'https://imgur.com/SRfneEN.png',
          id: '1231',
          name: 'Phạm Xuân Hòa'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Don Chicken',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '20'
    
      },{
        id: 7,
        status: 'canceled',
        customer: 'Khoa Minh Hoàng',
        rider: {
          avatar: 'https://imgur.com/tzlTZDJ.png',
          id: '1231',
          name: 'Nguyễn Mạnh Hùng'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: "Let's Sushi",
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '10'
    
      },{
        id: 8,
        status: 'done',
        customer: 'Nguyễn Vũ Gia Hưng',
        rider: {
          avatar: 'https://imgur.com/b041aFi.png',
          id: '1231',
          name: 'Trần Tuấn Hưng'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Taco Nón Lá',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '40'
    
      },{
        id: 9,
        status: 'done',
        customer: 'Phạm Gia Minh',
        rider: {
          avatar: 'https://imgur.com/ZadyPKc.png',
          id: '1231',
          name: 'Đỗ Hoàng Mỹ'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'KFC',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '55'
    
      },{
        id: 10,
        status: 'delivering',
        customer: 'Đỗ Quang Ngọc',
        rider: {
          avatar: 'https://imgur.com/SRfneEN.png',
          id: '1231',
          name: '	Đàm Yến Nhi'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Vua Gà Luộc',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '25'
    
      },{
        id: 11,
        status: 'driverAssigned',
        customer: '	Đoàn Hoàng Sơn',
        rider: {
          avatar: 'https://imgur.com/tzlTZDJ.png',
          id: '1231',
          name: 'Nguyễn Công Thành'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Bánh Mì Que',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '15'
    
      },{
        id: 12,
        status: 'delivering',
        customer: '	Bùi Phương Thảo',
        rider: {
          avatar: 'https://imgur.com/b041aFi.png',
          id: '1231',
          name: 'Nguyễn Hương Thảo'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Tiệm Gà Rán Toki',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '20'
    
      },{
        id: 13,
        status: 'done',
        customer: '	Tô Diệu Thảo',
        rider: {
          avatar: 'https://imgur.com/ZadyPKc.png',
          id: '1231',
          name: 'Vũ Phương Thảo'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Raw Juice',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '20'
    
      },{
        id: 14,
        status: 'accepted',
        customer: 'Đặng Huyền Thi',
        rider: {
          avatar: 'https://imgur.com/SRfneEN.png',
          id: '1231',
          name: 'Đặng Thành Trung'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: "Susi's Cake",
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '5'
    
      },{
        id: 15,
        status: 'delivering',
        customer: 'Trịnh Thiên Trường',
        rider: {
          avatar: 'https://imgur.com/SRfneEN.png',
          id: '1231',
          name: 'Lê Khánh Vy'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'The Alley',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '30'
    
      },
      {
        id: 16,
        status: 'accepted',
        customer: 'Phạm Vũ Ngọc Diệp',
        rider: {
          avatar: 'https://imgur.com/tzlTZDJ.png',
          id: '1231',
          name: 'Trần Đức Dương'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Quán Bà Béo',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '10'
    
      },
      {
        id: 17,
        status: 'created',
        customer: 'Nguyễn Quốc Huy',
        rider: {
          avatar: 'https://imgur.com/b041aFi.png',
          id: '1231',
          name: 'Phạm Bảo Liên'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Tiến Sushi',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '2'
    
      },{
        id: 18,
        status: 'created',
        customer: '	Đinh Thùy Linh',
        rider: {
          avatar: 'https://imgur.com/ZadyPKc.png',
          id: '1231',
          name: '	Nguyễn Thùy Linh'
        },
        order_address: '132 Trần Nam, Phường Bình Phú, Quận 7, HCM',
        merchant_name: 'Puku+',
        merchant_address: 'D2 Cư Xá Vĩnh Hội, Đường 50, P. 5, Quận 4, TP. HCM',
        total_price: '133000',
        update_time: '2'
    
      }
    ];
  }
  getDataOrder(){
    return this.dataOrder;
  }
  setDataOrder(data){
    this.dataOrder = data;
  }
  sortByAsc(data){
    let result;
    if(data){
      result = data.sort((a, b) => (a.update_time - b.update_time));
    }else{
      result = this.dataOrder.sort((a, b) => (a.update_time - b.update_time));
    }
    return result;
  }
  sortByDesc(data) {
    let result;
    if(data){
      result = data.sort((a, b) => (b.update_time - a.update_time));
    }else{
      result = this.dataOrder.sort((a, b) => (b.update_time - a.update_time));
    }
    return result;
  }
}
const instance = new StoreList();
export default instance;
