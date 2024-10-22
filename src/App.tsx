import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { useShoppingCartContext } from "./context/ShoppingCartContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";

function App() {

  const {isLogin} = useShoppingCartContext()
  return (
    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
          </Route>
          <Route path="/login" element={isLogin? <Navigate to={"/"} /> : <Login />} />
        </Routes>
      </Layout>
    
  );
}

export default App;
