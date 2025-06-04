import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { InputField } from './components/InputField/InputField'
import { Terms } from './components/Terms/Terms'

function App() {

  return (
    <div className='w-full h-full p-0 m-0 flex flex-col justify-between items-center'>
      <Header />
      <InputField />
      <Terms />
      <Footer />
    </div>
  )
}

export default App
