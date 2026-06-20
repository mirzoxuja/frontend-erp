import {
  Mail,
  Phone,
  MapPin,
  Pencil,
  Circle,
  Clock,
  BookOpen,
  Award,
  Info,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    icon: Circle,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    value: "87%",
    label: "O'rtacha natija",
  },
  {
    icon: Clock,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    value: "47",
    label: "O'rganilgan soat",
  },
  {
    icon: BookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    value: "3",
    label: "Jami kurslar",
  },
  {
    icon: Award,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
    value: "2",
    label: "Sertifikat",
  },
];

const personalInfo = [
  { label: "Ism", value: "Bobur" },
  { label: "Familiya", value: "Tojiev" },
  { label: "Tug'ilgan sana", value: "14-mart, 2004" },
  { label: "Jins", value: "Erkak" },
  { label: "Email", value: "bobur@example.uz" },
  { label: "Telefon", value: "+998 90 123 45 67" },
  { label: "Manzil", value: "Toshkent sh., Chilonzor tumani, 19-mavze" },
];

const professionalInfo = [
  { label: "Yo'nalish", value: "Frontend dasturlash" },
  { label: "Joriy daraja", value: "O'rta" },
  { label: "Maqsad", value: "Frontend dasturchi bo'lib ishga joylashish" },
  { label: "GitHub", value: "github.com/boburdev" },
  { label: "LinkedIn", value: "linkedin.com/in/bobur" },
];

const myCourses = [
  {
    id: 1,
    title: "React.js — zamonaviy frontend",
    mentor: "Akmal Karimov",
    progress: 62,
    status: "Davom etmoqda",
  },
  {
    id: 2,
    title: "Python asoslari",
    mentor: "Dilnoza Yusupova",
    progress: 33,
    status: "Davom etmoqda",
  },
  {
    id: 3,
    title: "JavaScript asoslari",
    mentor: "Akmal Karimov",
    progress: 100,
    status: "Tugallangan",
  },
];

const accountStatus = [
  { label: "Ro'yxatdan o'tgan", value: "2-sentyabr, 2025" },
  { label: "Sotib olingan kurslar", value: "3 ta" },
  { label: "Sertifikatlar", value: "2 ta" },
];

const StudentProfilePage = () => {
  return (
    <div className="space-y-6">
      {/* Profile header card */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 rounded-xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-5">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Bobur Tojiev"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">
                Bobur Tojiev
              </h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                Aktiv
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Talaba ID: <span className="font-semibold text-gray-700">ST-0123</span> · 2025-yil sentyabrdan beri
            </p>
            <div className="flex items-center gap-5 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-500" />
                bobur@example.uz
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-blue-500" />
                +998 90 123 45 67
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-500" />
                Toshkent, Chilonzor tumani
              </span>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium whitespace-nowrap">
          <Pencil className="w-4 h-4" />
          Profilni tahrirlash
        </button>
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

      {/* Personal + Professional info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Shaxsiy ma'lumotlar
            </h2>
          </div>
          <div className="px-6">
            {personalInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
              >
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-900 text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Kasbiy ma'lumotlar
            </h2>
          </div>
          <div className="px-6">
            {professionalInfo.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
              >
                <span className="text-gray-500">{item.label}</span>
                <span className="font-medium text-gray-900 text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 pb-6 mt-auto">
            <div className="flex items-start gap-2 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-gray-600">
              <Info className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
              <span>
                Olgan sertifikatlaringizni LinkedIn profilingizga qo'shing —
                ish beruvchilar e'tiboriga tushasiz.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Courses + Account status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* My courses */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Mening kurslarim
            </h2>
            <button className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:underline">
              Hammasi
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="px-6">
            {myCourses.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
              >
                <div>
                  <div className="font-semibold text-gray-900">
                    {course.title}
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">
                    Mentor: {course.mentor} · {course.progress}%
                  </div>
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                    course.status === "Tugallangan"
                      ? "bg-gray-100 text-gray-600 border border-gray-200"
                      : "bg-green-50 text-green-700 border border-green-200"
                  }`}
                >
                  {course.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Account status */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Hisob holati
            </h2>
          </div>
          <div className="px-6">
            <div className="flex items-center justify-between py-4 border-b border-gray-100">
              <span className="text-gray-500">Holat</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                Aktiv
              </span>
            </div>
            {accountStatus.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
              >
                <span className="text-gray-500">{item.label}</span>
                <span className="font-semibold text-gray-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="px-6 py-5 flex items-center gap-3">
            <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              To'lovlar tarixi
            </button>
            <button className="border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Sozlamalar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;