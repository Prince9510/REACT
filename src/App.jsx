import Image from "./Component/Image";
import Hero from "./Component/Hero";
import { Provider } from "react-redux";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import { store } from "./Store/Store";
import Category from "./Component/Category";
import { BrowserRouter, Route, Routes } from "react-router";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Image />
              <Product />
              <Footer/>
            </>
          } />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
