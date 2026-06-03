import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const breaksFastingKk = [
  { icon: '🍔', text: 'Әдейілеп ішіп-жеу' },
  { icon: '🤢', text: 'Әдейілеп құсу' },
  { icon: '❤️', text: 'Ерлі-зайыптық жақындастық (күндіз)' },
  { icon: '🩸', text: 'Әйелдердің етеккірінің (хайыз, нифас) келуі' },
  { icon: '💊', text: 'Мұрынға немесе құлаққа тамызылған дәрінің асқазанға жетуі' },
  { icon: '🚬', text: 'Шылым шегу немесе есірткі заттарды қолдану' },
  { icon: '🌾', text: 'Тістің арасындағы тамақты есіне түскенде жеу' },
]

const breaksFastingRu = [
  { icon: '🍔', text: 'Намеренно поесть или попить' },
  { icon: '🤢', text: 'Намеренно вызвать рвоту' },
  { icon: '❤️', text: 'Супружеская близость (днём)' },
  { icon: '🩸', text: 'Наступление месячных (хайыз, нифас) у женщин' },
  { icon: '💊', text: 'Капли в нос или ухо, достигшие желудка' },
  { icon: '🚬', text: 'Курение или употребление наркотиков' },
  { icon: '🌾', text: 'Намеренное проглатывание пищи, застрявшей между зубами' },
]

const doesNotBreakKk = [
  { icon: '💧', text: 'Ұмытып ішіп-жеу (есіне түскенде тоқтату керек)' },
  { icon: '💦', text: 'Түкірік жұту' },
  { icon: '🚿', text: 'Душқа түсу, шомылу (мұрынға немесе құлаққа су кетпесе)' },
  { icon: '👁️', text: 'Көзге тамызу (асқазанға әсері жоқ)' },
  { icon: '🪥', text: 'Мисвак қолдану немесе тіс пастасын қолдану (жұтып қоймаса)' },
  { icon: '🦷', text: 'Тісті жұлдыру, емдеу (қанды немесе суды жұтып қоймаса)' },
  { icon: '🩺', text: 'Қан алдыру (ауруханада тексеру үшін)' },
  { icon: '💉', text: 'Укол салу' },
  { icon: '😮', text: 'Жедел жәрдем ретіндегі оттегі маскасын кию' },
  { icon: '🧴', text: 'Денесіне крем немесе мазь жағу' },
  { icon: '😴', text: 'Шаршағандықтан ұйықтау' },
]

const doesNotBreakRu = [
  { icon: '💧', text: 'Случайно поесть/попить (остановиться при воспоминании)' },
  { icon: '💦', text: 'Глотать слюну' },
  { icon: '🚿', text: 'Принять душ, купаться (если вода не попала в нос/ухо)' },
  { icon: '👁️', text: 'Капли в глаза (не достигают желудка)' },
  { icon: '🪥', text: 'Использовать мисвак или зубную пасту (не глотая)' },
  { icon: '🦷', text: 'Удаление/лечение зуба (не глотая кровь или воду)' },
  { icon: '🩺', text: 'Сдать кровь (для анализов в больнице)' },
  { icon: '💉', text: 'Укол салу (инъекция)' },
  { icon: '😮', text: 'Кислородная маска в экстренной ситуации' },
  { icon: '🧴', text: 'Нанести крем или мазь на тело' },
  { icon: '😴', text: 'Уснуть от усталости' },
]

const dailyStepsKk = [
  { num: '1', title: 'Ниет ету', icon: '🤲', time: 'Түнде немесе сәресі уақытында', desc: 'Алла ризашылығы үшін ораза тұтуға іштей бекіну.', color: 'bg-indigo-50 border-indigo-100' },
  { num: '2', title: 'Сәресі', icon: '🌙', time: 'Таң атқанға дейін', desc: 'Таң атқанға дейінгі тамақтану — берекелі амал.', color: 'bg-violet-50 border-violet-100' },
  { num: '3', title: 'Күндізгі уақыт', icon: '☀️', time: 'Таң атқаннан күн батқанға дейін', desc: 'Ішіп-жеуден, жақындастықтан және жаман амалдардан тыйылу.', color: 'bg-amber-50 border-amber-100' },
  { num: '4', title: 'Ауыз ашар (Ифтар)', icon: '🍽️', time: 'Күн батқанда', desc: 'Күн батқанда оразаны ашу. Оразаны құрмамен немесе сумен ашу — сүннет.', color: 'bg-rose-50 border-rose-100' },
]

