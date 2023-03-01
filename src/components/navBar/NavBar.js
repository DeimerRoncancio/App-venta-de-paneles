import { Link, Outlet } from 'react-router-dom'
import { Botton } from '../botton/Botton';
import { Information } from '../information/Information';
import './navBar.css'

export default function NavBar()
{
    return(
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
                        <div className="social-networks">
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
                        <div className='logo-container'>
                            <a href="/">
                                <img className="imgLogo" src={require(`../../sources/image-logo.png`)}/>
                            </a>
                        </div>
                        <div className='link-menu'>
                            <Link to="/">
                                <Botton 
                                    imageBotton = 'inicio'
                                />
                            </Link>
                            <Link to="/products">
                                <Botton 
                                    imageBotton = 'productos'
                                />
                            </Link>
                            <Link to="/">
                                <Botton 
                                    imageBotton = 'servicios'
                                />
                            </Link>
                            <Link to="/contact">
                                <Botton 
                                    imageBotton = 'contactenos'
                                />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
        
    )
}