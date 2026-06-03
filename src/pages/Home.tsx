import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const pillars = {
  kk: [
    { to: '/tauhid', arabic: 'الشَّهَادَة', title: 'Шаhадат', subtitle: 'Аллаhтың бірлігіне куәлік беру', icon: '🤍', gradient: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50', border: 'border-amber-300', textColor: 'text-amber-900', btnBg: 'bg-amber-500 hover:bg-amber-600' },
    { to: '/namaz', arabic: 'الصلاة', title: 'Намаз', subtitle: 'Күніне 5 рет намаз оқу', icon: '🕌', gradient: 'from-emerald-500 to-green-600', bg: 'bg-emerald-50', border: 'border-emerald-300', textColor: 'text-emerald-900', btnBg: 'bg-emerald-600 hover:bg-emerald-700' },
    { to: '/oraza', arabic: 'الصوم', title: 'Ораза', subtitle: 'Рамазан айындағы ораза', icon: '🌙', gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-300', textColor: 'text-violet-900', btnBg: 'bg-violet-600 hover:bg-violet-700' },
    { to: '/zeket', arabic: 'الزكاة', title: 'Зекет', subtitle: 'Кедейлерге берілетін қайыр', icon: '💝', gradient: 'from-rose-400 to-pink-500', bg: 'bg-rose-50', border: 'border-rose-300', textColor: 'text-rose-900', btnBg: 'bg-rose-500 hover:bg-rose-600' },
    { to: '/kazhylyk', arabic: 'الحج', title: 'Қажылық', subtitle: 'Меккеге қасиетті сапар', icon: '🕋', gradient: 'from-teal-500 to-cyan-600', bg: 'bg-teal-50', border: 'border-teal-300', textColor: 'text-teal-900', btnBg: 'bg-teal-600 hover:bg-teal-700' },
  ],
  ru: [
    { to: '/tauhid', arabic: 'الشَّهَادَة', title: 'Шахада', subtitle: 'Свидетельство единства Аллаха', icon: '🤍', gradient: 'from-amber-400 to-yellow-500', bg: 'bg-amber-50', border: 'border-amber-300', textColor: 'text-amber-900', btnBg: 'bg-amber-500 hover:bg-amber-600' },
    { to: '/namaz', arabic: 'الصلاة', title: 'Намаз', subtitle: 'Пятикратная молитва в день', icon: '🕌', gradient: 'from-emerald-500 to-green-600', bg: 'bg-emerald-50', border: 'border-emerald-300', textColor: 'text-emerald-900', btnBg: 'bg-emerald-600 hover:bg-emerald-700' },
    { to: '/oraza', arabic: 'الصوم', title: 'Пост', subtitle: 'Пост в месяц Рамадан', icon: '🌙', gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-300', textColor: 'text-violet-900', btnBg: 'bg-violet-600 hover:bg-violet-700' },
    { to: '/zeket', arabic: 'الزكاة', title: 'Закят', subtitle: 'Пожертвование бедным', icon: '💝', gradient: 'from-rose-400 to-pink-500', bg: 'bg-rose-50', border: 'border-rose-300', textColor: 'text-rose-900', btnBg: 'bg-rose-500 hover:bg-rose-600' },
    { to: '/kazhylyk', arabic: 'الحج', title: 'Хадж', subtitle: 'Священное паломничество в Мекку', icon: '🕋', gradient: 'from-teal-500 to-cyan-600', bg: 'bg-teal-50', border: 'border-teal-300', textColor: 'text-teal-900', btnBg: 'bg-teal-600 hover:bg-teal-700' },
  ],
}

const text = {
  kk: {
    tag: 'Ислам дінінің негізі',
    title: 'БЕС ПАРЫЗ',
    desc: 'Мұсылман өмірінің бес тірегін бірге үйренейік',
    hadithTag: 'Пайғамбарымыздың хадисі',
    hadithText: '«Ислам бес нәрсенің үстіне орнатылды: Аллаhтан басқа Тәңір жоқ және Мұхаммад — Оның елшісі деп куәлік беру, намаз оқу, зекет беру, қажылыққа бару және Рамазан ораза тұту»',
    hadithSource: '— Бұхари, Муслим риуаяты',
    chooseText: 'Тақырыпты таңда және үйрен 👇',
    btnText: 'Үйрену →',
    footer: '8–15 жас аралығындағы қыздар үшін дін негіздері',
  },
  ru: {
    tag: 'Основа ислама',
    title: 'ПЯТЬ СТОЛПОВ',
    desc: 'Давайте вместе изучим пять столпов мусульманской жизни',
    hadithTag: 'Хадис Пророка ﷺ',
    hadithText: '«Ислам построен на пяти основах: свидетельство о том, что нет бога кроме Аллаха и что Мухаммад — Его посланник, совершение молитвы, выплата закята, хадж и пост в Рамадан»',
    hadithSource: '— Хадис из Бухари и Муслима',
    chooseText: 'Выбери тему и учись 👇',
    btnText: 'Учиться →',
    footer: 'Основы религии для девочек 8–15 лет',
  },
}

export function Home() {
  const { lang } = useLang()
  const t = text[lang]
  const p = pillars[lang]

  return (
    <main translate="no" className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center py-8 mb-6">
        <p className="text-primary-600 font-semibold text-xs uppercase tracking-widest mb-3">
          {t.tag}
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">{t.desc}</p>
      </section>

      <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-6 mb-8 text-center shadow-lg">
        <p className="text-xs text-primary-300 uppercase font-semibold tracking-wider mb-3">
          {t.hadithTag}
        </p>
        <p className="font-arabic text-2xl text-white mb-4">بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ</p>
        <p className="text-primary-100 text-sm leading-relaxed max-w-xl mx-auto">{t.hadithText}</p>
        <p className="text-primary-400 text-xs mt-3">{t.hadithSource}</p>
      </div>

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg relative">
        <img src="/images/basty-bet.jpg" alt="Бес парыз" className="w-full object-cover" loading="lazy" />
        {lang === 'ru' && (
          <div
            className="absolute inset-x-0 flex items-center justify-center px-6"
            style={{
              top: '4.5%',
              height: '13%',
              background: 'linear-gradient(to bottom, rgba(208,180,135,0.97) 0%, rgba(195,165,115,0.95) 100%)',
            }}
          >
            <p
              className="text-center text-stone-800 font-semibold tracking-wide text-xs sm:text-sm md:text-base lg:text-lg"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Ислам воздвигнут на пяти основах
            </p>
          </div>
        )}
      </div>

      <h2 className="text-center text-gray-500 text-sm font-medium mb-5">{t.chooseText}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {p.map((pillar, i) => (
          <Link
            key={pillar.to}
            to={pillar.to}
            className={`rounded-2xl border-2 ${pillar.border} ${pillar.bg} p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group ${i === 4 ? 'sm:col-span-2 xl:col-span-1' : ''}`}
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center text-3xl shadow`}>
              {pillar.icon}
            </div>
            <div className="flex-1">
              <p className={`font-arabic text-base ${pillar.textColor} opacity-60`}>{pillar.arabic}</p>
              <h3 className={`font-bold text-2xl ${pillar.textColor} mt-0.5`}>{pillar.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{pillar.subtitle}</p>
            </div>
            <span className={`text-white text-sm font-semibold ${pillar.btnBg} rounded-xl px-3 py-1.5 text-center transition-colors`}>
              {t.btnText}
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-gray-400">
        <p>{t.footer}</p>
      </footer>
    </main>
  )
}
