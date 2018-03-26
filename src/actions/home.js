
const receiveHome = (response) => ({
  type: 'RECEIVE_HOME',
  homeInfo: response
});

export const getHomeInfo = () => async (dispatch, getState) => {
  try {
    const response = await new Promise((resolve, reject)=>{
      /* 模拟异步操作成功，这样可以通过fetch调接口获取数�?*/
      setTimeout(()=>{
        resolve({ title: 'WeLink react app' });
      }, 1000);
    });
    await dispatch(receiveHome(response));
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
};

const receiveFetchDemo = (response) => ({
  type: 'RECEIVE_FETCHDEMO',
  dataList: response
});

export const getFetchDemo = () => async (dispatch, getState) => {
  try {

    const url = '/m/Service/MEAPRESTServlet?service=w3Internal&asset/services/amt/assetService/assetService/findMyAssetList/12/1';

    const response = await window.HWH5.fetch(url).then((res) => res.json().then((reply) => reply)).catch((err)=>{
      return {result: []};
    });
    await dispatch(receiveFetchDemo(response));
    return response;
  } catch (error) {
    console.log('error: ', error);
    return error;
  }
};
