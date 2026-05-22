import { Link } from 'react-router-dom'

const pillars = [
  {
    to: '/tauhid',
    arabic: 'الشَّهَادَة',
    title: 'Шаhадат',
    subtitle: 'Аллаhтың бірлігіне куәлік беру',
    icon: '☝️',
    gradient: 'from-amber-400 to-yellow-500',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    textColor: 'text-amber-900',
    btnBg: 'bg-amber-500 hover:bg-amber-600',
  },
  {
    to: '/namaz',
    arabic: 'الصلاة',
    title: 'Намаз',
    subtitle: 'Күніне 5 рет намаз оқу',
    icon: '🕌',
    gradient: 'from-emerald-500 to-green-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    textColor: 'text-emerald-900',
    btnBg: 'bg-emerald-600 hover:bg-emerald-700',
  },
  {
    to: '/oraza',
    arabic: 'الصوم',
    title: 'Ораза',
    subtitle: 'Рамазан айындағы ораза',
    icon: '🌙',
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-300',
    textColor: 'text-violet-900',
    btnBg: 'bg-violet-600 hover:bg-violet-700',
  },
  {
    to: '/zeket',
    arabic: 'الزكاة',
    title: 'Зекет',
    subtitle: 'Кедейлерге берілетін қайыр',
    icon: '💝',
    gradient: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    textColor: 'text-rose-900',
    btnBg: 'bg-rose-500 hover:bg-rose-600',
  },
  {
    to: '/kazhylyk',
    arabic: 'الحج',
    title: 'Қажылық',
    subtitle: 'Меккеге қасиетті сапар',
    icon: '🕋',
    gradient: 'from-teal-500 to-cyan-600',
    bg: 'bg-teal-50',
    border: 'border-teal-300',
    textColor: 'text-teal-900',
    btnBg: 'bg-teal-600 hover:bg-teal-700',
  },
]

export function Home() {
  return (
    <main translate="no" className="max-w-4xl mx-auto px-4 py-8">
      <section className="text-center py-8 mb-6">
        <p className="text-primary-600 font-semibold text-xs uppercase tracking-widest mb-3">
          Ислам дінінің негізі
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-4 tracking-tight">
          БЕС ПАРЫЗ
        </h1>
        <p className="text-gray-500 max-w-sm mx-auto text-sm leading-relaxed">
          Мұсылман өмірінің бес тірегін бірге үйренейік
        </p>
      </section>

      <div className="bg-gradient-to-br from-primary-800 to-primary-700 rounded-2xl p-6 mb-8 text-center shadow-lg">
        <p className="text-xs text-primary-300 uppercase font-semibold tracking-wider mb-3">
          Пайғамбарымыздың хадисі
        </p>
        <p className="font-arabic text-2xl text-white mb-4">
          بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ
        </p>
        <p className="text-primary-100 text-sm leading-relaxed max-w-xl mx-auto">
          «Ислам бес нәрсенің үстіне орнатылды: Аллаһтан басқа Тәңір жоқ және Мұхаммад — Оның елшісі деп куәлік беру, намаз оқу, зекет беру, қажылыққа бару және Рамазан ораза тұту»
        </p>
        <p className="text-primary-400 text-xs mt-3">— Бұхари, Муслим риуаяты</p>
      </div>

      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
        <img
          src="/images/basty-bet.jpg"
          alt="Бес парыз"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      <h2 className="text-center text-gray-500 text-sm font-medium mb-5">
        Тақырыпты таңда және үйрен 👇
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        {pillars.map((p, i) => (
          <Link
            key={p.to}
            to={p.to}
            className={`rounded-2xl border-2 ${p.border} ${p.bg} p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group ${
              i === 4 ? 'sm:col-span-2 xl:col-span-1' : ''
            }`}
          >
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-3xl shadow`}
            >
              {p.icon}
            </div>
            <div className="flex-1">
              <p className={`font-arabic text-base ${p.textColor} opacity-60`}>{p.arabic}</p>
              <h3 className={`font-bold text-2xl ${p.textColor} mt-0.5`}>{p.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{p.subtitle}</p>
            </div>
            <span
              className={`text-white text-sm font-semibold ${p.btnBg} rounded-xl px-3 py-1.5 text-center transition-colors`}
            >
              Үйрену →
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-gray-400">
        <p>8–15 жас аралығындағы қыздар үшін дін негіздері</p>
      </footer>
    </main>
  )
}
