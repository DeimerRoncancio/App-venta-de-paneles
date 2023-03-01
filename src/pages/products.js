import { Banner } from '../components/banner/Banner';

export function Products()
{
    return(
        <div>
            <section id="presentation-section">
                <div className='presentation-container'>
                    <div className="container-products" ></div>
                </div>
            </section>
            <section id="products-section">
                <div className="products">
                    <div className='title'>
                        <h1>PRODUCTOS</h1>
                    </div>
                    <h2>Paneles Solares</h2>
                    <div className='banners-container'>
                        <Banner 
                            primaryColor="#038ED8"
                            secundaryColor='#033b5a'
                            image = 'paneles-solares-trina.png'
                            text= 'Paneles solares Trina Solar'
                        />
                        <Banner
                            primaryColor="#E60012"
                            secundaryColor='#580108'
                            image = 'paneles-solares-longi.png'
                            text= 'Paneles Solares Longi'
                        />
                    </div>
                    <h2>Inversores</h2>
                    <div className='banners-container'>
                        <Banner
                            primaryColor="#6EB92B"
                            secundaryColor='#233a0e'
                            image = 'inversores-growatt.png'
                            text= 'Inversores Growatt'
                        />
                    </div>
                    <div className='link'>
                        <div className="link-container">
                            <a target="_blank" href="https://www.solit.com.co/" className="more-link link">Visita nuestro
                            Website y encuentra la solución que necesita</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}