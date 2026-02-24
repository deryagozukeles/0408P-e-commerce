import React, { useEffect, useState, useMemo } from "react";
import axiosInstance from "../api/axiosInstance";
import { CreditCard, ChevronLeft, Edit2, Trash2, Plus, Check, MapPin, X, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearCart } from "../store/actions/shoppingCartActions";
import { toast } from "react-toastify";

const CITIES = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya", "Mersin"];
const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 15 }, (_, i) => new Date().getFullYear() + i);

function CreateOrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);

  const [addresses, setAddresses] = useState([]);
  const [cards, setCards] = useState([]);
  
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [selectedBilling, setSelectedBilling] = useState(null);
  const [isSameAddress, setIsSameAddress] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [ccv, setCcv] = useState("");

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  
  const [editingAddress, setEditingAddress] = useState(null);
  const [editingCard, setEditingCard] = useState(null);

  const [addressFormData, setAddressFormData] = useState({
    title: "", name: "", surname: "", phone: "", city: "", district: "", neighborhood: "",
  });
  const [cardFormData, setCardFormData] = useState({
    card_no: "", expire_month: 1, expire_year: 2024, name_on_card: "",
  });

  const { cart } = useSelector((state) => state.shoppingCart);

  const totalAmount = useMemo(() => {
    return cart?.reduce((total, item) => total + item.product.price * item.count, 0) || 0;
  }, [cart]);
  const shippingPrice = totalAmount > 150 ? 0 : 29.99;
  const grandTotal = totalAmount + shippingPrice;

  useEffect(() => {
    fetchAddresses();
    fetchCards();
  }, []);

  const fetchAddresses = async () => {
    try {
      const res = await axiosInstance.get("/user/address");
      setAddresses(res.data);
      if (res.data.length > 0 && !selectedShipping) {
        setSelectedShipping(res.data[0].id);
        setSelectedBilling(res.data[0].id);
      }
    } catch (err) { toast.error("Adresler yüklenemedi"); }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingAddress) {
        await axiosInstance.put("/user/address", { ...addressFormData, id: editingAddress.id });
        toast.success("Adres güncellendi");
      } else {
        await axiosInstance.post("/user/address", addressFormData);
        toast.success("Adres eklendi");
      }
      fetchAddresses();
      setShowAddressForm(false);
      setEditingAddress(null);
    } catch (err) { toast.error("Adres kaydedilemedi"); }
  };

  const deleteAddress = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Bu adresi silmek istediğinize emin misiniz?")) return;
    try {
      await axiosInstance.delete(`/user/address/${id}`);
      fetchAddresses();
      toast.info("Adres silindi");
    } catch (err) { toast.error("Silinemedi"); }
  };

  const fetchCards = async () => {
    try {
      const res = await axiosInstance.get("/user/card");
      setCards(res.data);
    } catch (err) { console.error("Kartlar alınamadı"); }
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCard) {
        await axiosInstance.put("/user/card", { ...cardFormData, id: editingCard.id });
        toast.success("Kart güncellendi");
      } else {
        await axiosInstance.post("/user/card", cardFormData);
        toast.success("Kart kaydedildi");
      }
      fetchCards();
      setShowCardForm(false);
      setEditingCard(null);
      setCardFormData({ card_no: "", expire_month: 1, expire_year: 2024, name_on_card: "" });
    } catch (err) { toast.error("Kart işlemi başarısız"); }
  };

  const deleteCard = async (e, id) => {
    e.stopPropagation();
    if (!window.confirm("Bu kartı silmek istediğinize emin misiniz?")) return;
    try {
      await axiosInstance.delete(`/user/card/${id}`);
      fetchCards();
      toast.info("Kart silindi");
    } catch (err) { toast.error("Kart silinemedi"); }
  };

  const startEditCard = (e, card) => {
    e.stopPropagation();
    setEditingCard(card);
    setCardFormData({
      card_no: card.card_no,
      expire_month: card.expire_month,
      expire_year: card.expire_year,
      name_on_card: card.name_on_card
    });
    setShowCardForm(true);
  };

  

