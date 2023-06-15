// Importamos el contexto desde la función principal
import { useUserContext, useUserToggleContext } from "../userProviders/userProviders";

const Hijo = () =>{

    const user = useUserContext();
    const cambiarLogin = useUserToggleContext();

    return(
        <>
            <h2>Componente</h2>
            {user && <p>Hola {user.name} - {user.email} </p>}
            <button onClick={cambiarLogin} > Login/DesLogueo </button>
        </>
    )
}

export default Hijo