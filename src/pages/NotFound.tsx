import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-blue-50 px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <section className="relative mb-8 flex items-center justify-center">
          <span className="select-none bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-[120px] font-extrabold leading-none text-transparent sm:text-[180px]">
            404
          </span>
          <span className="absolute inset-0 -z-10 mx-auto h-48 w-48 rounded-full bg-blue-400/20 blur-3xl sm:h-64 sm:w-64" />
        </section>

        <section className="mb-10">
          <h1 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Sahifa topilmadi
          </h1>
          <p className="mx-auto max-w-md text-base leading-relaxed text-slate-500">
            Kechirasiz, siz qidirgan sahifa mavjud emas yoki ko‘chirilgan
            bo‘lishi mumkin. Bosh sahifaga qaytib, qaytadan urinib ko‘ring.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 active:scale-[0.98] sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="M9 22V12h6v10" />
            </svg>
            Bosh sahifaga qaytish
          </Link>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98] sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Orqaga qaytish
          </button>
        </section>
      </div>
    </main>
  );
};
export default NotFound;
