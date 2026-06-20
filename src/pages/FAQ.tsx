import { useState } from "react";
import { faqs } from "../data/home.data";

const categories = ["Umumiy", "Kurslar va darslar", "To'lov", "Sertifikat"];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("Umumiy");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#EEF2FF] px-6 py-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-blue-600 transition">Bosh sahifa</a>
          <span>›</span>
          <span className="font-medium text-blue-600">FAQ</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Ko'p so'raladigan savollar
        </h1>
        <p className="text-slate-500 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
          Kurslar, to'lov va sertifikatlar haqidagi eng ko'p so'raladigan savollarga javoblar.
        </p>

        {/* SEARCH */}
        <div className="max-w-lg mx-auto relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Savollarni qidiring..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-2xl mx-auto px-6 py-12">

        {/* TABS */}
        <div className="bg-slate-100 rounded-xl p-1.5 flex gap-1 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                activeTab === cat
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ACCORDION */}
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
          {filtered.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-slate-400">
              Hech qanday savol topilmadi
            </div>
          ) : (
            filtered.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition"
                >
                  <span className="text-sm font-medium text-slate-800 pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {openIndex === i && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* CTA CARD */}
        <div className="mt-10 bg-blue-50 rounded-2xl px-8 py-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                className="h-6 w-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Javob topa olmadingizmi?
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-xs mx-auto leading-relaxed">
            Bizga yozing yoki qo'ng'iroq qiling — har qanday savolingizga javob beramiz.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition shadow-sm">
              Xabar yozish
            </a>
            <a href="tel:+998711234567" className="border border-slate-300 bg-white text-slate-700 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
              +998 71 123 45 67
            </a>
          </div>
        </div>

      </section>
    </div>
  );
};

export default FAQ;