import './botton.css';

export function Botton(props)
{
    return(
        <div className='botton-container'>
            <botton className="botton">
                <img className="imgBotton" src={require(`../../sources/${props.imageBotton}.png`)}/>
            </botton>
        </div>
    )
}
