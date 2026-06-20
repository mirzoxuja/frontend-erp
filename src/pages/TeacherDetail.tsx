import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { teachersList } from "../data/teachers.data";

const TeacherDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState("about");

  const teacher = teachersList.find((t) => t.id === id);
  const others = teachersList.filter((t) => t.id !== id).slice(0, 3);

  if (!teacher) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-3">O'qituvchi topilmadi</h1>
        <Link to="/teachers" className="text-blue-600 font-medium hover:underline">
          O'qituvchilar ro'yxatiga qaytish
        </Link>
      </div>
    );
  }

  const yearsExp = teacher.workHistory
    ? new Date().getFullYear() - parseInt(teacher.workHistory[teacher.workHistory.length - 1].period.split(" ")[0])
    : null;

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="bg-[#EEF2FF] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition">Bosh sahifa</Link>
            <span>›</span>
            <Link to="/teachers" className="hover:text-blue-600 transition">O'qituvchilar</Link>
            <span>›</span>
            <span className="font-medium text-slate-700">{teacher.name}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={teacher.img}
              alt={teacher.name}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-white shrink-0"
            />
            <div>
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
                {teacher.role}
              </span>
              <h1 className="text-3xl font-bold text-slate-900 mt-1 mb-3">{teacher.name}</h1>
              <p className="text-sm text-slate-600 max-w-2xl leading-relaxed mb-5">
                {teacher.bio}
              </p>

              <div className="flex gap-8 mb-6">
                {teacher.stats.map(([value, label]) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-slate-900">{value}{label === "Talaba" ? "+" : ""}</p>
                    <p className="text-xs text-slate-500">{label}</p>
                  </div>
                ))}
                {yearsExp && (
                  <div>
                    <p className="text-xl font-bold text-slate-900">{yearsExp} yil</p>
                    <p className="text-xs text-slate-500">Tajriba</p>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                  Darsga yozilish
                </button>
                <button className="border border-slate-300 bg-white text-slate-700 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
                  Savol berish
                </button>
                <div className="flex gap-2 ml-1">
                  {["✈", "in", "</>"].map((icon, i) => (
                    <span
                      key={i}
                      className="h-9 w-9 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 text-sm hover:bg-slate-50 transition cursor-pointer"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {/* TABS */}
        <div className="flex gap-8 border-b border-slate-200 mb-8">
          {[
            { key: "about", label: "Haqida" },
            { key: "courses", label: `Kurslari (${teacher.stats[0][0]})` },
            { key: "reviews", label: `Sharhlar (${teacher.reviewsCount ?? "0"})` },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`pb-3 text-sm font-medium border-b-2 transition ${
                activeTab === tab.key
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT - MAIN */}
          <div className="lg:col-span-2">
            {activeTab === "about" && (
              <>
                <h2 className="text-xl font-bold text-slate-900 mb-4">O'qituvchi haqida</h2>
                <div className="space-y-4 mb-8">
                  {teacher.fullBio?.map((p, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>

                {teacher.skills && (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">Ko'nikmalar</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {teacher.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1.5 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {teacher.workHistory && (
                  <>
                    <h3 className="text-lg font-bold text-slate-900 mb-5">Ish tajribasi</h3>
                    <div className="space-y-7">
                      {teacher.workHistory.map((job, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center pt-1.5">
                            <span className={`h-2.5 w-2.5 rounded-full ${job.current ? "bg-blue-600" : "bg-slate-300"}`} />
                            {i !== teacher.workHistory!.length - 1 && (
                              <span className="w-px flex-1 bg-slate-200 mt-1" />
                            )}
                          </div>
                          <div className="pb-2">
                            <span className="text-xs font-semibold text-blue-600">{job.period}</span>
                            <h4 className="text-sm font-bold text-slate-900 mt-0.5">{job.title}</h4>
                            <p className="text-xs text-slate-500 mb-1.5">{job.company}</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{job.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </>
            )}

            {activeTab === "courses" && (
              <p className="text-sm text-slate-500">Kurslar ro'yxati tez kunda qo'shiladi.</p>
            )}

            {activeTab === "reviews" && (
              <p className="text-sm text-slate-500">Sharhlar tez kunda qo'shiladi.</p>
            )}
          </div>

          {/* RIGHT - SIDEBAR */}
          <div className="space-y-6">
            {teacher.certificates && (
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Sertifikatlar</h3>
                <div className="space-y-4">
                  {teacher.certificates.map((cert) => (
                    <div key={cert.title} className="flex gap-3">
                      <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 text-amber-500 text-sm">
                        🏅
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{cert.title}</p>
                        <p className="text-xs text-slate-500">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {teacher.schedule && (
              <div className="border border-slate-200 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-4">Dars beradigan vaqtlari</h3>
                <div className="space-y-3">
                  {teacher.schedule.map((s) => (
                    <div key={s.days} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{s.days}</span>
                      <span className="text-slate-800 font-medium">{s.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-blue-50 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                {teacher.name.split(" ")[0]} bilan o'qishni boshlang
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Yangi guruh 1-iyul kuni boshlanadi. Joylar soni cheklangan.
              </p>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition">
                Kursga yozilish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER TEACHERS */}
      <section className="bg-slate-50 px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Boshqa o'qituvchilar</h2>
          <p className="text-sm text-slate-500 mb-8">
            Jamoamizning boshqa mutaxassislari bilan ham tanishing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {others.map((t) => (
              <Link
                key={t.id}
                to={`/teachers/${t.id}`}
                className="bg-white rounded-2xl border border-slate-100 p-6 text-center shadow-sm hover:shadow-lg transition"
              >
                <img src={t.img} alt={t.name} className="mx-auto h-20 w-20 rounded-full object-cover mb-3" />
                <h3 className="font-bold text-slate-900">{t.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-2">{t.role}</p>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">{t.bio}</p>
                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                  {t.stats.map(([value, label]) => (
                    <div key={label}>
                      <p className="font-bold text-slate-900 text-sm">{value}</p>
                      <p className="text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeacherDetail;