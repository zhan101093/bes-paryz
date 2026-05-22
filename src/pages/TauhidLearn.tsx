import { Link } from 'react-router-dom'

const ibadatTypes = [
  {
    num: '1',
    icon: '❤️',
    title: 'Жүрекпен сену (иқрар бил-қалб)',
    desc: 'Тек аузымен айтып қана қоймай, жүрегімен терең сенуі тиіс. Аллаhтың бірлігін, Мұхаммад ﷺ-ның пайғамбарлығын ішкі нанымен мойындау.',
    color: 'bg-rose-50 border-rose-200',
  },
  {
    num: '2',
    icon: '🗣️',
    title: 'Тілмен айту (иқрар бил-лисан)',
    desc: 'Шаhадатты ауызша, анық айту — мұсылман болудың шарты. Намаздағы ташаhход, азан, ікамет — бәрінде шаhадат бар.',
    color: 'bg-blue-50 border-blue-200',
  },
  {
    num: '3',
    icon: '🤲',
    title: 'Ісімен растау (амал бил-джауарих)',
    desc: 'Шаhадаттың мағынасына сай өмір сүру: намаз оқу, харамнан бойты аулақ ұстау, Аллаhтың бұйрықтарын орындау.',
    color: 'bg-green-50 border-green-200',
  },
  {
    num: '4',
    icon: '🔄',
    title: 'Үздіксіз жаңарту',
    desc: 'Шаhадат — бір рет айтылатын сөз ғана емес. Азанда, намазда, зікірде үнемі қайталанып, жүректі жандырып отырады.',
    color: 'bg-violet-50 border-violet-200',
  },
]

const lifeChanges = [
  {
    icon: '🧭',
    title: 'Өмірге мағына',
    desc: 'Адам тек Аллаhқа ғана бас иетінін түсінеді. Барлық іс-әрекетке мақсат пайда болады.',
  },
  {
    icon: '🕊️',
    title: 'Жүрек тыныштығы',
    desc: '«Аллаhтан басқа ешкімге тәуелді емеспін» деген сана — ішкі еркіндік пен татуластырады.',
  },
  {
    icon: '⚡',
    title: 'Ғибадатқа жігер',
    desc: 'Шаhадаттың мағынасын жүрекпен сезінген адам намазын, оразасын, зекетін рухпен орындайды.',
  },
  {
    icon: '🤝',
    title: 'Ахлақ жақсарады',
    desc: 'Пайғамбар ﷺ-нің жолын ұстанған адам — адалдық, жомарттық, шыдамдылықта үлгі болуға тырысады.',
  },
  {
    icon: '🌍',
    title: 'Жауапкершілік',
    desc: '«Аллаh бәрін көреді» деген сана — адамды қараңғыда да, жарықта да жақсылыққа бағыттайды.',
  },
  {
    icon: '💎',
    title: 'Ахиретке дайындық',
    desc: 'Шаhадат — жәннатқа кіру кілті. Бұл сана бүкіл өмірге ахирет призмасынан қарауға үйретеді.',
  },
]

export function TauhidLearn() {
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
        <span className="text-6xl mb-3 block">🗣️</span>
        <h1 className="text-3xl font-bold mb-2">Шаhадат — ғибадат ретінде</h1>
        <p className="text-amber-100 text-sm">Мәтін, мағына және өмірге әсері</p>
      </section>

      {/* Section 1: Full text */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            1
          </span>
          <h2 className="text-lg font-bold text-gray-900">🗣️ Шаhадаттың толық мәтіні</h2>
        </div>
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 text-center">
          <p
            className="font-arabic text-2xl text-primary-800 leading-loose mb-3"
            dir="rtl"
          >
            أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
          </p>
          <p className="text-gray-500 text-xs italic mb-3">
            Ашhаду алла иляhа иллаллāh, уа ашhаду анна Мухаммадан расулуллāh
          </p>
          <div className="bg-white border border-primary-100 rounded-xl px-4 py-2">
            <p className="text-primary-800 text-sm font-medium">
              📌 «Аллаhтан басқа Тәңір жоқ екеніне куәлік беремін, және Мұхаммад Оның елшісі екеніне куәлік беремін»
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 4 types */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            2
          </span>
          <h2 className="text-lg font-bold text-gray-900">🧩 Шаhадат — қандай ғибадат?</h2>
        </div>
        <div className="flex flex-col gap-3">
          {ibadatTypes.map((t) => (
            <div key={t.num} className={`border rounded-2xl px-4 py-3 ${t.color}`}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {t.num}
                </div>
                <span className="text-lg">{t.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{t.title}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-11">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Life changes */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            3
          </span>
          <h2 className="text-lg font-bold text-gray-900">🌟 Шаhадат өмірімізге қандай өзгеріс енгізеді?</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {lifeChanges.map((item) => (
            <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-3">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="font-bold text-amber-900 text-sm mb-1">{item.title}</p>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Two parts */}
      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
            4
          </span>
          <h2 className="text-lg font-bold text-gray-900">💡 Шаhадаттың екі бөлімі</h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">Шаhадат екі маңызды мазмұннан тұрады:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Бірінші бөлім</p>
            <p className="font-arabic text-xl text-amber-800 text-right leading-loose mb-2" dir="rtl">
              لَا إِلَٰهَ إِلَّا اللَّهُ
            </p>
            <p className="text-sm font-bold text-gray-800 mb-1">Таухид — Аллаhтың бірлігі</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Жалған тәңірлерден (мал, мансап, адамдар, ескі кейіптер) бас тартып, тек Аллаhты ғана Тәңір деп тану.
            </p>
          </div>
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-4">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">Екінші бөлім</p>
            <p className="font-arabic text-xl text-indigo-800 text-right leading-loose mb-2" dir="rtl">
              مُحَمَّدٌ رَسُولُ اللَّهِ
            </p>
            <p className="text-sm font-bold text-gray-800 mb-1">Рисала — пайғамбарлық</p>
            <p className="text-xs text-gray-600 leading-relaxed">
              Мұхаммад ﷺ-нің Аллаhтан алған Құранды жеткізгенін, оның жолын (сүннет) ұстанатынымызды растау.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">Білімді ойын арқылы тексер →</p>
        <p className="text-primary-600 text-xs mb-3">Рас па, жалған ба? — 10 сұрақ</p>
        <Link to="/tauhid-quiz" className="btn-primary">
          Викторинаға өту
        </Link>
      </div>
    </main>
  )
}
