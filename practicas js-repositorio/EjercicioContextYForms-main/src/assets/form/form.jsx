import { useState } from "react";

const Form = ()=> {

    const [values, setValues] = useState({

        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
    });

    
    const handleInputChange = (event) => {

        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value,
        });

    }

    
    const handleForm = (event) => {

        event.preventDefault();
        console.log(values);

    }




    return(
        <div>
            <form onSubmit={handleForm}>
                <h1>Form</h1>

                <input
                 type="text"
                 name="name"
                 value={values.name}
                 placeholder="Ingrese su nombre de usuario"
                 onChange={handleInputChange}
                 />
                 <br />


                 <input
                 type="email"
                 name="email"
                 value={values.email}
                 placeholder="Ingrese su email"
                 onChange={handleInputChange}
                 />
                <br />


                <input
                 type="number"
                 name="phone"
                 value={values.phone}
                 placeholder="Ingrese su número de teléfono"
                 onChange={handleInputChange}
                 />
                <br />

                <input
                 type="text"
                 name="address"
                 value={values.address}
                 placeholder="Ingrese su dirección"
                 onChange={handleInputChange}
                 />
                <br />

                <input
                 type="password"
                 name="password"
                 value={values.password}
                 placeholder="Ingrese su contraseña"
                 onChange={handleInputChange}
                 />

                <button type="submit"> Enviar Info </button>

            </form>
        </div>
    );
}

export default Form;