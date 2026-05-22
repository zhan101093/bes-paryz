import { Link } from 'react-router-dom'

const reasons = [
  {
    number: '1',
    icon: '💚',
    title: 'Жүректі сараңдықтан тазарту үшін',
    body: 'Кей адамдар ақшасын өте жақсы көреді, бөліскісі келмейді. Тек ақша жинай берген адамның жүрегі қатаяды, мейірімі азаяды. Зекет бөлісуді үйретеді, жүректі жұмсартады.',
  },
  {
    number: '2',
    icon: '🤝',
    title: 'Мұқтаж адамдарға көмектесу үшін',
    body: 'Барлық адамның жағдайы бірдей емес. Кейбіреулер тамақ та, киім де таба алмайды. Алла адамдар бір-біріне сүйеніп, жалғыз қалмасын деп зекетті парыз етті.',
  },
  {
    number: '3',
    icon: '🌱',
    title: 'Байлықтың берекесін арттыру үшін',
    body: '«Берсем азайып қалады» деп ойлама. Гүлге су құйсаң өседі — адам жақсылық жасаса өміріне береке келеді. Зекет ақшаны азайтпайды, керісінше берекесін арттырады.',
  },
  {
    number: '4',
    icon: '🙏',
    title: 'Аллаға шүкіршілік білдіру үшін',
    body: 'Үйіміз, тамағымыз, киіміміз — бәрі Алланың нығметі. Зекет берген адам: «Алла маған берді, мен де басқаларға көмектесемін» дейді.',
  },
  {
    number: '5',
    icon: '🌍',
    title: 'Қоғамда мейірімділік орнату үшін',
    body: 'Бай адамдар көмектеспесе кедейлік өседі, адамдар бір-бірінен алыстайды. Зекет адамдарды жақындастырады, сүйіспеншілік тудырады.',
  },
]

const benefits = [
  'Кедейлерге көмек беріледі',
  'Жетімдер қуанады',
  'Аш адамдар тамақ табады',
  'Қарызға батқан адамға жеңілдік болады',
  'Қоғамда мейірім көбейеді',
]

export function ZeketWhy() {
  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/zeket"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Зекет
      </Link>

      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">💝</span>
        <h1 className="text-3xl font-bold mb-2">Зекетті не үшін береміз?</h1>
        <p className="text-rose-100 text-sm">
          Зекеттің мәні, себебі және қоғамға берер пайдасы
        </p>
      </section>

      {/* Topic 1 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">Зекет деген не?</h2>
        </div>

        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Зекет — Алла берген байлықтың белгілі бір бөлігін мұқтаж адамдарға беру.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Бұл жай ақша беру емес — бұл <span className="font-semibold text-rose-700">құлшылық</span>.
            Мұсылман намазды денесімен жасайды, ал зекетті мал-мүлкімен жасайды.
          </p>
        </div>

        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          «Зекет» сөзінің мағынасы
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { emoji: '✨', word: 'Тазалық' },
            { emoji: '🌿', word: 'Өсу' },
            { emoji: '🌟', word: 'Береке' },
          ].map((item) => (
            <div
              key={item.word}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center"
            >
              <span className="text-2xl block mb-1">{item.emoji}</span>
              <p className="text-sm font-semibold text-amber-800">{item.word}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">
          Яғни: зекет жүректі тазартады, байлыққа береке береді, адамды жақсырақ етеді.
        </p>
      </section>

      {/* Topic 2 */}
      <section className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">
            Неге Алла зекетті парыз етті?
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl flex-shrink-0">
                {r.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-2 py-0.5">
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

      {/* Topic 3 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            3
          </span>
          <h2 className="text-lg font-bold text-gray-900">Зекеттің қоғамға пайдасы</h2>
        </div>

        <div className="flex flex-col gap-2">
          {benefits.map((b) => (
            <div
              key={b}
              className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5"
            >
              <span className="text-emerald-500 font-bold flex-shrink-0">✅</span>
              <p className="text-gray-700 text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 4 */}
      <section className="card mb-6 border border-amber-200 bg-amber-50">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0">
            4
          </span>
          <h2 className="text-lg font-bold text-amber-900">Зекет бермесе не болады?</h2>
        </div>

        <p className="text-amber-800 text-sm leading-relaxed mb-3">
          Егер адам тек ақша жинап, ешкімге көмектеспесе — оның жүрегі қатая бастайды.
        </p>
        <div className="flex flex-col gap-2">
          {[
            'Өзгелердің жағдайын түсінбей қалады',
            'Тек өзін ойлайды',
            'Дүниеқоңыз болып кетуі мүмкін',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-amber-800">
              <span className="text-amber-500">⚠️</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Зекет туралы толық оқу үшін →</p>
        <p className="text-primary-600 text-xs mb-3">
          Зекеттің мөлшері, кімге беріледі, нисаб
        </p>
        <Link to="/zeket-learn" className="btn-primary">
          Зекет: негіздер
        </Link>
      </div>
    </main>
  )
}
