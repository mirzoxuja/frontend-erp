import { useState } from "react";
import {
  User,
  Bell,
  Lock,
  Globe,
  Upload,
  Smartphone,
  Laptop,
} from "lucide-react";

const sidebarTabs = [
  { id: "profil", label: "Profil", icon: User },
  { id: "bildirishnomalar", label: "Bildirishnomalar", icon: Bell },
  { id: "xavfsizlik", label: "Xavfsizlik", icon: Lock },
  { id: "til", label: "Til va mintaqa", icon: Globe },
];

const initialNotifications = [
  {
    id: "lesson",
    title: "Dars eslatmasi",
    desc: "Dars boshlanishidan 1 soat oldin eslatma",
    enabled: true,
  },
  {
    id: "grade",
    title: "Yangi baho qo'yilganda",
    desc: "Imtihon yoki vazifa baholanganda xabar",
    enabled: true,
  },
  {
    id: "payment",
    title: "To'lov eslatmasi",
    desc: "To'lov muddatidan 3 kun oldin eslatma",
    enabled: true,
  },
  {
    id: "exam",
    title: "Imtihon e'lonlari",
    desc: "Yangi imtihon belgilanganda xabar",
    enabled: true,
  },
  {
    id: "news",
    title: "Markaz yangiliklari",
    desc: "Tadbirlar va yangi kurslar haqida",
    enabled: false,
  },
];

const sessions = [
  {
    id: 1,
    device: "Redmi Note 13 · Chrome",
    location: "Toshkent · Bugun 08:45",
    current: true,
    icon: Smartphone,
  },
  {
    id: 2,
    device: "Acer Aspire · Firefox",
    location: "Toshkent · Kecha 19:12",
    current: false,
    icon: Laptop,
  },
];

const Toggle = ({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) => (
  <button
    onClick={onChange}
    className={`relative w-11 h-6 rounded-full transition-colors shrink-0 ${
      enabled ? "bg-blue-600" : "bg-gray-200"
    }`}
  >
    <span
      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
        enabled ? "translate-x-5" : "translate-x-0"
      }`}
    />
  </button>
);

const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState("profil");
  const [notifications, setNotifications] = useState(initialNotifications);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, enabled: !n.enabled } : n))
    );
  };

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sozlamalar</h1>
        <p className="mt-1 text-gray-500">
          Hisobingiz, bildirishnomalar va xavfsizlik sozlamalari.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
        {/* Sub sidebar */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 h-fit">
          {sidebarTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium mb-1 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Profile picture */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Profil rasmi
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
              Mentorlar va boshqa o'quvchilar sizni shunday ko'radi
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=47"
                alt="Profil rasmi"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-sm text-gray-500 mb-2">
                  JPG yoki PNG · Max 2 MB
                </div>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Upload className="w-4 h-4" />
                    Rasmni o'zgartirish
                  </button>
                  <button className="text-sm font-medium text-gray-500 hover:text-red-600">
                    O'chirish
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Personal info */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Shaxsiy ma'lumotlar
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
              Telefon raqamingiz o'zgargan bo'lsa, yangilab qo'ying
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Ism
                </label>
                <input
                  type="text"
                  defaultValue="Bobur"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Familiya
                </label>
                <input
                  type="text"
                  defaultValue="Tojiev"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="bobur@example.uz"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Telefon
                </label>
                <input
                  type="text"
                  defaultValue="+998 90 123 45 67"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-1.5">
                  Manzil
                </label>
                <input
                  type="text"
                  defaultValue="Toshkent sh., Chilonzor tumani, 19-mavze"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700 mb-1.5">
                  Talaba ID
                </label>
                <input
                  type="text"
                  value="ST-0123"
                  disabled
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm bg-gray-50 text-gray-400 cursor-not-allowed"
                />
                <p className="text-xs text-gray-400 mt-1.5">
                  Talaba ID tizim tomonidan beriladi va o'zgartirilmaydi.
                </p>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm">
                Saqlash
              </button>
            </div>
          </div>

          {/* Notification settings */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Bildirishnoma sozlamalari
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-2">
              Qaysi voqealar haqida xabardor bo'lasiz
            </p>

            <div>
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-4 border-t border-gray-100"
                >
                  <div>
                    <div className="font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      {item.desc}
                    </div>
                  </div>
                  <Toggle
                    enabled={item.enabled}
                    onChange={() => toggleNotification(item.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Change password */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Parolni o'zgartirish
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
              Hisobingizni himoyalash uchun kuchli parol tanlang
            </p>

            <div className="space-y-5">
              <div className="md:w-1/2">
                <label className="block text-sm text-gray-700 mb-1.5">
                  Joriy parol
                </label>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Yangi parol
                  </label>
                  <input
                    type="password"
                    placeholder="Kamida 8 ta belgi"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1.5">
                    Tasdiqlash
                  </label>
                  <input
                    type="password"
                    placeholder="Yangi parol qaytadan"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm">
                Parolni yangilash
              </button>
            </div>
          </div>

          {/* Active sessions */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5 pb-5 border-b border-gray-100">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Aktiv sessiyalar
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Hisobingizga ulangan qurilmalar
                </p>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap">
                Hammasidan chiqish
              </button>
            </div>

            <div className="space-y-3">
              {sessions.map((session) => {
                const Icon = session.icon;
                return (
                  <div
                    key={session.id}
                    className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3.5"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">
                            {session.device}
                          </span>
                          {session.current && (
                            <span className="text-xs font-medium text-green-600">
                              Joriy
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {session.location}
                        </div>
                      </div>
                    </div>
                    {!session.current && (
                      <button className="text-sm font-medium text-gray-600 hover:text-red-600">
                        Chiqish
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Language & region */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Til va mintaqa
            </h2>
            <p className="text-gray-500 text-sm mt-1 mb-5 pb-5 border-b border-gray-100">
              Interfeys tili va vaqt mintaqasi
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Interfeys tili
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>O'zbek</option>
                  <option>Русский</option>
                  <option>English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1.5">
                  Vaqt mintaqasi
                </label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                  <option>Toshkent (UTC+5)</option>
                  <option>Moskva (UTC+3)</option>
                  <option>London (UTC+0)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 border-t border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Qorong'u rejim</div>
                <div className="text-sm text-gray-500 mt-0.5">
                  Interfeysni qorong'u temada ko'rsatish
                </div>
              </div>
              <Toggle enabled={darkMode} onChange={() => setDarkMode((d) => !d)} />
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-sm">
                Saqlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSettings;