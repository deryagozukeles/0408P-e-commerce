import React from "react";
import { useHistory } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

function OrderSuccessPage() {
  const history = useHistory();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="bg-green-100 p-6 rounded-full mb-6">
        <CheckCircle size={64} className="text-green-600" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Siparişiniz İçin Teşekkürler!
      </h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Siparişiniz başarıyla alındı. Hazırlanmaya başladığında sizi e-posta ile bilgilendireceğiz.
      </p>
      <div className="flex gap-4">
        <button 
          onClick={() => history.push("/")}
          className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition"
        >
          Alışverişe Devam Et
        </button>
        <button 
          onClick={() => history.push("/user/orders")}
          className="border-2 border-gray-200 px-8 py-3 rounded-xl font-bold hover:bg-gray-50 transition"
        >
          Siparişlerim
        </button>
      </div>
    </div>
  );
}

export default OrderSuccessPage;