import './botton.css';

export function Botton({imageBotton,changeStyle})
{
    // const button = document.querySelector('.botton');

    // if(changeStyle)
    // {
    //     button.classList.add('other-color');
    // }
    // else
    // {
    //     button.classList.remove('other-color');
    // }

    return(
        <div className='botton-container'>
            <botton className="botton">
                <img className="imgBotton" src={require(`../../sources/${imageBotton}.png`)}/>
            </botton>
        </div>
    )
}
