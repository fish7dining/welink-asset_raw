// 初始化状�?
const initState = {
  homeInfo: {},
  dataList: []
};

// 资源名字匹配数据
const myDefalt = {
  'desktop': 'Group3',
  'household_20electronic_20appliances': 'Group6',
  'ipad': 'Group8',
  'laptop': 'Group1',
  'laptop_28peru_29': 'Group1',
  'measuring_20equipment': 'Group5',
  'mobil_20phone': 'Group10',
  'mobile_20phone': 'Group10',
  'moble_20phone': 'Group10',
  'moblie': 'Group10',
  'mobile phone': 'Group10',
  'moblie_20phone': 'Group10',
  'mould': 'Group7',
  'office_20equipment': 'Group4',
  'pad': 'Group8',
  'software': 'Group9',
  'tc': 'Group2',
  '_28colombia_29laptop': 'Group1',
  '_28egypt_29laptop': 'Group1.png'
};

export function home(state = initState, action) {
  switch (action.type) {
    case 'RECEIVE_HOME':
      return {
        ...state,
        homeInfo: action.homeInfo
      };
    case 'RECEIVE_FETCHDEMO': {
      const list = action.dataList.result;
      console.log(list);
      const myList = [
        {
          aaiTagNumber: 'AXXXXXXX',
          aaiFaItemCategory: 'Laptop',
          aaiStatusName: '使用�?,
          aaiDescription: '暂无数据，临时使用测试数�?
        },
        {
          aaiTagNumber: 'AXXXXXXX',
          aaiFaItemCategory: 'Laptop',
          aaiStatusName: '使用�?,
          aaiDescription: '暂无数据，临时使用测试数�?
        },
        {
          aaiTagNumber: 'AXXXXXXX',
          aaiFaItemCategory: 'Laptop',
          aaiStatusName: '使用�?,
          aaiDescription: '暂无数据，临时使用测试数�?
        }
      ];
      const data = [];
      if(list.length == 0){
        myList.map((item, index) => {
          data.push({
            img: myDefalt[item.aaiFaItemCategory.toLowerCase()],
            num: item.aaiTagNumber,
            state: item.aaiStatusName,
            text: item.aaiDescription
          });
          return data;
        });
      }else{
        list.map((item, index) => {
          data.push({
            img: myDefalt[item.aaiFaItemCategory.toLowerCase()],
            num: item.aaiTagNumber,
            state: item.aaiStatusName,
            text: item.aaiDescription
          });
          return data;
        });
      }
      console.log(data);
      return {
        ...state,
        dataList: data
      };
    }
    default:
      return { ...state };
  }
};
