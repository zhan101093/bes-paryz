import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Layout'
import { Home } from './pages/Home'
import { NamazHub } from './pages/NamazHub'
import { Tauhid } from './pages/Tauhid'
import { TauhidWhy } from './pages/TauhidWhy'
import { TauhidLearn } from './pages/TauhidLearn'
import { TauhidQuiz } from './pages/TauhidQuiz'
import { TauhidOrderGame } from './pages/TauhidOrderGame'
import { Oraza } from './pages/Oraza'
import { OrazaWhy } from './pages/OrazaWhy'
import { OrazaLearn } from './pages/OrazaLearn'
import { OrazaQuiz } from './pages/OrazaQuiz'
import { OrazaOrderGame } from './pages/OrazaOrderGame'
import { OrazaMatchGame } from './pages/OrazaMatchGame'
import { OrazaScenarioGame } from './pages/OrazaScenarioGame'
import { Zeket } from './pages/Zeket'
import { ZeketWhy } from './pages/ZeketWhy'
import { ZeketLearn } from './pages/ZeketLearn'
import { ZeketQuiz } from './pages/ZeketQuiz'
import { ZeketGame } from './pages/ZeketGame'
import { ZeketWhoGame } from './pages/ZeketWhoGame'
import { ZeketBasketGame } from './pages/ZeketBasketGame'
import { Kazhylyk } from './pages/Kazhylyk'
import { KazhylykWhy } from './pages/KazhylykWhy'
import { KazhylykLearn } from './pages/KazhylykLearn'
import { KazhylykQuiz } from './pages/KazhylykQuiz'
import { KazhylykOrderGame } from './pages/KazhylykOrderGame'
import { KazhylykMatchGame } from './pages/KazhylykMatchGame'
import { KazhylykScenarioGame } from './pages/KazhylykScenarioGame'
import { WhyPray } from './pages/WhyPray'
import { Movements } from './pages/Movements'
import { Duas } from './pages/Duas'
import { Practice } from './pages/Practice'
import { Mistakes } from './pages/Mistakes'
import { Game } from './pages/Game'
import { OrderGame } from './pages/OrderGame'
import { MatchGame } from './pages/MatchGame'
import { ImageMatchGame } from './pages/ImageMatchGame'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Таухид */}
          <Route path="/tauhid" element={<Tauhid />} />
          <Route path="/tauhid-why" element={<TauhidWhy />} />
          <Route path="/tauhid-learn" element={<TauhidLearn />} />
          <Route path="/tauhid-quiz" element={<TauhidQuiz />} />
          <Route path="/tauhid-order-game" element={<TauhidOrderGame />} />

          {/* Намаз */}
          <Route path="/namaz" element={<NamazHub />} />
          <Route path="/why" element={<WhyPray />} />
          <Route path="/movements" element={<Movements />} />
          <Route path="/duas" element={<Duas />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/game" element={<Game />} />
          <Route path="/image-match-game" element={<ImageMatchGame />} />
          <Route path="/order-game" element={<OrderGame />} />
          <Route path="/match-game" element={<MatchGame />} />

          {/* Ораза */}
          <Route path="/oraza" element={<Oraza />} />
          <Route path="/oraza-why" element={<OrazaWhy />} />
          <Route path="/oraza-learn" element={<OrazaLearn />} />
          <Route path="/oraza-quiz" element={<OrazaQuiz />} />
          <Route path="/oraza-order-game" element={<OrazaOrderGame />} />
          <Route path="/oraza-match-game" element={<OrazaMatchGame />} />
          <Route path="/oraza-scenario-game" element={<OrazaScenarioGame />} />

          {/* Зекет */}
          <Route path="/zeket" element={<Zeket />} />
          <Route path="/zeket-why" element={<ZeketWhy />} />
          <Route path="/zeket-learn" element={<ZeketLearn />} />
          <Route path="/zeket-quiz" element={<ZeketQuiz />} />
          <Route path="/zeket-game" element={<ZeketGame />} />
          <Route path="/zeket-who-game" element={<ZeketWhoGame />} />
          <Route path="/zeket-basket-game" element={<ZeketBasketGame />} />

          {/* Қажылық */}
          <Route path="/kazhylyk" element={<Kazhylyk />} />
          <Route path="/kazhylyk-why" element={<KazhylykWhy />} />
          <Route path="/kazhylyk-learn" element={<KazhylykLearn />} />
          <Route path="/kazhylyk-quiz" element={<KazhylykQuiz />} />
          <Route path="/kazhylyk-order-game" element={<KazhylykOrderGame />} />
          <Route path="/kazhylyk-match-game" element={<KazhylykMatchGame />} />
          <Route path="/kazhylyk-scenario-game" element={<KazhylykScenarioGame />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
