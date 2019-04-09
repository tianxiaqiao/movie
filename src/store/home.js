const reducer = (state={
    homebannerlist:[],
    homeprolist:[]
},action) => {
    const { type , data } = action;
    switch (type) {
        case 'CHANGE_HOME_BANNER_LIST':
        const homebannerlist = { homebannerlist:data }
          return {...state , ...homebannerlist}
          case 'CHANGE_HOME_PRO_LIST':
          const homeprolist = { homeprolist:data }
            return {...state , ...homeprolist}
        default:
          return state
    }
}
export default reducer;