import './App.css'

import Title from './components/Title'
import Counter from './components/Counter'

import Time from "./assets/Time.jpg";

import useCountDown from "./Hooks/use.CountDown" ;

function App() {

  const [day,hour,minute,second] = useCountDown('jan 1,2024 00:00:00')


  return (
    <div className="App" style={{backgroundImage:`url(${Time})`}}>
     <div className="conteiner">
      <Title title='CountDown Until 2024'/>
      <div className="countDown-conteiner">
        <Counter title='Dias'number={day} />
        <Counter title='Horas'number={hour} />
        <Counter title='Minutos'number={minute} />
        <Counter title='Segundos'number={second} />
      </div>
     </div>
    </div>
  )
}

export default App
