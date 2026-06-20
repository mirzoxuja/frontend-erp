import { Search, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "JavaScript dasturlash",
    mentor: "Akmal Karimov",
    lessons: 28,
    rating: 4.9,
    reviews: 312,
    price: "490 000",
    oldPrice: "690 000",
    img: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&q=80",
    badge: "Frontend",
    badgeStyle: "bg-gray-900 text-white",
  },
  {
    id: 2,
    title: "React.js asoslari",
    mentor: "Nodira Yusupova",
    lessons: 32,
    rating: 4.8,
    reviews: 245,
    price: "790 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    badge: "Frontend",
    badgeStyle: "bg-gray-900 text-white",
  },
  {
    id: 3,
    title: "UX/UI dizayn",
    mentor: "Madina Ergasheva",
    lessons: 26,
    rating: 4.9,
    reviews: 189,
    price: "890 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    badge: "Dizayn",
    badgeStyle: "bg-white text-blue-600 border border-blue-200",
  },
  {
    id: 4,
    title: "Python dasturchilik",
    mentor: "Sherzod Rahimov",
    lessons: 40,
    rating: 4.7,
    reviews: 421,
    price: "790 000",
    oldPrice: "990 000",
    img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&q=80",
    badge: "Backend",
    badgeStyle: "bg-emerald-700 text-white",
  },
  {
    id: 5,
    title: "Flutter mobil ilovalar",
    mentor: "Otabek Salimov",
    lessons: 36,
    rating: 4.8,
    reviews: 167,
    price: "990 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&q=80",
    badge: "Mobil",
    badgeStyle: "bg-orange-500 text-white",
  },
  {
    id: 6,
    title: "Data Science va ML",
    mentor: "Sevara Tursunova",
    lessons: 44,
    rating: 4.6,
    reviews: 98,
    price: "1 200 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    badge: "Data Science",
    badgeStyle: "bg-red-600 text-white",
  },
  {
    id: 7,
    title: "DevOps muhandisi",
    mentor: "Jasur Mahmudov",
    lessons: 38,
    rating: 4.7,
    reviews: 112,
    price: "1 500 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80",
    badge: "DevOps",
    badgeStyle: "bg-white text-gray-900 border border-gray-200",
  },
  {
    id: 8,
    title: "Raqamli marketing",
    mentor: "Diloraxon Nazarova",
    lessons: 18,
    rating: 4.8,
    reviews: 203,
    price: "690 000",
    oldPrice: null,
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    badge: "Marketing",
    badgeStyle: "bg-white text-blue-600 border border-blue-200",
  },
];

const CourseCatalog = () => {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Kurslar katalogi</h1>
        <p className="mt-1 text-gray-500">
          Yangi kurs tanlang va bir martalik to'lov bilan umrbod kirish oling.
        </p>
      </div>

      {/* Search + filters */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Kurs nomi bo'yicha qidiring..."
            className="w-full border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Barcha kategoriyalar</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Mobil</option>
          <option>Dizayn</option>
          <option>Data Science</option>
          <option>DevOps</option>
          <option>Marketing</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Daraja: barchasi</option>
          <option>Boshlang'ich</option>
          <option>O'rta</option>
          <option>Yuqori</option>
        </select>
        <select className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Saralash: mashhur</option>
          <option>Arzon narx</option>
          <option>Qimmat narx</option>
          <option>Yangi qo'shilgan</option>
        </select>
      </div>

      {/* Course grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
          >
            <div className="relative h-40">
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md ${course.badgeStyle}`}
              >
                {course.badge}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-1">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {course.mentor} · {course.lessons} dars
              </p>

              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-gray-900">
                  {course.rating}
                </span>
                <span className="text-sm text-gray-400">
                  ({course.reviews})
                </span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-bold text-gray-900">
                  {course.price} so'm
                </span>
                {course.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    {course.oldPrice}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={`/dashboard/catalog/${course.id}`}
                  className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 text-center"
                >
                  Batafsil
                </Link>
                <Link
                  to={`/checkout/${course.id}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium text-center"
                >
                  Sotib olish
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Ko'rsatilmoqda <span className="font-semibold text-gray-900">1-8</span> /{" "}
          <span className="font-semibold text-gray-900">35</span> kurs
        </p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4].map((page) => (
            <button
              key={page}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "border border-gray-200 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-9 h-9 flex items-center justify-center border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCatalog;