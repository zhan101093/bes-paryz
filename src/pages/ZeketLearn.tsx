import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const text = {
  kk: {
    back: '← Зекет', heroTitle: 'Зекетті қалай береміз?', heroSub: 'Кімге парыз, қандай байлықтан, кімдерге беріледі',
    sec1: 'Кімге зекет парыз?', sec2: 'Қандай нәрселерден зекет беріледі?', sec3: 'Қашан беріледі?',
    sec4: 'Қанша беріледі?', sec5: 'Кімдерге беріледі?', sec6: 'Кімдерге берілмейді?', sec7: 'Зекетті қалай дұрыс береміз?',
    condDesc: 'Зекет әр адамға бірдей парыз емес. Зекет мынадай адамдарға парыз:',
    nisabLabel: '🌟 Нисаб деген не?',
    nisabDesc: 'Зекет парыз болуы үшін адамның байлығы белгілі бір мөлшерден асуы керек. Бұл мөлшер «нисаб» деп аталады.',
    nisabValue: 'Нисаб = шамамен 85 грамм алтынның құнына тең байлық',
    nisabNote: 'Егер адамның ақшасы, алтыны, бизнес табысы немесе сауда тауары осы мөлшерден көп болса және ол байлық бір жыл тұрса — зекет береді.',
    noteLabel: '💡 Ескерту:', noteText: 'Үйдегі тұрмыстық заттардан зекет берілмейді.',
    animalLabel: '🐑 Малдан зекет ережесі',
    whenDesc: 'Жылына 1 рет беріледі', whenNote: 'Көп мұсылмандар Рамазан айында береді, өйткені осы айда сауабы көбірек.',
    example: 'Мысалы:',
    givesLabel: 'Кімдерге беріледі?', notGivesLabel: 'Кімдерге берілмейді?',
    ctaTitle: 'Білімді ойын арқылы тексер →', ctaSub: 'Зекет шебері, Кімге береміз?, Зекет себеті', ctaBtn: 'Ойынға өту',
    wordLabel: '«Зекет» сөзінің мағынасы',
    words: [{ emoji: '✨', word: 'Тазалық' }, { emoji: '🌿', word: 'Өсу' }, { emoji: '🌟', word: 'Береке' }],
    wordSummary: 'Яғни: зекет жүректі тазартады, байлыққа береке береді, адамды жақсырақ етеді.',
    ibadah: 'бұл жай ақша беру емес — бұл', bold: 'құлшылық', ibadah2: '. Мұсылман намазды денесімен жасайды, ал зекетті мал-мүлкімен жасайды.',
    howLabel: 'Зекетті қалай дұрыс береміз?',
    etiquetteLabel: 'Зекет берудің этикеті',
  },
  ru: {
    back: '← Закят', heroTitle: 'Как выплачивается закят?', heroSub: 'Кому обязателен, с чего берётся, кому даётся',
    sec1: 'Кому обязателен закят?', sec2: 'С чего берётся закят?', sec3: 'Когда выплачивается?',
    sec4: 'Сколько выплачивается?', sec5: 'Кому даётся?', sec6: 'Кому не даётся?', sec7: 'Как правильно давать закят?',
    condDesc: 'Закят обязателен не для всех. Закят обязателен для:',
    nisabLabel: '🌟 Что такое нисаб?',
    nisabDesc: 'Чтобы закят стал обязательным, имущество человека должно превышать определённый порог. Этот порог называется «нисаб».',
    nisabValue: 'Нисаб = примерно стоимость 85 граммов золота',
    nisabNote: 'Если деньги, золото, доходы от бизнеса или торговые товары превышают этот порог и хранятся 1 год — человек платит закят.',
    noteLabel: '💡 Примечание:', noteText: 'С бытовых вещей в доме закят не берётся.',
    animalLabel: '🐑 Правила закята со скота',
    whenDesc: 'Выплачивается раз в год', whenNote: 'Многие мусульмане платят в Рамадан, так как в этом месяце больше награды.',
    example: 'Например:',
    givesLabel: 'Кому даётся?', notGivesLabel: 'Кому не даётся?',
    ctaTitle: 'Проверь знания через игры →', ctaSub: 'Мастер закята, Кому даём?, Корзина закята', ctaBtn: 'К играм',
    wordLabel: 'Значение слова «Закят»',
    words: [{ emoji: '✨', word: 'Чистота' }, { emoji: '🌿', word: 'Рост' }, { emoji: '🌟', word: 'Благодать' }],
    wordSummary: 'То есть: закят очищает сердце, приносит благодать богатству и делает человека лучше.',
    ibadah: 'это не просто раздача денег — это ', bold: 'поклонение', ibadah2: '. Мусульманин совершает намаз телом, а закят — своим имуществом.',
    howLabel: 'Как правильно давать закят?',
    etiquetteLabel: 'Этикет выплаты закята',
  },
}

