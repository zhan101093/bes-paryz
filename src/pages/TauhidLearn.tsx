import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const ibadatKk = [
  { num: '1', icon: '❤️', title: 'Жүрекпен сену (иқрар бил-қалб)', desc: 'Тек аузымен айтып қана қоймай, жүрегімен терең сенуі тиіс. Аллаhтың бірлігін, Мұхаммад ﷺ-ның пайғамбарлығын ішкі нанымен мойындау.', color: 'bg-rose-50 border-rose-200' },
  { num: '2', icon: '🗣️', title: 'Тілмен айту (иқрар бил-лисан)', desc: 'Шаhадатты ауызша, анық айту — мұсылман болудың шарты. Намаздағы ташаhход, азан, ікамет — бәрінде шаhадат бар.', color: 'bg-blue-50 border-blue-200' },
  { num: '3', icon: '🤲', title: 'Ісімен растау (амал бил-джауарих)', desc: 'Шаhадаттың мағынасына сай өмір сүру: намаз оқу, харамнан бойты аулақ ұстау, Аллаhтың бұйрықтарын орындау.', color: 'bg-green-50 border-green-200' },
  { num: '4', icon: '🔄', title: 'Үздіксіз жаңарту', desc: 'Шаhадат — бір рет айтылатын сөз ғана емес. Азанда, намазда, зікірде үнемі қайталанып, жүректі жандырып отырады.', color: 'bg-violet-50 border-violet-200' },
]

const ibadatRu = [
  { num: '1', icon: '❤️', title: 'Вера сердцем (икрар биль-кальб)', desc: 'Не просто произносить устами, но искренне верить сердцем. Признавать единство Аллаха и пророчество Мухаммада ﷺ внутренним убеждением.', color: 'bg-rose-50 border-rose-200' },
  { num: '2', icon: '🗣️', title: 'Произнесение языком (икрар биль-лисан)', desc: 'Произнести шахаду вслух, чётко — условие принятия ислама. Ташаhhуд, азан, икамат — во всём присутствует шахада.', color: 'bg-blue-50 border-blue-200' },
  { num: '3', icon: '🤲', title: 'Подтверждение делами (амаль биль-джавариh)', desc: 'Жить в соответствии со смыслом шахады: совершать намаз, сторониться запретного, исполнять повеления Аллаха.', color: 'bg-green-50 border-green-200' },
  { num: '4', icon: '🔄', title: 'Постоянное обновление', desc: 'Шахада — не только единожды сказанное слово. Она повторяется в азане, намазе, зикре и оживляет сердце.', color: 'bg-violet-50 border-violet-200' },
]

const lifeKk = [
  { icon: '🧭', title: 'Өмірге мағына', desc: 'Адам тек Аллаhқа ғана бас иетінін түсінеді. Барлық іс-әрекетке мақсат пайда болады.' },
  { icon: '🕊️', title: 'Жүрек тыныштығы', desc: '«Аллаhтан басқа ешкімге тәуелді емеспін» деген сана — ішкі еркіндік пен татуластырады.' },
  { icon: '⚡', title: 'Ғибадатқа жігер', desc: 'Шаhадаттың мағынасын жүрекпен сезінген адам намазын, оразасын, зекетін рухпен орындайды.' },
  { icon: '🤝', title: 'Ахлақ жақсарады', desc: 'Пайғамбар ﷺ-нің жолын ұстанған адам — адалдық, жомарттық, шыдамдылықта үлгі болуға тырысады.' },
  { icon: '🌍', title: 'Жауапкершілік', desc: '«Аллаh бәрін көреді» деген сана — адамды қараңғыда да, жарықта да жақсылыққа бағыттайды.' },
  { icon: '💎', title: 'Ахиретке дайындық', desc: 'Шаhадат — жәннатқа кіру кілті. Бұл сана бүкіл өмірге ахирет призмасынан қарауға үйретеді.' },
]

const lifeRu = [
  { icon: '🧭', title: 'Смысл жизни', desc: 'Человек понимает, что преклоняется только перед Аллахом. Все поступки обретают цель.' },
  { icon: '🕊️', title: 'Покой сердца', desc: 'Осознание «я не завишу ни от кого, кроме Аллаха» — примиряет с внутренней свободой.' },
  { icon: '⚡', title: 'Рвение к поклонению', desc: 'Кто чувствует сердцем смысл шахады — тот совершает намаз, пост и закят с духовным подъёмом.' },
  { icon: '🤝', title: 'Улучшение нрава', desc: 'Следующий пути Пророка ﷺ стремится быть образцом честности, щедрости и терпения.' },
  { icon: '🌍', title: 'Ответственность', desc: 'Осознание «Аллах видит всё» — направляет человека к добру как в темноте, так и на свету.' },
  { icon: '💎', title: 'Подготовка к вечности', desc: 'Шахада — ключ к Раю. Это осознание учит смотреть на всю жизнь через призму вечности.' },
]

