const Form = ({input, onSubmit, onInput}) => {
    return(
        <>
            <form onSubmit={e => onSubmit(e)}>
                <label>
                    <div>New note</div>
                    <textarea value={input} onChange={e => onInput(e)} />
                </label>
                <button className='send'>&#9658;</button>
            </form>
        </>
    );
}

export default Form;