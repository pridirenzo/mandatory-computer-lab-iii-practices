import { useState } from "react";


const Login = () =>{

    const [inputValue, setInputValue] = useState(" "); // hook para declarar el valor del estado de mi input, comienza como cadena vacia.

    const inputHandler = (event) => {
        // cuando cambia el input, manejo el evento (OnChange) actualizando el valor del estado, seteandolo con lo que escribi en ese momento
        setInputValue(event.target.value);

        if(event.target.value.includes("o") || event.target.value.includes("O")){
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
        } // si al ingresar texto en mi input tengo la letra O, ya sea minuscula o mayuscula, salta el alerta. (trauma pasado)
         // esto va a seguir saltando hasta q el usuario NO elimine el caracter "O" de su input.
      };

        // funcion creada para ejecutarse una vez que el usuario clickee el boton "Registrarse"
        const buttonHandler = () =>{
            if(inputValue === " " || inputValue.includes("o") || inputValue.includes("O")){
                alert("Usuario inválido para registrarse!");
            }
            else{
                alert("Usuario registrado correctamente!");}
        };
 

    return(
        <>
        <label>Ingrese su usuario: </label>
        <input value={inputValue} onChange={inputHandler} type="text" placeholder="username"></input>
        <br/> <br/> 
        <button  onClick={buttonHandler} id="button" style={{"padding": "5px", "backgroundColor": "green", "color": "white", "cursor": "pointer"}}>Registrarse</button>
        <p>{inputValue}</p>
        </> 
        
    )
};


export default Login;