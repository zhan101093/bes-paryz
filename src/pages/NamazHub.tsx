import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const sections = {
  kk: [
    { to: '/why', number: '01', title: 'Не үшін намаз оқу керек?', description: 'Намаздың рухани, дене және психологиялық пайдалары', icon: '🌙', color: 'from-emerald-500 to-teal-600' },
    { to: '/movements', number: '02', title: 'Намаздың қимылдары', description: 'Тәкбірден саламға дейін қадам бойынша нұсқаулық', icon: '🧍', color: 'from-teal-500 to-cyan-600' },
    { to: '/duas', number: '03', title: 'Намаздағы дұғалар', description: 'Арабша дұғалар, транслитерация және қазақша мағынасы', icon: '📖', color: 'from-cyan-500 to-blue-600' },
    { to: '/practice', number: '04', title: 'Практика', description: 'Интерактивті режимде намазды бірге оқып үйрен', icon: '✨', color: 'from-green-500 to-emerald-600' },
    { to: '/mistakes', number: '05', title: 'Жиі жіберілетін қателер', description: 'Ең кең тараған қателер мен оларды түзету жолдары', icon: '⚠️', color: 'from-amber-500 to-orange-600' },
    { to: '/game', number: '06', title: 'Ойын — Викторина', description: 'Білімді тексер! 10 сұрақ, таймер, ұпай жүйесі', icon: '🎮', color: 'from-purple-500 to-indigo-600' },
    { to: '/image-match-game', number: '07', title: 'Ойын — Сурет-атау', description: 'Намаз қимылдарының суреттерін атауларымен сәйкестендір', icon: '🖼️', color: 'from-sky-500 to-blue-600' },
    { to: '/order-game', number: '08', title: 'Ойын — Қимылдар реті', description: 'Намаздың 8 қимылын дұрыс ретке келтір', icon: '🃏', color: 'from-rose-500 to-pink-600' },
    { to: '/match-game', number: '09', title: 'Ойын — Жұптастыру', description: 'Қимылдарды дұғаларымен байланыстыр', icon: '🔗', color: 'from-violet-500 to-purple-600' },
  ],
  ru: [
    { to: '/why', number: '01', title: 'Зачем читать намаз?', description: 'Духовная, физическая и психологическая польза намаза', icon: '🌙', color: 'from-emerald-500 to-teal-600' },
    { to: '/movements', number: '02', title: 'Движения намаза', description: 'Пошаговое руководство от такбира до салама', icon: '🧍', color: 'from-teal-500 to-cyan-600' },
    { to: '/duas', number: '03', title: 'Молитвы в намазе', description: 'Арабские молитвы, транслитерация и перевод', icon: '📖', color: 'from-cyan-500 to-blue-600' },
    { to: '/practice', number: '04', title: 'Практика', description: 'Учись читать намаз в интерактивном режиме', icon: '✨', color: 'from-green-500 to-emerald-600' },
    { to: '/mistakes', number: '05', title: 'Частые ошибки', description: 'Самые распространённые ошибки и способы их исправления', icon: '⚠️', color: 'from-amber-500 to-orange-600' },
    { to: '/game', number: '06', title: 'Игра — Викторина', description: 'Проверь знания! 10 вопросов, таймер, очки', icon: '🎮', color: 'from-purple-500 to-indigo-600' },
    { to: '/image-match-game', number: '07', title: 'Игра — Картинки', description: 'Сопоставь картинки движений намаза с названиями', icon: '🖼️', color: 'from-sky-500 to-blue-600' },
    { to: '/order-game', number: '08', title: 'Игра — Порядок движений', description: 'Расставь 8 движений намаза в правильном порядке', icon: '🃏', color: 'from-rose-500 to-pink-600' },
    { to: '/match-game', number: '09', title: 'Игра — Сопоставление', description: 'Свяжи движения с молитвами', icon: '🔗', color: 'from-violet-500 to-purple-600' },
  ],
}

const text = {
  kk: {
    back: '← Бес Парызға оралу', badge: 'Бес парыздың 2-ші тірегі', title: 'Намаз үйрену',
    goalLabel: 'Мақсат',
    goal: 'Сіздерге намаздың маңызын түсіндіру, намаз қимылдары мен дұғаларын үйрету, практикалық түрде оқып көрсету және намазды күнделікті өмірдің ажырамас бөлігіне айналдыруға мотивация беру.',
    quoteTransl: '«Намазды орындаңдар» — Бақара, 43',
    sections: 'Бөлімдер', footer: 'Намаз — Ислам дінінің бес парызының бірі',
  },
  ru: {
    back: '← К пяти столпам', badge: '2-й столп ислама', title: 'Изучение намаза',
    goalLabel: 'Цель',
    goal: 'Объяснить важность намаза, обучить движениям и молитвам, показать на практике и мотивировать сделать намаз неотъемлемой частью повседневной жизни.',
    quoteTransl: '«Совершайте молитву» — Бакара, 43',
    sections: 'Разделы', footer: 'Намаз — один из пяти столпов ислама',
  },
}

export function NamazHub() {
  const { lang } = useLang()
  const t = text[lang]
  const sec = sections[lang]

  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link to="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors">{t.back}</Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-emerald-600">🕌</span>
          <span className="text-emerald-700 text-sm font-medium">{t.badge}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">{t.title}</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">{t.goalLabel}</p>
          <p className="text-gray-700 text-sm leading-relaxed">{t.goal}</p>
        </div>
        <div className="mt-6 inline-block bg-primary-50 border border-primary-200 rounded-2xl px-6 py-3">
          <p className="text-primary-800 font-arabic text-xl">وَأَقِيمُوا الصَّلَاةَ</p>
          <p className="text-primary-600 text-sm mt-1">{t.quoteTransl}</p>
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
