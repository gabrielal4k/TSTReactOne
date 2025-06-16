import { useState } from "react";


export default function Form(){

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");
    // function handleChange(event) {
    //     // console.log(event.target.value);
    //     setName(event.target.value);
    // }

    function handleChange2(event) {
        // console.log(event.target.value);
        setEmail(event.target.value);
    }

    return (
        <div>
            <form >
                <input onChange={ (e) => setName(e.target.value)} type="text" value={name} />
                &nbsp;
                <br />
                <br />
                <input onChange={ handleChange2} type="text" value={email} />
            </form>
        </div>
    );

}