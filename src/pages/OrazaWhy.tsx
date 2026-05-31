import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const reasonsKk = [
  { number: '1', icon: '✨', title: 'Тақуалыққа жету (Алладан қорқу)', body: 'Ораза ұстаудың басты мақсаты — жүректі тазартып, Аллаға жақындау және Одан қорқуды (тақуалықты) үйрену. Бұл "рухани тазару" айы.' },
  { number: '2', icon: '🤍', title: 'Сабыр мен ерік-жігерді шыңдау', body: 'Ораза аштық пен шөлге шыдауды, нәпсімен күресті үйретеді. Адамның ерік-жігері күшейеді.' },
  { number: '3', icon: '📖', title: 'Шүкіршілік пен жанашырлық', body: 'Аштықты сезініп, кедейлердің халін түсінеміз және қолымыздағы бар нығметтің қадірін білеміз.' },
  { number: '4', icon: '🔄', title: 'Өмірді қайта бағдарлау', body: 'Рамазан айында адам бос әңгіме мен зиянды әдеттерден тыйылады. Күнделікті күйбеңнен тоқтап: "Мен кіммін? Не істеп жүрмін?" деп өз өміріне есеп береді.' },
  { number: '5', icon: '🍏', title: 'Аутофагия және ағзаның жасаруы', body: 'Ғылыми дәлелденгендей, ұзақ уақыт аш жүру кезінде ағзада аутофагия процесі жүреді: жасушалар өздерін тазартады, асқазан мен бауыр демалады. Ораза — рухани ғана емес, физикалық тұрғыдан да "перезагрузка".' },
  { number: '6', icon: '🌱', title: 'Күнәлардың кешірілуі', body: 'Ықыласпен ұсталған ораза өткен күнәлардың кешірілуіне себеп болады.' },
]

const reasonsRu = [
  { number: '1', icon: '✨', title: 'Достижение богобоязненности (таква)', body: 'Главная цель поста — очистить сердце, приблизиться к Аллаху и научиться богобоязненности (такве). Это месяц "духовного очищения".' },
  { number: '2', icon: '🤍', title: 'Укрепление терпения и воли', body: 'Пост учит терпеть голод и жажду, бороться с нафсом (нижним "я"). Сила воли человека возрастает.' },
  { number: '3', icon: '📖', title: 'Благодарность и сострадание', body: 'Ощущая голод, мы понимаем положение бедных и ценим блага, которые имеем.' },
  { number: '4', icon: '🔄', title: 'Переосмысление жизни', body: 'В месяц Рамадан человек отказывается от пустых разговоров и вредных привычек. Останавливается и спрашивает себя: "Кто я? Что делаю?" — ведёт итог своей жизни.' },
  { number: '5', icon: '🍏', title: 'Аутофагия и омоложение организма', body: 'Научно доказано, что при длительном голодании в организме запускается аутофагия: клетки очищают себя, желудок и печень отдыхают. Пост — это "перезагрузка" не только духовная, но и физическая.' },
  { number: '6', icon: '🌱', title: 'Прощение грехов', body: 'Пост, соблюдаемый с искренностью, становится причиной прощения прошлых грехов.' },
]

const text = {
  kk: { back: '← Ораза', heroTitle: 'Ораза не үшін ұсталады?', heroSub: 'Оразаның рухани мәні, физикалық пайдасы және себебі', sec1Title: 'Ораза деген не?', sec1Desc: 'Ораза (Рамазан айында) — таң атқаннан (сәресінен) күн батқанға (ауыз ашарға) дейін ниетпен ішіп-жеуден және кейбір іс-әрекеттерден тыйылу.', notDiet: 'Жай ғана диета емес', isIbadah: 'Үлкен ғибадат, бес парыздың бірі', sec2Title: 'Неге ораза маңызды?', ctaTitle: 'Ораза ережелерін толық үйрену үшін →', ctaSub: 'Күндік тәртіп, не бұзады, не бұзбайды', ctaBtn: 'Ораза ережелері', reasonLabel: (n: string) => `${n}-себеп` },
  ru: { back: '← Пост', heroTitle: 'Зачем соблюдать пост?', heroSub: 'Духовный смысл, физическая польза и причины поста', sec1Title: 'Что такое пост?', sec1Desc: 'Пост (в месяц Рамадан) — отказ от еды, питья и некоторых действий с намерением — от рассвета (сухур) до заката (ифтар).', notDiet: 'Это не просто диета', isIbadah: 'Великое поклонение, один из пяти столпов', sec2Title: 'Почему пост важен?', ctaTitle: 'Изучить правила поста →', ctaSub: 'Распорядок дня, что нарушает, что нет', ctaBtn: 'Правила поста', reasonLabel: (n: string) => `Причина ${n}` },
}

export function OrazaWhy() {
  const { lang } = useLang()
  const t = text[lang]
  const reasons = lang === 'ru' ? reasonsRu : reasonsKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/oraza" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🌙</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-violet-100 text-sm">{t.heroSub}</p>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec1Title}</h2>
        </div>
        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.sec1Desc}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white border border-red-100 rounded-xl px-4 py-2.5">
              <span className="text-red-500 font-bold flex-shrink-0">❌</span>
              <p className="text-gray-700 text-sm">{t.notDiet}</p>
            </div>
            <div className="flex items-center gap-3 bg-white border border-emerald-100 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✔️</span>
              <p className="text-gray-700 text-sm">{t.isIbadah}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec2Title}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center text-xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-violet-600 bg-violet-50 border border-violet-200 rounded-full px-2 py-0.5">{t.reasonLabel(r.number)}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{r.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">{t.ctaTitle}</p>
        <p className="text-primary-600 text-xs mb-3">{t.ctaSub}</p>
        <Link to="/oraza-learn" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
