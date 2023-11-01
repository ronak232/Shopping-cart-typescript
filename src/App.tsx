import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
// import Footer from "./components/Footer";
import React, { Suspense } from "react";
// import SkeletonCard from "./components/SkeletonLoader/SkeletonCard";

// Lazy Loading the store page
const PagesProductList = React.lazy(() => import("./pages/ProductsList"));

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <Suspense fallback={<div>Loading</div>}>
                <PagesProductList />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
