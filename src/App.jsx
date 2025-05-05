import './App.css'
import Header from './pages/Header/Header'
import EventosCarrossel from './pages/EventosCarrossel/EventosCarrossel'
import EventoDestaque from './pages/EventoDestaques/EventoDestaque'
import Footer from './pages/Footer/Footer'


function App() {

  return (
    <>
      <main className={'fundo'}>
        <Header />
        <EventoDestaque />
        <EventosCarrossel />
        <Footer />
      </main>
    </>
  )
}

export default App
