import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import adminregister from './admin/adminregister/adminregister';
import adminlogin from './admin/adminlogin/adminlogin';
import Home from './component/Home/Home';
import Register from './component/register/register';
import Login from './component/login/login';
import AdminNAvbar from './admin/AdminNavbar/AdminNavbar';
import AdminProduct from './admin/AdminProduct/AdminProduct';
import Product from './component/Product/Product';
import ProductDetial from './component/ProductDetial/ProductDetial';
import Cart from './component/Cart/Cart';
import ClientScreen from "./component/clientScreen";
import AdminScreen from './admin/AdminScreen';
import ForgotPassword from './component/forgotpassword/ForgotPassword';
import PasswordReset from './component/PasswordReset/PasswordReset';
import Order from './component/Order/Order';
import OrderView from './component/Order/OrderView';
import Profile from './component/Profile/Profile';
import AdminProductDelete from './admin/AdminProductDelete/AdminProductDelete';
import AdminUser from './admin/AdminUser/AdminUser';
import PaymentDetial from './admin/PaymentDetial/PaymentDetial';

function App() {

  const user = localStorage.getItem("username");
   
  const adminid = localStorage.getItem("adminid")
  

  return (
    <div className="App">

   <Router>
    {user &&  ( <Navbar /> )}
    {adminid && (<AdminNAvbar />)}
    <Switch>
      <Route exact path="/admin/signup"   component={adminregister}  />
      <Route exact path="/admin/signin"  component={adminlogin} />
      <Route exact path="/"  component={Register}/>
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/password-reset/:id/:token"  component={PasswordReset} />
      <ClientScreen exact path="/home" component={Home} />
      <ClientScreen exact path="/order" component={Order} />
      <ClientScreen exact path="/orderview/:id" component={OrderView} />
      <ClientScreen exact path="/profile" component={Profile} />
      <Route exact path="/signin" component={Login} />
      <ClientScreen exact path="/product" component={Product} />
      <ClientScreen exact path="/product/:id" component={ProductDetial} />
  <ClientScreen exact path="/cart" component={Cart} />
      <AdminScreen exact path="/admin/product/post" component={AdminProduct} />
      <AdminScreen exact path="/admin/product/delete" component={AdminProductDelete} />
      <AdminScreen exact path="/admin/user" component={AdminUser} />
      <AdminScreen exact path="/admin/payment" component={PaymentDetial} />
    </Switch>
   </Router>
    </div>
  );
}

export default App;
