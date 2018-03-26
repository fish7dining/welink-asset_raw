import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as home from '../../actions/home';
import * as global from '../../actions/global';

import './Home.less';
import Card from '../../components/Card';

@connect(
  state => ({ ...state.home }),
  dispatch => bindActionCreators({ ...home, ...global }, dispatch)
)
export default class Home extends React.Component {

  async componentWillMount() {
    const userInfo = await this.props.getUserInfo();
    console.log(userInfo, 'window.HWH5.userInfo mock data.');
    const { homeInfo, dataList } = this.props;
    if (!homeInfo) {
      this.props.getHomeInfo().then((data)=>{
        const { title } = data;
        document.title = title;
      });
    }
    // fetch请求Demo，本地请求proxy服务器，在server.js中配置，解决本地调试接口跨域问题
    if (dataList.length === 0) {
      this.props.getFetchDemo();
    }
  }

  componentDidMount() {
    window.HWH5.navTitle({ title: '资产查询' });
  }

  render() {
    const list = this.props.dataList;
    return (
      <div className="App">
        <div className="main">
          <div id="cards">
            { 
              list.map((item, index)=>(
                <Card 
                  key={index} 
                  img={item.img} 
                  num={item.num} 
                  state={item.state} 
                  text={item.text} 
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
};

Home.propTypes = {
  homeInfo: PropTypes.object,
  dataList: PropTypes.array,
  getHomeInfo: PropTypes.func,
  getUserInfo: PropTypes.func,
  getFetchDemo: PropTypes.func
};
