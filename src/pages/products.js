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
                    <div className='banners-container'>
                        <Banner 
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'producto'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="red"
                            secundaryColor='blue'
                            image = 'benefisit-img2'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img3'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img2'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img2'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img1'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
                        />
                        <Banner
                            primaryColor="#007881"
                            secundaryColor='#002c23'
                            image = 'benefisit-img3'
                            text= 'Visita nuestro Website y encuentre la solución que necesita'
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