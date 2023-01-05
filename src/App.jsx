import './App.css'
import Cards from './components/Cards'
import Form from './components/Form'

function App(){

  return (
    <>
    <div className="bg-main"></div>
   <div className='contenedor-flex container'>
      <Cards />
      <Form />
   </div>
   </>
  )
}

export default App
