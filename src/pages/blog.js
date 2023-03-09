import '../App.css'

export function Blog()
{
    return(
        <div className="blog">
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-blog">
                    <div className='title'>
                            <h1>BLOG</h1>
                            <p>¡Bienvenidos/as a nuestro blog! Aquí encontrarás artículos interesantes y útiles sobre diversos temas, desde consejos prácticos hasta reflexiones profundas, todo diseñado para inspirarte y enriquecer tu vida.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='articles-container'>
                <div className='container-article container-article-1'>
                    <h5>Articulos de su interes:</h5> 
                    <div className='article article-1'>
                        <img src={require(`../sources/image-article-1.jpg`)}/>
                        <div className='container-of-article-1'>
                            <h4>
                                Así avanza la transición energética en Colombia: Gobierno aprobó 165 
                                proyectos de energía renovable
                            </h4>
                            <a target="_blank" href="https://www.elcolombiano.com/negocios/gobierno-aprobo-165-proyectos-de-energia-renovable-KN20697148" className='btn'>Leer</a> 
                        </div>
                    </div>
                    <div className='article article-1'>
                        <img src={require(`../sources/image-article-1-2.jpg`)}/>
                        <div className='container-of-article-1'>
                            <h4>
                                Instalan primera minigranja solar que genera energía para la red en el Caribe
                            </h4>
                            <a target="_blank" href="https://www.eltiempo.com/colombia/barranquilla/instalan-primera-minigranja-solar-que-genera-energia-para-red-en-el-caribe-747253" className='btn'>Leer</a> 
                        </div>
                    </div>
                </div>
                <div className='container-article container-article-2'>
                    <h5>Ultimas Novedades:</h5>
                    <div className='article article-2'>
                        <img src={require(`../sources/image-article-2.jpg`)}/>
                        <div className='container-of-article'>
                            <h1>
                                Ya hay 38 proyectos de energía solar en funcionamiento en el territorio 
                                nacional
                            </h1>
                            <p>lunes, 6 de marzo de 2023</p>
                            <h4>
                                Si se revisa por zonas, la concentración de las granjas está principalmente en 
                                Meta, Tolima y Valle y Celsia tiene 36% de los proyectos
                            </h4>
                            <p>
                                Una de las apuestas del Gobierno actual es la energía proveniente de fuentes 
                                renovables. En las últimas inauguraciones de granjas solares están tres plantas 
                                en Tolima a inicios de febrero, las cuales fueron construidas por Grenergy, 
                                compañía española productora de energía renovable y especialista en el desarrollo 
                                de proyectos fotovoltaicos eólicos y de almacenamiento. Y es que con esos 
                                tres proyectos ya se completan 38 en todo el territorio nacional, según el 
                                reporte del Ministerio de Minas y Energía. Buena parte de las granjas solares 
                                están concentradas en Tolima, Meta y el Valle del Cauca; y Celsia, del Grupo 
                                Argos, tiene al menos 36% del total. Otras compañías que también están apostando 
                                por estos proyectos son Parex, Geopark, Enel y Ebsa.
                            </p>
                            <p>
                                Con el panorama definido sobre la transición energética, proyectos de energía 
                                solar cobran relevancia en Colombia; un ejemplo de esto es Solar Providencia, 
                                la granja solar en construcción que inició en julio del año pasado y proyecta 
                                generar 1,8 megavatios pico de energía con un sistema de baterías de 2,5 m
                                egavatios. Este ecoparque tendrá en total 3.300 paneles solares y está siendo 
                                construido con inversiones de Ecopetrol y la Agencia de los Estados Unidos 
                                para el Desarrollo Internacional (Usaid). Otro en construcción, y de los 
                                más relevantes, es La Loma, que está en 70% de avance y con un potencial de 
                                187 megavatios a partir de 400.000 paneles solares distribuidos en 437 hectáreas. 
                                El suministro energético proyectado para este parque solar es de 370.000 
                                personas al año.Julio César Vera, presidente de la Fundación Xua Energy, 
                                indica que algunos de los retos que quedan en el campo de las granjas solares 
                                en el país son que se puedan conectar al sistema de transmisión nacional 
                                por las líneas de interconexión. Otro reto relevante que ve el experto 
                                sería “lograr el cierre financiero de los proyectos, dada la incertidumbre 
                                que hoy se tiene en el país por la devaluación, la inflación nacional y 
                                global y las señales cambiantes que afectan la confianza inversionista. Y, 
                                por supuesto dificultan lograr el financiamiento de dichos proyectos”.
                            </p>
                            <p>Por: Diario La Republica</p>
                        </div>
                    </div>
                </div>
                <div className='container-article container-article-3'>
                    <h5>Ultima semana:</h5> 
                    <div className='article article-3'>
                        <img src={require(`../sources/image-article-3.jpg`)}/>
                        <div className='container-of-article-3'>
                            <h4>
                                El CSIC creará los paneles perfectos para combinar energía solar y agricultura
                            </h4>
                            <a target="_blank" href="https://elperiodicodelaenergia.com/el-csic-creara-los-paneles-solares-perfectos-para-combinar-energia-solar-y-agricultura/" className='btn'>Leer</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}