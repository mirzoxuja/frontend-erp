import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Users, PlayCircle, Globe, Check, Menu, ChevronDown, ChevronUp } from "lucide-react";

const tabs = [
  { id: "tavsif", label: "Tavsif" },
  { id: "dastur", label: "Dastur" },
  { id: "oqituvchi", label: "O'qituvchi" },
];

const learnPointsLeft = [
  "JavaScript asoslari va sintaksisi",
  "DOM va sahifa bilan ishlash",
  "Fetch API va REST",
];

const learnPointsRight = [
  "ES6+: arrow, destructuring, spread",
  "Asinxronlik va Promise",
  "Git va GitHub bilan ishlash",
];

const priceFeatures = [
  "28 ta video dars",
  "5 ta amaliy loyiha",
  "Umrbod kirish",
  "Tugatgach sertifikat",
  "Mentor bilan aloqa",
];

const courseModules = [
  {
    id: "modul1",
    title: "Modul 1: Kirish va asoslar",
    desc: "Kursga kirish, muhitni sozlash, o'zgaruvchilar va ma'lumot turlari. (5 dars · 48 daq)",
  },
  {
    id: "modul2",
    title: "Modul 2: Funksiyalar va massivlar",
    desc: "Funksiyalar, parametrlar, massiv metodlari va amaliy mashqlar. (5 dars · 52 daq)",
  },
  {
    id: "modul3",
    title: "Modul 3: DOM va hodisalar",
    desc: "DOM bilan ishlash, elementlarni tanlash va hodisalarni boshqarish. (5 dars · 50 daq)",
  },
];

const StudentCourseDetail = () => {
  const [activeTab, setActiveTab] = useState("tavsif");
  const [openModule, setOpenModule] = useState("modul1");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center gap-4">
        <button className="text-gray-500">
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-semibold text-gray-900">Kurs tafsiloti</h1>
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

      <div className="p-6 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/dashboard/catalog" className="hover:text-blue-600">
            Katalog
          </Link>
          <span>/</span>
          <span className="font-semibold text-gray-900">
            JavaScript dasturlash
          </span>
        </div>

        {/* Header card */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-wrap gap-6">
          <img
            src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&q=80"
            alt="JavaScript dasturlash"
            className="w-full sm:w-72 h-44 rounded-xl object-cover"
          />
          <div className="flex-1 min-w-[260px]">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Frontend
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              JavaScript dasturlash
            </h2>
            <div className="flex items-center gap-5 text-sm text-gray-500 flex-wrap">
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="font-semibold text-gray-900">4.9</span>
                (312 sharh)
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                540 talaba
              </span>
              <span className="flex items-center gap-1.5">
                <PlayCircle className="w-4 h-4" />
                28 dars · 40 soat
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4" />
                O'zbek tilida
              </span>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <img
                src="https://i.pravatar.cc/64?img=12"
                alt="Akmal Karimov"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-900">
                Akmal Karimov — JavaScript Lead
              </span>
            </div>
          </div>
        </div>

        {/* Tabs + content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Left: tabs */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-6 px-6 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 text-sm font-medium border-b-2 -mb-px ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "tavsif" && (
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Kurs haqida
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  JavaScript — zamonaviy web ilovalarning asosi. Bu kurs
                  noldan boshlab to'liq frontend dasturchisigacha olib
                  boradi. Har bir mavzu amaliy mashqlar va real loyihalar
                  bilan mustahkamlanadi.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Nimalarni o'rganasiz?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[...learnPointsLeft, ...learnPointsRight].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "dastur" && (
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-5">
                  Kurs dasturi — 6 modul · 28 dars
                </h3>

                <div className="space-y-3">
                  {courseModules.map((mod) => {
                    const isOpen = openModule === mod.id;
                    return (
                      <div
                        key={mod.id}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setOpenModule((prev) => (prev === mod.id ? "" : mod.id))
                          }
                          className="w-full flex items-center justify-between px-5 py-4 text-left"
                        >
                          <span className="font-semibold text-gray-900">
                            {mod.title}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-4 text-gray-500 text-sm border-t border-gray-100 pt-4">
                            {mod.desc}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "oqituvchi" && (
              <div className="p-6">
                <div className="border border-gray-100 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="Akmal Karimov"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">
                        Akmal Karimov
                      </div>
                      <div className="text-gray-500 mt-0.5">
                        JavaScript Lead · 8 yillik tajriba
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Frontend yo'nalishida 8 yillik amaliy tajriba. EPAM va
                    Uzcard kompaniyalarida ishlagan. 540+ talabaga dars
                    bergan, o'rtacha reytingi 4.9.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right: price card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 h-fit">
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                490 000 so'm
              </span>
              <span className="text-gray-400 line-through">690 000</span>
            </div>

            <div className="space-y-3 mb-6">
              {priceFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link
              to="/checkout/javascript"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg py-3 font-semibold"
            >
              Sotib olish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCourseDetail;