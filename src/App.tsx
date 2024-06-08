import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import First from './pages/First';
import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import OrderSuccess from './pages/OrderSuccess';
import Manicure from './pages/Manicure'
import ServiceCatalog from './pages/ServiceCatalog';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
  loading: () => <div>Идёт загрузка корзины...</div>,
});

const FullProduct = React.lazy(() => import(/* webpackChunkName: "FullProduct" */ './pages/FullProduct'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<First/>}/>
        <Route path='/service-catalog/manicure' element={<Manicure/>}/>
        <Route path='/service-catalog' element={<ServiceCatalog/>}/>
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Идёт загрузка корзины...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="product/:id"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullProduct />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
