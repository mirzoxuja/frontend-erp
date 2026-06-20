import { Link } from "react-router-dom";

interface IInProgressCourse {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  mentor: string;
  mentorImg: string;
  img: string;
  completedLessons: number;
  totalLessons: number;
  percent: number;
  barColor: string;
}

interface ICompletedCourse {
  id: string;
  title: string;
  mentor: string;
  mentorImg: string;
  img: string;
  score: number;
  grade: string;
}

const stats = [
  {
    label: "Davom etayotgan",
    value: 3,
    bg: "bg-blue-50",
    color: "text-blue-600",
    icon: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    label: "Tugallangan",
    value: 2,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
  },
  {
    label: "Sertifikatlar",
    value: 2,
    bg: "bg-purple-50",
    color: "text-purple-600",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
      </>
    ),
  },
  {
    label: "O'rganilgan soat",
    value: 47,
    bg: "bg-amber-50",
    color: "text-amber-500",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 16 14" />
      </>
    ),
  },
];

const inProgressCourses: IInProgressCourse[] = [
  {
    id: "react",
    title: "React.js — zamonaviy frontend",
    category: "Frontend",
    categoryColor: "bg-amber-500",
    mentor: "Akmal Karimov",
    mentorImg: "https://i.pravatar.cc/64?img=12",
    img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    completedLessons: 14,
    totalLessons: 32,
    percent: 62,
    barColor: "bg-blue-600",
  },
  {
    id: "python",
    title: "Python asoslari",
    category: "Dasturlash",
    categoryColor: "bg-orange-600",
    mentor: "Dilnoza Yusupova",
    mentorImg: "https://i.pravatar.cc/64?img=45",
    img: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&q=80",
    completedLessons: 8,
    totalLessons: 24,
    percent: 33,
    barColor: "bg-orange-500",
  },
  {
    id: "uxui",
    title: "UX/UI dizayn asoslari",
    category: "Dizayn",
    categoryColor: "bg-blue-600",
    mentor: "Sardor Aliyev",
    mentorImg: "https://i.pravatar.cc/64?img=14",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    completedLessons: 19,
    totalLessons: 20,
    percent: 95,
    barColor: "bg-emerald-500",
  },
];

const completedCourses: ICompletedCourse[] = [
  {
    id: "js",
    title: "JavaScript asoslari",
    mentor: "Akmal Karimov",
    mentorImg: "https://i.pravatar.cc/64?img=12",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    score: 94,
    grade: "A'lo",
  },
  {
    id: "git",
    title: "Git va GitHub",
    mentor: "Jasur Rahimov",
    mentorImg: "https://i.pravatar.cc/64?img=33",
    img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80",
    score: 88,
    grade: "Yaxshi",
  },
];

const MyCourses = () => {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Mening online kurslarim</h1>
          <p className="text-slate-500">Yozilgan barcha online kurslaringiz, progress va sertifikatlaringiz.</p>
        </div>
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Yangi kurs olish
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="bg-white border border-slate-200 rounded-2xl p-6">
            <div className={`h-11 w-11 rounded-xl ${s.bg} flex items-center justify-center mb-4`}>
              <svg className={`h-5 w-5 ${s.color}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {s.icon}
              </svg>
            </div>
            <p className="text-3xl font-bold text-slate-900 mb-1">{s.value}</p>
            <p className="text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* IN PROGRESS */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Davom etayotgan kurslar ({inProgressCourses.length})
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {inProgressCourses.map((course) => (
            <div key={course.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-40">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                <span className={`absolute top-3 left-3 text-xs font-semibold text-white px-2.5 py-1 rounded-md ${course.categoryColor}`}>
                  {course.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <img src={course.mentorImg} alt={course.mentor} className="h-6 w-6 rounded-full object-cover" />
                  <span className="text-sm text-slate-600">{course.mentor}</span>
                </div>

                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-500">
                    {course.completedLessons} / {course.totalLessons} dars
                  </span>
                  <span className="font-semibold text-slate-900">{course.percent}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-5">
                  <div className={`h-full rounded-full ${course.barColor}`} style={{ width: `${course.percent}%` }} />
                </div>

                <Link
                  to={`/dashboard/courses/${course.id}/lesson/current`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2.5 rounded-lg hover:bg-blue-700 transition"
                >
                  <svg className="h-3.5 w-3.5 fill-white" viewBox="0 0 24 24">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                  Davom ettirish
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPLETED */}
      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">
          Tugallangan kurslar ({completedCourses.length})
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {completedCourses.map((course) => (
            <div key={course.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-40">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-slate-700 px-2.5 py-1 rounded-md">
                  Tugallangan
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <img src={course.mentorImg} alt={course.mentor} className="h-6 w-6 rounded-full object-cover" />
                  <span className="text-sm text-slate-600">{course.mentor}</span>
                </div>
                <p className="text-sm text-slate-500 mb-5">
                  Yakuniy natija: <span className="font-bold text-emerald-600">{course.score}% ({course.grade})</span>
                </p>
                <button className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-semibold py-2.5 rounded-lg hover:bg-emerald-600 transition">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
                  </svg>
                  Sertifikatni yuklash
                </button>
              </div>
            </div>
          ))}

          <Link
            to="/courses"
            className="border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-8 hover:border-blue-300 hover:bg-blue-50/30 transition min-h-[280px]"
          >
            <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Yangi online kurs olish</h3>
            <p className="text-sm text-slate-500">Katalogdan kurs tanlang va darrov o'qishni boshlang.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;