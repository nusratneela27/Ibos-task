import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const { userInfo } = useContext(AuthContext);
  const { user } = userInfo;

  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.email}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      } else {
        setCart([]);
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
    }
  }, [cart, user]);


  const clearCart = () => {
    setCart([]);
    if (user) {
      localStorage.removeItem(`cart_${user.email}`);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const cartInfo = {
    cart,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const productExists = prevCart.find((item) => item.id === product.id);

//       if (productExists) {
//         return prevCart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const incrementQuantity = (id) => {
//     setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
//   };

//   const decrementQuantity = (id) => {
//     setCart(cart.map(item => item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item));
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   const cartInfo = {
//     cart,
//     addToCart,
//     removeFromCart,
//     incrementQuantity,
//     decrementQuantity
//   };

//   return (
//     <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
//   );
// };
