import { useState } from 'react'
import { Link } from 'react-router-dom'

type CardType = 'receiver' | 'wealth' | 'neither'

interface Card {
  id: number
  name: string
  emoji: string
  type: CardType
  hint: string
}

const TYPE_LABEL: Record<CardType, string> = {
  receiver: '👤 Зекет алушы',
  wealth: '💰 Зекет берілетін байлық',
  neither: '🚫 Зекетке жатпайды',
}

const TYPE_COLOR: Record<CardType, string> = {
  receiver: 'bg-cyan-50 border-cyan-300 text-cyan-800',
  wealth: 'bg-amber-50 border-amber-300 text-amber-800',
  neither: 'bg-red-50 border-red-300 text-red-700',
}

const cards: Card[] = [
  {
    id: 1,
    name: 'Мұқтаж отбасы',
    emoji: '👨‍👩‍👧',
    type: 'receiver',
    hint: 'Мұқтаж отбасы — зекеттің негізгі алушысы.',
  },
  {
    id: 2,
    name: 'Жетім бала',
    emoji: '👦',
    type: 'receiver',
    hint: 'Жетім балалар зекет алушылар қатарына жатады.',
  },
  {
    id: 3,
    name: 'Қарызы бар адам',
    emoji: '😔',
    type: 'receiver',
    hint: 'Қарызын өтей алмайтын адам зекет ала алады.',
  },
  {
    id: 4,
    name: 'Жолда ақшасы таусылған жолаушы',
    emoji: '✈️',
    type: 'receiver',
    hint: 'Жолда ақшасы таусылып қалған жолаушыға зекет берілуі мүмкін.',
  },
  {
    id: 5,
    name: 'Зекет жинаушы',
    emoji: '📋',
    type: 'receiver',
    hint: 'Зекет жинау және бөлумен айналысатын адамдар да зекет ала алады.',
  },
  {
    id: 6,
    name: 'Ақша (нисабқа жеткен)',
    emoji: '💵',
    type: 'wealth',
    hint: 'Нисабқа жеткен ақшадан жылына 2,5% зекет беріледі.',
  },
  {
    id: 7,
    name: 'Алтын',
    emoji: '🥇',
    type: 'wealth',
    hint: 'Алтын — зекет есептелетін байлық түрі (85 г-ға дейін нисаб).',
  },
  {
    id: 8,
    name: 'Күміс',
    emoji: '🪙',
    type: 'wealth',
    hint: 'Күміс те зекет есептелетін байлыққа жатады (595 г нисаб).',
  },
  {
    id: 9,
    name: 'Қой',
    emoji: '🐑',
    type: 'wealth',
    hint: '40 қойдан 1 қой зекет беріледі.',
  },
  {
    id: 10,
    name: 'Сиыр',
    emoji: '🐄',
    type: 'wealth',
    hint: 'Сиырдан да зекет беріледі — мал зекеті бар.',
  },
  {
    id: 11,
    name: 'Астық, егін',
    emoji: '🌾',
    type: 'wealth',
    hint: 'Егін, астықтан ушыр (1/10 немесе 1/20) беріледі.',
  },
  {
    id: 12,
    name: 'Сауда тауары',
    emoji: '🛒',
    type: 'wealth',
    hint: 'Сауда мақсатындағы тауардан зекет беріледі.',
  },
  {
    id: 13,
    name: 'Өте бай адам',
    emoji: '💼',
    type: 'neither',
    hint: 'Нисабқа жеткен, бай адамдарға зекет берілмейді.',
  },
  {
    id: 14,
    name: 'Ата-ана',
    emoji: '👴👵',
    type: 'neither',
    hint: 'Өз ата-анаңа зекет берілмейді — оларды асырау бөлек міндет.',
  },
  {
    id: 15,
    name: 'Жалғыз үй',
    emoji: '🏠',
    type: 'neither',
    hint: 'Тұратын жалғыз үйден зекет берілмейді.',
  },
  {
    id: 16,
    name: 'Жиһаз, тұрмыс заттары',
    emoji: '🛏️',
    type: 'neither',
    hint: 'Жеке қажеттілікке арналған заттардан зекет берілмейді.',
  },
  {
    id: 17,
    name: 'Өз ұл-қызы',
    emoji: '👧',
    type: 'neither',
    hint: 'Өз балаларыңа зекет берілмейді — оларды асырау ата-ананың міндеті.',
  },
]

interface FeedbackState {
  correct: boolean
  hint: string
  correctType: CardType
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function ZeketBasketGame() {
  const [shuffledCards] = useState(() => shuffle(cards))
  const [currentIdx, setCurrentIdx] = useState(0)
  const [streak, setStreak] = useState(0)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)
  const [hearts, setHearts] = useState(0)

  const card = shuffledCards[currentIdx]
  const totalCards = shuffledCards.length

  function handleChoice(chosen: CardType) {
    if (feedback) return
    const correct = chosen === card.type
    setFeedback({ correct, hint: card.hint, correctType: card.type })

    const newResults = [...results, correct]
    setResults(newResults)

    if (correct) {
      setScore((s) => s + 10)
      const newStreak = streak + 1
      setStreak(newStreak)
      if (newStreak % 3 === 0) setHearts((h) => Math.min(h + 1, 5))
    } else {
      setStreak(0)
    }

    setTimeout(() => {
      setFeedback(null)
      if (currentIdx >= totalCards - 1) {
        setGameState('result')
      } else {
        setCurrentIdx((i) => i + 1)
      }
    }, 1400)
  }

