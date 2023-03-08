import './banner.css';

export function Banner({primaryColor,secundaryColor,image,text,icon})
{
    window.addEventListener('scroll',()=>
    {
        const banner = document.querySelector('.responsive-banner');
        const bannerTop = banner.getBoundingClientRect().top;
        const windowSize = window.innerHeight;  
        if(bannerTop <= windowSize)
        {
            banner.style.animation = `up 1s forwards cubic-bezier(0.46, 0.42, 0, 0.96)`;
        }
    });

    return(
        <div className="banners">
            <div 
            className="responsive-banner" 
            style={{backgroundImage: `linear-gradient(to bottom right, ${primaryColor}, ${secundaryColor})`}}
            >
                <div className='container-circle'>
                    <div className='aux-container'>
                        <img src={require(`../../sources/${image}`)} />
                    </div>
                </div>
                <div className="container-envelope">
                    <img src={require(`../../sources/logos/${icon}-logo.png`)} className='icons'/>
                    <div className="col-xs-12">
                        <h4>{text}</h4>
                        <p>Unidades</p>
                        <a target="_blank" href="https://www.solit.com/" className="more-link">Cotiza</a>
                    </div>
                </div>
            </div>
        </div>
    );
}