import { useState } from 'react'
import { Link } from 'react-router-dom'

const people = [
  {
    id: 1,
    name: 'Жетім бала',
    emoji: '👦',
    canReceive: true,
    reason: 'Жетім балалар зекет алушылардың қатарына жатады.',
  },
  {
    id: 2,
    name: 'Өте бай кәсіпкер',
    emoji: '💼',
    canReceive: false,
    reason: 'Бай адамдарға зекет берілмейді — олардың өз байлығы жеткілікті.',
  },
  {
    id: 3,
    name: 'Қарызы бар адам',
    emoji: '😔',
    canReceive: true,
    reason: 'Қарызын өтей алмайтын адам зекет ала алады.',
  },
  {
    id: 4,
    name: 'Мұқтаж отбасы',
    emoji: '👨‍👩‍👧',
    canReceive: true,
    reason: 'Мұқтаж отбасы зекеттің негізгі алушыларының бірі.',
  },
  {
    id: 5,
    name: 'Әке-шеше',
    emoji: '👴👵',
    canReceive: false,
    reason: 'Өз ата-анаңа зекет берілмейді — оларды асырау бөлек міндет.',
  },
  {
    id: 6,
    name: 'Жолда қалған жолаушы',
    emoji: '🧳',
    canReceive: true,
    reason: 'Жолда мұқтаж болған жолаушы зекет ала алады.',
  },
  {
    id: 7,
    name: 'Өзіңнің балаң',
    emoji: '👶',
    canReceive: false,
    reason: 'Өз балаңа зекет берілмейді — оларды асырау міндеті бар.',
  },
  {
    id: 8,
    name: 'Ақшасы жоқ студент',
    emoji: '🎓',
    canReceive: true,
    reason: 'Мұқтаж студент зекет алушылар қатарына кіреді.',
  },
]

type Answer = boolean | null

export function ZeketWhoGame() {
  const [answers, setAnswers] = useState<Answer[]>(Array(people.length).fill(null))
  const [flashIdx, setFlashIdx] = useState<number | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const answered = answers.filter((a) => a !== null).length
  const correctCount = answers.filter((a, i) => a !== null && a === people[i].canReceive).length

  function handleAnswer(idx: number, value: boolean) {
    if (answers[idx] !== null) return
    const next = [...answers]
    next[idx] = value
    setAnswers(next)
    setFlashIdx(idx)
    setTimeout(() => setFlashIdx(null), 700)
    if (next.every((a) => a !== null)) {
      setTimeout(() => setGameState('result'), 1000)
    }
  }

  function restart() {
    setAnswers(Array(people.length).fill(null))
    setGameState('playing')
    setFlashIdx(null)
  }

  if (gameState === 'result') {
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-teal-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🏅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-teal-600 mb-1">
              {correctCount}/{people.length}
            </p>
            <p className="text-gray-400 text-sm mb-6">дұрыс жауап</p>

            <div className="space-y-2 mb-6 text-left max-h-80 overflow-y-auto pr-1">
              {people.map((p, i) => {
                const userAnswer = answers[i]
                const correct = userAnswer === p.canReceive
                return (
                  <div
                    key={p.id}
                    className={`rounded-2xl p-3 border flex items-start gap-3 text-sm ${
                      correct
                        ? 'bg-emerald-50 border-emerald-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-800">{p.name}</p>
                      <p
                        className={`text-xs font-medium ${
                          correct ? 'text-emerald-700' : 'text-red-600'
                        }`}
                      >
                        {p.canReceive ? '✅ Зекет беруге болады' : '❌ Зекет берілмейді'}
                      </p>
                      {!correct && (
                        <p className="text-xs text-gray-500 mt-0.5">{p.reason}</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                🔁 ҚАЙТА ОЙНАУ
              </button>
              <Link
                to="/zeket"
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
    <main translate="no" className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/zeket" className="text-sm text-teal-700 hover:text-teal-900 transition-colors">
            ← Зекет
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {answered}/{people.length} жауапталды
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-teal-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🎯 Кімге береміз?</h1>
          <p className="text-sm text-gray-500">
            Зекет беруге болады ма? — ✅ немесе ❌ таңда
          </p>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-5">
          <div
            className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${(answered / people.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-col gap-3">
          {people.map((person, idx) => {
            const answer = answers[idx]
            const isFlashing = flashIdx === idx
            const correct = answer !== null && answer === person.canReceive

            let cardBg = 'bg-white border-gray-200'
            if (isFlashing) {
              cardBg = correct ? 'bg-emerald-100 border-emerald-400' : 'bg-red-100 border-red-400'
            } else if (answer !== null) {
              cardBg = correct ? 'bg-emerald-50 border-emerald-300' : 'bg-red-50 border-red-300'
            }

            return (
              <div
                key={person.id}
                className={`rounded-2xl border-2 p-4 transition-all duration-300 ${cardBg}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-3xl flex-shrink-0">{person.emoji}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-sm">{person.name}</p>
                      {answer !== null && (
                        <p
                          className={`text-xs mt-0.5 font-medium ${
                            correct ? 'text-emerald-600' : 'text-red-500'
                          }`}
                        >
                          {correct
                            ? '✓ Дұрыс!'
                            : `✗ Дұрыс: ${person.canReceive ? '✅ болады' : '❌ берілмейді'}`}
                        </p>
                      )}
                    </div>
                  </div>

                  {answer === null ? (
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleAnswer(idx, true)}
                        className="w-11 h-11 rounded-xl bg-emerald-100 hover:bg-emerald-200 text-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                        aria-label="Зекет беруге болады"
                      >
                        ✅
                      </button>
                      <button
                        onClick={() => handleAnswer(idx, false)}
                        className="w-11 h-11 rounded-xl bg-red-100 hover:bg-red-200 text-xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
                        aria-label="Зекет берілмейді"
                      >
                        ❌
                      </button>
                    </div>
                  ) : (
                    <span className="text-2xl flex-shrink-0">{answer ? '✅' : '❌'}</span>
                  )}
                </div>

                {answer !== null && !correct && (
                  <p className="text-xs text-gray-500 mt-2 pl-12 leading-relaxed">
                    {person.reason}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="h-12" />
      </div>
    </main>
  )
}
