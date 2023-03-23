const Update = ({put}) => {
    return(
        <div className='update'>
            <h1>Notes</h1>
            <button className='update-btn' onClick={() => put()}>&#x21bb;</button>
        </div>
    );
}

export default Update;