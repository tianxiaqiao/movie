import api from '@/api'
export default {
    requestHomeBannerList:()=>(dispatch)=>{
        api.request('banner')
        .then((data) =>{
            // console.log(data);
            dispatch({
                type:'CHANGE_HOME_BANNER_LIST',
                data:data
            })
        })
        
    },
    requestHomeProList:()=>(dispatch)=>{
        api.request('douban')
        .then((data) =>{
            // console.log(data);
            dispatch({
                type:'CHANGE_HOME_PRO_LIST',
                data:data
            })
        })
    },
}
