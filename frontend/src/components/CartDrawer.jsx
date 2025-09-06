import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { IoCart, IoClose } from "react-icons/io5";
import { AxiosInstance } from "../routes/axiosInstance";
import CartProduct from "./CartProduct";

export default function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  async function getCartItems() {
    let res = await AxiosInstance.get("/shop/cart/get");
    setCartItems(res.data.data.items);
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    getCartItems();
  };

  const onClearCart = async () => {
    await AxiosInstance.delete("/shop/cart/clear");
    getCartItems();
  };

  const onDecrease = async (product) => {
    await AxiosInstance.patch("/shop/cart/update", {
      productId: product.productId,
    });
    getCartItems();
  };

  const onIncrease = async (product) => {
    await AxiosInstance.post("/shop/cart/add", {
      productId: product.productId,
    });
    getCartItems();
  };

  const onRemove = async (product) => {
    await AxiosInstance.delete(`/shop/cart/delete/${product.productId}`);
    getCartItems();
  };

  let totalPrice = cartItems.reduce((sum, item) => {
    return sum + item.salePrice * item.quantity;
  }, 0);

  const DrawerList = (
    <Box sx={{ width: 400 }} role="presentation" className="relative">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Cart</h1>

        <IoClose size={30} onClick={toggleDrawer(false)} />
      </div>

      <Divider />

      <h1 className="text-end p-2 text-xl font-semibold text-red-400">
        <span
          className=" hover:text-red-700 cursor-pointer"
          onClick={onClearCart}
        >
          Clear cart
        </span>
      </h1>

      <div className="pb-20">
        {cartItems.length === 0 ? (
          <h1 className="text-center font-semibold">Cart is empty</h1>
        ) : (
          cartItems.map((item, idx) => {
            return (
              <CartProduct
                product={item}
                key={idx}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                onRemove={onRemove}
              />
            );
          })
        )}
      </div>

      <Divider />

      <h1 className="text-center  absolute py-5 bg-white w-full  bottom-0  right-0 text-2xl pe-3">
        Total Price : Rs. {Math.round(totalPrice)}
      </h1>
    </Box>
  );

  return (
    <div>
      <button onClick={toggleDrawer(true)}>
        <IoCart size={30} />
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}
