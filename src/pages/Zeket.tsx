import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const sections = {
  kk: [
    { to: '/zeket-why', number: '01', title: 'Зекетті не үшін береміз?', description: 'Зекет деген не, не үшін парыз, жүрекке және қоғамға пайдасы', icon: '💝', color: 'from-rose-400 to-pink-500' },
    { to: '/zeket-learn', number: '02', title: 'Зекет: негіздер', description: 'Нисаб, 2.5% мөлшері, кімге парыз, кімдерге беріледі және бермейді', icon: '📖', color: 'from-pink-400 to-rose-500' },
    { to: '/zeket-game', number: '03', title: 'Зекет шебері', description: '10 сұрақ, streak жүйесі, 3 өмір, XP және дәреже — орта деңгей', icon: '👑', color: 'from-amber-500 to-emerald-600' },
    { to: '/zeket-who-game', number: '04', title: 'Кімге береміз?', description: '8 адам — зекет беруге болады ма, жоқ па? ✅ / ❌ таңда', icon: '🎯', color: 'from-teal-500 to-cyan-600' },
    { to: '/zeket-basket-game', number: '05', title: 'Зекет себеті', description: 'Зекетке қатысты заттар мен адамдарды себетке сал!', icon: '🧺', color: 'from-lime-500 to-green-600' },
  ],
  ru: [
    { to: '/zeket-why', number: '01', title: 'Зачем отдаём закят?', description: 'Что такое закят, почему обязателен, польза для сердца и общества', icon: '💝', color: 'from-rose-400 to-pink-500' },
    { to: '/zeket-learn', number: '02', title: 'Закят: основы', description: 'Нисаб, 2,5%, кому обязателен, кому даётся и нет', icon: '📖', color: 'from-pink-400 to-rose-500' },
    { to: '/zeket-game', number: '03', title: 'Мастер закята', description: '10 вопросов, стрик, 3 жизни, XP и ранг — средний уровень', icon: '👑', color: 'from-amber-500 to-emerald-600' },
    { to: '/zeket-who-game', number: '04', title: 'Кому даём?', description: '8 человек — можно дать закят или нет? ✅ / ❌', icon: '🎯', color: 'from-teal-500 to-cyan-600' },
    { to: '/zeket-basket-game', number: '05', title: 'Корзина закята', description: 'Положи в корзину предметы и людей, связанных с закятом!', icon: '🧺', color: 'from-lime-500 to-green-600' },
  ],
}

const text = {
  kk: { back: '← Бес Парызға оралу', badge: 'Бес парыздың 4-ші тірегі', title: 'Зекет үйрену', goalLabel: 'Мақсат', goal: 'Зекеттің мөлшерін, кімге берілетінін және оның қоғамға берер пайдасын ұғыну — жомарт жүрек тәрбиелеудің жолы.', quoteTransl: '«Намаз оқыңдар және зекет берiңдер» — Бақара, 43', sections: 'Бөлімдер', footer: 'Зекет — Ислам дінінің бес парызының төртінші тірегі' },
  ru: { back: '← К пяти столпам', badge: '4-й столп ислама', title: 'Изучение закята', goalLabel: 'Цель', goal: 'Понять размер закята, кому он даётся и его пользу для общества — путь к воспитанию щедрого сердца.', quoteTransl: '«Совершайте молитву и выплачивайте закят» — Бакара, 43', sections: 'Разделы', footer: 'Закят — четвёртый столп пяти основ ислама' },
}

export function Zeket() {
  const { lang } = useLang()
  const t = text[lang]
  const sec = sections[lang]

  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-rose-600">💝</span>
          <span className="text-rose-700 text-sm font-medium">{t.badge}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">{t.title}</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">{t.goalLabel}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{t.goal}</p>
        </div>
        <div className="mt-6 inline-block bg-rose-50 border border-rose-200 rounded-2xl px-6 py-3">
          <p className="text-rose-800 font-arabic text-xl">وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ</p>
          <p className="text-rose-600 text-sm mt-1">{t.quoteTransl}</p>
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
