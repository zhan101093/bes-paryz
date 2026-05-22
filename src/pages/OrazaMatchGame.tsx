import { useState } from 'react'
import { Link } from 'react-router-dom'

interface FastingItem {
  id: number
  text: string
  icon: string
  breaks: boolean
  hint?: string
}

const items: FastingItem[] = [
  { id: 1, text: 'Әдейілеп тамақ жеу', icon: '🍔', breaks: true },
  { id: 2, text: 'Ұмытып су ішу', icon: '💧', breaks: false },
  { id: 3, text: 'Түкірік жұту', icon: '💦', breaks: false },
  { id: 4, text: 'Мисвак қолдану', icon: '🪥', breaks: false },
  { id: 5, text: 'Емдік күш беретін ине', icon: '💉', breaks: true },
  { id: 6, text: 'Ауызды шаю (жұтып қоймаса)', icon: '🫧', breaks: false },
  { id: 7, text: 'Шылым шегу', icon: '🚬', breaks: true },
  { id: 8, text: 'Тісті жұлдыру (қанды жұтпаса)', icon: '🦷', breaks: false },
  { id: 9, text: 'Душқа түсу', icon: '🚿', breaks: false },
  { id: 10, text: 'Әдейілеп құсу', icon: '🤢', breaks: true },
  { id: 11, text: 'Мұрынға дәрі (асқазанға жетсе)', icon: '💊', breaks: true },
  { id: 12, text: 'Ұмытып құрма жеу', icon: '🍑', breaks: false },
  { id: 13, text: 'Шаршағандықтан ұйықтау', icon: '😴', breaks: false },
  { id: 14, text: 'Денесіне крем жағу', icon: '🧴', breaks: false },
  { id: 15, text: 'Өтірік айту', icon: '😶', breaks: false, hint: 'Үлкен күнә, бірақ оразаны бұзбайды' },
]

interface FeedbackState {
  correct: boolean
  hint: string
}

export function OrazaMatchGame() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const item = items[currentIdx]
  const totalItems = items.length

  function handleChoice(choosesBreaks: boolean) {
    if (feedback) return
    const correct = choosesBreaks === item.breaks
    const hint = item.hint
      ? item.hint
      : item.breaks
      ? `"${item.text}" — оразаны бұзады.`
      : `"${item.text}" — оразаны бұзбайды.`

    setFeedback({ correct, hint })
    setResults((r) => [...r, correct])

    if (correct) {
      setScore((s) => s + 10)
      setStreak((s) => s + 1)
    } else {
      setStreak(0)
    }

    setTimeout(() => {
      setFeedback(null)
      if (currentIdx >= totalItems - 1) {
        setGameState('result')
      } else {
        setCurrentIdx((i) => i + 1)
      }
    }, 1100)
  }

  function restart() {
    setCurrentIdx(0)
    setScore(0)
    setStreak(0)
    setResults([])
    setFeedback(null)
    setGameState('playing')
  }

  const finalCorrect = results.filter(Boolean).length

  if (gameState === 'result') {
    const pct = Math.round((finalCorrect / totalItems) * 100)
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🌙</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-violet-600 mb-1">{score} балл</p>
            <p className="text-gray-400 text-sm mb-4">
              {finalCorrect}/{totalItems} дұрыс
            </p>

            <div className="flex justify-center gap-2 mb-6">
              {pct >= 80 ? (
                <span className="bg-violet-100 border border-violet-300 text-violet-800 text-sm font-bold px-4 py-2 rounded-full">
                  🌟 Ораза шебері!
                </span>
              ) : pct >= 50 ? (
                <span className="bg-blue-50 border border-blue-200 text-blue-700 text-sm font-bold px-4 py-2 rounded-full">
                  📘 Жақсы!
                </span>
              ) : (
                <span className="bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold px-4 py-2 rounded-full">
                  🌱 Тырысыңыз!
                </span>
              )}
            </div>

            <div className="space-y-2 mb-6 text-left max-h-72 overflow-y-auto pr-1">
              {items.map((it, i) => {
                const ok = results[i] ?? false
                return (
                  <div
                    key={it.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 text-sm ${
                      ok ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{it.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{it.text}</p>
                      <p
                        className={`text-xs ${
                          ok ? 'text-emerald-600' : 'text-red-500'
                        }`}
                      >
                        {it.breaks ? '🚫 Бұзады' : '✅ Бұзбайды'}
                      </p>
                      {!ok && it.hint && (
                        <p className="text-xs text-gray-400 mt-0.5">{it.hint}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                🔁 ҚАЙТА ОЙНАУ
              </button>
              <Link
                to="/oraza"
                className="w-full block bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl text-center hover:bg-gray-100 transition-colors"
              >
                🏠 БАСТЫ БЕТКЕ
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const progressPct = Math.round((currentIdx / totalItems) * 100)

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/oraza" className="text-sm text-violet-700 hover:text-violet-900 transition-colors">
            ← Ораза
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {currentIdx + 1}/{totalItems}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-violet-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🔍 Оразаны не бұзады?</h1>
          <p className="text-sm text-gray-500">Бұзады ма, бұзбайды ма? — таңда</p>
        </div>

        {/* Progress */}
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-1 bg-white border border-violet-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>⭐</span>
            <span className="font-bold text-violet-600">{score} балл</span>
          </div>
          <div className="flex items-center gap-1 bg-white border border-violet-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>🔥</span>
            <span className="font-bold text-orange-500">{streak}</span>
          </div>
        </div>

        {/* Card */}
        <div
          className={`bg-white rounded-3xl shadow-lg border-2 px-6 py-8 text-center transition-all duration-300 ${
            feedback === null
              ? 'border-violet-200'
              : feedback.correct
              ? 'border-emerald-400 bg-emerald-50'
              : 'border-red-400 bg-red-50'
          }`}
        >
          <div className="text-7xl my-5">{item.icon}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">{item.text}</h2>

          {feedback === null ? (
            <div className="flex gap-3">
              <button
                onClick={() => handleChoice(true)}
                className="flex-1 bg-red-400 hover:bg-red-500 text-white font-bold py-4 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                🚫 Бұзады
              </button>
              <button
                onClick={() => handleChoice(false)}
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                ✅ Бұзбайды
              </button>
            </div>
          ) : (
            <div
              className={`rounded-2xl px-4 py-3 border ${
                feedback.correct
                  ? 'bg-emerald-100 border-emerald-300'
                  : 'bg-red-100 border-red-300'
              }`}
            >
              <p
                className={`text-lg font-bold mb-1 ${
                  feedback.correct ? 'text-emerald-800' : 'text-red-700'
                }`}
              >
                {feedback.correct ? '🌟 ДҰРЫС!' : '❌ ҚАТЕ'}
              </p>
              <p className="text-sm text-gray-600">{feedback.hint}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
