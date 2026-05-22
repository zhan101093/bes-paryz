import { Link } from 'react-router-dom'

const sections = [
  {
    to: '/oraza-why',
    number: '01',
    title: 'Ораза не үшін ұсталады?',
    description: 'Оразаның рухани мәні, физикалық пайдасы және себептері',
    icon: '🌙',
    color: 'from-violet-500 to-purple-600',
  },
  {
    to: '/oraza-learn',
    number: '02',
    title: 'Ораза ережелері',
    description: 'Күндік тәртіп, не бұзады, не бұзбайды — толық нұсқаулық',
    icon: '📖',
    color: 'from-purple-400 to-violet-500',
  },
  {
    to: '/oraza-order-game',
    number: '03',
    title: 'Ораза себеті',
    description: 'Оразаны бұзбайтын нәрселерді себетке жина — 18 карточка',
    icon: '🧺',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    to: '/oraza-match-game',
    number: '04',
    title: 'Оразаны не бұзады?',
    description: 'Бұзады ма, бұзбайды ма? — 15 сынақ',
    icon: '🔍',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    to: '/oraza-scenario-game',
    number: '05',
    title: 'Оразадағы ситуациялар',
    description: 'Ситуацияда дұрыс шешім қабылда — 6 сценарий',
    icon: '🎭',
    color: 'from-violet-600 to-purple-700',
  },
]

export function Oraza() {
  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Бес Парызға оралу
      </Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-violet-600">🌙</span>
          <span className="text-violet-700 text-sm font-medium">Бес парыздың 3-ші тірегі</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Ораза үйрену</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Мақсат</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Рамазан айының қасиетін, оразаның рухани маңызын ұғыну және ораза ұстаудың ережелерін
            — сабыр мен тазалықтың жолын үйрену.
          </p>
        </div>
        <div className="mt-6 inline-block bg-violet-50 border border-violet-200 rounded-2xl px-6 py-3">
          <p className="text-violet-800 font-arabic text-xl">يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ</p>
          <p className="text-violet-600 text-sm mt-1">«Ораза ұстау сіздерге парыз етілді» — Бақара, 183</p>
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
        <p>Ораза — Ислам дінінің бес парызының үшінші тірегі</p>
      </footer>
    </main>
  )
}
