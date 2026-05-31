import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const sections = {
  kk: [
    { to: '/tauhid-why', number: '01', title: 'Шаhадаттың маңыздылығы', description: 'Шаhадат дегеніміз не, неге маңызды, хадис дәлелі', icon: '🕌', color: 'from-amber-400 to-yellow-500' },
    { to: '/tauhid-learn', number: '02', title: 'Шаhадат — ғибадат ретінде', description: 'Толық мәтін, 4 түрі, өмірге әсері, екі бөлімі', icon: '📖', color: 'from-orange-400 to-amber-500' },
    { to: '/tauhid-quiz', number: '03', title: 'Рас па, жалған ба?', description: '10 рас/жалған сұрақ — жылдам білім тексеру', icon: '✅', color: 'from-purple-500 to-indigo-600' },
    { to: '/tauhid-order-game', number: '04', title: 'Калима ретімен қою', description: 'Шаhадат сөздерін дұрыс ретімен орналастыр', icon: '🧩', color: 'from-rose-500 to-pink-600' },
    { to: '/tauhid-quiz2', number: '05', title: 'Орта деңгей викторина', description: '10 сұрақ, 4 вариант — терең білімді тексер', icon: '🎯', color: 'from-blue-500 to-indigo-600' },
    { to: '/tauhid-scenario-game', number: '06', title: 'Өмірлік жағдайлар', description: 'Шаhадат негізінде дұрыс шешім қабылда', icon: '🎮', color: 'from-teal-500 to-emerald-600' },
  ],
  ru: [
    { to: '/tauhid-why', number: '01', title: 'Важность шахады', description: 'Что такое шахада, почему важна, хадис', icon: '🕌', color: 'from-amber-400 to-yellow-500' },
    { to: '/tauhid-learn', number: '02', title: 'Шахада как поклонение', description: 'Полный текст, 4 вида, влияние на жизнь, две части', icon: '📖', color: 'from-orange-400 to-amber-500' },
    { to: '/tauhid-quiz', number: '03', title: 'Правда или ложь?', description: '10 вопросов — быстрая проверка знаний', icon: '✅', color: 'from-purple-500 to-indigo-600' },
    { to: '/tauhid-order-game', number: '04', title: 'Расставь каляму по порядку', description: 'Расставь слова шахады в правильном порядке', icon: '🧩', color: 'from-rose-500 to-pink-600' },
    { to: '/tauhid-quiz2', number: '05', title: 'Викторина среднего уровня', description: '10 вопросов с 4 вариантами — проверь глубокие знания', icon: '🎯', color: 'from-blue-500 to-indigo-600' },
    { to: '/tauhid-scenario-game', number: '06', title: 'Жизненные ситуации', description: 'Принимай правильные решения на основе шахады', icon: '🎮', color: 'from-teal-500 to-emerald-600' },
  ],
}

const text = {
  kk: {
    back: '← Бес Парызға оралу',
    badge: 'Бес парыздың 1-ші тірегі',
    title: 'Шаhадат үйрену',
    goalLabel: 'Мақсат',
    goal: 'Шаhадаттың мағынасын, маңызын және оны жүрекпен, тілмен, ісімен орындаудың жолдарын үйрену — мұсылман болудың бірінші шарты.',
    quoteTransl: '«Аллаhтан басқа Тәңір жоқ, Мұхаммад ﷺ Оның елшісі» — Шаhадат',
    sections: 'Бөлімдер',
    footer: 'Шаhадат — Ислам дінінің бес парызының бірінші тірегі',
  },
  ru: {
    back: '← К пяти столпам',
    badge: '1-й столп ислама',
    title: 'Изучение шахады',
    goalLabel: 'Цель',
    goal: 'Изучить значение, смысл и способы исполнения шахады сердцем, языком и делами — первое условие быть мусульманином.',
    quoteTransl: '«Нет бога кроме Аллаха, Мухаммад ﷺ — Его посланник» — Шахада',
    sections: 'Разделы',
    footer: 'Шахада — первый столп пяти основ ислама',
  },
}

export function Tauhid() {
  const { lang } = useLang()
  const t = text[lang]
  const sec = sections[lang]

  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">
        {t.back}
      </Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-amber-600">🤍</span>
          <span className="text-amber-700 text-sm font-medium">{t.badge}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">{t.title}</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">{t.goalLabel}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{t.goal}</p>
        </div>
        <div className="mt-6 inline-block bg-amber-50 border border-amber-200 rounded-2xl px-6 py-3">
          <p className="font-arabic text-xl text-amber-800 leading-loose" dir="rtl">
            أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
          </p>
          <p className="text-amber-600 text-sm mt-1">{t.quoteTransl}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{t.sections}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sec.map((s) => (
            <Link key={s.to} to={s.to} className="card group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-sm`}>
                {s.icon}
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.number}</span>
                <h3 className="font-semibold text-gray-900 text-base mt-0.5 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>{t.footer}</p>
      </footer>
    </main>
  )
}
