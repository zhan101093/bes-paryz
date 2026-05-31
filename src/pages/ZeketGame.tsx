import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const questionsKk = [
  {
    id: 1,
    question: 'Зекеттің негізгі мақсаты қайсы?',
    options: [
      'Бай адамның беделін көтеру',
      'Қоғамдағы бай мен кедей арасын теңестіру және жүректі тазарту',
      'Тек ақша жинау',
      'Мерекеде тарату',
    ],
    correctIndex: 1,
    explanation: 'Зекет жүректі тазартады және қоғамдағы теңсіздікті азайтады.',
  },
  {
    id: 2,
    question: 'Зекет неліктен тек байлары бар адамдарға міндетті?',
    options: [
      'Себебі олар көбірек еңбек етеді',
      'Себебі олар ақша жинауы керек',
      'Себебі олардың артық байлығы бар және қоғамға көмектесе алады',
      'Себебі зекет тек Рамазанда беріледі',
    ],
    correctIndex: 2,
    explanation: 'Байлықтың артығы қоғамға қайтарылады — бұл Исламдағы әділдік принципі.',
  },
  {
    id: 3,
    question: 'Нисаб мөлшері нені білдіреді?',
    options: [
      'Зекеттің берілетін күні',
      'Зекет берілетін адамдар тізімі',
      'Зекет парыз болу үшін жетуі керек минималды байлық мөлшері',
      'Садақа түрі',
    ],
    correctIndex: 2,
    explanation: 'Нисаб — зекет парыз болу үшін жету керек ең аз байлық мөлшері.',
  },
  {
    id: 4,
    question: 'Егер адамның байлығы нисабтан аз болса не болады?',
    options: [
      'Міндетті түрде зекет береді',
      'Садақа береді, бірақ зекет парыз болмайды',
      'Қарыз алады',
      'Ештеңе болмайды',
    ],
    correctIndex: 1,
    explanation: 'Нисабқа жетпесе зекет парыз болмайды, бірақ садақа беруге болады.',
  },
  {
    id: 5,
    question: 'Төмендегі қайсысы зекетке жатпайды?',
    options: [
      'Ақша',
      'Алтын',
      'Сауда тауарлары',
      'Күнделікті қолданатын киім (жеке қажеттілік)',
    ],
    correctIndex: 3,
    explanation: 'Жеке пайдалануға арналған заттар зекет есебіне кірмейді.',
  },
  {
    id: 6,
    question: 'Қой саны бойынша зекет ережесінде дұрыс жауап қайсы?',
    options: [
      '10 қой = 1 қой зекет',
      '40 қой = 1 қой зекет',
      '100 қой = 10 қой',
      'Қойдан зекет берілмейді',
    ],
    correctIndex: 1,
    explanation: '40 қойдан 1 қой зекет беріледі — мал зекетінің негізгі ережесі.',
  },
  {
    id: 7,
    question: 'Зекет берудің ең дұрыс ниеті қандай?',
    options: [
      'Адамдар мақтауы үшін',
      'Қоғамда жақсы көріну үшін',
      'Алла разылығы үшін және жүректі тазарту үшін',
      'Салықтан құтылу үшін',
    ],
    correctIndex: 2,
    explanation: 'Ниет — барлық ғибадаттың негізі. Зекетті тек Алла разылығы үшін беру керек.',
  },
  {
    id: 8,
    question: 'Зекет берілген кезде ең маңызды әдеп қайсы?',
    options: [
      'Дауыстап айту',
      'Ренжітіп беру',
      'Міндетсіну',
      'Жасырын және сыйластықпен беру',
    ],
    correctIndex: 3,
    explanation: 'Зекетті жасырын және сыйластықпен беру — ең жақсы әдеп.',
  },
  {
    id: 9,
    question: 'Төмендегі жағдайлардың қайсысында зекет берілмейді?',
    options: [
      'Қарызы бар адам',
      'Мұқтаж адам',
      'Өте бай адам (нисабтан жоғары)',
      'Жетім бала',
    ],
    correctIndex: 2,
    explanation: 'Зекет бай адамға берілмейді — байлығы нисабтан жоғары адамның өзі зекет беруі тиіс.',
  },
  {
    id: 10,
    question: 'Зекет берілсе қоғамда не өзгереді?',
    options: [
      'Байлар көбейеді',
      'Кедейлік пен байлық теңгерімі жақсарады және мейірім артады',
      'Ақша азаяды',
      'Ештеңе өзгермейді',
    ],
    correctIndex: 1,
    explanation: 'Зекет берілсе қоғамдағы теңсіздік азаяды, ынтымақ пен мейірім артады.',
  },
]

const questionsRu = [
  { id: 1, question: 'Какова главная цель закята?', options: ['Повысить репутацию богатого', 'Выровнять разрыв между богатыми и бедными, очистить сердце', 'Только копить деньги', 'Раздавать на праздниках'], correctIndex: 1, explanation: 'Закят очищает сердце и сокращает неравенство в обществе.' },
  { id: 2, question: 'Почему закят обязателен только для имущих?', options: ['Потому что они больше трудятся', 'Потому что им надо копить деньги', 'Потому что у них есть излишек, которым они могут помочь обществу', 'Потому что закят даётся только в Рамадан'], correctIndex: 2, explanation: 'Излишек богатства возвращается обществу — это принцип справедливости в исламе.' },
  { id: 3, question: 'Что означает нисаб?', options: ['День выплаты закята', 'Список получателей закята', 'Минимальный размер имущества, при котором закят становится обязательным', 'Вид садаки'], correctIndex: 2, explanation: 'Нисаб — минимальный размер имущества, при котором закят становится обязательным.' },
  { id: 4, question: 'Что происходит, если имущество меньше нисаба?', options: ['Всё равно обязан дать закят', 'Даёт садаку, но закят не обязателен', 'Берёт в долг', 'Ничего не происходит'], correctIndex: 1, explanation: 'Если ниже нисаба — закят не обязателен, но садаку давать можно.' },
  { id: 5, question: 'Что из следующего не относится к объекту закята?', options: ['Деньги', 'Золото', 'Торговые товары', 'Одежда для личного пользования'], correctIndex: 3, explanation: 'Вещи для личного пользования не входят в расчёт закята.' },
  { id: 6, question: 'Какое правило закята для овец?', options: ['10 овец = 1 овца закята', '40 овец = 1 овца закята', '100 овец = 10 овец', 'С овец закят не берётся'], correctIndex: 1, explanation: 'С 40 овец берётся 1 овца закята — основное правило закята со скота.' },
  { id: 7, question: 'Какое намерение правильно для закята?', options: ['Чтобы люди хвалили', 'Чтобы выглядеть хорошо в обществе', 'Ради довольства Аллаха и очищения сердца', 'Чтобы избежать налогов'], correctIndex: 2, explanation: 'Намерение — основа всех поклонений. Закят нужно давать только ради Аллаха.' },
  { id: 8, question: 'Какой главный этикет при выплате закята?', options: ['Говорить громко', 'Давать с обидой', 'Обязывать получателя', 'Давать скромно и с уважением'], correctIndex: 3, explanation: 'Давать закят скромно и с уважением — лучший этикет.' },
  { id: 9, question: 'В каком из следующих случаев закят не даётся?', options: ['Должнику', 'Нуждающемуся', 'Очень богатому человеку (выше нисаба)', 'Сироте'], correctIndex: 2, explanation: 'Богатому закят не даётся — у него самого имущество выше нисаба, он сам обязан платить.' },
  { id: 10, question: 'Что меняется в обществе при выплате закята?', options: ['Богатых становится больше', 'Баланс бедности и богатства улучшается, доброта растёт', 'Денег становится меньше', 'Ничего не меняется'], correctIndex: 1, explanation: 'Закят сокращает неравенство в обществе, растёт единство и доброта.' },
]

type GameState = 'start' | 'playing' | 'feedback' | 'result'

interface RankInfo {
  label: string
  color: string
  bg: string
  emoji: string
}

function getRankKk(score: number): RankInfo {
  if (score >= 145) return { label: 'Зекет шебері', emoji: '👑', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-300' }
  if (score >= 80) return { label: 'Ғалым', emoji: '🕌', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-300' }
  if (score >= 50) return { label: 'Оқушы', emoji: '📘', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-300' }
  return { label: 'Жаңадан бастаушы', emoji: '🌱', color: 'text-gray-600', bg: 'bg-gray-50 border-gray-300' }
}

function getRankRu(score: number): RankInfo {
  if (score >= 145) return { label: 'Мастер закята', emoji: '👑', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-300' }
  if (score >= 80) return { label: 'Знаток', emoji: '🕌', color: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-300' }
  if (score >= 50) return { label: 'Ученик', emoji: '📘', color: 'text-blue-700', bg: 'bg-blue-50 border-blue-300' }
  return { label: 'Начинающий', emoji: '🌱', color: 'text-gray-600', bg: 'bg-gray-50 border-gray-300' }
}

export function ZeketGame() {
  const { lang } = useLang()
  const questions = lang === 'ru' ? questionsRu : questionsKk
  const getRank = lang === 'ru' ? getRankRu : getRankKk
  const [gameState, setGameState] = useState<GameState>('start')
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [lives, setLives] = useState(3)
  const [correctCount, setCorrectCount] = useState(0)
  const [showSparkle, setShowSparkle] = useState(false)
  const prevMilestone = useRef(0)

  const question = questions[current]
  const progressPct = Math.round((current / questions.length) * 100)

  useEffect(() => {
    const milestones = [25, 50, 75, 100]
    const hit = milestones.find(m => prevMilestone.current < m && progressPct >= m)
    if (hit !== undefined) {
      setShowSparkle(true)
      const t = setTimeout(() => setShowSparkle(false), 1200)
      prevMilestone.current = hit
      return () => clearTimeout(t)
    }
  }, [progressPct])

  function startGame() {
    setCurrent(0)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setLives(3)
    setCorrectCount(0)
    setSelected(null)
    prevMilestone.current = 0
    setGameState('playing')
  }

  function handleAnswer(idx: number) {
    if (gameState !== 'playing') return
    const correct = idx === question.correctIndex
    setSelected(idx)
    setIsCorrect(correct)

    if (correct) {
      const newStreak = streak + 1
      const streakBonus = newStreak >= 2 ? 5 : 0
      setScore(s => s + 10 + streakBonus)
      setStreak(newStreak)
      setMaxStreak(ms => Math.max(ms, newStreak))
      setCorrectCount(c => c + 1)
    } else {
      setStreak(0)
      setLives(l => l - 1)
    }

    setGameState('feedback')
  }

  function handleNext() {
    const isLast = current >= questions.length - 1

    if (isLast) {
      setGameState('result')
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setGameState('playing')
    }
  }

  const streakBadge =
    streak >= 5
      ? lang === 'ru' ? '🔥🔥🔥 Режим мастера закята!' : '🔥🔥🔥 Зекет шебері режимі!'
      : streak >= 3
      ? lang === 'ru' ? '🔥🔥 Ты в огне!' : '🔥🔥 Алаулап тұрсың!'
      : streak >= 1
      ? '🔥'
      : null

  // ── START SCREEN ────────────────────────────────────────────────
  if (gameState === 'start') {
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full text-center">
          <Link
            to="/zeket"
            className="inline-flex items-center gap-1 text-sm text-emerald-700 hover:text-emerald-900 mb-8 transition-colors"
          >
            {lang === 'ru' ? '← Закят' : '← Зекет'}
          </Link>

          <div className="relative bg-white rounded-3xl shadow-xl border border-amber-200 px-8 py-10 overflow-hidden">
            {/* Floating sparkles */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute text-amber-300 animate-bounce pointer-events-none select-none text-lg"
                style={{
                  left: `${12 + i * 14}%`,
                  top: `${8 + (i % 3) * 25}%`,
                  animationDelay: `${i * 0.35}s`,
                  animationDuration: `${1.8 + i * 0.4}s`,
                  opacity: 0.45,
                }}
              >
                ✨
              </span>
            ))}

            <div className="relative">
              <div className="text-6xl mb-4">💰</div>
              <h1 className="text-2xl font-bold text-amber-800 mb-1">{lang === 'ru' ? 'МАСТЕР ЗАКЯТА' : 'ЗЕКЕТ ШЕБЕРІ'}</h1>
              <p className="text-sm text-gray-500 mb-6">{lang === 'ru' ? 'Проверь свои знания' : 'Біліміңді тексер'}</p>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-left mb-6 space-y-1.5 text-sm text-gray-600">
                <p>🎯 {lang === 'ru' ? '10 вопросов · 4 варианта' : '10 сұрақ · 4 нұсқа'}</p>
                <p>❤️ {lang === 'ru' ? '3 жизни' : '3 өмір'}</p>
                <p>⭐ {lang === 'ru' ? 'Правильный ответ: +10 очков' : 'Дұрыс жауап: +10 балл'}</p>
              </div>

              <button
                onClick={startGame}
                className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 animate-pulse"
              >
                {lang === 'ru' ? '▶ НАЧАТЬ' : '▶ БАСТАУ'}
              </button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ── RESULT SCREEN ───────────────────────────────────────────────
  if (gameState === 'result') {
    const rank = getRank(score)
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200 px-8 py-10 text-center">
            <div className="text-6xl mb-4 animate-bounce">🏆</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{lang === 'ru' ? 'РЕЗУЛЬТАТ' : 'НӘТИЖЕ'}</h2>
            <p className="text-5xl font-bold text-amber-600 mb-1">{score}</p>
            <p className="text-gray-400 text-xs mb-5">{lang === 'ru' ? 'очков набрано' : 'балл жиналды'}</p>

            <div className={`inline-flex items-center gap-2 rounded-2xl border px-6 py-3 mb-6 ${rank.bg}`}>
              <span className="text-2xl">{rank.emoji}</span>
              <span className={`text-lg font-bold ${rank.color}`}>{rank.label}</span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-emerald-50 rounded-2xl p-3">
                <p className="text-2xl font-bold text-emerald-700">{correctCount}</p>
                <p className="text-xs text-gray-500">{lang === 'ru' ? 'Верно' : 'Дұрыс'}</p>
              </div>
              <div className="bg-amber-50 rounded-2xl p-3">
                <p className="text-2xl font-bold text-amber-700">{maxStreak}</p>
                <p className="text-xs text-gray-500">Max streak</p>
              </div>
              <div className="bg-rose-50 rounded-2xl p-3">
                <p className="text-2xl font-bold text-rose-700">{3 - lives}</p>
                <p className="text-xs text-gray-500">{lang === 'ru' ? 'Ошибки' : 'Қате'}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={startGame}
                className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                {lang === 'ru' ? '🔁 ИГРАТЬ СНОВА' : '🔁 ҚАЙТА ОЙНАУ'}
              </button>
              <Link
                to="/zeket-quiz"
                className="w-full block bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold py-3 rounded-2xl text-center hover:bg-emerald-100 transition-colors"
              >
                {lang === 'ru' ? '➡ СЛЕДУЮЩИЙ МОДУЛЬ' : '➡ КЕЛЕСІ МОДУЛЬ'}
              </Link>
              <Link
                to="/zeket"
                className="w-full block bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl text-center hover:bg-gray-100 transition-colors"
              >
                {lang === 'ru' ? '🏠 НА ГЛАВНУЮ' : '🏠 БАСТЫ БЕТКЕ'}
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ── QUIZ SCREEN ─────────────────────────────────────────────────
  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-emerald-50 px-4 py-6">
      <div className="max-w-lg mx-auto">

        {/* HUD */}
        <div className="flex items-center justify-between mb-4 bg-white rounded-2xl px-4 py-3 shadow border border-amber-100">
          <div className="text-center">
            <p className="text-xs text-gray-400">{lang === 'ru' ? 'Очки' : 'Ұпай'}</p>
            <p className="text-base font-bold text-amber-600">⭐ {score}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">Streak</p>
            <p className="text-base font-bold text-orange-500">🔥 {streak}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">{lang === 'ru' ? 'Вопрос' : 'Сұрақ'}</p>
            <p className="text-base font-bold text-emerald-700">{current + 1}/10</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400">{lang === 'ru' ? 'Жизни' : 'Өмір'}</p>
            <p className="text-base">
              {Array.from({ length: lives }).fill('❤️').join('')}
              {Array.from({ length: 3 - lives }).fill('🖤').join('')}
            </p>
          </div>
        </div>

        {/* Streak badge */}
        {streakBadge && streakBadge.length > 2 && gameState === 'playing' && (
          <p className="text-center text-sm font-bold text-orange-500 mb-2 animate-pulse">
            {streakBadge}
          </p>
        )}

        {/* Progress bar */}
        <div className="relative mb-4">
          <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-500 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          {showSparkle && (
            <span className="absolute -right-1 -top-5 text-xl animate-bounce">✨</span>
          )}
        </div>

        {/* Question card */}
        <div
          className={`bg-white rounded-3xl shadow-lg border-2 transition-all duration-200 px-6 py-6 ${
            gameState === 'feedback' && isCorrect
              ? 'border-emerald-400 shadow-emerald-100'
              : gameState === 'feedback' && !isCorrect
              ? 'border-red-400 shadow-red-100'
              : 'border-amber-200'
          }`}
        >
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {lang === 'ru' ? `Вопрос ${question.id}` : `${question.id}-сұрақ`}
          </span>
          <h2 className="text-base font-semibold text-gray-900 mt-2 mb-5">{question.question}</h2>

          <div className="flex flex-col gap-2">
            {question.options.map((opt, idx) => {
              let containerStyle =
                'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50'
              let badgeStyle = 'bg-gray-100 text-gray-500'

              if (gameState === 'feedback') {
                if (idx === question.correctIndex) {
                  containerStyle = 'border-emerald-400 bg-emerald-50'
                  badgeStyle = 'bg-emerald-500 text-white'
                } else if (idx === selected) {
                  containerStyle = 'border-red-400 bg-red-50'
                  badgeStyle = 'bg-red-400 text-white'
                } else {
                  containerStyle = 'border-gray-200 bg-white opacity-50'
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={gameState === 'feedback'}
                  className={`flex items-center gap-3 p-3 rounded-2xl border-2 text-left transition-all duration-150 ${containerStyle} disabled:cursor-default`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-colors ${badgeStyle}`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm text-gray-800">{opt}</span>
                </button>
              )
            })}
          </div>

          {/* Feedback pop-up */}
          {gameState === 'feedback' && (
            <div
              className={`mt-4 rounded-2xl p-4 border ${
                isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{isCorrect ? '🌟' : '❌'}</span>
                <div>
                  <p
                    className={`font-bold text-sm mb-0.5 ${
                      isCorrect ? 'text-emerald-800' : 'text-red-700'
                    }`}
                  >
                    {isCorrect ? (lang === 'ru' ? 'ВЕРНО!' : 'ДҰРЫС!') : (lang === 'ru' ? 'НЕВЕРНО' : 'ҚАТЕ')}
                  </p>
                  {isCorrect ? (
                    <p className="text-xs text-emerald-700">+10 балл</p>
                  ) : (
                    <p className="text-xs text-red-600">
                      {lang === 'ru' ? 'Правильный ответ:' : 'Дұрыс жауап:'} {question.options[question.correctIndex]}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{question.explanation}</p>
                </div>
              </div>

              <button
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold py-2.5 rounded-xl text-sm shadow hover:shadow-md transition-all"
              >
                {current < questions.length - 1 ? (lang === 'ru' ? 'Далее →' : 'Келесі →') : (lang === 'ru' ? 'Результат →' : 'Нәтижені көру →')}
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
