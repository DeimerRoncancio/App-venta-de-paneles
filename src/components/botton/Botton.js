import './botton.css';

export function Botton({imageBotton,changeStyle})
{
    return(
        <div className='botton-container'>
            <botton className="botton">
                <img className="imgBotton" src={require(`../../sources/${imageBotton}.png`)}/>
            </botton>
        </div>
    )
}
