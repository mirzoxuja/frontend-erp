import { useState } from "react";
import { useParams, Link } from "react-router-dom";

interface IRequirement {
  label: string;
  color: string;
}

interface ICourseDetail {
  id: string;
  category: string;
  level: string;
  title: string;
  description: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  language: string;
  instructor: { name: string; role: string; img: string };
  heroImage: string;
  price: number;
  oldPrice: number;
  perks: string[];
  about: string[];
  learnPoints: string[];
  audience: string[];
  requirements: IRequirement[];
  details: { format: string; start: string; access: string; level: string; certificate: string };
}

const courses: ICourseDetail[] = [
  {
    id: "javascript-dasturlash",
    category: "Frontend",
    level: "Boshlovchi",
    title: "JavaScript dasturlash",
    description:
      "Nolinchi darajadan boshlab to'liq stack frontend dasturchi bo'lish. ES6+, DOM, asinxronlik, REST API va 5 ta real loyiha bilan amaliy tajriba.",
    rating: 4.9,
    reviewCount: 312,
    students: 540,
    duration: "3 oy davom etadi",
    language: "O'zbek tilida",
    instructor: {
      name: "Akmal Karimov — JavaScript Lead",
      role: "O'qituvchi",
      img: "https://i.pravatar.cc/100?img=12",
    },
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
    price: 490000,
    oldPrice: 690000,
    perks: [
      "24 ta video dars",
      "5 ta amaliy loyiha",
      "Sertifikat",
      "Mentor bilan aloqa",
      "Bo'lib to'lash mumkin",
    ],
    about: [
      "JavaScript — zamonaviy web ilovalarining asosi. Bu kurs sizga hech qanday oldindan tajriba kerak emas — biz noldan boshlab to'liq fullstack JavaScript dasturchisigacha ko'taramiz.",
      "Har bir mavzu nazariy darsdan keyin amaliy mashqlar bilan mustahkamlanadi. Kurs davomida 5 ta real biznes loyihasi ustida ishlaysiz — bular sizning portfolioda bo'ladi.",
    ],
    learnPoints: [
      "JavaScript asoslari va sintaksisi",
      "DOM va sahifa bilan ishlash",
      "Fetch API va REST",
      "OOP printsiplari",
      "ES6+: arrow, destructuring, spread",
      "Asinxronlik va Promise",
      "Git va GitHub bilan ishlash",
      "Test yozish (Jest)",
    ],
    audience: [
      "JavaScript bilan tanish bo'lmagan boshlovchilar uchun",
      "Karyerasini o'zgartirmoqchi bo'lganlar uchun",
      "Frontend yoki fullstack dasturchi bo'lishni xohlaganlar uchun",
      "Yangi mahorat o'rganishga qiziqqan har kim uchun",
    ],
    requirements: [
      { label: "HTML asoslari", color: "bg-blue-50 text-blue-600" },
      { label: "CSS asoslari", color: "bg-blue-50 text-blue-600" },
      { label: "Mantiqiy fikrlash", color: "bg-slate-100 text-slate-600" },
    ],
    details: {
      format: "100% online",
      start: "Hoziroq",
      access: "Umrbod",
      level: "Boshlovchi",
      certificate: "Ha",
    },
  },
];

const relatedCourses = [
  {
    id: "react-asoslari",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80",
    category: "Frontend",
    rating: 4.8,
    title: "React.js asoslari",
    excerpt: "SPA, Hooks, Router va Redux.",
    price: "790 000 so'm",
  },
  {
    id: "html-css-asoslari",
    img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=500&q=80",
    category: "Frontend",
    rating: 4.9,
    title: "HTML & CSS asoslari",
    excerpt: "Semantik HTML va zamonaviy CSS.",
    price: "390 000 so'm",
  },
  {
    id: "typescript",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80",
    category: "Frontend",
    rating: 4.8,
    title: "TypeScript",
    excerpt: "Tip xavfsizligi va katta loyihalar.",
    price: "590 000 so'm",
  },
  {
    id: "nodejs-dasturlash",
    img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&q=80",
    category: "Backend",
    rating: 4.7,
    title: "Node.js dasturlash",
    excerpt: "Express.js, MongoDB va REST API.",
    price: "890 000 so'm",
  },
];