const handlePlaceOrder = async () => {
    const card = cards.find((c) => c.id === selectedCard);
    if (!selectedShipping) return toast.error("Lütfen bir adres seçiniz.");
    if (!card) return toast.error("Lütfen bir kart seçiniz.");
    if (ccv.length < 3) return toast.error("Lütfen geçerli bir CCV giriniz.");

    const orderPayload = {
      address_id: selectedShipping,
      order_date: new Date().toISOString(), 
      card_no: Number(card.card_no),
      card_name: card.name_on_card,
      card_expire_month: Number(card.expire_month),
      card_expire_year: Number(card.expire_year),
      card_ccv: Number(ccv),
      price: Number(grandTotal.toFixed(2)),
      products: cart.map((item) => ({
        product_id: item.product.id,
        count: item.count,
       
        detail: `${item.product.name} - ${item.variant || 'Standart'}` 
      }))
    };

    setLoading(true);
    try {
      await axiosInstance.post("/order", orderPayload);
      toast.success("Siparişiniz başarıyla alındı! 🎉");
      
     
      dispatch(clearCart()); 
      
    
      history.push("/orders"); 
    } catch (error) {
      toast.error("Sipariş oluşturulurken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      
      <div className="flex justify-center gap-10 mb-12 border-b">
        <button 
          onClick={() => setStep(1)}
          className={`pb-4 px-4 font-bold transition-all border-b-2 flex items-center gap-2 ${step === 1 ? "border-orange-500 text-orange-600" : "border-transparent text-gray-400 hover:text-gray-600"}`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedShipping ? "bg-green-500 text-white" : (step === 1 ? "bg-orange-500 text-white" : "bg-gray-200")}`}>
            {selectedShipping ? <Check size={14}/> : 1}
          </span>
          Adres Bilgileri
        </button>
        
        <button 
          onClick={() => setStep(2)}
          className={`pb-4 px-4 font-bold transition-all border-b-2 flex items-center gap-2 ${step === 2 ? "border-orange-500 text-orange-600" : "border-transparent text-gray-400 hover:text-gray-600"}`}
        >
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${selectedCard && ccv.length >= 3 ? "bg-green-500 text-white" : (step === 2 ? "bg-orange-500 text-white" : "bg-gray-200")}`}>
            {selectedCard && ccv.length >= 3 ? <Check size={14}/> : 2}
          </span>
          Ödeme Seçenekleri
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          
         
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2"><MapPin className="text-orange-500" /> Teslimat Adresi</h2>
                <button onClick={() => setShowAddressForm(true)} className="text-orange-600 font-bold flex items-center gap-1 hover:underline text-sm"><Plus size={16}/> Yeni Adres</button>
              </div>

              {showAddressForm && (
                <form onSubmit={handleAddressSubmit} className="p-6 bg-gray-50 border-2 border-orange-100 rounded-xl grid grid-cols-2 gap-4">
                  <input required placeholder="Adres Başlığı (Örn: Ev)" value={addressFormData.title} onChange={(e) => setAddressFormData({...addressFormData, title: e.target.value})} className="col-span-2 p-2 border rounded"/>
                  <input required placeholder="Ad" value={addressFormData.name} onChange={(e) => setAddressFormData({...addressFormData, name: e.target.value})} className="p-2 border rounded"/>
                  <input required placeholder="Soyad" value={addressFormData.surname} onChange={(e) => setAddressFormData({...addressFormData, surname: e.target.value})} className="p-2 border rounded"/>
                  <input required placeholder="Telefon" value={addressFormData.phone} onChange={(e) => setAddressFormData({...addressFormData, phone: e.target.value})} className="p-2 border rounded"/>
                  <select required value={addressFormData.city} onChange={(e) => setAddressFormData({...addressFormData, city: e.target.value})} className="p-2 border rounded">
                    <option value="">Şehir Seçiniz</option>
                    {CITIES.map(c => <option key={c} value={c.toLowerCase()}>{c}</option>)}
                  </select>
                  <input required placeholder="İlçe" value={addressFormData.district} onChange={(e) => setAddressFormData({...addressFormData, district: e.target.value})} className="p-2 border rounded col-span-2"/>
                  <textarea required placeholder="Adres Detayı" value={addressFormData.neighborhood} onChange={(e) => setAddressFormData({...addressFormData, neighborhood: e.target.value})} className="col-span-2 p-2 border rounded" rows="2" />
                  <div className="col-span-2 flex gap-2">
                    <button type="submit" className="flex-1 bg-orange-500 text-white py-2 rounded font-bold">Kaydet</button>
                    <button type="button" onClick={() => {setShowAddressForm(false); setEditingAddress(null);}} className="flex-1 bg-gray-200 py-2 rounded font-bold text-gray-600">Vazgeç</button>
                  </div>
                </form>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                {addresses.map(addr => (
                  <div key={addr.id} onClick={() => {setSelectedShipping(addr.id); if(isSameAddress) setSelectedBilling(addr.id)}} className={`p-4 border-2 rounded-xl relative cursor-pointer transition-all ${selectedShipping === addr.id ? "border-orange-500 bg-orange-50" : "border-gray-100 bg-white"}`}>
                    <div className="absolute top-2 right-2 flex gap-2">
                       <button onClick={(e) => {e.stopPropagation(); setEditingAddress(addr); setAddressFormData({...addr}); setShowAddressForm(true);}} className="text-blue-500"><Edit2 size={14}/></button>
                       <button onClick={(e) => deleteAddress(e, addr.id)} className="text-red-500"><Trash2 size={14}/></button>
                    </div>
                    <h3 className="font-bold">{addr.title}</h3>
                    <p className="text-sm mt-1">{addr.name} {addr.surname}</p>
                    <p className="text-xs text-gray-500">{addr.neighborhood} {addr.district}/{addr.city}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold flex items-center gap-2"><CreditCard className="text-orange-500" /> Kart Bilgileri</h2>
                <button onClick={() => {setEditingCard(null); setCardFormData({card_no: "", expire_month: 1, expire_year: 2024, name_on_card: ""}); setShowCardForm(true);}} className="text-orange-600 font-bold flex items-center gap-1 text-sm"><Plus size={16}/> Yeni Kart Ekle</button>
              </div>

              {showCardForm && (
                <form onSubmit={handleCardSubmit} className="p-6 bg-gray-800 text-white rounded-2xl space-y-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold">{editingCard ? "Kartı Düzenle" : "Yeni Kart Bilgileri"}</h3>
                    <X className="cursor-pointer" size={18} onClick={() => setShowCardForm(false)}/>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400">Kart Üzerindeki İsim</label>
                    <input required value={cardFormData.name_on_card} onChange={(e) => setCardFormData({...cardFormData, name_on_card: e.target.value})} className="w-full bg-transparent border-b border-gray-600 p-1 focus:border-orange-500 outline-none uppercase"/>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase text-gray-400">Kart Numarası</label>
                    <input required maxLength="16" value={cardFormData.card_no} onChange={(e) => setCardFormData({...cardFormData, card_no: e.target.value})} className="w-full bg-transparent border-b border-gray-600 p-1 focus:border-orange-500 outline-none" placeholder="**** **** **** ****"/>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase text-gray-400">Ay</label>
                      <select value={cardFormData.expire_month} onChange={(e) => setCardFormData({...cardFormData, expire_month: Number(e.target.value)})} className="w-full bg-gray-700 p-2 rounded text-sm outline-none">
                        {MONTHS.map(m => <option key={m} value={m}>{m < 10 ? `0${m}` : m}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-gray-400">Yıl</label>
                      <select value={cardFormData.expire_year} onChange={(e) => setCardFormData({...cardFormData, expire_year: Number(e.target.value)})} className="w-full bg-gray-700 p-2 rounded text-sm outline-none">
                        {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-orange-500 py-3 rounded-xl font-bold mt-4 hover:bg-orange-600 transition">{editingCard ? "Güncelle" : "Kartı Kaydet"}</button>
                </form>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                {cards.map(card => (
                  <div key={card.id} onClick={() => setSelectedCard(card.id)} className={`p-5 border-2 rounded-2xl relative cursor-pointer transition-all ${selectedCard === card.id ? "border-orange-500 bg-orange-50 shadow-md" : "border-gray-100 bg-white"}`}>
                    <div className="absolute top-3 right-3 flex gap-2">
                       <button onClick={(e) => startEditCard(e, card)} className="text-gray-400 hover:text-blue-500"><Edit2 size={14}/></button>
                       <button onClick={(e) => deleteCard(e, card.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 mb-4"><CreditCard size={24}/> <span className="text-xs font-bold text-gray-600 uppercase italic">Credit Card</span></div>
                    <p className="text-lg tracking-[0.2em] font-mono">**** **** **** {card.card_no.toString().slice(-4)}</p>
                    <div className="flex justify-between mt-4">
                       <div><p className="text-[9px] text-gray-400 uppercase">Kart Sahibi</p><p className="text-xs font-bold uppercase">{card.name_on_card}</p></div>
                       <div><p className="text-[9px] text-gray-400 uppercase">Son Kullanma</p><p className="text-xs font-bold">{card.expire_month}/{card.expire_year}</p></div>
                    </div>
                    
                    {selectedCard === card.id && (
                      <div className="mt-4 pt-4 border-t flex items-center justify-between animate-fadeIn">
                        <span className="text-xs font-bold text-orange-600 italic">Güvenlik Kodu (CCV):</span>
                        <input type="password" maxLength="3" placeholder="CCV" value={ccv} onChange={(e) => setCcv(e.target.value)} className="w-16 p-1 border-b-2 border-orange-500 outline-none bg-transparent text-center" onClick={e => e.stopPropagation()}/>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

       
        <div className="lg:col-span-1">
          <div className="bg-white border-2 border-gray-100 p-6 rounded-2xl shadow-sm sticky top-10">
            <h3 className="text-lg font-bold mb-6">Sipariş Özeti</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-500"><span>Ürün Toplamı</span><span className="font-bold text-black">{totalAmount.toFixed(2)} TL</span></div>
              <div className="flex justify-between text-gray-500"><span>Kargo</span><span className="font-bold text-green-600">{shippingPrice === 0 ? "Bedava" : `${shippingPrice} TL`}</span></div>
              <div className="pt-4 border-t flex justify-between text-base font-extrabold text-orange-600"><span>Genel Toplam</span><span>{grandTotal.toFixed(2)} TL</span></div>
            </div>

            <button 
              disabled={loading || (step === 2 && (!selectedCard || ccv.length < 3)) || (step === 1 && !selectedShipping)}
              onClick={step === 1 ? () => setStep(2) : handlePlaceOrder}
              className="w-full mt-8 bg-orange-500 text-white py-4 rounded-xl font-bold hover:bg-orange-600 disabled:bg-gray-200 transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
            >
              {loading ? "İşleniyor..." : (
                step === 1 ? (
                  <>Ödeme Adımına Geç <ChevronRight size={18}/></>
                ) : (
                  "Siparişi Onayla ve Bitir"
                )
              )}
            </button>
            
            
            {step === 1 && selectedShipping && (
              <p className="text-[11px] text-gray-400 mt-3 text-center italic">Adres seçildi, ödeme adımına geçebilirsiniz.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateOrderPage;