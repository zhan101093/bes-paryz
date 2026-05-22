import { Link } from 'react-router-dom'

const sections = [
  {
    to: '/kazhylyk-why',
    number: '01',
    title: 'Не үшін қажылық жасаймыз?',
    description: 'Қажылықтың мәні, рухани маңызы және себептері',
    icon: '🕋',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    to: '/kazhylyk-learn',
    number: '02',
    title: 'Қажылық қалай орындалады?',
    description: 'Ихрам, Тауап, Сағи, Арафат және қалған қадамдар',
    icon: '🧭',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    to: '/kazhylyk-order-game',
    number: '03',
    title: 'Қажылық жолын құрастыр',
    description: 'Қажылық қадамдарын дұрыс ретімен орналастыр',
    icon: '🧩',
    color: 'from-violet-500 to-indigo-600',
  },
  {
    to: '/kazhylyk-match-game',
    number: '04',
    title: 'Не мақсатта жасалады?',
    description: 'Рәсімді оның мағынасымен сәйкестендір',
    icon: '🎯',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    to: '/kazhylyk-scenario-game',
    number: '05',
    title: 'Қажылық роль-play',
    description: 'Ситуацияда дұрыс шешім қабылда',
    icon: '🎭',
    color: 'from-amber-500 to-orange-600',
  },
]

export function Kazhylyk() {
  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Бес Парызға оралу
      </Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-teal-600">🕋</span>
          <span className="text-teal-700 text-sm font-medium">Бес парыздың 5-ші тірегі</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Қажылық үйрену</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Мақсат</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Қажылықтың рәсімдерін, Мекке мен Каабаның қасиетін және бұл қасиетті сапардың рухани
            маңызын ұғыну — өмірлік арманды тану.
          </p>
        </div>
        <div className="mt-6 inline-block bg-teal-50 border border-teal-200 rounded-2xl px-6 py-3">
          <p className="text-teal-800 font-arabic text-xl">
            وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا
          </p>
          <p className="text-teal-600 text-sm mt-1">«Мекке үйіне қажылыққа бару — шамасы келгендерге міндет» — Аль Имран, 97</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Бөлімдер</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((sec) => (
            <Link
              key={sec.to}
              to={sec.to}
              className="card group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.color} flex items-center justify-center text-2xl shadow-sm`}
              >
                {sec.icon}
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {sec.number}
                </span>
                <h3 className="font-semibold text-gray-900 text-base mt-0.5 group-hover:text-primary-700 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{sec.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>Қажылық — Ислам дінінің бес парызының бесінші тірегі</p>
      </footer>
    </main>
  )
}
