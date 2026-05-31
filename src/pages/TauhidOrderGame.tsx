import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const orderKk = [
  { id: 1, arabic: 'أَشْهَدُ', trans: 'Ашhаду', hint: 'Куәлік беремін' },
  { id: 2, arabic: 'أَن لَّا إِلَهَ', trans: 'Ан лā иляhа', hint: 'тәңір жоқ екеніне' },
  { id: 3, arabic: 'إِلَّا اللَّهُ', trans: 'Илля Аллāhу', hint: 'Аллаhтан басқа' },
  { id: 4, arabic: 'وَأَشْهَدُ', trans: 'Уа ашhаду', hint: 'және куәлік беремін' },
  { id: 5, arabic: 'أَنَّ مُحَمَّدًا', trans: 'Анна Мухаммадан', hint: 'Мұхаммад' },
  { id: 6, arabic: 'رَسُولُ اللَّهِ', trans: 'Расулуллāh', hint: 'Аллаhтың елшісі' },
]

const orderRu = [
  { id: 1, arabic: 'أَشْهَدُ', trans: 'Ашхаду', hint: 'Я свидетельствую' },
  { id: 2, arabic: 'أَن لَّا إِلَهَ', trans: 'Ан лā иляха', hint: 'что нет бога' },
  { id: 3, arabic: 'إِلَّا اللَّهُ', trans: 'Илля Аллāху', hint: 'кроме Аллаха' },
  { id: 4, arabic: 'وَأَشْهَدُ', trans: 'Уа ашхаду', hint: 'и свидетельствую' },
  { id: 5, arabic: 'أَنَّ مُحَمَّدًا', trans: 'Анна Мухаммадан', hint: 'что Мухаммад' },
  { id: 6, arabic: 'رَسُولُ اللَّهِ', trans: 'Расулуллāх', hint: 'посланник Аллаха' },
]

