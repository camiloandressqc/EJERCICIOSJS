import React, {useState, useContext} from "react";
// import { Children } from "react";

// Creamos 2 contextos
const userContext = React.createContext();
const userToggleContext = React.createContext();

// Creamos y exportamos 2 Hooks a los demás childrens
export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext(){
    return useContext(userToggleContext);
}

// Creamos una función que va a proveer la información
export function UserProvider({children}){

    const [user, setUser] = useState(null);

    const cambiarLogin = () => {
        if(user){
          setUser(null);
        }else{
          setUser({
            name: 'Alejandro',
            email: 'alejo@hotmail.com'
          });
        }
      }

    return(

        // Pasamos los providers a los demás componentes
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiarLogin}>
                {children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}