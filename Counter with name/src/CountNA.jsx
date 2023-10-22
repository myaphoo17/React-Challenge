import { useState } from "react";

function CountNA() {
    const [name, setName] = useState()
    const [age, setAge] = useState(0)


    return (<div>

        <input type='text' value={name} onChange={a => setName(a.target.value)} />
        < br />
        < br />
        <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
        <h1>{age}</h1>
        <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>

        <h1>My name is {name} and I am {age} years old</h1>



    </div>)
}
export default CountNA