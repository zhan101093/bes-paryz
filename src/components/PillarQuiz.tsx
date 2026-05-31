import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ProgressBar } from './ui/ProgressBar'
import { useLang } from '../contexts/LanguageContext'

const ui = {
  kk: {
    quizTitle: 'Викторина',
    quizDesc: (n: number, t: number) => `${n} сұрақ. Әр сұраққа ${t} секунд беріледі. Өз білімін тексер!`,
    correct: 'Дұрыс жауап — 1 ұпай',
    timeout: 'Уақыт бітсе — 0 ұпай',
    max: (n: number) => `Максимум — ${n} ұпай`,
    start: 'Бастау →',
    result: 'Нәтиже',
    score: (s: number, n: number) => `${s} / ${n}`,
    correctAnswer: 'Дұрыс жауап:',
    replay: 'Қайта ойнау',
    questionLabel: (i: number) => `${i}-сұрақ`,
    scoreLabel: 'Ұпай:',
    next: 'Келесі сұрақ →',
    finish: 'Нәтижені көру →',
    msgs: ['Алдыңғы бөлімдерді тағы бір рет оқып шықсаңыз болар.', 'Тырысыңыз, тағы оқып шығыңыз!', 'Жақсы нәтиже! Тағы да қайталаңыз.', 'Керемет! Жақсы білесіз!'],
  },
  ru: {
    quizTitle: 'Викторина',
    quizDesc: (n: number, t: number) => `${n} вопросов. На каждый вопрос ${t} секунд. Проверь свои знания!`,
    correct: 'Правильный ответ — 1 очко',
    timeout: 'Время вышло — 0 очков',
    max: (n: number) => `Максимум — ${n} очков`,
    start: 'Начать →',
    result: 'Результат',
    score: (s: number, n: number) => `${s} / ${n}`,
    correctAnswer: 'Правильный ответ:',
    replay: 'Играть снова',
    questionLabel: (i: number) => `Вопрос ${i}`,
    scoreLabel: 'Очки:',
    next: 'Следующий вопрос →',
    finish: 'Посмотреть результат →',
    msgs: ['Прочитайте предыдущие разделы ещё раз.', 'Старайтесь, читайте ещё!', 'Хороший результат! Повторите ещё раз.', 'Отлично! Хорошо знаешь!'],
  },
}

export interface PillarQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

interface PillarQuizProps {
  questions: PillarQuestion[]
  title: string
  backLink: string
  backLabel: string
}

type GameState = 'intro' | 'playing' | 'answered' | 'result'

const TIMER_SECONDS = 30

export function PillarQuiz({ questions, title, backLink, backLabel }: PillarQuizProps) {
  const { lang } = useLang()
  const u = ui[lang]
  const [gameState, setGameState] = useState<GameState>('intro')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS)
  const [answers, setAnswers] = useState<(number | null)[]>([])

  const question = questions[current]

  const handleTimeout = useCallback(() => {
    if (gameState !== 'playing') return
    setAnswers((prev) => [...prev, null])
    setGameState('answered')
  }, [gameState])

  useEffect(() => {
    if (gameState !== 'playing') return
    if (timeLeft <= 0) {
      handleTimeout()
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [gameState, timeLeft, handleTimeout])

  function startGame() {
    setGameState('playing')
    setCurrent(0)
    setScore(0)
    setTimeLeft(TIMER_SECONDS)
    setSelected(null)
    setAnswers([])
  }

  function handleAnswer(idx: number) {
    if (gameState !== 'playing') return
    setSelected(idx)
    setAnswers((prev) => [...prev, idx])
    if (idx === question.correctIndex) setScore((s) => s + 1)
    setGameState('answered')
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setTimeLeft(TIMER_SECONDS)
      setGameState('playing')
    } else {
      setGameState('result')
    }
  }

  const scorePercent = Math.round((score / questions.length) * 100)

  function getResultEmoji() {
    if (scorePercent >= 80) return '🏆'
    if (scorePercent >= 60) return '⭐'
    if (scorePercent >= 40) return '💪'
    return '📚'
  }

  function getResultMsg() {
    if (scorePercent >= 80) return u.msgs[3]
    if (scorePercent >= 60) return u.msgs[2]
    if (scorePercent >= 40) return u.msgs[1]
    return u.msgs[0]
  }

  if (gameState === 'intro') {
    return (
      <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to={backLink} className="text-sm text-primary-600 hover:underline">
            ← {backLabel}
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">{title}</h1>
        </div>
        <div className="card text-center py-10">
          <div className="text-6xl mb-4">🎮</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{u.quizTitle}</h2>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            {u.quizDesc(questions.length, TIMER_SECONDS)}
          </p>
          <div className="flex flex-col gap-2 items-center text-sm text-gray-500 mb-6">
            <p>✅ {u.correct}</p>
            <p>⏰ {u.timeout}</p>
            <p>🏆 {u.max(questions.length)}</p>
          </div>
          <button onClick={startGame} className="btn-primary text-lg px-8 py-3">
            {u.start}
          </button>
        </div>
      </main>
    )
  }

  if (gameState === 'result') {
    return (
      <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
        <div className="card text-center py-10">
          <div className="text-6xl mb-3">{getResultEmoji()}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{u.result}</h2>
          <p className="text-4xl font-bold text-primary-700 mb-1">
            {u.score(score, questions.length)}
          </p>
          <p className="text-gray-600 mb-6">{getResultMsg()}</p>
          <ProgressBar current={score} total={questions.length} />
          <div className="mt-6 flex flex-col gap-2 text-left">
            {questions.map((q, i) => {
              const userAnswer = answers[i]
              const correct = userAnswer === q.correctIndex
              return (
                <div
                  key={q.id}
                  className={`rounded-xl p-3 border text-sm ${
                    correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                  }`}
                >
                  <div className="flex gap-2 items-start">
                    <span>{correct ? '✅' : '❌'}</span>
                    <div>
                      <p className="font-medium text-gray-800">{q.question}</p>
                      {!correct && (
                        <p className="text-xs text-gray-500 mt-0.5">
                          {u.correctAnswer} {q.options[q.correctIndex]}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-0.5 italic">{q.explanation}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={startGame} className="btn-primary">
              {u.replay}
            </button>
            <Link to={backLink} className="btn-secondary">
              {backLabel}
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-4">
        <Link to={backLink} className="text-sm text-primary-600 hover:underline">
          ← {backLabel}
        </Link>
        <h1 className="text-2xl font-bold text-primary-900 mt-2">{title}</h1>
      </div>
      <div className="flex items-center justify-between mb-3">
        <ProgressBar current={current + 1} total={questions.length} label="Сұрақ" />
        <div
          className={`ml-4 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-colors ${
            timeLeft > 10
              ? 'border-primary-400 text-primary-700 bg-primary-50'
              : 'border-red-400 text-red-600 bg-red-50'
          }`}
        >
          {timeLeft}
        </div>
      </div>
      <div className="card mt-2">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {u.questionLabel(current + 1)}
          </span>
          <span className="text-xs text-gray-400">{u.scoreLabel} {score}</span>
        </div>
        <h2 className="text-lg font-semibold text-gray-900 mb-5">{question.question}</h2>
        {question.options.length === 2 ? (
          <div className="grid grid-cols-2 gap-3">
            {question.options.map((opt, idx) => {
              const isGreen = idx === 0
              let style: string
              if (gameState === 'answered') {
                if (idx === question.correctIndex)
                  style = 'border-green-400 bg-green-500 text-white'
                else if (idx === selected && selected !== question.correctIndex)
                  style = 'border-red-400 bg-red-400 text-white'
                else style = 'border-gray-200 bg-white opacity-60 text-gray-700'
              } else {
                style = isGreen
                  ? 'border-green-300 bg-green-50 hover:bg-green-500 hover:text-white text-green-800'
                  : 'border-red-300 bg-red-50 hover:bg-red-400 hover:text-white text-red-700'
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={gameState === 'answered'}
                  className={`py-4 rounded-xl border-2 font-bold text-base transition-all duration-150 ${style} disabled:cursor-default`}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {question.options.map((opt, idx) => {
              let style = 'border-gray-200 bg-white hover:border-primary-400 hover:bg-primary-50'
              if (gameState === 'answered') {
                if (idx === question.correctIndex) style = 'border-green-400 bg-green-50'
                else if (idx === selected && selected !== question.correctIndex)
                  style = 'border-red-400 bg-red-50'
                else style = 'border-gray-200 bg-white opacity-60'
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={gameState === 'answered'}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-150 ${style} disabled:cursor-default`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      gameState === 'answered' && idx === question.correctIndex
                        ? 'bg-green-500 text-white'
                        : gameState === 'answered' && idx === selected
                        ? 'bg-red-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm text-gray-800">{opt}</span>
                </button>
              )
            })}
          </div>
        )}
        {gameState === 'answered' && (
          <div className="mt-4 bg-primary-50 border border-primary-100 rounded-xl p-3">
            <p className="text-sm text-primary-800">{question.explanation}</p>
          </div>
        )}
        {gameState === 'answered' && (
          <div className="mt-4 text-right">
            <button onClick={handleNext} className="btn-primary">
              {current < questions.length - 1 ? u.next : u.finish}
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
