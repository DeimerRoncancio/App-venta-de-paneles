import './footer.css'

export function Footer()
{
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <div>
                        <img src={require(`../../sources/logo-solit.png`)} />
                    </div>

                    <p className="footer-links">
                        <a href="#">Inicio</a>
                        |
                        <a href="#">Contacto</a>
                        |
                        <a href="#">Blog</a>
                    </p>

                    <p className="footer-company-name">Copyright © 2021 <strong>Solit SAS</strong> Todos los derechos reservados</p>
                </div>
                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Meta</span>
                            Villavicencio</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>Numero</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:sagar00001.co@gmail.com">Correo</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>Acerca de la web</span>
                        Pagina elaborada por <strong>Deimer Steven Roncancio Avila</strong>
                        <br></br>
                        Programacion Web
                        <br></br>
                        Tecnologia en Desarrollo de Software
                        <br></br>
                        Corporación Universitaria Minuto de Dios
                        <br></br>

                    </p>
                    {/* <div class="footer-icons">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-linkedin"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-youtube"></i></a>
                    </div> */}
                </div>
            </footer>
        </div>
    )
}