const text = {
  kk: {
    back: '← Шаhадат', heroTitle: 'Шаhадат — ғибадат ретінде', heroSub: 'Мәтін, мағына және өмірге әсері',
    s1Title: '🗣️ Шаhадаттың толық мәтіні',
    s1Trans: 'Ашhаду алла иляhа иллаллāh, уа ашhаду анна Мухаммадан расулуллāh',
    s1Meaning: '📌 «Аллаhтан басқа Тәңір жоқ екеніне куәлік беремін, және Мұхаммад Оның елшісі екеніне куәлік беремін»',
    s2Title: '🧩 Шаhадат — қандай ғибадат?',
    s3Title: '🌟 Шаhадат өмірімізге қандай өзгеріс енгізеді?',
    s4Title: '💡 Шаhадаттың екі бөлімі',
    s4Desc: 'Шаhадат екі маңызды мазмұннан тұрады:',
    part1Label: 'Бірінші бөлім', part1Title: 'Таухид — Аллаhтың бірлігі',
    part1Desc: 'Жалған тәңірлерден (мал, мансап, адамдар, ескі кейіптер) бас тартып, тек Аллаhты ғана Тәңір деп тану.',
    part2Label: 'Екінші бөлім', part2Title: 'Рисала — пайғамбарлық',
    part2Desc: 'Мұхаммад ﷺ-нің Аллаhтан алған Құранды жеткізгенін, оның жолын (сүннет) ұстанатынымызды растау.',
    ctaTitle: 'Білімді ойын арқылы тексер →', ctaSub: 'Рас па, жалған ба? — 10 сұрақ', ctaBtn: 'Викторинаға өту',
  },
  ru: {
    back: '← Шахада', heroTitle: 'Шахада как поклонение', heroSub: 'Текст, значение и влияние на жизнь',
    s1Title: '🗣️ Полный текст шахады',
    s1Trans: 'Ашхаду алла иляха иллаллāх, ва ашхаду анна Мухаммадан расулуллāх',
    s1Meaning: '📌 «Свидетельствую, что нет бога кроме Аллаха, и свидетельствую, что Мухаммад — Его посланник»',
    s2Title: '🧩 Шахада — какое это поклонение?',
    s3Title: '🌟 Какие изменения шахада вносит в нашу жизнь?',
    s4Title: '💡 Две части шахады',
    s4Desc: 'Шахада состоит из двух важных составляющих:',
    part1Label: 'Первая часть', part1Title: 'Таухид — единство Аллаха',
    part1Desc: 'Отречение от ложных богов (деньги, должность, люди, идолы) и признание только Аллаха единственным Богом.',
    part2Label: 'Вторая часть', part2Title: 'Рисала — пророчество',
    part2Desc: 'Подтверждение того, что Мухаммад ﷺ донёс Коран от Аллаха и что мы следуем его пути (сунне).',
    ctaTitle: 'Проверь знания через игру →', ctaSub: 'Правда или ложь? — 10 вопросов', ctaBtn: 'К викторине',
  },
}

export function TauhidLearn() {
  const { lang } = useLang()
  const t = text[lang]
  const ibadat = lang === 'ru' ? ibadatRu : ibadatKk
  const life = lang === 'ru' ? lifeRu : lifeKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/tauhid" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🗣️</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-amber-100 text-sm">{t.heroSub}</p>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s1Title}</h2>
        </div>
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-5 text-center">
          <p className="font-arabic text-2xl text-primary-800 leading-loose mb-3" dir="rtl">
            أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
          </p>
          <p className="text-gray-500 text-xs italic mb-3">{t.s1Trans}</p>
          <div className="bg-white border border-primary-100 rounded-xl px-4 py-2">
            <p className="text-primary-800 text-sm font-medium">{t.s1Meaning}</p>
          </div>
        </div>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s2Title}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {ibadat.map((item) => (
            <div key={item.num} className={`border rounded-2xl px-4 py-3 ${item.color}`}>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{item.num}</div>
                <span className="text-lg">{item.icon}</span>
                <p className="font-bold text-gray-900 text-sm">{item.title}</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed pl-11">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s3Title}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {life.map((item) => (
            <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-2xl p-3">
              <span className="text-2xl block mb-1">{item.icon}</span>
              <p className="font-bold text-amber-900 text-sm mb-1">{item.title}</p>
              <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s4Title}</h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">{t.s4Desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4">
            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">{t.part1Label}</p>
            <p className="font-arabic text-xl text-amber-800 text-right leading-loose mb-2" dir="rtl">لَا إِلَٰهَ إِلَّا اللَّهُ</p>
            <p className="text-sm font-bold text-gray-800 mb-1">{t.part1Title}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{t.part1Desc}</p>
          </div>
          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-4">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">{t.part2Label}</p>
            <p className="font-arabic text-xl text-indigo-800 text-right leading-loose mb-2" dir="rtl">مُحَمَّدٌ رَسُولُ اللَّهِ</p>
            <p className="text-sm font-bold text-gray-800 mb-1">{t.part2Title}</p>
            <p className="text-xs text-gray-600 leading-relaxed">{t.part2Desc}</p>
          </div>
        </div>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">{t.ctaTitle}</p>
        <p className="text-primary-600 text-xs mb-3">{t.ctaSub}</p>
        <Link to="/tauhid-quiz" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
