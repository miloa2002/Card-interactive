import cardFront from '../images/bg-card-front.png'
import cardBack from '../images/bg-card-back.png'
import cardLogo from '../images/card-logo.svg'

const Cards = ({nombre, numeroTarjeta, mes, year, cvc}) => {
    return (
       <div className='cards'>
         <div className="bg-card-front">
            <img
                src={cardFront}
                alt="card front"
                className='front-img'
            />
            <div className='text-card'>
                <div className="card-imgs">
                    <img
                        src={cardLogo}
                        alt="card logo"
                    />
                </div>
                <div className="text-card-2">
                    <h2 className='numberPrincipal'>{numeroTarjeta}</h2>
                    <div className="text-flex">
                        <p>{nombre}</p>
                        <p>{mes}/{year}</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='card-back'>
            <img
            src={cardBack}
            alt="card back" 
            className='bg-card-back'
            />
            <div className="back-contenido">
                <p>{cvc}</p>
            </div>
        </div>
       </div>
    )
}

export default Cards