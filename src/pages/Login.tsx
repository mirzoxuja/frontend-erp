import Icon from "../components/ui/Icon";

const Login = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 p-12 text-white lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
            <Icon.logo className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">O'quv Markaz</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold leading-tight">
            Bizning oilamizga qo'shiling.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Ro'yxatdan o'ting va bepul birinchi darsga taklif oling. 5000+
            talaba bilan birga o'rging va karyera yo'lingizni boshlang.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              "Birinchi darslar bepul",
              "35+ ta yo'nalish — o'zingiznikini tanlang",
              "Ish ta'minoti — 100+ hamkor kompaniya",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                  <Icon.check className="h-3 w-3" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-xs text-white/70">
          <span>© 2026 O'quv Markaz</span>
          <a href="#" className="transition hover:text-white">
            Yordam kerakmi?
          </a>
        </div>
      </aside>

      <main className="flex w-full flex-col overflow-y-auto px-6 py-8 lg:w-1/2 lg:px-16">
        <div className="flex justify-end">
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-slate-700"
          >
            <Icon.arrowLeft className="h-4 w-4" />
            Bosh sahifa
          </a>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Yangi hisob yarating
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Ma'lumotlaringizni kiriting va bepul ro'yxatdan o'ting.
          </p>

          <form className="mt-7 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Ism <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Aziz"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-slate-700">
                  Familiya <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Karimov"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Icon.mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  defaultValue="aziz@example.uz"
                  className="w-full rounded-xl border border-emerald-400 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>
              <span className="flex items-center gap-1 text-xs text-emerald-600">
                <Icon.check className="h-3.5 w-3.5" strokeWidth={2.5} />
                Email mavjud va to'g'ri formatda
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Telefon raqam <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Icon.phone className="h-4 w-4" />
                </span>
                <input
                  type="tel"
                  defaultValue="+998"
                  className="w-full rounded-xl border border-red-400 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 transition outline-none focus:ring-2 focus:ring-red-100"
                />
              </div>
              <span className="flex items-center gap-1 text-xs text-red-500">
                <Icon.alert className="h-3.5 w-3.5" />
                Telefon raqam to'g'ri emas — 9 raqam kiriting
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Parol <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Icon.lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  placeholder="Kamida 8 ta belgi"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                >
                  <Icon.eye className="h-4 w-4" />
                </button>
              </div>
              <span className="text-xs text-slate-400">
                Kamida 8 ta belgi, kichik harf va raqam bo'lsin
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">
                Parolni tasdiqlang <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Icon.lock className="h-4 w-4" />
                </span>
                <input
                  type="password"
                  placeholder="Parolni qaytadan kiriting"
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-600"
                >
                  <Icon.eye className="h-4 w-4" />
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <span>
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Foydalanish shartlari
                </a>{" "}
                va{" "}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Maxfiylik siyosati
                </a>
                ga roziman
              </span>
            </label>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 active:scale-[0.98]"
            >
              Ro'yxatdan o'tish
              <Icon.arrowRight className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-3 py-1">
              <span className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">YOKI</span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <Icon.google className="h-4 w-4" />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <Icon.apple className="h-4 w-4" />
                Apple
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Hisobingiz bormi?{" "}
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Kirish
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};
export default Login;
