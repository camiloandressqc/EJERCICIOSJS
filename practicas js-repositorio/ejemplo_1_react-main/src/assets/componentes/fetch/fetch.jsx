import styles from './fetch.module.css'
import { useState, useEffect } from 'react'

function CosumoApi(){

    // Data State
    const [data, setData] = useState(null);

    // Uso del Fetch
    useEffect(()=> {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setData(data));
    },[]);


    return(
        <>

            <h1> Haciendo Fetching a la API de Empleados </h1>
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

        </>
    );

}

export default CosumoApi