const conditionsKk = ['Мұсылман адамға', 'Балиғат жасына жеткен адамға', 'Ақыл-есі дұрыс адамға', 'Белгілі мөлшерден көп байлығы бар адамға']
const conditionsRu = ['Мусульманину', 'Достигшему совершеннолетия', 'Человеку со здравым умом', 'Человеку, чьё имущество превышает нисаб']

const wealthKk = [{ icon: '💵', title: 'Ақша', desc: 'Жиналған ақша қоры' }, { icon: '🥇', title: 'Алтын-күміс', desc: 'Сақина, жинақ, құйма' }, { icon: '🛍️', title: 'Сауда тауары', desc: 'Дүкендегі киім, техника, тауар' }, { icon: '🐑', title: 'Мал', desc: 'Қой, сиыр, түйе' }]
const wealthRu = [{ icon: '💵', title: 'Деньги', desc: 'Накопленные денежные средства' }, { icon: '🥇', title: 'Золото и серебро', desc: 'Кольца, накопления, слитки' }, { icon: '🛍️', title: 'Торговые товары', desc: 'Одежда, техника, товары в магазине' }, { icon: '🐑', title: 'Скот', desc: 'Овцы, коровы, верблюды' }]

const animalsKk = [{ icon: '🐑', animal: 'Қой', rule: '40 қой болса → 1 қой беріледі' }, { icon: '🐄', animal: 'Сиыр', rule: '30 сиыр болса → 1 жасар бұзау беріледі' }, { icon: '🐪', animal: 'Түйе', rule: '5 түйе болса → 1 қой беріледі' }]
const animalsRu = [{ icon: '🐑', animal: 'Овцы', rule: 'С 40 овец → 1 овца' }, { icon: '🐄', animal: 'Коровы', rule: 'С 30 коров → 1 телёнок' }, { icon: '🐪', animal: 'Верблюды', rule: 'С 5 верблюдов → 1 овца' }]

const recipientsKk = [{ num: '1', icon: '🏠', title: 'Кедейлер', desc: 'Табысы өте аз адамдар' }, { num: '2', icon: '🍽️', title: 'Мұқтаждар', desc: 'Күнделікті өміріне ақшасы жетпейтін адамдар' }, { num: '3', icon: '📋', title: 'Қарызы бар адамдар', desc: 'Қарызын төлей алмай жүргендер' }, { num: '4', icon: '👦', title: 'Жетімдер', desc: 'Әке-шешесінен айырылған балалар' }, { num: '5', icon: '🧳', title: 'Жолда қалған адам', desc: 'Үйіне жете алмай қалған жолаушы' }, { num: '6', icon: '📖', title: 'Ислам жолындағы пайдалы істер', desc: 'Білім, діни қызмет, пайдалы жобалар' }]
const recipientsRu = [{ num: '1', icon: '🏠', title: 'Бедные', desc: 'Люди с очень низким доходом' }, { num: '2', icon: '🍽️', title: 'Нуждающиеся', desc: 'Тем, кому не хватает на повседневные нужды' }, { num: '3', icon: '📋', title: 'Должники', desc: 'Те, кто не может выплатить долг' }, { num: '4', icon: '👦', title: 'Сироты', desc: 'Дети, лишившиеся родителей' }, { num: '5', icon: '🧳', title: 'Путник в дороге', desc: 'Путник, застрявший далеко от дома' }, { num: '6', icon: '📖', title: 'Полезные дела во имя ислама', desc: 'Образование, религиозные услуги, полезные проекты' }]

const notRecipientsKk = [{ icon: '💼', title: 'Өте бай адамдар', reason: 'Олардың өз байлығы жеткілікті' }, { icon: '👴👵', title: 'Ата-ана', reason: 'Ата-анаға көмек онсыз да міндет' }, { icon: '👵', title: 'Ата-әже', reason: 'Бір отбасы болып саналады' }, { icon: '👶', title: 'Балалар', reason: 'Бір отбасы болып саналады' }, { icon: '💍', title: 'Күйеуі немесе әйелі', reason: 'Бір отбасы болып саналады' }]
const notRecipientsRu = [{ icon: '💼', title: 'Очень богатые', reason: 'У них достаточно своего имущества' }, { icon: '👴👵', title: 'Родители', reason: 'Содержать родителей — отдельная обязанность' }, { icon: '👵', title: 'Дедушки и бабушки', reason: 'Считаются одной семьёй' }, { icon: '👶', title: 'Дети', reason: 'Считаются одной семьёй' }, { icon: '💍', title: 'Муж или жена', reason: 'Считаются одной семьёй' }]

