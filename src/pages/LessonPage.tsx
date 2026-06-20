import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  Lock,
  Play,
  Clock,
  BookOpen,
  Atom,
} from "lucide-react";

const modules = [
  {
    id: "modul3",
    title: "Modul 3 · Komponentlar",
    meta: "8 dars · tugallandi",
    expanded: false,
    lessons: [],
  },
  {
    id: "modul4",
    title: "Modul 4 · Hooklar",
    meta: "6 dars · 2 tugallandi",
    expanded: true,
    lessons: [
      { id: 1, title: "Hooklarga kirish", duration: "10:05", status: "done" },
      { id: 2, title: "useRef asoslari", duration: "09:30", status: "done" },
      {
        id: 3,
        title: "useState va useEffect hooklari",
        duration: "18:24",
        status: "current",
      },
      {
        id: 4,
        title: "useContext va Context API",
        duration: "16:00",
        status: "locked",
      },
      {
        id: 5,
        title: "Custom hook yaratish",
        duration: "14:20",
        status: "locked",
      },
      {
        id: 6,
        title: "Amaliyot: To'do ilovasi",
        duration: "22:15",
        status: "locked",
      },
    ],
  },
  {
    id: "modul5",
    title: "Modul 5 · Router va Redux",
    meta: "7 dars · qulflangan",
    expanded: false,
    lessons: [],
  },
];

const tabs = [
  { id: "tavsif", label: "Tavsif" },
  { id: "materiallar", label: "Materiallar" },
  { id: "izohlar", label: "Izohlar (8)" },
];

const LessonPage = () => {
  const [openModule, setOpenModule] = useState("modul4");
  const [activeTab, setActiveTab] = useState("tavsif");

  const toggleModule = (id: string) => {
    setOpenModule((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/courses"
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Kurslarim
          </Link>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-gray-900">
            React.js — zamonaviy frontend
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm font-semibold text-blue-600">62%</span>
          <div className="w-32 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-600 rounded-full" style={{ width: "62%" }} />
          </div>
          <Link
            to="/dashboard/courses"
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-700 text-sm"
          >
            <X className="w-4 h-4" />
            Chiqish
          </Link>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        {/* Left: video + lesson */}
        <div>
          {/* Video */}
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden flex items-center justify-center">
            <Atom className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 text-teal-400/30" />
            <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
              <Play className="w-6 h-6 text-blue-600 fill-blue-600" />
            </button>
            <span className="absolute bottom-3 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
              18:24
            </span>
          </div>

          {/* Lesson meta */}
          <div className="mt-5">
            <div className="text-xs font-bold tracking-wide text-blue-600">
              MODUL 4 · 12-DARS
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mt-1.5">
              useState va useEffect hooklari
            </h1>
            <div className="flex items-center gap-5 mt-3 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                18 daqiqa
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                14 / 32 dars
              </span>
              <span className="flex items-center gap-1.5">
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="Akmal Karimov"
                  className="w-5 h-5 rounded-full object-cover"
                />
                Akmal Karimov
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mt-5">
              <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <ChevronLeft className="w-4 h-4" />
                Oldingi dars
              </button>
              <button className="flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium ml-auto">
                <Check className="w-4 h-4" />
                Tugatdim
              </button>
              <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 text-sm font-medium">
                Keyingi dars
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-b border-gray-200 flex items-center gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 text-sm font-medium border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "tavsif" && (
            <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
              <p>
                Bu darsda React'ning eng muhim ikki hookasi —{" "}
                <span className="font-semibold text-gray-900">useState</span>{" "}
                va{" "}
                <span className="font-semibold text-gray-900">useEffect</span>{" "}
                bilan ishlashni o'rganamiz. Komponent holatini (state) qanday
                saqlash, yangilash va yon ta'sirlarni (side effects)
                boshqarishni amaliy misollarda ko'rib chiqamiz.
              </p>
              <p>
                Dars oxiriga borib siz holatga ega interaktiv komponent
                yaratishni va ma'lumotlarni API'dan yuklab, ekranda
                ko'rsatishni bilib olasiz.
              </p>
              <div>
                <p className="font-semibold text-gray-900 mb-2">
                  Ushbu darsda:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>useState bilan holatni boshqarish</li>
                  <li>useEffect va bog'liqliklar massivi (dependency array)</li>
                  <li>Komponent hayot sikli (lifecycle)</li>
                  <li>Keng tarqalgan xatolar va ulardan qochish</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "materiallar" && (
            <div className="mt-6 text-gray-500 text-sm">
              Bu darsga biriktirilgan materiallar hozircha yo'q.
            </div>
          )}

          {activeTab === "izohlar" && (
            <div className="mt-6 text-gray-500 text-sm">
              Izohlar bo'limi tez orada qo'shiladi.
            </div>
          )}
        </div>

        {/* Right: curriculum */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm h-fit">
          <div className="p-5 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">Kurs dasturi</h2>
            <div className="flex items-center justify-between text-sm mt-3">
              <span className="text-gray-500">14 / 32 dars tugallandi</span>
              <span className="font-semibold text-blue-600">62%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div
                className="h-2 bg-blue-600 rounded-full"
                style={{ width: "62%" }}
              />
            </div>
          </div>

          <div>
            {modules.map((mod) => {
              const isOpen = openModule === mod.id;
              return (
                <div key={mod.id} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => toggleModule(mod.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {mod.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {mod.meta}
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && mod.lessons.length > 0 && (
                    <div className="pb-2">
                      {mod.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between gap-3 px-5 py-2.5 mx-2 rounded-lg ${
                            lesson.status === "current"
                              ? "bg-blue-50"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {lesson.status === "done" && (
                              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                            )}
                            {lesson.status === "current" && (
                              <Play className="w-4 h-4 text-blue-600 shrink-0 fill-blue-600" />
                            )}
                            {lesson.status === "locked" && (
                              <Lock className="w-4 h-4 text-gray-300 shrink-0" />
                            )}
                            <span
                              className={`text-sm truncate ${
                                lesson.status === "current"
                                  ? "font-semibold text-blue-600"
                                  : lesson.status === "locked"
                                  ? "text-gray-400"
                                  : "text-gray-700"
                              }`}
                            >
                              {lesson.title}
                            </span>
                          </div>
                          <span className="text-xs text-gray-400 shrink-0">
                            {lesson.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;