import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from 'react-router-dom';


function Character ({ id, name, image}){
    useEffect(
        ()=>{
        },[{}]
    );
    return(
        <div className="col mb-2 text-center text-uppercase">
            <div className="card m-3">
            <h3 className="mb-2 mt-2">{name}</h3>
            <img src={image} />
            <Button variant="success"> <Link className="text-white text-uppercase" to={`/character/${id}`} style={{ textDecoration: 'none' }} >Más info</Link> </Button>
            </div>
        </div>
    )
};

export default Character;