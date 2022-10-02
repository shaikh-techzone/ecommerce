import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          // Authorization: `Bearer ${constant.TOKEN}`,
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
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/wishlist' element={<WishlistPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
