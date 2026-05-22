import { Link } from 'react-router-dom'

const reasons = [
  {
    number: '1',
    icon: '✨',
    title: 'Тақуалыққа жету (Алладан қорқу)',
    body: 'Ораза ұстаудың басты мақсаты — жүректі тазартып, Аллаға жақындау және Одан қорқуды (тақуалықты) үйрену. Бұл "рухани тазару" айы.',
  },
  {
    number: '2',
    icon: '🤍',
    title: 'Сабыр мен ерік-жігерді шыңдау',
    body: 'Ораза аштық пен шөлге шыдауды, нәпсімен күресті үйретеді. Адамның ерік-жігері күшейеді.',
  },
  {
    number: '3',
    icon: '📖',
    title: 'Шүкіршілік пен жанашырлық',
    body: 'Аштықты сезініп, кедейлердің халін түсінеміз және қолымыздағы бар нығметтің қадірін білеміз.',
  },
  {
    number: '4',
    icon: '🔄',
    title: 'Өмірді қайта бағдарлау',
    body: 'Рамазан айында адам бос әңгіме мен зиянды әдеттерден тыйылады. Күнделікті күйбеңнен тоқтап: "Мен кіммін? Не істеп жүрмін?" деп өз өміріне есеп береді.',
  },
  {
    number: '5',
    icon: '🍏',
    title: 'Аутофагия және ағзаның жасаруы',
    body: 'Ғылыми дәлелденгендей, ұзақ уақыт аш жүру кезінде ағзада аутофагия процесі жүреді: жасушалар өздерін тазартады, асқазан мен бауыр демалады. Ораза — рухани ғана емес, физикалық тұрғыдан да "перезагрузка".',
  },
  {
    number: '6',
    icon: '🌱',
    title: 'Күнәлардың кешірілуі',
    body: 'Ықыласпен ұсталған ораза өткен күнәлардың кешірілуіне себеп болады.',
  },
]

export function OrazaWhy() {
  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/oraza"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Ораза
      </Link>

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🌙</span>
        <h1 className="text-3xl font-bold mb-2">Ораза не үшін ұсталады?</h1>
        <p className="text-violet-100 text-sm">Оразаның рухани мәні, физикалық пайдасы және себебі</p>
      </section>

      {/* Topic 1 — What is fasting */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">Ораза деген не?</h2>
        </div>

        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Ораза (Рамазан айында) — таң атқаннан (сәресінен) күн батқанға (ауыз ашарға) дейін
            ниетпен ішіп-жеуден және кейбір іс-әрекеттерден тыйылу.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white border border-red-100 rounded-xl px-4 py-2.5">
              <span className="text-red-500 font-bold flex-shrink-0">❌</span>
              <p className="text-gray-700 text-sm">Жай ғана диета емес</p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-emerald-100 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✔️</span>
              <p className="text-gray-700 text-sm">Үлкен ғибадат, бес парыздың бірі</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic 2 — Why important */}
      <section className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">Неге ораза маңызды?</h2>
        </div>

        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-xl flex-shrink-0">
                {r.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-200 rounded-full px-2 py-0.5">
                    {r.number}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm">{r.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Ораза ережелерін толық үйрену үшін →</p>
        <p className="text-primary-600 text-xs mb-3">
          Күндік тәртіп, не бұзады, не бұзбайды
        </p>
        <Link to="/oraza-learn" className="btn-primary">
          Ораза ережелері
        </Link>
      </div>
    </main>
  )
}
