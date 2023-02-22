import './image-phrase.css';

export function ImagePhrase(props)
{
    window.addEventListener("scroll",()=>
    {
        let animation = document.querySelector(".text");
        let topObject = animation.getBoundingClientRect().top;
        let windowSize = window.innerHeight/1;
        
        if(topObject <= windowSize)
        {
            animation.style.animation = "anim 1s ease-in-out";
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