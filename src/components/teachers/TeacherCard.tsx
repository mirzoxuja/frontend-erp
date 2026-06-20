import { Link } from "react-router-dom";
import type { ITeacherCard } from "../../types/teachers.type";

interface Props {
  teacher: ITeacherCard;
}

const TeacherCard = ({ teacher }: Props) => {
  return (
    <Link to={`/teachers/${teacher.id}`}>
      <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition hover:shadow-lg">
        <img
          src={teacher.img}
          alt={teacher.name}
          className="mx-auto h-24 w-24 rounded-full object-cover"
        />
        <h3 className="mt-4 font-bold text-slate-900">{teacher.name}</h3>
        <p className="mt-1 text-sm font-medium text-blue-600">{teacher.role}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
          {teacher.bio}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
          {teacher.stats.map(([value, label]) => (
            <div key={label}>
              <p className="font-bold text-slate-900">{value}</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </article>
    </Link>
  );
};

export default TeacherCard;