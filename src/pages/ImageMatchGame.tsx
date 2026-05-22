import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Pair {
  id: number
  name: string
  image: string
}

const pairs: Pair[] = [
  { id: 1, name: 'Тәкбір', image: '/images/takbir.png' },
  { id: 2, name: 'Қиям', image: '/images/qyam-qyraat.png' },
  { id: 3, name: 'Руку', image: '/images/ruku.png' },
  { id: 4, name: 'Сәжде', image: '/images/sajda.png' },
  { id: 5, name: 'Ташаhуд', image: '/images/tashahud.png' },
  { id: 6, name: 'Сәлем', image: '/images/salam-right.png' },
]

const COLORS = ['#6366f1', '#f59e0b', '#22c55e', '#ef4444', '#3b82f6', '#ec4899']

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface LineData {
  leftId: number
  x1: number
  y1: number
  x2: number
  y2: number
  color: string
}

export function ImageMatchGame() {
  const [shuffledRight, setShuffledRight] = useState<number[]>(() =>
    shuffle(pairs.map((p) => p.id))
  )
  const [connections, setConnections] = useState<Map<number, number>>(new Map())
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [lines, setLines] = useState<LineData[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const leftRefs = useRef<Record<number, HTMLButtonElement | null>>({})
  const rightRefs = useRef<Record<number, HTMLButtonElement | null>>({})

  const calcLines = () => {
    const cr = containerRef.current?.getBoundingClientRect()
    if (!cr) return
    const result: LineData[] = []
    connections.forEach((rightId, leftId) => {
      const lEl = leftRefs.current[leftId]
      const rEl = rightRefs.current[rightId]
      if (!lEl || !rEl) return
      const lr = lEl.getBoundingClientRect()
      const rr = rEl.getBoundingClientRect()
      result.push({
        leftId,
        x1: lr.right - cr.left,
        y1: lr.top + lr.height / 2 - cr.top,
        x2: rr.left - cr.left,
        y2: rr.top + rr.height / 2 - cr.top,
        color: COLORS[(leftId - 1) % COLORS.length],
      })
    })
    setLines(result)
  }

  useLayoutEffect(() => {
    calcLines()
  }, [connections, checked])

  useEffect(() => {
    window.addEventListener('resize', calcLines)
    return () => window.removeEventListener('resize', calcLines)
  }, [connections])

  function handleLeftClick(id: number) {
    if (checked) return
    setSelectedLeft((prev) => (prev === id ? null : id))
  }

  function handleRightClick(rightId: number) {
    if (checked || selectedLeft === null) return
    setConnections((prev) => {
      const next = new Map(prev)
      for (const [lId, rId] of next.entries()) {
        if (rId === rightId) next.delete(lId)
      }
      next.set(selectedLeft, rightId)
      return next
    })
    setSelectedLeft(null)
  }

  function handleRestart() {
    setShuffledRight(shuffle(pairs.map((p) => p.id)))
    setConnections(new Map())
    setSelectedLeft(null)
    setChecked(false)
    setLines([])
  }

  const correctCount = [...connections.entries()].filter(([lId, rId]) => lId === rId).length
  const allConnected = connections.size === pairs.length

  return (
    <main translate="no" className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/namaz" className="text-sm text-primary-600 hover:underline">
          ← Намаз
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">
          Ойын — Сурет-атау жұптастыру
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Сол жақтан суретті таңда, оң жақтан оның атауын басып байланыстыр
        </p>
      </div>

      <div
        className={`mb-4 rounded-xl px-4 py-2.5 text-sm text-center font-medium transition-all duration-200 ${
          selectedLeft !== null
            ? 'bg-primary-50 border border-primary-200 text-primary-800'
            : 'bg-gray-50 border border-gray-200 text-gray-400'
        }`}
      >
        {selectedLeft !== null
          ? 'Сурет таңдалды — оң жақтан атауын баса байланыстыр'
          : 'Сол жақтан суретті таңдаудан бастаңыз'}
      </div>

      <div ref={containerRef} className="relative">
        <svg
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
          aria-hidden="true"
        >
          <defs>
            {lines.map((l) => (
              <marker
                key={`dot-img-${l.leftId}`}
                id={`dot-img-${l.leftId}`}
                markerWidth="6"
                markerHeight="6"
                refX="3"
                refY="3"
              >
                <circle
                  cx="3"
                  cy="3"
                  r="2.5"
                  fill={
                    checked
                      ? l.leftId === connections.get(l.leftId)
                        ? '#22c55e'
                        : '#ef4444'
                      : l.color
                  }
                />
              </marker>
            ))}
          </defs>
          {lines.map((l) => {
            const isCorrect = checked && l.leftId === connections.get(l.leftId)
            const stroke = checked ? (isCorrect ? '#22c55e' : '#ef4444') : l.color
            const mx = (l.x1 + l.x2) / 2
            return (
              <path
                key={l.leftId}
                d={`M ${l.x1} ${l.y1} C ${mx} ${l.y1}, ${mx} ${l.y2}, ${l.x2} ${l.y2}`}
                fill="none"
                stroke={stroke}
                strokeWidth={2.5}
                strokeLinecap="round"
                opacity={0.85}
                markerStart={`url(#dot-img-${l.leftId})`}
                markerEnd={`url(#dot-img-${l.leftId})`}
              />
            )
          })}
        </svg>

        <div className="flex gap-6">
          {/* Left: images */}
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 text-center">
              Суреттер
            </p>
            {pairs.map((pair) => {
              const isSelected = selectedLeft === pair.id
              const isConnected = connections.has(pair.id)
              const color = COLORS[(pair.id - 1) % COLORS.length]
              const isCorrect = checked && connections.get(pair.id) === pair.id
              const isWrong = checked && isConnected && !isCorrect

              return (
                <button
                  key={pair.id}
                  ref={(el) => {
                    leftRefs.current[pair.id] = el
                  }}
                  onClick={() => handleLeftClick(pair.id)}
                  disabled={checked}
                  aria-label={checked ? pair.name : `${pair.id}-сурет`}
                  className={[
                    'relative flex items-center justify-center rounded-xl border-2 w-full h-24 transition-all duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
                    isSelected
                      ? 'border-primary-500 bg-primary-50 shadow-md scale-[1.02]'
                      : isCorrect
                      ? 'border-green-400 bg-green-50'
                      : isWrong
                      ? 'border-red-400 bg-red-50'
                      : isConnected
                      ? 'border-gray-300 bg-white'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm',
                  ].join(' ')}
                >
                  <img
                    src={pair.image}
                    alt={checked ? pair.name : ''}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                  {isConnected && !checked && (
                    <span
                      className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  )}
                  {checked && (
                    <span
                      className={`absolute top-1.5 right-1.5 text-base font-bold ${
                        isCorrect ? 'text-green-500' : 'text-red-400'
                      }`}
                    >
                      {isCorrect ? '✓' : '✗'}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Right: names (shuffled) */}
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 text-center">
              Атаулар
            </p>
            {shuffledRight.map((rightId) => {
              const pair = pairs.find((p) => p.id === rightId)!
              const connEntry = [...connections.entries()].find(([, rId]) => rId === rightId)
              const leftId = connEntry?.[0]
              const isConnected = leftId !== undefined
              const color = leftId !== undefined ? COLORS[(leftId - 1) % COLORS.length] : undefined
              const isCorrect = checked && leftId === rightId
              const isWrong = checked && isConnected && !isCorrect

              return (
                <button
                  key={rightId}
                  ref={(el) => {
                    rightRefs.current[rightId] = el
                  }}
                  onClick={() => handleRightClick(rightId)}
                  disabled={checked}
                  className={[
                    'flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2 w-full h-24 transition-all duration-150',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400',
                    isCorrect
                      ? 'border-green-400 bg-green-50'
                      : isWrong
                      ? 'border-red-400 bg-red-50'
                      : isConnected
                      ? 'border-gray-300 bg-white'
                      : selectedLeft !== null
                      ? 'border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50 hover:shadow-sm'
                      : 'border-gray-200 bg-white',
                  ].join(' ')}
                >
                  {isConnected && !checked && (
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                  )}
                  <span className="text-sm font-semibold text-gray-800 text-center leading-snug">
                    {pair.name}
                  </span>
                  {checked && (
                    <span
                      className={`text-base font-bold flex-shrink-0 ${
                        isCorrect ? 'text-green-500' : 'text-red-400'
                      }`}
                    >
                      {isCorrect ? '✓' : '✗'}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={!allConnected}
            className="btn-primary w-full disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {allConnected
              ? 'Тексеру'
              : `Барлығын байланыстыр (${connections.size} / ${pairs.length})`}
          </button>
        ) : (
          <div className="card text-center py-6">
            <p className="text-4xl mb-3">
              {correctCount === pairs.length ? '🎉' : correctCount >= 4 ? '👍' : '💪'}
            </p>
            <p className="text-xl font-bold text-gray-900 mb-1">
              {correctCount} / {pairs.length} дұрыс
            </p>
            <p className="text-gray-600 text-sm mb-5">
              {correctCount === pairs.length
                ? 'МашаАллаh! Барлық суретті дұрыс таптың!'
                : correctCount >= 4
                ? 'Жақсы! Қайта байқап 100% жеткіз.'
                : 'Қимылдарды оқып қайта байқа!'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={handleRestart} className="btn-primary">
                Қайтадан ойнау
              </button>
              <Link to="/movements" className="btn-secondary">
                Қимылдарды оқу →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
