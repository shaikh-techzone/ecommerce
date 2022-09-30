import { createContext, useContext, useState } from 'react';
import Cart from '../components/Cart/Cart';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage('cart', []);
  const [user, setUser] = useLocalStorage('user', {});

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // const openCart = () => setIsOpen(true);
  // const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
    });
  };

  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser({});
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        clearCart,
        // openCart,
        // closeCart,
        login,
        logout,
        cartItems,
        cartQuantity,
        user,
      }}
    >
      {children}
      <Cart />
    </ShoppingCartContext.Provider>
  );
};
