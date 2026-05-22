import { Link } from 'react-router-dom'

const conditions = [
  'Мұсылман адамға',
  'Балиғат жасына жеткен адамға',
  'Ақыл-есі дұрыс адамға',
  'Белгілі мөлшерден көп байлығы бар адамға',
]

const wealthTypes = [
  { icon: '💵', title: 'Ақша', desc: 'Жиналған ақша қоры' },
  { icon: '🥇', title: 'Алтын-күміс', desc: 'Сақина, жинақ, құйма' },
  { icon: '🛍️', title: 'Сауда тауары', desc: 'Дүкендегі киім, техника, тауар' },
  { icon: '🐑', title: 'Мал', desc: 'Қой, сиыр, түйе' },
]

const animals = [
  { icon: '🐑', animal: 'Қой', rule: '40 қой болса → 1 қой беріледі' },
  { icon: '🐄', animal: 'Сиыр', rule: '30 сиыр болса → 1 жасар бұзау беріледі' },
  { icon: '🐪', animal: 'Түйе', rule: '5 түйе болса → 1 қой беріледі' },
]

const recipients = [
  { num: '1', icon: '🏠', title: 'Кедейлер', desc: 'Табысы өте аз адамдар' },
  { num: '2', icon: '🍽️', title: 'Мұқтаждар', desc: 'Күнделікті өміріне ақшасы жетпейтін адамдар' },
  { num: '3', icon: '📋', title: 'Қарызы бар адамдар', desc: 'Қарызын төлей алмай жүргендер' },
  { num: '4', icon: '👦', title: 'Жетімдер', desc: 'Әке-шешесінен айырылған балалар' },
  { num: '5', icon: '🧳', title: 'Жолда қалған адам', desc: 'Үйіне жете алмай қалған жолаушы' },
  { num: '6', icon: '📖', title: 'Ислам жолындағы пайдалы істер', desc: 'Білім, діни қызмет, пайдалы жобалар' },
]

const notRecipients = [
  { icon: '💼', title: 'Өте бай адамдар', reason: 'Олардың өз байлығы жеткілікті' },
  { icon: '👴👵', title: 'Ата-ана', reason: 'Ата-анаға көмек онсыз да міндет' },
  { icon: '👵', title: 'Ата-әже', reason: 'Бір отбасы болып саналады' },
  { icon: '👶', title: 'Балалар', reason: 'Бір отбасы болып саналады' },
  { icon: '💍', title: 'Күйеуі немесе әйелі', reason: 'Бір отбасы болып саналады' },
]

const etiquette = [
  { icon: '❤️', title: 'Алла разылығы үшін беру', desc: 'Адамдар мақтасын деп емес, тек Алла үшін.' },
  { icon: '🤲', title: 'Жақсы мінезбен беру', desc: 'Алушыны ренжітпеу, ұялтпау, міндетсінбеу.' },
  { icon: '🌙', title: 'Жасырын беру жақсырақ', desc: 'Адамды ыңғайсыз етпеу үшін жасырын беру — әдемі амал.' },
  { icon: '🌟', title: 'Ең жақсы нәрседен беру', desc: 'Жаман, ескі заттан емес, жақсы нәрседен беру керек.' },
]

