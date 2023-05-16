
import fw from '../flatwheel.jpg'
import ch from '../choose.jpg'
import wt from '../watch.jpg'

export const Second = () => {
    return (
        <div className='secnd'>
            <h1 className='secndh1'>Una Solución Rapida en 3 simples pasos</h1>
            <div className="secnddiv">
                <div className="tbox">
                    <h3 className='secndh3'>Describe tu problema</h3>
                    <img src={fw} className="boximg" alt="logo" />
                </div>
                <div className="tbox">
                    <h3 className='secndh3'>Elije la solución que mas te acomode</h3>
                    <img src={ch} className="boximg" alt="logo" />
                </div>
                <div className="tbox">
                    <h3 className='secndh3'>Reserva tu hora</h3>
                    <img src={wt} className="boximg" alt="logo" />
                </div>
            </div>
        </div>
    )
}