

const Form = () => {
  return (
    <form className="formulario">

      <label htmlFor="nombre">Nombre Propietario</label>
      <input id="nombre" type="text" placeholder="Ej: Janett Tapias"/>

      <label htmlFor="numero">Número de la Tarjeta</label>
      <input id="numero" type="number" placeholder="Ej: 1234 5678..."/>

      <div className="campo-flex">
        <div className="campo1">
            <label htmlFor="mm">Exp. date (mm/yy)</label>
            <div className="campo-flex-1">
                <input type="number" placeholder="MM"/>
                <input type="number" placeholder="YY"/>
            </div>
        </div>
        <div className="campo2">
            <label>Cvc</label>
            <input type="number" placeholder="Ej: 123"/>
        </div>
      </div>

      <input className="btn-enviar" type="submit"  value="Confirm"/>

    </form>
  )
}

export default Form
