import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Users =()=>{

    // Instanciando una varibable e inicializando el estado a un arreglo vacio
    const [data, setData ] = useState([]);


    // Función para conectarse con la API y halar la información
    // OJO* Las funaciones que usen el "fetch", deben llevar una función "async" y mínimo 1 "await"
    const fetchUsers = async()=>{


        const result = await fetch('http://api.github.com/users');
        const data = await result.json();
        
        console.log(data);

        setData (data);

    }


    // useEffect al renderizar por primera vez, ejecuta la función "fetchUsers" y la muestra en la aplicación
    useEffect(() =>{
        fetchUsers();
    },[])


    return(
        // <div>
        //    {data.map((persona, idx) => (
        //         <h2 key={`persona-${idx}`}>{persona.login} </h2>
        //         // <img key={`persona-${idx}`} src={persona.avatar_url} alt="" />
        //    ))}

        // </div>


        <div>
            {data.map((persona, idx) => (
                <Link key={`persona-${idx}`} to={`/Users/${idx}`}>
                    <h2 key={`persona-${idx}`}>{persona.login} </h2>
                </Link>
        ))}

        </div>


    );
}

