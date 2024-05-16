import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomerForm from './components/customer/CustomerForm';
import ProductForm from './components/product/ProductForm';
import OrderForm from './components/order/OrderForm';
import CustomerDetails from './components/customer/CustomerDetails';
import ProductDetails from './components/product/ProductDetails';
import OrderDetails from './components/order/OrderDetails';
import OrderList from './components/order/OrderList';
import ProductList from './components/product/ProductList';
import CustomerList from './components/customer/CustomerList';
import ProductUpdate from './components/product/ProductUpdate';
import CustomerUpdate from './components/customer/CustomerUpdate';
import NotFound from './components/NotFound';
import './index.css';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/customers" element={<CustomerForm/>} />
          <Route path="/products" element={<ProductForm/>} />
          <Route path="/orders" element={<OrderForm/>} />
          <Route path="/customers/:customerId" element={<CustomerDetails/>} />
          <Route path="/products/:productId" element={<ProductDetails/>} />
          <Route path="/orders/:customerId" element={<OrderDetails/>} />
          <Route path="/orders-list" element={<OrderList/>} />
          <Route path="/products-list" element={<ProductList/>} />
          <Route path="/customers-list" element={<CustomerList/>} />
          <Route path="/edit-product/:productId" element={<ProductUpdate/>} />
          <Route path="/edit-customer/:customerId" element={<CustomerUpdate/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;