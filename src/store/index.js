import { createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import home from './home';
import kind from './kind';
import cart from './cart';
import user from './user';

const reducer = combineReducers({
    home,
    kind,
    cart,
    user
})
const store = createStore(reducer,applyMiddleware(thunk));
export default store;