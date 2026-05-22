import { Link } from 'react-router-dom'

const dailySteps = [
  {
    num: '1',
    title: 'Ниет ету',
    icon: '🤲',
    time: 'Түнде немесе сәресі уақытында',
    desc: 'Алла ризашылығы үшін ораза тұтуға іштей бекіну. Сәресі уақытында немесе таң атқанға дейін айтылады.',
    color: 'bg-indigo-50 border-indigo-100',
  },
  {
    num: '2',
    title: 'Сәресі',
    icon: '🌙',
    time: 'Таң атқанға дейін',
    desc: 'Таң атқанға дейінгі тамақтану — берекелі амал. Оразаны жеңілдетеді.',
    color: 'bg-violet-50 border-violet-100',
  },
  {
    num: '3',
    title: 'Күндізгі уақыт',
    icon: '☀️',
    time: 'Таң атқаннан күн батқанға дейін',
    desc: 'Ішіп-жеуден, жақындастықтан және жаман амалдардан тыйылу. Құран оқу, дұға ету, жақсылық жасау.',
    color: 'bg-amber-50 border-amber-100',
  },
  {
    num: '4',
    title: 'Ауыз ашар (Ифтар)',
    icon: '🍽️',
    time: 'Күн батқанда',
    desc: 'Күн батқанда (ақшам намазы уақытында) оразаны ашу. Оразаны құрмамен немесе сумен ашу — сүннет.',
    color: 'bg-rose-50 border-rose-100',
  },
]

const breaksFasting = [
  { icon: '🍔', text: 'Әдейілеп ішіп-жеу' },
  { icon: '🤢', text: 'Әдейілеп құсу' },
  { icon: '💉', text: 'Емдік күш беретін укол (ине) салу' },
  { icon: '❤️', text: 'Ерлі-зайыптық жақындастық (күндіз)' },
  { icon: '🩸', text: 'Әйелдердің етеккірінің (хайыз, нифас) келуі' },
  { icon: '💊', text: 'Мұрынға немесе құлаққа тамызылған дәрінің асқазанға жетуі' },
  { icon: '🚬', text: 'Шылым шегу немесе есірткі заттарды қолдану' },
  { icon: '🌾', text: 'Тістің арасындағы тамақты есіне түскенде жеу' },
]

const doesNotBreak = [
  { icon: '💧', text: 'Ұмытып ішіп-жеу (есіне түскенде тоқтату керек)' },
  { icon: '💦', text: 'Түкірік жұту' },
  { icon: '🚿', text: 'Душқа түсу, шомылу (мұрынға немесе құлаққа су кетпесе)' },
  { icon: '👁️', text: 'Көзге тамызу (асқазанға әсері жоқ)' },
  { icon: '🪥', text: 'Мисвак қолдану немесе тіс пастасын қолдану (жұтып қоймаса)' },
  { icon: '🦷', text: 'Тісті жұлдыру, емдеу (қанды немесе суды жұтып қоймаса)' },
  { icon: '🩺', text: 'Қан алдыру (ауруханада тексеру үшін)' },
  { icon: '😮', text: 'Жедел жәрдем ретіндегі оттегі маскасын кию' },
  { icon: '🧴', text: 'Денесіне крем немесе мазь жағу' },
  { icon: '😴', text: 'Шаршағандықтан ұйықтау' },
]

export function OrazaLearn() {
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
        <h1 className="text-3xl font-bold mb-2">Ораза ережелері</h1>
        <p className="text-violet-100 text-sm">Күндік тәртіп, не бұзады, не бұзбайды</p>
      </section>

      {/* Topic 1 — Daily flow */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">Ораза күнінің тәртібі</h2>
        </div>

        {/* Flow indicator */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-5">
          {dailySteps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-1">
              <span className="bg-violet-500 text-white text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                {s.icon} {s.title}
              </span>
              {i < dailySteps.length - 1 && (
                <span className="text-violet-400 text-sm">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          {dailySteps.map((step) => (
            <div key={step.num} className={`border rounded-2xl px-4 py-3 ${step.color}`}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-violet-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                <span className="text-lg">{step.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                  <p className="text-xs text-gray-400">{step.time}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-11">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 2 — Duas */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">🤲 Дұғалар</h2>
        </div>

        {/* Suhoor niyyah */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 mb-3">
          <p className="text-xs font-semibold text-indigo-700 uppercase tracking-wider mb-3">
            🌙 Сәресі — Ораза ниеті
          </p>
          <p
            className="font-arabic text-right text-base text-gray-800 leading-loose mb-2"
            dir="rtl"
          >
            نَوَيْتُ أنْ أصُومَ صَوْمَ شَهْرٍ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى
          </p>
          <p className="text-xs text-gray-500 italic mb-2">
            Нәуәйту ән асумә саумә шәһри Рамаданә минәл фәжри иләл мағриби халисан лилләһи таъалә.
          </p>
          <p className="text-xs text-indigo-800 font-medium leading-relaxed">
            «Таңертеннен кешке дейін Алланың разылығы үшін Рамазан айының оразасын ұстауға ниет еттім»
          </p>
        </div>

        {/* Iftar dua */}
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-rose-700 uppercase tracking-wider mb-3">
            🍽️ Ауыз ашар — Ифтар дұғасы
          </p>
          <p
            className="font-arabic text-right text-base text-gray-800 leading-loose mb-2"
            dir="rtl"
          >
            اللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ على رِزْقِكَ اَفْطَرْتُ وَ صَوْمَ الْغَدِ مِنْ شَهْرِرَمَضانَ نَوَيْتُ فاغْفِرْ لِي ما قَدَّمْتُ وَ ما اَخَّرْتُ
          </p>
          <p className="text-xs text-gray-500 italic mb-2">
            Аллаһуммә ләкә сумту уә бикә әәмәнту уә 'аләйкә тәуәккәлту уә 'ала ризқикә әфтарту уә саумәлғади мин шәһри Рамадана нәуәйту, фәғфирлии мәә қаддамту уә мәә аххарту.
          </p>
          <p className="text-xs text-rose-800 font-medium leading-relaxed">
            «Аллаһым! Сенің ризалығың үшін ораза ұстадым. Сенің берген ризығыңмен аузымды аштым. Саған иман етіп, саған тәуекел жасадым. Рамазан айының ертеңгі күніне де ауыз бекітуге ниет еттім. Сен менің өткен және келешек күнәларымды кешір»
          </p>
        </div>
      </section>

      {/* Topic 3 — Breaks fasting */}
      <section className="card mb-5 border border-red-200 bg-red-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            3
          </span>
          <h2 className="text-lg font-bold text-red-900">🛑 Оразаны не бұзады?</h2>
        </div>
        <div className="flex flex-col gap-2">
          {breaksFasting.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 bg-white border border-red-200 rounded-xl px-4 py-2.5"
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topic 4 — Doesn't break fasting */}
      <section className="card mb-6 border border-emerald-200 bg-emerald-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            4
          </span>
          <h2 className="text-lg font-bold text-emerald-900">✅ Оразаны не бұзбайды?</h2>
        </div>
        <div className="flex flex-col gap-2">
          {doesNotBreak.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-3 bg-white border border-emerald-200 rounded-xl px-4 py-2.5"
            >
              <span className="text-lg flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Білімді ойын арқылы тексер →</p>
        <p className="text-primary-600 text-xs mb-3">
          Реттілік, бұзады/бұзбайды, ситуация ойындары
        </p>
        <Link to="/oraza-order-game" className="btn-primary">
          Ойындарға өту
        </Link>
      </div>
    </main>
  )
}
