import cardFront from '../images/bg-card-front.png'
import cardLogo from '../images/card-logo.svg'

const Cards = () => {
    return (
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
                    <h2 className='numberPrincipal'>0000 0000 0000 0000</h2>
                    <div className="text-flex">
                        <p>Jannt Tapias</p>
                        <p>00/00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards