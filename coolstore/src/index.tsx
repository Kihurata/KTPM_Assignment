import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { ProductListing } from "./screens/ProductListing";
import Header from "./components/ui/header"; 

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Header /> {/* 👈 xuất hiện trên mọi trang */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
