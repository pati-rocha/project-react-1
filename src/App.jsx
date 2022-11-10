import './App.css'
import {Header} from './components/Header/header'
import Main from './components/Main/main'
import Footer from './components/Footer/footer'


function App() {  
  return (
    <div className="App">
    <Header text="Meus conteúdos favoritos"/>    
    <Main/>
    <Footer name="Pati Rocha"/>
    </div>
  )
}
export default App
