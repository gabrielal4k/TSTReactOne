import { useState } from "react";


export default function Form(){

    const [name, setName] = useState({firstName: "", lastName: ""});


    function handleSubmit(e){
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <form >
                <input 
                onChange={ (e) => setName({...name, firstName: e.target.value})} 
                type="text" 
                value={name.firstName} />
                &nbsp;
                <br />
                <br />
                <input 
                onChange={ (e) => setName({...name, lastName: e.target.value})} 
                type="text" 
                value={name.lastName} />
                
                <h1>{name.firstName} {name.lastName}</h1>
                {/* <input onChange={ handleChange2} type="text" value={email} /> */}

                <button onClick={(e) => handleSubmit(e)} >Add</button>
            </form>
        </div>
    );

}