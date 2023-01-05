import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'
import { useState } from 'react'

function App() {

  const [nombre, setNombre] = useState("")
  const [numeroTarjeta, setNumeroTarjeta] = useState(0)
  const [mes, setMes] = useState(0)
  const [year, setYear] = useState(0)
  const [cvc, setCvc] = useState(0)

  return (
    <>
      <div className="bg-main"></div>
      <div className='contenedor-flex container'>
        <Cards
          nombre={nombre}
          numeroTarjeta={numeroTarjeta}
          mes={mes}
          year={year}
          cvc = {cvc}
        />
        <Form
          nombre={nombre}
          setNombre={setNombre}

          numeroTarejta={numeroTarjeta}
          setNumeroTarjeta={setNumeroTarjeta}

          mes={mes}
          setMes={setMes}

          year={year}
          setYear={setYear}

          cvc = {cvc}
          setCvc = {setCvc}

        />
      </div>
    </>
  )
}

export default App
