import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseCount,
  decreaseCount,
  removeFromCart,
  toggleChecked,
} from "../store/actions/shoppingCartActions";
import { useHistory } from "react-router-dom";

function ShoppingCartPage() {
  const { cart } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();
  const history=useHistory();

  const totalAmount = cart
    .filter((item) => item.checked)
    .reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );

  const shippingPrice = totalAmount > 1500 ? 0 : 29.99;
  const discount = 0;
  const grandTotal = totalAmount + shippingPrice - discount;

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">
          Sepetiniz boş
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">

     
      <div className="lg:col-span-3">
        <h1 className="text-2xl font-bold mb-8">
          Sepetim ({cart.length} Ürün)
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-6 border p-4 rounded-lg shadow-sm"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  dispatch(toggleChecked(item.product.id))
                }
                className="w-5 h-5"
              />

              <img
                src={item.product.images?.[0]?.url}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              <div className="flex-1">
                <h3 className="font-medium text-gray-800">
                  {item.product.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Birim Fiyat: {item.product.price} TL
                </p>

                <p className="text-orange-500 font-semibold mt-2">
                  Toplam:{" "}
                  {(item.product.price * item.count).toFixed(2)} TL
                </p>
              </div>

              <div className="flex items-center border rounded-md overflow-hidden">
                <button
                  onClick={() =>
                    dispatch(decreaseCount(item.product.id))
                  }
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>

                <span className="px-4">{item.count}</span>

                <button
                  onClick={() =>
                    dispatch(increaseCount(item.product.id))
                  }
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.product.id))
                }
                className="text-red-500 hover:text-red-700"
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>

      
      <div className="bg-gray-50 lg:col-span-1 p-6 rounded-xl shadow-md h-fit sticky top-10">

        <h2 className="text-lg font-bold mb-6">
          Sipariş Özeti
        </h2>

        <div className="flex justify-between mb-3">
          <span>Ürünler Toplamı</span>
          <span>{totalAmount.toFixed(2)} TL</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Kargo</span>
          <span>
            {shippingPrice === 0
              ? "Ücretsiz"
              : `${shippingPrice.toFixed(2)} TL`}
          </span>
        </div>

        <div className="flex justify-between mb-3 text-green-600">
          <span>İndirim</span>
          <span>- {discount.toFixed(2)} TL</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-lg font-bold mb-6">
          <span>Genel Toplam</span>
          <span className="text-orange-500">
            {grandTotal.toFixed(2)} TL
          </span>
        </div>

        <button onClick={() => history.push("/create-order")}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
        >
          Sepeti Onayla
        </button>
      </div>

    </div>
  );
}

export default ShoppingCartPage;