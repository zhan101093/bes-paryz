import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useLang } from '../../contexts/LanguageContext'

const navLinks = {
  kk: [
    { to: '/tauhid', label: 'Шаhадат', icon: '🤍' },
    { to: '/namaz', label: 'Намаз', icon: '🕌' },
    { to: '/oraza', label: 'Ораза', icon: '🌙' },
    { to: '/zeket', label: 'Зекет', icon: '💝' },
    { to: '/kazhylyk', label: 'Қажылық', icon: '🕋' },
  ],
  ru: [
    { to: '/tauhid', label: 'Шахада', icon: '🤍' },
    { to: '/namaz', label: 'Намаз', icon: '🕌' },
    { to: '/oraza', label: 'Пост', icon: '🌙' },
    { to: '/zeket', label: 'Закят', icon: '💝' },
    { to: '/kazhylyk', label: 'Хадж', icon: '🕋' },
  ],
}

function LangSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex items-center gap-0.5 bg-primary-700 rounded-lg p-0.5">
      <button
        onClick={() => setLang('kk')}
        className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
          lang === 'kk' ? 'bg-white text-primary-800' : 'text-primary-200 hover:text-white'
        }`}
      >
        ҚАЗ
      </button>
      <button
        onClick={() => setLang('ru')}
        className={`px-2 py-1 rounded text-xs font-bold transition-colors ${
          lang === 'ru' ? 'bg-white text-primary-800' : 'text-primary-200 hover:text-white'
        }`}
      >
        РУС
      </button>
    </div>
  )
}

export function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const { lang } = useLang()
  const links = navLinks[lang]
  const logoText = lang === 'kk' ? 'Бес Парыз' : 'Пять столпов'
  const homeLabel = lang === 'kk' ? 'Басты бет' : 'Главная'
  const menuAriaLabel = lang === 'kk' ? 'Мәзірді ашу' : 'Открыть меню'

  return (
    <nav className="bg-primary-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="text-gold-400 text-xl">☪</span>
            <span>{logoText}</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  location.pathname === link.to
                    ? 'bg-primary-600 text-white'
                    : 'text-primary-100 hover:bg-primary-700'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="ml-2">
              <LangSwitcher />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LangSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-primary-700"
              onClick={() => setOpen(!open)}
              aria-label={menuAriaLabel}
            >
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white mb-1" />
              <div className="w-5 h-0.5 bg-white" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-3 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'bg-primary-600 text-white'
                  : 'text-primary-100 hover:bg-primary-700'
              }`}
            >
              🏠 {homeLabel}
            </Link>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === link.to
                    ? 'bg-primary-600 text-white'
                    : 'text-primary-100 hover:bg-primary-700'
                }`}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
