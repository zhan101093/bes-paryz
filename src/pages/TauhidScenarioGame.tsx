import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

interface Choice {
  label: string
  text: string
}

interface Scenario {
  id: number
  emoji: string
  title: string
  situation: string
  choices: Choice[]
  correctIndex: number
  explanation: string
}

const scenariosKk: Scenario[] = [
  {
    id: 1,
    emoji: '🏠',
    title: 'Тұмар',
    situation:
      'Сенің досың дерт тиіп ауырып жатыр. Анасы оны «жаман көзден сақтайды» деп тұмар тағып берді. Досың саған да сондай тұмар алуды ұсынды.',
    choices: [
      { label: 'A', text: 'Алу керек — «ешқандай зияны жоқ»' },
      { label: 'B', text: 'Бас тарту — «Ол маған ұнамайды» деп айту' },
      { label: 'C', text: 'Сыпайы бас тарту — тек Аллаhқа сенетінімді айтып, Аятул Курси оқу' },
      { label: 'D', text: 'Тұмарды алу, бірақ тақпау' },
    ],
    correctIndex: 2,
    explanation:
      'Тұмар тағу — ширкке жақын нәрсе, тек Аллаhқа сену керек. Дұрыс жол: сыпайы бас тартып, Аятул Курсиді немесе Бақара сүресінің соңғы аяттарын оқу.',
  },
  {
    id: 2,
    emoji: '💼',
    title: 'Бақсы-балгер',
    situation:
      'Отбасы ауыр жағдайда. Ана бақсыға бару керек дейді — «Ол бәрін жазады». Сен оларға ілесесің бе?',
    choices: [
      { label: 'A', text: 'Бару — анаңды ренжітпе' },
      { label: 'B', text: 'Бас тарту — «Аллаhқа дұға ет» деп ұсыну' },
      { label: 'C', text: 'Барып, бірақ сенбеу' },
      { label: 'D', text: 'Бармай, үндемеу' },
    ],
    correctIndex: 1,
    explanation:
      'Бақсыға бару — харам. Пайғамбарымыз ﷺ: «Бақсыға барған адамның намазы 40 күн қабыл болмайды» деді. Отбасыңды жақсылықпен ескерту — дұрыс жол.',
  },
  {
    id: 3,
    emoji: '📱',
    title: 'Бидғат марафон',
    situation:
      'Достарың WhatsApp-та: «Бұл хабарды 10 адамға жіберсең, Аллаh тілегіңді орындайды, жібермесең — жаман болады» деп марафон бастады.',
    choices: [
      { label: 'A', text: 'Жіберу — «Зиян тимесін»' },
      { label: 'B', text: 'Қатыспай, достарға бидғат екенін түсіндіру' },
      { label: 'C', text: 'Жіберу, бірақ сенбеу' },
      { label: 'D', text: 'Жіберіп, тілек тілеу' },
    ],
    correctIndex: 1,
    explanation:
      'Бұл — бидғат (дінде жоқ нәрсені ойлап шығару). Аллаhтың рақымы хабар жіберу санына байланысты емес. Дұрыс жол: қатыспай, достарыңа ақымақтық екенін сыпайы түрде түсіндіру.',
  },
  {
    id: 4,
    emoji: '💛',
    title: 'Рия — ниет тазалығы',
    situation:
      'Достарыңмен отырсың. Намаз уақыты келді — сен білесің. Бірақ ішіңде: «Қазір тұрсам, «намазшыл» деп ойлайды ма?» деген ой пайда болды.',
    choices: [
      { label: 'A', text: 'Достар кетсін деп күтемін — олар кемсітіп ойламасын' },
      { label: 'B', text: 'Намазыма тұрамын — бұл Аллаhтың алдындағы міндетім, адамдардың пікірі маңызды емес' },
      { label: 'C', text: 'Намазды кейінге қалдырамын — жағдай ыңғайлы болсын' },
      { label: 'D', text: 'Достарыма «намаз уақыты» деп жариялаймын — олар да оқысын' },
    ],
    correctIndex: 1,
    explanation:
      'Рия — адамдардың пікірінен қорқып ғибадатты кейінге тастау немесе олар үшін жасау. Намаз — тек Аллаh үшін, уақытында оқылады. «Адамдар не ойлайды?» деген ой ниетті бұзады.',
  },
]

const scenariosRu: Scenario[] = [
  {
    id: 1, emoji: '🏠', title: 'Амулет',
    situation: 'Твоя подруга заболела. Её мама повесила ей амулет «от сглаза». Подруга предложила тебе тоже взять такой амулет.',
    choices: [
      { label: 'A', text: 'Взять — «всё равно вреда нет»' },
      { label: 'B', text: 'Отказаться — «мне не нравится»' },
      { label: 'C', text: 'Вежливо отказаться — сказать, что уповаю на Аллаха, прочитать Аятул-Курси' },
      { label: 'D', text: 'Взять, но не носить' },
    ],
    correctIndex: 2,
    explanation: 'Ношение амулетов близко к ширку — нужно уповать только на Аллаха. Правильный путь: вежливо отказаться и прочитать Аятул-Курси или последние аяты суры Бакара.',
  },
  {
    id: 2, emoji: '💼', title: 'Колдун-предсказатель',
    situation: 'Семья в трудной ситуации. Мама говорит, что нужно сходить к колдуну — «он всё исправит». Пойдёшь с ними?',
    choices: [
      { label: 'A', text: 'Пойти — не обижай маму' },
      { label: 'B', text: 'Отказаться — предложить «молись Аллаху»' },
      { label: 'C', text: 'Пойти, но не верить' },
      { label: 'D', text: 'Не идти и молчать' },
    ],
    correctIndex: 1,
    explanation: 'Поход к колдуну — харам. Пророк ﷺ сказал: «Тот, кто ходил к колдуну, намаз того не принимается 40 дней». Правильный путь: вежливо предупредить семью.',
  },
  {
    id: 3, emoji: '📱', title: 'Бидъа-марафон',
    situation: 'Друзья в WhatsApp запустили марафон: «Перешли 10 людям — Аллах исполнит желание, не перешлёшь — будет плохо».',
    choices: [
      { label: 'A', text: 'Переслать — «вдруг плохое случится»' },
      { label: 'B', text: 'Не участвовать и объяснить друзьям, что это бидъа' },
      { label: 'C', text: 'Переслать, но не верить' },
      { label: 'D', text: 'Переслать и загадать желание' },
    ],
    correctIndex: 1,
    explanation: 'Это — бидъа (нечто придуманное в религии). Милость Аллаха не зависит от числа пересланных сообщений. Правильный путь: не участвовать и вежливо объяснить друзьям.',
  },
  {
    id: 4, emoji: '💛', title: 'Рия — чистота намерения',
    situation: 'Ты сидишь с подругами. Настало время намаза — ты знаешь об этом. Но внутри мелькнула мысль: «Если встану сейчас — они подумают, что я слишком набожная».',
    choices: [
      { label: 'A', text: 'Подожду, пока они уйдут — не хочу, чтобы смотрели' },
      { label: 'B', text: 'Встану на намаз — это моя обязанность перед Аллахом, мнение людей не важно' },
      { label: 'C', text: 'Прочитаю намаз позже — сейчас неудобно' },
      { label: 'D', text: 'Объявлю подругам «время намаза» — пусть тоже видят' },
    ],
    correctIndex: 1,
    explanation: 'Рия — откладывать или изменять поклонение из-за мнения людей. Намаз — только ради Аллаха, читается вовремя. Мысль «что они подумают?» портит намерение.',
  },
]

export function TauhidScenarioGame() {
  const { lang } = useLang()
  const scenarios = lang === 'ru' ? scenariosRu : scenariosKk
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [hearts, setHearts] = useState(3)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const scenario = scenarios[current]
  const isAnswered = selected !== null

  function handleChoice(idx: number) {
    if (isAnswered) return
    setSelected(idx)
    if (idx === scenario.correctIndex) {
      setScore((s) => s + 25)
    } else {
      setHearts((h) => Math.max(0, h - 1))
    }
  }

  function handleNext() {
    if (current < scenarios.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setGameState('result')
    }
  }

  function restart() {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setHearts(3)
    setGameState('playing')
  }

  if (gameState === 'result') {
    const pct = Math.round((score / (scenarios.length * 25)) * 100)
    const correctCount = Math.round(score / 25)
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 50 ? '⭐' : '📚'}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-amber-600 mb-2">{score} XP</p>
            <p className="text-gray-400 text-sm mb-4">
              {scenarios.length} жағдайдан {correctCount} дұрыс
            </p>
            <div className="flex justify-center mb-5">
              {pct >= 80 ? (
                <span className="bg-amber-100 border border-amber-300 text-amber-800 text-sm font-bold px-4 py-2 rounded-full">
                  🌟 Шаhадат шебері!
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
            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                🔁 ҚАЙТА ОЙНАУ
              </button>
              <Link
                to="/tauhid"
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

  const progressPct = Math.round((current / scenarios.length) * 100)

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/tauhid" className="text-sm text-amber-700 hover:text-amber-900 transition-colors">
            ← Шаhадат
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {current + 1}/{scenarios.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-amber-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{lang === 'ru' ? '🎮 Жизненные ситуации' : '🎮 Өмірлік жағдайлар'}</h1>
          <p className="text-sm text-gray-500">{lang === 'ru' ? 'Принимай правильные решения на основе шахады' : 'Шаhадат негізінде дұрыс шешім қабылда'}</p>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        <div className="flex items-center justify-between mb-5 text-sm">
          <div className="flex items-center gap-1 bg-white border border-amber-100 rounded-xl px-3 py-1.5 shadow-sm">
            <span>⭐</span>
            <span className="font-bold text-amber-600">{score} XP</span>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <span key={i} className={`text-xl ${i < hearts ? '' : 'opacity-20'}`}>
                ❤️
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border-2 border-amber-200 px-6 py-6 mb-5">
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">{scenario.emoji}</div>
            <h2 className="text-lg font-bold text-gray-900">{scenario.title}</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed mb-5 bg-amber-50 rounded-xl p-3 border border-amber-100">
            {scenario.situation}
          </p>

          <div className="flex flex-col gap-2">
            {scenario.choices.map((choice, idx) => {
              let style = 'border-gray-200 bg-white hover:border-amber-400 hover:bg-amber-50'
              if (isAnswered) {
                if (idx === scenario.correctIndex) style = 'border-green-400 bg-green-50'
                else if (idx === selected) style = 'border-red-400 bg-red-50'
                else style = 'border-gray-100 bg-white opacity-50'
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleChoice(idx)}
                  disabled={isAnswered}
                  className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-150 ${style} disabled:cursor-default`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      isAnswered && idx === scenario.correctIndex
                        ? 'bg-green-500 text-white'
                        : isAnswered && idx === selected
                        ? 'bg-red-400 text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {choice.label}
                  </span>
                  <span className="text-sm text-gray-800">{choice.text}</span>
                </button>
              )
            })}
          </div>

          {isAnswered && (
            <div
              className={`mt-4 rounded-xl px-4 py-3 border ${
                selected === scenario.correctIndex
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <p
                className={`text-sm font-bold mb-1 ${
                  selected === scenario.correctIndex ? 'text-green-800' : 'text-red-700'
                }`}
              >
                {selected === scenario.correctIndex ? '🌟 ДҰРЫС!' : '❌ ҚАТЕ'}
              </p>
              <p className="text-sm text-gray-600">{scenario.explanation}</p>
            </div>
          )}
        </div>

        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            {current < scenarios.length - 1 ? 'Келесі →' : '🏆 НӘТИЖЕНІ КӨР'}
          </button>
        )}

        <div className="h-8" />
      </div>
    </main>
  )
}
