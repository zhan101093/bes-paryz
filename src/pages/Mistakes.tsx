import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mistakes, mistakesRu } from '../data/mistakes'
import { useLang } from '../contexts/LanguageContext'

export function Mistakes() {
  const { lang } = useLang()
  const data = lang === 'ru' ? mistakesRu : mistakes
  const [expanded, setExpanded] = useState<number | null>(null)

  const t = {
    back: lang === 'ru' ? '← Главная' : '← Басты бет',
    title: lang === 'ru' ? 'Частые ошибки в намазе' : '5-бөлім: Жиі жіберілетін қателер',
    subtitle: lang === 'ru' ? `${data.length} частых ошибок и способы их исправления` : `Намаз оқушылардың жиі жіберетін ${data.length} қатесі және оны түзету жолы`,
    wrongLabel: lang === 'ru' ? 'Ошибка' : 'Қате',
    correctLabel: lang === 'ru' ? 'Правильно' : 'Дұрысы',
    prev: lang === 'ru' ? '← Практика' : '← Практика',
    next: lang === 'ru' ? 'К игре →' : 'Ойынға өту →',
  }

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-sm text-primary-600 hover:underline">{t.back}</Link>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">{t.title}</h1>
        <p className="text-gray-600 mt-1">{t.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        {data.map((mistake) => {
          const isOpen = expanded === mistake.id
          return (
            <div key={mistake.id} className="card p-0 overflow-hidden border border-gray-100">
              <button
                onClick={() => setExpanded(isOpen ? null : mistake.id)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">⚠️</span>
                  <span className="font-medium text-gray-900 text-sm">{mistake.title}</span>
                </div>
                <span className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {isOpen && (
                <div className="border-t border-gray-100 px-4 pb-4 pt-3 flex flex-col gap-3">
                  <div className="flex gap-3 bg-red-50 border border-red-100 rounded-xl p-3">
                    <span className="text-xl flex-shrink-0">❌</span>
                    <div>
                      <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-0.5">{t.wrongLabel}</p>
                      <p className="text-sm text-gray-700">{mistake.wrong}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 bg-green-50 border border-green-100 rounded-xl p-3">
                    <span className="text-xl flex-shrink-0">✅</span>
                    <div>
                      <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-0.5">{t.correctLabel}</p>
                      <p className="text-sm text-gray-700">{mistake.correct}</p>
                    </div>
                  </div>
                  <div className="flex gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3">
                    <span className="text-xl flex-shrink-0">💡</span>
                    <p className="text-sm text-gray-700">{mistake.tip}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-between">
        <Link to="/practice" className="btn-secondary">{t.prev}</Link>
        <Link to="/game" className="btn-primary">{t.next}</Link>
      </div>
    </main>
  )
}
