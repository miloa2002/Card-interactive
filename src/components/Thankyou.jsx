import completoRegistro from '../images/icon-complete.svg'

const Thankyou = () => {
    const handleSubmitt = () =>{
        
    }
  return (
    <form className='formulariodos centro-form'
        onSubmit={handleSubmitt}
    >
        <img 
        src={completoRegistro} 
        alt="complete" />
        <h2>Gracias!</h2>
        <p className='text-complete'>Hemos añadido los datos de su tarjeta</p>
        <input className='btn-continue' type="submit" value="Continue"/>
    </form>
  )
}

export default Thankyou