const etiquetteKk = [{ icon: '❤️', title: 'Алла разылығы үшін беру', desc: 'Адамдар мақтасын деп емес, тек Алла үшін.' }, { icon: '🤲', title: 'Жақсы мінезбен беру', desc: 'Алушыны ренжітпеу, ұялтпау, міндетсінбеу.' }, { icon: '🌙', title: 'Жасырын беру жақсырақ', desc: 'Адамды ыңғайсыз етпеу үшін жасырын беру — әдемі амал.' }, { icon: '🌟', title: 'Ең жақсы нәрседен беру', desc: 'Жаман, ескі заттан емес, жақсы нәрседен беру керек.' }]
const etiquetteRu = [{ icon: '❤️', title: 'Давать ради Аллаха', desc: 'Не ради похвалы людей, а только ради Аллаха.' }, { icon: '🤲', title: 'Давать с добрым нравом', desc: 'Не обижать, не унижать, не давать с обязательством.' }, { icon: '🌙', title: 'Лучше давать тайно', desc: 'Скрытная выдача — прекрасный поступок, чтобы не смущать получателя.' }, { icon: '🌟', title: 'Давать лучшее', desc: 'Не плохие и старые вещи, а хорошее.' }]

const examples = [{ amount: '100 000 ₸', zakat: '2 500 ₸' }, { amount: '500 000 ₸', zakat: '12 500 ₸' }, { amount: '1 000 000 ₸', zakat: '25 000 ₸' }]

export function ZeketLearn() {
  const { lang } = useLang()
  const t = text[lang]
  const conditions = lang === 'ru' ? conditionsRu : conditionsKk
  const wealth = lang === 'ru' ? wealthRu : wealthKk
  const animals = lang === 'ru' ? animalsRu : animalsKk
  const recipients = lang === 'ru' ? recipientsRu : recipientsKk
  const notRecipients = lang === 'ru' ? notRecipientsRu : notRecipientsKk
  const etiquette = lang === 'ru' ? etiquetteRu : etiquetteKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/zeket" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">💵</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-rose-100 text-sm">{t.heroSub}</p>
      </section>

      {/* sec1 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec1}</h2>
        </div>
        <p className="text-gray-600 text-sm mb-3">{t.condDesc}</p>
        <div className="flex flex-col gap-2 mb-5">
          {conditions.map((c) => (
            <div key={c} className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✅</span>
              <p className="text-gray-700 text-sm">{c}</p>
            </div>
          ))}
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">{t.nisabLabel}</p>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">{t.nisabDesc}</p>
          <div className="bg-white border border-amber-200 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-600">{t.nisabValue}</p>
          </div>
          <p className="text-gray-600 text-xs mt-3 leading-relaxed">{t.nisabNote}</p>
        </div>
      </section>

      {/* sec2 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec2}</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {wealth.map((w) => (
            <div key={w.title} className="bg-rose-50 border border-rose-200 rounded-2xl p-3 text-center">
              <span className="text-3xl block mb-1">{w.icon}</span>
              <p className="font-bold text-rose-800 text-sm">{w.title}</p>
              <p className="text-gray-500 text-xs mt-0.5">{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 mb-4">
          <p className="text-sm text-gray-600"><span className="font-semibold">{t.noteLabel}</span> {t.noteText}</p>
        </div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.animalLabel}</p>
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

      {/* sec3 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec3}</h2>
        </div>
        <div className="flex items-center gap-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
          <span className="text-4xl flex-shrink-0">🌙</span>
          <div>
            <p className="font-bold text-indigo-900 text-sm mb-1">{t.whenDesc}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{t.whenNote}</p>
          </div>
        </div>
      </section>

      {/* sec4 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec4}</h2>
        </div>
        <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 text-center mb-3">
          <p className="text-5xl font-bold text-pink-600 mb-2">2.5%</p>
          <p className="text-gray-500 text-sm">{lang === 'ru' ? 'От денег или золота' : 'Ақша немесе алтын байлығынан'}</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">{t.example}</p>
          <div className="flex flex-col gap-1.5">
            {examples.map((ex) => (
              <div key={ex.amount} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{ex.amount}</span>
                <span className="text-rose-700 font-semibold">→ {ex.zakat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* sec5 */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">5</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec5}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {recipients.map((r) => (
            <div key={r.num} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
              <span className="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{r.num}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{r.icon} {r.title}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* sec6 */}
      <section className="card mb-5 border border-red-200 bg-red-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center flex-shrink-0">6</span>
          <h2 className="text-lg font-bold text-red-900">{t.sec6}</h2>
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

      {/* sec7 */}
      <section className="card mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">7</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec7}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {etiquette.map((e, i) => (
            <div key={e.title} className="flex items-start gap-3 card bg-amber-50 border-amber-200 p-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-xl flex-shrink-0">{e.icon}</div>
              <div>
                <p className="font-bold text-gray-900 text-sm"><span className="text-amber-600 mr-1">{i + 1}.</span>{e.title}</p>
                <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">{t.ctaTitle}</p>
        <p className="text-primary-600 text-xs mb-3">{t.ctaSub}</p>
        <Link to="/zeket-game" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
