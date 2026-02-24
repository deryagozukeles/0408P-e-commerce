import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { ChevronDown, ChevronUp, Package } from "lucide-react";

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    axiosInstance.get("/order")
      .then(res => setOrders(res.data))
      .catch(err => console.error("Siparişler yüklenemedi", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Package className="text-orange-500" /> Önceki Siparişlerim
      </h2>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="border rounded-lg overflow-hidden bg-white shadow-sm">
           
            <div 
              onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
              className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="grid grid-cols-3 gap-8 text-sm">
                <div>
                  <p className="text-gray-500 uppercase text-[10px] font-bold">Sipariş Tarihi</p>
                  <p>{new Date(order.order_date).toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-[10px] font-bold">Toplam Tutar</p>
                  <p className="font-bold text-orange-600">{order.price} TL</p>
                </div>
                <div>
                  <p className="text-gray-500 uppercase text-[10px] font-bold">Sipariş No</p>
                  <p>#{order.id}</p>
                </div>
              </div>
              {expandedOrder === order.id ? <ChevronUp /> : <ChevronDown />}
            </div>

          
            {expandedOrder === order.id && (
              <div className="p-4 border-t animate-fadeIn">
                <h4 className="font-bold text-sm mb-3 border-b pb-2">Ürün Detayları</h4>
                <div className="space-y-3">
                  {order.products.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-xs">
                          {item.count}x
                        </div>
                        <div>
                          <p className="font-medium">{item.detail}</p>
                          <p className="text-gray-400 text-xs">Ürün ID: {item.product_id}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersPage;