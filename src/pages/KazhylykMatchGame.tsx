import { useState } from 'react'
import { Link } from 'react-router-dom'

const pairs = [
  { id: 1, ritual: 'Ихрам', icon: '🤍', meaning: 'Алла алдында теңдік' },
  { id: 2, ritual: 'Тауап', icon: '🕋', meaning: 'Алланы еске алу' },
  { id: 3, ritual: 'Сағи', icon: '🏃', meaning: 'Сабыр + үміт' },
  { id: 4, ritual: 'Арафат', icon: '⛰️', meaning: 'Кешірім сұрау' },
  { id: 5, ritual: 'Тас ату', icon: '🪨', meaning: 'Жамандықпен күрес' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function KazhylykMatchGame() {
  const [shuffledMeanings] = useState(() => shuffle(pairs))
  const [selectedRitual, setSelectedRitual] = useState<number | null>(null)
  const [matched, setMatched] = useState<Set<number>>(new Set())
  const [wrong, setWrong] = useState<{ ritual: number; meaning: number } | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  function selectRitual(id: number) {
    if (matched.has(id)) return
    setSelectedRitual(id === selectedRitual ? null : id)
    setWrong(null)
  }

  function selectMeaning(meaningPairId: number) {
    if (!selectedRitual || matched.has(meaningPairId)) return
    if (selectedRitual === meaningPairId) {
      const newMatched = new Set(matched)
      newMatched.add(selectedRitual)
      setMatched(newMatched)
      setSelectedRitual(null)
      setWrong(null)
      if (newMatched.size === pairs.length) {
        setTimeout(() => setGameState('result'), 800)
      }
    } else {
      setWrong({ ritual: selectedRitual, meaning: meaningPairId })
      setTimeout(() => {
        setWrong(null)
        setSelectedRitual(null)
      }, 800)
    }
  }

  function restart() {
    setSelectedRitual(null)
    setMatched(new Set())
    setWrong(null)
    setGameState('playing')
  }

  if (gameState === 'result') {
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🌟</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">КЕРЕМЕТ!</h2>
            <p className="text-gray-500 text-sm mb-6">Барлық сәйкестіктерді таптыңыз!</p>

            <div className="space-y-2 mb-6 text-left">
              {pairs.map((p) => (
                <div
                  key={p.id}
                  className="rounded-xl p-3 border bg-teal-50 border-teal-200 flex items-center gap-3 text-sm"
                >
                  <span className="text-xl">{p.icon}</span>
                  <div>
                    <p className="font-medium text-gray-800">{p.ritual}</p>
                    <p className="text-teal-600 text-xs">→ {p.meaning}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-violet-500 to-indigo-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
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
    <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link
            to="/kazhylyk"
            className="text-sm text-violet-700 hover:text-violet-900 transition-colors"
          >
            ← Қажылық
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {matched.size}/{pairs.length} сәйкестендірілді
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-violet-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🎯 Не мақсатта жасалады?</h1>
          <p className="text-sm text-gray-500">Рәсімді оның мағынасымен сәйкестендір</p>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-violet-400 to-indigo-500 rounded-full transition-all duration-500"
            style={{ width: `${(matched.size / pairs.length) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Left: rituals */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center mb-1">
              Рәсім
            </p>
            {pairs.map((p) => {
              const isMatched = matched.has(p.id)
              const isSelected = selectedRitual === p.id
              const isWrongSide = wrong?.ritual === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => selectRitual(p.id)}
                  disabled={isMatched}
                  className={`rounded-xl border-2 text-center text-sm font-semibold transition-all h-20 flex flex-col items-center justify-center gap-1 ${
                    isMatched
                      ? 'bg-teal-50 border-teal-300 text-teal-700 opacity-80'
                      : isSelected
                      ? 'bg-violet-100 border-violet-500 text-violet-800 scale-105'
                      : isWrongSide
                      ? 'bg-red-50 border-red-400 text-red-700'
                      : 'bg-white border-gray-200 text-gray-800 hover:border-violet-300 hover:bg-violet-50'
                  }`}
                >
                  <span className="text-xl leading-none">{p.icon}</span>
                  <span>{p.ritual}</span>
                  {isMatched && <span className="text-xs">✅</span>}
                </button>
              )
            })}
          </div>

          {/* Right: meanings (shuffled) */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider text-center mb-1">
              Мағынасы
            </p>
            {shuffledMeanings.map((p) => {
              const isMatched = matched.has(p.id)
              const isWrongSide = wrong?.meaning === p.id
              return (
                <button
                  key={p.id}
                  onClick={() => selectMeaning(p.id)}
                  disabled={isMatched || !selectedRitual}
                  className={`rounded-xl border-2 text-center text-xs font-semibold transition-all leading-relaxed h-20 flex flex-col items-center justify-center px-2 ${
                    isMatched
                      ? 'bg-teal-50 border-teal-300 text-teal-700 opacity-80'
                      : isWrongSide
                      ? 'bg-red-50 border-red-400 text-red-700 animate-pulse'
                      : selectedRitual && !isMatched
                      ? 'bg-white border-indigo-200 text-gray-800 hover:border-indigo-500 hover:bg-indigo-50 cursor-pointer'
                      : 'bg-white border-gray-200 text-gray-600 cursor-default'
                  }`}
                >
                  <span>{p.meaning}</span>
                  {isMatched && <span className="text-xs mt-0.5">✅</span>}
                </button>
              )
            })}
          </div>
        </div>

        {selectedRitual !== null && (
          <p className="text-center text-sm text-violet-600 font-medium mt-4">
            "{pairs.find((p) => p.id === selectedRitual)?.ritual}" мағынасын оң жақтан таңда
          </p>
        )}

        <div className="h-12" />
      </div>
    </main>
  )
}
