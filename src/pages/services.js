import '../App.css'

export function Services()
{
    return(
        <div>
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-services">
                        <div className='title'>
                            <h1>SERVICIOS</h1>
                            <p>Bienvenido/a a nuestra página de servicios, donde ofrecemos soluciones personalizadas y eficientes para satisfacer tus necesidades y superar tus expectativas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-right info-right-1">
                    <h2 class="section-title scroll-animation">Instalación</h2>
                    <p class="section-text scroll-animation">Nuestro servicio de instalación de paneles solares te proporciona un sistema de energía renovable y sostenible para tu hogar o negocio. Con nuestros paneles solares de alta calidad, podrás generar tu propia energía eléctrica limpia y renovable, reduciendo así tu dependencia de la red eléctrica tradicional.</p>
                </div>
                <div class="info-left">
                    <img src={require(`../sources/instalacion.png`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-left info-left-2">
                    <img src={require(`../sources/mantenimiento.png`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
                <div class="info-right info-right-2">
                    <h2 class="section-title scroll-animation">Mantenimiento</h2>
                    <p class="section-text scroll-animation">Mantener tus paneles solares en buen estado es esencial para garantizar que estén generando la cantidad adecuada de energía y maximizando tus ahorros en facturas de energía. Con nuestro servicio de mantenimiento de paneles solares, nuestros técnicos altamente capacitados se encargarán de mantener tus paneles en óptimas condiciones durante todo el año.</p>
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-right info-right-1">
                    <h2 class="section-title scroll-animation">Dimensionamiento</h2>
                    <p class="section-text scroll-animation">Nuestros expertos en energía solar te ayudarán a determinar cuántos paneles solares necesitas para generar la cantidad adecuada de energía para tu hogar o negocio. Analizamos tus necesidades de energía, el tamaño de tu propiedad, la ubicación y la orientación de tus paneles solares para determinar cuál es el sistema solar adecuado para ti.</p>
                </div>
                <div class="info-left info-left-1">
                    <img src={require(`../sources/dimensionamiento.png`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-left info-left-2">
                    <img src={require(`../sources/certificacion.png`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
                <div class="info-right info-right-2">
                    <h2 class="section-title scroll-animation">Certificación</h2>
                    <p class="section-text scroll-animation">Nuestros paneles solares certificados ISO 9001 garantizan que han sido fabricados de acuerdo con los más altos estándares de calidad y que se han sometido a rigurosas pruebas de seguridad y rendimiento. Esto significa que puedes estar seguro de que estás invirtiendo en un producto de alta calidad que funcionará de manera confiable y eficiente durante muchos años.</p>
                </div>
            </section>
        </div>
    );
}