import type {
  IDashboardStat,
  IActiveCourse,
  IRecommendedCourse,
  IWeekDay,
} from "../types/dashboard.type";

export const currentCourse = {
  title: "React.js — zamonaviy frontend",
  moduleInfo: "Modul 4 · 12-dars: useState va useEffect hooklari",
  img: "/blog/react19.png",
  percent: 62,
  completed: 14,
  total: 32,
};

export const dashboardStats: IDashboardStat[] = [
  { icon: "book", value: "3", label: "Faol online kurslar", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { icon: "clock", value: "47", label: "O'rganilgan soat", badge: "+4s", iconBg: "bg-amber-50", iconColor: "text-amber-600" },
  { icon: "check", value: "2", label: "Tugallangan", iconBg: "bg-emerald-50", iconColor: "text-emerald-600" },
  { icon: "award", value: "2", label: "Sertifikatlar", iconBg: "bg-purple-50", iconColor: "text-purple-600" },
];

export const activeCourses: IActiveCourse[] = [
  {
    id: "react-frontend",
    title: "React.js — zamonaviy frontend",
    teacher: "Akmal Karimov",
    teacherImg: "https://i.pravatar.cc/40?img=12",
    category: "Frontend",
    categoryColor: "bg-blue-50 text-blue-600",
    img: "/blog/react19.png",
    completed: 14,
    total: 32,
    percent: 62,
    progressColor: "bg-blue-600",
  },
  {
    id: "python-asoslari",
    title: "Python asoslari",
    teacher: "Dilnoza Yusupova",
    teacherImg: "https://i.pravatar.cc/40?img=44",
    category: "Dasturlash",
    categoryColor: "bg-amber-50 text-amber-600",
    img: "/blog/django-flask.png",
    completed: 8,
    total: 24,
    percent: 33,
    progressColor: "bg-amber-500",
  },
  {
    id: "uxui-asoslari",
    title: "UX/UI dizayn asoslari",
    teacher: "Sardor Aliyev",
    teacherImg: "https://i.pravatar.cc/40?img=15",
    category: "Dizayn",
    categoryColor: "bg-slate-100 text-slate-600",
    img: "/blog/uxui.png",
    completed: 19,
    total: 20,
    percent: 95,
    progressColor: "bg-emerald-500",
  },
  {
    id: "smm-marketing",
    title: "SMM va raqamli marketing",
    teacher: "Madina Rashidova",
    teacherImg: "https://i.pravatar.cc/40?img=47",
    category: "Marketing",
    categoryColor: "bg-slate-100 text-slate-600",
    img: "/blog/seo.png",
    completed: 3,
    total: 18,
    percent: 17,
    progressColor: "bg-amber-500",
  },
];

export const weekDays: IWeekDay[] = [
  { label: "Du", status: "done" },
  { label: "Se", status: "done" },
  { label: "Cho", status: "done" },
  { label: "Pa", status: "done" },
  { label: "Ju", status: "current", value: 5 },
  { label: "Sh", status: "upcoming" },
  { label: "Ya", status: "upcoming" },
];

export const recommendedCourses: IRecommendedCourse[] = [
  {
    id: "typescript-chuqur",
    title: "TypeScript chuqur",
    category: "Frontend",
    categoryColor: "bg-blue-50 text-blue-600",
    img: "/blog/css-grid.png",
    lessons: 32,
    hours: 18,
  },
  {
    id: "nodejs-express",
    title: "Node.js va Express",
    category: "Backend",
    categoryColor: "bg-slate-100 text-slate-600",
    img: "/blog/docker.png",
    lessons: 40,
    hours: 24,
  },
  {
    id: "figma-prototiplash",
    title: "Figma bilan prototiplash",
    category: "Dizayn",
    categoryColor: "bg-sky-50 text-sky-600",
    img: "/blog/flutter.png",
    lessons: 26,
    hours: 14,
  },
  {
    id: "sql-malumotlar-bazasi",
    title: "SQL va ma'lumotlar bazasi",
    category: "Data",
    categoryColor: "bg-slate-100 text-slate-600",
    img: "/blog/ml.png",
    lessons: 22,
    hours: 12,
  },
];