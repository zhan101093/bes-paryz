import { Link } from 'react-router-dom'

const reasons = [
  {
    icon: '🚪',
    title: 'Исламға кіру есігі',
    desc: 'Кім шаhадат айтса — ол мұсылман болады. Бұл — Аллаhпен жасасқан ең маңызды серт.',
  },
  {
    icon: '🏗️',
    title: 'Таухидтің іргетасы',
    desc: '«Лā иляhа» — барлық жалған тәңірлерден бас тарту; «иллаллāh» — Аллаhты жалғыз Тәңір деп тану.',
  },
  {
    icon: '🎯',
    title: 'Барлық амалдардың мақсаты',
    desc: 'Намаз, ораза, зекет, қажылық — бәрі шаhадатты растайтын ғибадаттар.',
  },
  {
    icon: '🛡️',
    title: 'Ақирет өмірінде қорғаныш',
    desc: 'Пайғамбар ﷺ: «Соңғы сөзі «Лā иляhа иллаллāh» болған жан жәннатқа кіреді» деген.',
  },
  {
    icon: '💎',
    title: 'Санаға, жүрекке, тілге жүктелген міндет',
    desc: 'Шаhадат — тек сөз емес, бүкіл өмір салтына бағыт беретін ақида.',
  },
]

const pillarsTable = [
  { num: '1 ★', title: 'Шаhадат', desc: 'Куәлік беру — барлық ғибадаттың негізі', current: true },
  { num: '2', title: 'Намаз', desc: 'Тәуліктік 5 уақыт намаз', current: false },
  { num: '3', title: 'Зекет', desc: 'Кедей-кепшіктерге міндетті садақа', current: false },
  { num: '4', title: 'Ораза', desc: 'Рамазан айының оразасы', current: false },
  { num: '5', title: 'Қажылық', desc: 'Мекке қаласына сапар (мүмкіндік болса)', current: false },
]

export function TauhidWhy() {
  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/tauhid"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Шаhадат
      </Link>

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🕌</span>
        <h1 className="text-3xl font-bold mb-2">Шаhадаттың маңыздылығы</h1>
        <p className="text-amber-100 text-sm">Ислам дінінің бірінші тірегі</p>
      </section>

      {/* Section 1: Definition */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">🕌 Шаhадат дегеніміз не?</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            <strong>Шаhадат</strong> (арабша: شَهَادَة — куәлік, айғақ) — Ислам дінінің негізі болып табылатын иман сөзі. Ол Аллаhтың бірлігіне және Мұхаммад ﷺ-ның пайғамбарлығына деген жүрекпен сенуді, тілмен айтуды, ісімен растауды біріктіреді.
          </p>
          <div className="border-l-4 border-amber-400 pl-3">
            <p className="text-amber-800 text-sm italic">
              ✦ «Ислам бес нәрсенің үстіне орнатылды» деген хадисте шаhадат — ең бірінші айтылған. Ол барлық ғибадаттың негізі мен кілті.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 5 reasons */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">⚖️ Маңыздылығы — 5 себеп</h2>
        </div>
        <div className="flex flex-col gap-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-0.5">
                  {r.icon} {r.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Pillars table */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            3
          </span>
          <h2 className="text-lg font-bold text-gray-900">🌳 «Бес баған» жүйесіндегі орны</h2>
        </div>
        <div className="flex flex-col gap-2">
          {pillarsTable.map((p) => (
            <div
              key={p.num}
              className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border ${
                p.current ? 'bg-amber-100 border-amber-400' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <span
                className={`text-xs font-bold w-8 text-center flex-shrink-0 ${
                  p.current ? 'text-amber-700' : 'text-gray-400'
                }`}
              >
                {p.num}
              </span>
              <div className="flex-1">
                <p className={`font-semibold text-sm ${p.current ? 'text-amber-900' : 'text-gray-700'}`}>
                  {p.title}
                </p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
              {p.current && (
                <span className="text-amber-600 text-xs font-semibold whitespace-nowrap">★ Осы тақырып</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Hadith */}
      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            4
          </span>
          <h2 className="text-lg font-bold text-gray-900">📖 Хадис — дәлел</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center mb-3">
          <p className="font-arabic text-xl text-amber-800 leading-loose mb-2" dir="rtl">
            بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ
          </p>
          <p className="text-amber-700 text-sm italic">«Ислам бес нәрсенің үстіне орнатылды...» (Бұхари, Муслим)</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          Бұл хадисте «куәлік беру» бірінші орында аталған. Демек, Пайғамбар ﷺ шаhадатты барлық дін амалдарының бастапқы негізі ретінде анықтаған.
        </p>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Шаhадатты терең үйрен →</p>
        <p className="text-primary-600 text-xs mb-3">Толық мәтін, 4 түрі, өмірге әсері</p>
        <Link to="/tauhid-learn" className="btn-primary">
          Шаhадат — ғибадат ретінде
        </Link>
      </div>
    </main>
  )
}
