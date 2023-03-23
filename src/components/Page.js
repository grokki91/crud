import { useEffect, useState } from "react";
import Card from "./Card";
import Form from "./Form";
import Update from "./Update";

const Page = () => {
    const [data, setData] = useState('');
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    // useEffect(() => {
    //     if (data) {
    //     fetchData();
    // }
    // }, [data])

    const fetchData = () => {
        fetch('http://localhost:7070/notes')
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => console.log(error));
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        let id = 1;
        e.preventDefault();
        const newData = {
            id: id++,
            content: input
        }
        if (input) {
            fetch('http://localhost:7070/notes', {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(newData)
            }).then(response => response.json()).then(data => {
                setData([...data, newData])
            }) 
    
            setInput('');
        }
    }

    const handleRemove = (id) => {
        fetch(`http://localhost:7070/notes/${id}`, {
                method: 'DELETE',
            })
    }

    return(
        <> 
            <Update put={fetchData}/>
            <div className="cards">
                {
                    data ? data.map((el) => {
                        return(
                            <Card data={el} key={el.id} remove={handleRemove}/> 
                        )
                    }) :
                    <div>'Loading...'</div>
                }
            </div>
            <Form onSubmit={handleSubmit} onInput={handleInput} input={input}/>
        </>
    );
}

export default Page;