import { useState } from 'react'
import { Link } from 'react-router-dom'
import { movements, movementsRu } from '../data/movements'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useLang } from '../contexts/LanguageContext'

export function Movements() {
  const { lang } = useLang()
  const data = lang === 'ru' ? movementsRu : movements
  const [active, setActive] = useState(0)
  const current = data[active]

  const t = {
    back: lang === 'ru' ? '← Главная' : '← Басты бет',
    title: lang === 'ru' ? 'Движения намаза' : '2-бөлім: Намаздың қимылдары',
    subtitle: lang === 'ru' ? `От такбира до салама — ${data.length} шагов` : `Тәкбірден саламға дейін — ${data.length} қадам`,
    stepLabel: lang === 'ru' ? 'Шаг' : 'Қадам',
    prev: lang === 'ru' ? '← Назад' : '← Алдыңғы',
    next: lang === 'ru' ? 'Далее →' : 'Келесі →',
    nextPage: lang === 'ru' ? 'К молитвам →' : 'Дұғаларға өту →',
    ariaStep: (i: number, name: string) => lang === 'ru' ? `Шаг ${i + 1}: ${name}` : `${i + 1}-қадам: ${name}`,
  }

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-sm text-primary-600 hover:underline">{t.back}</Link>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">{t.title}</h1>
        <p className="text-gray-600 mt-1">{t.subtitle}</p>
      </div>

      <ProgressBar current={active + 1} total={data.length} label={t.stepLabel} />

      <div className="card mt-6 text-center">
        <div className="flex justify-center mb-4">
          <img src={current.image} alt={current.name} className="h-52 w-auto object-contain rounded-xl" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">{current.name}</h2>
        <p className="text-gray-600 leading-relaxed">{current.description}</p>
        <div className="mt-4 bg-primary-50 border border-primary-100 rounded-xl p-4 text-left">
          <p className="text-sm text-primary-800 leading-relaxed">{current.detail}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 justify-center">
        {data.map((m, i) => (
          <button
            key={m.id}
            onClick={() => setActive(i)}
            className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${i === active ? 'bg-primary-700 text-white shadow' : i < active ? 'bg-primary-200 text-primary-700' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
            aria-label={t.ariaStep(i, m.name)}
            aria-current={i === active ? 'step' : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <button onClick={() => setActive((p) => Math.max(0, p - 1))} disabled={active === 0} className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed">
          {t.prev}
        </button>
        {active < data.length - 1 ? (
          <button onClick={() => setActive((p) => p + 1)} className="btn-primary">{t.next}</button>
        ) : (
          <Link to="/duas" className="btn-primary">{t.nextPage}</Link>
        )}
      </div>
    </main>
  )
}
