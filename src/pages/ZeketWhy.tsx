import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const reasonsKk = [
  { number: '1', icon: '💚', title: 'Жүректі сараңдықтан тазарту үшін', body: 'Кей адамдар ақшасын өте жақсы көреді, бөліскісі келмейді. Тек ақша жинай берген адамның жүрегі қатаяды, мейірімі азаяды. Зекет бөлісуді үйретеді, жүректі жұмсартады.' },
  { number: '2', icon: '🤝', title: 'Мұқтаж адамдарға көмектесу үшін', body: 'Барлық адамның жағдайы бірдей емес. Кейбіреулер тамақ та, киім де таба алмайды. Алла адамдар бір-біріне сүйеніп, жалғыз қалмасын деп зекетті парыз етті.' },
  { number: '3', icon: '🌱', title: 'Байлықтың берекесін арттыру үшін', body: '«Берсем азайып қалады» деп ойлама. Гүлге су құйсаң өседі — адам жақсылық жасаса өміріне береке келеді. Зекет ақшаны азайтпайды, керісінше берекесін арттырады.' },
  { number: '4', icon: '🙏', title: 'Аллаға шүкіршілік білдіру үшін', body: 'Үйіміз, тамағымыз, киіміміз — бәрі Алланың нығметі. Зекет берген адам: «Алла маған берді, мен де басқаларға көмектесемін» дейді.' },
  { number: '5', icon: '🌍', title: 'Қоғамда мейірімділік орнату үшін', body: 'Бай адамдар көмектеспесе кедейлік өседі, адамдар бір-бірінен алыстайды. Зекет адамдарды жақындастырады, сүйіспеншілік тудырады.' },
]

const reasonsRu = [
  { number: '1', icon: '💚', title: 'Очищение сердца от жадности', body: 'Некоторые люди очень любят деньги и не хотят делиться. Сердце того, кто только копит, черствеет, теряет доброту. Закят учит делиться и смягчает сердце.' },
  { number: '2', icon: '🤝', title: 'Помощь нуждающимся', body: 'Положение у всех разное. Некоторые не могут найти ни еду, ни одежду. Аллах сделал закят обязательным, чтобы люди опирались друг на друга и не оставались в одиночестве.' },
  { number: '3', icon: '🌱', title: 'Приумножение благодати богатства', body: 'Не думай: «Если дам — убавится». Цветок растёт, когда его поливаешь — когда человек творит добро, в его жизнь приходит благодать. Закят не уменьшает деньги, а приумножает их благодать.' },
  { number: '4', icon: '🙏', title: 'Благодарность Аллаху', body: 'Наш дом, еда, одежда — всё это дары Аллаха. Человек, дающий закят, говорит: «Аллах дал мне — и я помогаю другим».' },
  { number: '5', icon: '🌍', title: 'Утверждение доброты в обществе', body: 'Если богатые не помогают — бедность растёт, люди отдаляются друг от друга. Закят сближает людей и рождает любовь.' },
]

const benefitsKk = ['Кедейлерге көмек беріледі', 'Жетімдер қуанады', 'Аш адамдар тамақ табады', 'Қарызға батқан адамға жеңілдік болады', 'Қоғамда мейірім көбейеді']
const benefitsRu = ['Помогают бедным', 'Сироты радуются', 'Голодные находят еду', 'Облегчение для тех, кто в долгах', 'В обществе умножается добросердечие']

