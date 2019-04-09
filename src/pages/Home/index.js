import { connect } from 'react-redux';
import UI from './UI';
import action from './action'

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        homebannerlist : state.home.homebannerlist,
        homeprolist : state.home.homeprolist,
    }
}

// 处理UI组件的业务逻辑
const mapDispatchToProps = (dispatch) => {
    return {
        requestHomeBannerList(){
            // console.log("请求bannner");
            // console.log(action);
            dispatch(action.requestHomeBannerList())
        },
        requestHomeProList(){
            // console.log("请求Pro");
            dispatch(action.requestHomeProList())
        },

    }
}

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);
export default Com;