import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

interface Card {
  id: number
  name: string
  emoji: string
  inBasket: boolean
  hint: string
}

const cardsKk: Card[] = [
  {
    id: 1,
    name: 'Ұмытып ішіп-жеу',
    emoji: '💧',
    inBasket: true,
    hint: 'Ұмытып ішу — кешіріледі. Есіне түскенде тоқтату керек.',
  },
  {
    id: 2,
    name: 'Әдейілеп ішіп-жеу',
    emoji: '🍔',
    inBasket: false,
    hint: 'Әдейілеп ішіп-жеу оразаны бұзады және қазасын ұстау керек.',
  },
  {
    id: 3,
    name: 'Түкірік жұту',
    emoji: '💦',
    inBasket: true,
    hint: 'Ауызішіндегі түкіріктің өзін жұту оразаны бұзбайды.',
  },
  {
    id: 4,
    name: 'Шылым шегу',
    emoji: '🚬',
    inBasket: false,
    hint: 'Шылым шегу — оразаны бұзады.',
  },
  {
    id: 5,
    name: 'Душқа түсу',
    emoji: '🚿',
    inBasket: true,
    hint: 'Душқа түсу, шомылу оразаны бұзбайды (су мұрынға кетпесе).',
  },
  {
    id: 6,
    name: 'Көзге тамызу',
    emoji: '👁️',
    inBasket: true,
    hint: 'Көзге тамшы тамызу оразаны бұзбайды — асқазанға жетпейді.',
  },
  {
    id: 7,
    name: 'Укол салу',
    emoji: '💉',
    inBasket: true,
    hint: 'Укол салу оразаны бұзбайды.',
  },
  {
    id: 8,
    name: 'Тіс пастасы қолдану',
    emoji: '🪥',
    inBasket: true,
    hint: 'Тіс пастасын жұтып қоймаса — оразаны бұзбайды.',
  },
  {
    id: 9,
    name: 'Әдейілеп құсу',
    emoji: '🤢',
    inBasket: false,
    hint: 'Әдейілеп құсу оразаны бұзады.',
  },
  {
    id: 10,
    name: 'Тісті емдеу',
    emoji: '🦷',
    inBasket: true,
    hint: 'Тісті жұлдыру, емдеу оразаны бұзбайды (қан немесе суды жұтып қоймаса).',
  },
  {
    id: 11,
    name: 'Қан алдыру',
    emoji: '🩺',
    inBasket: true,
    hint: 'Тексеру үшін қан алдыру оразаны бұзбайды.',
  },
  {
    id: 12,
    name: 'Тамақ иісін сезу',
    emoji: '👃',
    inBasket: true,
    hint: 'Тамақ иісін иіскеу немесе сезу оразаны бұзбайды.',
  },
  {
    id: 13,
    name: 'Мұрынға дәрі тамызу',
    emoji: '💊',
    inBasket: false,
    hint: 'Мұрынға тамызылған дәрінің асқазанға жетуі оразаны бұзады.',
  },
  {
    id: 14,
    name: 'Оттегі маскасын кию',
    emoji: '😮',
    inBasket: true,
    hint: 'Жедел жәрдем ретіндегі оттегі маскасы оразаны бұзбайды.',
  },
  {
    id: 15,
    name: 'Крем жағу',
    emoji: '🧴',
    inBasket: true,
    hint: 'Денеге крем немесе мазь жағу оразаны бұзбайды.',
  },
  {
    id: 16,
    name: 'Шаршап ұйықтау',
    emoji: '😴',
    inBasket: true,
    hint: 'Шаршағандықтан ұйықтау оразаны бұзбайды.',
  },
  {
    id: 17,
    name: 'Тістің арасындағы тамақты жеу',
    emoji: '🌾',
    inBasket: false,
    hint: 'Тістің арасындағы тамақты есіне түскенде жеу оразаны бұзады.',
  },
  {
    id: 18,
    name: 'Хош иіс шашу',
    emoji: '🌸',
    inBasket: true,
    hint: 'Хош иісті пайдалану оразаны бұзбайды.',
  },
]

const cardsRu: Card[] = [
  { id: 1, name: 'Случайно поесть/попить', emoji: '💧', inBasket: true, hint: 'Случайное употребление прощается. При воспоминании нужно остановиться.' },
  { id: 2, name: 'Намеренно поесть/попить', emoji: '🍔', inBasket: false, hint: 'Намеренное употребление нарушает пост, нужно восполнить.' },
  { id: 3, name: 'Глотать слюну', emoji: '💦', inBasket: true, hint: 'Глотание собственной слюны пост не нарушает.' },
  { id: 4, name: 'Курить', emoji: '🚬', inBasket: false, hint: 'Курение нарушает пост.' },
  { id: 5, name: 'Принять душ', emoji: '🚿', inBasket: true, hint: 'Душ и купание пост не нарушает (если вода не попала в нос).' },
  { id: 6, name: 'Капли в глаза', emoji: '👁️', inBasket: true, hint: 'Глазные капли пост не нарушают — до желудка не доходят.' },
  { id: 7, name: 'Укол салу', emoji: '💉', inBasket: true, hint: 'Укол салу оразаны бұзбайды.' },
  { id: 8, name: 'Зубная паста', emoji: '🪥', inBasket: true, hint: 'Зубная паста пост не нарушает, если не глотать.' },
  { id: 9, name: 'Намеренно вызвать рвоту', emoji: '🤢', inBasket: false, hint: 'Намеренная рвота нарушает пост.' },
  { id: 10, name: 'Лечить зуб', emoji: '🦷', inBasket: true, hint: 'Удаление/лечение зуба пост не нарушает (если не глотать кровь/воду).' },
  { id: 11, name: 'Сдать кровь', emoji: '🩺', inBasket: true, hint: 'Сдача крови для анализов пост не нарушает.' },
  { id: 12, name: 'Чувствовать запах еды', emoji: '👃', inBasket: true, hint: 'Чувствовать запах или нюхать еду пост не нарушает.' },
  { id: 13, name: 'Капли в нос', emoji: '💊', inBasket: false, hint: 'Капли в нос нарушают пост, если достигают желудка.' },
  { id: 14, name: 'Маска кислорода', emoji: '😮', inBasket: true, hint: 'Маска кислорода в экстренной ситуации пост не нарушает.' },
  { id: 15, name: 'Нанести крем', emoji: '🧴', inBasket: true, hint: 'Нанесение крема или мази на тело пост не нарушает.' },
  { id: 16, name: 'Уснуть от усталости', emoji: '😴', inBasket: true, hint: 'Уснуть от усталости пост не нарушает.' },
  { id: 17, name: 'Съесть застрявшую еду', emoji: '🌾', inBasket: false, hint: 'Намеренное съедание застрявшей между зубами еды нарушает пост.' },
  { id: 18, name: 'Духи', emoji: '🌸', inBasket: true, hint: 'Использование духов пост не нарушает.' },
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function OrazaOrderGame() {
  const { lang } = useLang()
  const cards = lang === 'ru' ? cardsRu : cardsKk
  const [shuffledCards] = useState(() => shuffle(lang === 'ru' ? cardsRu : cardsKk))
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [checked, setChecked] = useState(false)
  const [gameState, setGameState] = useState<'playing' | 'result'>('playing')

  const totalCorrect = cards.filter((c) => c.inBasket).length
  const correctlySelected = cards.filter((c) => c.inBasket && selected.has(c.id)).length
  const wronglySelected = cards.filter((c) => !c.inBasket && selected.has(c.id)).length
  const score = Math.max(0, correctlySelected * 10 - wronglySelected * 5)

  function toggleCard(id: number) {
    if (checked) return
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function restart() {
    setSelected(new Set())
    setChecked(false)
    setGameState('playing')
  }

  function getCardStyle(card: Card): string {
    if (!checked) {
      return selected.has(card.id)
        ? 'bg-violet-100 border-violet-500 text-violet-800'
        : 'bg-white border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50'
    }
    if (selected.has(card.id) && card.inBasket) return 'bg-violet-100 border-violet-500 text-violet-800'
    if (selected.has(card.id) && !card.inBasket) return 'bg-red-100 border-red-400 text-red-800'
    if (!selected.has(card.id) && card.inBasket) return 'bg-amber-100 border-amber-400 text-amber-800'
    return 'bg-gray-50 border-gray-200 text-gray-400'
  }

  function getCardBadge(card: Card): string {
    if (!checked) return selected.has(card.id) ? '🧺' : ''
    if (selected.has(card.id) && card.inBasket) return '✅'
    if (selected.has(card.id) && !card.inBasket) return '❌'
    if (!selected.has(card.id) && card.inBasket) return '⚠️'
    return ''
  }

  if (gameState === 'result') {
    const pct = Math.round((correctlySelected / totalCorrect) * 100)
    return (
      <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 flex items-start justify-center px-4 py-8">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-200 px-6 py-8 text-center">
            <div className="text-5xl mb-3">🧺</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">НӘТИЖЕ</h2>
            <p className="text-5xl font-bold text-violet-600 mb-1">{score} XP</p>
            <p className="text-gray-400 text-sm mb-2">
              {correctlySelected}/{totalCorrect} дұрыс іріктелді
              {wronglySelected > 0 && ` · ${wronglySelected} қате`}
            </p>

            <div className="flex justify-center mb-6">
              {pct >= 80 ? (
                <span className="bg-violet-100 border border-violet-300 text-violet-800 text-sm font-bold px-4 py-2 rounded-full">
                  🌙 Ораза шебері!
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

            <div className="space-y-2 mb-6 text-left max-h-72 overflow-y-auto pr-1">
              {cards.map((c) => {
                const wasSelected = selected.has(c.id)
                const isCorrect = (wasSelected && c.inBasket) || (!wasSelected && !c.inBasket)
                return (
                  <div
                    key={c.id}
                    className={`rounded-xl p-2.5 border flex items-center gap-3 text-sm ${
                      isCorrect ? 'bg-violet-50 border-violet-200' : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <span className="text-xl flex-shrink-0">{c.emoji}</span>
                    <div>
                      <p className="font-medium text-gray-800">{c.name}</p>
                      <p className={`text-xs ${c.inBasket ? 'text-violet-600' : 'text-red-500'}`}>
                        {c.inBasket ? '✅ Оразаны бұзбайды' : '🛑 Оразаны бұзады'}
                      </p>
                      {!isCorrect && <p className="text-xs text-gray-400 mt-0.5">{c.hint}</p>}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={restart}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 rounded-2xl shadow hover:shadow-lg transition-all hover:scale-105"
              >
                🔁 ҚАЙТА ОЙНАУ
              </button>
              <Link
                to="/oraza"
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
    <main translate="no" className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 px-4 py-6">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4">
          <Link to="/oraza" className="text-sm text-violet-700 hover:text-violet-900 transition-colors">
            ← Ораза
          </Link>
          <span className="text-sm text-gray-500 font-medium">{selected.size} таңдалды</span>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow border border-violet-100 mb-4 text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{lang === 'ru' ? '🧺 Корзина поста' : '🧺 Ораза себеті'}</h1>
          <p className="text-sm text-gray-500">{lang === 'ru' ? 'Выбери вещи, которые не нарушают пост!' : 'Оразаны бұзбайтын нәрселерді іріктеп себетке жина!'}</p>
        </div>

        {/* Rules */}
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 mb-5">
          <p className="text-sm font-bold text-indigo-800 mb-2">📋 Ойын ережесі</p>
          <div className="space-y-1 text-xs text-indigo-700">
            <p>• Экранда оразаны <strong>бұзатын</strong> және <strong>бұзбайтын</strong> нәрселер аралас берілген</p>
            <p>• Оразаны <strong>БҰЗБАЙТЫН</strong> нәрселерді таңдап себетке жина 🧺</p>
            <p>• Оразаны <strong>БҰЗАТЫН</strong> нәрселерді таңдама 🛑</p>
            <p>• Барлық таңдауды бітіргеннен кейін «Тексеру» батырмасын бас</p>
          </div>
          <div className="mt-3 flex gap-2 text-xs flex-wrap">
            {!checked ? (
              <>
                <span className="flex items-center gap-1 bg-violet-100 border border-violet-300 rounded-full px-2 py-0.5 text-violet-700">
                  🧺 Таңдалған
                </span>
                <span className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2 py-0.5 text-gray-500">
                  Таңдалмаған
                </span>
              </>
            ) : (
              <>
                <span className="flex items-center gap-1 bg-violet-100 border border-violet-300 rounded-full px-2 py-0.5 text-violet-700">
                  ✅ Дұрыс
                </span>
                <span className="flex items-center gap-1 bg-red-100 border border-red-300 rounded-full px-2 py-0.5 text-red-700">
                  ❌ Қате
                </span>
                <span className="flex items-center gap-1 bg-amber-100 border border-amber-300 rounded-full px-2 py-0.5 text-amber-700">
                  ⚠️ Жіберілген
                </span>
              </>
            )}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {shuffledCards.map((card) => (
            <button
              key={card.id}
              onClick={() => toggleCard(card.id)}
              disabled={checked}
              className={`relative rounded-xl border-2 p-2 text-center transition-all flex flex-col items-center justify-center gap-1 h-24 ${getCardStyle(card)}`}
            >
              {getCardBadge(card) && (
                <span className="absolute top-1 right-1.5 text-sm leading-none">
                  {getCardBadge(card)}
                </span>
              )}
              <span className="text-2xl leading-none">{card.emoji}</span>
              <span className="text-xs font-medium leading-tight line-clamp-2">{card.name}</span>
            </button>
          ))}
        </div>

        {!checked ? (
          <button
            onClick={() => setChecked(true)}
            disabled={selected.size === 0}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed"
          >
            ✅ ТЕКСЕРУ
          </button>
        ) : (
          <div className="space-y-3">
            <div className="bg-white border border-violet-200 rounded-2xl px-5 py-3 text-center">
              <p className="text-2xl font-bold text-violet-600">
                {correctlySelected}/{totalCorrect}
              </p>
              <p className="text-xs text-gray-500">дұрыс іріктелді</p>
              {wronglySelected > 0 && (
                <p className="text-xs text-red-500 mt-0.5">{wronglySelected} қате таңдалды</p>
              )}
            </div>
            <button
              onClick={() => setGameState('result')}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95"
            >
              📊 ТОЛЫҚ НӘТИЖЕ
            </button>
          </div>
        )}

        <div className="h-8" />
      </div>
    </main>
  )
}