const dailyStepsRu = [
  { num: '1', title: 'Намерение', icon: '🤲', time: 'Ночью или во время сухура', desc: 'Твёрдое внутреннее намерение соблюдать пост ради довольства Аллаха.', color: 'bg-indigo-50 border-indigo-100' },
  { num: '2', title: 'Сухур', icon: '🌙', time: 'До рассвета', desc: 'Приём пищи до рассвета — благодатное дело.', color: 'bg-violet-50 border-violet-100' },
  { num: '3', title: 'Дневное время', icon: '☀️', time: 'От рассвета до заката', desc: 'Воздержание от еды, питья, близости и дурных поступков.', color: 'bg-amber-50 border-amber-100' },
  { num: '4', title: 'Ифтар (разговение)', icon: '🍽️', time: 'На закате', desc: 'Разговение на закате. Сунна — начинать с финика или воды.', color: 'bg-rose-50 border-rose-100' },
]

const duasKk = [
  { label: 'Сәресі ниеті (Ораза ниеті)', arabic: 'نَوَيْتُ أنْ أصُومَ صَوْمَ شَهْرٍ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى', trans: 'Нәуәйту ән асумә саумә шәһри Рамаданә минәл фәжри иләл мағриби халисан лилләһи таъалә.', meaning: '«Таңертеннен кешке дейін Алланың разылығы үшін Рамазан айының оразасын ұстауға ниет еттім»' },
  { label: 'Ауыз ашар дұғасы', arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ وَصَوْمَ الْغَدِ مِنْ شَهْرِ رَمَضَانَ نَوَيْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ', trans: 'Аллаһуммә ләкә сумту уә бикә әәмәнту уә \'аләйкә тәуәккәлту уә \'ала ризқикә әфтарту уә саумәлғади мин шәһри Рамадана нәуәйту, фәғфирлии мәә қаддамту уә мәә аххарту.', meaning: '«Аллаhым! Сенің ризалығың үшін ораза ұстадым, Саған иман келтірдім, Саған тәуекел еттім, Сенің берген ризығыңмен ауыз аштым, ертеңгі Рамазан айының оразасына да ниет еттім. Сен менің өткен және келешек күнәларымды кешір»' },
]

const duasRu = [
  { label: 'Намерение на сухур (намерение поста)', arabic: 'نَوَيْتُ أنْ أصُومَ صَوْمَ شَهْرٍ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ خَالِصًا لِلَّهِ تَعَالَى', trans: 'Нәуәйту ән асумә саумә шәһри Рамаданә минәл фәжри иләл мағриби халисан лилләhи таъалә.', meaning: '«Намерился соблюдать пост месяца Рамадан от рассвета до заката искренне ради Аллаха Всевышнего»' },
  { label: 'Молитва разговения (Ифтар)', arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ وَصَوْمَ الْغَدِ مِنْ شَهْرِ رَمَضَانَ نَوَيْتُ، فَاغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ', trans: 'Аллаhуммә ләкә сумту уа бикә аманту уа \'аләйкә тауаккалту уа \'ала ризқикә афтарту уа саумаль-ғади мин шаhри Рамадана науайту, фағфирлии ма қаддамту уа ма аhhарту.', meaning: '«О Аллах! Ради Тебя держал пост, в Тебя уверовал, на Тебя уповал, твоим уделом разговелся, и намерился на завтрашний пост Рамадана. Прости мне прошлые и будущие грехи»' },
]

