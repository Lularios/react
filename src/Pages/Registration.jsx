import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import newUser from '../Services/Users';

const Registro = () => {
    const [values, setValues] = useState ({
    name: "",
    lastName: "",
    email: "",
    password: "",
    });

    const handleOnChange = (e) =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleForm = (e) =>{
        const user = newUser(values);
        e.preventDefault();
        console.log(values)
    };

    return (
    <div className= "mt-2 mb-2 container">
    <Form onSubmit={handleForm}>
        <Form.Group className="mt-4 mb-2" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <input name="name" value={values.name} type="text" placeholder="Ingrese su nombre" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mt-4 mb-2"controlId="formBasicLastName">
            <Form.Label>Apellido</Form.Label>
            <input name="lastName"  value={values.lastName} type="text" placeholder="Ingrese su apellido" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mt-4 mb-2" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <input name="email" value={values.email} type="email" placeholder="Ingrese email" onChange={handleOnChange} required/>

        </Form.Group>
        <Form.Group className="mt-4 mb-2" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <input name="password" value={values.password} type="password" placeholder="Ingrese su contraseña" onChange={handleOnChange} required/>
        </Form.Group>
        <Button className="mt-3" variant="dark" type="submit">Enviar</Button>
    </Form>
    </div>
  );
}

export default Registro;
  
