import api from '@/api'
export default {
    requestHomeBannerList(){
        return function(dispatch){
            // console.log("请求bannner");
            axios.get('https://www.daxunxun.com/banner')
            .then((data) =>{
                // console.log(data);
                dispatch({
                    type:'CHANGE_HOME_BANNER_LIST',
                    data:data.data
                })
            })
        }
        
    },
    requestHomeProList(){
        return function(dispatch){
            // console.log("请求Pro");
            axios.get('https://www.daxunxun.com/douban')
            .then((data) =>{
                // console.log(data);
                dispatch({
                    type:'CHANGE_HOME_PRO_LIST',
                    data:data.data
                })
            })
        }
    },
}
