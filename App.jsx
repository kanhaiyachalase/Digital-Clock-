import react, { useState } from "react";


const App = () => {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }
    

    return (
        <>

            <h1>{ctime}</h1>
            <br></br>
            <button onClick={UpdateTime} >get Time</button>

        </>
    );
}

export default App;