const text = {
  kk: { back: '← Ораза', heroTitle: 'Ораза ережелері', heroSub: 'Күндік тәртіп, не бұзады, не бұзбайды', sec1: 'Оразаның күндік тәртібі', sec2: 'Оразаны не бұзады?', sec3: 'Оразаны не бұзбайды?', sec4: 'Ораза дұғалары', transLabel: 'Транслитерация:', meaningLabel: 'Мағынасы:', ctaTitle: '→ Ойыннан білімді тексер', ctaBtn: 'Ойынға өту' },
  ru: { back: '← Пост', heroTitle: 'Правила поста', heroSub: 'Распорядок дня, что нарушает, что нет', sec1: 'Распорядок дня поста', sec2: 'Что нарушает пост?', sec3: 'Что не нарушает пост?', sec4: 'Молитвы поста', transLabel: 'Транслитерация:', meaningLabel: 'Значение:', ctaTitle: '→ Проверь знания через игры', ctaBtn: 'К играм' },
}

export function OrazaLearn() {
  const { lang } = useLang()
  const t = text[lang]
  const dailySteps = lang === 'ru' ? dailyStepsRu : dailyStepsKk
  const breaksFasting = lang === 'ru' ? breaksFastingRu : breaksFastingKk
  const doesNotBreak = lang === 'ru' ? doesNotBreakRu : doesNotBreakKk
  const duas = lang === 'ru' ? duasRu : duasKk

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <Link to="/oraza" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl p-8 text-white text-center mb-8 shadow-lg">
        <span className="text-6xl mb-3 block">🌙</span>
        <h1 className="text-3xl font-bold mb-2">{t.heroTitle}</h1>
        <p className="text-violet-100 text-sm">{t.heroSub}</p>
      </section>

      {/* Daily steps */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec1}</h2>
        </div>
        <div className="flex flex-col gap-3">
          {dailySteps.map((step) => (
            <div key={step.num} className={`border rounded-2xl p-4 ${step.color}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{step.icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                  <p className="text-xs text-gray-500">{step.time}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Breaks fasting */}
      <section className="card mb-5 border border-red-200 bg-red-50">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-red-100 text-red-700 text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
          <h2 className="text-lg font-bold text-red-900">{t.sec2}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {breaksFasting.map((item) => (
            <div key={item.text} className="flex items-center gap-3 bg-white border border-red-200 rounded-xl px-4 py-2.5">
              <span className="text-red-500 font-bold flex-shrink-0">🛑</span>
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Does not break */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec3}</h2>
        </div>
        <div className="flex flex-col gap-2">
          {doesNotBreak.map((item) => (
            <div key={item.text} className="flex items-center gap-3 bg-violet-50 border border-violet-200 rounded-xl px-4 py-2.5">
              <span className="text-emerald-500 font-bold flex-shrink-0">✅</span>
              <span className="text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-gray-700 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Duas */}
      <section className="card mb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-7 h-7 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
          <h2 className="text-lg font-bold text-gray-900">{t.sec4}</h2>
        </div>
        <div className="flex flex-col gap-4">
          {duas.map((dua) => (
            <div key={dua.label} className="bg-violet-50 border border-violet-200 rounded-2xl p-4">
              <p className="text-xs font-bold text-violet-700 uppercase tracking-wider mb-3">{dua.label}</p>
              <p className="font-arabic text-xl text-gray-800 text-right leading-loose mb-2" dir="rtl">{dua.arabic}</p>
              <p className="text-xs text-gray-500 italic mb-2">{t.transLabel} {dua.trans}</p>
              <p className="text-sm text-violet-800 font-medium">{t.meaningLabel} {dua.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="card bg-primary-50 border border-primary-200 text-center py-6">
        <p className="text-primary-800 font-semibold mb-3">{t.ctaTitle}</p>
        <Link to="/oraza-order-game" className="btn-primary">{t.ctaBtn}</Link>
      </div>
    </main>
  )
}
