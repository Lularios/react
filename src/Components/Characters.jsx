import { useEffect,useState } from "react";
import getCharacters from "../Services/Characters.js";
import Character from "./Character.jsx";


//lo de la info y set Info es para setear la paginación
function Characters (){
    const [personajes, setPersonajes] = useState ([]);    
  
    useEffect(() => {
        const request = async () => {
            try{
            const res = await getCharacters();
            setPersonajes(res.results);
            console.log(res.results)
            }catch(error){console.log(error)}
    };

    request ();
    },[]);

    return(   
        <div className="row">
        {personajes.map((personaje) => ( <Character
            key={personaje.id}
            name={personaje.name}
            image={personaje.image}
            id={personaje.id}
            />))}
        </div>

    )
};

export default Characters;