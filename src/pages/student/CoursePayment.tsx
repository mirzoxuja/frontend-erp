import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Menu } from "lucide-react";

const paymentMethods = [
  {
    id: "payme",
    name: "Payme",
    desc: "Payme ilovasi orqali tez to'lov",
    badge: "Payme",
  },
  {
    id: "click",
    name: "Click",
    desc: "Click orqali to'lov",
    badge: "Click",
  },
  {
    id: "karta",
    name: "Plastik karta",
    desc: "UzCard / Humo / Visa",
    badge: "Karta",
  },
];

const CoursePayment = () => {
  const [selectedMethod, setSelectedMethod] = useState("payme");
  const [saveCard, setSaveCard] = useState(false);

  const coursePrice = 690000;
  const discount = 200000;
  const total = coursePrice - discount;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button className="text-gray-500">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">
          To'lovni rasmiylashtirish
        </h1>
        <div className="flex items-center gap-3 ml-auto">
          <img
            src="https://i.pravatar.cc/64?img=53"
            alt="Bobur Tojiev"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">Bobur Tojiev</p>
            <p className="text-xs text-gray-400">Online talaba</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/dashboard/catalog" className="hover:text-blue-600">
            Katalog
          </Link>
          <span>/</span>
          <span>JavaScript dasturlash</span>
          <span>/</span>
          <span className="font-semibold text-gray-900">To'lov</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Left column */}
          <div className="space-y-6">
            {/* Payment method */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                To'lov usulini tanlang
              </h2>

              <div className="space-y-3">
                {paymentMethods.map((method) => {
                  const isActive = selectedMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full flex items-center justify-between gap-4 border rounded-xl px-5 py-4 text-left transition ${
                        isActive
                          ? "border-blue-500 bg-blue-50/60"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                            isActive ? "border-blue-600" : "border-gray-300"
                          }`}
                        >
                          {isActive && (
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                          )}
                        </span>
                        <div>
                          <div
                            className={`font-semibold ${
                              isActive ? "text-blue-600" : "text-gray-900"
                            }`}
                          >
                            {method.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {method.desc}
                          </div>
                        </div>
                      </div>
                      <span className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap">
                        {method.badge}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 mt-5 text-sm text-gray-500">
                <Lock className="w-4 h-4 text-green-600" />
                To'lov xavfsiz himoyalangan. Umrbod kirish.
              </div>
            </div>

            {/* Card details */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5 pb-5 border-b border-gray-100">
                Karta ma'lumotlari
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Karta raqami
                  </label>
                  <input
                    type="text"
                    placeholder="8600 0000 0000 0000"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      Amal qilish muddati
                    </label>
                    <input
                      type="text"
                      placeholder="OO/YY"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1.5">
                      SMS kod / CVV
                    </label>
                    <input
                      type="text"
                      placeholder="•••"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSaveCard((s) => !s)}
                  className="flex items-center gap-3"
                >
                  <span
                    className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
                      saveCard ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        saveCard ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </span>
                  <span className="text-sm text-gray-700">
                    Kartani keyingi to'lovlar uchun saqlash
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right column: order summary */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-fit">
            <h2 className="text-lg font-semibold text-gray-900 mb-5">
              Buyurtma xulosasi
            </h2>

            <div className="flex items-center gap-3 pb-5 border-b border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=200&q=80"
                alt="JavaScript dasturlash"
                className="w-14 h-14 rounded-lg object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  JavaScript dasturlash
                </div>
                <div className="text-sm text-gray-500">Akmal Karimov</div>
              </div>
            </div>

            <div className="py-5 space-y-3 border-b border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Kurs narxi</span>
                <span className="font-medium text-gray-900">
                  {coursePrice.toLocaleString("ru-RU")} so'm
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Chegirma</span>
                <span className="font-medium text-green-600">
                  -{discount.toLocaleString("ru-RU")} so'm
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between py-5">
              <span className="text-lg font-bold text-gray-900">Jami</span>
              <span className="text-xl font-bold text-gray-900">
                {total.toLocaleString("ru-RU")} so'm
              </span>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold">
              To'lovni tasdiqlash
            </button>

            <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
              <Lock className="w-4 h-4 text-green-600" />
              To'lov xavfsiz himoyalangan. Umrbod kirish.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;