import { Link } from 'react-router-dom'

const steps = [
  {
    num: '1',
    title: 'Ихрам',
    icon: '🤍',
    color: 'bg-slate-50 border-slate-200',
    visual: '👕👘',
    desc: 'Арнайы ниетпен кіретін күй. Ерлер 2 ақ мата киеді, әйелдер қарапайым киім киеді.',
    meaning: 'Мағынасы: бәрі Алла алдында тең',
    dua: {
      arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لا شَرِيكَ لَكَ لَبَّيْكَ',
      transliteration: 'Лаббайка Аллаhуммалаббайк, лаббайка ла шарика лака лаббайк, инналхамда ван-ни\'мата лака вал-мулк, ла шарика лак',
      kazakh: '"Сенің шақыруыңа жауап бердім, Аллаhым!"',
    },
  },
  {
    num: '2',
    title: 'Тауап',
    icon: '🕋',
    color: 'bg-amber-50 border-amber-100',
    visual: '🕋🔄',
    desc: 'Қағбаны сағат тіліне қарсы 7 рет айналу және дұға ету.',
    meaning: 'Мағынасы: өмір Алланың айналасында болуы керек',
    dua: {
      arabic: 'بِسْمِ اللَّهِ اللَّهُ أَكْبَرُ',
      transliteration: 'Бисмиллаhи Аллаhу Акбар',
      kazakh: '"Аллаhтың атымен! Алла ұлы!"',
    },
  },
  {
    num: '3',
    title: 'Сағи (Сафа-Маруа)',
    icon: '🏃',
    color: 'bg-green-50 border-green-100',
    visual: '⛰️🏃⛰️',
    desc: 'Хажар анамыздың су іздеуін еске ала отырып, Сафа мен Маруа арасын 7 рет жүгіру/жүру.',
    meaning: 'Мағынасы: үміт + сабыр + Аллаға сену',
    dua: null,
  },
  {
    num: '4',
    title: 'Арафат күні',
    icon: '⛰️',
    color: 'bg-orange-50 border-orange-100',
    visual: '⛰️🤲☀️',
    desc: 'Қажылықтың ең маңызды күні. Арафат жазығында тұрып, көп дұға жасалады.',
    meaning: 'Мағынасы: кешірім күні',
    dua: {
      arabic: 'لا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ',
      transliteration: 'Ла иляhа илла Ллаhу ваhдаhу ла шарика лаh',
      kazakh: '"Аллаhтан басқа ешкім жоқ, Ол жалғыз, Оған серік жоқ"',
    },
  },
  {
    num: '5',
    title: 'Муздалифа',
    icon: '🌙',
    color: 'bg-indigo-50 border-indigo-100',
    visual: '🌙⭐🏕️',
    desc: 'Арафаттан кейін Муздалифада түнеу, тыныштық пен сабырда болу.',
    meaning: 'Мағынасы: сабыр + қарапайым өмір',
    dua: null,
  },
  {
    num: '6',
    title: 'Шайтанға тас ату',
    icon: '🪨',
    color: 'bg-red-50 border-red-100',
    visual: '🪨💥',
    desc: 'Жамандықты символикалық түрде жеңу — Минадағы бағандарға тас лақтыру.',
    meaning: 'Мағынасы: нәпсімен күрес',
    dua: {
      arabic: 'اللَّهُ أَكْبَرُ',
      transliteration: 'Аллаhу Акбар',
      kazakh: '"Алла ұлы!" — әр тас лақтырғанда айтылады',
    },
  },
  {
    num: '7',
    title: 'Құрбан шалу',
    icon: '🐑',
    color: 'bg-teal-50 border-teal-100',
    visual: '🐑🙏',
    desc: 'Ибраhим пайғамбар оқиғасын еске ала мал сою.',
    meaning: 'Мағынасы: Аллаға мойынсұну',
    dua: null,
  },
]

export function KazhylykLearn() {
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
        <span className="text-6xl mb-3 block">🕌</span>
        <h1 className="text-3xl font-bold mb-2">Қажылық қалай орындалады?</h1>
        <p className="text-teal-100 text-sm">Қажылық қадамдары, реті, дұғалары және мәні</p>
      </section>

      {/* Journey map header */}
      <section className="card mb-6">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center">
          🧭 ҚАЖЫЛЫҚ ЖОЛЫ
        </p>

        {/* Compact step flow */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-6">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-1">
              <span className="bg-teal-500 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <span className="text-teal-400 text-sm">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Detailed steps */}
        <div className="flex flex-col gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`border rounded-2xl overflow-hidden ${step.color}`}
            >
              {/* Step header with visual */}
              <div className="px-4 pt-4 pb-2 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{step.icon}</span>
                    <h3 className="font-bold text-gray-900 text-sm">{step.title}</h3>
                  </div>
                </div>
                <span className="text-2xl opacity-60">{step.visual}</span>
              </div>

              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.desc}</p>

                <div className="bg-white border border-teal-200 rounded-xl px-3 py-1.5 inline-block mb-3">
                  <p className="text-teal-700 text-xs font-medium">👉 {step.meaning}</p>
                </div>

                {/* Dua section */}
                {step.dua && (
                  <div className="bg-white border border-amber-200 rounded-xl p-3 mt-2">
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                      🤲 Дұға
                    </p>
                    <p
                      className="font-arabic text-right text-base text-gray-800 leading-loose mb-1"
                      dir="rtl"
                    >
                      {step.dua.arabic}
                    </p>
                    <p className="text-xs text-gray-500 italic mb-1">
                      {step.dua.transliteration}
                    </p>
                    <p className="text-xs text-amber-800 font-medium">{step.dua.kazakh}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Білімді ойын арқылы тексер →</p>
        <p className="text-primary-600 text-xs mb-3">
          Жолды құрастыр, мақсатты сәйкестендір, сценарий ойыны
        </p>
        <Link to="/kazhylyk-order-game" className="btn-primary">
          Ойындарға өту
        </Link>
      </div>
    </main>
  )
}
