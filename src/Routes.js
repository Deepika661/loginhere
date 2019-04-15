import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './Components/Login.js'
import FirstScreen from './Components/FirstScreen.js';
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";



const router =

		<Switch>
			      <Route exact path="/login" component={Login} />
            <Route  path="/first/screen" component={FirstScreen} />

		</Switch>



export default router;
