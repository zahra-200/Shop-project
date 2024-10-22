import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  cartQty: number;
  isLogin: boolean;
  handleLogin: (username: string, password: string) => void;
  handleLogOut: () => void;
  handleRemoveAllproducts: () => void;
}
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "cartItems",
    []
  );
  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleRemoveProductQty = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const handleRemoveAllproducts = () => {
    setCartItems([]);
  };
  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };
  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    login(username, password).finally(() => {
      const token = "awduhaisuhfILASHfuiuWHfjkajsf";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handleLogOut = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        handleRemoveProductQty,
        getProductQty,
        cartQty,
        isLogin,
        handleLogin,
        handleLogOut,
        handleRemoveAllproducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