  function restart() {
    setCurrentIdx(0)
    setStreak(0)
    setScore(0)
    setResults([])
    setHearts(0)
    setGameState('playing')
    setFeedback(null)
  }

  const finalCorrect = results.filter(Boolean).length

  if (gameState === 'result') {
    const pct = Math.round((finalCorrect / totalCards) * 100)
    const byType = (['receiver', 'wealth', 'neither'] as CardType[]).map((type) => {
      const typeCards = shuffledCards.filter((c) => c.type === type)
      const typeCorrect = typeCards.filter((c) => {
        const globalIdx = shuffledCards.indexOf(c)
        return results[globalIdx] ?? false
      }).length
      return { type, total: typeCards.length, correct: typeCorrect }
    })

    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 flex items-start justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-green-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🧺</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-green-600 mb-1">{score} XP</p>
            <p className="text-gray-400 text-sm mb-4">
              {finalCorrect}/{totalCards} дұрыс жауап
            </p>

            <div className="flex justify-center mb-5">
              {pct >= 80 ? (
                <span className="bg-green-100 border border-green-300 text-green-800 text-sm font-bold px-4 py-2 rounded-full">
                  🌿 Зекет шебері!
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

            {/* Category breakdown */}
            <div className="grid grid-cols-3 gap-2 mb-5">
              {byType.map(({ type, total, correct }) => (
                <div key={type} className={`rounded-xl border p-2 text-center text-xs ${TYPE_COLOR[type]}`}>
                  <p className="font-bold text-base">{correct}/{total}</p>
                  <p className="leading-tight mt-0.5">{TYPE_LABEL[type]}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 text-left max-h-64 overflow-y-auto pr-1">
              {shuffledCards.map((c, i) => {
                const ok = results[i] ?? false
                return (
                  <div
                    key={c.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 text-sm ${
                      ok ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{c.emoji}</span>
                    <div>
                      <p className="font-medium text-gray-800">{c.name}</p>
                      <p className={`text-xs font-medium ${TYPE_COLOR[c.type].split(' ')[2]}`}>
                        {TYPE_LABEL[c.type]}
                      </p>
                      {!ok && <p className="text-xs text-gray-400 mt-0.5">{c.hint}</p>}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-lime-500 to-emerald-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
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

  const progressPct = Math.round((currentIdx / totalCards) * 100)

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/zeket" className="text-sm text-green-700 hover:text-green-900 transition-colors">
            ← Зекет
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {currentIdx + 1}/{totalCards}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-green-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">🧺 Зекет себеті</h1>
          <p className="text-sm text-gray-500">Карточканы дұрыс санатқа жатқыз!</p>
        </div>

        {/* Progress */}
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-1 bg-white border border-green-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>⭐</span>
            <span className="font-bold text-amber-600">{score} XP</span>
          </div>
          <div className="flex items-center gap-1 bg-white border border-green-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>🔥</span>
            <span className="font-bold text-orange-500">{streak}</span>
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: hearts }).map((_, i) => (
              <span key={i} className="text-lg animate-pulse">💚</span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div
          className={`bg-white rounded-3xl shadow-lg border-2 px-6 py-8 text-center mb-5 transition-all duration-300 ${
            feedback === null
              ? 'border-green-200'
              : feedback.correct
              ? 'border-emerald-400 bg-emerald-50'
              : 'border-red-400 bg-red-50'
          }`}
        >
          <div className="text-7xl my-4">{card.emoji}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">{card.name}</h2>

          {feedback !== null && (
            <div
              className={`rounded-2xl px-4 py-3 border ${
                feedback.correct
                  ? 'bg-emerald-100 border-emerald-300'
                  : 'bg-red-100 border-red-300'
              }`}
            >
              <p className={`text-lg font-bold mb-1 ${feedback.correct ? 'text-emerald-800' : 'text-red-700'}`}>
                {feedback.correct ? '🌟 ДҰРЫС!' : '❌ ҚАТЕ'}
              </p>
              {!feedback.correct && (
                <p className={`text-xs font-semibold mb-1 ${TYPE_COLOR[feedback.correctType].split(' ')[2]}`}>
                  Дұрыс жауап: {TYPE_LABEL[feedback.correctType]}
                </p>
              )}
              <p className="text-sm text-gray-600">{feedback.hint}</p>
            </div>
          )}
        </div>

        {/* Three choice buttons */}
        {feedback === null && (
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleChoice('receiver')}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-base"
            >
              👤 Зекет алушы
            </button>
            <button
              onClick={() => handleChoice('wealth')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-base"
            >
              💰 Зекет берілетін байлық
            </button>
            <button
              onClick={() => handleChoice('neither')}
              className="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-base"
            >
              🚫 Зекетке жатпайды
            </button>
          </div>
        )}

        <div className="h-8" />
      </div>
    </main>
  )
}
