const Card = ({data, remove}) => {
    return(
        <div className='card'>
            <div className='output'>{data.content}</div>
            <button className='close' onClick={() => remove(data.id)}>X</button>
        </div>
    );
}

export default Card;