const plans = [
  {
    name: "Boshlovchi",
    desc: "Noldan boshlovchilar uchun kurslar",
    price: "390 000",
    popular: false,
    features: [
      "Barcha video darslarga to'liq kirish",
      "Online chat orqali qo'llab-quvvatlash",
      "Uyga vazifalar tekshiruvi",
      "Video darslar arxivi",
      "Kurs sertifikati",
    ],
  },
  {
    name: "Mashhur",
    desc: "Eng ko'p tanlanadigankasbiy kurslar",
    price: "590 000",
    popular: true,
    features: [
      "Barcha video darslar + bonus materiallar",
      "Haftalik jonli online sessiyalar",
      "Shaxsiy mentor (haftada 1 soat, online)",
      "Portfolio loyihalari ustida ishlash",
      "Ishga joylashishda yordam",
      "Kurs sertifikati",
    ],
  },
  {
    name: "Kasbiy",
    desc: "Kasb egallash uchun to'liq dasturlar",
    price: "890 000",
    popular: false,
    features: [
      "Haftaliga 3 ta individual online dars",
      "Moslashuvchan dars jadvali",
      "Shaxsiy o'quv dasturi",
      "24/7 mentor bilan aloqa",
      "Ishga joylashishda yordam",
      "Kurs sertifikati",
    ],
  },
];

const discounts = [
  {
    icon: "💵",
    percent: "-15%",
    title: "Oldindan to'lov",
    desc: "Kursning to'liq narxini bir martada to'lasangiz.",
  },
  {
    icon: "👥",
    percent: "-10%",
    title: "Aka-uka va opa-singillar",
    desc: "Bir oiladan ikki yoki undan ortiq talaba o'qisa.",
  },
  {
    icon: "🎓",
    percent: "-10%",
    title: "Talabalar uchun",
    desc: "OTM talabasi ekanligingizni tasdiqlovchi hujjat bilan.",
  },
  {
    icon: "🎁",
    percent: "-5%",
    title: "Do'stingni olib kel",
    desc: "Siz ham, do'stingiz ham birinchi oyga chegirma olasiz.",
  },
];

const tableRows = [
  { feature: "Jonli online sessiyalar",      beginner: "—",    popular: "Haftada 1",      pro: "Haftada 3 (shaxsiy)" },
  { feature: "Mentor qo'llab-quvvatlovi",    beginner: "Chat", popular: "Shaxsiy mentor", pro: "24/7 yakka-yakka" },
  { feature: "Video darslar arxivi",         beginner: true,   popular: true,             pro: true },
  { feature: "Shaxsiy mentor",               beginner: false,  popular: true,             pro: true },
  { feature: "Portfolio loyihalari",         beginner: false,  popular: true,             pro: true },
  { feature: "Ishga joylashishda yordam",    beginner: false,  popular: true,             pro: true },
  { feature: "Moslashuvchan jadval",         beginner: false,  popular: false,            pro: true },
  { feature: "Sertifikat",                   beginner: true,   popular: true,             pro: true },
  { feature: "Narx (bir martalik)",          beginner: "390 000 so'mdan", popular: "590 000 so'mdan", pro: "890 000 so'mdan", isPrice: true },
];

const Check = () => (
  <svg className="h-4 w-4 text-blue-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="bg-[#EEF2FF] px-6 py-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-2 text-sm text-slate-500">
          <a href="/" className="hover:text-blue-600 transition">Bosh sahifa</a>
          <span>›</span>
          <span className="font-medium text-blue-600">Narxlar</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">
          Har bir kurs uchun adolatli narx
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
          Har kurs — bir martalik to'lov va umrbod kirish. Yashirin to'lovlar yo'q, demo darslar
          bepul. Quyida darajalar bo'yicha narxlar.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-blue-500 shadow-xl shadow-blue-100 scale-105 z-10"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Eng mashhur
                  </span>
                </div>
              )}

              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              <p className="text-sm text-slate-500 mt-1 mb-5">{plan.desc}</p>

              <div className="mb-6 border-t border-slate-100 pt-5">
                <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
                <span className="text-sm text-slate-500 ml-1">so'mdan</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <svg className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl text-sm font-semibold transition ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Kurslarni ko'rish
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-400 mt-10 max-w-2xl mx-auto leading-relaxed">
          Har bir kurs alohida sotib olinadi —{" "}
          <strong className="text-slate-600">bir martalik to'lov, umrbod kirish.</strong>{" "}
          Narxlar darajaga qarab boshlang'ich qiymatdan; aniq narx kurs sahifasida ko'rsatilgan.
        </p>
      </section>

      {/* DISCOUNTS */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
              Chegirmalar
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-2">
              Kamroq to'lash yo'llari
            </h2>
            <p className="text-sm text-slate-500">
              Chegirmalar bir-biri bilan qo'shilmaydi — eng kattasi qo'llaniladi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {discounts.map((d) => (
              <div key={d.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="text-2xl mb-3">{d.icon}</div>
                <div className="text-green-600 font-bold text-lg mb-1">{d.percent}</div>
                <div className="font-semibold text-slate-800 text-sm mb-1">{d.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Darajalarni taqqoslash</h2>
          <p className="text-sm text-slate-500">
            Har bir daraja kurslarida nima borligini batafsil ko'ring.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="text-left px-5 py-4 font-semibold text-slate-500 uppercase text-xs tracking-wider w-1/3">
                  Imkoniyat
                </th>
                <th className="text-center px-5 py-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">
                  Boshlovchi
                </th>
                <th className="text-center px-5 py-4 font-semibold text-blue-600 text-xs uppercase tracking-wider">
                  Mashhur
                </th>
                <th className="text-center px-5 py-4 font-semibold text-slate-700 text-xs uppercase tracking-wider">
                  Kasbiy
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-slate-100 last:border-0 ${
                    row.isPrice ? "bg-slate-50" : "hover:bg-slate-50"
                  }`}
                >
                  <td className={`px-5 py-3.5 ${row.isPrice ? "font-semibold text-slate-700" : "text-slate-600"}`}>
                    {row.feature}
                  </td>
                  <td className={`px-5 py-3.5 text-center ${row.isPrice ? "font-semibold text-slate-700" : "text-slate-400"}`}>
                    {typeof row.beginner === "boolean"
                      ? row.beginner ? <Check /> : <span>—</span>
                      : row.beginner}
                  </td>
                  <td className={`px-5 py-3.5 text-center ${row.isPrice ? "font-bold text-blue-600" : "text-slate-400"}`}>
                    {typeof row.popular === "boolean"
                      ? row.popular ? <Check /> : <span>—</span>
                      : row.popular}
                  </td>
                  <td className={`px-5 py-3.5 text-center ${row.isPrice ? "font-semibold text-slate-700" : "text-slate-400"}`}>
                    {typeof row.pro === "boolean"
                      ? row.pro ? <Check /> : <span>—</span>
                      : row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-slate-50 border border-slate-200 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Qaysi kursni tanlashni bilmayapsizmi?
            </h3>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              Bepul demo darslarni oching — mentor uslubi va dastur bilan tanishib, o'zingizga mos kursni tanlaysiz.
            </p>
          </div>
          <div className="flex gap-3 shrink-0 flex-wrap">
            <a href="/courses"
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition whitespace-nowrap">
              
              Bepul demo darslar
            </a>
            
            <a  href="/contact"
            className="border border-slate-300 bg-white text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition whitespace-nowrap">
           
              Konsultatsiya olish
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;