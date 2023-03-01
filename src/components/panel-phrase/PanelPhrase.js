import './panelPhrase.css'

export function PanelPhrase()
{
    window.addEventListener("scroll",()=>
    {
        let phraseAnimation = document.querySelector(".phrase");
        let imageAnimation = document.querySelector(".image");
        let topObject = phraseAnimation.getBoundingClientRect().top;
        let windowSize = window.innerHeight/0.8;
        
        if(topObject <= windowSize)
        {
            phraseAnimation.style.animation = "animation 1.5s forwards cubic-bezier(0.46, 0.42, 0, 0.96)";
            imageAnimation.style.animation = "animation2 1.5s forwards cubic-bezier(0.46, 0.42, 0, 0.96)";
        }
    });

    return (
        <div className='container-panel'>
            <img className='image' src={require('../../sources/panel-background.png')}/>
            <p className='phrase'>
                "Los paneles solares no solo son una tecnología, son un recordatorio 
                de que podemos encontrar soluciones innovadoras y naturales para nuestros 
                desafíos energéticos, si miramos hacia el sol y seguimos su ejemplo 
                de constancia y generosidad".
            </p>
        </div>
    );
}