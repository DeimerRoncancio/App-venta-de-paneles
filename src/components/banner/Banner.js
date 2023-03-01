import './banner.css';

export function Banner({primaryColor,secundaryColor,image,text})
{
    // window.addEventListener('scroll',()=>
    // {
    //     const banner = document.querySelector('.responsive-banner');
    //     const bannerTop = banner.getBoundingClientRect().top;
    //     const windowSize = window.innerHeight/1;

    //     if(bannerTop <= windowSize)
    //     {
    //         banner.style.animation = `up 1s forwards cubic-bezier(0.46, 0.42, 0, 0.96)`;
    //     }
    // });

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
                    <svg class="cirle-a floating-elements" height="160" width="160">
                        <circle cx="80" cy="80" r="80"/>
                    </svg>
                    <svg class="cirle-b floating-elements" height="60" width="60">
                        <circle cx="30" cy="30" r="30"/>
                    </svg>
                    
                    <svg class="cirle-d floating-elements" height="60" width="60">
                        <circle cx="30" cy="30" r="30">
                            <h2>drhd</h2>
                        </circle>
                    </svg>
                    <img className='floating-elements'/>
                    <div className="col-xs-12">
                        <p>{text}</p>
                        <a target="_blank" href="https://www.solit.com/" className="more-link">Cotiza</a>
                    </div>
                </div>
            </div>
        </div>

        
    );
}