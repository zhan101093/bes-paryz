import { useState } from 'react'
import { Link } from 'react-router-dom'

const correctOrder = [
  { id: 1, title: 'Ихрам', icon: '🤍' },
  { id: 2, title: 'Тауап', icon: '🕋' },
  { id: 3, title: 'Сағи', icon: '🏃' },
  { id: 4, title: 'Арафат', icon: '⛰️' },
  { id: 5, title: 'Муздалифа', icon: '🌙' },
  { id: 6, title: 'Тас ату', icon: '🪨' },
  { id: 7, title: 'Құрбан', icon: '🐑' },
]

type Step = typeof correctOrder[0]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function KazhylykOrderGame() {
  const [pool, setPool] = useState<Step[]>(() => shuffle(correctOrder))
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
    setTimeout(() => setGameState('result'), 1500)
  }

  function restart() {
    setPool(shuffle(correctOrder))
    setSequence([])
    setChecked(false)
    setGameState('playing')
  }

  const correctCount = checked
    ? sequence.filter((item, i) => item.id === i + 1).length
    : 0

  if (gameState === 'result') {
    const allCorrect = correctCount === correctOrder.length
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-teal-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">{allCorrect ? '🏆' : '🕋'}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-teal-600 mb-2">
              {correctCount}/{correctOrder.length}
            </p>
            <p className="text-gray-400 text-sm mb-6">дұрыс орналастырылды</p>

            <div className="space-y-2 mb-6 text-left">
              {correctOrder.map((step, i) => {
                const userStep = sequence[i]
                const ok = userStep?.id === step.id
                return (
                  <div
                    key={step.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 text-sm ${
                      ok ? 'bg-teal-50 border-teal-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{step.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">
                        {i + 1}. {step.title}
                      </p>
                      {!ok && userStep && (
                        <p className="text-xs text-red-500">Сіз қойдыңыз: {userStep.title}</p>
                      )}
                    </div>
                    <span>{ok ? '✅' : '❌'}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                🔁 ҚАЙТА ОЙНАУ
              </button>
              <Link
                to="/kazhylyk"
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

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/kazhylyk"
            className="text-sm text-teal-700 hover:text-teal-900 transition-colors"
          >
            ← Қажылық
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {sequence.length}/{correctOrder.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-teal-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🧭 Қажылық жолын құрастыр</h1>
          <p className="text-sm text-gray-500">Қадамдарды дұрыс ретімен орналастыр</p>
        </div>

        {/* Sequence area */}
        <div className="bg-white border-2 border-dashed border-teal-300 rounded-2xl p-4 mb-4 min-h-20">
          <p className="text-xs text-gray-400 mb-3 font-medium uppercase tracking-wider text-center">
            Сенің реттілігің
          </p>
          {sequence.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-1">Төменнен карточка тап</p>
          ) : (
            <div className="flex flex-col gap-2">
              {sequence.map((item, i) => {
                const isCorrect = checked && item.id === i + 1
                const isWrong = checked && item.id !== i + 1
                return (
                  <button
                    key={item.id}
                    onClick={() => removeFromSequence(item)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border-2 text-sm font-semibold transition-all ${
                      isCorrect
                        ? 'bg-teal-50 border-teal-400 text-teal-800'
                        : isWrong
                        ? 'bg-red-50 border-red-400 text-red-800'
                        : 'bg-teal-50 border-teal-200 text-gray-800 hover:border-teal-400'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-lg">{item.icon}</span>
                    <span className="flex-1 text-left">{item.title}</span>
                    {isCorrect && <span>✅</span>}
                    {isWrong && <span>❌</span>}
                    {!checked && (
                      <span className="text-gray-400 text-xs">✕</span>
                    )}
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
              className="flex items-center gap-2 bg-white border-2 border-teal-200 rounded-xl px-3 py-2 text-sm font-semibold text-gray-800 hover:border-teal-500 hover:bg-teal-50 transition-all hover:scale-105 active:scale-95"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {sequence.length === correctOrder.length && !checked && (
          <button
            onClick={check}
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            ✅ ТЕКСЕРУ
          </button>
        )}
      </div>
    </main>
  )
}
