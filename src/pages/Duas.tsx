import { useState } from 'react'
import { Link } from 'react-router-dom'
import { duas } from '../data/duas'
import { ArabicAudioButton } from '../components/ui/ArabicAudioButton'
import { useLang } from '../contexts/LanguageContext'

const positionsRu: Record<number, string> = {
  1: 'Такбир — вступление в намаз',
  2: 'Субханака — начало Кийама',
  3: 'Сура Фатиха — в Кийаме',
  4: 'Сура Ихляс — в Кийаме (после Фатихи)',
  5: 'Руку — поясной поклон',
  6: 'Подъём из руку',
  7: 'Саджда — земной поклон',
  8: 'Сидение между садждами',
  9: 'Ташаhhуд — последнее сидение',
  10: 'Салауат — после Ташаhhуда',
  11: 'Салам — завершение намаза',
}

const translationsRu: Record<number, string> = {
  1: 'Аллах — Величайший',
  2: 'Аллах, Ты чист, хвала Тебе. Имя Твоё благодатно, Величие Твоё высоко. Нет бога кроме Тебя.',
  3: 'Во имя Аллаха, Милостивого, Милосердного. Хвала Аллаху, Господу миров. Милостивому, Милосердному. Владыке Дня суда. Тебе поклоняемся и у Тебя просим помощи. Веди нас прямым путём — путём тех, кому Ты оказал милость, не тех, на кого пал гнев, и не тех, кто заблудился.',
  4: 'Во имя Аллаха, Милостивого, Милосердного. Скажи: «Он — Аллах, Единый. Аллах Вечный. Он не родил и не был рождён. И нет Ему равного».',
  5: 'Пречист мой Великий Господь',
  6: 'Аллах услышал тех, кто хвалил Его. Господи наш, Тебе хвала.',
  7: 'Пречист мой Высочайший Господь',
  8: 'Господи, прости меня',
  9: 'Приветствия Аллаху, молитвы и благие деяния. Мир тебе, о Пророк, милость Аллаха и Его благословение. Мир нам и всем праведным рабам Аллаха. Свидетельствую, что нет бога кроме Аллаха, и свидетельствую, что Мухаммад ﷺ — Его раб и посланник.',
  10: 'О Аллах, благослови Мухаммада ﷺ и его семью, как Ты благословил Ибрахима и его семью. Поистине, Ты — Восхваляемый, Великий. О Аллах, благослови Мухаммада ﷺ и его семью, как Ты благословил Ибрахима и его семью.',
  11: 'Мир вам и милость Аллаха',
}

export function Duas() {
  const { lang } = useLang()
  const [expanded, setExpanded] = useState<number | null>(0)

  const t = {
    back: lang === 'ru' ? '← Главная' : '← Басты бет',
    title: lang === 'ru' ? 'Молитвы в намазе' : '3-бөлім: Намаздағы дұғалар',
    subtitle: lang === 'ru' ? 'Молитвы каждого этапа — арабский, транслитерация и перевод' : 'Намаздың әр кезеңіндегі дұғалар — арабша, транслитерация және қазақша мағынасы',
    arabicLabel: lang === 'ru' ? 'Арабский' : 'Арабша',
    repeats: (n: number) => lang === 'ru' ? `(повторяется ${n} раза)` : `(${n} рет қайталанады)`,
    transLabel: lang === 'ru' ? 'Транслитерация' : 'Оқылуы',
    translationLabel: lang === 'ru' ? 'Перевод' : 'Қазақша мағынасы',
    prev: lang === 'ru' ? '← Движения' : '← Қимылдар',
    next: lang === 'ru' ? 'К практике →' : 'Практикаға өту →',
  }

  return (
    <main translate="no" className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/" className="text-sm text-primary-600 hover:underline">{t.back}</Link>
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mt-2">{t.title}</h1>
        <p className="text-gray-600 mt-1">{t.subtitle}</p>
      </div>

      <div className="flex flex-col gap-3">
        {duas.map((dua) => {
          const isOpen = expanded === dua.id
          const position = lang === 'ru' ? (positionsRu[dua.id] ?? dua.position) : dua.position
          const translation = lang === 'ru' ? (translationsRu[dua.id] ?? dua.translation) : dua.translation

          return (
            <div key={dua.id} className="card p-0 overflow-hidden">
              <button
                onClick={() => setExpanded(isOpen ? null : dua.id)}
                className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-gray-50 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {dua.id}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    <span className="font-medium text-gray-900 text-sm">{position}</span>
                    {dua.repeats && (
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-2 py-0.5 flex-shrink-0">
                        {lang === 'ru' ? `${dua.repeats} раза` : `${dua.repeats} рет`}
                      </span>
                    )}
                  </div>
                </div>
                <span className={`text-primary-500 transition-transform duration-200 flex-shrink-0 text-xs ${isOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>

              {isOpen && (
                <div className="border-t border-gray-100 px-4 pb-4 pt-3 flex flex-col gap-3">
                  <div className="bg-primary-50 rounded-2xl px-5 py-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold text-primary-400 uppercase tracking-wider">{t.arabicLabel}</p>
                      <ArabicAudioButton text={dua.arabic} />
                    </div>
                    <p className="text-primary-950 text-center" style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif", fontSize: '1.55rem', lineHeight: '2.2', direction: 'rtl', fontWeight: 500 }}>
                      {dua.arabic}
                    </p>
                    {dua.repeats && (
                      <p className="text-xs text-primary-500 mt-2 text-center font-medium">{t.repeats(dua.repeats)}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">{t.transLabel}</p>
                    <p className="text-gray-800 italic text-sm leading-relaxed">{dua.transliteration}</p>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1.5">{t.translationLabel}</p>
                    <p className="text-gray-800 text-sm leading-relaxed">{translation}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-between">
        <Link to="/movements" className="btn-secondary">{t.prev}</Link>
        <Link to="/practice" className="btn-primary">{t.next}</Link>
      </div>
    </main>
  )
}
