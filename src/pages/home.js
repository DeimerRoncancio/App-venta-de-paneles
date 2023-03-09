import { Card } from '../components/cards/Card';
import { ImagePhrase } from '../components/image-phrase/ImagePhrase';
import '../App.css'
import { PanelPhrase } from '../components/panel-phrase/PanelPhrase';
import { Footer } from '../components/footer/Footer';

export function Home()
{
    return(
        <div>
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-energy-solar">
                        <div className='title'>
                            <img src={require(`../sources/logo-solit.png`)}/>
                            <p>Únete a la energía del futuro con nuestra marca de energía solar, limpia y renovable para un mundo más sostenible</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="benefisit-section">
                <div className='benefisits d-flex'>
                    <div className='container-title content d-flex'>
                        <h1>BENEFICIOS DE LA ENERGIA SOLAR</h1>
                    </div>
                    <div className='cards'>
                        <Card
                            title = "1. Una fuente renovable e inagotable por definición"
                            text = "Es cierto, la estrella amarilla que da nombre al sistema solar no vivirá eternamente, en 4000 o 5000 millones de años saldrá de su secuencia principal y se volverá inestable. Sin embargo, mientras tanto, en las escalas temporales de nuestro interés, el sol representa una fuente de energía inmutable y, de hecho, inagotable: día tras día, año tras año, está y estará siempre allí, igual a sí mismo."
                            imageCard = "benefisit-img1"
                        />
                        <Card
                            title = "2. El sol llega a todas partes"
                            text = "Es cierto, la estrella amarilla que da nombre al sistema solar no vivirá eternamente, en 4000 o 5000 millones de años saldrá de su secuencia principal y se volverá inestable. Sin embargo, mientras tanto, en las escalas temporales de nuestro interés, el sol representa una fuente de energía inmutable y, de hecho, inagotable: día tras día, año tras año, está y estará siempre allí, igual a sí mismo."
                            imageCard = "benefisit-img2"
                        />
                        <Card
                            title = "3. Se combina muy bien con las baterías y la red eléctrica"
                            text = "Las plantas fotovoltaicas producen energía sobre todo en las horas centrales del día, pero gracias a sistemas de almacenamiento más eficientes, con mayor capacidad y fiabilidad, se pueden gestionar mejor las diferencias entre la demanda energética y la oferta natural del sol."
                            imageCard = "benefisit-img3"
                        />
                    </div>
                </div>
            </section>
            <section id="inmage-phrase-section">
                <div>
                    <ImagePhrase 
                        textBlue = 'La energía solar es una alternativa sostenible y accesible que nos permite aprovechar '
                        text = 'la energía del sol para satisfacer nuestras necesidades energéticas de manera limpia y renovable'
                    />
                </div>
            </section>
            <section id="section-panel">
                    <PanelPhrase />
            </section>
        </div>
    );
}