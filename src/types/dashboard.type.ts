export interface IDashboardStat {
  icon: string;
  value: string;
  label: string;
  badge?: string;
  iconBg: string;
  iconColor: string;
}

export interface IActiveCourse {
  id: string;
  title: string;
  teacher: string;
  teacherImg: string;
  category: string;
  categoryColor: string;
  img: string;
  completed: number;
  total: number;
  percent: number;
  progressColor: string;
}

export interface IRecommendedCourse {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  img: string;
  lessons: number;
  hours: number;
}

export interface IWeekDay {
  label: string;
  status: "done" | "current" | "upcoming";
  value?: number;
}