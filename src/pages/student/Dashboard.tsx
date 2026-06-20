import { Link } from "react-router-dom";
import {
  currentCourse,
  dashboardStats,
  activeCourses,
  weekDays,
  recommendedCourses,
} from "../../data/dashboard.data";

const StatIcon = ({ name, className }: { name: string; className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    book: <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zm16 0h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
    check: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 12l3 3 5-6" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="M8.5 13L7 22l5-3 5 3-1.5-9" /></>,
    search: <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    play: <polygon points="6 4 20 12 6 20" />,
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
};

const Dashboard = () => {
  return (
    <div>

      {/* GREETING + CTA */}
      <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-1">Salom, Bobur! 👋</h1>
          <p className="text-sm text-slate-500">
            Online o'qishingizni davom ettiring. Bugun yangi narsa o'rganish uchun ajoyib kun!
          </p>
        </div>
        <button className="flex items-center gap-2 border border-slate-200 bg-white px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition shrink-0">
          <StatIcon name="search" className="h-4 w-4" />
          Yangi kurs tanlash
        </button>
      </div>

      {/* CONTINUE LEARNING CARD */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden mb-6 flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-72 h-48 sm:h-auto shrink-0">
          <img src={currentCourse.img} alt={currentCourse.title} className="h-full w-full object-cover" />
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Davom etmoqda
          </span>
        </div>
        <div className="p-6 flex-1">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
            O'qishni davom ettiring
          </span>
          <h2 className="text-xl font-bold text-slate-900 mt-1 mb-1">{currentCourse.title}</h2>
          <p className="text-sm text-slate-500 mb-4">{currentCourse.moduleInfo}</p>

          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-slate-600">Kurs progressi</span>
            <span className="font-semibold text-blue-600">{currentCourse.percent}%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full mb-4">
            <div
              className="h-2 bg-blue-600 rounded-full"
              style={{ width: `${currentCourse.percent}%` }}
            />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
              <StatIcon name="play" className="h-4 w-4" />
              Darsni davom ettirish
            </button>
            <span className="text-sm text-slate-500">
              {currentCourse.completed} / {currentCourse.total} dars tugallandi
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-2xl p-5 relative">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center mb-3 ${stat.iconBg} ${stat.iconColor}`}>
              <StatIcon name={stat.icon} className="h-5 w-5" />
            </div>
            {stat.badge && (
              <span className="absolute top-5 right-5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
                {stat.badge}
              </span>
            )}
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* ACTIVE COURSES + WEEKLY GOAL */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6">

        {/* ACTIVE COURSES */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold text-slate-900">Faol online kurslarim</h2>
            <Link to="/dashboard/courses" className="text-sm font-medium text-blue-600 hover:underline">
              Hammasi →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activeCourses.map((course) => (
              <div key={course.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div className="relative h-32">
                  <img src={course.img} alt={course.title} className="h-full w-full object-cover" />
                  <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md ${course.categoryColor}`}>
                    {course.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2 leading-snug">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <img src={course.teacherImg} alt={course.teacher} className="h-5 w-5 rounded-full" />
                    <span className="text-sm text-slate-600">{course.teacher}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-500">{course.completed} / {course.total} dars</span>
                    <span className="font-semibold text-slate-700">{course.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full mb-4">
                    <div
                      className={`h-1.5 rounded-full ${course.progressColor}`}
                      style={{ width: `${course.percent}%` }}
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
                    Davom ettirish
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WEEKLY GOAL */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Haftalik maqsad</h2>

          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-blue-600">5</span>
            <span className="text-sm text-slate-500">/ 7 kun ketma-ket o'qildi 🔥</span>
          </div>

          <div className="flex items-center justify-between text-sm mt-4 mb-2">
            <span className="text-slate-600">Haftalik maqsad: 10 soat</span>
            <span className="font-semibold text-slate-700">7s 20daq</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full mb-5">
            <div className="h-2 bg-emerald-500 rounded-full" style={{ width: "73%" }} />
          </div>

          <div className="flex justify-between">
            {weekDays.map((day) => (
              <div key={day.label} className="flex flex-col items-center gap-2">
                <span className="text-xs text-slate-400">{day.label}</span>
                {day.status === "done" && (
                  <span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                )}
                {day.status === "current" && (
                  <span className="h-7 w-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                    {day.value}
                  </span>
                )}
                {day.status === "upcoming" && (
                  <span className="h-7 w-7 rounded-full bg-slate-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECOMMENDED */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-slate-900">Siz uchun tavsiya etiladi</h2>
          <Link to="/courses" className="text-sm font-medium text-blue-600 hover:underline">
            Barcha kurslar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recommendedCourses.map((course) => (
            <div key={course.id} className="border border-slate-200 rounded-2xl overflow-hidden">
              <div className="relative h-32">
                <img src={course.img} alt={course.title} className="h-full w-full object-cover" />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md ${course.categoryColor}`}>
                  {course.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-1.5 leading-snug">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4">
                  {course.lessons} dars · {course.hours} soat
                </p>
                <button className="w-full border border-slate-200 text-slate-700 py-2 rounded-lg text-sm font-semibold hover:bg-slate-50 transition">
                  Batafsil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;