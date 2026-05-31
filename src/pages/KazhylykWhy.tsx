import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const reasonsKk = [
  { number: '1', icon: '✨', title: 'Аллаға жақындау', body: 'Қажылықта адам күнәларын кешіруді сұрайды, дұға етеді, жүрегін тазартады. Бұл "рухани қайта туу" сияқты.' },
  { number: '2', icon: '🤍', title: 'Барлық мұсылмандар тең', body: 'Қажылықта бай да, кедей де бір киім киеді (ихрам), бәрі бірдей Алла алдында. Байлық, статус, атақ жоғалады.' },
  { number: '3', icon: '📖', title: 'Ибраhим пайғамбардың жолы', body: 'Қажылық Ибраhим (ғ.с.) оқиғасына байланысты. Ол — Аллаға толық мойынсұну үлгісі.' },
  { number: '4', icon: '🌱', title: 'Сабыр мен тәртіп үйретеді', body: 'Көп адам, ыстық ауа, ұзақ қозғалыс — мұның бәрі адамды сабыр үйретеді.' },
  { number: '5', icon: '🕊️', title: 'Өмірді қайта ойлау', body: 'Адам ойлайды: "Мен кіммін?", "Мен не істеп жүрмін?", "Ақыретке дайынмын ба?" — бұл өмірдің ең биік рухани тәжірибесі.' },
]

const reasonsRu = [
  { number: '1', icon: '✨', title: 'Приближение к Аллаху', body: 'В хадже человек просит прощения за грехи, молится, очищает сердце. Это похоже на "духовное возрождение".' },
  { number: '2', icon: '🤍', title: 'Все мусульмане равны', body: 'В хадже и богатый, и бедный надевают одну одежду (ихрам), все одинаково перед Аллахом. Богатство, статус, звание — всё исчезает.' },
  { number: '3', icon: '📖', title: 'Путь пророка Ибрахима', body: 'Хадж связан с историей Ибрахима (мир ему). Он — образец полного подчинения Аллаху.' },
  { number: '4', icon: '🌱', title: 'Учит терпению и порядку', body: 'Много людей, жара, долгие переходы — всё это учит человека терпению.' },
  { number: '5', icon: '🕊️', title: 'Переосмысление жизни', body: 'Человек думает: "Кто я?", "Что я делаю?", "Готов ли я к ахирату?" — это самый высокий духовный опыт в жизни.' },
]

const text = {
  kk: { back: '← Қажылық', heroTitle: 'Қажылық не үшін жасалады?', heroSub: 'Қажылықтың мәні, рухани маңызы және себебі', sec1Title: 'Қажылық деген не?', sec1Desc: 'Қажылық — мұсылманның өмірінде бір рет Меккеге барып, арнайы құлшылықтарды орындауы.', notTrip: 'жай саяхат емес', isIbadah: 'үлкен ғибадат', sec2Title: 'Неге қажылық маңызды?', ctaTitle: 'Қажылық жолын толық үйрену үшін →', ctaSub: 'Ихрам, Тауап, Сағи, Арафат және басқа қадамдар', ctaBtn: 'Қажылық жолы', reasonLabel: (n: string) => `${n}-себеп` },
  ru: { back: '← Хадж', heroTitle: 'Зачем совершают хадж?', heroSub: 'Смысл, духовная важность и причины хаджа', sec1Title: 'Что такое хадж?', sec1Desc: 'Хадж — посещение Мекки мусульманином один раз в жизни и совершение особых обрядов поклонения.', notTrip: 'это не просто путешествие', isIbadah: 'великое поклонение', sec2Title: 'Почему хадж важен?', ctaTitle: 'Изучить путь хаджа →', ctaSub: 'Ихрам, Таваф, Сай, Арафат и другие шаги', ctaBtn: 'Путь хаджа', reasonLabel: (n: string) => `Причина ${n}` },
}

export function KazhylykWhy() {
  const { lang } = useLang()
  const t = text[lang]
  const reasons = lang === 'ru' ? reasonsRu : reasonsKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/kazhylyk" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🕋</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-teal-100 text-sm">{t.heroSub}</p>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec1Title}</h2>
        </div>
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-3">{t.sec1Desc}</p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 bg-white border border-red-100 rounded-xl px-4 py-2.5">
              <span className="text-red-500 font-bold flex-shrink-0">❌</span>
              <p className="text-gray-700 text-sm">{t.notTrip}</p>
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
          <span className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec2Title}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 border border-teal-200 rounded-full px-2 py-0.5">{t.reasonLabel(r.number)}</span>
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
        <Link to="/kazhylyk-learn" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
