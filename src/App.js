import './App.css';
import { Botton } from './components/botton/Botton';
import { Information } from './components/information/Information';
import { Banner } from './components/banner/Banner';
import { Card } from './components/cards/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="display-div">
        <div className="main-div">
            <nav>
                <div className="div-navigator">
                    <div className="principal-info">
                        <div className="dates">
                            <Information 
                                link = ''
                                icon = 'telefono'
                                date = "+57 3106261499"
                            />
                            <Information 
                                link = 'https://www.google.com/maps/place/Villavicencio,+Meta/@4.1249257,-73.6791014,23570m/data=!3m2!1e3!4b1!4m5!3m4!1s0x8e3e2ddfba283211:0x537e40041d7b20c2!8m2!3d4.1491793!4d-73.6285472'
                                icon = "ubicacion"
                                date = "Villavicencio / Meta"
                            />
                        </div>
                        <div className="principal-info">
                                <Information
                                    link = 'https://www.facebook.com'
                                    icon = 'facebook'
                                    date = 'Facebook'
                                />
                                <Information
                                    link = 'https://www.youtube.com'
                                    icon = 'youtube'
                                    date = 'Youtube'
                                />
                        </div>
                    </div>
                     <div className="navBar">
                        <Botton 
                            imageBotton = 'inicio'
                        />
                        <Botton 
                            imageBotton = 'productos'
                        />
                        <Botton 
                            imageBotton = 'servicios'
                        />
                        <Botton 
                            imageBotton = 'contactenos'
                        />
                    </div>
                </div>
            </nav>
            <div className="container-energy-solar"></div>
            <div className='benefisits d-flex'>
                <div className='container-title content d-flex'>
                    <h1>BENEFICIOS</h1>
                </div>
                <div className='container d-flex'>
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
            <div className='div-container'>
                <div className='container-phrase'>
                    <p >"<b>Elon musk una vez dijo, comprare Twitter</b>, dicho y hecho, ahora es dueño de esa madre :V."</p>
                </div>
            </div>
            <div className="products">
                <div className='title'>
                    <h1>PRODUCTOS</h1>
                </div>
                <div className='banners-container'>
                    <Banner/>
                    <Banner/>
                    <Banner/>
                </div>
                <div className='link'>
                    <div class="link-container">
                        <a target="_blank" href="https://www.solit.com.co/" class="more-link">Visita nuestro
                        Website y encuentra la solución que necesita</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