type Step = (typeof orderKk)[0]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function TauhidOrderGame() {
  const { lang } = useLang()
  const correctOrder = lang === 'ru' ? orderRu : orderKk
  const [pool, setPool] = useState<Step[]>(() => shuffle(lang === 'ru' ? orderRu : orderKk))
  const [sequence, setSequence] = useState<Step[]>([])
  const [checked, setChecked] = useState(false)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  function addToSequence(item: Step) {
    if (checked) return
    setPool((p) => p.filter((x) => x.id !== item.id))
    setSequence((s) => [...s, item])
  }

  function removeFromSequence(item: Step) {
    if (checked) return
    setSequence((s) => s.filter((x) => x.id !== item.id))
    setPool((p) => [...p, item])
  }

  function check() {
    setChecked(true)
    setTimeout(() => setGameState('result'), 1800)
  }

  function restart() {
    setPool(shuffle(correctOrder))
    setSequence([])
    setChecked(false)
    setGameState('playing')
  }

  const ui = {
    back: lang === 'ru' ? '← Шахада' : '← Шаhадат',
    title: lang === 'ru' ? '🧩 Расставь каляму по порядку' : '🧩 Калима ретімен қой',
    subtitle: lang === 'ru' ? 'Расставь слова шахады в правильном порядке' : 'Шаhадат сөздерін дұрыс ретімен орналастыр',
    yourOrder: lang === 'ru' ? 'Твой порядок' : 'Сенің реттілігің',
    pickCard: lang === 'ru' ? 'Выбери карточку снизу' : 'Төменнен карточка тап',
    check: lang === 'ru' ? '✅ ПРОВЕРИТЬ' : '✅ ТЕКСЕРУ',
    replay: lang === 'ru' ? '🔁 ИГРАТЬ СНОВА' : '🔁 ҚАЙТА ОЙНАУ',
    home: lang === 'ru' ? '🏠 НА ГЛАВНУЮ' : '🏠 БАСТЫ БЕТКЕ',
    result: lang === 'ru' ? 'РЕЗУЛЬТАТ' : 'НӘТИЖЕ',
    wordsCorrect: lang === 'ru' ? 'слов расставлено правильно' : 'сөз дұрыс орналастырылды',
  }

  const correctCount = checked
    ? sequence.filter((item, i) => item.id === i + 1).length
    : 0

  if (gameState === 'result') {
    const allCorrect = correctCount === correctOrder.length
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">{allCorrect ? '🏆' : '⭐'}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{ui.result}</h2>
            <p className="text-5xl font-bold text-amber-600 mb-2">
              {correctCount}/{correctOrder.length}
            </p>
            <p className="text-gray-400 text-sm mb-5">{ui.wordsCorrect}</p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-5 text-center">
              <p className="font-arabic text-base text-amber-800 leading-loose" dir="rtl">
                أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
              </p>
            </div>

            <div className="space-y-2 mb-6 text-left">
              {correctOrder.map((step, i) => {
                const userStep = sequence[i]
                const ok = userStep?.id === step.id
                return (
                  <div
                    key={step.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 ${
                      ok ? 'bg-amber-50 border-amber-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1 text-left">
                      <p className="font-arabic text-base text-gray-800" dir="rtl">
                        {step.arabic}
                      </p>
                      <p className="text-xs text-gray-500 italic">{step.trans}</p>
                      <p className="text-xs text-amber-700">{step.hint}</p>
                    </div>
                    <span>{ok ? '✅' : '❌'}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                {ui.replay}
              </button>
              <Link
                to="/tauhid"
                className="w-full block bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl text-center hover:bg-gray-100 transition-colors"
              >
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/tauhid"
            className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
          >
            {ui.back}
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {sequence.length}/{correctOrder.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-amber-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{ui.title}</h1>
          <p className="text-sm text-gray-500">{ui.subtitle}</p>
        </div>

        {/* Sequence area */}
        <div className="bg-white border-2 border-dashed border-amber-300 rounded-2xl p-4 mb-4 min-h-20">
          <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider text-center">
            {ui.yourOrder}
          </p>
          {sequence.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-1">{ui.pickCard}</p>
          ) : (
            <div className="flex flex-col gap-2">
              {sequence.map((item, i) => {
                const isCorrect = checked && item.id === i + 1
                const isWrong = checked && item.id !== i + 1
                return (
                  <button
                    key={item.id}
                    onClick={() => removeFromSequence(item)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border-2 transition-all ${
                      isCorrect
                        ? 'bg-amber-50 border-amber-400 text-amber-800'
                        : isWrong
                        ? 'bg-red-50 border-red-400 text-red-800'
                        : 'bg-amber-50 border-amber-200 text-gray-800 hover:border-amber-400'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <div className="flex-1 text-left">
                      <p className="font-arabic text-base leading-tight" dir="rtl">
                        {item.arabic}
                      </p>
                      <p className="text-xs text-gray-500 italic">{item.trans}</p>
                    </div>
                    {isCorrect && <span>✅</span>}
                    {isWrong && <span>❌</span>}
                    {!checked && <span className="text-gray-400 text-xs">✕</span>}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Pool */}
        <div className="flex flex-wrap gap-2 mb-5 justify-center">
          {pool.map((item) => (
            <button
              key={item.id}
              onClick={() => addToSequence(item)}
              className="flex flex-col items-center gap-0.5 bg-white border-2 border-amber-200 rounded-xl px-3 py-2 hover:border-amber-500 hover:bg-amber-50 transition-all hover:scale-105 active:scale-95"
            >
              <span className="font-arabic text-lg text-gray-800" dir="rtl">
                {item.arabic}
              </span>
              <span className="text-xs text-gray-500 italic">{item.trans}</span>
            </button>
          ))}
        </div>

        {sequence.length === correctOrder.length && !checked && (
          <button
            onClick={check}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            {ui.check}
          </button>
        )}

        <div className="h-8" />
      </div>
    </main>
  )
}
