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
                                <a href='#solars-panels'>
                                    <AiFillCaretRight /><p>Paneles solares</p>
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