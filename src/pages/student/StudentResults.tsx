import { BarChart3, CheckSquare, CheckCircle2, Zap } from "lucide-react";

const stats = [
  {
    icon: BarChart3,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    value: "87%",
    label: "O'rtacha natija",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    value: "11",
    label: "Yechilgan testlar",
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    value: "10",
    label: "O'tilgan",
  },
  {
    icon: Zap,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    value: "95",
    label: "Eng yuqori ball",
  },
];

const results = [
  {
    id: 1,
    test: "Modul 4 testi: Hooklar",
    course: "React.js — zamonaviy frontend",
    date: "12-noyabr, 2025",
    score: 88,
    status: "passed",
  },
  {
    id: 2,
    test: "Amaliyot: Komponentlar",
    course: "React.js — zamonaviy frontend",
    date: "28-oktabr, 2025",
    score: 95,
    status: "passed",
  },
  {
    id: 3,
    test: "Funksiyalar va sikllar testi",
    course: "Python asoslari",
    date: "15-oktabr, 2025",
    score: 64,
    status: "retake",
  },
  {
    id: 4,
    test: "Yakuniy loyiha: Figma maket",
    course: "UX/UI dizayn asoslari",
    date: "03-oktabr, 2025",
    score: 92,
    status: "passed",
  },
  {
    id: 5,
    test: "Boshlang'ich test: JS asoslari",
    course: "Python asoslari",
    date: "21-sentabr, 2025",
    score: 78,
    status: "passed",
  },
];

const StudentResults = () => {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Natijalarim</h1>
        <p className="mt-1 text-gray-500">
          Kurs testlari va amaliy topshiriqlar bo'yicha natijalaringiz.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${stat.iconBg}`}
              >
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Results table */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">
            Test va topshiriq natijalari
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/60 border-b border-gray-100">
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Test / Topshiriq
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Kurs
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Sana
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Natija
                </th>
                <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                  Holat
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {row.test}
                  </td>
                  <td className="px-6 py-4 text-gray-500">{row.course}</td>
                  <td className="px-6 py-4 text-gray-500">{row.date}</td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      row.status === "passed"
                        ? "text-green-600"
                        : "text-orange-600"
                    }`}
                  >
                    {row.score}%
                  </td>
                  <td className="px-6 py-4">
                    {row.status === "passed" ? (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        O'tdi
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-200">
                        Qayta topshirish mumkin
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentResults;