import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

const scenariosKk = [
  {
    id: 1,
    icon: '💧',
    setup: 'Шетелдесің. Рамазан айы. Жұмыстан кейін қатты шаршап, сусадың. Әріптестерің су ішуге шақырды. Сен оразасың.',
    options: [
      { text: 'Азғантай су ішемін, досымды ренжітпеу үшін', correct: false },
      { text: 'Оразамын деп сабыр етемін, Алладан көмек сұраймын', correct: true },
      { text: 'Оразамды ашамын, шаршадым', correct: false },
      { text: 'Сөйлесуді тоқтатамын', correct: false },
    ],
    feedback: 'Сусасаң да сабыр ету — оразаның мәні. Алла сабырлыларды жақсы көреді.',
  },
  {
    id: 2,
    icon: '😮',
    setup: 'Көшеде келе жатып, абайсызда су жұтып қойдың. Дереу есіңе түсті.',
    options: [
      { text: 'Оразам бұзылды деп тамақ жеймін', correct: false },
      { text: 'Дереу тоқтап, оразамды жалғастырамын', correct: true },
      { text: 'Қорқып, дұға етемін', correct: false },
      { text: 'Өзімді кінәлаймын', correct: false },
    ],
    feedback: 'Ұмытып ішу оразаны бұзбайды! Есіңе түскенде тоқтатып, жалғастыру керек.',
  },
  {
    id: 3,
    icon: '🗣️',
    setup: 'Достарың ғайбат сөйлей бастады. Сен де бірдеңе айтқың келеді, бірақ оразасың.',
    options: [
      { text: 'Олармен бірге сөйлесемін', correct: false },
      { text: 'Оларды тоқтатуға тырысамын немесе ол жерден кетемін', correct: true },
      { text: 'Үндемей тыңдаймын', correct: false },
      { text: 'Күлемін', correct: false },
    ],
    feedback: 'Ораза тілді де тазартады. Ғайбаттан аулақ болу — оразаның рухын сақтау.',
  },
  {
    id: 4,
    icon: '🦷',
    setup: 'Тісің қатты ауырды, бірақ әлі ауыз ашарға ерте.',
    options: [
      { text: 'Сабыр етіп, ешкімге айтпаймын', correct: false },
      { text: 'Тіс дәрігеріне барамын, су жұтудан сақтанамын', correct: true },
      { text: 'Оразамды ашып, дәрі ішемін', correct: false },
      { text: 'Дәрігерді күтемін', correct: false },
    ],
    feedback: 'Төтенше жағдайда дәрігерге бару рұқсат. Ем кезінде судан аулақ болу жеткілікті.',
  },
  {
    id: 5,
    icon: '😴',
    setup: 'Ұйықтап жатып, ұмытып су ішіп қойдың, сосын ораза екенің есіңе түсті.',
    options: [
      { text: 'Тамақ жеймін, бәрібір бұзылды', correct: false },
      { text: 'Аузымды бекітіп, оразамды жалғастырамын', correct: true },
      { text: 'Дұға етемін', correct: false },
      { text: 'Ойын ойнаймын', correct: false },
    ],
    feedback: 'Ұмытып ішу оразаны бұзбайды — бұл Алланың берген нығметі. Жалғастыру керек!',
  },
  {
    id: 6,
    icon: '🕌',
    setup: 'Рамазан айында тарауих намазына барғың келеді, бірақ жұмысың көп.',
    options: [
      { text: 'Жұмысты бітіріп, үйде намаз оқимын', correct: false },
      { text: 'Жұмысты қалдырып, мешітке барамын', correct: false },
      { text: 'Жұмысты бітіріп, үлгерсем мешітке, болмаса үйде оқимын', correct: true },
      { text: 'Ойын ойнаймын', correct: false },
    ],
    feedback: 'Жұмыс міндетін орындап, мүмкіндік болса мешітке бару — ең дұрыс шешім. Намаз кем дегенде үйде оқылуы керек.',
  },
]

const scenariosRu = [
  {
    id: 1, icon: '💧',
    setup: 'Ты за границей. Месяц Рамадан. После работы очень устала и хочешь пить. Коллеги позвали выпить воды. Ты держишь пост.',
    options: [
      { text: 'Выпью немного, чтобы не обидеть', correct: false },
      { text: 'Держу пост — терплю, прошу помощи у Аллаха', correct: true },
      { text: 'Нарушу пост — устала', correct: false },
      { text: 'Прекращу разговор', correct: false },
    ],
    feedback: 'Терпеть жажду — это суть поста. Аллах любит терпеливых.',
  },
  {
    id: 2, icon: '😮',
    setup: 'Идёшь по улице и случайно проглотила воду. Тут же вспомнила, что держишь пост.',
    options: [
      { text: 'Раз нарушила — буду есть', correct: false },
      { text: 'Немедленно останавливаюсь и продолжаю пост', correct: true },
      { text: 'Испугалась, молюсь', correct: false },
      { text: 'Виню себя', correct: false },
    ],
    feedback: 'Случайное проглатывание не нарушает пост! Когда вспомнишь — остановись и продолжай.',
  },
  {
    id: 3, icon: '🗣️',
    setup: 'Друзья начали сплетничать. Тебе тоже хочется что-то сказать, но ты держишь пост.',
    options: [
      { text: 'Разговариваю с ними', correct: false },
      { text: 'Стараюсь остановить их или ухожу', correct: true },
      { text: 'Молча слушаю', correct: false },
      { text: 'Смеюсь', correct: false },
    ],
    feedback: 'Пост очищает и язык. Держаться подальше от сплетен — значит хранить дух поста.',
  },
  {
    id: 4, icon: '🦷',
    setup: 'Сильно болит зуб, а до ифтара ещё далеко.',
    options: [
      { text: 'Терплю и никому не говорю', correct: false },
      { text: 'Иду к стоматологу, остерегаясь проглотить воду', correct: true },
      { text: 'Нарушаю пост и принимаю лекарство', correct: false },
      { text: 'Жду врача', correct: false },
    ],
    feedback: 'В экстренной ситуации поход к врачу разрешён. Достаточно держаться от воды во время лечения.',
  },
  {
    id: 5, icon: '😴',
    setup: 'Проснулась во сне и случайно выпила воды — потом вспомнила, что держишь пост.',
    options: [
      { text: 'Буду есть — всё равно нарушила', correct: false },
      { text: 'Закрываю рот и продолжаю пост', correct: true },
      { text: 'Молюсь', correct: false },
      { text: 'Играю', correct: false },
    ],
    feedback: 'Случайное питьё не нарушает пост — это дар Аллаха. Нужно продолжать!',
  },
  {
    id: 6, icon: '🕌',
    setup: 'В Рамадан хочешь сходить на Таравих, но много работы.',
    options: [
      { text: 'Закончу работу и дома прочитаю намаз', correct: false },
      { text: 'Брошу работу и пойду в мечеть', correct: false },
      { text: 'Закончу работу — успею в мечеть, нет — дома прочитаю', correct: true },
      { text: 'Поиграю', correct: false },
    ],
    feedback: 'Выполнить обязанность по работе и, если получится, пойти в мечеть — лучшее решение. Намаз минимум дома надо прочитать.',
  },
]

export function OrazaScenarioGame() {
  const { lang } = useLang()
  const scenarios = lang === 'ru' ? scenariosRu : scenariosKk
  const [currentIdx, setCurrentIdx] = useState(0)
  const [sabr, setSabr] = useState(0)
  const [score, setScore] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const scenario = scenarios[currentIdx]
  const totalSabr = scenarios.length

  const ui = {
    back: lang === 'ru' ? '← Пост' : '← Ораза',
    title: lang === 'ru' ? '🎭 Ситуации во время поста' : '🎭 Оразадағы ситуациялар',
    subtitle: lang === 'ru' ? 'Принимай правильные решения' : 'Ситуацияда дұрыс шешім қабылда',
    sabrMeter: lang === 'ru' ? 'Шкала терпения' : 'Сабыр өлшегіші',
    result: lang === 'ru' ? 'РЕЗУЛЬТАТ' : 'НӘТИЖЕ',
    correct: (c: number, t: number) => lang === 'ru' ? `${c}/${t} правильно` : `${c}/${t} дұрыс`,
    congrats: lang === 'ru' ? '✨ Духовная чистота достигнута!' : '✨ Рухани тазалық жетті!',
    replay: lang === 'ru' ? '🔁 ИГРАТЬ СНОВА' : '🔁 ҚАЙТА ОЙНАУ',
    home: lang === 'ru' ? '🏠 НА ГЛАВНУЮ' : '🏠 БАСТЫ БЕТКЕ',
    right: lang === 'ru' ? '🌟 ВЕРНО!' : '🌟 ДҰРЫС!',
    wrong: lang === 'ru' ? '❌ НЕВЕРНО' : '❌ ҚАТЕ',
  }

  function handleSelect(optionIdx: number) {
    if (selectedOption !== null) return
    setSelectedOption(optionIdx)
    const isCorrect = scenario.options[optionIdx].correct
    const newResults = [...results, isCorrect]
    setResults(newResults)
    if (isCorrect) {
      setScore((s) => s + 10)
      setSabr((s) => Math.min(s + 1, totalSabr))
    }

    setTimeout(() => {
      setSelectedOption(null)
      if (currentIdx >= scenarios.length - 1) {
        setGameState('result')
      } else {
        setCurrentIdx((i) => i + 1)
      }
    }, 1600)
  }

  function restart() {
    setCurrentIdx(0)
    setSabr(0)
    setScore(0)
    setResults([])
    setSelectedOption(null)
    setGameState('playing')
  }

  if (gameState === 'result') {
    const allCorrect = results.every(Boolean)
    const correctCount = results.filter(Boolean).length
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">{allCorrect ? '🏆' : '🌙'}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{ui.result}</h2>
            <p className="text-5xl font-bold text-violet-600 mb-1">{score}</p>

            {/* Sabr meter */}
            <div className="flex justify-center gap-1 my-4">
              {Array.from({ length: totalSabr }).map((_, i) => (
                <span
                  key={i}
                  className={`text-2xl transition-all ${i < sabr ? 'opacity-100' : 'opacity-20'}`}
                >
                  🤍
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mb-4">{ui.sabrMeter}</p>

            {allCorrect ? (
              <div className="bg-violet-50 border border-violet-200 rounded-2xl px-4 py-3 mb-6">
                <p className="text-violet-800 font-bold">{ui.congrats}</p>
              </div>
            ) : (
              <p className="text-gray-400 text-sm mb-6">{ui.correct(correctCount, scenarios.length)}</p>
            )}

            <div className="space-y-3 mb-6 text-left">
              {scenarios.map((s, i) => {
                const ok = results[i] ?? false
                const correctOption = s.options.find((o) => o.correct)
                return (
                  <div
                    key={s.id}
                    className={`rounded-xl p-3 border text-sm ${
                      ok ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{s.icon}</span>
                      <p className="font-medium text-gray-800 text-xs leading-snug">{s.setup}</p>
                    </div>
                    <p
                      className={`text-xs font-medium ${
                        ok ? 'text-emerald-600' : 'text-red-500'
                      }`}
                    >
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
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                {ui.replay}
              </button>
              <Link
                to="/oraza"
                className="w-full block bg-gray-50 border border-gray-200 text-gray-600 font-semibold py-3 rounded-2xl text-center hover:bg-gray-100 transition-colors"
              >
                {ui.home}
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/oraza" className="text-sm text-violet-700 hover:text-violet-900 transition-colors">
            {ui.back}
          </Link>
          <span className="text-sm text-gray-500 font-medium">
            {currentIdx + 1}/{scenarios.length}
          </span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-violet-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{ui.title}</h1>
          <p className="text-sm text-gray-500">{ui.subtitle}</p>
        </div>

        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500"
            style={{ width: `${(currentIdx / scenarios.length) * 100}%` }}
          />
        </div>

        {/* Sabr meter */}
        <div className="flex items-center justify-center gap-1 mb-5">
          {Array.from({ length: totalSabr }).map((_, i) => (
            <span
              key={i}
              className={`text-xl transition-all duration-300 ${
                i < sabr ? 'opacity-100 scale-110' : 'opacity-20'
              }`}
            >
              🤍
            </span>
          ))}
          <span className="ml-2 text-xs text-gray-400 font-medium">{ui.sabrMeter}</span>
        </div>

        {/* Scenario card */}
        <div className="bg-white rounded-3xl shadow-lg border-2 border-violet-200 px-6 py-6 mb-4">
          <div className="text-5xl text-center mb-4">{scenario.icon}</div>
          <p className="text-sm font-bold text-gray-900 mb-6 leading-relaxed text-center">
            {scenario.setup}
          </p>

          <div className="flex flex-col gap-2">
            {scenario.options.map((option, idx) => {
              const isSelected = selectedOption === idx
              const showResult = selectedOption !== null

              let btnClass =
                'bg-white border-2 border-violet-200 text-gray-800 hover:border-violet-400 hover:bg-violet-50'
              if (showResult) {
                if (isSelected && option.correct) {
                  btnClass = 'bg-emerald-50 border-2 border-emerald-400 text-emerald-800 font-bold'
                } else if (isSelected && !option.correct) {
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
                  {showResult && isSelected && option.correct && <span className="float-right">✅</span>}
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
                  ? 'bg-emerald-50 border-emerald-300'
                  : 'bg-red-50 border-red-300'
              }`}
            >
              <p
                className={`font-bold mb-1 ${
                  scenario.options[selectedOption].correct
                    ? 'text-emerald-800'
                    : 'text-red-700'
                }`}
              >
                {scenario.options[selectedOption].correct ? ui.right : ui.wrong}
              </p>
              <p className="text-gray-600 text-xs">{scenario.feedback}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
