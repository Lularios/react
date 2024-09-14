import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { usuario } from '../Services/Users';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [valor, setValor] = useState ({
    email: "",
    password: "",
    });

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setValor({
            ...valor,
            [name]: value,
        });
    };
    
    const handleForm = (e) =>{
        const userId = usuario(valor);
        e.preventDefault();
        console.log(valor);
    };
    
    const navigate = useNavigate();

  return (
    <div classname="mt-2 mb-2">
    <Form  onSubmit={handleForm}>
       <Form.Group className="mt-4 mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input name="email" value={valor.email} type="email" placeholder="Ingrese email" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mt-2 mb-4" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <input name="password" value={valor.password} type="password" placeholder="Ingrese su contraseña" onChange={handleOnChange} required/>
        </Form.Group>
        <Button variant="dark" type="submit" onClick={()=> {navigate('/')}}>Enviar</Button>
    </Form>
    </div>
  );

};

export default Login;