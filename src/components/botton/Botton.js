import './botton.css'

export function Botton(props)
{
    return(
        <botton className="botton">
                <img className="imgBotton" src={require(`../../sources/${props.imageBotton}.png`)}/>
        </botton>
    )
}