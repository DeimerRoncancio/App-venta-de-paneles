import './information.css'

export function Information(props)
{
    return(
        <div className='information-container'>
            <a className='information' href={props.link} target='_blank'>
                <img className="icon" src={require(`../../sources/${props.icon}.png`)}/>
                <p>{props.date}</p>
            </a>
        </div>
        
    );
}
