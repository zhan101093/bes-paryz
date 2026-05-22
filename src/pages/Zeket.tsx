import { Link } from 'react-router-dom'

const sections = [
  {
    to: '/zeket-why',
    number: '01',
    title: 'Зекетті не үшін береміз?',
    description: 'Зекет деген не, не үшін парыз, жүрекке және қоғамға пайдасы',
    icon: '💝',
    color: 'from-rose-400 to-pink-500',
  },
  {
    to: '/zeket-learn',
    number: '02',
    title: 'Зекет: негіздер',
    description: 'Нисаб, 2.5% мөлшері, кімге парыз, кімдерге беріледі және бермейді',
    icon: '📖',
    color: 'from-pink-400 to-rose-500',
  },
  {
    to: '/zeket-game',
    number: '03',
    title: 'Зекет шебері',
    description: '10 сұрақ, streak жүйесі, 3 өмір, XP және дәреже — орта деңгей',
    icon: '👑',
    color: 'from-amber-500 to-emerald-600',
  },
  {
    to: '/zeket-who-game',
    number: '04',
    title: 'Кімге береміз?',
    description: '8 адам — зекет беруге болады ма, жоқ па? ✅ / ❌ таңда',
    icon: '🎯',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    to: '/zeket-basket-game',
    number: '05',
    title: 'Зекет себеті',
    description: 'Зекетке қатысты заттар мен адамдарды себетке сал!',
    icon: '🧺',
    color: 'from-lime-500 to-green-600',
  },
]

export function Zeket() {
  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Бес Парызға оралу
      </Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-rose-600">💝</span>
          <span className="text-rose-700 text-sm font-medium">Бес парыздың 4-ші тірегі</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Зекет үйрену</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Мақсат</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Зекеттің мөлшерін, кімге берілетінін және оның қоғамға берер пайдасын ұғыну — жомарт
            жүрек тәрбиелеудің жолы.
          </p>
        </div>
        <div className="mt-6 inline-block bg-rose-50 border border-rose-200 rounded-2xl px-6 py-3">
          <p className="text-rose-800 font-arabic text-xl">وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ</p>
          <p className="text-rose-600 text-sm mt-1">«Намаз оқыңдар және зекет берiңдер» — Бақара, 43</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Бөлімдер</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((sec) => (
            <Link
              key={sec.to}
              to={sec.to}
              className="card group hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.color} flex items-center justify-center text-2xl shadow-sm`}
              >
                {sec.icon}
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {sec.number}
                </span>
                <h3 className="font-semibold text-gray-900 text-base mt-0.5 group-hover:text-primary-700 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{sec.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>Зекет — Ислам дінінің бес парызының төртінші тірегі</p>
      </footer>
    </main>
  )
}
