import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import Thankyou from "./Thankyou";

const Form = ({
  nombre, setNombre,
  numeroTarjeta, setNumeroTarjeta,
  mes, setMes,
  year, setYear,
  cvc, setCvc,
  datos, setDatos
}) => {

  const [error, setError] = useState(false)
  const [gracias, setGracias] = useState(false)

  useEffect(()=>{
    if(Object.keys(nombre).length > 0){
      setNombre(usuario.nombre)
      setNumeroTarjeta(usuario.numeroTarjeta)
      setMes(usuario.mes)
      setYear(usuario.year)
      setCvc(usuario.cvc)
    }
  }, [datos])
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    if([nombre, numeroTarjeta, mes, year, cvc].includes("")){
      setError(true)
      return
    }
    setError(false)
    const datosForm={
      nombre,
      numeroTarjeta,
      mes,
      year,
      cvc
    }

    setDatos([...datos, datosForm]);

    setNombre("")
    setNumeroTarjeta("")
    setMes("")
    setYear("")
    setCvc("")

    setGracias(true)
  }


  return (
    <div>
      {gracias ? <Thankyou /> : (
        <form 
      onSubmit={handleSubmit}
      className="formulario">
      {error && <Mensaje alerta="Todos los campos son obligatorios"/>}

      <label htmlFor="nombre">Nombre Propietario</label>
      <input 
        id="nombre" 
        type="text" 
        placeholder="Ej: Janett Tapias"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />

      <label htmlFor="numero">Número de la Tarjeta</label>
      <input 
        id="numero" 
        type="number" 
        placeholder="Ej: 1234 5678..."
        value={numeroTarjeta}
        onChange={e => setNumeroTarjeta(e.target.value)}
        />

      <div className="campo-flex">
        <div className="campo1">
            <label htmlFor="mm">Exp. date (mm/yy)</label>
            <div className="campo-flex-1">
                <input 
                    type="number" 
                    placeholder="MM"
                    value={mes}
                    onChange={e => setMes(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="YY"
                    value={year}
                    onChange={e => setYear(e.target.value)}
                />
            </div>
        </div>
        <div className="campo2">
            <label>Cvc</label>
            <input 
                type="number" 
                placeholder="Ej: 123"
                value={cvc}
                onChange={e => setCvc(e.target.value)}
            />
        </div>
      </div>

      <input 
        className="btn-enviar" 
        type="submit"  
        value="Confirm"
        />
    </form>
      )}
    </div>
  )
}

export default Form
