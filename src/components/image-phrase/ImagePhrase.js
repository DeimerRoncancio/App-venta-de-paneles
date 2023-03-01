import './image-phrase.css';

export function ImagePhrase(props)
{
    window.addEventListener("scroll",()=>
    {
        let animation = document.querySelector(".text");
        let topObject = animation.getBoundingClientRect().top;
        let windowSize = window.innerHeight/0.9;
        
        if(topObject <= windowSize)
        {
            animation.style.animation = "aparecer 1.5s forwards cubic-bezier(0.46, 0.42, 0, 0.96)";
        }
    });

    return(
        <div className='container-image'>
            <div className='container-phrase'>
                <p className="text">"<b>{props.textBlue}</b>{props.text}"</p>
            </div>
        </div>
    );
}