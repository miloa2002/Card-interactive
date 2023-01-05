const Form = ({
    nombre, setNombre,
    numeroTarjeta, setNumeroTarjeta,
    mes, setMes,
    year, setYear,
    cvc, setCvc
}) => {

  return (
    <form className="formulario">

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
  )
}

export default Form
