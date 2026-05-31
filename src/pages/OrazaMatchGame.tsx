import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

interface FastingItem {
  id: number
  text: string
  icon: string
  breaks: boolean
  hint?: string
}

const itemsKk: FastingItem[] = [
  { id: 1, text: 'Әдейілеп тамақ жеу', icon: '🍔', breaks: true },
  { id: 2, text: 'Ұмытып су ішу', icon: '💧', breaks: false },
  { id: 3, text: 'Түкірік жұту', icon: '💦', breaks: false },
  { id: 4, text: 'Мисвак қолдану', icon: '🪥', breaks: false },
  { id: 5, text: 'Укол салу', icon: '💉', breaks: false },
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

const itemsRu: FastingItem[] = [
  { id: 1, text: 'Намеренно поесть', icon: '🍔', breaks: true },
  { id: 2, text: 'Случайно выпить воды', icon: '💧', breaks: false },
  { id: 3, text: 'Глотать слюну', icon: '💦', breaks: false },
  { id: 4, text: 'Использовать мисвак', icon: '🪥', breaks: false },
  { id: 5, text: 'Укол (инъекция)', icon: '💉', breaks: false },
  { id: 6, text: 'Полоскать рот (не глотая)', icon: '🫧', breaks: false },
  { id: 7, text: 'Курить', icon: '🚬', breaks: true },
  { id: 8, text: 'Удалить зуб (не глотая кровь)', icon: '🦷', breaks: false },
  { id: 9, text: 'Принять душ', icon: '🚿', breaks: false },
  { id: 10, text: 'Намеренно вызвать рвоту', icon: '🤢', breaks: true },
  { id: 11, text: 'Капли в нос (если достигли желудка)', icon: '💊', breaks: true },
  { id: 12, text: 'Случайно съесть финик', icon: '🍑', breaks: false },
  { id: 13, text: 'Уснуть от усталости', icon: '😴', breaks: false },
  { id: 14, text: 'Нанести крем на тело', icon: '🧴', breaks: false },
  { id: 15, text: 'Солгать', icon: '😶', breaks: false, hint: 'Большой грех, но пост не нарушает' },
]

interface FeedbackState { correct: boolean; hint: string }

export function OrazaMatchGame() {
  const { lang } = useLang()
  const items = lang === 'ru' ? itemsRu : itemsKk
  const [currentIdx, setCurrentIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [feedback, setFeedback] = useState<FeedbackState | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const item = items[currentIdx]
  const totalItems = items.length

  const ui = {
    back: lang === 'ru' ? '← Пост' : '← Ораза',
    title: lang === 'ru' ? '🔍 Что нарушает пост?' : '🔍 Оразаны не бұзады?',
    subtitle: lang === 'ru' ? 'Нарушает или нет? Выбери правильный ответ' : 'Бұзады ма, бұзбайды ма? — дұрыс жауапты таңда',
    breaksBtn: lang === 'ru' ? '🛑 Нарушает пост' : '🛑 Оразаны бұзады',
    notBreaksBtn: lang === 'ru' ? '✅ Не нарушает' : '✅ Бұзбайды',
    correct: lang === 'ru' ? '🌟 ВЕРНО!' : '🌟 ДҰРЫС!',
    wrong: lang === 'ru' ? '❌ НЕВЕРНО' : '❌ ҚАТЕ',
    result: lang === 'ru' ? 'РЕЗУЛЬТАТ' : 'НӘТИЖЕ',
    score: lang === 'ru' ? 'очков набрано' : 'балл жиналды',
    correct_count: (c: number, t: number) => lang === 'ru' ? `${c} из ${t} правильно` : `${c}/${t} дұрыс`,
    replay: lang === 'ru' ? '🔁 ИГРАТЬ СНОВА' : '🔁 ҚАЙТА ОЙНАУ',
    home: lang === 'ru' ? '🏠 НА ГЛАВНУЮ' : '🏠 БАСТЫ БЕТКЕ',
    breaksLabel: lang === 'ru' ? '🛑 Нарушает пост' : '🛑 Оразаны бұзады',
    notBreaksLabel: lang === 'ru' ? '✅ Не нарушает пост' : '✅ Оразаны бұзбайды',
  }

  function handleChoice(choosesBreaks: boolean) {
    if (feedback) return
    const correct = choosesBreaks === item.breaks
    const hint = item.hint
      ? item.hint
      : item.breaks
      ? lang === 'ru' ? `«${item.text}» — нарушает пост.` : `«${item.text}» — оразаны бұзады.`
      : lang === 'ru' ? `«${item.text}» — пост не нарушает.` : `«${item.text}» — оразаны бұзбайды.`

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
      if (currentIdx >= totalItems - 1) setGameState('result')
      else setCurrentIdx((i) => i + 1)
    }, 1600)
  }

  function restart() {
    setCurrentIdx(0)
    setScore(0)
    setStreak(0)
    setResults([])
    setFeedback(null)
    setGameState('playing')
  }

  if (gameState === 'result') {
    const correctCount = results.filter(Boolean).length
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🏅</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{ui.result}</h2>
            <p className="text-5xl font-bold text-violet-600 mb-1">{score}</p>
            <p className="text-gray-400 text-sm mb-4">{ui.correct_count(correctCount, totalItems)}</p>
            <div className="space-y-2 mb-6 text-left max-h-72 overflow-y-auto pr-1">
              {items.map((it, i) => {
                const ok = results[i] ?? false
                return (
                  <div key={it.id} className={`rounded-xl p-2.5 border flex items-center gap-3 text-sm ${ok ? 'bg-violet-50 border-violet-200' : 'bg-red-50 border-red-200'}`}>
                    <span className="text-xl flex-shrink-0">{it.icon}</span>
                    <div>
                      <p className="font-medium text-gray-800">{it.text}</p>
                      <p className={`text-xs ${it.breaks ? 'text-red-500' : 'text-violet-600'}`}>
                        {it.breaks ? ui.breaksLabel : ui.notBreaksLabel}
                      </p>
                      {!ok && it.hint && <p className="text-xs text-gray-400 mt-0.5">{it.hint}</p>}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={restart} className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105">{ui.replay}</button>
              <Link to="/oraza" className="w-full block bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl text-center hover:bg-gray-100 transition-colors">{ui.home}</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/oraza" className="text-sm text-violet-700 hover:text-violet-900 transition-colors">{ui.back}</Link>
          <span className="text-sm text-gray-500 font-medium">{currentIdx + 1}/{totalItems}</span>
        </div>
        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-violet-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{ui.title}</h1>
          <p className="text-sm text-gray-500">{ui.subtitle}</p>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${Math.round((currentIdx / totalItems) * 100)}%` }} />
        </div>
        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-1 bg-white border border-violet-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>⭐</span><span className="font-bold text-violet-600">{score}</span>
          </div>
          <div className="flex items-center gap-1 bg-white border border-violet-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>🔥</span><span className="font-bold text-orange-500">{streak}</span>
          </div>
        </div>
        <div className={`bg-white rounded-3xl shadow-lg border-2 px-6 py-8 text-center mb-5 transition-all ${feedback === null ? 'border-violet-200' : feedback.correct ? 'border-emerald-400 bg-emerald-50' : 'border-red-400 bg-red-50'}`}>
          <div className="text-7xl mb-4">{item.icon}</div>
          <h2 className="text-xl font-bold text-gray-900 mb-5">{item.text}</h2>
          {feedback !== null && (
            <div className={`rounded-2xl px-4 py-3 border ${feedback.correct ? 'bg-emerald-100 border-emerald-300' : 'bg-red-100 border-red-300'}`}>
              <p className={`text-lg font-bold mb-1 ${feedback.correct ? 'text-emerald-800' : 'text-red-700'}`}>{feedback.correct ? ui.correct : ui.wrong}</p>
              <p className="text-sm text-gray-600">{feedback.hint}</p>
            </div>
          )}
        </div>
        {feedback === null && (
          <div className="flex flex-col gap-3">
            <button onClick={() => handleChoice(true)} className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-2xl shadow-md transition-all hover:scale-105 active:scale-95">{ui.breaksBtn}</button>
            <button onClick={() => handleChoice(false)} className="w-full bg-violet-500 hover:bg-violet-600 text-white font-bold py-4 rounded-2xl shadow-md transition-all hover:scale-105 active:scale-95">{ui.notBreaksBtn}</button>
          </div>
        )}
        <div className="h-8" />
      </div>
    </main>
  )
}
