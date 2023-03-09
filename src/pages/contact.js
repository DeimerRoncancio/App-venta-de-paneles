import '../App.css'

export function Contact()
{
    return(
        <div className="contact">
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-contact">
                        <div className='title'>
                            <h1>CONTACT</h1>
                            <p>"¡Nos encanta conectarnos con nuestros clientes! En esta página de contacto, encontrarás todas las formas de comunicarte con nosotros para hacer preguntas, dejar comentarios o simplemente saludarnos. ¡Estamos aquí para ayudarte en lo que necesites!</p>
                        </div>
                    </div>
                </div>
            </section>
            <header>
		        <h1>Contacto</h1>
            </header>
            <form action="#" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre" required />
                <label for="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo electrónico" required />
                <label for="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}