export function ZeketLearn() {
  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/zeket"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Зекет
      </Link>

      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">💵</span>
        <h1 className="text-3xl font-bold mb-2">Зекетті қалай береміз?</h1>
        <p className="text-rose-100 text-sm">Кімге парыз, қандай байлықтан, кімдерге беріледі</p>
      </section>

      {/* Topic 1 — Кімге парыз */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">Кімге зекет парыз?</h2>
        </div>

        <p className="text-gray-600 text-sm mb-3">
          Зекет әр адамға бірдей парыз емес. Зекет мынадай адамдарға парыз:
        </p>

        <div className="flex flex-col gap-2 mb-5">
          {conditions.map((c) => (
            <div key={c} className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✅</span>
              <p className="text-gray-700 text-sm">{c}</p>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
            🌟 Нисаб деген не?
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Зекет парыз болуы үшін адамның байлығы белгілі бір мөлшерден асуы керек.
            Бұл мөлшер <span className="font-semibold text-amber-800">«нисаб»</span> деп аталады.
          </p>
          <div className="bg-white border border-amber-200 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-600">
              Нисаб = шамамен <span className="font-bold text-amber-700">85 грамм алтынның</span> құнына тең байлық
            </p>
          </div>
          <p className="text-gray-600 text-xs mt-3 leading-relaxed">
            Егер адамның ақшасы, алтыны, бизнес табысы немесе сауда тауары осы мөлшерден
            көп болса және ол байлық <span className="font-semibold">бір жыл тұрса</span> — зекет береді.
          </p>
        </div>
      </section>

      {/* Topic 2 — Қандай нәрседен */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">Қандай нәрселерден зекет беріледі?</h2>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          {wealthTypes.map((w) => (
            <div key={w.title} className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-center">
              <span className="text-3xl block mb-1">{w.icon}</span>
              <p className="font-bold text-rose-800 text-sm">{w.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">💡 Ескерту:</span> Үйдегі тұрмыстық заттардан зекет берілмейді.
          </p>
        </div>

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">🐑 Малдан зекет ережесі</p>
        <div className="flex flex-col gap-2">
          {animals.map((a) => (
            <div key={a.animal} className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
              <span className="text-2xl flex-shrink-0">{a.icon}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{a.animal}</p>
                <p className="text-gray-600 text-xs">{a.rule}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 3 — Қашан */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">Қашан беріледі?</h2>
        </div>
        <div className="flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
          <span className="text-4xl flex-shrink-0">🌙</span>
          <div>
            <p className="font-bold text-indigo-900 text-sm mb-1">Жылына 1 рет беріледі</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Көп мұсылмандар <span className="font-semibold">Рамазан айында</span> береді,
              өйткені осы айда сауабы көбірек.
            </p>
          </div>
        </div>
      </section>

      {/* Topic 4 — Қанша */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-gray-900">Қанша беріледі?</h2>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 text-center mb-3">
          <p className="text-5xl font-bold text-pink-600 mb-2">2.5%</p>
          <p className="text-gray-500 text-sm">Ақша немесе алтын байлығынан</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Мысалы:</p>
          <div className="flex flex-col gap-1.5">
            {[
              { amount: '100 000 теңге', zakat: '2 500 теңге' },
              { amount: '500 000 теңге', zakat: '12 500 теңге' },
              { amount: '1 000 000 теңге', zakat: '25 000 теңге' },
            ].map((ex) => (
              <div key={ex.amount} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{ex.amount}</span>
                <span className="text-rose-700 font-semibold">→ {ex.zakat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic 5 — Кімдерге беріледі */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
          <h2 className="text-lg font-bold text-gray-900">Кімдерге беріледі?</h2>
        </div>
        <div className="flex flex-col gap-2">
          {recipients.map((r) => (
            <div key={r.num} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {r.num}
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{r.icon} {r.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 6 — Кімдерге берілмейді */}
      <section className="card mb-5 border border-red-200 bg-red-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
          <h2 className="text-lg font-bold text-red-900">Кімдерге берілмейді?</h2>
        </div>
        <div className="flex flex-col gap-2">
          {notRecipients.map((n) => (
            <div key={n.title} className="flex items-start gap-3 bg-white border border-red-200 rounded-xl px-4 py-3">
              <span className="text-red-500 font-bold flex-shrink-0 text-sm mt-0.5">❌</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{n.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{n.reason}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 7 — Қалай дұрыс береміз */}
      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
          <h2 className="text-lg font-bold text-gray-900">Зекетті қалай дұрыс береміз?</h2>
        </div>
        <div className="flex flex-col gap-3">
          {etiquette.map((e, i) => (
            <div key={e.title} className="flex items-start gap-3 card bg-amber-50 border-amber-200 p-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">
                {e.icon}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">
                  <span className="text-amber-600 mr-1">{i + 1}.</span>
                  {e.title}
                </p>
                <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Білімді ойын арқылы тексер →</p>
        <p className="text-primary-600 text-xs mb-3">Зекет шебері, Кімге береміз?, Зекет себеті</p>
        <Link to="/zeket-game" className="btn-primary">
          Ойынға өту
        </Link>
      </div>
    </main>
  )
}
