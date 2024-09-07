import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./components/context/ProductContext";
import { CartProvider } from "./components/context/CartContext";
import { AuthProvider } from "./components/context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
          <Toaster />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>
);

// ========================= firebase =========================

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes/Router";
// import AuthProvider from "./provider/AuthProvider";
// import { Toaster } from "react-hot-toast";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <ProductProvider>
//         <CartProvider>
//           <RouterProvider router={router} />
//           <Toaster />
//         </CartProvider>
//       </ProductProvider>
//       <Toaster />
//     </AuthProvider>
//   </StrictMode>
// );
