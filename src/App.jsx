/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SubHeader from "./components/SubHeader";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signuppage from "./pages/Signuppage";
import LoginPage from "./pages/LoginPage";
import TeaBlends from "./pages/TeaBlends";
import AdventCalendar from "./pages/AdventCalendars";
import TeaChocolate from "./pages/TeaChocolate";
import Matcha from "./pages/Matcha";
import Wintertea from "./pages/Wintertea";
import GreenTea from "./pages/GreenTea";
import BlackTea from "./pages/BlackTea";
import HerbalTea from "./pages/HerbalTea";
import Oolongtea from "./pages/Oolongtea";
import ProductDetail from "./pages/ProductDetail";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Page404 from "./pages/Page404";
import OrderConfirm from "./pages/OrderConfirm";
import AllProducts from "./pages/AllProducts";
import { ToastContainer } from "react-toastify";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Signuppage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/teablends" element={<TeaBlends />} />
        <Route path="/Tea blend/:productId" element={<ProductDetail />} />
        <Route path="/adventcalendar" element={<AdventCalendar />} />
        <Route path="/Advent Calendar/:productId" element={<ProductDetail />} />
        <Route path="/teachocolate" element={<TeaChocolate />} />
        <Route path="/Chocolate/:productId" element={<ProductDetail />} />
        <Route path="/matcha" element={<Matcha />} />
        <Route path="/Matcha/:productId" element={<ProductDetail />} />
        <Route path="/wintertea" element={<Wintertea />} />
        <Route path="/Gift Set/:productId" element={<ProductDetail />} />
        <Route path="/greentea" element={<GreenTea />} />
        <Route path="/Green tea/:productId" element={<ProductDetail />} />
        <Route path="/blacktea" element={<BlackTea />} />
        <Route path="/Black Tea/:productId" element={<ProductDetail />} />
        <Route path="/herbaltea" element={<HerbalTea />} />
        <Route path="/Herbal/:productId" element={<ProductDetail />} />
        <Route path="/oolongtea" element={<Oolongtea />} />
        <Route path="/Oolong Tea/:productId" element={<ProductDetail />} />
        <Route path="/account" element={<ProfilePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderconfirm" element={<OrderConfirm />} />
        <Route path="/ourproducts" element={<AllProducts />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;