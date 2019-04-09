import React, { Component } from 'react';
import { Switch , Route , NavLink , Redirect} from 'react-router-dom';
import Home from '@/pages/Home'
import Kind from '@/pages/Kind'
import Cart from '@/pages/Cart'
import User from '@/pages/User'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path='/Home' component={ Home }></Route>
          <Route path='/Kind' component={ Kind }></Route>
          <Route path='/Cart' component={ Cart }></Route>
          <Route path='/User' component={ User }></Route>
          <Redirect to = {{pathname:'/Home'}} />
        </Switch>
        <footer className='footer'>
          <NavLink to='/Home'>首页</NavLink>
          <NavLink to='/Kind'>分类</NavLink>
          <NavLink to='/Cart'>购物车</NavLink>
          <NavLink to='/User'>我的</NavLink>
        </footer>
      </div>
    );
  }
}

export default App;
