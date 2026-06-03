import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const reasonsKk = [
  { icon: '🚪', title: 'Исламға кіру есігі', desc: 'Кім шаhадат айтса — ол мұсылман болады. Бұл — Аллаhпен жасасқан ең маңызды серт.' },
  { icon: '🏗️', title: 'Таухидтің іргетасы', desc: '«Лā иляhа» — барлық жалған тәңірлерден бас тарту; «иллаллāh» — Аллаhты жалғыз Тәңір деп тану.' },
  { icon: '🎯', title: 'Барлық амалдардың мақсаты', desc: 'Намаз, ораза, зекет, қажылық — бәрі шаhадатты растайтын ғибадаттар.' },
  { icon: '🛡️', title: 'Ақирет өмірінде қорғаныш', desc: 'Пайғамбар ﷺ: «Соңғы сөзі «Лā иляhа иллаллāh» болған жан жәннатқа кіреді» деген.' },
  { icon: '💎', title: 'Санаға, жүрекке, тілге жүктелген міндет', desc: 'Шаhадат — тек сөз емес, бүкіл өмір салтына бағыт беретін ақида.' },
]

const reasonsRu = [
  { icon: '🚪', title: 'Врата входа в ислам', desc: 'Кто произносит шахаду — тот становится мусульманином. Это самый важный завет с Аллахом.' },
  { icon: '🏗️', title: 'Основа таухида', desc: '«Лā иляха» — отречение от всех ложных богов; «иллаллāх» — признание Аллаха единственным Богом.' },
  { icon: '🎯', title: 'Цель всех поклонений', desc: 'Намаз, пост, закят, хадж — всё это поклонения, подтверждающие шахаду.' },
  { icon: '🛡️', title: 'Защита в вечной жизни', desc: 'Пророк ﷺ сказал: «Тот, чьими последними словами будет «Лā иляха иллаллāх», войдёт в Рай».' },
  { icon: '💎', title: 'Обязанность ума, сердца и языка', desc: 'Шахада — не просто слово, а акыда, направляющая весь образ жизни.' },
]

const pillarsTableKk = [
  { num: '1 ★', title: 'Шаhадат', desc: 'Куәлік беру — барлық ғибадаттың негізі', current: true },
  { num: '2', title: 'Намаз', desc: 'Тәуліктік 5 уақыт намаз', current: false },
  { num: '3', title: 'Зекет', desc: 'Кедей-кепшіктерге міндетті садақа', current: false },
  { num: '4', title: 'Ораза', desc: 'Рамазан айының оразасы', current: false },
  { num: '5', title: 'Қажылық', desc: 'Мекке қаласына сапар (мүмкіндік болса)', current: false },
]

const pillarsTableRu = [
  { num: '1 ★', title: 'Шахада', desc: 'Свидетельство — основа всего поклонения', current: true },
  { num: '2', title: 'Намаз', desc: 'Пятикратная молитва в сутки', current: false },
  { num: '3', title: 'Закят', desc: 'Обязательная милостыня бедным', current: false },
  { num: '4', title: 'Пост', desc: 'Пост в месяц Рамадан', current: false },
  { num: '5', title: 'Хадж', desc: 'Паломничество в Мекку (при возможности)', current: false },
]

