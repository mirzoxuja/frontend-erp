import { Link } from "react-router-dom";

const timeline = [
  {
    year: "2015",
    title: "Boshlanish",
    description:
      "15 ta talaba bilan ilk frontend kursi tashkil etildi. Kichik 30 m² auditoriya va katta orzular bilan boshlandik.",
  },
  {
    year: "2017",
    title: "Birinchi muvaffaqiyat",
    description:
      "500-talaba bitirdi. Bizning ofisimiz kengaytirildi va 5 ta yangi yo'nalish ochildi: Backend, Mobil, Marketing va boshqalar.",
  },
  {
    year: "2019",
    title: "Online platforma",
    description:
      "O'z online o'qitish platformamizni ishga tushirdik. Bu butun O'zbekiston va Markaziy Osiyo bo'ylab talabalar olishga imkon berdi.",
  },
  {
    year: "2022",
    title: "Xalqaro hamkorlik",
    description:
      "EPAM, Yandex va boshqa yirik kompaniyalar bilan ish ta'minoti shartnomasi imzolandi. 2000+ talaba bitirgan edi.",
  },
  {
    year: "2026",
    title: "Yangi davr",
    description:
      "5000+ bitiruvchi, 35+ kurs, 42 ta o'qituvchi. Yangi yo'nalishlar: AI, Data Science va Cybersecurity ochildi.",
  },
];

const team = [
  { name: "Anvar Yo'ldoshev", role: "Bosh direktor", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Gulnora Rasulova", role: "O'quv qismi rahbari", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  { name: "Akmal Karimov", role: "JavaScript Lead", img: "https://randomuser.me/api/portraits/men/41.jpg" },
  { name: "Madina Ergasheva", role: "UX/UI dizayner", img: "https://randomuser.me/api/portraits/women/24.jpg" },
  { name: "Sherzod Rahimov", role: "Python o'qituvchisi", img: "https://randomuser.me/api/portraits/men/76.jpg" },
  { name: "Nodira Yusupova", role: "React Developer", img: "https://randomuser.me/api/portraits/women/12.jpg" },
  { name: "Sevara Tursunova", role: "Data Scientist", img: "https://randomuser.me/api/portraits/women/89.jpg" },
  { name: "Otabek Salimov", role: "Flutter Developer", img: "https://randomuser.me/api/portraits/men/53.jpg" },
  { name: "Diloraxon Nazarova", role: "Marketing", img: "https://randomuser.me/api/portraits/women/47.jpg" },
  { name: "Jasur Mahmudov", role: "DevOps muhandisi", img: "https://randomuser.me/api/portraits/men/15.jpg" },
  { name: "Kamola Yusupova", role: "Ta'lim bo'yicha menejer", img: "https://randomuser.me/api/portraits/women/33.jpg" },
  { name: "Bekzod Salimov", role: "HR rahbari", img: "https://randomuser.me/api/portraits/men/88.jpg" },
];

const achievements = [
  {
    title: "\"Eng yaxshi IT maktab\"",
    subtitle: "2023-yil O'zbekiston IT mukofoti",
    bg: "bg-blue-50",
    color: "text-blue-600",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
      </>
    ),
  },
  {
    title: "ISO 9001 sertifikati",
    subtitle: "Xalqaro sifat standarti",
    bg: "bg-orange-50",
    color: "text-orange-500",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </>
    ),
  },
  {
    title: "100+ hamkor kompaniya",
    subtitle: "Ish bilan ta'minlash bo'yicha",
    bg: "bg-yellow-50",
    color: "text-yellow-500 fill-yellow-500",
    icon: <path d="M10 1.5l2.6 5.5 6 0.8-4.3 4.2 1 6-5.3-2.9-5.3 2.9 1-6-4.3-4.2 6-0.8z" />,
    isStar: true,
  },
  {
    title: "94% bitirish darajasi",
    subtitle: "Yuqori talaba motivatsiyasi",
    bg: "bg-emerald-50",
    color: "text-emerald-500",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="8 12 11 15 16 9" />
      </>
    ),
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-slate-50 px-6 pt-16 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-md uppercase mb-5">
              Biz haqimizda
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Bizning hikoyamiz
            </h1>
            <p className="text-slate-600 leading-relaxed mb-4">
              2015-yilda kichik bir auditoriyada boshlanib, bugun O'zbekistondagi eng yirik online IT va dizayn
              ta'lim platformalaridan biriga aylandik. 10 yil ichida 5000+ talabani bitirib, ularning hayotini
              o'zgartirishga ulush qo'shdik.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Bizning maqsad — har bir o'zbek yoshining zamonaviy mehnat bozorida muvaffaqiyatli o'rin
              egallashiga yordam berish.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80"
            alt="Bizning jamoamiz"
            className="w-full h-96 object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
<section className="bg-white px-6 py-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Maqsad va orzu</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">Missiya va vizyonimiz</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Missiyamiz</h3>
        <p className="text-slate-600 leading-relaxed">
          O'zbek yoshlariga zamonaviy IT va dizayn sohalarida sifatli, amaliy va keng qamrovli ta'lim
          berish. Har bir bitiruvchi mehnat bozorida raqobatbardosh mutaxassis sifatida o'rin egallashi.
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
          <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">Vizyonimiz</h3>
        <p className="text-slate-600 leading-relaxed">
          2030-yilga borib Markaziy Osiyodagi eng nufuzli IT ta'lim platformalaridan biriga aylanish.
          50 000+ bitiruvchiga ega bo'lish va xalqaro miqyosda tan olinish.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* TIMELINE */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">10 yil safarimiz</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">Tarixiy bosqichlar</h2>
          </div>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="grid grid-cols-[90px_1fr] sm:grid-cols-[110px_1fr] gap-4 sm:gap-6 items-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 pt-6">{item.year}</span>
                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
<section className="bg-white px-6 py-20">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Jamoamiz</span>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-3">Bizning xodimlar</h2>
      <p className="text-slate-500">Har bir kishi o'z sohasida tajriba va malakaga ega mutaxassis.</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
      {team.map((member) => (
        <div key={member.name} className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
          <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
          <div className="bg-white text-center py-4 px-2">
            <p className="font-bold text-slate-900 text-sm">{member.name}</p>
            <p className="text-xs text-slate-500 mt-0.5">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ACHIEVEMENTS */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Yutuqlar</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">Faxrimiz bo'lgan yutuqlar</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a) => (
              <div key={a.title} className="bg-white border border-slate-200 rounded-2xl p-8 text-center">
                <div className={`h-14 w-14 rounded-full ${a.bg} flex items-center justify-center mx-auto mb-5`}>
                  {a.isStar ? (
                    <svg className={`h-6 w-6 ${a.color}`} viewBox="0 0 20 20">
                      {a.icon}
                    </svg>
                  ) : (
                    <svg className={`h-6 w-6 ${a.color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {a.icon}
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{a.title}</h3>
                <p className="text-sm text-slate-500">{a.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* CTA */}
<section className="bg-white px-6 py-16">
  <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl px-10 py-14 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Bizning oilamizga qo'shiling</h2>
    <p className="text-blue-100 mb-8">5000+ bitiruvchi qo'shildi. Endi navbat sizniki.</p>
    <div className="flex items-center justify-center gap-4">
      <Link
        to="/register"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
      >
        Ro'yxatdan o'tish
      </Link>
      <Link
        to="/courses"
        className="border border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
      >
        Kurslarni ko'rish
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;