const tabs = ["Tavsif", "Dastur", "O'qituvchi", "Sharhlar"] as const;
type Tab = (typeof tabs)[number];

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((c) => c.id === id) ?? courses[0];
  const [activeTab, setActiveTab] = useState<Tab>("Tavsif");

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              {/* BREADCRUMB */}
              <div className="flex items-center gap-2 text-sm text-white/70 mb-8">
                <Link to="/" className="hover:text-white transition">Bosh sahifa</Link>
                <span>›</span>
                <Link to="/courses" className="hover:text-white transition">Kurslar</Link>
                <span>›</span>
                <span className="text-white font-medium">{course.title}</span>
              </div>

              {/* TAGS */}
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xs font-semibold text-white bg-blue-500/70 px-3 py-1.5 rounded-md">
                  {course.category}
                </span>
                <span className="text-xs font-semibold text-white bg-emerald-500 px-3 py-1.5 rounded-md">
                  {course.level}
                </span>
              </div>

              {/* TITLE */}
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
                {course.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* META */}
              <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 pb-6 mb-6 border-b border-white/20">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M10 1.5l2.6 5.5 6 0.8-4.3 4.2 1 6-5.3-2.9-5.3 2.9 1-6-4.3-4.2 6-0.8z" />
                  </svg>
                  {course.rating} ({course.reviewCount} sharh)
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {course.students} talaba
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  {course.language}
                </span>
              </div>

              {/* INSTRUCTOR */}
              <div className="flex items-center gap-3">
                <img
                  src={course.instructor.img}
                  alt={course.instructor.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs text-white/60 mb-0.5">{course.instructor.role}</p>
                  <p className="text-sm font-bold text-white">{course.instructor.name}</p>
                </div>
              </div>
            </div>

            {/* PRICE CARD */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <img src={course.heroImage} alt={course.title} className="w-full h-80 object-cover" />
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-extrabold text-slate-900">
                    {course.price.toLocaleString("ru-RU")} so'm
                  </span>
                  <span className="text-base text-slate-400 line-through">
                    {course.oldPrice.toLocaleString("ru-RU")} so'm
                  </span>
                </div>

                <div className="space-y-3 pb-5 mb-5 border-b border-slate-100">
                  {course.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {perk}
                    </div>
                  ))}
                </div>

                <Link
                 to="/enroll"
                 className="block text-center w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition mb-3"
                >
                Ro'yxatdan o'tish
                </Link>
                <button className="w-full border border-slate-200 text-slate-700 font-semibold py-3 rounded-lg hover:bg-slate-50 transition">
                  Bepul konsultatsiya
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS + CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          <div>
            {/* TABS */}
            <div className="flex items-center gap-8 border-b border-slate-200 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium border-b-2 transition ${
                    activeTab === tab
                      ? "text-blue-600 border-blue-600 font-semibold"
                      : "text-slate-500 border-transparent hover:text-slate-700"
                  }`}
                >
                  {tab === "Sharhlar" ? `Sharhlar (${course.reviewCount})` : tab}
                </button>
              ))}
            </div>

            {activeTab === "Tavsif" && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Kurs haqida</h2>
                {course.about.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Nimalarni o'rganasiz?</h2>
                <div className="bg-slate-50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {course.learnPoints.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <svg className="h-4 w-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kim uchun?</h2>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {course.audience.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "Dastur" && (
              <p className="text-slate-500 text-sm">Dastur ma'lumotlari tez kunda qo'shiladi.</p>
            )}
            {activeTab === "O'qituvchi" && (
              <p className="text-slate-500 text-sm">O'qituvchi haqida ma'lumot tez kunda qo'shiladi.</p>
            )}
            {activeTab === "Sharhlar" && (
              <p className="text-slate-500 text-sm">Sharhlar tez kunda qo'shiladi.</p>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                Talab qilinadigan ko'nikmalar
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.requirements.map((req) => (
                  <span key={req.label} className={`text-sm font-medium px-3 py-1.5 rounded-lg ${req.color}`}>
                    {req.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
                Kurs ma'lumotlari
              </h3>
              <div>
                <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Format</span>
                  <span className="text-sm font-semibold text-slate-800">{course.details.format}</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Boshlanish</span>
                  <span className="text-sm font-semibold text-emerald-600">{course.details.start}</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Kirish</span>
                  <span className="text-sm font-semibold text-slate-800">{course.details.access}</span>
                </div>
                <div className="flex items-center justify-between py-2.5 border-b border-slate-100">
                  <span className="text-sm text-slate-500">Daraja</span>
                  <span className="text-sm font-bold text-slate-900">{course.details.level}</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-slate-500">Sertifikat</span>
                  <span className="text-sm font-semibold text-slate-800">{course.details.certificate}</span>
                </div>
              </div>
              <Link
                   to="/enroll"
                   className="block text-center w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition mb-3"
                  >
                  Hoziroq boshlash
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">O'xshash kurslar</h2>
          <p className="text-slate-500 mb-8">Bu kursni o'rganganlar quyidagilarni ham yoqtirdi.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((c) => (
              <Link
                key={c.id}
                to={`/courses/${c.id}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition"
              >
                <img src={c.img} alt={c.title} className="h-44 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      {c.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <svg className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M10 1.5l2.6 5.5 6 0.8-4.3 4.2 1 6-5.3-2.9-5.3 2.9 1-6-4.3-4.2 6-0.8z" />
                      </svg>
                      {c.rating}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{c.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{c.price}</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg">
                      Batafsil
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;