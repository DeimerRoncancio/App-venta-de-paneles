import './banner.css';

export function Banner(props)
{
    return(
        <div className="banners">
            <div class="responsive-banner first">
                <div class="container-envelope">
                    <svg class="cirle-a floating-elements" height="160" width="160">
                        <circle cx="80" cy="80" r="80"/>
                    </svg>
                    <svg class="cirle-b floating-elements" height="60" width="60">
                        <circle cx="30" cy="30" r="30"/>
                    </svg>
                    <svg class="cirle-c floating-elements" height="600" width="600">
                        <circle cx="300" cy="300" r="300"/>
                    </svg>
                    <svg class="cirle-d floating-elements" height="60" width="60">
                        <circle cx="30" cy="30" r="30"/>
                    </svg>
                    <img className='floating-elements'/>
                    <div class="col-xs-12">
                        <p>Visita nuestro Website y encuentra la solución que necesita</p>
                        <a target="_blank" href="https://www.solit.com/" class="more-link">Cotiza</a>
                    </div>
                </div>
            </div>
        </div>
    );
}