import './hero.css';

export function Hero() {
    return (
        <div className="hero-container">
            <img
                className="hero"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/EC-es-20241209-TRIFECTA-perspective_1af64547-4c12-4c95-9c7e-c71baee2265c_large.jpg"
                alt="Netflix Hero"
                aria-hidden="true"
            />
            <div className="hero-content">
                <h1>Películas y series ilimitadas y mucho más</h1>
                <p className='descripcion'>A partir de $4.99. Cancela cuando quieras.</p>
                <div className="contenedor-comenzar">
                    <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
                    <div className='comenzar-c'>
                        <input type="email" placeholder='correo@gmail.com' />
                        <button>Comenzar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
