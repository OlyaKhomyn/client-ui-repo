import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter, Link} from 'react-router-dom';

import Main from './containers/main/main';
import Login from './containers/login/login';
import Registration from './containers/registration/registration';
import answersTable from './containers/answersList/answersTable';
import FormList from './containers/forms/formList';
import FormItem from './containers/forms/formItem';
import NewForm from './containers/forms/newForm';

const Routers = () => {
  return (
    <BrowserRouter>
      <div id="header">
        <div id="header-pages">
          <Link id="logo" to='/'>4M</Link>
          <Link className="header-pages" to='#'>My forms</Link>
          <Link className="header-pages" to='/answers'>Answers</Link>
        </div>
        <div id="header-users">
          <Link to='/login'>Login</Link>
          <Link to='/registration'>Registration</Link>
        </div>
      </div>
      <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/login' component={Login}/>
        <Route path='/registration' component={Registration}/>
        <Route path='/answers' component={answersTable}/>
        <Route path="/form/:id" component={FormItem}/>
        <Route path="/form" component={FormList}/>
        <Route path="/new" component={NewForm}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Routers;
