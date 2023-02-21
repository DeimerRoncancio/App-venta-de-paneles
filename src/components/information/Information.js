import './information.css'

export function Information(props)
{
    return(
        <a className='information-container' href={props.link} target='_blank'>
            <img className="icon" src={require(`../../sources/${props.icon}.png`)}/>
            <p>{props.date}</p>
        </a>
    );
}
