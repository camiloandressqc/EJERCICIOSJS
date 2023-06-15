import './App.css'


// Importamos los Hooks
import { UserProvider } from './assets/userProviders/userProviders';
import Hijo from './assets/componentes/hijo';
import Form from './assets/form/form';


function App() {

  return (
    <>
    {/* Envolvemos la función principal con los datos que vamos a dar como globales. Ej - "user" */}
      <UserProvider>
        <div>
            <Hijo/>
            <Form/>
        </div>
      </UserProvider>
    </>
  );
}

export default App
