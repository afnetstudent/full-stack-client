import React, { createContext, useState } from "react";
import Home from "./Coponents/Home/Home";
import Order from "./Coponents/Order/Order";
import Admin from "./Coponents/Admin/Admin";
import Login from "./Coponents/Login/Login"
import SingleProductDetails from "./Coponents/SingleProductDetails/SingleProductDetails";
import PrivateRoute from "./Coponents/PrivateRoute/PrivateRoute";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Myorders from "./Coponents/Myorders/Myorders";



export const UserContex = createContext()



 function App() {
  const [logginUser, setLoggingUser] = useState({})
  return (
    <UserContex.Provider value={[logginUser, setLoggingUser]}>
      <h5>Name: {logginUser.name}</h5>
    <Router>
      <div>
        <ul>
          <li>
            <Link  to="/home">Home</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
          <li>
            <Link to="/myorders">Myorders</Link>
          </li>

          <li>
            <Link to="/admin">admin</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/myorders">
            <Myorders/>
          </Route>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/product/:id">
            <SingleProductDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

    </UserContex.Provider>
  );
}
export default App;