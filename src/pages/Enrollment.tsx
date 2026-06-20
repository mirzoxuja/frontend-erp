import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

interface IEnrollForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  course: string;
  level: string;
  comment: string;
  agreed: boolean;
}

const steps = [
  {
    number: 1,
    title: "Kursni tanlang",
    description: "Katalogdan yo'nalishingizga mos online kursni tanlang — barchasi video darslardan iborat.",
  },
  {
    number: 2,
    title: "Ro'yxatdan o'ting",
    description: "Bir daqiqada hisob yarating va shaxsiy kabinetingizga darrov kiring.",
  },
  {
    number: 3,
    title: "Bepul demo darslar",
    description: "Har bir kursning birinchi darslari bepul — formati yoqsa, davom ettirasiz.",
  },
  {
    number: 4,
    title: "O'qishni boshlang",
    description: "Qulay tarifni tanlang va istalgan vaqtda, istalgan joydan o'qishni boshlang.",
  },
];

const courses = [
  {
    title: "JavaScript dasturlash",
    level: "Boshlovchi daraja",
    mentor: "Akmal Karimov",
    mentorImg: "https://i.pravatar.cc/64?img=12",
    lessons: "32 dars",
    duration: "~24 soat",
    price: "590 000 so'm",
  },
  {
    title: "UX/UI dizayn",
    level: "Boshlovchi daraja",
    mentor: "Madina Ergasheva",
    mentorImg: "https://i.pravatar.cc/64?img=47",
    lessons: "28 dars",
    duration: "~20 soat",
    price: "490 000 so'm",
  },
  {
    title: "Python dasturlash",
    level: "Boshlovchi daraja",
    mentor: "Sherzod Rahimov",
    mentorImg: "https://i.pravatar.cc/64?img=51",
    lessons: "36 dars",
    duration: "~28 soat",
    price: "590 000 so'm",
  },
  {
    title: "React.js asoslari",
    level: "O'rta daraja",
    mentor: "Nodira Yusupova",
    mentorImg: "https://i.pravatar.cc/64?img=45",
    lessons: "40 dars",
    duration: "~30 soat",
    price: "790 000 so'm",
  },
  {
    title: "Grafik dizayn",
    level: "Boshlovchi daraja",
    mentor: "Kamola Yusupova",
    mentorImg: "https://i.pravatar.cc/64?img=33",
    lessons: "24 dars",
    duration: "~16 soat",
    price: "390 000 so'm",
  },
  {
    title: "Flutter (mobil)",
    level: "Boshlovchi daraja",
    mentor: "Otabek Salimov",
    mentorImg: "https://i.pravatar.cc/64?img=15",
    lessons: "34 dars",
    duration: "~26 soat",
    price: "690 000 so'm",
  },
];

const benefits = [
  {
    title: "HD video darslar",
    description: "Istalgan vaqtda, istalgan joydan ko'ring — umrbod kirish bilan.",
    icon: (
      <>
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </>
    ),
  },
  {
    title: "Amaliy topshiriqlar",
    description: "Har modul oxirida topshiriq va testlar — bilimni mustahkamlaysiz.",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    title: "Mentor qo'llab-quvvatlovi",
    description: "Savollaringizga online chat orqali mentorlar javob beradi.",
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
  {
    title: "Sertifikat",
    description: "Kursni tugatganingizda raqamli sertifikat olasiz.",
    icon: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M9 13.5L7 22l5-3 5 3-2-8.5" />
      </>
    ),
  },
];

const Enrollment = () => {
  const [form, setForm] = useState<IEnrollForm>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    course: "",
    level: "Boshlang'ich — noldan boshlayman",
    comment: "",
    agreed: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.phone || !form.course || !form.agreed) return;
    alert("Arizangiz qabul qilindi!");
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-indigo-50/60 to-white px-6 pt-10 pb-14">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
            <Link to="/" className="hover:text-blue-600 transition">Bosh sahifa</Link>
            <span>›</span>
            <span className="text-slate-900 font-semibold">Kursga yozilish</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5">Online kursga yozilish</h1>
          <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Kursni tanlang, ro'yxatdan o'ting va istalgan joydan o'qishni boshlang. Bepul demo darslar bilan
            tanishing — hech qanday majburiyatsiz.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Qanday ishlaydi</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">O'qishni boshlash — 4 qadam</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="border border-slate-200 rounded-2xl p-6">
                <div className="h-10 w-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center mb-5">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES TABLE */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Mashhur online kurslar</h2>
          <p className="text-slate-500 mb-8">Istalgan vaqtda boshlang — barcha darslar video formatda, umrbod kirish bilan.</p>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-4">Kurs</th>
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-4">Mentor</th>
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-4">Darslar</th>
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-4">Davomiyligi</th>
                  <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide px-6 py-4">Narx</th>
                  <th className="px-6 py-4" />
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.title} className="border-b border-slate-100 last:border-0">
                    <td className="px-6 py-5">
                      <p className="font-semibold text-slate-900">{course.title}</p>
                      <p className="text-xs text-slate-400">{course.level}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2.5">
                        <img src={course.mentorImg} alt={course.mentor} className="h-8 w-8 rounded-full object-cover" />
                        <span className="text-sm text-slate-700">{course.mentor}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600">{course.lessons}</td>
                    <td className="px-6 py-5 text-sm text-slate-600">{course.duration}</td>
                    <td className="px-6 py-5 text-sm font-semibold text-slate-900">{course.price}</td>
                    <td className="px-6 py-5 text-right">
                      <button
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, course: course.title }))}
                        className="bg-blue-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                      >
                        Boshlash
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* FORM CARD */}
          <div className="border border-slate-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Bepul ro'yxatdan o'ting</h2>
            <p className="text-slate-500 mb-8">Formani to'ldiring — demo darslarga kirish havolasi emailingizga yuboriladi.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ism <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Aziz"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Familiya</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Karimov"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+998 90 123 45 67"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="aziz@example.uz"
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Kurs <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
                  >
                    <option value="">Kursni tanlang</option>
                    {courses.map((c) => (
                      <option key={c.title} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Tajriba darajangiz</label>
                  <select
                    name="level"
                    value={form.level}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700"
                  >
                    <option>Boshlang'ich — noldan boshlayman</option>
                    <option>O'rta — asoslarni bilaman</option>
                    <option>Yuqori — tajribam bor</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Izoh</label>
                <textarea
                  name="comment"
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Savolingiz yoki istaklaringiz bo'lsa yozing..."
                  rows={4}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <label className="flex items-start gap-2.5 text-sm text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                Foydalanish shartlari va shaxsiy ma'lumotlarni qayta ishlashga roziman.
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Ariza yuborish
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-5">Online ta'limda nimaga ega bo'lasiz?</h3>
              <div className="space-y-5">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {b.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{b.title}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2">Savolingiz bormi?</h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Qo'ng'iroq qiling yoki Telegram orqali yozing — darhol javob beramiz.
              </p>
              <a
                href="tel:+998711234567"
                className="block text-center bg-white border border-slate-200 rounded-lg py-3 font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                +998 71 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;