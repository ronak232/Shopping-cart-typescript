import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
// import Footer from "./components/Footer";
import React, { Suspense } from "react";
// import Footer from "./components/Footer";

// Lazy Loading the store page
const PagesProductList = React.lazy(() => import("./pages/ProductsList"));

function App() {
  
  return (
    <>
      <Header />
 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={
              <Suspense>
                <PagesProductList />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />~
          <Route path="/cart" element={<Cart />} />
        </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