const text = {
  kk: {
    back: '← Шаhадат', heroTitle: 'Шаhадаттың маңыздылығы', heroSub: 'Ислам дінінің бірінші тірегі',
    s1Title: '🕌 Шаhадат дегеніміз не?',
    s1Desc: 'Шаhадат (арабша: شَهَادَة — куәлік, айғақ) — Ислам дінінің негізі болып табылатын иман сөзі. Ол Аллаhтың бірлігіне және Мұхаммад ﷺ-ның пайғамбарлығына деген жүрекпен сенуді, тілмен айтуды, ісімен растауды біріктіреді.',
    s1Quote: '✦ «Ислам бес нәрсенің үстіне орнатылды» деген хадисте шаhадат — ең бірінші айтылған. Ол барлық ғибадаттың негізі мен кілті.',
    s2Title: '⚖️ Маңыздылығы — 5 себеп',
    s3Title: '🌳 «Бес баған» жүйесіндегі орны',
    currentLabel: '★ Осы тақырып',
    s4Title: '📖 Хадис — дәлел',
    hadithTransl: '«Ислам бес нәрсенің үстіне орнатылды...» (Бұхари, Муслим)',
    hadithNote: 'Бұл хадисте «куәлік беру» бірінші орында аталған. Демек, Пайғамбар ﷺ шаhадатты барлық дін амалдарының бастапқы негізі ретінде анықтаған.',
    ctaTitle: 'Шаhадатты терең үйрен →', ctaSub: 'Толық мәтін, 4 түрі, өмірге әсері', ctaBtn: 'Шаhадат — ғибадат ретінде',
  },
  ru: {
    back: '← Шахада', heroTitle: 'Важность шахады', heroSub: 'Первый столп ислама',
    s1Title: '🕌 Что такое шахада?',
    s1Desc: 'Шахада (арабск.: شَهَادَة — свидетельство) — символ веры, основа ислама. Она объединяет сердечную веру в единство Аллаха и пророчество Мухаммада ﷺ, произнесение языком и подтверждение делами.',
    s1Quote: '✦ В хадисе «Ислам построен на пяти основах» — шахада упомянута первой. Она — фундамент и ключ всех поклонений.',
    s2Title: '⚖️ Важность — 5 причин',
    s3Title: '🌳 Место в системе «Пять столпов»',
    currentLabel: '★ Эта тема',
    s4Title: '📖 Хадис — доказательство',
    hadithTransl: '«Ислам построен на пяти основах...» (Бухари, Муслим)',
    hadithNote: 'В этом хадисе «свидетельство» упомянуто первым. Таким образом, Пророк ﷺ определил шахаду как исходную основу всех религиозных деяний.',
    ctaTitle: 'Изучи шахаду глубже →', ctaSub: 'Полный текст, 4 вида, влияние на жизнь', ctaBtn: 'Шахада как поклонение',
  },
}

export function TauhidWhy() {
  const { lang } = useLang()
  const t = text[lang]
  const reasons = lang === 'ru' ? reasonsRu : reasonsKk
  const pillarsTable = lang === 'ru' ? pillarsTableRu : pillarsTableKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/tauhid" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🕌</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-amber-100 text-sm">{t.heroSub}</p>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s1Title}</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.s1Desc}</p>
          <div className="border-l-4 border-amber-400 pl-3">
            <p className="text-amber-800 text-sm italic">{t.s1Quote}</p>
          </div>
        </div>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s2Title}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-4 py-3">
              <div className="w-8 h-8 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
              <div>
                <p className="font-bold text-gray-900 text-sm mb-0.5">{r.icon} {r.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s3Title}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {pillarsTable.map((p) => (
            <div key={p.num} className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border ${p.current ? 'bg-amber-100 border-amber-400' : 'bg-gray-50 border-gray-200'}`}>
              <span className={`text-xs font-bold w-8 text-center flex-shrink-0 ${p.current ? 'text-amber-700' : 'text-gray-400'}`}>{p.num}</span>
              <div className="flex-1">
                <p className={`font-semibold text-sm ${p.current ? 'text-amber-900' : 'text-gray-700'}`}>{p.title}</p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
              {p.current && <span className="text-amber-600 text-xs font-semibold whitespace-nowrap">{t.currentLabel}</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-gray-900">{t.s4Title}</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center mb-3">
          <p className="font-arabic text-xl text-amber-800 leading-loose mb-2" dir="rtl">بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ</p>
          <p className="text-amber-700 text-sm italic">{t.hadithTransl}</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{t.hadithNote}</p>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">{t.ctaTitle}</p>
        <p className="text-primary-600 text-xs mb-3">{t.ctaSub}</p>
        <Link to="/tauhid-learn" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