const text = {
  kk: {
    back: '← Зекет', heroTitle: 'Зекетті не үшін береміз?', heroSub: 'Зекеттің мәні, себебі және қоғамға берер пайдасы',
    sec1Title: 'Зекет деген не?', sec1Desc: 'Зекет — Алла берген байлықтың белгілі бір бөлігін мұқтаж адамдарға беру.', sec1Sub: 'Бұл жай ақша беру емес — бұл', bold: 'құлшылық', sec1Sub2: '. Мұсылман намазды денесімен жасайды, ал зекетті мал-мүлкімен жасайды.',
    wordLabel: '«Зекет» сөзінің мағынасы', words: [{ emoji: '✨', word: 'Тазалық' }, { emoji: '🌿', word: 'Өсу' }, { emoji: '🌟', word: 'Береке' }],
    wordSummary: 'Яғни: зекет жүректі тазартады, байлыққа береке береді, адамды жақсырақ етеді.',
    sec2Title: 'Неге Алла зекетті парыз етті?', sec3Title: 'Зекеттің қоғамға пайдасы',
    sec4Title: 'Зекет бермесе не болады?', sec4Desc: 'Егер адам тек ақша жинап, ешкімге көмектеспесе — оның жүрегі қатая бастайды.',
    warnings: ['Өзгелердің жағдайын түсінбей қалады', 'Тек өзін ойлайды', 'Дүниеқоңыз болып кетуі мүмкін'],
    ctaTitle: 'Зекет туралы толық оқу үшін →', ctaSub: 'Зекеттің мөлшері, кімге беріледі, нисаб', ctaBtn: 'Зекет: негіздер',
    reasonLabel: (n: string) => `${n}-себеп`,
  },
  ru: {
    back: '← Закят', heroTitle: 'Зачем отдаём закят?', heroSub: 'Смысл, причины и польза закята для общества',
    sec1Title: 'Что такое закят?', sec1Desc: 'Закят — отдача определённой части богатства, дарованного Аллахом, нуждающимся людям.', sec1Sub: 'Это не просто раздача денег — это ', bold: 'поклонение', sec1Sub2: '. Мусульманин совершает намаз телом, а закят — своим имуществом.',
    wordLabel: 'Значение слова «Закят»', words: [{ emoji: '✨', word: 'Чистота' }, { emoji: '🌿', word: 'Рост' }, { emoji: '🌟', word: 'Благодать' }],
    wordSummary: 'То есть: закят очищает сердце, приносит благодать богатству и делает человека лучше.',
    sec2Title: 'Почему Аллах сделал закят обязательным?', sec3Title: 'Польза закята для общества',
    sec4Title: 'Что будет, если не давать закят?', sec4Desc: 'Если человек только копит и никому не помогает — его сердце начинает черстветь.',
    warnings: ['Перестаёт понимать положение других', 'Думает только о себе', 'Может стать жадным'],
    ctaTitle: 'Читать подробнее о закяте →', ctaSub: 'Размер закята, кому даётся, нисаб', ctaBtn: 'Закят: основы',
    reasonLabel: (n: string) => `Причина ${n}`,
  },
}

export function ZeketWhy() {
  const { lang } = useLang()
  const t = text[lang]
  const reasons = lang === 'ru' ? reasonsRu : reasonsKk
  const benefits = lang === 'ru' ? benefitsRu : benefitsKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/zeket" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">💝</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-rose-100 text-sm">{t.heroSub}</p>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec1Title}</h2>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 mb-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-2">{t.sec1Desc}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{t.sec1Sub}<span className="font-semibold text-rose-700">{t.bold}</span>{t.sec1Sub2}</p>
        </div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">{t.wordLabel}</p>
        <div className="grid grid-cols-3 gap-3">
          {t.words.map((item) => (
            <div key={item.word} className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-center">
              <span className="text-2xl block mb-1">{item.emoji}</span>
              <p className="text-sm font-semibold text-amber-800">{item.word}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm mt-3 leading-relaxed">{t.wordSummary}</p>
      </section>

      <section className="mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec2Title}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {reasons.map((r) => (
            <div key={r.number} className="card flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl flex-shrink-0">{r.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-rose-500 bg-rose-50 border border-rose-200 rounded-full px-2 py-0.5">{t.reasonLabel(r.number)}</span>
                  <h3 className="font-bold text-gray-900 text-sm">{r.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec3Title}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✅</span>
              <p className="text-gray-700 text-sm">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card mb-6 border border-amber-200 bg-amber-50">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-amber-900">{t.sec4Title}</h2>
        </div>
        <p className="text-amber-800 text-sm leading-relaxed mb-3">{t.sec4Desc}</p>
        <div className="flex flex-col gap-2">
          {t.warnings.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-amber-800">
              <span className="text-amber-500">⚠️</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-1">{t.ctaTitle}</p>
        <p className="text-primary-600 text-xs mb-3">{t.ctaSub}</p>
        <Link to="/zeket-learn" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
