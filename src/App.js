import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CheckoutPage from './pages/CheckoutPage';
import ContactPage from './pages/ContactPage';
import WishlistPage from './pages/WishlistPage';
import CartPage from './pages/CartPage';
import Home from "./pages/Home"
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import axios from 'axios';
import DashboardPage from './pages/DashboardPage';
import { constant } from './constants';
import NotFound from './pages/NotFound';
import OrderSuccess from './pages/OrderSuccess';
import OrderFail from './pages/OrderFail';
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute"
import SearchPage from './pages/SearchPage';


function App() {
  axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  axios.interceptors.request.use(
    (request) => {
      // Do something before request is sent

      const methods = ['post', 'put', 'delete'];

      if (methods.includes(request.method)) {
        request.headers = {
          ...request.headers,
          'Content-Type': 'application/json',
          Authorization: `Bearer ${constant.TOKEN}`,
        };
      }

      return request;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/* <Route path='/' element={<Home />} />
             */}
            <Route path='/' element={<Navigate to='/products' replace />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            {/* <Route path='/checkout' element={<CheckoutPage />} /> */}
            <Route path='/contact' element={<ContactPage />} />
            {/* <Route path='/wishlist' element={<WishlistPage />} /> */}
            <Route path='/cart' element={<CartPage />} />
            <Route element={<ProtectedRoute />}>

              <Route path='/dashboard' element={<DashboardPage />} />
            </Route>
            <Route path="/auth/signup" element={<SignupPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/order/success" element={<OrderSuccess />} />
            <Route path="/order/fail" element={<OrderFail />} />
            <Route path="/search" element={<SearchPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
