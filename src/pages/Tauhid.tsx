import { Link } from 'react-router-dom'

const sections = [
  {
    to: '/tauhid-why',
    number: '01',
    title: 'Шаhадаттың маңыздылығы',
    description: 'Шаhадат дегеніміз не, неге маңызды, хадис дәлелі',
    icon: '🕌',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    to: '/tauhid-learn',
    number: '02',
    title: 'Шаhадат — ғибадат ретінде',
    description: 'Толық мәтін, 4 түрі, өмірге әсері, екі бөлімі',
    icon: '📖',
    color: 'from-orange-400 to-amber-500',
  },
  {
    to: '/tauhid-quiz',
    number: '03',
    title: 'Рас па, жалған ба? — Викторина',
    description: 'Шаhадат туралы 10 сұрақ — білімді тексер',
    icon: '✅',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    to: '/tauhid-order-game',
    number: '04',
    title: 'Калима ретімен қою',
    description: 'Шаhадат сөздерін дұрыс ретімен орналастыр',
    icon: '🧩',
    color: 'from-rose-500 to-pink-600',
  },
]

export function Tauhid() {
  return (
    <main translate="no" className="max-w-5xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-700 mb-6 transition-colors"
      >
        ← Бес Парызға оралу
      </Link>

      <section className="text-center py-8 mb-8">
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 mb-4">
          <span className="text-amber-600">☝️</span>
          <span className="text-amber-700 text-sm font-medium">Бес парыздың 1-ші тірегі</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">Шаhадат үйрену</h1>
        <div className="mt-5 max-w-2xl mx-auto bg-white border border-primary-100 rounded-2xl px-6 py-4 text-left shadow-sm">
          <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-2">Мақсат</p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Шаhадаттың мағынасын, маңызын және оны жүрекпен, тілмен, ісімен орындаудың жолдарын үйрену — мұсылман болудың бірінші шарты.
          </p>
        </div>
        <div className="mt-6 inline-block bg-amber-50 border border-amber-200 rounded-2xl px-6 py-3">
          <p className="text-amber-800 font-arabic text-xl">أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ</p>
          <p className="text-amber-600 text-sm mt-1">«Аллаhтан басқа Тәңір жоқ екеніне куәлік беремін» — Шаhадат</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Бөлімдер</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
        <p>Шаhадат — Ислам дінінің бес парызының бірінші тірегі</p>
      </footer>
    </main>
  )
}
