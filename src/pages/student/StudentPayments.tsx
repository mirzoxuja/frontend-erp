import { Link } from "react-router-dom";
import {
  Plus,
  DollarSign,
  BookOpen,
  Calendar,
  Download,
  CreditCard,
} from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    value: "1 870 000",
    label: "Jami sarflangan (so'm)",
  },
  {
    icon: BookOpen,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    value: "3",
    label: "Sotib olingan kurslar",
  },
  {
    icon: Calendar,
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
    value: "1 080 000",
    label: "Bu yil sarflangan (so'm)",
  },
];

const payments = [
  {
    id: 1,
    date: "14-noyabr, 2025",
    course: "React.js — zamonaviy frontend",
    amount: "790 000",
    method: "Payme",
    status: "To'langan",
  },
  {
    id: 2,
    date: "02-oktabr, 2025",
    course: "Python asoslari",
    amount: "590 000",
    method: "Uzcard",
    status: "To'langan",
  },
  {
    id: 3,
    date: "18-avgust, 2025",
    course: "UX/UI dizayn asoslari",
    amount: "490 000",
    method: "Click",
    status: "To'langan",
  },
];

const paymentTags = ["Payme", "Click", "Uzcard", "Visa / Mastercard"];

const StudentPayments = () => {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Mening to'lovlarim
          </h1>
          <p className="mt-1 text-gray-500">
            Sotib olingan kurslar va to'lov tarixi. Har bir kurs — bir
            martalik to'lov, umrbod kirish.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium whitespace-nowrap">
          <Plus className="w-4 h-4" />
          Yangi kurs olish
        </button>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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

      {/* Bottom: history + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment history */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              To'lov tarixi
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/60 border-b border-gray-100">
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Sana
                  </th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Kurs
                  </th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Summa
                  </th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Usul
                  </th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Holat
                  </th>
                  <th className="px-6 py-3 text-xs font-medium uppercase tracking-wide text-gray-500">
                    Chek
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 last:border-0 hover:bg-gray-50/60"
                  >
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {row.course}
                    </td>
                    <td className="px-6 py-4 text-gray-900 whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                      {row.method}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="flex items-center gap-1.5 text-gray-700 hover:text-blue-600 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="space-y-6">
          {/* Payment method */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              To'lov usuli
            </h2>

            <div className="flex items-center gap-3 border border-gray-100 rounded-xl p-4 mb-4">
              <div className="bg-blue-600 text-white text-xs font-bold italic px-2.5 py-1.5 rounded">
                VISA
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  •••• •••• •••• 4242
                </div>
                <div className="text-xs text-gray-500">
                  Amal qiladi: 08/27
                </div>
              </div>
            </div>

            <button className="w-full border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 mb-4">
              Kartani o'zgartirish
            </button>

            <div className="flex flex-wrap gap-2">
              {paymentTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Add course CTA */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900">
              Yana kurs qo'shing
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Katalogdan yangi kurs tanlang — to'lovdan so'ng darrov kirish
              ochiladi.
            </p>
            <Link
              to="/dashboard/catalog"
              className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-lg py-2.5 font-medium"
            >
              Kurslar katalogi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPayments;