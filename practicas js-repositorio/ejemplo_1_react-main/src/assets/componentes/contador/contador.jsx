import React, {useState, useEffect} from "react";

function Contador(){

    // Creamos la variable y el estado
    const [count, setCount] = useState(0);
    const [ejem, setEjem] = useState(0);

    // DidUpdate
    const accion = () =>{
        setEjem(ejem+1);
    }
    // Uso Correcto del useEffect
    // Llamado de dependencias - Valores que cambian
    // DidMount - Con llaves vacias
    // DidUpgrade - Con contenido en las llaves
    // WillUnmount - Con return dentro del useEffect
        // return () => { console.log('Cleanup'); }
    useEffect(() => {
        setCount(count+1);
    },[ejem])

    return(
        <>
            <h1> Contador: {count}</h1>
            <h2> Detonador: {ejem}</h2>
            <button onClick={accion}>Acción</button>
        </>
    )

}

export default Contador;