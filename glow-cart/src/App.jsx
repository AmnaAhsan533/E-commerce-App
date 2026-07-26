import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastProvider } from './context/ToastContext';
// 1. Import ThemeProvider
import { ThemeProvider } from './context/ThemeContext';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

export default function App() {
  return (
    <Provider store={store}>
      {/* 2. Nest ThemeProvider inside Provider */}
      <ThemeProvider>
        <ToastProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-rose-50/30 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 font-sans flex flex-col justify-between transition-colors duration-300">
              <div>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </div>

              <CartDrawer />
              <Footer />
            </div>
          </BrowserRouter>
        </ToastProvider>
      </ThemeProvider>
    </Provider>
  );
}