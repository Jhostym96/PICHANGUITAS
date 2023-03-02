// Paso1: Importar los componentes de React Router DOM

import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pas2: Importar nuestras vistas
import {
  LoginView,
  RegisterView,
  LandingPageView,
  ProductView,
  CartView,
  MarketplaceView,
  FormContactView,
} from "../pages";

import { MainLayout, AdminLayout } from "../layout";

// path => Nombre de la ruta /, /login, /registro

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPageView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/FormContact" element={<FormContactView />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/market" element={<MarketplaceView />} />
        </Route>

        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
