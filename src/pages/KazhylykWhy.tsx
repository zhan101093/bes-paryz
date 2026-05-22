import { Link } from 'react-router-dom'

const reasons = [
  {
    number: '1',
    icon: '✨',
    title: 'Аллаға жақындау',
    body: 'Қажылықта адам күнәларын кешіруді сұрайды, дұға етеді, жүрегін тазартады. Бұл "рухани қайта туу" сияқты.',
  },
  {
    number: '2',
    icon: '🤍',
    title: 'Барлық мұсылмандар тең',
    body: 'Қажылықта бай да, кедей де бір киім киеді (ихрам), бәрі бірдей Алла алдында. Байлық, статус, атақ жоғалады.',
  },
  {
    number: '3',
    icon: '📖',
    title: 'Ибраhим пайғамбардың жолы',
    body: 'Қажылық Ибраhим (ғ.с.) оқиғасына байланысты. Ол — Аллаға толық мойынсұну үлгісі.',
  },
  {
    number: '4',
    icon: '🌱',
    title: 'Сабыр мен тәртіп үйретеді',
    body: 'Көп адам, ыстық ауа, ұзақ қозғалыс — мұның бәрі адамды сабыр үйретеді.',
  },
  {
    number: '5',
    icon: '🕊️',
    title: 'Өмірді қайта ойлау',
    body: 'Адам ойлайды: "Мен кіммін?", "Мен не істеп жүрмін?", "Ақыретке дайынмын ба?" — бұл өмірдің ең биік рухани тәжірибесі.',
  },
]

export function KazhylykWhy() {
  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/kazhylyk"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Қажылық
      </Link>

      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🕋</span>
        <h1 className="text-3xl font-bold mb-2">Қажылық не үшін жасалады?</h1>
        <p className="text-teal-100 text-sm">Қажылықтың мәні, рухани маңызы және себебі</p>
      </section>

      {/* Topic 1 — What is Hajj */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">Қажылық деген не?</h2>
        </div>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Қажылық — мұсылманның өмірінде бір рет Меккеге барып, арнайы құлшылықтарды орындауы.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white border border-red-100 rounded-xl px-4 py-2.5">
              <span className="text-red-500 font-bold flex-shrink-0">❌</span>
              <p className="text-gray-700 text-sm">жай саяхат емес</p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-emerald-100 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✔️</span>
              <p className="text-gray-700 text-sm">үлкен ғибадат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Topic 2 — Why important */}
      <section className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">Неге қажылық маңызды?</h2>
        </div>

        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-xl flex-shrink-0">
                {r.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 rounded-full px-2 py-0.5">
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
        <p className="text-primary-800 font-semibold mb-1">Қажылық жолын толық үйрену үшін →</p>
        <p className="text-primary-600 text-xs mb-3">Ихрам, Тауап, Сағи, Арафат және басқа қадамдар</p>
        <Link to="/kazhylyk-learn" className="btn-primary">
          Қажылық жолы
        </Link>
      </div>
    </main>
  )
}
