import { useState } from 'react'
import { Link } from 'react-router-dom'

const scenarios = [
  {
    id: 1,
    icon: '🤍',
    setup: 'Сен ихрамдасың. Біреу сені ашуландырды.',
    options: [
      { text: 'Ұрысамын', correct: false },
      { text: 'Сабыр етемін және Алланы еске аламын', correct: true },
      { text: 'Қайтып кетемін', correct: false },
      { text: 'Күлемін', correct: false },
    ],
    feedback: 'Ихрамда жанжалдан, ашудан аулақ болу керек. Сабыр — ихрамның негізі.',
  },
  {
    id: 2,
    icon: '🕋',
    setup: 'Тауап жасап жүрсің, шаршадың.',
    options: [
      { text: 'Тоқтаймын', correct: false },
      { text: 'Жалғастырамын және дұға етемін', correct: true },
      { text: 'Ұйықтаймын', correct: false },
      { text: 'Телефон қараймын', correct: false },
    ],
    feedback: 'Тауапта шаршасаң да жалғастырып, дұға ету — ибадаттың мәні.',
  },
  {
    id: 3,
    icon: '⛰️',
    setup: 'Арафат күнінде не істейсің?',
    options: [
      { text: 'Көп сөйлеймін', correct: false },
      { text: 'Дұға етемін және кешірім сұраймын', correct: true },
      { text: 'Ойын ойнаймын', correct: false },
      { text: 'Сауда жасаймын', correct: false },
    ],
    feedback: 'Арафат күні — кешірім күні. Ең маңызды нәрсе: дұға жасау, кешірім сұрау.',
  },
]

export function KazhylykScenarioGame() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [hearts, setHearts] = useState(0)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const scenario = scenarios[currentIdx]
  const totalHearts = scenarios.length

  function handleSelect(optionIdx: number) {
    if (selectedOption !== null) return
    setSelectedOption(optionIdx)
    const isCorrect = scenario.options[optionIdx].correct
    const newResults = [...results, isCorrect]
    setResults(newResults)
    if (isCorrect) {
      setScore((s) => s + 10)
      setHearts((h) => Math.min(h + 1, totalHearts))
    }

    setTimeout(() => {
      setSelectedOption(null)
      if (currentIdx >= scenarios.length - 1) {
        setGameState('result')
      } else {
        setCurrentIdx((i) => i + 1)
      }
    }, 1500)
  }

  function restart() {
    setCurrentIdx(0)
    setHearts(0)
    setScore(0)
    setResults([])
    setSelectedOption(null)
    setGameState('playing')
  }

  if (gameState === 'result') {
    const allCorrect = results.every(Boolean)
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">{allCorrect ? '🏆' : '🌱'}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-amber-600 mb-1">{score} балл</p>

            {/* Heart meter */}
            <div className="flex justify-center gap-1 my-4">
              {Array.from({ length: totalHearts }).map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl transition-all ${i < hearts ? 'opacity-100' : 'opacity-20'}`}
                >
                  ❤️
                </span>
              ))}
            </div>

            {allCorrect ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 mb-6">
                <p className="text-amber-800 font-bold">🏅 Қажылық рухы қабыл болды!</p>
              </div>
            ) : (
              <p className="text-gray-400 text-sm mb-6">
                {results.filter(Boolean).length}/{scenarios.length} дұрыс
              </p>
            )}

            <div className="space-y-3 mb-6 text-left">
              {scenarios.map((s, i) => {
                const ok = results[i] ?? false
                const correctOption = s.options.find((o) => o.correct)
                return (
                  <div
                    key={s.id}
                    className={`rounded-xl p-3 border text-sm ${
                      ok ? 'bg-teal-50 border-teal-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{s.icon}</span>
                      <p className="font-medium text-gray-800 text-xs">{s.setup}</p>
                    </div>
                    <p className={`text-xs font-medium ${ok ? 'text-teal-600' : 'text-red-500'}`}>
                      ✅ {correctOption?.text}
                    </p>
                    {!ok && (
                      <p className="text-xs text-gray-400 mt-0.5">{s.feedback}</p>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
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
    <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/kazhylyk"
            className="text-sm text-amber-700 hover:text-amber-900 transition-colors"
          >
            ← Қажылық
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {currentIdx + 1}/{scenarios.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-amber-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🎭 Қажылық роль-play</h1>
          <p className="text-sm text-gray-500">Ситуацияда дұрыс шешім қабылда</p>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-500"
            style={{ width: `${(currentIdx / scenarios.length) * 100}%` }}
          />
        </div>

        {/* Heart meter */}
        <div className="flex items-center justify-center gap-1 mb-5">
          {Array.from({ length: totalHearts }).map((_, i) => (
            <span
              key={i}
              className={`text-2xl transition-all duration-300 ${
                i < hearts ? 'opacity-100 scale-110' : 'opacity-20'
              }`}
            >
              ❤️
            </span>
          ))}
          <span className="ml-2 text-xs text-gray-400 font-medium">Жүректің тазалығы</span>
        </div>

        {/* Scenario card */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-amber-200 px-6 py-6 mb-4">
          <div className="text-5xl text-center mb-4">{scenario.icon}</div>
          <p className="text-base font-bold text-gray-900 mb-6 leading-relaxed text-center">
            {scenario.setup}
          </p>

          <div className="flex flex-col gap-2">
            {scenario.options.map((option, idx) => {
              const isSelected = selectedOption === idx
              const showResult = selectedOption !== null

              let btnClass =
                'bg-white border-2 border-amber-200 text-gray-800 hover:border-amber-400 hover:bg-amber-50'
              if (showResult) {
                if (option.correct) {
                  btnClass = 'bg-teal-50 border-2 border-teal-400 text-teal-800 font-bold'
                } else if (isSelected) {
                  btnClass = 'bg-red-50 border-2 border-red-400 text-red-700'
                } else {
                  btnClass = 'bg-white border-2 border-gray-200 text-gray-400'
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={selectedOption !== null}
                  className={`${btnClass} rounded-2xl px-4 py-3 text-sm font-semibold text-left transition-all hover:scale-[1.02] active:scale-95`}
                >
                  <span className="mr-2 text-gray-400">{String.fromCharCode(65 + idx)})</span>
                  {option.text}
                  {showResult && option.correct && (
                    <span className="float-right">✅</span>
                  )}
                  {showResult && isSelected && !option.correct && (
                    <span className="float-right">❌</span>
                  )}
                </button>
              )
            })}
          </div>

          {selectedOption !== null && (
            <div
              className={`mt-4 rounded-2xl px-4 py-3 border text-sm ${
                scenario.options[selectedOption].correct
                  ? 'bg-teal-50 border-teal-300'
                  : 'bg-red-50 border-red-300'
              }`}
            >
              <p
                className={`font-bold mb-1 ${
                  scenario.options[selectedOption].correct
                    ? 'text-teal-800'
                    : 'text-red-700'
                }`}
              >
                {scenario.options[selectedOption].correct ? '🌟 ДҰРЫС!' : '❌ ҚАТЕ'}
              </p>
              <p className="text-gray-600 text-xs">{scenario.feedback}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
