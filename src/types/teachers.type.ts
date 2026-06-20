export interface ITeacherCard {
  id: string;
  name: string;
  role: string;
  category: string;
  bio: string;
  stats: [string, string][];
  img: string;
  reviewsCount?: string;
  fullBio?: string[];
  skills?: string[];
  workHistory?: IWorkHistoryItem[];
  certificates?: ICertificate[];
  schedule?: IScheduleItem[];
}

export interface IWorkHistoryItem {
  period: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

export interface ICertificate {
  title: string;
  issuer: string;
}

export interface IScheduleItem {
  days: string;
  time: string;
}

export interface ITeacherCategory {
  label: string;
  value: string;
}