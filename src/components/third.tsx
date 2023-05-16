import fm from '../fastm.jpg'

export const Third = () => {
    return (
        <div className='th'>
            <h1 className='thh1'>Por que Check Engine?</h1>
            <div className="thdiv">
                <h2 className='thh2'>Rapido</h2>
                <p className='thp'>Check Engine te permite encontrar la solución a tu problema en solo 3 pasos.</p>
                <img src={fm} className="thimg" alt="logo" />
            </div>
            <div className="thdiv">
                <h2 className='thh2'>Facil</h2>
                <p className='thp'>Check Engine te permite encontrar la solución a tu problema en solo 3 pasos.</p>
                <img src={fm} className="thimg" alt="logo" />
            </div>
            <div className="thdiv">
                <h2 className='thh2'>Soporte</h2>
                <p className='thp'>Check Engine te permite encontrar la solución a tu problema en solo 3 pasos.</p>
                <img src={fm} className="thimg" alt="logo" />
            </div>
        </div>
    )
}