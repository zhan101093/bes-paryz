import { useState } from 'react'
import { Link } from 'react-router-dom'
import { movements, movementsRu } from '../data/movements'
import { duas } from '../data/duas'
import { ProgressBar } from '../components/ui/ProgressBar'
import { ArabicAudioButton } from '../components/ui/ArabicAudioButton'
import { useLang } from '../contexts/LanguageContext'

const MOVEMENT_DUA_IDS = [1, 2, 5, 6, 7, 8, 9, 11]

export function Practice() {
  const { lang } = useLang()
  const movementData = lang === 'ru' ? movementsRu : movements
  const steps = movementData.map((m, i) => ({
    movement: m,
    dua: duas.find((d) => d.id === MOVEMENT_DUA_IDS[i]) ?? null,
  }))

  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const current = steps[step]

  const t = {
    back: lang === 'ru' ? '← Главная' : '← Басты бет',
    title: lang === 'ru' ? 'Практика намаза' : '4-бөлім: Практика',
    subtitle: lang === 'ru' ? 'Будем читать намаз шаг за шагом' : 'Намазды қадам бойынша бірге оқыйық',
    stepLabel: lang === 'ru' ? 'Шаг' : 'Қадам',
    whatToDo: lang === 'ru' ? 'Что делать' : 'Не істеу керек',
    whatToRead: lang === 'ru' ? 'Что читать' : 'Не оқу керек',
    prev: lang === 'ru' ? '← Назад' : '← Алдыңғы',
    next: lang === 'ru' ? 'Далее →' : 'Келесі қадам →',
    finish: lang === 'ru' ? 'Завершить ✓' : 'Аяқтау ✓',
    doneTitle: lang === 'ru' ? 'МашаАллах!' : 'МашаАллаh!',
    doneText: lang === 'ru' ? 'Намаз завершён. Да примет Аллах!' : 'Намазды аяқтадыңыз. Аллаh қабыл етсін!',
    doneQuote: lang === 'ru' ? '«Господи наш, прими от нас» — Бакара, 127' : '«Раббымыз, бізден қабыл ет» — Бақара, 127',
    restart: lang === 'ru' ? 'Начать заново' : 'Қайта бастау',
    mistakes: lang === 'ru' ? 'Читать об ошибках →' : 'Қателерді оқу →',
    repeats: (n: number) => lang === 'ru' ? `${n} раза` : `${n} рет`,
    stepNum: (n: number) => lang === 'ru' ? `Шаг ${n}` : `${n}-қадам`,
  }

  function handleNext() {
    if (step < steps.length - 1) setStep((s) => s + 1)
    else setDone(true)
  }

  function handleRestart() {
    setStep(0)
    setDone(false)
  }

  if (done) {
    return (
      <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
        <div className="card text-center py-12">
          <div className="text-6xl mb-4">🤲</div>
          <h2 className="text-2xl font-bold text-primary-900 mb-2">{t.doneTitle}</h2>
          <p className="text-gray-600 mb-6">{t.doneText}</p>
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6 text-left">
            <p className="font-arabic text-xl text-primary-800 text-center mb-2">رَبَّنَا تَقَبَّلْ مِنَّا</p>
            <p className="text-sm text-center text-primary-600">{t.doneQuote}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={handleRestart} className="btn-primary">{t.restart}</button>
            <Link to="/mistakes" className="btn-secondary">{t.mistakes}</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-sm text-primary-600 hover:underline">{t.back}</Link>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">{t.title}</h1>
        <p className="text-gray-600 mt-1">{t.subtitle}</p>
      </div>

      <ProgressBar current={step + 1} total={steps.length} label={t.stepLabel} />

      <div className="card mt-6">
        <div className="text-center mb-4">
          <div className="text-6xl mb-3">{current.movement.icon}</div>
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.stepNum(step + 1)}</span>
          <h2 className="text-xl font-bold text-gray-900 mt-1">{current.movement.name}</h2>
          <p className="text-primary-700 mt-1 text-center" style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: '1.6rem', lineHeight: '2', direction: 'rtl' }}>
            {current.movement.nameArabic}
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-1">{t.whatToDo}</p>
          <p className="text-gray-800 text-sm leading-relaxed">{current.movement.detail}</p>
        </div>

        {current.dua && (
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{t.whatToRead}</p>
              <div className="flex items-center gap-2">
                {current.dua.repeats && (
                  <span className="text-xs font-semibold text-primary-600 bg-white border border-primary-200 rounded-full px-2 py-0.5">
                    {t.repeats(current.dua.repeats)}
                  </span>
                )}
                <ArabicAudioButton text={current.dua.arabic} />
              </div>
            </div>
            <p className="text-primary-900 text-center mb-2" style={{ fontFamily: "'Noto Naskh Arabic', serif", fontSize: '1.45rem', lineHeight: '2.1', direction: 'rtl' }}>
              {current.dua.arabic}
            </p>
            <p className="text-sm text-gray-600 italic text-center">{current.dua.transliteration}</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between gap-3">
        <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn-secondary disabled:opacity-40 disabled:cursor-not-allowed">
          {t.prev}
        </button>
        <button onClick={handleNext} className="btn-primary">
          {step < steps.length - 1 ? t.next : t.finish}
        </button>
      </div>
    </main>
  )
}
