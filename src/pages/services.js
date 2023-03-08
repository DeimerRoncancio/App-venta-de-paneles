import '../App.css'

export function Services()
{
    return(
        <div>
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-services"></div>
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-left">
                    <img src={require(`../sources/contact.jpg`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
                <div class="info-right">
                    <h2 class="section-title scroll-animation">Título de la sección</h2>
                    <p class="section-text scroll-animation">Texto de la sección</p>
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-left">
                    <img src={require(`../sources/contact.jpg`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
                <div class="info-right">
                    <h2 class="section-title scroll-animation">Título de la sección</h2>
                    <p class="section-text scroll-animation">Texto de la sección</p>
                </div>
            </section>
            <section class="info-section" id="info-section">
                <div class="info-left">
                    <img src={require(`../sources/contact.jpg`)} alt="Descripción de la imagen" class="scroll-animation" />
                </div>
                <div class="info-right">
                    <h2 class="section-title scroll-animation">Título de la sección</h2>
                    <p class="section-text scroll-animation">Texto de la sección</p>
                </div>
            </section>
        </div>
    );
}