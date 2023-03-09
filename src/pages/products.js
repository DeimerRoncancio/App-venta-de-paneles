import { Banner } from '../components/banner/Banner';
import { AiFillCaretRight } from "react-icons/ai";

export function Products()
{
    return(
        <div>
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-products" >
                        <div className='title'>
                            <h1>PRODUCTOS</h1>
                            <p>En nuestra sección de venta de paneles solares encontrarás una amplia gama de opciones diseñadas para brindar una solución energética sustentable y de calidad para tu hogar o negocio.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="products-section">
                <div className="all-products">
                    <div className='names-menu'>
                        <ul>
                            <il>
                                <a href='#solars-panels'>
                                    <AiFillCaretRight /><p>Paneles solares</p>
                                </a>
                            </il>
                            <il>
                                <a href='#inversors'>
                                    <AiFillCaretRight /><p>Inversores</p>
                                </a>
                            </il>
                            <il>
                                <a href='#batteries'>
                                    <AiFillCaretRight /><p>Baterias</p>
                                </a>
                            </il>
                            <il>
                                <a href='#control-charge'>
                                    <AiFillCaretRight /><p>Controladores de carga</p>
                                </a>
                            </il>
                            <il>
                                <a href='#solar-refrigerators'>
                                    <AiFillCaretRight /><p>Refrigeradores solares</p>
                                </a>
                            </il>
                            <il>
                                <a href='#solar-bomb'>
                                    <AiFillCaretRight /><p>Bombas solares</p>
                                </a>
                            </il>
                            <il>
                                <a href='#water-hot'>
                                    <AiFillCaretRight /><p>Calentadores de agua solares</p>
                                </a>
                            </il>
                            <il>
                                <a href='#solar-air-conditioning'>
                                    <AiFillCaretRight /><p>Aire acondicionado solar</p>
                                </a>
                            </il>
                            <il>
                                <a href='#pool-heating'>
                                    <AiFillCaretRight /><p>Calefacción de piscinas</p>
                                </a>
                            </il>
                            <il>
                                <a href='#sun-fence'>
                                    <AiFillCaretRight /><p>Cercas solares</p>
                                </a>
                            </il>
                            <il>
                                <a href='#wind-turbine'>
                                    <AiFillCaretRight /><p>Aerogeneradores</p>
                                </a>
                            </il>
                            <il>
                                <a href='#solar-purifiers'>
                                    <AiFillCaretRight /><p>Purificadores de agua solares</p>
                                </a>
                            </il>
                        </ul>
                    </div>
                    <div className='products'>
                        <div className='sub-title' id='solars-panels'>
                            <h2>Paneles Solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner 
                                primaryColor = "#80b7d4"
                                secundaryColor = '#ccd3d6'
                                image = 'trina-solar-1.png'
                                text = 'Paneles solares Trina Solar'
                                icon = 'trina-solar'
                            />
                            <Banner 
                                primaryColor ="#e07880"
                                secundaryColor ='#dbcfd0'
                                image = 'longi-1.png'
                                text = 'Paneles solares Longi'
                                icon = 'longi'
                            />
                        </div>
                        <div className='sub-title' id='inversors'>
                            <h2>Inversores</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor ="#8eb46d"
                                secundaryColor ='#aeb1ab'
                                image = 'growatt-1.png'
                                text= 'Inversores Growatt'
                                icon = 'growatt'
                            />
                            <Banner
                                primaryColor ="#c96560"
                                secundaryColor ='#ccb9b8'
                                image = 'must-2.png'
                                text = 'Inversores Must'
                                icon = 'must'
                            />
                        </div>
                        <div className='sub-title' id='batteries'>
                            <h2>Baterias</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#616a86"
                                secundaryColor='#aeb0b8'
                                image = 'sonnen-1.png'
                                text= 'Baterias Sonnen'
                                icon = 'sonnen'
                            />
                            <Banner
                                primaryColor="#717273"
                                secundaryColor='#cccecf'
                                image = 'powerwall-1.png'
                                text= 'Baterias Tesla Powerwall'
                                icon = 'tesla'
                            />
                            <Banner
                                primaryColor="#ac546e"
                                secundaryColor='#e4c1cb'
                                image = 'lg-1.png'
                                text= 'Baterias LG Chem'
                                icon = 'lg'
                            />
                            <Banner
                                primaryColor="#66b3ac"
                                secundaryColor='#c9d6d5'
                                image = 'polyntech-1.png'
                                text= 'Baterias Polyntech'
                                icon = 'polyntech'
                            />
                        </div>
                        <div className='sub-title' id='control-charge'>
                            <h2>Controladores de carga</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#2F77BE"
                                secundaryColor='#c1d1e0'
                                image = 'ampinvt-1.png'
                                text= 'Controladores de carga Ampinvt'
                                icon = 'ampinvt'
                            />
                            <Banner
                                primaryColor="#ebae4e"
                                secundaryColor='#eee7db'
                                image = 'powmr-1.png'
                                text= 'Controladores de carga PowMr'
                                icon = 'powmr'
                            />
                            <Banner
                                primaryColor="#dd646a"
                                secundaryColor='#dacfd0'
                                image = 'srne-1.png'
                                text= 'Controladores de carga SRNE'
                                icon = 'srne'
                            />
                            <Banner
                                primaryColor="#3c83ac"
                                secundaryColor='#c5d1d8'
                                image = 'epever-1.png'
                                text= 'Controladores de carga EPEVER'
                                icon = 'epever'
                            />
                        </div>
                        <div className='sub-title' id='solar-refrigerators'>
                            <h2>Refrigeradores solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#4392c4"
                                secundaryColor='#cbd2d6'
                                image = 'sun-danze-1.png'
                                text= 'Refrigeradores solares Sun Danze'
                                icon = 'sun-danze'
                            />
                        </div>
                        <div className='sub-title' id='solar-bomb'>
                            <h2>Bombas solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#44a3d3"
                                secundaryColor='#cbd2d6'
                                image = 'sihio-1.png'
                                text= 'Bombas solares Sihio'
                                icon = 'sihio'
                            />
                            <Banner
                                primaryColor="#7c8f8a"
                                secundaryColor='#cbd2d6'
                                image = 'taifu-1.png'
                                text= 'Bombas solares Taifu'
                                icon = 'taifu'
                            />
                        </div>
                        <div className='sub-title' id='water-hot'>
                            <h2>Calentadores de agua solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#44a3d3"
                                secundaryColor='#cbd2d6'
                                image = 'enercer-1.png'
                                text= 'Calentadores de agua solares Enercer'
                                icon = 'enercer'
                            />
                            <Banner
                                primaryColor="#f0c163"
                                secundaryColor='#eee6d6'
                                image = 'sunbank-1.png'
                                text= 'Bombas solares Sihio'
                                icon = 'sunbank'
                            />
                        </div>
                        <div className='sub-title' id='solar-air-conditioning'>
                            <h2>Aire acondicionado solar</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#4392c4"
                                secundaryColor='#cbd2d6'
                                image = 'kaysun-1.png'
                                text= 'Aire acondicionado Kaysun'
                                icon = 'kaysun'
                            />
                        </div>
                        <div className='sub-title' id='pool-heating'>
                            <h2>Calefacción de piscinas</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#5778a8"
                                secundaryColor='#bbc6d6'
                                image = 'pentair-1.png'
                                text= 'Aire acondicionado Pentair'
                                icon = 'pentair'
                            />
                        </div>
                        <div className='sub-title' id='sun-fence'>
                            <h2>Cercas solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#b8af11"
                                secundaryColor='#fdfab9'
                                image = 'super-fox-1.png'
                                text= 'Cercas solares Super Fox'
                                icon = 'super-fox'
                            />
                        </div>
                        <div className='sub-title' id='wind-turbine'>
                            <h2>Aerogeneradores</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#182B4A"
                                secundaryColor='#b4c1d4'
                                image = 'tesup-1.png'
                                text= 'Aereogeneradores Tesup'
                                icon = 'tesup'
                            />
                            <Banner
                                primaryColor="#b66b78"
                                secundaryColor='#e0d2d5'
                                image = 'superwind-1.png'
                                text= 'Aereogeneradores Superwind'
                                icon = 'superwind'
                            />
                        </div>
                        <div className='sub-title' id='solar-air-conditioning'>
                            <h2>Aire acondicionado solar</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#4392c4"
                                secundaryColor='#cbd2d6'
                                image = 'kaysun-1.png'
                                text= 'Aire acondicionado Kaysun'
                                icon = 'kaysun'
                            />
                        </div>
                        <div className='sub-title' id='solar-purifiers'>
                            <h2>Purificadores de agua solares</h2>
                        </div>
                        <div className='banners-container'>
                            <Banner
                                primaryColor="#4392c4"
                                secundaryColor='#cbd2d6'
                                image = 'solvatten-1.png'
                                text= 'Purificadores de agua solares Solvatten'
                                icon = 'solvatten'
                            />
                        </div>
                        <div className='link'>
                            <div className="link-container">
                                <a target="_blank" href="https://www.solit.com.co/" className="more-link link">Visita nuestro
                                Website y encuentra la solución que necesita</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

    
}