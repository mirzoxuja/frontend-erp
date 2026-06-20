import { Award, Lock, Download } from "lucide-react";

const certificates = [
  {
    id: 1,
    type: "earned",
    title: "JavaScript asoslari",
    name: "Bobur Tojiev",
    date: "20-noyabr, 2025",
    result: "94% (A'lo)",
    certId: "UM-2025-0942",
  },
  {
    id: 2,
    type: "earned",
    title: "Git va GitHub",
    name: "Bobur Tojiev",
    date: "05-sentabr, 2025",
    result: "88% (Yaxshi)",
    certId: "UM-2025-0731",
  },
  {
    id: 3,
    type: "locked",
    title: "React.js — zamonaviy frontend",
    subtitle: "Kursni tugatib oling",
    progress: 62,
  },
];

const StudentCertificates = () => {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sertifikatlarim</h1>
        <p className="mt-1 text-gray-500">
          Tugatilgan kurslar bo'yicha olingan raqamli sertifikatlar.
        </p>
      </div>

      {/* Certificate cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => {
          if (cert.type === "earned") {
            return (
              <div
                key={cert.id}
                className="rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                {/* Top */}
                <div className="bg-blue-50/70 px-6 pt-8 pb-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold tracking-wide text-blue-600 mb-2">
                    SERTIFIKAT
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{cert.name}</p>
                </div>

                {/* Bottom */}
                <div className="bg-white px-6 py-5">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Berilgan sana</span>
                      <span className="font-medium text-gray-900">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Yakuniy natija</span>
                      <span className="font-semibold text-green-600">
                        {cert.result}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">ID</span>
                      <span className="font-medium text-gray-900">
                        {cert.certId}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <button className="border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Ko'rish
                    </button>
                    <button className="flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium">
                      <Download className="w-4 h-4" />
                      Yuklash
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          // locked card
          return (
            <div
              key={cert.id}
              className="rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              {/* Top */}
              <div className="bg-gray-100 px-6 pt-8 pb-6 text-center">
                <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold tracking-wide text-gray-500 mb-2">
                  HALI OLINMAGAN
                </div>
                <h3 className="text-xl font-bold text-gray-700">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mt-1">{cert.subtitle}</p>
              </div>

              {/* Bottom */}
              <div className="bg-white px-6 py-5">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-500">Progress</span>
                  <span className="font-semibold text-gray-900">
                    {cert.progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mb-5">
                  <div
                    className="h-2 bg-blue-600 rounded-full"
                    style={{ width: `${cert.progress}%` }}
                  />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2.5 text-sm font-medium">
                  Davom ettirish
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentCertificates;