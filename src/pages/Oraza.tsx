import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const sections = {
  kk: [
    { to: '/oraza-why', number: '01', title: 'Ораза не үшін ұсталады?', description: 'Оразаның рухани мәні, физикалық пайдасы және себептері', icon: '🌙', color: 'from-violet-500 to-purple-600' },
    { to: '/oraza-learn', number: '02', title: 'Ораза ережелері', description: 'Күндік тәртіп, не бұзады, не бұзбайды — толық нұсқаулық', icon: '📖', color: 'from-purple-400 to-violet-500' },
    { to: '/oraza-order-game', number: '03', title: 'Ораза себеті', description: 'Оразаны бұзбайтын нәрселерді себетке жина — 18 карточка', icon: '🧺', color: 'from-indigo-500 to-violet-600' },
    { to: '/oraza-match-game', number: '04', title: 'Оразаны не бұзады?', description: 'Бұзады ма, бұзбайды ма? — 15 сынақ', icon: '🔍', color: 'from-purple-500 to-indigo-600' },
    { to: '/oraza-scenario-game', number: '05', title: 'Оразадағы ситуациялар', description: 'Ситуацияда дұрыс шешім қабылда — 6 сценарий', icon: '🎭', color: 'from-violet-600 to-purple-700' },
  ],
  ru: [
    { to: '/oraza-why', number: '01', title: 'Зачем соблюдать пост?', description: 'Духовный смысл, физическая польза и причины поста', icon: '🌙', color: 'from-violet-500 to-purple-600' },
    { to: '/oraza-learn', number: '02', title: 'Правила поста', description: 'Распорядок дня, что нарушает, что не нарушает — полное руководство', icon: '📖', color: 'from-purple-400 to-violet-500' },
    { to: '/oraza-order-game', number: '03', title: 'Корзина поста', description: 'Собери вещи, не нарушающие пост — 18 карточек', icon: '🧺', color: 'from-indigo-500 to-violet-600' },
    { to: '/oraza-match-game', number: '04', title: 'Что нарушает пост?', description: 'Нарушает или нет? — 15 испытаний', icon: '🔍', color: 'from-purple-500 to-indigo-600' },
    { to: '/oraza-scenario-game', number: '05', title: 'Ситуации во время поста', description: 'Принимай правильные решения — 6 сценариев', icon: '🎭', color: 'from-violet-600 to-purple-700' },
  ],
}

const text = {
  kk: { back: '← Бес Парызға оралу', badge: 'Бес парыздың 3-ші тірегі', title: 'Ораза үйрену', goalLabel: 'Мақсат', goal: 'Рамазан айының қасиетін, оразаның рухани маңызын ұғыну және ораза ұстаудың ережелерін — сабыр мен тазалықтың жолын үйрену.', quoteTransl: '«Ораза ұстау сіздерге парыз етілді» — Бақара, 183', sections: 'Бөлімдер', footer: 'Ораза — Ислам дінінің бес парызының үшінші тірегі' },
  ru: { back: '← К пяти столпам', badge: '3-й столп ислама', title: 'Изучение поста', goalLabel: 'Цель', goal: 'Понять священность месяца Рамадан, духовный смысл поста и его правила — путь терпения и чистоты.', quoteTransl: '«Пост предписан вам» — Бакара, 183', sections: 'Разделы', footer: 'Пост — третий столп пяти основ ислама' },
}

export function Oraza() {
  const { lang } = useLang()
  const t = text[lang]
  const sec = sections[lang]

  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-violet-600">🌙</span>
          <span className="text-violet-700 text-sm font-medium">{t.badge}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">{t.title}</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">{t.goalLabel}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{t.goal}</p>
        </div>
        <div className="mt-6 inline-block bg-violet-50 border border-violet-200 rounded-2xl px-6 py-3">
          <p className="text-violet-800 font-arabic text-xl">يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ</p>
          <p className="text-violet-600 text-sm mt-1">{t.quoteTransl}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">{t.sections}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sec.map((s) => (
            <Link key={s.to} to={s.to} className="card group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-sm`}>{s.icon}</div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{s.number}</span>
                <h3 className="font-semibold text-gray-900 text-base mt-0.5 group-hover:text-primary-700 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400"><p>{t.footer}</p></footer>
    </main>
  )
}
