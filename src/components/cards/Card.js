import './card.css';

export function Card(props)
{
    return(
        <div className="container container-card">
            <div className="card rounded-0 card-item">
                <div className='overflow'>
                    <img src={require(`../../sources/${props.imageCard}.jpg`)} />
                </div>
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className='card-text'>
                        {props.text}
                    </p>
                </div>
            </div>
        </div>
    );
}