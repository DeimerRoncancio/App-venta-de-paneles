import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { Botton } from '../botton/Botton';
import { Information } from '../information/Information';
import './navBar.css'

export default function NavBar()
{
    const [changeColorButton,changeColorButtonFunct] = useState(false);
    const [changeColorButton2,changeColorButtonFunct2] = useState(false);
    const [changeColorButton3,changeColorButtonFunct3] = useState(false);
    const [changeColorButton4,changeColorButtonFunct4] = useState(false);
    const [changeColorButton5,changeColorButtonFunct5] = useState(false);

    window.addEventListener('scroll',()=>
    {
        const navBar = document.querySelector('.navBar');
        const topNavBar = navBar.getBoundingClientRect().top;
        
        if(topNavBar == 0)
        {
            navBar.classList.add('navBarIsDown');
            // changeColorButtonFunct(true);
            // changeColorButtonFunct2(true);
            // changeColorButtonFunct3(true);
            // changeColorButtonFunct4(true);
            // changeColorButtonFunct5(true);
        }
        else
        {
            navBar.classList.remove('navBarIsDown');
            // changeColorButtonFunct(false);
            // changeColorButtonFunct2(false);
            // changeColorButtonFunct3(false);
            // changeColorButtonFunct4(false);
            // changeColorButtonFunct5(false);
        }
    });

    return(
        <div className="main-div">
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
            <nav>
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
                                // changeStyle = {changeColorButton}
                            />
                        </Link>
                        <Link to="/products">
                            <Botton 
                                imageBotton = 'productos'
                                // changeStyle = {changeColorButton2}
                            />
                        </Link>
                        <Link to="/services">
                            <Botton 
                                imageBotton = 'servicios'
                                // changeStyle = {changeColorButton3}
                            />
                        </Link>
                        <Link to="/blog">
                            <Botton 
                                imageBotton = 'blog'
                                // changeStyle = {changeColorButton4}
                            />
                        </Link>
                        <Link to="/contact">
                            <Botton 
                                imageBotton = 'contactenos'
                                // changeStyle = {changeColorButton5}
                            />
                        </Link>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
        
    )
}