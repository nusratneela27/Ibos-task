import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="flex w-full p-4 mb-16 gap-10">
      <div className="w-3/4">
        <h1 className="text-2xl font-bold mb-4">An overview of your order</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="bg-slate-50 rounded-lg">
            {cart.map((item) => (
              <div className="border-b p-5">
                <div key={item.id} className="flex">
                  <div className="flex justify-center items-center gap-3">
                    <div className="flex gap-2 border px-4 py-1 rounded-lg">
                      <p>-</p>
                      <p>{item.quantity}</p>
                      <p>+</p>
                    </div>

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 p-2 rounded-lg bg-slate-200 object-cover"
                    />
                  </div>
                  <div className="flex-1 px-4">
                    <h2 className="text-lg font-bold">{item.title}</h2>
                  </div>
                  <RxCross2
                    className="cursor-pointer"
                    size={20}
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
                <p className="font-bold text-end pt-2">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-1/4 ">
        <h1 className="text-2xl font-bold mb-4">Order details</h1>
        <div className="border bg-slate-50 rounded-lg p-5 space-y-3">
          <p className="flex justify-between">Subtotal</p>
          <p className="flex justify-between">
            Shipping <span>Free</span>
          </p>
          <p className="flex justify-between">
            Estimated Tax <span>$-</span>
          </p>
          <hr />
          <h1 className="flex justify-between text-xl font-bold">
            Total <span>$</span>
          </h1>
        </div>
        <button className="w-full mt-8 btn bg-black text-white">GO TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
